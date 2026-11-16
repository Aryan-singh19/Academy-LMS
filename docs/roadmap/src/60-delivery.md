# Part VI — Apps, automation and quality {.part}

The Android and Windows apps, Docker, every workflow, and how changes are checked.

# 27. The Android app

::: {.callout data-title="In plain terms"}
The Android and Windows apps open the same Academy LMS website inside an app window, with their own icon and an animated opening screen. Each app also carries a copy of the study material, so notes and quizzes still open without internet. New versions are built automatically by GitHub whenever a release is published.
:::


## Project layout

```
android/
├── build.gradle                  AGP 8.11.1
├── settings.gradle, gradle.properties
└── app/
    ├── build.gradle              compileSdk/targetSdk 36, minSdk 24, signing from env
    └── src/main/
        ├── AndroidManifest.xml   INTERNET, ACCESS_NETWORK_STATE; icon, roundIcon; no cleartext
        ├── assets/site/          bundled site (generated at build time, git-ignored)
        ├── java/com/academy/lms/MainActivity.java
        └── res/                  mipmaps (icons), drawable-nodpi (splash logo), values(-v31) (themes)
```

![How the Android app decides what to show.](../figures/android-app.svg)

## `MainActivity`

| Concern | Implementation |
|---|---|
| Layout | `CoordinatorLayout` root → `SwipeRefreshLayout` → `WebView`; a thin horizontal `ProgressBar`; the splash layer on top |
| WebView | JavaScript, DOM storage and database enabled; wide viewport; no zoom; user agent suffixed `AcademyLMS-Android/1.0`; cookies and third-party cookies accepted (Google sign-in) |
| Links | Site, Vercel and Google sign-in URLs stay in the WebView; everything else opens in the system browser |
| Online | Loads `https://academy-lms-sepia.vercel.app/` |
| Offline | `WebViewAssetLoader` serves `assets/site/` at `https://appassets.androidplatform.net/assets/site/`; opened when there is no connection at start or the main frame fails to load; pull-to-refresh returns to the live site when online |
| Back | `OnBackPressedCallback`: `webView.goBack()` while possible, then leave the app (predictive back on Android 16) |
| Insets | Edge-to-edge: system bars, display cutout and keyboard insets applied as padding to the root; light status-bar icons on the dark background |
| State | `saveState` / `restoreState` across rotation |

## Splash animation

Built in code, so it is sharp on every density and can wait for the page:

1. A `FrameLayout` with a radial gradient (`#1B2150` → `#0B0F19`) covers the screen and swallows touches.
2. The emblem (`splash_logo.png`) animates from scale 0.55, rotation −8° and alpha 0 to full size in 800 ms with an `OvershootInterpolator`, then pulses between 1.0 and 1.06 forever.
3. *Academy LMS* (32 sp, bold, violet glow) and the tagline slide up 28 dp and fade in, starting at 450 ms and 700 ms.
4. A 140 dp cyan-to-violet bar sweeps from the left on repeat.
5. When the page finishes loading, and at least 2.2 s have passed, or after 7 s regardless, the layer fades and scales to 1.08 in 450 ms, the looping animators are cancelled, and the layer is removed.

On Android 12 and later, the system splash (`values-v31/styles.xml`: `windowSplashScreenAnimatedIcon`) shows the emblem first. On older versions the window background (`drawable/splash_window.xml`) does the same.

## Icons

Adaptive icons (`mipmap-anydpi-v26/ic_launcher.xml`): background colour `#0B0F19`, foreground the transparent emblem at 108–432 px; legacy square and round PNGs at 48–192 px. Generated from `assets/images/logo.png`: the emblem is cropped and its dark background is turned into transparency by a brightness key, so the glow fades rather than sitting in a box.

## Building

```bash
node scripts/bundle-android-site.js     # copy the site into app/src/main/assets/site (skips PDFs)
cd android && gradle assembleDebug       # or assembleRelease / bundleRelease with signing env
```

