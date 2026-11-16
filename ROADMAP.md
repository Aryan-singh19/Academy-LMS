# Academy LMS Roadmap

How Academy LMS was built, stage by stage, and what comes next. The full story is in **[`docs/journey/JOURNEY.pdf`](docs/journey/JOURNEY.pdf)** (77 pages). How every part works, including hosting, database, sign-in, CSS, generators, lectures, tests, apps and workflows, is in **[`docs/roadmap/ROADMAP-GUIDE.pdf`](docs/roadmap/ROADMAP-GUIDE.pdf)** (66 pages).

```
 Stage 0       Stage 1          Stage 2           Stage 3          Stage 4          Stage 5           Stage 6
 First page →  Study portal  →  Online layer  →   Fix-up week  →   Sem 5–7, apps →  v2: all RGPV  →   CE, EX, M.Tech,
 13 May 2026   13 May 2026      13–14 May 2026    29 May 2026      Sep 2026         16 Nov 2026       offline, Play kit
```

## ✅ Stage 0 — The first page (13 May 2026)
| Step | What |
|---|---|
| 0.1 | `index.html` + `app.js` + `data.js`: five CSE semester-six subjects, 21 topics, Mermaid diagrams, progress in `localStorage` |

## ✅ Stage 1 — The study portal (13 May 2026)
| Step | What |
|---|---|
| 1.1 | Pages sharing one script (`js/shared.js` → `window.ACADEMY`): study desk, tests, lectures, resources, profile |
| 1.2 | One state object saved on every change; device ID; statistics; export |
| 1.3 | Drills, timed mock tests with history, flashcards, numerical trainers |
| 1.4 | Light blue design in `assets/css/app.css` |

## ✅ Stage 2 — The online layer (13–14 May 2026)
| Step | What |
|---|---|
| 2.1 | Vercel serverless functions in `api/` + Neon Postgres (`@neondatabase/serverless`) |
| 2.2 | State sync, topic comments, lecture rooms, direct messages |
| 2.3 | Google sign-in (verified ID tokens, hashed session cookies) |
| 2.4 | Vercel Blob uploads; admin dashboard; reports and bans |

## ✅ Stage 3 — The fix-up week (29 May 2026)
Five PRs: Postgres typing, Blob SDK alignment, upload fixes + PDF keyword check, Tailwind CDN → built CSS, searchable lecture picker.

## ✅ Stage 4 — Semesters 5 and 7, first app (September 2026)
| Step | What |
|---|---|
| 4.1 | In-memory mock database: the site runs with zero configuration |
| 4.2 | Semesters 5 and 7 (15 subjects, ~350 topics) |
| 4.3 | Optional sign-in; guest accounts merge into Google accounts |
| 4.4 | Social connections, device bans, performance pass (gzip, caching, prefetch) |
| 4.5 | First Android WebView APK; `vercel.json` |

## ✅ Stage 5 — v2.0: every branch, every semester (16 Nov 2026)
| Step | What |
|---|---|
| 5.1 | Curriculum language (`scripts/curriculum/*.txt`) + `plan.js` + `references.js` |
| 5.2 | Generator: topic pages, seeded MCQs, CI staleness check |
| 5.3 | Notes PDFs, two-set model papers, question banks for every generated subject |
| 5.4 | CSE, IT, ECE, ME, AU semesters 1–8 |
| 5.5 | *My programme* navigation with browsing mode |
| 5.6 | Release workflow (APK + Windows installer + portable EXE), Docker, docs |

## ✅ Stage 6 — v2.1 → v2.2.1 (16 Nov 2026)
| Version | What |
|---|---|
| 2.1.0 | Civil, Electrical; M.Tech CSE, VLSI, Thermal, Structural, Power Systems; safe programme switching |
| 2.1.1 | App icons and animated splash on Android and Windows |
| 2.2.0 | Offline Android app; Android 16 target; signed builds; Play Store kit |
| 2.2.1 | Admin auth hardened; `banned_devices` schema fix; Journey and Roadmap PDFs |

## 🔜 Next
| Priority | Item |
|---|---|
| High | Curated lecture playlists for generated subjects |
| High | Google Play release (12 testers × 14 days; kit in `docs/play-store/`) |
| High | Unit tests (generator, programme API) and a Playwright smoke test in CI |
| High | Decide on `prettier --check` in `static-site-checks.yml` (currently fails on ~700 files) |
| Medium | Numerical trainers for every branch; previous-year papers; spaced-repetition flashcards |
| Medium | Offline/online progress that reconciles automatically |
| Low | More M.Tech specialisations; code-signed Windows build |

Rebuild the PDFs with `python3 tools/docs/build_docs.py` (needs pandoc, Graphviz and Playwright).
