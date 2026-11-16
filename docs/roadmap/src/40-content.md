# Part IV — Content {.part}

How the curriculum is stored, written and generated, and how to add to it.

# 15. Data formats

## The outline: `coursesData`

`js/data.js` defines `const coursesData = [ … ]`. Each course:

```js
{
  id: 'ce601',                        // unique, lower-case; also the data file name
  code: 'CE-601',                     // default paper code
  title: 'Structural Design & Drawing (RCC-I)',
  description: '…',
  semester: 6,                        // primary semester (hand-written courses)
  generated: true,                    // only on generated courses
  references: [['Title', 'Author'], …],
  resources: { notesPdf, notesMd, paperPdf, paperMd, bankMd },
  units: [
    { id: 'ce601-u1', unitNumber: 1, title: 'Design Philosophies',
      topics: [ { id: 'ce601-u1t1', title: 'Working Stress vs Limit State' }, … ] },
    …
  ]
}
```

The generated block at the end of `data.js`, between `// <<MULTIBRANCH:START>>` and `// <<MULTIBRANCH:END>>`, pushes the generated courses and defines:

```js
window.BRANCHES = { CSE: { degree: 'B.Tech', name: 'Computer Science & Engineering',
                           short: 'CSE', icon: '💻' }, …, 'MT-PS': { degree: 'M.Tech', … } };
window.branchPlan = { CSE: { 1: [{ id: 'bt101', code: 'BT-101' }, …], …, 8: [ … ] }, … };
```

## The content: `topicDetails`

Each `js/data_<id>.js` adds to a global object:

```js
window.topicDetails = window.topicDetails || {};
window.topicDetails['ce601-u1'] = window.topicDetails['ce601-u1'] || {};
window.topicDetails['ce601-u1']['ce601-u1t2'] = {
  title: 'Limit States',
  content: '<h3 …>Limit States</h3> …',   // HTML string
  quizzes: [ { question, options: [4 strings], answer: index, explanation } ]
};
```

Hand-written files use the same shape, with hand-written HTML and quizzes.

# 16. The curriculum language

## Grammar

```
file     := { comment | subject }
comment  := "//" text
subject  := "@ " id " | " code " | " title " | " description NEWLINE { unit }
unit     := "# " title NEWLINE { topic }
topic    := "- " title " | " overview { " | " term " = " definition }
```

Rules:

1. `|` separates fields and **must never appear inside text**. Write "magnitude of V" rather than `|V|`.
2. A term ends at the **first** ` = ` (space, equals, space); the definition may contain further `=` signs, as in `Gibbs Function = g = h − Ts`.
3. Each topic should have at least three terms. Fewer than four terms across a subject makes MCQ distractors impossible.
4. IDs are lower-case and unique across all files. Electives use a suffix: `ce702a`, `me503-mt`.
5. Every subject has five units of four topics by convention. The generator does not enforce counts, but the model paper assumes five units.

## Files

| File | Contents |
|---|---|
| `00-first-year.txt` | BT-101 to BT-105, BT-201 to BT-205 |
| `01-common.txt` | ES-301 Energy & Environmental Engineering, BT-301 Mathematics-III |
| `02-cse-sem3.txt`, `03-cse-sem4.txt` | CSE semesters 3 and 4 |
| `04-cse-sem8-it.txt` | CSE semester 8 and IT-only papers |
| `05-ec-part1.txt`, `06-ec-part2.txt` | Electronics & Communication |
| `07-me-part1.txt`, `08-me-part2.txt` | Mechanical |
| `09-au.txt` | Automobile semesters 5–8 |
| `10-civil.txt` | Civil |
| `11-electrical.txt` | Electrical & Electronics |
| `12-mtech-a.txt` | Research Methodology & IPR, M.Tech CSE, M.Tech VLSI |
| `13-mtech-b.txt` | M.Tech Thermal, Structural, Power Systems |

## `plan.js`

```js
const BRANCHES = { CE: { degree: 'B.Tech', name: 'Civil Engineering', short: 'CE', icon: '🏗️' }, … };
const FIRST_YEAR = { 1: [e('bt101', 'BT-101'), …], 2: [ … ] };
const PLAN = {
  CE: { ...FIRST_YEAR,
        3: [e('bt301', 'BT-301'), e('ce302', 'CE-302'), …, e('me304', 'CE-305')],
        … },
  'MT-PS': { 1: [ … ], 2: [ …, e('ex702b', 'MPS-203'), e('mt-rm', 'MPS-204') ] }
};
```

`e(id, code)` is a placement. The same `id` may appear in many branches with different codes. An optional `note` on a branch is shown in the programme picker.

## `references.js`

`{ id: [[title, author], [title, author], [title, author]], … }`. Every generated subject must have an entry.

# 17. The curriculum generator

`node scripts/build_multibranch_curriculum.js` (or `npm run build:curriculum`, which also runs the study-file generator).

![Curriculum pipeline.](../figures/curriculum-pipeline.svg)

## Steps

