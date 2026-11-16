# Part I — Beginnings {.part}

Why a student builds a study portal instead of just studying, and what the university asks of it.

# 1. Why Academy LMS exists

## The problem in the sixth semester

The sixth semester of B.Tech Computer Science at RGPV is crowded. In my year it held Machine Learning (CS601), Computer Networks (CS602), Compiler Design (CS603), an elective (Computer Graphics and Visualisation for most of us, CS603-CG) and Project Management (CS604). Each subject has five units, each unit has six to ten topics, and the end-semester paper expects you to write about any of them at three levels of depth: a two-mark definition, a four-mark explanation and a seven-mark answer with a diagram, a derivation or a worked example.

The material for those subjects was everywhere and nowhere. Some of it was in the official syllabus PDF, which lists topic names and nothing else. Some was in handwritten class notes, photographed and passed around WhatsApp groups as forty-image albums with no order. Some was in standard textbooks, most of which nobody owned. Some was in YouTube lectures, scattered across a dozen channels, each covering half a unit. And some of the most useful material, the previous years' question papers, lived on third-party websites full of advertisements, where the same paper appeared under three different names.

What I wanted was one place that answered a simple question for each topic: *what do I need to know about this, and how will they ask it?* I wanted the explanation, the diagram, the exam angle and a way to check myself, in that order, on a phone, in the ten minutes before a class test.

## What already existed

The college had a learning management system, but it was a place to download assignments, not a place to study. The commercial exam-preparation apps covered competitive exams, not RGPV's semester papers. The RGPV-focused websites were mostly collections of previous papers and scanned notes, useful as raw material but impossible to study from directly. None of them knew which semester I was in, and none of them remembered what I had already covered.

That last point matters more than it sounds. Revision is mostly a bookkeeping problem. Three days before a paper you need to know which topics you have actually read, which ones you skimmed, and which ones you have not touched. A notebook can hold that, but a notebook does not travel well between a phone, a lab computer and a laptop, and it does not tell you which of the untouched topics carry the most marks.

## The first goal

The goal I wrote down at the start was narrow on purpose: one web page that covers the five sixth-semester subjects, explains every topic properly, shows a diagram where a diagram helps, quizzes me at the end of each topic, and remembers my progress. No installation, no account, no build step. It had to open on a phone over a slow college network and work.

That goal shaped everything that followed. "No installation" meant a website, not an app. "No account" meant the progress had to live in the browser. "No build step" meant plain HTML, CSS and JavaScript that could be edited in any text editor and served by any static host. Six months later the project has a curriculum generator, a database, three workflows that build apps, and an optional sign-in, but each of those was added on top of the original promise rather than in place of it. The site still works without an account, still opens without installing anything, and the generated files it serves are still plain JavaScript.

![The path a student takes through Academy LMS today.](../figures/student-journey.svg)

## From my problem to other people's tool

The second motivation arrived as soon as the first version worked. Classmates asked for the link. Then juniors asked whether the fifth semester could be added, and seniors asked about the seventh. Then friends in Electronics asked whether there was an ECE version. Within a few months the question had changed from "does this help me revise" to "can this help everyone at RGPV revise".

Those two faces of the project explain most of its design. As a tool for myself, it favours depth over breadth: every topic page is long, every subject has an exam blueprint, and I would rather have five subjects done properly than fifty done badly. As a tool for other people, it favours structure: the content has to be organised by the university's own scheme, the navigation has to stop people getting lost, and the whole thing has to be maintainable by someone other than me. The November rebuild is where the second face finally won enough to change the architecture.

# 2. RGPV in one chapter

The rest of this book assumes a working picture of how RGPV organises its programmes. This chapter gives that picture briefly.

## Degrees, branches and semesters

RGPV awards the Bachelor of Technology (B.Tech) over eight semesters and the Master of Technology (M.Tech) over four. A B.Tech student belongs to one branch: Computer Science and Engineering (CSE), Information Technology (offered at many colleges as CSIT), Electronics and Communication (ECE, code EC), Electrical and Electronics (EX), Mechanical (ME), Civil (CE) and Automobile (AU) are the branches Academy LMS now covers. An M.Tech student belongs to a specialisation such as Computer Science, VLSI Design, Thermal Engineering, Structural Engineering or Power Systems.

The first year is common to all branches. Every B.Tech student studies the same ten papers in semesters one and two, coded BT-101 to BT-105 and BT-201 to BT-205: engineering chemistry, mathematics, communication skills, basic electrical and electronics, engineering graphics, physics, basic computer engineering, basic mechanical engineering, basic civil engineering and manufacturing practices. From the third semester the branches diverge.

## Paper codes

