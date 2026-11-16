# Part III — The front end {.part}

Pages, the shared script, state, and every feature a student touches.

# 7. Pages and the shared script

::: {.callout data-title="In plain terms"}
Everything you see is built in your browser. Your progress, notes and highlights are saved on your own device first, so the site works without an account. If you sign in, a copy is also saved online so it follows you to other devices. Choosing your branch and semester once makes every page show only your subjects.
:::


## Page lifecycle

Every page follows the same order:

1. `assets/css/tailwind.css`, Google Fonts and `assets/css/app.css` load in the `<head>`. Pages that offer sign-in also load Google's `gsi/client` script asynchronously.
2. At the end of `<body>`, `js/data.js` (pages that need the curriculum), then `js/resource-library.js` (where needed), then `js/shared.js`, then the page's own script.
3. `shared.js` builds `window.ACADEMY`, loads the state from `localStorage`, renders the navigation bar, starts the hover prefetcher and, in the background, loads the app configuration and the session.
4. The page script initialises on `DOMContentLoaded` and subscribes to `academy:state-changed` and `academy:program-changed`.

## The `window.ACADEMY` API

| Group | Functions |
|---|---|
| State | `state`, `persistState`, `markTopicComplete`, `recordQuizAttempt`, `recordPracticeSession`, `getPracticeSessions`, `setNote` / `getNote`, `addHighlight` / `removeHighlight` / `getHighlights` / `clearHighlights` / `applyHighlights`, `toggleBookmark` / `isBookmarked` / `getBookmarkedTopics`, `setExamDraft` / `getExamDraft`, `setLastVisited`, `getRecentTopics`, `getContinueTopic` |
| Curriculum | `getAllTopics`, `getTopicMeta`, `getUnitMeta`, `getLoadedQuestionBank`, `loadCourseScripts(ids, basePath)` |
| Programme | `getProgram`, `setProgram(branch, semester)`, `hasStoredProgram`, `getBranches`, `getBranchPlan`, `getSemestersFor(branch)`, `getPlanEntries(branch, semester)`, `getPlacements(courseId)`, `findPlacement(courseId, preferBranch, preferSemester)`, `getDisplayCode`, `getProgramLabel`, `getRecentPrograms`, `getDegree` |
| Statistics | `calculateStats`, `getStorageSummary`, `exportStudentSnapshot` |
| Sync | `scheduleCloudSync`, `syncStateToCloud`, `getRemoteSyncStamp`, `setRemoteSyncStamp` |
| Auth | `loadAppConfig`, `getAppConfig`, `hydrateAuthSession`, `getSignedInStudent`, `isAuthenticated`, `isAdmin`, `signInWithGoogle`, `logoutStudent`, `showSignInPrompt`, `requireStudentAuth`, `buildSigninRedirect` |
| Profile | `getStudentName` / `setStudentName`, `getProfileAvatar` / `setProfileAvatar` |
| Utilities | `escapeHtml`, `escapeForAttribute`, `escapeRegExp` |

## Events

| Event | Fired by | Detail | Listened to by |
|---|---|---|---|
| `academy:state-changed` | `persistState` | `{ updatedAt, remoteSync }` | study desk, profile, navigation badges |
| `academy:program-changed` | `setProgram` | `{ branch, semester }` | study desk, tests, resources, lectures, profile |

# 8. State and storage

## Keys in `localStorage`

| Key | Contents |
|---|---|
| `academy_lms_state_v4` | The student's whole study state (below) |
| `academy-program-v1` | `{ branch, semester }`, default `{ branch: 'CSE', semester: 6 }` |
| `academy-recent-programs-v1` | The last four programmes, newest first |
| `academy_admin_secret` | Admin dashboard only: the secret, if one was typed |

`sessionStorage` caches the app configuration and the auth session between pages (`academy_cached_config`, `academy_cached_auth`) and is revalidated in the background.

## The state object

| Field | Shape | Meaning |
|---|---|---|
| `completedTopics` | `{ <topicKey>: true }` | Topics marked complete |
| `quizAttempts` | keyed by quiz → `{ courseId, topicId, question, selected, correct, attemptedAt }` | Topic quiz answers |
| `notes` | keyed by topic → text | Notes typed under a topic |
| `highlights` | keyed by topic → `[text, …]` | Highlighted passages |
| `bookmarks` | keyed by topic → `true` | Bookmarked topics |
| `examDrafts` | keyed by unit → text | Long-answer drafts |
| `practiceSessions` | newest first, last 20 kept; each session plus `finishedAt` | Drill and mock history |
| `recentTopics`, `lastVisited` | topic keys | *Continue studying* |
| `studentName`, `avatarUrl` | strings | Profile |
| `deviceId` | UUID | Guest identity on the server |
| `profileStartedAt`, `updatedAt` | ISO timestamps | — |
| `remoteSync` | `{ lastSyncedAt, lastStatus, lastMessage }` | Last cloud sync |

