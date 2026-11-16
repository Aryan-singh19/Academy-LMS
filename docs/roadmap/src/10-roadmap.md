# Part I — Roadmap {.part}

What was built, in what order, and what comes next.

# 1. Stages at a glance

::: {.callout data-title="In plain terms"}
Academy LMS started on 13 May 2026 as a single page covering five sixth-semester Computer Science subjects. Within a day it had practice tests, a lecture page and a database. Over the summer it gained sign-in, a community area and a first Android app. In November 2026 it grew to cover every RGPV B.Tech branch and five M.Tech programmes, with Windows and Android apps that also work offline.
:::

![The seven stages of Academy LMS.](../figures/stages-timeline.svg)

Each stage below lists what was built, the files involved, and the lesson it left behind. All dates come from the project's version history on GitHub.

# 2. Completed stages

## ✅ Stage 0 — The first page (13 May 2026)

| Step | What | Files |
|---|---|---|
| 0.1 | Single page with the Tailwind CDN and a dark "Linear" theme | `index.html` |
| 0.2 | Five CSE semester-six subjects, 21 topics: outline in one array, content in a second object | `data.js` |
| 0.3 | Subject tabs, unit sidebar, topic view, Mermaid diagrams, completed topics in `localStorage` | `app.js` |

**Lesson.** A plain page with data in JavaScript can be useful within hours, and opens from a USB stick as well as from a server.

## ✅ Stage 1 — The study portal (13 May 2026)

| Step | What | Files |
|---|---|---|
| 1.1 | Split into pages that share one script: study desk, tests, lectures, resources, profile | `js/shared.js`, `js/app.js`, `html/*.html` |
| 1.2 | Single state object saved on every change; device ID; statistics | `js/shared.js` |
| 1.3 | Topic drills, timed mock tests with history, flashcards, numerical trainers | `js/tests.js` |
| 1.4 | Light blue restyle; design moved into its own stylesheet | `assets/css/app.css` |
| 1.5 | Profile page and the first resource upload workflow | `js/profile.js`, `scripts/organize_resources.js` |
| 1.6 | Clean-up of the accidental lab-profile commits | — |

**Lesson.** Check `git status` before the first push. A public repository should be boring at its root.

## ✅ Stage 2 — The online layer (13–14 May 2026)

| Step | What | Files |
|---|---|---|
| 2.1 | Neon Postgres through the serverless driver; tagged-template queries | `api/_lib/db.js` |
| 2.2 | Profile and state sync | `api/profile.js` |
| 2.3 | Topic comments, lecture rooms with presence, direct messages | `api/topic-comments.js`, `api/lecture-chat.js`, `api/messages.js` |
| 2.4 | Admin dashboard, admin email allowlist, reports and bans | `admin/`, `api/admin.js`, `api/report-user.js` |
| 2.5 | Direct browser uploads to Vercel Blob | `api/blob-upload.js` |
| 2.6 | Google sign-in and moderation tools | `api/auth-*.js` |

**Lesson.** Decide what the site does without the database before depending on it. That decision arrived only in Stage 4.

## ✅ Stage 3 — The fix-up week (29 May 2026)

| PR | Fix |
|---|---|
| #1 | Postgres parameter typing in the Google sign-in query |
| #2 | Vercel Blob client and server SDK versions aligned |
| #3 | PowerPoint uploads, size-formatting crash, PDF keyword check for uploaded solutions |
| #4 | Resources page auth bootstrap; Tailwind CDN replaced by a built stylesheet |
| #5 | Searchable multi-subject lecture picker |

**Lesson.** Small pull requests, even when working alone, keep the history readable and changes reversible.

## ✅ Stage 4 — Semesters five and seven, and the first app (September 2026)

| Step | What |
|---|---|
| 4.1 | In-memory mock database when `DATABASE_URL` is missing; the site runs anywhere with no setup |
| 4.2 | Production Google client ID; first Android WebView APK workflow; `vercel.json` |
| 4.3 | Semester five (5 subjects) and semester seven (5 subjects): 15 subjects, about 350 topics |
| 4.4 | Rebuilt lecture library (playlist drawer) and resource library |
| 4.5 | Sign-in made optional; guest accounts merged into Google accounts on sign-in |
| 4.6 | Social connections; device bans; admin dashboard |
| 4.7 | Performance pass: gzip, cached config and session, preloading, hover prefetch |

**Lesson.** A filter that works for three semesters of one branch is not navigation.

## ✅ Stage 5 — Version 2.0: every branch, every semester (16 November 2026)

| Step | What |
|---|---|
| 5.1 | Curriculum language (`scripts/curriculum/*.txt`), programme plan and textbook references |
| 5.2 | Generator: topic pages, outline block, seeded MCQs; validation and CI staleness check |
| 5.3 | Study files: notes PDF and Markdown, two-set model paper, question bank for every generated subject |
| 5.4 | First year (BT-101 to BT-205) for all branches; CSE semesters 3, 4 and 8; IT, ECE, ME, AU semesters 3–8 |
| 5.5 | *My programme* navigation: picker, scoped desk, tests, resources, lectures, profile; browsing mode |
| 5.6 | Per-branch accent colour; light-theme contrast fixes for topic content |
| 5.7 | Release workflow (APK + Windows installer + portable EXE), Docker image, README, licence, changelog, privacy policy |

## ✅ Stage 6 — Versions 2.1 to 2.2.1 (16 November 2026)

| Version | What |
|---|---|
| 2.1.0 | Civil and Electrical branches; M.Tech CSE, VLSI, Thermal, Structural, Power Systems; working degree toggle; recent programmes; landing-page fixes |
| 2.1.1 | Launcher and Windows icons from the emblem; animated splash screens on Android and Windows |
| 2.2.0 | Offline Android app with bundled site; Android 16 target; signed release builds; Play Store launch kit |
| 2.2.1 | Admin authentication hardened; *The Journey* and this guide |

# 3. What comes next

| Priority | Item | Notes |
|---|---|---|
| High | Curated lecture playlists | Replace generated search shelves, starting with the most-studied subject of each branch |
| High | Google Play release | Closed test with 12+ testers for 14 days; launch kit in `docs/play-store/` |
| High | Automated tests | Unit tests for the generator and the programme API; a Playwright smoke test in CI |
| Medium | Numerical trainers for every branch | Thermodynamic cycles, SFD/BMD, filter design, per-unit calculations |
| Medium | Previous-year papers per subject | Clearly separated from generated model papers |
| Medium | Offline that reconciles | Merge offline and online progress; refresh the bundled content in the background |
| Medium | Spaced repetition for flashcards | Bring back cards marked "needs review" on a schedule |
| Low | More M.Tech specialisations, semesters 3–4 electives | Communication, Production, Environmental, Data Science |
| Low | Code-signed Windows build | Removes the SmartScreen warning |
