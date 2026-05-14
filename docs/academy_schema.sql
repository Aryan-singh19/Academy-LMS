CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_id TEXT NOT NULL UNIQUE,
    display_name TEXT NOT NULL,
    google_sub TEXT UNIQUE,
    auth_provider TEXT NOT NULL DEFAULT 'device',
    email_verified BOOLEAN NOT NULL DEFAULT FALSE,
    email TEXT,
    bio TEXT DEFAULT '',
    headline TEXT DEFAULT '',
    avatar_seed TEXT DEFAULT '',
    avatar_url TEXT DEFAULT '',
    github_url TEXT DEFAULT '',
    linkedin_url TEXT DEFAULT '',
    website_url TEXT DEFAULT '',
    extra_links JSONB NOT NULL DEFAULT '{}'::jsonb,
    is_banned BOOLEAN NOT NULL DEFAULT FALSE,
    banned_reason TEXT DEFAULT '',
    banned_at TIMESTAMPTZ,
    profile_started_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ
);

ALTER TABLE students ADD COLUMN IF NOT EXISTS google_sub TEXT UNIQUE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS auth_provider TEXT NOT NULL DEFAULT 'device';
ALTER TABLE students ADD COLUMN IF NOT EXISTS email_verified BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS bio TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS headline TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS avatar_url TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS github_url TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS linkedin_url TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS website_url TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS extra_links JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE students ADD COLUMN IF NOT EXISTS is_banned BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE students ADD COLUMN IF NOT EXISTS banned_reason TEXT DEFAULT '';
ALTER TABLE students ADD COLUMN IF NOT EXISTS banned_at TIMESTAMPTZ;
ALTER TABLE students ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS student_sessions (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    session_token_hash TEXT NOT NULL UNIQUE,
    device_id TEXT DEFAULT '',
    user_agent TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL,
    revoked_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS student_reports (
    id BIGSERIAL PRIMARY KEY,
    reporter_student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    target_student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    report_reason TEXT NOT NULL,
    report_details TEXT DEFAULT '',
    status TEXT NOT NULL DEFAULT 'open',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    reviewed_by_admin TEXT DEFAULT '',
    CHECK (reporter_student_id <> target_student_id)
);

CREATE TABLE IF NOT EXISTS student_preferences (
    student_id UUID PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    daily_goal_minutes INTEGER NOT NULL DEFAULT 90,
    study_streak INTEGER NOT NULL DEFAULT 0,
    tagline TEXT DEFAULT '',
    focus_subject TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS student_topic_progress (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL,
    unit_id TEXT,
    topic_id TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    bookmarked BOOLEAN NOT NULL DEFAULT FALSE,
    note_text TEXT DEFAULT '',
    highlights_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    last_visited_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, topic_id)
);

CREATE TABLE IF NOT EXISTS exam_drafts (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    unit_id TEXT NOT NULL,
    medium_answers JSONB NOT NULL DEFAULT '[]'::jsonb,
    hard_answers JSONB NOT NULL DEFAULT '[]'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, unit_id)
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    quiz_id TEXT NOT NULL,
    course_id TEXT NOT NULL,
    topic_id TEXT NOT NULL,
    question_text TEXT NOT NULL,
    selected_option INTEGER NOT NULL,
    is_correct BOOLEAN NOT NULL,
    attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, quiz_id, attempted_at)
);

CREATE TABLE IF NOT EXISTS practice_sessions (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL,
    course_label TEXT NOT NULL,
    mode TEXT NOT NULL,
    correct_count INTEGER NOT NULL DEFAULT 0,
    total_count INTEGER NOT NULL DEFAULT 0,
    accuracy INTEGER NOT NULL DEFAULT 0,
    finished_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, course_id, mode, finished_at, total_count)
);

CREATE TABLE IF NOT EXISTS lecture_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lecture_key TEXT NOT NULL UNIQUE,
    subject_code TEXT NOT NULL,
    title TEXT NOT NULL,
    lecturer_name TEXT DEFAULT '',
    description TEXT DEFAULT '',
    video_url TEXT NOT NULL,
    duration_label TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lecture_watch_events (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    lecture_key TEXT NOT NULL,
    subject_code TEXT NOT NULL,
    watched_seconds INTEGER NOT NULL DEFAULT 0,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, lecture_key)
);

CREATE TABLE IF NOT EXISTS lecture_presence (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    lecture_key TEXT NOT NULL,
    scope TEXT NOT NULL DEFAULT 'local',
    last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, lecture_key, scope)
);