1. **Parse** every `*.txt` in `scripts/curriculum/` in name order (`parseSources`). Errors name the file and line: unknown line prefix, missing fields, a term without ` = `, a duplicate ID.
2. **Validate the plan.** Every planned ID must exist; every subject must be planned somewhere; every subject must have references. Any failure stops the build.
3. **Find each subject's primary semester**, its first placement, used for display defaults.
4. **Render each topic** (`buildTopicHtml`) in the fixed template: heading and code line, overview, core-concept and key-point cards, a Mermaid concept map with previous and next topics, a revision table, an in-depth explanation, the RGPV exam blueprint (a 2–3 mark question per term, a 4-mark comparison of the first two terms, a 7-mark long answer), and study material: four YouTube searches (`ytSearch`), notes PDF, model paper, `rgpv.ac.in` and the three textbooks.
5. **Generate quizzes** (`buildQuizzes`): three per topic. Each is either term → definition or definition → term, alternating, with three distractors from the same subject. Randomness comes from `seededRandom(seedText)`, an FNV-1a hash of the subject and topic IDs feeding a small PRNG, so output is identical on every run.
6. **Write** `js/data_<id>.js` with a header naming the source file, and replace the marked block in `js/data.js`.
7. **Print** a summary: subjects, topics, MCQs.

The script exports `parseSources`, `resourcePaths`, `ytSearch` and `REFERENCES`, which the study-file generator reuses.

# 18. The study-file generator

`node scripts/build_study_resources.js` writes, for every generated subject, to `assets/resources/<id>/`:

| File | Content |
|---|---|
| `notes/<id>-unit-wise-study-notes.pdf` / `.md` | Every unit and topic: overview and terms, for printing |
| `mock-papers/<id>-rgpv-model-question-paper.pdf` / `.md` | Sets A and B: 3 hours, 70 marks, attempt any five of eight, each question two 7-mark parts; Markdown adds answer hints; labelled "not an official RGPV paper" |
| `mock-papers/<id>-question-bank-with-answers.md` | Unit-wise questions with answers |

Details:

- **Fonts.** `pdfkit` registers `scripts/fonts/DejaVuSans.ttf` and `DejaVuSans-Bold.ttf`, so ε, Ω, Δ, ≤ and similar render. The fonts' licence is in `LICENSE-DejaVu.txt`.
- **Determinism.** The PDF `CreationDate` is fixed, so unchanged content produces byte-identical PDFs.
- **Topic rotation.** `modelPaper(course, set)` picks topics by rotating through each unit, offset by the set, so sets A and B test different material.
- **Registration.** Every file is listed in `js/resource-library.js` between `// <<MULTIBRANCH-RESOURCES:START>>` and `:END>>`, with the branches and semesters that can see it.

# 19. The resource organiser

`scripts/organize_resources.js`, run by `organize-resources.yml` on every push to `main`:

1. Lists files in `incoming_resources/`.
2. Classifies each by subject (tokens such as `cs602`, `network`) and type (`notes`, `assignment`, `mock`, `slides`; otherwise `resources`).
3. Moves it to `assets/resources/<subject>/<type>/` with a slug name and builds a title from the filename.
4. Rewrites the hand-curated part of `js/resource-library.js`, **preserving the generated block** and skipping generated files.
5. The workflow commits the result as `github-actions[bot]`.

Running it twice changes nothing.

# 20. Recipes

## Fix a mistake in a generated topic

1. Find the subject's line in `scripts/curriculum/*.txt` (search for the topic title).
2. Edit the text. Keep the field rules.
3. Run `npm run build:curriculum`.
4. Commit the `.txt` change **and** the regenerated files. CI fails if you commit only one.

## Add a subject to an existing branch

1. Add an `@` block with five units to the right `.txt` file.
2. Add three references to `references.js`.
3. Add `e('newid', 'CODE')` to the branch's semester in `plan.js`.
4. `npm run build:curriculum`, then `npm run build:tailwind` (new markup may use new classes).
5. Open the study desk, pick that programme, open the subject, check a topic, the quiz, and the PDF links.

## Add a branch

1. Write `NN-branch.txt` with the branch's semester 3–8 subjects; reuse existing IDs where RGPV teaches the same subject.
2. Add references.
3. In `plan.js` add `BRANCHES.XX = { degree: 'B.Tech', name, short, icon, note? }` and `PLAN.XX = { ...FIRST_YEAR, 3: […], …, 8: […] }`.
4. Add an accent in `app.css`: `html[data-branch="XX"] { --branch-accent: #…; }`.
5. Build, check, and update the coverage table in `README.md`.

## Add an M.Tech programme

As a branch, with `degree: 'M.Tech'`, an ID starting `MT-` (so it picks up the M.Tech accent), semesters 1 and 2 only, and `e('mt-rm', '…-204')` in semester 2.

## Add a curated playlist

Add an entry to `js/lecture-library.js` with the subject ID, semester, title, channel and the playlist or video URL. `normalizeLectureUrl` handles the embed form.
