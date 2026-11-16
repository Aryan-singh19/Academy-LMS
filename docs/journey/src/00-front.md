---
title: "Academy LMS: The Journey"
subtitle: "How a sixth-semester study page for five CSE subjects grew into a study desk for every RGPV B.Tech branch and five M.Tech programmes, and shipped on the web, Windows and Android"
author: "Aryan Singh Chandel"
affiliation: "B.Tech Computer Science and Engineering, Rustamji Institute of Technology, Gwalior"
date: "November 2026 · written for v2.2.0"
kicker: "Academy LMS · Project Journey"
repo: "github.com/Aryan-singh19/Academy-LMS · academy-lms-sepia.vercel.app"
cover: "../figures/study-desk.png"
---

# Preface {.unnumbered}

This document records how Academy LMS came to exist, how it was built, what went wrong along the way, and what it has become. It is written for three kinds of reader. The first is a student who uses the site and wants to know why it behaves the way it does. The second is a developer who wants to add a branch, fix a page or run the project on their own machine, and needs to understand the decisions behind the code before touching it. The third is me, a year from now, when I have forgotten why the curriculum lives in plain text files or why the study desk refuses to show subjects from another semester unless you ask it to.

Academy LMS is a study portal for students of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), the technical university of Madhya Pradesh. A student picks a degree, a branch and a semester once, and the site shows only that semester's subjects. Every subject is broken into units and topics, and every topic has a written explanation, a concept map, a revision table, an exam blueprint for the two-, four- and seven-mark questions RGPV likes to ask, links to lectures and textbooks, and a short quiz. Around that core sit a practice-test hub, a lecture library, a resource library of notes PDFs and model papers, a profile page with progress and an exportable snapshot, and an optional community layer for comments, lecture-room chat and direct messages. It runs as a static site with a handful of serverless functions, and ships as an Android app and a Windows app built from the same code.

The project has had three distinct phases. In May 2026 I built the first version in a single long day and a second short one: five Computer Science subjects from the sixth semester, a study desk, practice tests, and then, almost immediately, an online layer backed by a Postgres database. In September I extended it to the fifth and seventh semesters, rebuilt the lecture and resource libraries, made sign-in optional, and published the first Android build. In November I returned with a much larger goal: every branch RGPV teaches, every semester from one to eight, and the theory semesters of five M.Tech programmes, each subject at the level of the sixth-semester CSE pages I had written by hand. That phase replaced hand-written subject files with a small curriculum language and a generator, rebuilt navigation around the idea of *my programme*, and turned a website into three products: the site, a Windows installer and an Android app.

I have tried to be honest about the struggles as well as the results. Some of the most useful lessons came from mistakes: committing an entire lab computer's user profile into the repository on the first day, shipping features that depended on a database before deciding what should happen without one, and letting a single Tailwind CDN script carry the styling of a production site. The chapters on the November rebuild explain why the later code looks the way it does, and why a project that started as five hand-written subjects now has a build step at all.

## How this document is organised {.unnumbered}

Part I explains the motivation and gives a short map of the RGPV system, so the rest of the book can refer to it. Part II covers the May build of the study desk: the architectural choices, the anatomy of a topic page, the progress engine and the practice module. Part III covers the online layer added between May and September: Neon Postgres, serverless functions, Google sign-in, the community features, uploads, moderation and lectures. Part IV covers version two: the curriculum language and generator, programme-based navigation, the new branches and M.Tech programmes, and shipping the apps. Part V reflects on the process, summarises the project in numbers and sets out where it goes next. The appendices contain a dated timeline, a map of the repository and a glossary.

A companion document, the *Academy LMS Roadmap and Technical Guide*, documents every part of the system in detail: hosting, database tables, authentication, the CSS, the generators, the workflows and the apps. This book tells the story; that one is the reference. The repository's `ROADMAP.md` gives a shorter, step-by-step version of the path described here.

<div class="pagebreak"></div>
