const { getSql } = require('./_lib/db');
const { allowMethods, sendJson, readJsonBody } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');
const { authenticateAdmin, getAllowedAdminEmails } = require('./_lib/admin-auth');

async function safeDeleteBlob(url) {
    if (!url || !process.env.BLOB_READ_WRITE_TOKEN) return;
    try {
        const { del } = await import('@vercel/blob');
        await del(url);
    } catch (e) {
        console.warn('Could not delete blob file:', e.message);
    }
}

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'admin', limit: 60, windowMs: 60000 })) return;

    try {
        const sql = await getSql();
        const auth = await authenticateAdmin(req, sql);

        if (!auth.ok) {
            sendJson(res, 403, {
                error: auth.error,
                requiresAuth: true,
                sessionStudent: auth.sessionStudent ? {
                    id: auth.sessionStudent.id,
                    email: auth.sessionStudent.email,
                    display_name: auth.sessionStudent.display_name
                } : null
            });
            return;
        }

        const adminEmail = auth.adminEmail;

        // Quick auth check for client-side routing / admin badge
        if (req.method === 'GET' && req.query.checkAuth === 'true') {
            sendJson(res, 200, {
                ok: true,
                adminEmail,
                authMode: auth.mode,
                allowedAdminEmails: Array.from(getAllowedAdminEmails())
            });
            return;
        }

        if (req.method === 'POST') {
            const body = await readJsonBody(req);
            const action = String(body.action || '').trim();

            if (!action) {
                sendJson(res, 400, { error: 'action is required.' });
                return;
            }

            // 1. Ban student account + device
            if (action === 'ban-student' || action === 'ban') {
                const studentId = String(body.studentId || '').trim();
                if (!studentId) {
                    sendJson(res, 400, { error: 'studentId is required.' });
                    return;
                }
                const reason = String(body.reason || 'Account and device banned by admin moderation.').trim().slice(0, 300);

                const targetRows = await sql`SELECT id, device_id, display_name FROM students WHERE id = ${studentId} LIMIT 1`;
                const targetStudent = targetRows[0];

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

                if (targetStudent && targetStudent.device_id) {
                    await sql`
                        INSERT INTO banned_devices (device_id, banned_reason, banned_by_admin, banned_at)
                        VALUES (${targetStudent.device_id}, ${reason}, ${adminEmail}, NOW())
                        ON CONFLICT (device_id)
                        DO UPDATE SET
                            banned_reason = EXCLUDED.banned_reason,
                            banned_by_admin = EXCLUDED.banned_by_admin,
                            banned_at = NOW()
                    `;
                }

                sendJson(res, 200, { message: 'Student account and associated device banned successfully.' });
                return;
            }

            // 2. Unban student account + device
            if (action === 'unban-student' || action === 'unban') {
                const studentId = String(body.studentId || '').trim();
                if (!studentId) {
                    sendJson(res, 400, { error: 'studentId is required.' });
                    return;
                }

                const targetRows = await sql`SELECT id, device_id FROM students WHERE id = ${studentId} LIMIT 1`;
                const targetStudent = targetRows[0];

                await sql`
                    UPDATE students
                    SET
                        is_banned = FALSE,
                        banned_reason = '',
                        banned_at = NULL,
                        updated_at = NOW()
                    WHERE id = ${studentId}
                `;

                if (targetStudent && targetStudent.device_id) {
                    await sql`
                        DELETE FROM banned_devices
                        WHERE device_id = ${targetStudent.device_id}
                    `;
                }

                sendJson(res, 200, { message: 'Student account and device unbanned successfully.' });
                return;
            }

            // 3. Direct device ban
            if (action === 'ban-device') {
                const deviceId = String(body.deviceId || '').trim();
                if (!deviceId) {
                    sendJson(res, 400, { error: 'deviceId is required.' });
                    return;
                }
                const reason = String(body.reason || 'Device banned by admin moderation.').trim().slice(0, 300);

                await sql`
                    INSERT INTO banned_devices (device_id, banned_reason, banned_by_admin, banned_at)
                    VALUES (${deviceId}, ${reason}, ${adminEmail}, NOW())
                    ON CONFLICT (device_id)
                    DO UPDATE SET
                        banned_reason = EXCLUDED.banned_reason,
                        banned_by_admin = EXCLUDED.banned_by_admin,
                        banned_at = NOW()
                `;

                // Also ban any students linked to this device
                await sql`
                    UPDATE students
                    SET
                        is_banned = TRUE,
                        banned_reason = ${reason},
                        banned_at = NOW(),
                        updated_at = NOW()
                    WHERE device_id = ${deviceId}
                `;

                sendJson(res, 200, { message: `Device ${deviceId} has been banned.` });
                return;
            }

            // 4. Direct device unban
            if (action === 'unban-device') {
                const deviceId = String(body.deviceId || '').trim();
                if (!deviceId) {
                    sendJson(res, 400, { error: 'deviceId is required.' });
                    return;
                }

                await sql`
                    DELETE FROM banned_devices
                    WHERE device_id = ${deviceId}
                `;

                sendJson(res, 200, { message: `Device ${deviceId} unbanned.` });
                return;
            }

            // 5. Resolve or dismiss report
            if (action === 'resolve-report' || action === 'dismiss-report') {
                const reportId = Number(body.reportId || 0);
                if (!reportId) {
                    sendJson(res, 400, { error: 'reportId is required.' });
                    return;
                }
                const newStatus = action === 'dismiss-report' ? 'dismissed' : 'resolved';
                await sql`
                    UPDATE student_reports
                    SET
                        status = ${newStatus},
                        reviewed_at = NOW(),
                        reviewed_by_admin = ${adminEmail}
                    WHERE id = ${reportId}
                `;
                sendJson(res, 200, { message: `Report marked as ${newStatus}.` });
                return;
            }

            // 6. Delete uploaded resource
            if (action === 'delete-upload') {
                const uploadId = String(body.uploadId || '').trim();
                if (!uploadId) {
                    sendJson(res, 400, { error: 'uploadId is required.' });
                    return;
                }

                const rows = await sql`
                    SELECT id, student_id, upload_kind, blob_url
                    FROM student_uploads
                    WHERE id = ${uploadId}
                    LIMIT 1
                `;

                if (!rows.length) {
                    sendJson(res, 404, { error: 'Uploaded resource not found.' });
                    return;
                }

                const upload = rows[0];

                // Attempt blob deletion
                if (upload.blob_url) {
                    await safeDeleteBlob(upload.blob_url);
                }

                // If this was an avatar, reset the student's avatar_url
                if (upload.upload_kind === 'avatar') {
                    await sql`
                        UPDATE students
                        SET avatar_url = '', updated_at = NOW()
                        WHERE id = ${upload.student_id}
                          AND avatar_url = ${upload.blob_url}
                    `;
                }

                // Delete the upload record
                await sql`DELETE FROM student_uploads WHERE id = ${uploadId}`;

                sendJson(res, 200, { message: 'Uploaded resource deleted successfully.' });
                return;
            }

            // 7. Delete global chat (lecture chat message or topic comment)
            if (action === 'delete-chat') {
                const chatType = String(body.chatType || '').trim();
                const chatId = String(body.chatId || '').trim();

                if (!chatId || !['lecture', 'topic'].includes(chatType)) {
                    sendJson(res, 400, { error: 'Valid chatType (lecture|topic) and chatId are required.' });
                    return;
                }

                if (chatType === 'lecture') {
                    await sql`DELETE FROM lecture_messages WHERE id = ${chatId}`;
                } else {
                    await sql`DELETE FROM topic_comments WHERE id = ${chatId}`;
                }

                sendJson(res, 200, { message: 'Chat message deleted successfully.' });
                return;
            }

            sendJson(res, 400, { error: 'Unknown admin action.' });
            return;
        }

        // --- GET Operations ---
        const studentId = String(req.query.studentId || '').trim();

        if (studentId) {
            const detailsRows = await sql`
                SELECT
                    s.id,
                    s.device_id,
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
                    s.created_at,
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

            // NOTE: DMs are NEVER queried here. Only public/global interactions!
            const [uploads, comments, lectureChats, reports] = await Promise.all([
                sql`
                    SELECT id, upload_kind, title, description, blob_url, download_url, size_bytes, uploaded_at
                    FROM student_uploads
                    WHERE student_id = ${studentId}
                    ORDER BY uploaded_at DESC
                    LIMIT 40
                `,
                sql`
                    SELECT id, topic_id, course_id, message_text, created_at, is_edited
                    FROM topic_comments
                    WHERE student_id = ${studentId}
                    ORDER BY created_at DESC
                    LIMIT 30
                `,
                sql`
                    SELECT id, lecture_key, scope, message_text, created_at, is_edited
                    FROM lecture_messages
                    WHERE student_id = ${studentId}
                    ORDER BY created_at DESC
                    LIMIT 30
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
                    LIMIT 30
                `
            ]);

            sendJson(res, 200, {
                student: detailsRows[0],
                uploads,
                comments,
                lectureChats,
                reports
            });
            return;
        }

        // Full Admin Dashboard overview query
        const [
            leaderboard,
            openReports,
            bannedDevices,
            recentUploads,
            recentLectureChats,
            recentTopicComments,
            statsRows
        ] = await Promise.all([
            // 1. Leaderboard & Student Progress
            sql`
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
                    s.device_id,
                    s.display_name,
                    s.email,
                    s.headline,
                    s.avatar_url,
                    s.github_url,
                    s.linkedin_url,
                    s.website_url,
                    s.is_banned,
                    s.banned_reason,
                    s.banned_at,
                    s.created_at,
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
                ORDER BY s.is_banned ASC, completed_topics DESC, quiz_accuracy DESC, s.last_seen_at DESC
                LIMIT 150
            `,
            // 2. Open & Active Reports
            sql`
                SELECT
                    sr.id,
                    sr.target_student_id,
                    target.display_name AS target_name,
                    target.email AS target_email,
                    target.is_banned AS target_is_banned,
                    reporter.display_name AS reporter_name,
                    reporter.email AS reporter_email,
                    sr.report_reason,
                    sr.report_details,
                    sr.status,
                    sr.created_at
                FROM student_reports sr
                JOIN students target ON target.id = sr.target_student_id
                JOIN students reporter ON reporter.id = sr.reporter_student_id
                WHERE sr.status = 'open'
                ORDER BY sr.created_at DESC
                LIMIT 50
            `,
            // 3. Banned Devices
            sql`
                SELECT device_id, banned_at, banned_reason, banned_by_admin
                FROM banned_devices
                ORDER BY banned_at DESC
                LIMIT 100
            `,
            // 4. Recent Student Uploads
            sql`
                SELECT
                    u.id,
                    u.student_id,
                    s.display_name AS student_name,
                    s.email AS student_email,
                    u.title,
                    u.description,
                    u.upload_kind,
                    u.blob_url,
                    u.download_url,
                    u.size_bytes,
                    u.uploaded_at
                FROM student_uploads u
                JOIN students s ON s.id = u.student_id
                ORDER BY u.uploaded_at DESC
                LIMIT 50
            `,
            // 5. Recent Global Lecture Messages
            sql`
                SELECT
                    lm.id,
                    lm.student_id,
                    s.display_name AS student_name,
                    s.email AS student_email,
                    lm.lecture_key,
                    lm.scope,
                    lm.message_text,
                    lm.created_at,
                    lm.is_edited
                FROM lecture_messages lm
                JOIN students s ON s.id = lm.student_id
                ORDER BY lm.created_at DESC
                LIMIT 50
            `,
            // 6. Recent Global Topic Comments
            sql`
                SELECT
                    tc.id,
                    tc.student_id,
                    s.display_name AS student_name,
                    s.email AS student_email,
                    tc.topic_id,
                    tc.course_id,
                    tc.message_text,
                    tc.created_at,
                    tc.is_edited
                FROM topic_comments tc
                JOIN students s ON s.id = tc.student_id
                ORDER BY tc.created_at DESC
                LIMIT 50
            `,
            // 7. General Aggregates
            sql`
                SELECT
                    (SELECT COUNT(*)::int FROM students) AS total_students,
                    (SELECT COUNT(*)::int FROM students WHERE is_banned = TRUE) AS banned_students,
                    (SELECT COUNT(*)::int FROM banned_devices) AS banned_devices_count,
                    (SELECT COUNT(*)::int FROM student_reports WHERE status = 'open') AS open_reports_count,
                    (SELECT COUNT(*)::int FROM student_uploads) AS total_uploads_count,
                    (SELECT COUNT(*)::int FROM lecture_messages) AS total_lecture_messages,
                    (SELECT COUNT(*)::int FROM topic_comments) AS total_topic_comments
            `
        ]);

        sendJson(res, 200, {
            adminEmail,
            stats: statsRows[0] || {},
            leaderboard,
            openReports,
            bannedDevices,
            recentUploads,
            globalChats: {
                lectureMessages: recentLectureChats,
                topicComments: recentTopicComments
            }
        });
    } catch (error) {
        console.error('Admin API error', error);
        sendJson(res, 500, { error: error.message || 'Unable to load admin data.' });
    }
};
