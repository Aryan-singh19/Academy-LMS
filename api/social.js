const { getSql, getStudentByDevice } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const deviceId = String(req.query.deviceId || '').trim();
            if (!deviceId) {
                sendJson(res, 400, { error: 'deviceId is required.' });
                return;
            }

            const student = await getStudentByDevice(sql, deviceId);
            if (!student) {
                sendJson(res, 404, { error: 'Student not found. Sync the profile first.' });
                return;
            }

            const directory = await sql`
                SELECT
                    s.id,
                    s.display_name,
                    s.bio,
                    s.last_seen_at,
                    EXISTS (
                        SELECT 1
                        FROM student_connections sc
                        WHERE sc.student_id = ${student.id}
                          AND sc.connected_student_id = s.id
                    ) AS connected
                FROM students s
                WHERE s.id <> ${student.id}
                ORDER BY s.last_seen_at DESC
                LIMIT 18
            `;

            const connections = await sql`
                SELECT s.id, s.display_name, s.bio, s.last_seen_at
                FROM student_connections sc
                JOIN students s ON s.id = sc.connected_student_id
                WHERE sc.student_id = ${student.id}
                ORDER BY sc.created_at DESC
            `;

            sendJson(res, 200, {
                directory,
                connections
            });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const targetStudentId = String(body.targetStudentId || '').trim();

        if (!deviceId || !targetStudentId) {
            sendJson(res, 400, { error: 'deviceId and targetStudentId are required.' });
            return;
        }

        const student = await getStudentByDevice(sql, deviceId);
        if (!student) {
            sendJson(res, 404, { error: 'Student not found. Sync the profile first.' });
            return;
        }

        await sql`
            INSERT INTO student_connections (student_id, connected_student_id, status)
            VALUES (${student.id}, ${targetStudentId}, 'accepted')
            ON CONFLICT (student_id, connected_student_id)
            DO NOTHING
        `;

        await sql`
            INSERT INTO student_connections (student_id, connected_student_id, status)
            VALUES (${targetStudentId}, ${student.id}, 'accepted')
            ON CONFLICT (student_id, connected_student_id)
            DO NOTHING
        `;

        sendJson(res, 200, { message: 'Student connection saved.' });
    } catch (error) {
        console.error('Social API error', error);
        sendJson(res, 500, { error: error.message || 'Unable to load student directory.' });
    }
};
