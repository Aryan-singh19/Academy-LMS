# Part V — The back end {.part}

Serverless functions, the database, sign-in, uploads, moderation and security.

# 21. Serverless functions

::: {.callout data-title="In plain terms"}
When you save progress, post a comment or sign in, your browser sends a short request to a small program running on Vercel. That program checks who you are, stores or fetches the data from the Neon database, and replies. Your password is never involved: Google confirms your identity, and the site keeps only a random session key, stored in a form that cannot be reused even if the database were exposed.
:::


## How a request is handled

On Vercel, `api/profile.js` becomes `/api/profile`. Each file exports one `async function handler(req, res)`. Locally and in Docker, `server.js` maps `/api/:route` to the same exported handlers, so the code runs unchanged in both places. Express parses JSON bodies up to 15 MB.

![What happens to every request.](../figures/request-lifecycle.svg)

Every handler follows the same order:

1. `allowMethods(req, res, ['GET', 'POST'])` returns `405` for anything else.
2. `applyRateLimit(req, res, { scope, limit, windowMs })` returns `429` when a client exceeds its budget.
3. `getSql()` returns the Neon driver or the mock store.
4. Identity: `getStudentFromSession(req, sql)` for signed-in students, or the `deviceId` in the request for guests; banned students and devices are rejected (`assertStudentAllowed`).
5. Queries run as tagged templates, `` sql`… ${value} …` ``, so every value is a bound parameter.
6. `sendJson(res, status, body)` replies.

## Routes

| Route | Methods | Purpose | Rate limit (per minute) |
|---|---|---|---|
| `/api/app-config` | GET | Google client ID; whether Blob uploads are enabled | — |
| `/api/auth-google` | POST | Verify Google ID token, create or update the student, merge guest data, create session | 20 |
| `/api/auth-session` | GET | Return the signed-in student, if any | 80 |
| `/api/auth-logout` | POST | Delete session, clear cookie | 30 |
| `/api/profile` | GET, POST | Read profile and stats; save profile and synced state | 90 GET / 45 POST |
| `/api/topic-comments` | GET, POST | Comments on a topic; counts | 120 / 60 |
| `/api/lecture-chat` | GET, POST | Lecture-room messages and presence, local and global scopes | 120 / 90 |
| `/api/messages` | GET, POST | Direct messages between connected students | 90 / 40 |
| `/api/social` | GET, POST | Connections: request, accept, reject, cancel, disconnect | 100 / 40 |
| `/api/blob-upload` | POST | Issue Blob upload tokens; record completed uploads; PDF keyword check | 20 |
| `/api/report-user` | POST | Report a student | 15 |
| `/api/admin` | GET, POST | Dashboard data; ban/unban student or device; resolve reports; delete uploads and chat | 60 |

## Rate limiting

`api/_lib/rate-limit.js` keeps a counter per route and per client IP address (from `x-forwarded-for`), each with a count and a reset time. It is per function instance, so on Vercel the limit is approximate. The repository's `vercel-neon-setup.md` notes Redis (for example Upstash) as the upgrade path for exact, shared limits.

# 22. The database

## Connection

```js
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL;
const { neon } = await import('@neondatabase/serverless');
cachedSql = neon(databaseUrl);          // HTTP query function, cached per instance
```

If no URL is set, or the import fails, `createMockSql()` returns an object with the same tagged-template interface backed by in-memory maps, seeded with a few demo students. It recognises the query shapes the functions use by matching the SQL text.

## Schema

The full schema is `docs/academy_schema.sql`. Run it once in the Neon SQL editor; every statement is `IF NOT EXISTS` and safe to re-run. It enables `pgcrypto` (for `gen_random_uuid()`) and a `set_updated_at()` trigger function.

| Table | Purpose | Key columns |
|---|---|---|
| `students` | One row per guest or account | `id` (UUID), `device_id`, `google_sub`, `email`, `display_name`, `auth_provider`, profile fields, `is_banned`, timestamps |
| `student_sessions` | Sign-in sessions | `session_token_hash` (SHA-256), `student_id`, `device_id`, `expires_at`, `revoked_at` |
| `student_preferences` | Per-student settings | `student_id`, JSON |
| `student_topic_progress` | Completed topics | `student_id`, `course_id`, `topic_id`, `completed_at` |
| `exam_drafts` | Long-answer drafts | `student_id`, key, text |
| `quiz_attempts` | Quiz answers | `student_id`, topic, `correct`, time |
| `practice_sessions` | Drill and mock results | `student_id`, mode, score, duration |
| `student_state_snapshots` | Raw synced state | `student_id`, `payload` (JSONB), `synced_at` |
| `topic_comments` | Comments | `topic_id`, `student_id`, text, time |
| `lecture_links`, `lecture_watch_events` | Lecture records and views | — |
| `lecture_presence` | Who is watching | `lecture_key`, scope, `student_id`, `last_seen_at` |
| `lecture_messages` | Lecture-room chat | `lecture_key`, scope, `message_text` |
| `student_connections` | Social graph | `student_id`, `connected_student_id`, status |
| `direct_messages` | Private messages | sender, recipient, text |
| `resource_assets`, `student_uploads` | Files | Blob URL, kind, size, title, auto-check result |
| `student_reports` | Abuse reports | reporter, target, reason, `status` |
| `banned_devices` | Banned guest devices | `device_id` (PK), reason, admin, time |
| `student_profile_summary` | View: per-student counts for the profile page | — |