Every paper has a code made of the branch prefix, the semester digit and a serial number: CS-601 is the first CSE paper of semester six, ME-304 is the fourth Mechanical paper of semester three. Electives carry a letter in brackets: CS-603(C) or CE-702(B). Two codes matter for the design of Academy LMS. First, the same subject often appears in several branches under different codes. Data Structures is a CSE paper and an IT paper; Strength of Materials is taught to Mechanical, Automobile and Civil students. Second, the common papers BT-301 (Mathematics-III) and ES-301 (Energy and Environmental Engineering) appear in every branch, but in semester three for some branches and semester four for others.

Both facts pushed the design towards separating *subjects* from *where they appear*. A subject is one body of content; a placement is a (branch, semester, code) triple that says where a student meets it. Chapter 18 explains how that idea became the programme plan.

## The paper and the marks

An RGPV end-semester theory paper is worth seventy marks and usually contains eight questions, of which the student answers five, each worth fourteen marks and usually split into two seven-mark parts. Within that, the questions follow a pattern every student learns to recognise: a short definition or distinction worth two or three marks, an explanation with an example worth four, and a long answer, often with a diagram, a derivation or a numerical, worth seven. Internal tests and the shorter parts of older papers use the smaller pieces; the long answers carry the paper. Internal assessment adds class tests, assignments and attendance.

That structure is why every Academy LMS topic page ends with an *RGPV exam blueprint*: a short section that says what a two-mark answer should contain, what a four-mark answer adds, and what turns a seven-mark answer from adequate to full marks. It is also why the model papers the generator produces have eight questions with two seven-mark parts each, in two sets, and why the question bank is organised by unit.

## What a student actually needs

Watching classmates revise taught me that students need four things from a study tool, roughly in this order. They need to know *what* is in their semester, without wading through other semesters. They need an explanation they can read in ten minutes and a diagram they can reproduce in an exam. They need a way to check themselves. And they need to know where they stand: what is done, what is not, and what to do next. Everything in Academy LMS maps to one of those needs, and features that did not map to any of them, such as a leaderboard I once sketched, never got built.

# 3. The first day

## Five subjects, three files

The first version went up on 13 May 2026 as three files: `index.html`, `app.js` and `data.js`. The page was titled "Academy LMS — Linear Aesthetic", after the dark, high-contrast style of the Linear project-management tool that inspired its look. It loaded Tailwind from its CDN, configured it inline with a custom colour palette, and loaded Mermaid from jsDelivr to draw diagrams.

`data.js` held a single array, `coursesData`, with the five sixth-semester subjects. Each course had an id (`cs601`), a code, a title, a short light-hearted description, and a list of units; each unit had a list of topics with an id and a title. Twenty-one topics in total. The content for each topic lived in a second object keyed by unit and topic, so the navigation could load without the content.

`app.js` was about 270 lines. It rendered the subject tabs, the unit sidebar and the topic view, ran Mermaid over any diagram in the content, and kept a set of completed topics in `localStorage`. There was no router, no framework and no build. Opening `index.html` from a folder worked as well as opening it from a server.

## The lab computer incident

The same afternoon produced the project's most embarrassing commit history. I was working on a college lab machine, and the folder I synchronised to GitHub turned out to be the whole Windows user profile rather than the project folder. Over about sixteen minutes, between 12:38 and 12:54, the tool I was using created 474 commits named "Sync E:/UserProfile/0902CS231028/…", one per file, and pushed them: browser extensions, editor settings and even `ntuser.dat`, the file in which Windows stores the settings of a user account.

The cleanup came in two steps. A few "Cleanup absolute paths" commits removed the obvious mistakes, and the next substantial commit, "Upgrade study experience and add maintenance workflows", deleted the rest: it shows 122,866 lines removed across 482 files, nearly all of them from the stray profile. The files are gone from the tree, but the commits remain in the history, and anyone who scrolls far enough down the log will find them.

Two lessons came out of it, and both shaped the later repository. The first is mechanical: a `.gitignore` and a quick look at `git status` before the first push are cheaper than any cleanup. The second is about trust: a repository that other people clone has to be boring at its root. The November rebuild spent real effort on that boredom: a clear top-level layout, generated files kept in known places with markers around them, and a continuous-integration check that fails if anyone commits generated output that does not match its source.

## The same evening

The rest of 13 May was a burst of features, visible in the history as a run of large commits within hours of each other. "Upgrade study experience" split the single page into a shell with shared code (`js/shared.js`), a study desk (`js/app.js`), a tests page (`js/tests.js`), a lectures page and a resources page, and moved the styling into `assets/css/app.css`. "Expand core subjects and restyle study portal" deepened the content of the five subjects and replaced the dark Linear look with the light blue theme the site still uses. "Add mock test history and deepen PM/graphics content" added timed mock tests that remember past attempts. "Add resource workflow and student profile tools" added a profile page and the first version of the resource upload pipeline. And "Add Neon-backed student community features" connected the site to a database for the first time.

Looking back, that day did two things at once. It produced a genuinely useful study tool for one semester, and it committed the project to an architecture, plain files, a shared script, page-per-feature, and an optional server, that every later phase had to live with. Part II looks at that architecture and the reasons for it.
