const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'topic-comments', limit: req.method === 'GET' ? 120 : 30, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const topicId = String(req.query.topicId || '').trim();
            if (!topicId) {
                sendJson(res, 400, { error: 'topicId is required.' });
                return;
            }

            const comments = await sql`
                SELECT
                    tc.id,
                    tc.topic_id,
                    tc.course_id,
                    tc.message_text,
                    tc.created_at,
                    s.display_name
                FROM topic_comments tc
                JOIN students s ON s.id = tc.student_id
                WHERE tc.topic_id = ${topicId}
                ORDER BY tc.created_at DESC
                LIMIT 20
            `;

            sendJson(res, 200, { comments });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const topicId = String(body.topicId || '').trim();
        const courseId = String(body.courseId || '').trim();
        const messageText = String(body.messageText || '').trim().slice(0, 500);

        if (!deviceId || !topicId || !courseId || !messageText) {
            sendJson(res, 400, { error: 'deviceId, topicId, courseId, and messageText are required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        await sql`
            INSERT INTO topic_comments (student_id, topic_id, course_id, message_text)
            VALUES (${student.id}, ${topicId}, ${courseId}, ${messageText})
        `;

        sendJson(res, 200, { message: 'Comment posted.' });
    } catch (error) {
        console.error('Topic comments API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to load topic comments.' });
    }
};
