# Part V — Reflection {.part}

What the project taught me, what it adds up to, and where it goes next.

# 24. Struggles and lessons

## Building faster than I could organise

The 13th of May is the clearest example of a pattern that runs through the whole project. In one day I built a useful study tool, restyled it twice, added a database, and committed a lab computer's user profile to a public repository. Speed was the reason the project existed at all; nobody builds a study portal in the week before exams by planning carefully. But speed left debts: features that assumed a database was always present, a styling framework loaded from a CDN, a semester filter that did not scale, and history that will always contain `ntuser.dat`. Each debt was paid later, usually at a worse time.

The lesson is not "go slower". It is to know which decisions are cheap to change and which are not. Content, colours and copy are cheap. The shape of the stored state, the URL layout, what happens without the network and what is committed to a public repository are expensive, and those deserve ten minutes of thought even on a day when everything else is being done in ten seconds.

## Hand-written content does not scale, generated content needs care

The May and September subjects are the best pages on the site because every one was written by hand for an exam I was about to sit. They are also the reason version two needed a different approach: at that rate, every branch would have taken years. The curriculum language solved the scale problem, but it moved the risk. A hand-written page is wrong one page at a time; a generator is wrong everywhere at once. The validation in the generator, the CI check, the fixed seeds and the marked blocks are all answers to that risk, and I would add more: a check that every generated page renders, and a check that every link in the study material resolves.

## Assuming the happy path

Several of the worst bugs came from assuming that something would always be there: a database, a signed-in user, a recorded file size, a single semester, an internet connection. Each assumption was true when it was made and false a few months later. The mock store, the guest-first sign-in, the defensive state loading, the programme API and the offline bundles are all ways of making the unhappy path a normal path.

## Conveniences that become vulnerabilities

The admin secret that accepted `admin123` even in production is the bug I am least proud of, because it was not complicated. It was a convenience for testing that I never removed, in a repository where anyone could read it. I found it only because writing this book made me read every file again. Reading your own code as a stranger would is the cheapest security review there is.

## Being honest about limits

The parts of version two I trust most are the ones that say what they are. The Automobile note says the scheme could not be verified. The model papers say they are practice papers. The lecture shelves say they are searches. A student who reads those labels can decide how much to rely on each part. An app that pretended to be complete would be more impressive for a day and less useful for a semester.

# 25. Principles I now follow

1. **Work without each dependency first.** Decide what the site does without the database, without sign-in, without the network and without JavaScript-heavy libraries, then add them.
2. **Separate content from code.** Content that changes often should be data that a script turns into code, not code that has to be edited by hand.
3. **Mark generated output.** A generator should own clearly marked regions, be safe to run twice, and be checked in CI.
4. **Store by subject, show by programme.** What a student has done belongs to the content; what a student sees belongs to their programme. Mixing the two makes switching destructive.
5. **Every default is a navigation decision.** Showing everything is not neutral; it is a choice to make students do the filtering.
6. **Ship the honest version.** Label generated, unverified and searched content as such.
7. **Small pull requests, even alone.** A change that can be described in one sentence can be reviewed, reverted and understood a year later.
8. **Read the code as a stranger.** Especially authentication, especially before a release.

# 26. The project in numbers

| Measure | Value |
|---|---|
| Degrees | B.Tech (semesters 1–8) and M.Tech (semesters 1–2) |
| Branches and programmes | 7 B.Tech branches, 5 M.Tech programmes |
| Subjects | 163 (15 hand-written, 148 generated) |
| Topics | about 3,300 |
| Generated quiz questions | 8,880, plus the hand-written banks |
| Downloadable study files | notes PDF and Markdown, model paper PDF and Markdown, and a question bank for each of 148 subjects |
| Curriculum source | 14 text files, about 4,000 lines |
| Serverless functions | 12 API routes, about 20 database tables |
| Workflows | 8 (Android CI, release, Docker, curriculum check, static checks, link check, resource organiser, Play bundle) |
| Platforms | Web (Vercel), Windows (installer and portable), Android (APK, AAB-ready), Docker |
| Commits | about 670, of which 474 are the lab-profile accident |

![Growth of the curriculum across versions.](../figures/growth.svg)

# 27. Where next

The roadmap in the repository is the authoritative list, but the direction is clear.

**Curated lectures.** Replace the generated search shelves with hand-picked playlists, starting with the most-studied subject of each branch, and invite students to suggest playlists through the existing upload and moderation flow.

**Numerical trainers for every branch.** The CSE trainers for subnetting, RSA and the critical path are the most popular part of the tests page. Mechanical students need thermodynamic cycles, Civil students need shear-force and bending-moment diagrams, Electronics students need filter design and Electrical students need per-unit calculations.

**Previous-year papers.** Link each subject to its real previous-year papers, with the model papers kept clearly separate.

**Offline that reconciles.** Merge offline and online progress automatically, and refresh the bundled content from the live site in the background.

**Google Play.** Grow the site's users, run the closed test with them, and publish. The launch kit is already in the repository.

**M.Tech semesters three and four** as electives become clearer, and more M.Tech specialisations: Communication, Production, Environmental and Data Science.

**Contributions from other students.** The curriculum language was designed so that someone who knows a subject well, but not JavaScript, can improve it by editing a text file and opening a pull request. The first outside contribution of that kind will be the real test of version two.

# Appendix A — Timeline {.unnumbered}

