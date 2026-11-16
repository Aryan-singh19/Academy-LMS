# Part III — Going online {.part}

What changed when the study desk gained a server, a database and other people.

# 8. Neon and serverless functions

## Why a database at all

For the first few hours the site needed no server. Everything a student did was saved in their own browser, and that was the point. Three requests changed that within a day. Classmates wanted their progress on both the phone and the lab computer. They wanted to see each other: who else was studying a topic, and what they thought of it. And I wanted a way to collect notes and assignments from other students without asking them to email me files.

All three needed a shared place to store data, and the commit "Add Neon-backed student community features" on 13 May added one. The choice of Neon came from the hosting. The site was already deployed on Vercel as a static site, and Vercel runs any JavaScript file in a top-level `api/` folder as a serverless function. A serverless function starts on demand, handles one request and stops, so it cannot hold a long-lived database connection. Neon is a hosted PostgreSQL service whose serverless driver, `@neondatabase/serverless`, sends each query over HTTP. A function can import it, run a query and return without managing a connection pool, which is exactly the shape Vercel functions need.

## The functions

The `api/` folder holds one file per area: `profile.js` for the student record and state sync, `auth-google.js`, `auth-session.js` and `auth-logout.js` for sign-in, `topic-comments.js`, `lecture-chat.js`, `messages.js` and `social.js` for the community features, `blob-upload.js` for files, `report-user.js` and `admin.js` for moderation, and `app-config.js`, which tells the browser which features the server has switched on. Shared helpers live in `api/_lib/`: `db.js` for queries and sessions, `http.js` for reading bodies, parsing cookies and sending JSON, `rate-limit.js`, `admin-auth.js`, and `mock-db.js`.

Queries are written as tagged template literals: `` sql`SELECT … WHERE device_id = ${deviceId}` ``. The driver turns each interpolated value into a query parameter, so values are never pasted into SQL text. That one convention removes the most common class of database security bug without any effort at the call site. The only place it caught me out was type inference: on 29 May the Google sign-in upsert started failing because Postgres could not infer the type of a parameter used in two places, and the fix was an explicit cast.

![How the browser, Vercel, Neon, Blob, Google and YouTube fit together.](../figures/architecture.svg)

## Twenty tables

Over the summer the schema grew to about twenty tables. The heart is `students`: one row per student, keyed by a `device_id` for guests and by `google_sub`, Google's stable account ID, for signed-in students. Study data hangs off it: `student_topic_progress`, `quiz_attempts`, `practice_sessions`, `exam_drafts` and `student_state_snapshots`. The community features add `topic_comments`, `lecture_messages`, `lecture_presence`, `lecture_watch_events`, `direct_messages` and `student_connections`. Files are recorded in `student_uploads`, sessions in `student_sessions`, and moderation in `student_reports` and `banned_devices`. A few summary views, such as `student_profile_summary` and `topic_stats`, keep the profile and admin pages from running large aggregations on every load.

## Working without a database

The September commit "enable local & Neon db study workspace without requiring Google OAuth" fixed a problem I had created in May. The site had quietly come to assume that a database was always present. Run it locally without the right environment variables and the profile page failed, sign-in failed, and parts of the study desk showed error states. Anyone who cloned the repository to contribute hit this in the first five minutes.

The fix was `api/_lib/mock-db.js`, about 800 lines that imitate the subset of SQL the functions use against in-memory JavaScript arrays. `getSql()` looks for `DATABASE_URL` (or `POSTGRES_URL`); if it finds one, it returns the Neon driver; if it does not, or if the driver fails to load, it logs a warning and returns the mock. Everything works locally, nothing persists across restarts, and nobody needs a Neon account to try the site. The same fallback is what lets the Docker image and the Windows app start with no configuration at all.

The lesson is one I now apply everywhere: decide what the system does *without* each external service before you depend on it. The study desk was designed to work without a server; the server should have been designed to work without its database from the start.

# 9. Sign-in and sessions

## Guests first

Every visitor is a guest until they choose otherwise. On the first visit, `shared.js` generates a random device ID (a UUID from `crypto.randomUUID()`) and stores it in the state. When the guest first syncs, `/api/profile` creates a `students` row for that device ID. A guest can study, take tests, comment and chat with no account. On 13 September the commit "remove mandatory authentication for platform access" made that the rule after a summer in which parts of the site required sign-in: the gate was keeping out exactly the students who only wanted to read one topic before an exam.

## Google sign-in

Signing in uses Google Identity Services. The page loads Google's client script, renders the standard "Sign in with Google" button, and receives an *ID token*: a signed JSON Web Token that says which Google account the user is. The browser posts that token to `/api/auth-google`, and the server verifies it with Google's official `google-auth-library`, checking the signature and that the token was issued for this site's client ID. Only the verified payload is trusted: the account's stable `sub`, the email, the name and the picture URL. The site never sees a password and asks for no extra permissions.

![Sign-in, from guest to session.](../figures/auth-flow.svg)

## Merging the guest into the account

The interesting part of sign-in is not authentication but merging. A student usually studies as a guest for a while before signing in, and they expect that history to follow them. When the verified account already exists, `auth-google.js` moves everything that belonged to the guest row into the account row: topic progress (dropping duplicates the account already has), exam drafts, quiz attempts, practice sessions, lecture watch events, presence, chat messages, comments and connections (dropping self-connections and duplicates). Each step is wrapped in its own `try`, so a missing table in an older database cannot abort the whole merge.

## Sessions that leak nothing

After verification the server creates a session. It generates 32 random bytes, sends them to the browser as an `HttpOnly`, `Secure`, `SameSite=Lax` cookie called `academy_session`, and stores only the SHA-256 hash of the token in `student_sessions`. Every API call reads the cookie, hashes it and looks up the session. If the database ever leaked, the stored hashes could not be replayed as cookies. Logging out deletes the session row and clears the cookie.

