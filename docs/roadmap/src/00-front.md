---
title: "Academy LMS: Roadmap and Technical Guide"
subtitle: "How every part of Academy LMS was planned, built and connected (hosting, database, sign-in, styling, content generation, lectures, tests, apps and release automation), with the roadmap of what was built when and what comes next"
author: "Aryan Singh Chandel"
affiliation: "B.Tech Computer Science and Engineering, Rustamji Institute of Technology, Gwalior"
date: "November 2026 · v2.2.1"
kicker: "Academy LMS · Roadmap & Technical Guide"
repo: "github.com/Aryan-singh19/Academy-LMS · academy-lms-sepia.vercel.app"
cover: "../figures/architecture.svg"
---

# How to use this guide {.unnumbered}

This guide is the reference companion to *Academy LMS: The Journey*. The journey tells the story of the project in order; this guide explains how each part works today, precisely enough that a new developer can change it safely. It is organised by subsystem, not by date.

Part I is the roadmap: every stage of the project from the first page to version 2.2, with what was built, why, and what it taught, followed by the plan ahead. Part II is the system at a glance: the stack, the services, the repository and how to run it. Part III covers the front end: pages, the shared script, state, the study desk, practice, lectures, resources and styling. Part IV covers content: the data formats, the curriculum language and the two generators, with a recipe for adding a subject or a branch. Part V covers the back end: hosting on Vercel, the serverless functions, Neon Postgres and its tables, sign-in, sessions, uploads, moderation and security. Part VI covers the apps and the delivery pipeline: the Android and Windows apps, Docker, every GitHub workflow, testing and quality checks. The appendices list environment variables, npm scripts and a troubleshooting guide.

A note on names. The project's database is **Neon**, a hosted PostgreSQL service, not Supabase. Hosting is on **Vercel**. **GitHub** hosts the code, runs the automation (GitHub Actions), stores the release files (GitHub Releases) and the container image (GitHub Container Registry). Lectures are plain **YouTube embeds** in an `<iframe>`, served from the privacy-enhanced `youtube-nocookie.com` domain; there is no wrapper library. Styling is **Tailwind CSS 3**, built ahead of time, plus a hand-written stylesheet.

<div class="pagebreak"></div>