Signing reads `ANDROID_KEYSTORE_PATH`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS` and `ANDROID_KEY_PASSWORD`. Without them, release builds are unsigned and CI falls back to a debug APK.

# 28. The Windows app

```
desktop/
├── package.json        electron 33, electron-builder 25, build config
├── main.js             splash window, main window, offline fallback
├── splash.html         animated splash (CSS only)
├── splash-logo.png
├── bundle-site.js      copies index.html, html/, js/, assets/, admin/ into desktop/site
└── build/icon.png, icon.ico
```

![How the Windows app starts.](../figures/desktop-app.svg)

`main.js`:

1. Creates the splash: 460×400, frameless, transparent, always on top, not in the taskbar; shows it on `ready-to-show`.
2. Creates the main window hidden (1400×900, minimum 960×640, the emblem as its icon, no menu bar, context isolation and sandbox on) and loads the live site.
3. On `did-finish-load`, or after 8 s, waits until 2.2 s have passed since the splash appeared, shows the main window and destroys the splash.
4. On a main-frame `did-fail-load` (except aborts), loads `site/index.html?view=study` from disk, which is the offline copy.
5. Sends `window.open` links with `http(s)` to the default browser.

`splash.html` animates purely in CSS: the card scales in, a halo pulses, the logo pops in with a cubic-bezier overshoot and then floats, the title and tagline rise in sequence, and a gradient bar sweeps. It honours `prefers-reduced-motion`.

electron-builder targets: **NSIS** (`Academy-LMS-Setup-<version>.exe`: choose folder, desktop and Start menu shortcuts, custom installer and uninstaller icons) and **portable** (`Academy-LMS-Portable-<version>.exe`). `npm run dist:win` runs `bundle-site` first.

# 29. Workflows

![One release builds every app.](../figures/release-pipeline.svg)


| Workflow | Trigger | What it does |
|---|---|---|
| `release.yml` | tag `v*` (e.g. publishing a release), or manual with a tag | **android**: bundle site, Gradle, signed release APK if secrets exist else debug · **windows**: set version from tag, `npm run dist:win` · **publish**: attach `Academy-LMS-<tag>.apk` and both EXEs to the release (softprops/action-gh-release) |
| `build-apk.yml` | push to `main` or PR touching `android/**` | Builds the APK to catch breakage; uploads it as an artifact; never publishes |
| `play-bundle.yml` | manual | Signed `.aab` for Google Play (fails clearly if secrets are missing) |
| `docker.yml` | push to `main`, tags, PRs | Builds the image; pushes to `ghcr.io/<owner>/academy-lms` on `main` and tags |
| `curriculum.yml` | changes to `scripts/**`, `js/data*.js`, `js/resource-library.js` | `npm run build:curriculum`; fails if `git diff` shows changes; `node --check` every data file |
| `static-site-checks.yml` | push to `main`, PRs | htmlhint on every page, `node --check` on `js/`, `prettier --check` |
| `link-check.yml` | weekly (Monday 04:00 UTC), manual | lychee checks links in the repository |
| `organize-resources.yml` | push to `main`, manual | Sorts `incoming_resources/` and commits the result |

## Cutting a release

1. Update `version` in `package.json`, `desktop/package.json`, and `versionCode` + `versionName` in `android/app/build.gradle`; add a `CHANGELOG.md` entry.
2. Merge to `main`.
3. On GitHub, open *Releases → Draft a new release*, type a new tag (`v2.2.1`), target `main`, and publish. Creating the tag starts `release.yml`.
4. After about 15 minutes, the release has the APK, the installer and the portable EXE under *Assets*.

## Secrets

| Secret | Used by |
|---|---|
| `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD` | `release.yml` (signed APK), `play-bundle.yml` |
| `GITHUB_TOKEN` (automatic) | publishing releases, pushing to GHCR, the organiser's commits |

# 30. Testing and quality

## What runs today

| Check | Where | Catches |
|---|---|---|
| `node --check` on the server, every API file, every page script and the generators (`npm run check:js`) | local; `static-site-checks.yml` for `js/` | Syntax errors |
| Generator validation | `build_multibranch_curriculum.js` | Bad curriculum lines, unknown IDs, unused subjects, missing references |
| Staleness check | `curriculum.yml` | Generated files out of sync with their sources |
| htmlhint | `static-site-checks.yml` | Malformed HTML, duplicate IDs, unclosed tags |
| Android build | `build-apk.yml` on PRs | Java and resource errors |
| Docker build | `docker.yml` on PRs | Broken image |
| Link check | `link-check.yml` weekly | Dead links in docs and content |
| Headless-browser walkthrough | run by hand with Playwright before each v2 release | JavaScript errors across picker → desk → browse → back → tests → resources → lectures → profile; offline bundle; splash rendering |

## Known gaps

- **`prettier --check` currently fails.** `static-site-checks.yml` checks formatting of every HTML, CSS, JS, Markdown, YAML and JSON file, and about 700 files, mostly generated curriculum and older hand-written files, are not Prettier-formatted, so the workflow is red on every push. The options are to format the hand-written files once and add a `.prettierignore` for generated output, or to drop formatting from CI. This is a decision for the maintainers.
- **No unit tests.** The generator's parser, the seeded quiz builder, the programme API (`getPlanEntries`, `findPlacement`) and `calculateStats` are pure functions and should have unit tests.
- **The browser walkthrough is not in CI.** A Playwright smoke test against `npm start` would catch most regressions in the pages.
- **The schema is not tested.** A CI job that applies `docs/academy_schema.sql` to a throwaway Postgres would have caught the missing `banned_devices` table, which was added to the schema in 2.2.1.

# 31. Performance

| Technique | Where |
|---|---|
| Content split per subject, loaded on demand | `loadCourseData`, `loadCourseScripts` |
| Preload only the current view's subjects | `preloadRemainingCourses` |
| Mermaid loaded only when a topic has a diagram | `app.js` |
| Prefetch pages on link hover | `initInstantPrefetch` in `shared.js` |
| Config and session cached per tab, revalidated in background | `sessionStorage` |
| Tailwind purged and minified | `npm run build:tailwind` |
| gzip | `compression` in `server.js`; Vercel compresses automatically |
| Lazy iframes | lecture player `loading="lazy"` |
| Debounced cloud sync | 2.2 s / 9 s / 12 s gap |