`loadState` merges the stored JSON over defaults, fills a missing `deviceId`, and starts fresh if the JSON cannot be parsed. Progress is keyed by subject and topic, never by programme, which is why switching programme never loses work.

## Cloud sync timing

| Constant | Value | Effect |
|---|---|---|
| `FOREGROUND_SYNC_DELAY_MS` | 2,200 ms | Delay after a change while the page is visible |
| `BACKGROUND_SYNC_DELAY_MS` | 9,000 ms | Delay while the page is hidden |
| `MIN_SYNC_GAP_MS` | 12,000 ms | Minimum gap between two syncs |

A sync posts the state to `/api/profile`, which stores a snapshot and derived rows (topic progress, quiz attempts, practice sessions).

# 9. The study desk

## Loading

`js/app.js` starts with `initApp`: it renders the overview cards and the navigation strip, aligns the view with the stored programme (`alignViewWithProgram`), loads the first subject's detail file with `loadCourseData`, renders it, then preloads the remaining subjects *of the current view only*. On a first visit, with no stored programme, it opens the programme picker; with `?pick=1` in the URL (the profile page's *Change programme* link), it opens the picker too.

`loadCourseData(id)` inserts `<script src="js/data_<id>.js" data-course-script="<id>">`, waits for `onload`, and shows an error card on `onerror`. Already-loaded subjects are remembered so no file is fetched twice.

## Navigation state

