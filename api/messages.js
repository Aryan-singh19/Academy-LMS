const { getSql, getStudentByDevice } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'messages', limit: req.method === 'GET' ? 90 : 30, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const deviceId = String(req.query.deviceId || '').trim();
            const peerId = String(req.query.peerId || '').trim();
            if (!deviceId || !peerId) {
                sendJson(res, 400, { error: 'deviceId and peerId are required.' });
                return;
            }

            const student = await getStudentByDevice(sql, deviceId);
            if (!student) {
                sendJson(res, 404, { error: 'Student not found. Sync the profile first.' });
                return;
            }

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
                LIMIT 40
            `;

            sendJson(res, 200, { messages: messages.reverse() });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const recipientStudentId = String(body.recipientStudentId || '').trim();
        const messageText = String(body.messageText || '').trim().slice(0, 500);

        if (!deviceId || !recipientStudentId || !messageText) {
            sendJson(res, 400, { error: 'deviceId, recipientStudentId, and messageText are required.' });
            return;
        }

        const student = await getStudentByDevice(sql, deviceId);
        if (!student) {
            sendJson(res, 404, { error: 'Student not found. Sync the profile first.' });
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
        sendJson(res, 500, { error: error.message || 'Unable to send direct message.' });
    }
};
