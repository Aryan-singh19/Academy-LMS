# Vercel + Neon Setup

## Suggested stack

- `Neon Postgres` as the source of truth for students, progress, comments, chat, bookmarks, and quiz history.
- `Redis or Upstash` later for cache, rate limiting, presence fan-out, or notification queues.

This Academy LMS data is relational and durable, so Redis should not be the primary database here.

## Environment variables

Add these in Vercel Project Settings:

- `DATABASE_URL`
- `POSTGRES_URL`
- `ADMIN_SECRET`
- `BLOB_READ_WRITE_TOKEN` after you connect Vercel Blob

Either value can point to the Neon pooled connection string.

## First database run

Apply the schema with:

```bash
psql "$DATABASE_URL" -f docs/academy_schema.sql
```

## Serverless routes included

- `/api/profile`
- `/api/social`
- `/api/messages`
- `/api/topic-comments`
- `/api/lecture-chat`
- `/api/blob-upload`
- `/api/admin`

## Current behavior

- Browser progress still works locally even with no backend.
- When the API is available, the frontend now syncs profile state to Neon.
- Topic comments, student directory, direct messages, lecture chat, and the admin dashboard require the API.
- Student avatar uploads and solved-PDF uploads require Vercel Blob.

## Why Blob for uploads

Vercel documents that Functions have a `4.5 MB` request body limit, so a `10 MB` PDF should not be posted through a normal function body. The correct pattern is direct client upload to Blob, with Neon storing metadata and profile references.

## Important note

This is still a prototype identity model based on a browser device id plus student-entered name. When you move to a fuller production build, add proper auth before trusting marks, chat identity, or social actions.
