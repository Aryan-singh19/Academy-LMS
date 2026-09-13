const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

const THREE_HOURS_MS = 3 * 60 * 60 * 1000;

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'messages', limit: req.method === 'GET' ? 90 : 40, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const deviceId = String(req.query.deviceId || '').trim();
            const peerId = String(req.query.peerId || '').trim();
            if (!deviceId || !peerId) {
                sendJson(res, 400, { error: 'deviceId and peerId are required.' });
                return;
            }

            const student = await resolveStudent(req, sql, deviceId);
            assertStudentAllowed(student);

            const messages = await sql`
                SELECT
                    dm.id,
                    dm.message_text,
                    dm.created_at,
                    sender.id AS sender_id,
                    sender.display_name AS sender_name,
                    recipient.id AS recipient_id,
                    recipient.display_name AS recipient_name
                FROM direct_messages dm
                JOIN students sender ON sender.id = dm.sender_student_id
                JOIN students recipient ON recipient.id = dm.recipient_student_id
                WHERE (dm.sender_student_id = ${student.id} AND dm.recipient_student_id = ${peerId})
                   OR (dm.sender_student_id = ${peerId} AND dm.recipient_student_id = ${student.id})
                ORDER BY dm.created_at DESC
                LIMIT 50
            `;

            sendJson(res, 200, { messages: messages.reverse(), currentStudentId: student.id });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const action = String(body.action || 'send').trim();
        const messageId = String(body.messageId || '').trim();

        if (!deviceId && !req.headers.cookie) {
            sendJson(res, 400, { error: 'deviceId or session is required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        // Delete direct message (sender only)
        if (action === 'delete') {
            if (!messageId) {
                sendJson(res, 400, { error: 'messageId is required to delete.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, sender_student_id FROM direct_messages WHERE id = ${messageId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Message not found.' });
                return;
            }

            if (String(targetRows[0].sender_student_id) !== String(student.id)) {
                sendJson(res, 403, { error: 'You can only delete messages sent by you.' });
                return;
            }

            await sql`DELETE FROM direct_messages WHERE id = ${messageId}`;
            sendJson(res, 200, { message: 'Direct message deleted.' });
            return;
        }

        // Edit direct message (sender only, within 3 hours)
        if (action === 'edit') {
            const messageText = String(body.messageText || '').trim().slice(0, 500);
            if (!messageId || !messageText) {
                sendJson(res, 400, { error: 'messageId and messageText are required.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, sender_student_id, created_at FROM direct_messages WHERE id = ${messageId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Message not found.' });
                return;
            }

            if (String(targetRows[0].sender_student_id) !== String(student.id)) {
                sendJson(res, 403, { error: 'You can only edit messages sent by you.' });
                return;
            }

            const elapsedMs = Date.now() - new Date(targetRows[0].created_at).getTime();
            if (elapsedMs > THREE_HOURS_MS) {
                sendJson(res, 403, { error: 'Messages can only be edited within 3 hours of posting.' });
                return;
            }

            await sql`
                UPDATE direct_messages
                SET message_text = ${messageText}
                WHERE id = ${messageId}
            `;

            sendJson(res, 200, { message: 'Direct message updated.' });
            return;
        }

        const recipientStudentId = String(body.recipientStudentId || '').trim();
        const messageText = String(body.messageText || '').trim().slice(0, 500);

        if (!recipientStudentId || !messageText) {
            sendJson(res, 400, { error: 'recipientStudentId and messageText are required.' });
            return;
        }

        await sql`
            INSERT INTO direct_messages (
                sender_student_id,
                recipient_student_id,
                message_text
            )
            VALUES (${student.id}, ${recipientStudentId}, ${messageText})
        `;

        sendJson(res, 200, { message: 'Direct message sent.' });
    } catch (error) {
        console.error('Messages API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to handle direct message.' });
    }
};
