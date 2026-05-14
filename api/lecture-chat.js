const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

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

            const messages = await sql`
                SELECT
                    lm.id,
                    lm.scope,
                    lm.message_text,
                    lm.created_at,
                    s.display_name
                FROM lecture_messages lm
                JOIN students s ON s.id = lm.student_id
                WHERE lm.lecture_key = ${lectureKey}
                  AND lm.scope = ${scope}
                ORDER BY lm.created_at DESC
                LIMIT 30
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

        if (!deviceId || !lectureKey) {
            sendJson(res, 400, { error: 'deviceId and lectureKey are required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

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

        if (action === 'message' && messageText) {
            await sql`
                INSERT INTO lecture_messages (student_id, lecture_key, scope, message_text)
                VALUES (${student.id}, ${lectureKey}, ${scope}, ${messageText})
            `;
        }

        const presence = await sql`
            SELECT COUNT(DISTINCT student_id)::int AS online_count
            FROM lecture_presence
            WHERE lecture_key = ${lectureKey}
              AND scope = ${scope}
              AND last_seen_at > NOW() - INTERVAL '5 minutes'
        `;

        sendJson(res, 200, {
            message: action === 'message' ? 'Lecture chat updated.' : 'Presence heartbeat recorded.',
            onlineCount: Number(presence[0] ? presence[0].online_count : 0)
        });
    } catch (error) {
        console.error('Lecture chat API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to load lecture chat.' });
    }
};
