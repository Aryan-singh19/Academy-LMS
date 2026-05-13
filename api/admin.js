const { getSql } = require('./_lib/db');
const { allowMethods, sendJson } = require('./_lib/http');

function getAdminSecret(req) {
    return String(req.headers['x-admin-secret'] || req.query.secret || '').trim();
}

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET'])) return;

    try {
        const configuredSecret = String(process.env.ADMIN_SECRET || '').trim();
        if (!configuredSecret) {
            sendJson(res, 503, { error: 'ADMIN_SECRET is not configured in Vercel yet.' });
            return;
        }

        if (getAdminSecret(req) !== configuredSecret) {
            sendJson(res, 401, { error: 'Unauthorized admin request.' });
            return;
        }

        const sql = await getSql();
        const studentId = String(req.query.studentId || '').trim();

        if (studentId) {
            const detailsRows = await sql`
                SELECT
                    s.id,
                    s.display_name,
                    s.email,
                    s.headline,
                    s.bio,
                    s.avatar_url,
                    s.github_url,
                    s.linkedin_url,
                    s.website_url,
                    s.last_seen_at,
                    p.completed_topics,
                    p.tracked_topics,
                    p.bookmarked_topics,
                    p.quiz_attempts_count,
                    p.correct_quiz_answers,
                    p.practice_sessions_count
                FROM students s
                LEFT JOIN student_profile_summary p ON p.student_id = s.id
                WHERE s.id = ${studentId}
                LIMIT 1
            `;

            if (!detailsRows.length) {
                sendJson(res, 404, { error: 'Student not found.' });
                return;
            }

            const [uploads, comments, messages] = await Promise.all([
                sql`
                    SELECT upload_kind, title, description, blob_url, size_bytes, uploaded_at
                    FROM student_uploads
                    WHERE student_id = ${studentId}
                    ORDER BY uploaded_at DESC
                    LIMIT 20
                `,
                sql`
                    SELECT topic_id, course_id, message_text, created_at
                    FROM topic_comments
                    WHERE student_id = ${studentId}
                    ORDER BY created_at DESC
                    LIMIT 20
                `,
                sql`
                    SELECT message_text, created_at
                    FROM direct_messages
                    WHERE sender_student_id = ${studentId}
                       OR recipient_student_id = ${studentId}
                    ORDER BY created_at DESC
                    LIMIT 20
                `
            ]);

            sendJson(res, 200, {
                student: detailsRows[0],
                uploads,
                comments,
                messages
            });
            return;
        }

        const leaderboard = await sql`
            WITH upload_counts AS (
                SELECT student_id, COUNT(*)::int AS uploads_count
                FROM student_uploads
                GROUP BY student_id
            ),
            comment_counts AS (
                SELECT student_id, COUNT(*)::int AS comments_count
                FROM topic_comments
                GROUP BY student_id
            )
            SELECT
                s.id,
                s.display_name,
                s.headline,
                s.avatar_url,
                s.github_url,
                s.linkedin_url,
                s.website_url,
                s.last_seen_at,
                COALESCE(p.completed_topics, 0)::int AS completed_topics,
                COALESCE(p.tracked_topics, 0)::int AS tracked_topics,
                COALESCE(p.bookmarked_topics, 0)::int AS bookmarked_topics,
                COALESCE(p.quiz_attempts_count, 0)::int AS quiz_attempts_count,
                COALESCE(p.correct_quiz_answers, 0)::int AS correct_quiz_answers,
                COALESCE(p.practice_sessions_count, 0)::int AS practice_sessions_count,
                COALESCE(u.uploads_count, 0)::int AS uploads_count,
                COALESCE(c.comments_count, 0)::int AS comments_count,
                CASE
                    WHEN COALESCE(p.quiz_attempts_count, 0) = 0 THEN 0
                    ELSE ROUND((COALESCE(p.correct_quiz_answers, 0)::numeric * 100) / p.quiz_attempts_count, 1)
                END AS quiz_accuracy
            FROM students s
            LEFT JOIN student_profile_summary p ON p.student_id = s.id
            LEFT JOIN upload_counts u ON u.student_id = s.id
            LEFT JOIN comment_counts c ON c.student_id = s.id
            ORDER BY completed_topics DESC, quiz_accuracy DESC, practice_sessions_count DESC, last_seen_at DESC
            LIMIT 100
        `;

        sendJson(res, 200, { leaderboard });
    } catch (error) {
        console.error('Admin API error', error);
        sendJson(res, 500, { error: error.message || 'Unable to load admin data.' });
    }
};
