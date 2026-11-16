# 20. Shipping

## Three products from one folder

By version two, Academy LMS ships as three things built from the same code: the website on Vercel, a Windows app and an Android app. Neither app contains a second copy of the logic. Both are thin shells around the website, and the differences between them are only in how they start, what they do when the internet is missing, and how they are installed.

![The release pipeline: one tag builds every app.](../figures/release-pipeline.svg)

## The Windows app

The Windows app is built with Electron, which packages a copy of the Chromium browser and Node.js into a normal Windows program. The project lives in `desktop/`: a `package.json` with the `electron-builder` configuration, `main.js` for the main process, `bundle-site.js` to copy the site, and a splash page.

`main.js` does four things. It shows a splash window first: frameless, transparent, with the emblem glowing in with a slight bounce, the name and tagline rising beneath it, and a loading bar sweeping underneath. It creates the main window hidden and loads the live site. When the page finishes loading, after at least 2.2 seconds so the animation is never cut off, and at most eight, it shows the main window and closes the splash. And if the live site fails to load, it loads the bundled copy of the site from disk instead, so notes, quizzes and the generated PDFs still work offline. Links to YouTube, the RGPV portal and textbooks open in the student's normal browser rather than inside the app.

`electron-builder` produces two files: an NSIS installer, which installs the app with a Start menu entry and a desktop shortcut and lets the user choose the folder, and a portable EXE that runs without installing. Both use the Academy LMS emblem as their icon.

## The Android app

The Android app is a native project in `android/` with a single activity, `MainActivity`, written in Java. It hosts a WebView inside a swipe-to-refresh layout with a thin progress bar, enables JavaScript and DOM storage so the progress engine works, accepts cookies so sign-in works, opens external links in the system browser, and makes the back button navigate back inside the site before leaving the app.

The splash screen is built in code rather than as a video. While the site loads, a layer covers the WebView with a radial gradient, the emblem scales up from 55% with a small rotation and an overshoot, then pulses gently; the title and tagline slide up beneath it with a delay; and a gradient bar sweeps beneath them. The layer stays for at least 2.2 seconds and fades out once the page has loaded, or after seven seconds at most. On Android 12 and later the system's own splash screen shows the emblem first and hands over to the animated one.

I tried another route first. I wanted a generated video intro, wrote a detailed prompt for an AI video model, and abandoned it when the results looked worse than a few lines of animation code. The coded splash is smaller, sharper on every screen density, and can wait for the page to load, which a video cannot.

## Icons

The Academy LMS logo is a wide image: a glowing graduation cap over a circuit-board brain, beside the name. An app icon needs only the emblem, square, and on Android it needs an *adaptive* icon: a foreground layer that the system can mask into a circle, a squircle or a teardrop, over a background colour. The icons were cut from the logo, the dark background removed with a brightness key so the glow fades to transparency instead of leaving a box, and exported at every Android density from 48 to 432 pixels, plus a multi-size Windows `.ico`.

## Releases

`release.yml` runs when a version tag such as `v2.2.0` is created, usually by publishing a release on GitHub. It has three jobs. The Android job bundles the site into the app, builds the APK with Gradle, and signs it if the signing key is available as a repository secret. The Windows job copies the site into `desktop/site`, installs Electron and builds both EXEs on a Windows runner. The publish job runs only if both succeed, and attaches the APK, the installer and the portable EXE to the release. A separate `docker.yml` builds a container image for every push and tag and publishes it to the GitHub Container Registry, and `play-bundle.yml`, run by hand, builds the signed Android App Bundle that Google Play requires.

The Docker image exists for people who want to run the whole thing, functions included, on their own machine or a server. The `Dockerfile` installs the production dependencies, copies the site, and runs `server.js`, a small Express server that serves the static files with compression and dispatches `/api/*` requests to the same handler files Vercel uses. With no `DATABASE_URL`, the functions fall back to the in-memory store, so `docker compose up` gives a working site with no configuration at all.

# 21. Offline and the Play Store

## Offline on Android

The first Android app had an obvious gap: without internet it showed Android's "Webpage not available" error. Version 2.2 bundles the site into the APK at build time with `scripts/bundle-android-site.js`. That is every page, script, stylesheet and generated subject file, but not the PDFs, which would add tens of megabytes; the Markdown versions of the notes are included. The bundle is about 33 MB uncompressed and adds about 4 MB to the APK, because JavaScript compresses well.

The app serves the bundle through `WebViewAssetLoader` at `https://appassets.androidplatform.net/assets/site/`, a real HTTPS origin, rather than from a `file://` URL. That matters: `localStorage`, relative links and script loading all behave exactly as they do on the website. If the device is offline when the app starts, or the live site fails to load, the app opens the bundled copy. Pull-to-refresh tries the live site again once a connection returns.

The cost is honest to state. The bundled copy and the live site are different origins, so progress made offline lives in a separate store from progress made online. A student who mostly studies offline is unaffected; one who switches back and forth sees two sets of progress until they sign in, which syncs the online one. Making the two stores reconcile automatically is on the roadmap.

## Android 16

Google Play requires new apps to target the latest Android version, which in November 2026 is Android 16 (API level 36). Targeting it changes three behaviours, and each needed code. Apps are drawn edge to edge, under the status and navigation bars, so the root layout now applies the system-bar, display-cutout and keyboard insets as padding. The back gesture is *predictive*: the system no longer delivers the back key to the activity, so back navigation moved from `onKeyDown` to an `OnBackPressedCallback` that goes back in the WebView and only leaves the app at the first page. And the build tools moved to Android Gradle Plugin 8.11 and Gradle 8.14.

## Getting ready for Google Play

Publishing on Google Play costs a one-time $25 registration fee, and a new personal developer account must first run a closed test with at least twelve testers who stay opted in for fourteen consecutive days. I decided not to rush that. The better order is to grow real users on the website first; they become the testers, and later the first reviews.

The repository is ready for the moment that happens. `docs/play-store/` contains the store listing text within Google's length limits, a 512-pixel icon, a feature graphic, six captioned phone screenshots, answers for the data-safety and content-rating forms, a step-by-step launch guide covering the signing key, the GitHub secrets, the account and the closed test, and a share kit of ready-to-paste messages for WhatsApp, Instagram and LinkedIn.
