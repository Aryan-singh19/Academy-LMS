# Part IV — Version two {.part}

Every branch, every semester, and the machinery that made that possible.

# 16. Every branch, every semester

## A larger goal

By November the site had fifteen hand-written CSE subjects across three semesters, and the requests had not stopped. Juniors wanted semesters three and four. Friends in IT, Electronics, Mechanical and Automobile wanted their branches. First-year students, who share ten papers across every branch, wanted those. I wrote the goal down in one sentence: every RGPV B.Tech branch, every semester from one to eight, and the M.Tech theory semesters, with every subject at the level of the sixth-semester CSE pages, with papers, questions, study material, lecture links, original references and downloadable PDFs.

That sentence describes about 150 subjects and 3,000 topics. Writing each topic by hand, the way the May and September subjects were written, would have taken years. Something had to change in how content was produced, not just in how much of it there was.

## Working with an AI assistant

Version two was built with the help of an AI coding assistant, Claude, working in the repository under my direction over several long sessions; the version history records its commits under its own name. The division of work was clear. I defined the goals and constraints: which branches and semesters to cover, the sixth-semester CSE pages as the standard of quality, the existing design to be preserved, and the navigation rules. I tested every result on my own phone and asked for corrections where something was wrong. The assistant wrote most of the curriculum text, the generator, the navigation code, the automation and the first drafts of the documentation.

Two things made the collaboration work. First, the work was organised so that its output could be checked mechanically: the generator validates its input, a CI job fails if generated files are stale, and every change was exercised in a headless browser before it was committed. Second, limitations were stated openly rather than hidden. Where something could not be verified, such as the current RGPV scheme for Automobile semesters six to eight, which RGPV does not publish online, it said so, and the app now says so too.

## Separating content from code

The central decision of version two was to stop writing subjects as JavaScript. A subject is now written as plain text in a small curriculum language, and a generator turns that text into the JavaScript files the site already knew how to load. The hand-written CSE subjects from May and September were left exactly as they were; the generator writes new files alongside them.

The language is deliberately minimal. A file in `scripts/curriculum/` contains subjects, and each subject is a header line followed by units and topics:

```
@ ce601 | CE-601 | Structural Design & Drawing (RCC-I) | Limit state design of RCC beams, slabs, columns, footings and staircases as per IS 456.
# Design Philosophies
- Limit States | Structures must avoid failure states. | Limit State of Collapse = flexure, shear, torsion, compression | Limit State of Serviceability = deflection and cracking | Partial Safety Factor = 1.5 for loads, 1.5 for concrete, 1.15 for steel
```

`@` starts a subject: its ID, its paper code, its title and a description. `#` starts a unit. `-` starts a topic: its title, a one-sentence overview, and three or more term–definition pairs separated by `|`, each written as `Term = definition`. That is the whole language. It has two rules that matter: the pipe character can never appear inside text, and the term ends at the first ` = `. Breaking the first rule once, by writing a voltage magnitude as `|V|`, stopped the build with a clear error pointing at the line, which is exactly what a strict parser is for.

Fourteen files hold the whole of version two's content: the first year, the common papers, CSE semesters three, four and eight, IT, two files each for ECE and Mechanical, Automobile, Civil, Electrical, and two files of M.Tech programmes. Each subject has five units of four topics. Writing one subject this way takes an hour, not a week, and the text reads like revision notes, so anyone can check it against a textbook.

## The plan

The second input is `scripts/curriculum/plan.js`, which says where subjects appear. It defines the branches, with a name, a short name, an icon, a degree (B.Tech or M.Tech) and an optional note, and for each branch and semester the list of papers as (subject ID, paper code) pairs. The first year is defined once and spread into every B.Tech branch.

This is where the distinction from Chapter 2 between subjects and placements pays off. Data Structures is written once and placed in CSE and IT under different codes. Thermodynamics is written once and placed in Mechanical and Automobile. Strength of Materials appears in Mechanical semester three as ME-304 and in Civil semester three as CE-305. The common papers BT-301 and ES-301 appear in semester three for some branches and semester four for others. Because the progress engine stores progress by subject, a student who switches from Mechanical to Automobile keeps their Thermodynamics progress, and a student who looks at the same subject from two branches sees one set of notes, not two.

