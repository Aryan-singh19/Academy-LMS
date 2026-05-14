const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'social', limit: req.method === 'GET' ? 80 : 25, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const deviceId = String(req.query.deviceId || '').trim();
            if (!deviceId) {
                sendJson(res, 400, { error: 'deviceId is required.' });
                return;
            }

            const student = await resolveStudent(req, sql, deviceId);
            assertStudentAllowed(student);

            const directory = await sql`
                SELECT
                    s.id,
                    s.display_name,
                    s.headline,
                    s.bio,
                    s.avatar_url,
                    s.last_seen_at,
                    s.is_banned,
                    EXISTS (
                        SELECT 1
                        FROM student_connections sc
                        WHERE sc.student_id = ${student.id}
                          AND sc.connected_student_id = s.id
                    ) AS connected
                FROM students s
                WHERE s.id <> ${student.id}
                  AND s.is_banned = FALSE
                ORDER BY s.last_seen_at DESC
                LIMIT 18
            `;

            const connections = await sql`
                SELECT s.id, s.display_name, s.headline, s.bio, s.avatar_url, s.last_seen_at
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

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

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
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to load student directory.' });
    }
};
