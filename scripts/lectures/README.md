# YouTube lectures for every subject and topic

All 148 subjects without a hand-curated shelf (`js/lecture-library.js`) now have real YouTube lectures,
and every one of their 2,960 topics has a **Watch lecture for this topic** button.

- **Source:** `found.json` lists, per subject, a full-course playlist plus unit and topic videos
  (RGPV channels such as Education Point and Jishan Ahmad first, then NPTEL, Neso Academy,
  Engineering Funda, MIT OCW and similar). Every ID came from a real YouTube search result.
- **Build:** `node scripts/lectures/build_from_found.mjs` writes `js/lecture-library-auto.js` and
  `REPORT.md`. Each topic gets the video whose title matches it, else its unit's video, else a
  whole-course video, else the subject playlist.
- **Fix a broken link:** replace its ID in `found.json` (`"u"` is the unit number, `0` means the whole
  course; an ID starting with `PL` is a playlist), then rebuild.
- **Test:** `node --test scripts/lectures/` checks that every topic gets a valid YouTube link.

## Optional: YouTube Data API fetcher


`fetch_youtube_lectures.mjs` gives every subject without a hand-curated shelf (`js/lecture-library.js`)
real lectures that play inside Academy:

1. Finds a full-course playlist for the subject on YouTube, preferring trusted channels
   (NPTEL, Gate Smashers, Neso Academy, KNOWLEDGE GATE, Last Moment Tuitions, … see `config.json`).
2. Reads every video in that playlist and keeps only public, embeddable ones.
3. Matches each topic to the video whose title fits it best. A topic with no matching video uses its
   unit's lecture; a unit with neither keeps the YouTube search shelf.
4. Writes `api-results.js` and `REPORT-api.md` (not loaded by the site; use them to improve `found.json`).

Each topic page has a **Watch lecture for this topic** button that opens its video.

Nothing is invented: every video ID comes from the YouTube Data API and is checked to be public and embeddable.

## One-time setup (works from a phone)

1. Create a free API key: open https://console.cloud.google.com/apis/library/youtube.googleapis.com,
   choose or create a project, select **Enable**, then go to https://console.cloud.google.com/apis/credentials
   and choose **Create credentials → API key**. (Optional: restrict the key to "YouTube Data API v3".)
2. Add it to this repository: https://github.com/shiroonigami23-ui/Academy-LMS/settings/secrets/actions/new
   Name `YOUTUBE_API_KEY`, value: the key.
3. Run the workflow: https://github.com/shiroonigami23-ui/Academy-LMS/actions/workflows/lectures.yml
   Open the latest run and choose **Re-run all jobs** (or **Run workflow** once the file is on the default branch).

The run commits the results to `feat/rgpv-all-branches-v2`, so they reach the main project through the pull request.

**Quota:** one key allows about 95 subjects a day. The run caches every answer and resumes where it stopped,
so re-run it the next day until `REPORT.md` shows no *pending* subjects. To finish in one run, create keys in two
different Google Cloud projects and save them comma-separated as the secret `YOUTUBE_API_KEYS` instead.

## Run locally

```bash
YOUTUBE_API_KEY=... node scripts/lectures/fetch_youtube_lectures.mjs            # all subjects
YOUTUBE_API_KEY=... node scripts/lectures/fetch_youtube_lectures.mjs --only=ec602,me301
node --test scripts/lectures/fetch_youtube_lectures.test.mjs                     # self-test with a mock API
```
