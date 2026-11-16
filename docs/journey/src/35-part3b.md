# 13. Lectures

## Embedding YouTube

Almost every RGPV student learns part of every subject from YouTube. The lectures page exists to make that less chaotic: one place that lists the useful playlists for each subject, plays them without leaving the site, and keeps the chat room for that lecture alongside.

The player is a plain YouTube embed: an `<iframe>` pointed at an `/embed/` URL, with `loading="lazy"`, a strict referrer policy and the usual `allow` list for autoplay, fullscreen and picture-in-picture. There is no wrapper library and no YouTube IFrame API script; the page only needs to show a video, not control it. A small function, `normalizeLectureUrl`, turns whatever link I pasted into an embed URL. A `watch?v=` link becomes `/embed/<id>`, a `youtu.be` short link becomes the same, a link with a `list=` parameter keeps the playlist, and a bare playlist becomes `/embed/videoseries?list=<id>`. Every embed adds `rel=0` so the end screen suggests videos from the same channel rather than anything YouTube likes.

By default the embed is served from `www.youtube-nocookie.com`, YouTube's privacy-enhanced mode, which does not set tracking cookies until the student actually plays the video. A toggle switches to the normal `www.youtube.com` host, because a few videos refuse to play in privacy mode and some networks block the nocookie domain. When a video still refuses to load, a *reload player* link resets the iframe, which fixes the most common failure: an embed that stalled on a slow connection.

## The playlist library

The curated playlists live in `js/lecture-library.js`, about 1,400 lines of objects describing each playlist or video: subject, semester, title, channel, URL and a short note on what it covers. On 29 May the lecture tab gained a searchable, multi-subject picker, and on 13 September the old sidebar was replaced with a *playlist drawer* that slides over the player on phones.

## Generated lecture shelves

The November rebuild added 148 subjects, and I could not hand-pick playlists for all of them. Instead, each generated subject gets a *lecture shelf*: for every unit, a set of YouTube search links built from the unit and topic names ("Strength of Materials unit 3 bending stress RGPV"), labelled as searches. The lectures page builds these shelves from the curriculum, and topic pages carry the same links.

This is the part of version two I am least satisfied with. A search link is honest, because it says what it is and always returns something, but it is not curation, and the quality of the results varies. Hand-picking playlists for the most-studied subjects of each branch is near the top of the roadmap, and the shelf format was designed so a curated playlist can replace a search link without changing anything else.

# 14. The fix-up week

## Five pull requests

On 29 May five pull requests landed from my second GitHub account, each a focused fix found by actually using the site for a week:

1. **Postgres parameter typing in the Google sign-in upsert.** The query used a parameter whose type Postgres could not infer, so sign-in failed for new accounts.
2. **Vercel Blob SDK versions.** The browser and server halves of the upload library were on different versions, and browser uploads failed.
3. **Study file uploads, byte formatting and PDF keyword checks.** PowerPoint uploads were rejected by an over-strict content-type check, the profile page crashed on files without a recorded size, and solutions gained the automatic keyword check.
4. **Resources auth bootstrap, and Tailwind built instead of loaded from a CDN.** The resources page called the session API before the shared script had set up sign-in, and the site was still styled by the Tailwind CDN script.
5. **A searchable multi-subject lecture picker**, replacing a fixed list that had grown too long.

Working through pull requests, even alone, changed how I worked. Each fix had to be described, kept small and reviewed as a diff before it was merged, and each one is still readable in the history as a unit. Compare that with 13 May, when a single commit could add a feature, restyle the site and delete a hundred thousand lines.

## Leaving the Tailwind CDN

The first version loaded Tailwind from `cdn.tailwindcss.com`, which compiles CSS in the browser on every page load from the class names it finds. It is the fastest way to start and the wrong way to ship: Tailwind's own documentation says not to use it in production, it adds a large script to every page, and the page briefly appears unstyled before the script runs.

The fix moved Tailwind to a build step. `tailwind.config.cjs` lists the files to scan (the HTML pages, every script in `js/` and the admin pages), `assets/css/tailwind.input.css` holds the three Tailwind directives, and `npm run build:tailwind` produces a minified `assets/css/tailwind.css` containing only the classes actually used. The build output is committed, so the deployed site still has no build step; the step runs on my machine when the markup changes. The site's own design, the colour variables, panels, cards, pills and the light background gradient, lives separately in `assets/css/app.css`, which loads after Tailwind and overrides it where the two disagree.

The one trap with this setup arrived in November. Tailwind only generates classes it can see in the scanned files, and the generated subject files are in `js/`, so classes used only in generated topic pages are picked up. But a class built from pieces at runtime, for example a colour name chosen from a variable, is invisible to the scanner and silently missing from the CSS. Generated markup therefore uses whole class names, never assembled ones.

# 15. September

## Semesters five and seven

In September the site grew from one semester to three. The fifth semester added Theory of Computation, Database Management Systems, Data Analytics and its Cyber Security elective, and Internet and Web Technology. The seventh semester added Software Architectures, the two CS-702 electives Big Data and Wireless and Mobile Computing, and the two CS-703 electives Cryptography and Information Security and Disaster Management. That made fifteen hand-written subjects, about 350 topics, and the first semester filter on the study desk.

The filter was a row of pills, *Sem 5*, *Sem 6*, *Sem 7*, and it worked because there were only three semesters and one branch. It is also the direct ancestor of the navigation problem in Chapter 18: a sixth-semester student who tapped the wrong pill saw a different semester's subjects with nothing to say that they had left their own.

## Speed

On 13 September "optimize app performance and loading" attacked load time. The local Express server gained gzip compression. The shared script began caching the app configuration and the auth session in `sessionStorage`, so moving between pages no longer waited on two API calls before rendering; the cached values are shown immediately and revalidated in the background. The study desk began preloading the other subjects of the current view after the first one rendered. And the hover prefetcher appeared: when the pointer enters a link to another page of the site, a `<link rel="prefetch">` asks the browser to fetch that page in the background, so the click usually lands on a page that has already arrived.

## The first Android build and Vercel

On 4 September the project gained two things that later grew into the release pipeline. The first was an Android app: a minimal native project whose only activity is a WebView pointed at the live site, built by a GitHub Actions workflow. The second was `vercel.json`, a one-line file setting `outputDirectory` to `.` so that Vercel serves the repository root as the site and the `api/` folder as functions, with no framework detection and no build command.

The first Android workflow had a bug that took two months to notice: it published a GitHub Release tagged `v1.0.0` on every push to `main`, overwriting the same release again and again. Version two split it into a continuous-integration build on every change to the Android code and a separate release workflow that runs only for version tags.
