# Part II — The study desk {.part}

How the May build was put together, and why it was put together that way.

# 4. Architectural choices

## No framework, on purpose

The obvious choice in 2026 for a site like this is a JavaScript framework: React or Vue for the interface, a bundler to build it, and a router to move between pages. I chose none of them, and the reasons still hold.

The first reason was the audience. Most RGPV students open the site on a mid-range Android phone over a mobile connection, often inside a college building with poor signal. A framework adds a runtime that must download and start before anything appears; plain HTML appears as soon as it arrives. The second reason was editing. In May the content changed every hour. With plain files, a change to a topic is an edit to one JavaScript object and a page refresh, with no compiler, no watcher and nothing to install. The third reason was longevity. A static site with no build step can be served by anything, from Vercel to a USB stick, and will still open in ten years. A framework project from 2026 may not even install in 2030.

The cost of that choice is real and I have paid it. Without components, the same markup patterns are repeated as template strings across several files. Without a state library, every page has to subscribe to the same custom events by hand. Without a router, each feature is its own HTML page that loads the shared script. I would make the same choice again for this project, but I would no longer pretend it is free.

## One shared script, many pages

The site is a set of pages, `index.html` for the landing page and the study desk, and `html/tests.html`, `html/lectures.html`, `html/resources.html`, `html/profile.html` and a few informational pages, each of which loads `js/shared.js` first and then its own script.

`shared.js` is an immediately-invoked function that builds a single object, `window.ACADEMY`, and everything that more than one page needs hangs off it: the student's state and the functions that save it, cloud sync, sign-in, the programme API added in November, statistics, export, escaping helpers and a small prefetcher that warms the next page when a link is hovered. Page scripts read and write state only through that object. When the state changes, `shared.js` dispatches an `academy:state-changed` event on `window`, and any page that cares re-renders its parts.

This pattern, one global namespace and DOM events, is old-fashioned, but it has two properties I value. Any page can be understood by reading two files. And nothing breaks when a page is opened directly from disk, which is exactly how the Windows app's offline mode serves the site years later.

## Data as JavaScript

The curriculum is stored as JavaScript rather than JSON. `js/data.js` defines `coursesData`, the list of subjects with their units and topic titles, and the detailed content lives in one file per subject, `js/data_<id>.js`, which fills a global object `window.topicDetails[unitId][topicId]` with the topic's HTML and its quiz questions.

Using JavaScript files instead of JSON fetched over HTTP has a practical advantage: a `<script>` tag works from `file://` URLs, while `fetch` of a local JSON file does not. The study desk loads only `data.js` up front, a few hundred kilobytes describing every subject's outline, and loads a subject's detail file the first time the student opens that subject, by inserting a `<script>` element and waiting for its `load` event. In November, with 163 subjects and about thirty megabytes of content, that lazy loading is the only reason the desk still opens in a second.

## Pages, not a single-page app

Each feature is a separate page because each feature has a different shape. The study desk is a three-column reader. The tests page is a quiz engine with a timer. The lectures page is a player with a playlist drawer and a chat panel. Forcing them into one page would have meant one large script that knows about everything. Separate pages let each script stay focused, and the shared object keeps them consistent. The price is a full page load when moving between features, which the hover prefetcher mostly hides.

# 5. Anatomy of a topic page

## The template

Every topic in Academy LMS follows the same outline, which grew out of how I revised for the sixth semester:

1. A title and a line giving the subject code and unit.
2. A short overview: what this topic is, in two or three sentences.
3. **Core concepts and key points**: a grid of cards, each defining one term the topic depends on.
4. A **concept map**: a Mermaid diagram linking the topic to the ideas around it, with links to the previous and next topics.
5. A **quick revision table**: term and meaning, in a form that can be copied into a notebook the night before.
6. An **in-depth explanation**: the long-answer material.
7. An **RGPV exam blueprint**: what a two-, four- and seven-mark answer on this topic should contain.
8. **Video lectures and study material**: lecture links, the subject's notes PDF and model paper, the official RGPV portal and standard textbooks.
9. A short quiz.

![The nine sections of every topic page.](../figures/topic-anatomy.svg)

The hand-written pages from May and September follow this outline loosely; the generated pages from November follow it exactly, because the generator writes it. Keeping the outline fixed has a cost, since some topics deserve a worked derivation rather than a table, but it has a much larger benefit: a student who has read one page knows where everything is on every other page.

## Diagrams with Mermaid

Diagrams are written as text inside the content, in a `<div class="mermaid">`, and rendered in the browser by Mermaid. That decision made the content possible at all. Drawing hundreds of diagrams by hand in a drawing tool and exporting images would have taken weeks and made every correction painful; writing `graph LR; A --> B` takes seconds and diffs cleanly in Git.