![One subject, written once, placed in three branches under their own paper codes.](../figures/subject-placement.svg)

The third input, `references.js`, gives every subject three standard textbooks with authors: Rajput for Thermal Engineering, Bhavikatti for Structural Analysis, Kothari and Nagrath for power systems, Razavi for analog IC design. The generator refuses to run if a subject has no references, if a plan names a subject that does not exist, or if a subject exists but no plan uses it.

# 17. Generating a semester

## Topic pages

`scripts/build_multibranch_curriculum.js` reads the text files, the plan and the references, validates them, and writes three things. For each subject it writes `js/data_<id>.js`, filling `topicDetails` exactly as the hand-written files do, so the study desk needs no change to show generated subjects. It writes a block into `js/data.js`, between the markers `// <<MULTIBRANCH:START>>` and `// <<MULTIBRANCH:END>>`, that pushes the generated subjects onto `coursesData` and defines `window.BRANCHES` and `window.branchPlan`. And it prints a summary: for version 2.1, 148 subjects, 2,960 topics and 8,880 questions.

Each topic page is built from the topic's line of text into the full template of Chapter 5. The terms become the core-concept cards and the revision table. The overview opens the page. The concept map is a Mermaid diagram linking the topic to its terms, with the previous and next topics in the unit. The in-depth explanation weaves the terms into paragraphs. The exam blueprint names what a two-, four- and seven-mark answer on that topic should contain. And the study-material section links the subject's notes PDF and model paper, the RGPV portal, the three textbooks and four YouTube searches.

![From text files to the site and its downloads.](../figures/curriculum-pipeline.svg)

Markers matter more than they look. The generator owns everything between its markers and nothing outside them, so the hand-written part of `data.js` is never touched, and running the generator twice produces identical files. The continuous-integration workflow `curriculum.yml` relies on that. It reruns the generator and fails if `git diff` shows any change, which catches anyone who edited a generated file by hand or forgot to regenerate after changing the text.

## Questions that never change

Every topic gets three multiple-choice questions, built from its terms. A question either gives a term and asks for its description or gives a description and asks for the term; the three wrong options are drawn from other terms and definitions in the same subject, so they are plausible rather than absurd.

The interesting constraint is stability. If the questions were shuffled with `Math.random()`, every run of the generator would produce different files, the CI check would always fail, and a student's saved answer to "question 2" would point at a different question after every deploy. So the generator uses a seeded random number generator: a 32-bit FNV hash of the subject and topic ID becomes the seed of a small pseudo-random sequence. The same input always produces the same questions in the same order, and changing one topic changes only that topic's questions.

## Notes, model papers and question banks

The second script, `scripts/build_study_resources.js`, turns the same curriculum into files a student can download. For every subject it writes:

- **Unit-wise study notes** as a PDF and as Markdown: every unit, every topic, its overview and its terms, laid out for printing.
- **An RGPV-pattern model paper** as a PDF and as Markdown, in two sets. Each set has eight questions, one or two per unit, of which a student attempts five, for seventy marks. Every question has two seven-mark parts, (a) and (b), in the style of recent RGPV papers, and the Markdown version adds a short answer hint for each part. The topics are rotated between the two sets so they test different material. The paper says plainly that it is a practice paper, not an official RGPV paper.
- **A question bank** in Markdown, unit by unit, with answers.

The PDFs are drawn with `pdfkit` using the DejaVu fonts committed under `scripts/fonts/`, so symbols such as ε, Ω, Δ and ≤ render correctly. The fonts required the most care, because the standard PDF fonts cannot display most of the symbols used in engineering subjects. The PDF creation date is fixed, so regenerating produces byte-identical files and Git sees no change. The script registers every file in the resource library's marked block, which is how 444 new entries appear on the resources page without anyone typing them.

