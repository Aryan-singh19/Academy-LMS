---
title: "Academy LMS: Roadmap and Technical Guide"
subtitle: "How Academy LMS was planned and built, how each part of it works, and where it is going next"
author: "Aryan Singh Chandel"
affiliation: "B.Tech Computer Science and Engineering, Rustamji Institute of Technology, Gwalior"
date: "November 2026 · v2.2.1"
kicker: "Academy LMS · Roadmap & Technical Guide"
repo: "github.com/Aryan-singh19/Academy-LMS · academy-lms-sepia.vercel.app"
cover: "../figures/architecture.svg"
---

# About this guide {.unnumbered}

Thank you for taking an interest in Academy LMS. This guide explains, in one place, how the project was built and how it works today. I have written it for three groups of readers:

- **Students and visitors** who use the site and would like to understand what happens behind it. Part I (the roadmap) and the *In plain terms* boxes at the start of each part are written for you, and assume no programming knowledge.
- **Developers and contributors** who want to run the project, fix something or add a branch. Parts II to VI describe every component in detail, with the exact files, settings and commands involved.
- **Teachers and reviewers** who want to evaluate the design and the decisions behind it.

The companion book, *Academy LMS: The Journey*, tells the story of the project in the order it happened, including the mistakes. This guide is the reference: it is organised by component rather than by date.

## The project at a glance {.unnumbered}

Academy LMS is a free study portal for students of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV). It covers seven B.Tech branches across all eight semesters and five M.Tech programmes, with notes, diagrams, quizzes, mock tests, lectures and downloadable study material for every subject.

![What a student does on Academy LMS.](../figures/student-journey.svg)

Behind the pages, a small number of services do the work:

| Service | Role in Academy LMS |
|---|---|
| **Vercel** | Hosts the website and runs the small server programs (the API) |
| **Neon** | Hosted PostgreSQL database that stores accounts, progress and community posts |
| **Vercel Blob** | Stores files that students upload |
| **Google Sign-In** | Lets students sign in with their Google account, without a new password |
| **YouTube** | Plays lectures inside the site through YouTube's standard embedded player |
| **GitHub** | Holds the source code, builds the Android and Windows apps automatically, and publishes releases |

## How this guide is organised {.unnumbered}

| Part | Topic | Best for |
|---|---|---|
| I | Roadmap: what was built, when, and what comes next | Everyone |
| II | The system at a glance: services, folders, running the project | Developers |
| III | The front end: the pages, saved progress, the study desk, practice, lectures, styling | Developers |
| IV | Content: how subjects are written and turned into pages and PDFs | Contributors |
| V | The back end: server functions, database, sign-in, uploads, moderation, security | Developers |
| VI | Apps and automation: Android, Windows, releases and quality checks | Developers |

Technical terms are explained when they first appear, and collected in the glossary at the end.

<div class="pagebreak"></div>
