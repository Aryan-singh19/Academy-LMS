const { getSql } = require('./_lib/db');
const { allowMethods, sendJson, readJsonBody } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

const BUILT_IN_ADMIN_EMAILS = new Set([
    'aryansingh19gh@gmail.com',
    'yograjsharma@rjit.ac.in',
    'shiroonigami23@gmail.com'
]);

function getAdminSecret(req) {
    return String(req.headers['x-admin-secret'] || req.query.secret || '').trim();
}

function getAdminEmail(req) {
    return String(req.headers['x-admin-email'] || req.query.email || '').trim().toLowerCase();
}

function getAllowedAdminEmails() {
    const configured = String(process.env.ADMIN_EMAILS || '')
        .split(',')
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean);

    return new Set([...BUILT_IN_ADMIN_EMAILS, ...configured]);
}

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'admin', limit: 40, windowMs: 60000 })) return;

    try {
        const configuredSecret = String(process.env.ADMIN_SECRET || '').trim();
        const adminEmail = getAdminEmail(req);
        const allowedAdminEmails = getAllowedAdminEmails();

        if (!configuredSecret) {
            sendJson(res, 503, { error: 'ADMIN_SECRET is not configured in Vercel yet.' });
            return;
        }

        if (!adminEmail || !allowedAdminEmails.has(adminEmail)) {
            sendJson(res, 403, {
                error: 'This email is not allowed for admin access.',
                allowedAdminEmails: Array.from(allowedAdminEmails)
            });
            return;
        }

        if (getAdminSecret(req) !== configuredSecret) {
            sendJson(res, 401, { error: 'Unauthorized admin request.' });
            return;
        }

        const sql = await getSql();

        if (req.method === 'POST') {
            const body = await readJsonBody(req);
            const action = String(body.action || '').trim();
            const studentId = String(body.studentId || '').trim();
            if (!action || !studentId) {
                sendJson(res, 400, { error: 'action and studentId are required.' });
                return;
            }

            if (action === 'ban') {
                const reason = String(body.reason || 'Removed by admin moderation.').trim().slice(0, 300);
                await sql`
                    UPDATE students
                    SET
                        is_banned = TRUE,
                        banned_reason = ${reason},
                        banned_at = NOW(),
                        updated_at = NOW()
                    WHERE id = ${studentId}
                `;
                await sql`
                    UPDATE student_sessions
                    SET revoked_at = NOW()
                    WHERE student_id = ${studentId}
                      AND revoked_at IS NULL
                `;
                sendJson(res, 200, { message: 'Student banned successfully.' });
                return;
            }

            if (action === 'unban') {
                await sql`
                    UPDATE students
                    SET
                        is_banned = FALSE,
                        banned_reason = '',
                        banned_at = NULL,
                        updated_at = NOW()
                    WHERE id = ${studentId}
                `;
                sendJson(res, 200, { message: 'Student unbanned successfully.' });
                return;
            }

            if (action === 'resolve-report') {
                const reportId = Number(body.reportId || 0);
                if (!reportId) {
                    sendJson(res, 400, { error: 'reportId is required to resolve a report.' });
                    return;
                }
                await sql`
                    UPDATE student_reports
                    SET
                        status = 'resolved',
                        reviewed_at = NOW(),
                        reviewed_by_admin = ${adminEmail}
                    WHERE id = ${reportId}
                `;
                sendJson(res, 200, { message: 'Report marked as resolved.' });
                return;
            }

            sendJson(res, 400, { error: 'Unknown admin action.' });
            return;
        }

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
                    s.is_banned,
                    s.banned_reason,
                    s.banned_at,
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

            const [uploads, comments, messages, reports] = await Promise.all([
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
                `,
                sql`
                    SELECT
                        sr.id,
                        sr.report_reason,
                        sr.report_details,
                        sr.status,
                        sr.created_at,
                        reporter.display_name AS reporter_name
                    FROM student_reports sr
                    JOIN students reporter ON reporter.id = sr.reporter_student_id
                    WHERE sr.target_student_id = ${studentId}
                    ORDER BY sr.created_at DESC
                    LIMIT 20
                `
            ]);

            sendJson(res, 200, {
                student: detailsRows[0],
                uploads,
                comments,
                messages,
                reports
            });
            return;
        }

        const [leaderboard, openReports] = await Promise.all([sql`
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
        `, sql`
            SELECT
                sr.id,
                sr.target_student_id,
                target.display_name AS target_name,
                reporter.display_name AS reporter_name,
                sr.report_reason,
                sr.status,
                sr.created_at
            FROM student_reports sr
            JOIN students target ON target.id = sr.target_student_id
            JOIN students reporter ON reporter.id = sr.reporter_student_id
            WHERE sr.status = 'open'
            ORDER BY sr.created_at DESC
            LIMIT 50
        `]);

        sendJson(res, 200, {
            adminEmail,
            leaderboard,
            openReports
        });
    } catch (error) {
        console.error('Admin API error', error);
        sendJson(res, 500, { error: error.message || 'Unable to load admin data.' });
    }
};