# 18. Navigation that keeps you in your semester

## The problem

With three semesters of one branch, a row of semester pills was enough. With seven branches, eight semesters and five M.Tech programmes, it became a real risk. The requirement was clear: a sixth-semester CSE student must never find themselves lost in the eighth semester of IT. With the old navigation, one wrong tap put a student in another semester's subjects with no sign that anything had changed, and the progress numbers silently counted subjects they would never study.

## My programme

The fix is a single idea: every student has a *programme*, a degree, a branch and a semester, and everything defaults to it. On the first visit the study desk opens a *programme picker*: a degree toggle (B.Tech or M.Tech), a grid of branches with icons, a row of semesters, and a live preview listing that semester's papers with their codes. *Set as my programme* saves the choice to `localStorage` under `academy-program-v1`. From then on the study desk, the tests page, the resource library, the lecture library, the progress modal and the profile all show that semester only.

![How navigation moves between a student's own programme and browsing.](../figures/navigation.svg)

Other semesters are still reachable, but never by accident. The semester tabs on the study desk mark the student's own semester with a star. Tapping another semester enters *browsing mode*: a banner says "You are browsing ME, Semester 4. Your own semester is CSE · Semester 6", and a *Back to* button returns in one tap. A search result in another semester opens in the same mode. The programme chip at the top of the desk reopens the picker.

## Switching without losing anything

Students do change programmes, after a branch change, at the start of a semester or just to help a friend, and the obvious fear is losing progress. Switching never deletes anything. Progress, notes, highlights and quiz history are stored by subject and topic, not by programme, so switching only changes which subjects are shown. The picker says so in a line at the top, keeps the last four programmes as one-tap *Recent* buttons, and the profile page has a *Change programme* link.

## A little colour per branch

Each branch gets a slightly different accent colour, blue for CSE, cyan for IT, violet for ECE, orange for Mechanical, green for Automobile, while the layout, components and type stay exactly those of the original CSE pages. The study desk sets `data-branch` on the root element, and a CSS variable, `--branch-accent`, takes its value from that attribute. It is enough to tell at a glance which branch you are looking at, and not so much that the site feels like seven different products.

![The programme picker and the study desk on a phone.](../figures/phone-picker.png){width=48%} ![](../figures/phone-desk.png){width=48%}

# 19. Civil, Electrical and M.Tech

## Two more branches

Civil and Electrical arrived in version 2.1, and they were the first test of whether the curriculum language had been worth it. Each needed one new text file of about twenty subjects, a plan entry per semester, and references; then the generator did the rest. Civil reused Strength of Materials, Fluid Mechanics, Operations Research and the IoT and Data Analytics electives from other branches. Electrical reused Signals and Systems, Network Analysis, Analog Circuits, Digital System Design, Control System and Microprocessors from Electronics.

## M.Tech

M.Tech was different in shape. An RGPV M.Tech has four semesters, but only the first two are mostly theory; the third and fourth are electives, seminars and the dissertation. Version 2.1 therefore covers semesters one and two for five programmes: Computer Science (advanced algorithms, architecture, networks, machine learning, distributed systems, security), VLSI Design (digital and analog IC design, fabrication, verification, low power, testing, SoC), Thermal Engineering, Structural Engineering and Power Systems. Every programme includes Research Methodology and IPR in semester two, written once and placed five times. The picker's degree toggle, a disabled "M.Tech, coming soon" pill in version 2.0, became functional, and the programme chip reads "M.Tech Power · Semester 2" instead of "B.Tech …".

## What I could not verify

Two parts of the curriculum are less certain than the rest, and the app says so rather than hiding it. RGPV does not publish the current Automobile scheme for semesters six to eight online, so those semesters use the most commonly offered papers, and the branch carries a note asking students to confirm codes with their department. M.Tech paper codes vary slightly between institutes, and the M.Tech programmes carry a similar note. Putting those notes in the picker, next to the choice they affect, was more useful than putting them in a README nobody reads.