The desk keeps `viewBranch` and `viewSemester` separately from the stored programme. When they match the programme, the desk is in *my programme* mode; when they do not, it is in *browsing* mode and renders a banner with a *Back to* button (`returnToMyProgram`). `renderCoursesNav` draws the programme chip, the semester tabs (the student's own semester starred) and one pill per subject with *done/total*. It also sets `document.documentElement.dataset.branch`, which drives the accent colour.

![Navigation states.](../figures/navigation.svg)

![The programme picker as a student first sees it.](../figures/programme-picker.png){.screenshot}

## The programme picker

`openProgramPicker({ firstRun })` builds a modal (`#programPickerModal`) with a degree toggle (B.Tech / M.Tech, filtering branches by `branch.degree`), a *Recent* row, the branch grid, the semester row and a live preview from `getPlanEntries`. *Set as my programme* calls `setProgram`; *Just browse this semester* only changes the view. The first-run picker cannot be dismissed without choosing.

## Topic rendering

A topic's HTML comes from `window.topicDetails[unitId][topicId].content` and is inserted into `#topicContentArea`. Then:

1. If the content contains `.mermaid`, Mermaid is loaded once (from jsDelivr), initialised with `startOnLoad: false` and `theme: 'base'`, and run over the new diagrams.
2. Saved highlights are re-applied (`applyHighlights`), by searching the rendered text for each stored passage.
3. The notes box, bookmark toggle and *mark complete* button are bound to the topic key.
4. The quiz, from `.quizzes`, is rendered below, and answers are saved with `recordQuizAttempt`.

## Highlights toolbar

Selecting text inside the topic shows `#selectionActionMenu` with *Highlight*, *Remove current*, *Remove last* and *Cancel*. It is hidden with Tailwind's `hidden` class; `app.css` includes `.selection-menu.hidden { display: none; }`, because the menu's own `display: flex` would otherwise override `hidden`.

# 10. Practice (`html/tests.html`, `js/tests.js`)

![The practice page: drills and timed mock exams for the student's semester.](../figures/practice-tests.png){.screenshot}


| Feature | How it works |
|---|---|
| Question bank | `buildPracticeBank` collects every quiz from loaded subjects; filtered to the programme's semester (`getTestEntries`) |
| Branch / semester controls | `#testBranchSelect`, `#semFilterGroup`, `#coursePillContainer`; changing semester loads its subject files with `loadCourseScripts` |
| Topic drills | `buildPracticeSession('drill')`; instant feedback per answer |
| Timed mock exams | `startMockTest(minutes)`; countdown; `submitCurrentSession(autoSubmitted)` when time runs out |
| History | Each session saved with `recordPracticeSession`; listed by `renderPracticeHistory` |
| Flashcards | 25 random questions; flip; mark *mastered* or *needs review*; running counts |
| Numerical trainers (CSE) | Subnetting, RSA, Diffie–Hellman, critical path, parsing tables, DFA minimisation, FD closure, cellular reuse, HDFS placement, architecture; each generates a problem, verifies and reveals a solution |

# 11. Lectures (`html/lectures.html`, `js/lectures.js`)

## Embedding

The player is a plain `<iframe>`:

```html
<iframe id="lecturePlayerIframe" src="https://www.youtube-nocookie.com/embed/VIDEO?rel=0"
        loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
```

The page uses YouTube's standard embedded player directly; no additional player library is involved, because the site only needs to display videos, not control them. A small function, `normalizeLectureUrl`, converts any stored YouTube link into the embedded form:

| Input | Embed URL |
|---|---|
| `youtube.com/watch?v=ID` | `/embed/ID?rel=0` |
| `youtube.com/watch?v=ID&list=PL` | `/embed/ID?list=PL&rel=0` |
| `youtu.be/ID` | `/embed/ID?rel=0` |
| `youtube.com/playlist?list=PL` | `/embed/videoseries?list=PL&rel=0` |
| an existing `/embed/` URL | host swapped to the current mode |
| `youtube.com/results?…` (search) | not embedded; opened as a link |

The host is `www.youtube-nocookie.com` by default (privacy-enhanced: no tracking cookies until playback) and `www.youtube.com` in *direct* mode, which a toggle switches to when a video refuses to play. *Reload player* blanks and restores the iframe.

![The lecture page: player, playlist drawer and lecture room.](../figures/lectures.png){.screenshot}

## Library and shelves

`js/lecture-library.js` holds curated entries: `{ type: 'playlist' | 'video', subject, semester, title, channel, url, note }`. Generated subjects get unit-wise *shelves* of YouTube search links built from subject, unit and topic names. `lectureInActiveSemester` scopes the list to the programme.

## Lecture rooms

While a lecture is open, a timer sends a heartbeat (`sendLectureHeartbeat`) and fetches chat for two scopes, `local` (this lecture) and `global` (the lectures page), via `/api/lecture-chat`. It skips a tick if the tab is hidden or a previous request is still running. Messages are posted with `POST /api/lecture-chat`.

# 12. Resources (`html/resources.html`, `js/resources.js`)

![The resource library, filtered to the student's semester.](../figures/resources.png){.screenshot}

`js/resource-library.js` is the manifest: an array of entries such as `{ subject, subjectLabel, type, typeLabel, title, path, extension, branches, semesters, generated }`. Its hand-curated part is rewritten by `organize_resources.js`; its generated part lives between `// <<MULTIBRANCH-RESOURCES:START>>` and `// <<MULTIBRANCH-RESOURCES:END>>`. The page has two scopes, *My semester* (default, `resourceInMyProgram`) and *All*, plus type filters (notes, mock papers, assignments, slides) and search. Signed-in students can also upload, see Chapter 19.

# 13. Profile (`html/profile.html`, `js/profile.js`)

The profile shows identity (name, avatar, bio, headline, links), statistics from `calculateStats` scoped to the programme, course coverage with a *Change programme* link (`../index.html?view=study&pick=1`), recent activity, the export button (`exportStudentSnapshot`, a JSON file whose `topicDirectory` includes only touched topics), and the social panel: connection requests, connections and direct messages.

# 14. Styling

## Layers

1. **Tailwind CSS 3**, built ahead of time. `tailwind.config.cjs` scans `index.html`, `html/**/*.html`, `js/**/*.js` and `admin/**/*.{js,html}`, and sets Manrope as the sans font. `assets/css/tailwind.input.css` contains the three `@tailwind` directives. `npm run build:tailwind` writes the minified `assets/css/tailwind.css`, which is committed so the site has no deploy-time build.
2. **`assets/css/app.css`** (about 1,380 lines) loads after Tailwind and defines the identity:
   - custom properties: `--bg`, `--panel`, `--line`, `--text`, `--muted`, `--accent` (#2563eb), `--warm`, `--danger`
   - the light background, radial gradients over a pale blue linear gradient
   - components: `.panel-card`, `.metric-card`, `.course-pill(-active)`, `.nav-pill`, `.primary-cta`, `.secondary-cta`, `.quiz-option-*`, `.flashcard-*`, `.chat-bubble-*`, `.program-chip`, `.pick-*`, `.browse-*`, `.modal-shell`, `.progress-bar`
   - motion: `.rise-in`, `.reveal`

## Light theme over dark content

The original topic content was written for the dark May theme, with classes such as `bg-gray-800/90` and `text-gray-300`. Rather than rewrite 15 subjects, `app.css` re-maps those classes inside `#topicContentArea` to light panels and dark text. Generated topics use the same classes, so they inherit the same mapping.

## Branch accents

```css
html[data-branch] { --branch-accent: #2563eb; }          /* CSE */
html[data-branch="IT"] { --branch-accent: #0891b2; }
html[data-branch="EC"] { --branch-accent: #7c3aed; }
html[data-branch="EX"] { --branch-accent: #ca8a04; }
html[data-branch="ME"] { --branch-accent: #ea580c; }
html[data-branch="CE"] { --branch-accent: #b45309; }
html[data-branch="AU"] { --branch-accent: #059669; }
html[data-branch^="MT-"] { --branch-accent: #4f46e5; }   /* all M.Tech */
```

The accent colours the programme chip's border, the active subject pill and topic headings. Layout, components and type are identical across branches.

## Rules for new markup

- Use complete Tailwind class names in source; never build them from fragments, or the scanner will not see them.
- Rebuild Tailwind after adding classes in any scanned file: `npm run build:tailwind`.
- Put identity (colours, components) in `app.css`, layout in Tailwind.