| Date | Event |
|---|---|
| 13 May 2026 | First version: `index.html`, `app.js`, `data.js`; five CSE semester-six subjects, 21 topics |
| 13 May 2026 | 474 accidental "Sync E:/UserProfile/…" commits from a lab computer, removed the same day |
| 13 May 2026 | Shared script, tests page, lectures and resources pages; light restyle; mock-test history; resource workflow; Neon-backed community features |
| 14 May 2026 | Admin dashboard, Blob uploads, admin allowlist, Google sign-in and moderation tools, workspace polish |
| 29 May 2026 | Five fix pull requests: Postgres typing, Blob SDK alignment, uploads and keyword checks, Tailwind build, lecture picker |
| 4 Sep 2026 | Local and mock-database mode, production Google client ID, first Android APK workflow, `vercel.json` |
| 9–13 Sep 2026 | Semester five; practice styles; lecture and resource libraries; optional authentication; guest merging; social connections; device bans; performance pass |
| 16 Nov 2026 | v2.0: curriculum language and generator; CSE, IT, ECE, ME, AU semesters 1–8; My Programme navigation; PDFs and model papers; APK and EXE releases; Docker; README, licence, changelog, privacy policy |
| 16 Nov 2026 | v2.1: Civil and Electrical; five M.Tech programmes; safe programme switching; landing-page fixes |
| 16 Nov 2026 | v2.1.1: app icons and animated splash screens for Android and Windows |
| 16 Nov 2026 | v2.2: offline Android app, Android 16 target, Play Store launch kit |
| 16 Nov 2026 | v2.2.1: admin authentication fix; this journey and the roadmap guide |

# Appendix B — Repository map {.unnumbered}

| Path | What it holds |
|---|---|
| `index.html` | Landing page and the study desk |
| `html/` | Tests, lectures, resources, profile, about, privacy, terms and contact pages |
| `admin/` | Admin dashboard |
| `js/shared.js` | The `window.ACADEMY` namespace: state, sync, sign-in, programme API, statistics |
| `js/app.js` | Study desk: navigation, programme picker, topic view, highlights, notes |
| `js/tests.js` | Drills, mock tests, flashcards, numerical trainers |
| `js/lectures.js`, `js/lecture-library.js` | Lecture player, chat and the playlist library |
| `js/resources.js`, `js/resource-library.js` | Resource page and its manifest |
| `js/profile.js` | Profile, statistics, export, social features |
| `js/data.js`, `js/data_<id>.js` | Curriculum outline and per-subject content |
| `api/` | Vercel serverless functions; `api/_lib/` holds shared helpers and the mock store |
| `assets/css/` | `tailwind.css` (built), `tailwind.input.css`, and `app.css` (the site's design) |
| `assets/resources/` | Curated and generated study files |
| `scripts/curriculum/` | The curriculum language files, `plan.js` and `references.js` |
| `scripts/` | Generators, the resource organiser and the Android bundler |
| `incoming_resources/` | Drop folder for files the organiser workflow sorts |
| `android/` | Native Android shell |
| `desktop/` | Electron Windows app |
| `docs/` | Screenshots, figures, Play Store kit, this journey and the roadmap guide |
| `tools/docs/` | The pandoc and Chromium pipeline that builds these PDFs |
| `.github/workflows/` | CI, release, Docker, curriculum, link and resource workflows |
| `server.js`, `Dockerfile`, `docker-compose.yml` | Local and container server |

# Appendix C — Glossary {.unnumbered}

**AAB.** Android App Bundle, the format Google Play requires instead of an APK.

**Adaptive icon.** An Android icon made of a foreground layer and a background that the launcher can mask into different shapes.

**Blob (Vercel Blob).** Vercel's file storage, used for avatars and student uploads.

**Browsing mode.** The study desk's state when it shows a semester other than the student's own, with a banner and a *Back* button.

**Curriculum language.** The plain-text format in `scripts/curriculum/*.txt` from which generated subjects are built.

**Electron.** A framework that packages a web app with Chromium and Node.js as a desktop program.

**Generator.** `build_multibranch_curriculum.js` and `build_study_resources.js`, which turn the curriculum language into site data and study files.

**Guest.** A visitor who has not signed in, identified by a random device ID.

**ID token.** A signed token from Google that identifies an account, verified on the server at sign-in.

**Marked block.** A region of a file between `<<…:START>>` and `<<…:END>>` comments that a generator owns and rewrites.

**Mermaid.** A library that draws diagrams from text descriptions in the browser.

**Mock store.** The in-memory imitation of the database used when no `DATABASE_URL` is configured.

**Neon.** A hosted serverless PostgreSQL service, used as the site's database.

**Paper code.** RGPV's identifier for a paper, such as CS-601 or CE-702(B).

**Placement.** A (branch, semester, code) triple saying where a subject appears in a programme.

**Programme.** A student's degree, branch and semester; the default scope of every page.

**RGPV.** Rajiv Gandhi Proudyogiki Vishwavidyalaya, the state technical university of Madhya Pradesh.

**Serverless function.** Code that runs on demand for one request, used for the `/api` routes on Vercel.

**Tailwind CSS.** A utility-class CSS framework, built at development time into `assets/css/tailwind.css`.

**WebView.** An Android component that displays web content inside an app.

**WebViewAssetLoader.** An AndroidX helper that serves files bundled in an app over a virtual HTTPS origin.
