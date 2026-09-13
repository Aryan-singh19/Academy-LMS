const { getSql, resolveStudent, assertStudentAllowed, getStudentFromSession } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');
const { isEmailAdmin } = require('./_lib/admin-auth');

const THREE_HOURS_MS = 3 * 60 * 60 * 1000;

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'lecture-chat', limit: req.method === 'GET' ? 120 : 90, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const lectureKey = String(req.query.lectureKey || '').trim();
            const scope = String(req.query.scope || 'local').trim();
            if (!lectureKey) {
                sendJson(res, 400, { error: 'lectureKey is required.' });
                return;
            }

            const currentStudent = await getStudentFromSession(req, sql);

            const messages = await sql`
                SELECT
                    lm.id,
                    lm.student_id,
                    lm.scope,
                    lm.message_text,
                    lm.created_at,
                    lm.is_edited,
                    s.display_name
                FROM lecture_messages lm
                JOIN students s ON s.id = lm.student_id
                WHERE lm.lecture_key = ${lectureKey}
                  AND lm.scope = ${scope}
                ORDER BY lm.created_at DESC
                LIMIT 50
            `;

            const presence = await sql`
                SELECT COUNT(DISTINCT student_id)::int AS online_count
                FROM lecture_presence
                WHERE lecture_key = ${lectureKey}
                  AND scope = ${scope}
                  AND last_seen_at > NOW() - INTERVAL '5 minutes'
            `;

            sendJson(res, 200, {
                messages: messages.reverse(),
                currentStudentId: currentStudent ? currentStudent.id : null,
                onlineCount: Number(presence[0] ? presence[0].online_count : 0)
            });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const lectureKey = String(body.lectureKey || '').trim();
        const subjectCode = String(body.subjectCode || '').trim();
        const scope = String(body.scope || 'local').trim();
        const action = String(body.action || 'message').trim();
        const messageText = String(body.messageText || '').trim().slice(0, 500);
        const messageId = String(body.messageId || '').trim();

        if (!deviceId && !req.headers.cookie) {
            sendJson(res, 400, { error: 'deviceId or session is required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        // Delete message action (author or admin)
        if (action === 'delete') {
            if (!messageId) {
                sendJson(res, 400, { error: 'messageId is required to delete.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, student_id FROM lecture_messages WHERE id = ${messageId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Message not found.' });
                return;
            }

            const targetMsg = targetRows[0];
            const isAuthor = String(targetMsg.student_id) === String(student.id);
            const isAdmin = isEmailAdmin(student.email);

            if (!isAuthor && !isAdmin) {
                sendJson(res, 403, { error: 'You do not have permission to delete this message.' });
                return;
            }

            await sql`DELETE FROM lecture_messages WHERE id = ${messageId}`;
            sendJson(res, 200, { message: 'Message deleted successfully.' });
            return;
        }

        // Edit message action (author only, up to 3 hours)
        if (action === 'edit') {
            if (!messageId || !messageText) {
                sendJson(res, 400, { error: 'messageId and messageText are required to edit.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, student_id, created_at FROM lecture_messages WHERE id = ${messageId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Message not found.' });
                return;
            }

            const targetMsg = targetRows[0];
            const isAuthor = String(targetMsg.student_id) === String(student.id);

            if (!isAuthor) {
                sendJson(res, 403, { error: 'You can only edit your own messages.' });
                return;
            }

            const elapsedMs = Date.now() - new Date(targetMsg.created_at).getTime();
            if (elapsedMs > THREE_HOURS_MS) {
                sendJson(res, 403, { error: 'Messages can only be edited within 3 hours of posting.' });
                return;
            }

            await sql`
                UPDATE lecture_messages
                SET
                    message_text = ${messageText},
                    is_edited = TRUE,
                    updated_at = NOW()
                WHERE id = ${messageId}
            `;

            sendJson(res, 200, { message: 'Message updated successfully.' });
            return;
        }

        if (lectureKey) {
            await sql`
                INSERT INTO lecture_presence (student_id, lecture_key, scope, last_seen_at)
                VALUES (${student.id}, ${lectureKey}, ${scope}, NOW())
                ON CONFLICT (student_id, lecture_key, scope)
                DO UPDATE SET last_seen_at = NOW()
            `;

            await sql`
                INSERT INTO lecture_watch_events (student_id, lecture_key, subject_code, watched_seconds, completed)
                VALUES (${student.id}, ${lectureKey}, ${subjectCode || 'unknown'}, 0, FALSE)
                ON CONFLICT (student_id, lecture_key)
                DO UPDATE SET updated_at = NOW()
            `;
        }

        if (action === 'message' && messageText && lectureKey) {
            await sql`
                INSERT INTO lecture_messages (student_id, lecture_key, scope, message_text)
                VALUES (${student.id}, ${lectureKey}, ${scope}, ${messageText})
            `;
        }

        const presence = lectureKey ? await sql`
            SELECT COUNT(DISTINCT student_id)::int AS online_count
            FROM lecture_presence
            WHERE lecture_key = ${lectureKey}
              AND scope = ${scope}
              AND last_seen_at > NOW() - INTERVAL '5 minutes'
        ` : [{ online_count: 0 }];

        sendJson(res, 200, {
            message: action === 'message' ? 'Lecture chat updated.' : 'Presence heartbeat recorded.',
            onlineCount: Number(presence[0] ? presence[0].online_count : 0)
        });
    } catch (error) {
        console.error('Lecture chat API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to load lecture chat.' });
    }
};
