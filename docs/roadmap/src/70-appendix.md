# Appendix A — Environment variables {.unnumbered}

| Variable | Where | Required | Purpose |
|---|---|---|---|
| `DATABASE_URL` (or `POSTGRES_URL`, `STORAGE_URL`) | Vercel, `.env` | For persistence | Neon connection string; without it the mock store is used |
| `GOOGLE_CLIENT_ID` | Vercel, `.env` | No (built-in default) | OAuth client for Google sign-in |
| `ADMIN_SECRET` | Vercel, `.env` | Recommended | Admin dashboard secret, 12+ characters, sent as `x-admin-secret` |
| `ADMIN_EMAILS` | Vercel, `.env` | No | Comma-separated extra admin emails |
| `BLOB_READ_WRITE_TOKEN` | Vercel | For uploads | Vercel Blob store token |
| `PORT` | `.env`, Docker | No | Server port (default 3000) |
| `ACADEMY_URL` | Windows app | No | Override the site the desktop app loads |
| `ANDROID_KEYSTORE_*`, `ANDROID_KEY_*` | GitHub secrets, local env | For signed Android builds | See Chapter 29 |

# Appendix B — npm scripts {.unnumbered}

| Script | Command | Use |
|---|---|---|
| `npm start` / `npm run dev` | `node server.js` | Local server on port 3000 |
| `npm run build` / `build:tailwind` | Tailwind CLI | Rebuild `assets/css/tailwind.css` |
| `npm run build:curriculum` | both generators | Regenerate subjects, data block, PDFs and manifest |
| `npm run check:js` / `lint` | `node --check …` | Syntax-check server, API, pages and scripts |
| `npm run bundle:android` | `scripts/bundle-android-site.js` | Copy the site into the Android app |
| `npm run docker:build` / `docker:run` | Docker | Build and run the image |
| `desktop/`: `npm start`, `npm run dist:win` | Electron | Run the Windows app; build installer and portable EXE |
| `python3 tools/docs/build_docs.py` | pandoc + Chromium | Rebuild `JOURNEY.pdf` and this guide |

# Appendix C — Troubleshooting {.unnumbered}

**"Database URL missing — using in-memory mock store."** Expected locally without `.env`. Set `DATABASE_URL` for persistence.

**Sign-in button does nothing / "origin not allowed".** Add the site's origin (for example `http://localhost:3000`) to the OAuth client's authorised JavaScript origins in Google Cloud.

**Uploads fail in the browser.** Check `BLOB_READ_WRITE_TOKEN` and that `@vercel/blob` has one version in `package-lock.json`.

**New Tailwind classes have no effect.** Run `npm run build:tailwind`; make sure the class name appears whole in a scanned file.

**`curriculum.yml` fails with a diff.** Run `npm run build:curriculum` and commit everything it changed.

**`Term without " = "` when building.** A topic line has a field with no ` = `, often because a `|` appeared inside text. The error names the file and line.

**Admin dashboard says "Authentication required".** Sign in with an admin Google account, or set `ADMIN_SECRET` (12+ characters) and type it into the dashboard. `admin123` works only without a database.

**Device bans fail with "relation banned_devices does not exist".** Re-run `docs/academy_schema.sql` (2.2.1 adds the table).

**Android app shows the offline copy while online.** Pull down to refresh; the app returns to the live site when the main page loads.

**Windows SmartScreen warns about the EXE.** The build is not code-signed. Choose *More info → Run anyway*; signing is on the roadmap.

# Appendix D — Glossary {.unnumbered}

See *Academy LMS: The Journey*, Appendix C. Additional terms used here:

**AGP.** Android Gradle Plugin, which builds Android apps with Gradle.

**GHCR.** GitHub Container Registry, where the Docker image is published.

**Marked block.** A file region between `<<…:START>>` and `<<…:END>>` owned by a generator.

**NSIS.** Nullsoft Scriptable Install System, used for the Windows installer.

**Tagged template.** A JavaScript template literal passed to a function (`` sql`…` ``), used to build parameterised SQL.
