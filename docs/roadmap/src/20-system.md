# Part II — The system at a glance {.part}

The stack, the services, the repository, and how to run it.

# 4. Stack and services

| Layer | Technology | Why |
|---|---|---|
| Pages | Plain HTML5, one file per feature | Opens instantly on slow phones; no build step; works from `file://` |
| Logic | Vanilla JavaScript (ES2020), one shared namespace `window.ACADEMY` | No framework runtime; any page is readable from two files |
| Styling | Tailwind CSS 3 (built ahead of time) + `assets/css/app.css` | Utility classes for layout, a hand-written design layer for identity |
| Fonts | Manrope (UI) and IBM Plex Mono (code), from Google Fonts | Clean at small sizes; distinct monospace for codes |
| Diagrams | Mermaid, loaded only when a topic contains a diagram | Diagrams written as text, rendered in the browser |
| Content | `js/data.js` + `js/data_<id>.js`, generated from `scripts/curriculum/*.txt` | Plain-text authoring, lazy-loaded delivery |
| Study files | `pdfkit` with DejaVu fonts | Printable notes and model papers with engineering symbols |
| Hosting | Vercel: static files + Node.js serverless functions in `api/` | Free tier, Git-based deploys, functions next to the site |
| Database | Neon PostgreSQL via `@neondatabase/serverless` (HTTP queries) | Works from short-lived functions without a connection pool |
| Fallback DB | `api/_lib/mock-db.js`, an in-memory imitation | Site runs with zero configuration |
| File storage | Vercel Blob | Direct browser uploads with short-lived tokens |
| Sign-in | Google Identity Services + `google-auth-library` | No passwords to store; verified ID tokens |
| Lectures | YouTube `<iframe>` embeds on `youtube-nocookie.com` | No wrapper library; privacy-enhanced by default |
| Local / Docker server | Express 5 + `compression` (`server.js`) | Same API handlers as Vercel, one process |
| Android app | Native Java WebView shell, AndroidX `WebViewAssetLoader` | Live site online, bundled site offline |
| Windows app | Electron 33 + electron-builder (NSIS + portable) | Splash, icon, offline fallback |
| Automation | GitHub Actions (8 workflows) | CI, releases, Docker image, curriculum checks |
| Distribution | GitHub Releases (APK, EXE), GHCR (Docker image), Vercel (web) | — |

![The architecture: browser, Vercel, Neon, Blob, Google and YouTube.](../figures/architecture.svg)

## Who does what

- **GitHub** hosts the repository, runs every workflow, stores the release files and publishes the Docker image to `ghcr.io`. It does not serve the website.
- **Vercel** is connected to the GitHub repository. Every push to `main` triggers a deploy: Vercel copies the repository root as static files (because `vercel.json` sets `"outputDirectory": "."` and there is no build command), and turns every `api/*.js` file into a serverless function at `/api/<name>`. Files in `api/_lib/` are helpers, not routes, because of the leading underscore. Pull requests get preview deployments.
- **Neon** holds the database. Its connection string is the `DATABASE_URL` environment variable in Vercel's project settings.
- **Vercel Blob** stores uploaded files; its token is `BLOB_READ_WRITE_TOKEN`.
- **Google Cloud** holds the OAuth client whose ID is `GOOGLE_CLIENT_ID`; the production client ID is also the built-in default.

# 5. The repository

```
Academy-LMS/
├── index.html                 landing page + study desk (one page, two views)
├── html/                      tests, lectures, resources, profile, about, privacy, terms, contact
├── admin/                     admin dashboard (index.html, admin.js)
├── js/
│   ├── shared.js              window.ACADEMY: state, sync, auth, programme API, stats
│   ├── app.js                 study desk
│   ├── tests.js               drills, mock tests, flashcards, numerical trainers
│   ├── lectures.js            lecture player + chat; lecture-library.js = curated playlists
│   ├── resources.js           resource page; resource-library.js = manifest (partly generated)
│   ├── profile.js             profile, export, social
│   ├── data.js                course outline (hand-written + <<MULTIBRANCH>> block)
│   └── data_<id>.js           163 per-subject content files (15 hand-written, 148 generated)
├── api/                       Vercel serverless functions; api/_lib = helpers + mock DB
├── assets/
│   ├── css/                   tailwind.input.css → tailwind.css (built); app.css (design)
│   ├── images/                logo
│   └── resources/<id>/        notes, mock papers, assignments, slides per subject
├── scripts/
│   ├── curriculum/            *.txt syllabus files, plan.js, references.js
│   ├── fonts/                 DejaVu fonts for PDFs
│   ├── build_multibranch_curriculum.js
│   ├── build_study_resources.js
│   ├── organize_resources.js
│   └── bundle-android-site.js
├── incoming_resources/        drop folder sorted by the organiser workflow
├── android/                   native Android shell
├── desktop/                   Electron Windows app
├── docs/                      screenshots, figures, Play Store kit, journey, this guide
├── tools/docs/                pandoc + Chromium book pipeline
├── .github/workflows/         8 workflows
├── server.js                  Express server for local/Docker
├── Dockerfile, docker-compose.yml
├── vercel.json                { "outputDirectory": "." }
└── package.json               scripts and server dependencies
```

# 6. Running it

## Quick start

```bash
git clone https://github.com/Aryan-singh19/Academy-LMS.git
cd Academy-LMS
npm install
npm start                      # http://localhost:3000
```

With no `.env`, the server prints a warning and uses the in-memory mock store. Everything works: progress, comments, chat, the admin dashboard (secret `admin123` in this mode). Nothing persists across restarts.

For real accounts and sync, copy `.env.example` to `.env` and set `DATABASE_URL` (a Neon connection string), and optionally `GOOGLE_CLIENT_ID`, `ADMIN_SECRET`, `ADMIN_EMAILS` and `BLOB_READ_WRITE_TOKEN`. `server.js` reads `.env` itself without any library.

## Static only

Because every page is static, `python3 -m http.server` in the repository root also serves the whole study desk, tests and resources. Only the `/api` features (sync, sign-in, community) need the Node server.

## Docker

```bash
docker compose up --build      # http://localhost:3000
```

The image is two-stage: the first stage runs `npm ci --omit=dev`, the second copies `node_modules` and the site into a `node:20-alpine` image, runs as a non-root `academy` user, exposes port 3000 and health-checks `/api/app-config` every 30 seconds. `docker-compose.yml` loads `.env` if present.

## Deploying your own copy

1. Fork the repository and import it into Vercel. No framework preset and no build command are needed.
2. Create a Neon project and copy its connection string into Vercel as `DATABASE_URL`.
3. Create an OAuth client in Google Cloud (type: Web), add your Vercel domain as an authorised JavaScript origin, and set `GOOGLE_CLIENT_ID`.
4. Set `ADMIN_SECRET` (12+ random characters) and `ADMIN_EMAILS`.
5. Optionally create a Blob store in Vercel and set `BLOB_READ_WRITE_TOKEN`.
6. Push to `main`. Vercel deploys within a minute.
