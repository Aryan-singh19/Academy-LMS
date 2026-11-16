# Changelog

All notable changes to Academy LMS are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Planned
- Civil (CE) and Electrical & Electronics (EX) B.Tech branches, semesters 1–8.
- M.Tech programmes (CSE, VLSI/ECE, Thermal/Design ME) once B.Tech coverage is complete.
- Hand-curated YouTube playlists for the new subjects (currently unit-wise lecture search shelves).

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