Mermaid is large, so it is not loaded with the page. The study desk checks whether the topic it has just rendered contains a diagram, and only then inserts the Mermaid script, initialises it once with a neutral theme, and renders the diagrams in place. Topics without diagrams never pay for it.

## Highlights and notes

Two features turned the topic page from something you read into something you study from. The first is highlighting: select text in a topic and a small toolbar appears with *Highlight*, *Remove current*, *Remove last* and *Cancel*. Highlights are stored per topic as the selected text, and re-applied by searching for it whenever the topic is rendered. The second is notes: each topic has a notes box that saves as you type. Both live in the student's state, so they survive a refresh, and they travel with the profile export.

That toolbar later caused one of November's bugs. A CSS rule gave the toolbar `display: flex`, which silently overrode Tailwind's `hidden` class, so on the landing page the four buttons were permanently visible over the hero text. The fix was one line, `.selection-menu.hidden { display: none; }`, but finding it meant noticing that "the toolbar is always there" was a styling bug, not a logic bug.

# 6. The progress engine

## One object, saved on every change

Everything a student does is recorded in a single state object, saved to `localStorage` under the key `academy_lms_state_v4`. Its fields read like a list of the features: `completedTopics`, `quizAttempts`, `notes`, `highlights`, `bookmarks`, `examDrafts`, `practiceSessions`, `recentTopics`, `lastVisited`, the student's name and avatar, a randomly generated `deviceId`, and a `remoteSync` block describing the last cloud sync. The `v4` in the key records that the format has changed three times before. Each change used a new key instead of converting old data, which is a simple approach, but it guarantees that a browser holding old data never fails on the new format.

Loading the state is defensive. It reads the stored JSON, merges it over a default object so that missing fields are filled in, generates a device ID if there is none, and, if the stored data cannot be parsed at all, starts fresh rather than leaving the page blank. Saving stamps `updatedAt`, writes the JSON back and dispatches the change event.

## Statistics that answer "where am I?"

The profile page and the study desk's overview cards are driven by one function, `calculateStats`, which walks the curriculum and the state together and returns, for each subject, how many topics exist and how many are done, the overall completion rate, quiz accuracy, the number of notes, highlights and bookmarks, and the last visited topic. In November it gained one important change: the totals are now scoped to the student's own semester. Before that, a sixth-semester student who had finished every sixth-semester topic still saw "34% complete", because the denominator included every other semester on the site.

## Export and sync

A student can download their whole state as a JSON snapshot from the profile page. The snapshot includes a `topicDirectory` that maps topic IDs to readable titles, so the file means something outside the site. To keep it small, the directory includes only topics the student has actually touched; with 3,300 topics on the site, including all of them would have made every snapshot hundreds of kilobytes.

When the student is signed in, the same state is synchronised to the cloud. The sync is deliberately lazy: a change schedules a sync a couple of seconds later if the page is in the foreground and about nine seconds later if it is not, and no two syncs run within twelve seconds of each other. A burst of quiz answers therefore produces one upload rather than twenty. Chapter 8 describes what happens on the server.

# 7. Practice

## Drills, mock tests and history

The tests page grew from a simple idea: every topic already has quiz questions, so the whole subject has a question bank. `buildPracticeBank` collects every question from every loaded subject in the student's semester, and the page offers two modes on top of it. *Topic drills* pick a set of questions for a subject or a unit and give instant feedback on each answer. *Timed mock exams* pick a larger set, start a countdown, and submit automatically when time runs out. Every session is saved with its score, mode, duration and timestamp, and the history panel lists past sessions so that a student can see whether the last week of revision actually moved their accuracy.

## Flashcards

Flashcards came next. They reuse the same question bank: the deck is twenty-five random questions from the student's semester (or one subject), the front of each card shows the question, the back shows the answer, and the student marks each card *mastered* or *needs review*. The page keeps a running count of both. It is not spaced repetition, because cards marked for review do not come back on a schedule, and that is an obvious improvement waiting to be made. Even in this simple form, it was the part of the tests page that classmates told me they used most in the last two days before a paper.

## Numerical trainers

The most satisfying part of the practice module to build was the set of numerical trainers, one for each kind of calculation that RGPV papers love: IPv4 subnetting for Computer Networks, RSA and Diffie–Hellman key exchange for cryptography, the critical path method for Project Management, parsing tables for Compiler Design, DFA minimisation, functional-dependency closure for databases, cellular frequency reuse for wireless communication, HDFS block placement for big data, and a few architecture calculations. Each trainer generates a fresh problem with random numbers, checks the student's answer, and can reveal a worked solution.

These trainers are hand-written and exist only for CSE subjects. They are one of the clearest places where the November rebuild did not reach: the generated subjects have drills, mock tests and flashcards, but no numerical trainers yet. A Thermodynamics cycle trainer or a beam shear-force trainer would be just as useful to a Mechanical or Civil student, and the roadmap lists them.