![The main tables and how they relate to a student.](../figures/er-diagram.svg)

Indexes speed up the most frequent queries: progress by student and course, attempts and sessions by student and time, comments by topic and time, messages by lecture and scope, uploads by student and kind, sessions by student and expiry, reports by target and status.

# 23. Sign-in and sessions

![Sign-in flow.](../figures/auth-flow.svg)

1. **Guest.** `shared.js` creates `deviceId` with `crypto.randomUUID()`. The first sync creates a `students` row for it.
2. **Button.** Google Identity Services is initialised with the client ID from `/api/app-config` and renders the standard button.
3. **Token.** Google returns an ID token (a signed JWT) to the page, which posts it to `/api/auth-google`.
4. **Verify.** `OAuth2Client.verifyIdToken({ idToken, audience: GOOGLE_CLIENT_ID })` checks signature, issuer, expiry and audience. Only the verified contents of the token are used: `sub`, `email`, `name`, `picture`.
5. **Create or update, then merge.** The student is found by `google_sub` (or email). If a different guest row exists for this device, its progress, drafts, attempts, sessions, watch events, presence, chat, comments and connections are moved to the account, removing duplicates and self-connections. Each step has its own `try`, so a missing table in an older database cannot abort the merge.
6. **Session.** A 32-byte random token is set as the cookie `academy_session` (`HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age` 30 days). The database stores only `sha256(token)`, with an expiry and a revocation time.
7. **Every request.** `getStudentFromSession` reads the cookie, hashes it, and joins the session to the student, checking expiry and bans.
8. **Logout.** `/api/auth-logout` deletes the session row and expires the cookie.

# 24. Uploads

1. The page calls `upload()` from `@vercel/blob/client` with `handleUploadUrl: '/api/blob-upload'`.
2. `onBeforeGenerateToken` on the server requires a signed-in, non-banned student and returns the allowed types: JPEG, PNG and WebP for avatars; PDF, PPT and PPTX for study files. It adds a random suffix and embeds `{ deviceId, studentId, uploadKind, title, … }` in the token payload.
3. The browser uploads directly to Blob storage; the file never passes through the function.
4. `onUploadCompleted` records the file in `student_uploads`. For PDFs it runs the keyword check: it downloads the file, extracts text with `pdf-parse`, and matches a per-subject keyword list (generic list otherwise). A score of 45% or more is tagged *likely correct*, less is *needs review*, and failures are tagged *error*.

The Blob client and server packages must be the same version; a mismatch breaks browser uploads (fixed in PR #2).

# 25. Moderation and the admin dashboard

`/admin` (`admin/index.html`, `admin/admin.js`) shows totals (students, banned devices, open reports, uploads, chat, comments), lists students, reports, uploads, banned devices and recent chat, and offers these actions through `POST /api/admin`:

| Action | Effect |
|---|---|
| `ban-student` / `unban-student` | Set `is_banned` and record or clear the device in `banned_devices` |
| `ban-device` / `unban-device` | Ban a guest device directly |
| `resolve-report` / `dismiss-report` | Close a report |
| `delete-upload` | Remove an upload record |
| `delete-chat` | Remove a lecture message |

## Admin authentication (v2.2.1)

`authenticateAdmin` allows access in two ways:

1. **Google session.** The signed-in student's email is in the admin set: the built-in list in `api/_lib/admin-auth.js` plus `ADMIN_EMAILS`.
2. **Shared secret.** The `x-admin-secret` header matches `ADMIN_SECRET`, compared with `crypto.timingSafeEqual`. The secret is enabled only if `ADMIN_SECRET` has at least 12 characters. When no database is configured (mock store), the development secret `admin123` is accepted. The secret is never read from the URL.

Before 2.2.1, the literal strings `admin123` and `admin` were accepted even in production, and the secret could be passed as `?secret=`. **Any deployment older than 2.2.1 should set a strong `ADMIN_SECRET` and redeploy.**

# 26. Security and privacy summary

| Area | Measure |
|---|---|
| SQL injection | All queries are tagged templates with bound parameters |
| Sessions | Random 256-bit tokens; HttpOnly, Secure, SameSite=Lax; only hashes stored |
| Sign-in | Google ID tokens verified server-side for this client ID; no passwords; no extra scopes |
| XSS | User text is escaped with `escapeHtml` / `escapeForAttribute` before insertion; generated content contains no user input |
| Uploads | Signed-in only; type allowlist; random names; direct-to-Blob |
| Abuse | Rate limits per route; reports; student and device bans |
| Admin | Google allowlist or a strong header secret (constant-time compare) |
| Privacy | No ads or trackers; guest mode needs no data; YouTube in privacy-enhanced mode; full policy in `PRIVACY.md` |
| Android | No cleartext HTTP; only Internet and network-state permissions |

Known gaps worth closing: rate limits are per instance, the admin email list is in source code (move entirely to `ADMIN_EMAILS`), and there is no Content-Security-Policy header.
