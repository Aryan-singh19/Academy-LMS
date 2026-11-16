# 22. One line, end to end

The generator is easiest to understand by following a single topic through it. This chapter takes one line from the Civil curriculum file and follows it until a student is reading it on a phone, answering its questions and downloading the paper it appears in.

## The line

In `scripts/curriculum/10-civil.txt`, under the subject CE-601 *Structural Design & Drawing (RCC-I)* and its first unit *Design Philosophies*, the second topic reads:

```
- Limit States | Structures must avoid failure states. | Limit State of Collapse = flexure, shear, torsion, compression | Limit State of Serviceability = deflection and cracking | Partial Safety Factor = 1.5 for loads, 1.5 for concrete, 1.15 for steel
```

The parser splits it on `|`. The first field is the title, *Limit States*. The second is the overview. Each remaining field is split at its first ` = ` into a term and a definition, so this topic has three terms. A field without ` = ` stops the build with the file name and line number. Because the topic is the second in the first unit, it gets the ID `ce601-u1t2`, inside the unit `ce601-u1`.

## The page

`buildTopicHtml` turns the parsed topic into HTML in a fixed order.

The heading is the title, followed by a line reading *CE-601 • Unit 1: Design Philosophies* and the overview sentence. Then comes a two-card grid. The first card, *Core Concepts*, lists the first two terms with their definitions; the second, *Key Points & Exam Focus*, lists the rest. A topic with five terms spreads them across both cards.

The concept map is a Mermaid diagram with the topic in the middle and an edge to each term, plus edges to the previous topic, *Working Stress vs Limit State*, and the next, *Characteristic Values*. Those two links are why the map is useful in revision: it shows where the topic sits in the unit, not only what is in it.

The quick revision table is the terms in two columns. The in-depth explanation turns the same terms into connected prose: "Start with *Limit State of Collapse*, which is flexure, shear, torsion, compression. Next comes *Limit State of Serviceability*…". It closes with advice on how to write the long answer, and names the other topics in the unit that long answers usually combine with this one.

The exam blueprint follows RGPV's patterns. Each term gets a two- or three-mark question, *Define Limit State of Collapse and state where it is used.* The first two terms become a four-mark *Differentiate between …* question. And the whole topic becomes a seven-mark *Explain Limit States with a neat labelled diagram, covering …* question.

Finally the study-material section links four YouTube searches built from the subject, unit and topic names, the subject's notes PDF and model paper, the RGPV syllabus portal, and the three CE-601 references from `references.js`: Varghese's *Limit State Design of Reinforced Concrete*, Pillai and Menon's *Reinforced Concrete Design*, and IS 456:2000 itself.

## The questions

`buildQuizzes` seeds its random generator with the hash of `ce601` and the topic, shuffles the three terms, and makes one question from each. The first asks which statement correctly describes *Limit State of Collapse*, with the right definition and three wrong ones drawn from other CE-601 definitions: "safety against collapse and serviceability", "supports two columns", "for continuous slabs". The second reverses the direction: given a definition, pick the term. Every question carries an explanation, shown after the student answers, that restates the term and its definition.

Because the seed depends only on the subject and topic IDs, the options appear in the same order every time the generator runs. A student who answered this question last week sees the same question, with the same options in the same order, after any redeploy.

## The files

All twenty topics of CE-601 go into `js/data_ce601.js`, which starts with a comment naming its source file and the command that rebuilds it. The subject's outline, with units and topic titles but no content, goes into the generated block of `js/data.js`, where `plan.js` also places it: Civil, semester six, code CE-601.

`build_study_resources.js` then writes four files for the subject. The unit-wise notes, as PDF and Markdown, have a section for *Limit States* with its overview and terms. The question bank asks *Explain Limit States in detail with a neat diagram* and answers it from the same terms. And the model paper's Set A, question one, part (b) reads: *Explain Limit States in detail. Differentiate between Limit State of Collapse and Limit State of Serviceability.* [7]

## On the phone

A Civil student in semester six opens the study desk. `data.js` has already loaded the outline, so the programme picker can list CE-601 under *CE · Semester 6* without loading any content. When the student taps the subject, the desk inserts a `<script>` for `js/data_ce601.js`, waits for it to load, and renders the first topic. Opening *Limit States* renders its HTML into the topic area, notices the Mermaid block, loads Mermaid once, and draws the map.

When the student marks the topic complete, `completedTopics` gains the key `ce601-u1t2`, the state is saved, and the progress bar for CE-601, scoped to semester six, moves. If the student is signed in, the change is synced a few seconds later. If they open the tests page, the three questions are already in the semester's question bank. If they switch to the Mechanical branch to help a friend and come back, the topic is still complete, because progress was stored against the topic, not against the programme.

One line of text, written in about a minute, became a page, a diagram, three questions, entries in three downloadable files, and a tracked unit of progress. That ratio is the whole argument for the curriculum language.

# 23. A tour of version two

This chapter is a short visual tour of the site as it stands at version 2.2, for readers who have not opened it.

![The landing page. The coverage chip reads "B.Tech Sem 1–8 & M.Tech", and the cards lead to the study desk, practice, lectures and the resource library.](../figures/landing.png){.screenshot}

## The programme picker

![The programme picker on first visit: degree, branch, semester and a live preview of the semester's papers.](../figures/programme-picker.png){.screenshot}

The picker is the first thing a new student sees on the study desk. The preview at the bottom lists the semester's papers with their codes, so a student can check they have chosen correctly before saving. Branches with caveats, Automobile and the M.Tech programmes, show their note under the preview.

## The study desk

![The study desk for ECE semester six: programme chip, semester tabs with the student's own semester starred, subject pills with progress, and the topic area.](../figures/study-desk.png){.screenshot}

The study desk has three regions. The navigation strip at the top holds the programme chip, the semester tabs and one pill per subject with its progress. The unit and topic list sits on the left, and the topic itself fills the centre. Overview cards above the strip show the student's progress, their quiz accuracy, a *Continue studying* shortcut to the last topic, and recent bookmarks.

![Browsing another semester: the banner and the Back button make it impossible to forget you have left your own semester.](../figures/browse-other-semester.png){.screenshot}

## A topic page

![The top of a generated topic page: heading, overview, core-concept cards and the concept map.](../figures/topic-deep-dive.png){.screenshot}

![Further down the same page: the exam blueprint and the study material with lecture searches, PDFs, the RGPV portal and textbooks.](../figures/topic-references.png){.screenshot}

## Practice, resources and lectures

![The tests page: topic drills and timed mock exams scoped to the student's semester, with a branch selector for browsing.](../figures/practice-tests.png){.screenshot}

![The resource library, defaulting to "My semester", with notes PDFs, model papers and question banks for every subject.](../figures/resources.png){.screenshot}

![The lecture library: the player with its playlist drawer, unit-wise lecture shelves for generated subjects, and the lecture room chat.](../figures/lectures.png){.screenshot}

## On a phone

![The study desk on a phone, where most students use it.](../figures/mobile.png){width=45%}

Every page is designed for a phone first. The navigation strip scrolls horizontally, the topic list folds into a drawer, and the tests page stacks its controls. The Android app shows exactly these pages, inside the WebView, with the animated splash in front of them while they load.
