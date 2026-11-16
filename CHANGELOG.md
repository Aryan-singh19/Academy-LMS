# Changelog

All notable changes to Academy LMS are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Planned
- More M.Tech specialisations (Communication, Production, Environmental, Data Science).
- Hand-curated YouTube playlists (currently unit-wise lecture search shelves).

## [2.2.1] - 2026-11-16

### Added
- **`docs/journey/JOURNEY.pdf`** (80 pages): how Academy LMS was planned, built and shipped, from the first page to v2.2.
- **`docs/roadmap/ROADMAP-GUIDE.pdf`** (77 pages): the roadmap, plus a technical reference for every part: hosting (Vercel), database (Neon Postgres) and schema, sign-in and sessions, uploads (Vercel Blob), YouTube embedding, CSS, generators, tests, apps and workflows.
- `ROADMAP.md` and the `tools/docs/` book pipeline (pandoc → HTML → Chromium PDF), with Graphviz figures in `docs/figures/`.
- Accent colours for the Electrical, Civil and M.Tech programmes.

### Security
- **Admin authentication hardened.** The shared secret previously accepted the hard-coded strings `admin123` and `admin` even when `ADMIN_SECRET` was set, and could be passed in the URL. The secret is now read only from the `x-admin-secret` header, compared in constant time, and requires a configured `ADMIN_SECRET` of 12+ characters. `admin123` works only against the local in-memory mock store. **Deployments should set a strong `ADMIN_SECRET`.**

### Fixed
- `docs/academy_schema.sql` was missing the `banned_devices` table used by device bans.
- README: Electrical semester 3–4 paper names.

## [2.2.0] - 2026-11-16

### Added
- **Offline Android app**: the study material is bundled into the APK (about 4 MB extra, PDFs excluded). When there's no internet, the app opens the bundled copy, and pull-to-refresh switches back to the live site once you're online.
- **Play Store launch kit** in `docs/play-store/`:
  - listing text, 512 px icon, feature graphic and six captioned phone screenshots
  - data safety and content rating answers
  - a step-by-step guide and a share kit for growing users
- `play-bundle.yml` builds the signed `.aab` for Google Play. The release workflow builds a signed APK once signing secrets are added.

### Changed
- The Android app targets Android 16 (API 36), as Google Play requires for new apps. It is built with AGP 8.11 and Gradle 8.14.
- Android 16 support: predictive back gesture, edge-to-edge layout with proper status bar, navigation bar and keyboard insets, and cleartext HTTP disabled.

## [2.1.1] - 2026-11-16

### Added
- **App icons**: the Academy LMS emblem is now the Android launcher icon (adaptive and round) and the Windows icon for the app, installer, taskbar and desktop shortcut.
- **Animated launch splash**:
  - **Android:** the emblem glows in with a bounce and the name and tagline rise in under it, with a loading sweep. It fades into the app once the desk has loaded (shown for at least 2.2 s, at most 7 s). Android 12+ also shows the emblem on the system splash.
  - **Windows:** a frameless splash window with the same animation stays up until the desk is ready.

## [2.1.0] - 2026-11-16

### Added
- **Civil (CE) and Electrical & Electronics (EX)** B.Tech branches, semesters 1–8 (33 new subjects, with shared papers reused across branches).
- **M.Tech**: Computer Science, VLSI Design, Thermal, Structural and Power Systems, semesters 1–2, plus Research Methodology & IPR (33 new subjects).
- In total: 148 generated subjects, 2,960 topics, 8,880 MCQs, and notes PDFs and model papers for every subject.
- The programme picker's **B.Tech / M.Tech toggle** now works and lists each degree's branches.
- **Safe switching**: the picker states that progress is kept, a **Recent** row offers one-tap return to previous programmes, and the profile page has a *Change programme* link.

### Changed
- The landing page now covers B.Tech Sem 1–8 and M.Tech across 7 branches (it previously listed only Sem 5–7).
- More precise Automobile note: RGPV does not publish the current AU 6–8 scheme online.

### Fixed
- The text-highlight toolbar (Highlight / Remove current / Remove last / Cancel) showed permanently on the landing page because a CSS rule overrode `.hidden`.

## [2.0.0] - 2026-11-16

### Added
- **Five B.Tech branches, semesters 1–8**: CSE, IT (CSIT), ECE, Mechanical and Automobile, following the RGPV AICTE-flexible scheme.
  - Common first-year papers BT-101 to BT-205 for every branch.
  - CSE semesters 3, 4 and 8; IT, ECE, ME and AU semesters 3–8 (82 new subjects, 1,640 new topics).
  - Shared papers (for example Data Structures for CSE and IT, Thermodynamics for ME and AU) reuse one subject, so progress carries across branches and each branch sees its own paper code.
- **My Programme navigation**:
  - A first-visit picker for degree, branch and semester; the choice is remembered.
  - The study desk, tests, resources, lectures, progress modal and profile all default to the student's own semester.
  - Other semesters open in an explicit *Browsing* mode with a banner and a one-tap **Back to my semester** button.
- **Topic pages built to the CSE 6th sem template**:
  - Core concepts, key points and exam focus
  - Mermaid concept map, quick revision table and in-depth explanation
  - RGPV exam blueprint (2–3, 4 and 7 mark questions)
  - Video lecture links and standard textbook references
  - 3 auto-generated MCQs per topic (4,920 in total) that feed the Tests page
- **Downloadable study material for every new subject** in `assets/resources/<id>/`:
  - unit-wise study notes (PDF + Markdown)
  - RGPV-pattern model question paper with two sets and answer hints (PDF + Markdown)
  - question bank with answers (Markdown)
- Lecture shelves for every new subject: unit-wise YouTube lecture links on the Lectures page.
- Subtle per-branch accent colours: same layout and components, with the accent hue changing for IT, ECE, ME and AU.
- **Releases**: `release.yml` builds the Android APK plus a Windows installer and portable EXE (Electron, with an offline fallback) and attaches them to a GitHub Release when a `v*` tag is pushed.
- **Docker**: `Dockerfile`, `docker-compose.yml` and a GHCR image workflow.
- Curriculum tooling: `npm run build:curriculum` plus a CI check that generated files are up to date.
- `LICENSE` (MIT), `PRIVACY.md`, this changelog, and README screenshots and walkthrough GIF.

### Changed
- Topic content colours now follow the light study-desk theme, fixing dark cards with low-contrast text on the existing CSE pages too.
- Headline stats (Topics done, completion %) now count the student's current semester instead of every subject.
- The cloud snapshot `topicDirectory` only includes topics the student has interacted with, which keeps sync payloads small as the catalogue grows.
- `server.js` respects the `PORT` environment variable.
- The Android workflow is now a CI build; publishing moved to `release.yml`. It previously re-published a fixed `v1.0.0` release on every push to main.
- `organize_resources.js` preserves the generated resource block and skips generated files.

### Fixed
- The progress breakdown modal read an undefined `courseManifest`, so semester coverage never rendered.
- The saved-notes modal showed empty course names for the same reason.

## [1.x] - 2026-09

### Added
- CSE semesters 5–7 study desk with rich notes, Mermaid diagrams, quizzes and exam drafts.
- Practice tests, flashcards, numerical trainers, exam simulator and sandboxes.
- Google sign-in, Neon cloud sync, topic comments, lecture chat, DMs and admin dashboard.
- Android WebView app.

[Unreleased]: https://github.com/Aryan-singh19/Academy-LMS/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/Aryan-singh19/Academy-LMS/releases/tag/v2.0.0