CREATE TABLE IF NOT EXISTS lecture_messages (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    lecture_key TEXT NOT NULL,
    scope TEXT NOT NULL DEFAULT 'local',
    message_text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS topic_comments (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL,
    course_id TEXT NOT NULL,
    message_text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS student_connections (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    connected_student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'accepted',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (student_id, connected_student_id),
    CHECK (student_id <> connected_student_id)
);

CREATE TABLE IF NOT EXISTS direct_messages (
    id BIGSERIAL PRIMARY KEY,
    sender_student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    recipient_student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    message_text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (sender_student_id <> recipient_student_id)
);

CREATE TABLE IF NOT EXISTS resource_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_code TEXT NOT NULL,
    resource_type TEXT NOT NULL,
    title TEXT NOT NULL,
    file_path TEXT NOT NULL UNIQUE,
    file_extension TEXT NOT NULL,
    source_kind TEXT NOT NULL DEFAULT 'upload',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS student_uploads (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    upload_kind TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    blob_url TEXT NOT NULL UNIQUE,
    download_url TEXT DEFAULT '',
    pathname TEXT NOT NULL,
    content_type TEXT NOT NULL,
    size_bytes BIGINT NOT NULL DEFAULT 0,
    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (upload_kind IN ('avatar', 'study-pdf'))
);

CREATE TABLE IF NOT EXISTS student_state_snapshots (
    id BIGSERIAL PRIMARY KEY,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    source_label TEXT NOT NULL DEFAULT 'browser-local-cache',
    payload JSONB NOT NULL,
    synced_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_topic_progress_student_course ON student_topic_progress (student_id, course_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_student_time ON quiz_attempts (student_id, attempted_at DESC);
CREATE INDEX IF NOT EXISTS idx_practice_sessions_student_time ON practice_sessions (student_id, finished_at DESC);
CREATE INDEX IF NOT EXISTS idx_topic_comments_topic_time ON topic_comments (topic_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lecture_messages_scope_time ON lecture_messages (lecture_key, scope, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_direct_messages_thread_time ON direct_messages (sender_student_id, recipient_student_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_presence_lecture_scope ON lecture_presence (lecture_key, scope, last_seen_at DESC);
CREATE INDEX IF NOT EXISTS idx_student_uploads_student_kind ON student_uploads (student_id, upload_kind, uploaded_at DESC);
CREATE INDEX IF NOT EXISTS idx_students_last_seen ON students (last_seen_at DESC);
CREATE INDEX IF NOT EXISTS idx_students_google_sub ON students (google_sub);
CREATE INDEX IF NOT EXISTS idx_students_ban_state ON students (is_banned, last_seen_at DESC);
CREATE INDEX IF NOT EXISTS idx_topic_progress_student_completed ON student_topic_progress (student_id, completed, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_student_correct ON quiz_attempts (student_id, is_correct, attempted_at DESC);
CREATE INDEX IF NOT EXISTS idx_student_sessions_student_expiry ON student_sessions (student_id, expires_at DESC);
CREATE INDEX IF NOT EXISTS idx_student_reports_target_time ON student_reports (target_student_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_student_reports_status_time ON student_reports (status, created_at DESC);

DROP TRIGGER IF EXISTS trg_students_updated_at ON students;
CREATE TRIGGER trg_students_updated_at
BEFORE UPDATE ON students
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_student_preferences_updated_at ON student_preferences;
CREATE TRIGGER trg_student_preferences_updated_at
BEFORE UPDATE ON student_preferences
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_topic_progress_updated_at ON student_topic_progress;
CREATE TRIGGER trg_topic_progress_updated_at
BEFORE UPDATE ON student_topic_progress
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_exam_drafts_updated_at ON exam_drafts;
CREATE TRIGGER trg_exam_drafts_updated_at
BEFORE UPDATE ON exam_drafts
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_lecture_watch_events_updated_at ON lecture_watch_events;
CREATE TRIGGER trg_lecture_watch_events_updated_at
BEFORE UPDATE ON lecture_watch_events
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP VIEW IF EXISTS student_profile_summary;
CREATE VIEW student_profile_summary AS
SELECT
    s.id AS student_id,
    s.display_name,
    s.device_id,
    s.avatar_url,
    s.headline,
    COUNT(DISTINCT CASE WHEN tp.completed THEN tp.topic_id END) AS completed_topics,
    COUNT(DISTINCT tp.topic_id) AS tracked_topics,
    COUNT(DISTINCT CASE WHEN tp.bookmarked THEN tp.topic_id END) AS bookmarked_topics,
    COUNT(DISTINCT qa.id) AS quiz_attempts_count,
    COALESCE(SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END), 0) AS correct_quiz_answers,
    COUNT(DISTINCT ps.id) AS practice_sessions_count,
    MAX(s.last_seen_at) AS last_seen_at
FROM students s
LEFT JOIN student_topic_progress tp ON tp.student_id = s.id
LEFT JOIN quiz_attempts qa ON qa.student_id = s.id
LEFT JOIN practice_sessions ps ON ps.student_id = s.id
GROUP BY s.id, s.display_name, s.device_id, s.avatar_url, s.headline;
