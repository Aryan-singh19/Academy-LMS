<div align="center">
  <img src="assets/images/logo.png" alt="Academy LMS Logo" width="180"/>
  <h1>Academy LMS</h1>
  <p><em>A static, student-focused prep workspace for Machine Learning, Computer Networks, Compiler Design, Project Management, and Computer Graphics.</em></p>

  <a href="https://academy-lms-sepia.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Vercel-0f172a?style=for-the-badge&logo=vercel" alt="Live Demo"/>
  </a>
  <img src="https://img.shields.io/badge/Stack-Vanilla_JS_%2B_Tailwind-14b8a6?style=for-the-badge&logo=javascript" alt="Stack"/>
  <img src="https://img.shields.io/badge/Status-Improved_Study_Tools-f59e0b?style=for-the-badge" alt="Status"/>
</div>

## What It Includes

- Rich topic notes for the main courses, with Mermaid diagrams and embedded revision structure.
- Persistent progress stored in `localStorage` for completed topics, bookmarks, notes, highlights, exam drafts, and quiz history.
- A dedicated practice test page with mixed subject drills and stored marks.
- A profile page with cloud-ready student analytics, exportable state, student directory, direct messages, optional bio/social links, avatar uploads, and a solved-PDF study vault.
- Topic comments plus lecture-room and global lecture chat when deployed on Vercel with Neon.
- A separate admin dashboard with leaderboard and profile inspection, kept outside the student-facing navigation.
- Lightweight static-site maintenance workflows for syntax, formatting, HTML validation, and link checking.

## Live URLs

- Hosted on Vercel: `https://academy-lms-sepia.vercel.app/`
- Student site: `https://academy-lms-sepia.vercel.app/`
- Admin area: `https://academy-lms-sepia.vercel.app/admin/`

## Main Pages

- `index.html`: The main study desk for topic navigation, notes, highlights, and score tracking.
- `html/tests.html`: Mixed-question practice mode across subjects.
- `html/lectures.html`: Suggested lecture and revision schedule.
- `html/resources.html`: Revision workflow and resource grouping.
- `html/profile.html`: Student profile, automatic cloud backup, linked students, and DMs.
- `admin/index.html`: Separate admin dashboard for leaderboard and student inspection.
- `js/data*.js`: Course structure and content banks.
- `api/*.js`: Vercel serverless endpoints for profile sync, comments, messages, lecture chat, Blob uploads, and admin reads.

## Local Run

Open `index.html` directly in a browser, or serve the repo with a basic server such as:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Vercel + Neon

This repo now includes a Postgres schema and serverless API routes for a Vercel deployment backed by Neon.

1. Set `DATABASE_URL` or `POSTGRES_URL` in Vercel.
2. Set `ADMIN_SECRET` in Vercel for the admin dashboard.
3. Optional: set `ADMIN_EMAILS` in Vercel for extra admin addresses. The repo already allows:
   - `aryansingh19gh@gmail.com`
   - `yograjsharma@rjit.ac.in`
   - `shiroonigami23@gmail.com`
4. Connect Vercel Blob if you want student avatar uploads and solved-PDF uploads.
5. Apply [docs/academy_schema.sql](docs/academy_schema.sql) to Neon.
6. Deploy so the frontend can use:
   - `/api/profile`
   - `/api/social`
   - `/api/messages`
   - `/api/topic-comments`
   - `/api/lecture-chat`
   - `/api/blob-upload`
   - `/api/admin`

Setup notes live in [docs/vercel-neon-setup.md](docs/vercel-neon-setup.md).

Student progress sync is automatic on the deployed app. Students do not need to press a manual sync button.

## Maintenance

GitHub Actions workflows are included for:

- HTML validation
- JavaScript syntax checks
- Prettier formatting checks
- Scheduled link checking
