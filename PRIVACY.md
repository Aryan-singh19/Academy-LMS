# Privacy Policy

**Academy LMS** · Last updated: 16 November 2026

Academy LMS is a free, open-source study portal for RGPV B.Tech and M.Tech students. This policy explains what data the web app, the Android app and the Windows app handle, where it is stored, and how you can control it. The in-app version lives at [`html/privacy.html`](html/privacy.html).

## 1. Summary

| | |
|---|---|
| Ads or tracking pixels | **None** |
| Selling or sharing data | **Never** |
| Data needed to study | **None.** Guest mode works without an account |
| Data stored when you sign in | Name, email, profile picture URL and your study records |
| Where cloud data lives | Neon serverless PostgreSQL, accessed only by this project's API |

## 2. Data kept on your device (guest mode and signed in)

The app stores your study state in your browser's `localStorage`:

- `academy_lms_state_v4`: notes, highlights, bookmarks, completed topics, quiz and practice-test attempts, exam drafts, recent topics.
- `academy-program-v1`: your chosen branch and semester (for example `CSE · Semester 6`).
- UI preferences, such as collapsed side panels.

This data never leaves your device unless you sign in. Clearing site data in your browser deletes it.

## 3. Data processed when you sign in with Google

- **Google account basics:** display name, email address and profile picture URL. They come from a Google-signed ID token and are used only to identify your account and show your avatar.
- **No password access:** Google verifies your login. Academy LMS never sees your Google password.
- **No extra scopes:** we never request Drive, Gmail, Contacts or Calendar access.
- **Study sync:** your study state (section 2) is synced to the cloud so it follows you across devices. To keep sync small, the snapshot includes topic metadata only for topics you have interacted with.
- **Community features (optional):** topic comments, lecture-room chat, direct messages, an optional bio and social links, avatar uploads and solved-PDF uploads. Uploaded files are stored on Vercel Blob.
- **Moderation:** reports you file and admin actions (such as bans) are stored to keep the community safe.

Sessions use HttpOnly, Secure, SameSite=Lax cookies. Database access uses parameterised queries.

## 4. Third-party services

| Service | Why | What it receives |
|---|---|---|
| Google Identity Services | Sign-in | Standard Google sign-in data |
| Vercel (hosting, Blob) | Serving the site, storing uploads | Request metadata, uploaded files |
| Neon PostgreSQL | Cloud sync | Your synced study records |
| YouTube | Lecture links and embeds | Opened only when you click or play a lecture; YouTube's own policy applies |
| jsDelivr / Google Fonts | Diagram library and fonts | Standard web requests |

Links to the RGPV portal, YouTube searches and textbooks open external sites governed by their own policies.

## 5. Mobile and desktop apps

- The **Android app** loads the live site. When offline, it opens a copy of the study material bundled inside the app, whose data stays on the device. It adds no tracking and has the same data handling as the website. It requests only the Internet and network-state permissions.
- The **Windows app** (Electron) loads the live site. When offline, it opens a bundled read-only copy whose data stays in local storage. External links open in your default browser.
- **Self-hosted / Docker** deployments are controlled by whoever runs them. Without a `DATABASE_URL`, the server keeps data only in memory.

## 6. Generated study material

Notes, MCQs and model question papers are generated from the RGPV syllabus for practice. Model papers are **not official RGPV papers**. Always confirm your current scheme and syllabus on the official [RGPV portal](https://www.rgpv.ac.in).

## 7. Your rights and choices

- **Export:** download a JSON snapshot of your data from the Profile page.
- **Delete local data:** clear site data in your browser.
- **Delete cloud data:** email the maintainer (below) and your synced records, comments and uploads will be removed.
- **Correct:** report wrong syllabus content or personal data and it will be fixed.

## 8. Children

The service is aimed at university students. It is not directed at children under 13, and we do not knowingly collect their data.

## 9. Changes

Material changes are recorded in [CHANGELOG.md](CHANGELOG.md), and the "Last updated" date above is revised.

## 10. Contact

**Aryan Singh Chandel**, project maintainer · [aryansingh19gh@gmail.com](mailto:aryansingh19gh@gmail.com)
