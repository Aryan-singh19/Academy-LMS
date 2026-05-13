<div align="center">
  <img src="assets/images/logo.png" alt="Academy LMS Logo" width="180"/>
  <h1>Academy LMS</h1>
  <p><em>A static, student-focused prep workspace for Machine Learning, Computer Networks, Compiler Design, Project Management, and Computer Graphics.</em></p>

  <a href="https://aryan-singh19.github.io/Academy-LMS/">
    <img src="https://img.shields.io/badge/Live_Demo-GitHub_Pages-0f172a?style=for-the-badge&logo=github" alt="Live Demo"/>
  </a>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS_%2B_Tailwind-14b8a6?style=for-the-badge&logo=javascript" alt="Stack"/>
  <img src="https://img.shields.io/badge/Status-Improved_Study_Tools-f59e0b?style=for-the-badge" alt="Status"/>
</div>

## What It Includes

- Rich topic notes for the main courses, with Mermaid diagrams and embedded revision structure.
- Persistent progress stored in `localStorage` for completed topics, bookmarks, notes, highlights, exam drafts, and quiz history.
- A dedicated practice test page with mixed subject drills and stored marks.
- A profile page with cloud-ready student analytics, exportable state, student directory, and direct messages.
- Topic comments plus lecture-room and global lecture chat when deployed on Vercel with Neon.
- Lightweight static-site maintenance workflows for syntax, formatting, HTML validation, and link checking.

## Main Pages

- `index.html`: The main study desk for topic navigation, notes, highlights, and score tracking.
- `html/tests.html`: Mixed-question practice mode across subjects.
- `html/lectures.html`: Suggested lecture and revision schedule.
- `html/resources.html`: Revision workflow and resource grouping.
- `html/profile.html`: Student profile, sync view, linked students, and DMs.
- `js/data*.js`: Course structure and content banks.
- `api/*.js`: Vercel serverless endpoints for profile sync, comments, messages, and lecture chat.

## Local Run

Open `index.html` directly in a browser, or serve the repo with a basic server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Vercel + Neon

This repo now includes a Postgres schema and serverless API routes for a Vercel deployment backed by Neon.

1. Set `DATABASE_URL` or `POSTGRES_URL` in Vercel.
2. Apply [docs/academy_schema.sql](docs/academy_schema.sql) to Neon.
3. Deploy so the frontend can use:
   - `/api/profile`
   - `/api/social`
   - `/api/messages`
   - `/api/topic-comments`
   - `/api/lecture-chat`

Setup notes live in [docs/vercel-neon-setup.md](docs/vercel-neon-setup.md).

## Maintenance

GitHub Actions workflows are included for:

- HTML validation
- JavaScript syntax checks
- Prettier formatting checks
- Scheduled link checking