# 10. Studying together

## Comments on topics

The first community feature was the simplest: a comment thread under every topic. It answered a real need, because the most useful thing a classmate can tell you about a topic is often "this came in the 2024 paper" or "the textbook's derivation skips a step". Comments are stored with the topic ID and the student, and `topic-comments.js` serves them newest first with a comment count per topic.

## Lecture rooms

The lectures page added a light form of presence. While a student watches a lecture, the page sends a heartbeat every few seconds and polls `/api/lecture-chat` for messages, in two scopes: a *local* room for the lecture itself and a *global* room shared by everyone on the lectures page. The polling pauses while the browser tab is hidden and never runs two requests at once. It is polling, not WebSockets, because serverless functions cannot hold open connections, and for a few dozen students a poll every few seconds is perfectly adequate. The room is keyed by the lecture, so everyone watching the same Compiler Design playlist at eleven at night can see each other and talk.

## Connections and messages

September's "implement social connection management" added a small social graph. A student can send a connection request; the other student can accept, reject or ignore it; either can later disconnect. `social.js` implements those actions as a small state machine over the `student_connections` table, and `messages.js` allows direct messages between connected students. Profiles gained a bio, a headline, and links to GitHub, LinkedIn and a personal website, because classmates wanted to find each other's projects as much as each other's notes.

I hesitated over this feature. A study tool does not obviously need a social network, and every social feature brings moderation work. In the end the deciding argument was practical: students already used WhatsApp for exactly these conversations, and keeping a topic's discussion next to the topic made it findable a semester later. Chapter 12 describes what it cost.

# 11. Uploads and the resource library

## Two kinds of files

The resource library holds two kinds of files. *Curated* resources are committed to the repository under `assets/resources/<subject>/<type>/`: notes, assignments, mock papers and slides. *Student uploads* are PDFs and slide decks shared through the site, stored in Vercel Blob.

## The upload inbox workflow

Curated resources arrive through a folder called `incoming_resources/`. I, or anyone with write access, drop files there with descriptive names, such as `cs602-network-notes-unit3.pdf`, and push. The workflow `organize-resources.yml` runs `scripts/organize_resources.js`, which classifies each file by subject and type from tokens in its name (`cs602`, `network`; `notes`, `assignment`, `mock`, `slides`), moves it into the right folder, generates a readable title from the filename, and rewrites the resource manifest `js/resource-library.js` that the resources page reads. The bot commits the result. The history shows several "Organize uploaded study resources" commits from `github-actions[bot]`.

In November this script nearly destroyed the generated resource library. It rewrote `resource-library.js` from scratch, which was fine when the manifest held only uploaded files, but the generator now writes 444 entries into the same file. The fix was to give the generated entries their own marked block, `<<MULTIBRANCH-RESOURCES:START>>` to `:END>>`, teach the organiser to preserve that block and skip generated files, and check that running it twice changes nothing.

## Direct uploads to Blob

Student uploads go straight from the browser to Vercel Blob, without passing through a function. The page asks `/api/blob-upload` for permission; the function checks that the student is signed in and not banned, and returns a short-lived upload token that allows only certain content types: JPEG, PNG and WebP for avatars, PDF and PowerPoint for study files. The browser uploads to Blob with that token, and when the upload completes, Blob calls the function back to record the file in `student_uploads` with its size and title.

Two of the 29 May fixes came from this path. The browser and server packages of `@vercel/blob` had drifted to different versions, and the browser upload failed with an unhelpful error until they were aligned. And the profile page crashed when it tried to format a file size that was missing, which needed a guard. A third fix in the same batch added an automatic check for uploaded solutions. When a PDF arrives, the function downloads it, extracts its text with `pdf-parse`, and looks for a small set of keywords for the subject: *scope*, *risk*, *milestone* and *budget* for Project Management, and so on, with a generic set (*definition*, *example*, *advantages*) for other subjects. If at least 45% of the keywords appear, the upload is tagged *likely correct*; otherwise it is tagged *needs review* for a moderator. It is a blunt instrument, but it catches the most common bad upload, the wrong file.

# 12. Moderation

## Reports and bans

Every community feature needed a way to deal with abuse. Any student can report another; the report lands in `student_reports` with a reason. The admin dashboard (`admin/index.html`, served at `/admin`) lists open reports, recent uploads, chat messages and students, and lets an administrator ban or unban a student, ban a device (for abusive guests who never sign in), resolve or dismiss a report, delete an upload and delete chat messages. A banned device is recorded in `banned_devices` and checked by every function that writes data.

## Who counts as an administrator

Access to the dashboard has two paths. The normal one is signing in with Google using an account on the admin list: a small built-in set plus anything in the `ADMIN_EMAILS` environment variable. The fallback, for setting up a new deployment before anyone can sign in, is a shared secret in an `x-admin-secret` header.

That fallback was the worst security bug in the project, and I found it only while writing this book. The check accepted the configured `ADMIN_SECRET`, but it also accepted the literal strings `admin123` and `admin` *even when a real secret was configured*, and it accepted the secret from a URL query parameter. Since the admin email list is in a public repository, anyone who read the code could have banned students or deleted uploads. The fix, in version 2.2.1, accepts the secret only from the header, compares it in constant time, requires a configured secret of at least twelve characters, and allows the development default `admin123` only when the server is running against the in-memory mock store, where there is nothing to protect.

The lesson is uncomfortable but simple. A convenience added "just for testing" becomes production behaviour the moment it is deployed, and the person least likely to notice is the one who added it.
