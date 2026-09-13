const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'social', limit: req.method === 'GET' ? 100 : 40, windowMs: 60000 })) return;

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
                    CASE
                        WHEN EXISTS (
                            SELECT 1 FROM student_connections sc
                            WHERE sc.student_id = ${student.id}
                              AND sc.connected_student_id = s.id
                              AND sc.status = 'accepted'
                        ) THEN 'connected'
                        WHEN EXISTS (
                            SELECT 1 FROM student_connections sc
                            WHERE sc.student_id = ${student.id}
                              AND sc.connected_student_id = s.id
                              AND sc.status = 'pending'
                        ) THEN 'pending_sent'
                        WHEN EXISTS (
                            SELECT 1 FROM student_connections sc
                            WHERE sc.student_id = s.id
                              AND sc.connected_student_id = ${student.id}
                              AND sc.status = 'pending'
                        ) THEN 'pending_received'
                        ELSE 'none'
                    END AS connection_status,
                    EXISTS (
                        SELECT 1
                        FROM student_connections sc
                        WHERE sc.student_id = ${student.id}
                          AND sc.connected_student_id = s.id
                          AND sc.status = 'accepted'
                    ) AS connected
                FROM students s
                WHERE s.id <> ${student.id}
                  AND s.is_banned = FALSE
                ORDER BY s.last_seen_at DESC
                LIMIT 24
            `;

            const connections = await sql`
                SELECT s.id, s.display_name, s.headline, s.bio, s.avatar_url, s.last_seen_at, sc.created_at AS connected_at
                FROM student_connections sc
                JOIN students s ON s.id = sc.connected_student_id
                WHERE sc.student_id = ${student.id}
                  AND sc.status = 'accepted'
                ORDER BY sc.created_at DESC
            `;

            const incomingRequests = await sql`
                SELECT s.id, s.display_name, s.headline, s.bio, s.avatar_url, s.last_seen_at, sc.created_at AS requested_at
                FROM student_connections sc
                JOIN students s ON s.id = sc.student_id
                WHERE sc.connected_student_id = ${student.id}
                  AND sc.status = 'pending'
                ORDER BY sc.created_at DESC
            `;

            const outgoingRequests = await sql`
                SELECT s.id, s.display_name, s.headline, s.bio, s.avatar_url, s.last_seen_at, sc.created_at AS requested_at
                FROM student_connections sc
                JOIN students s ON s.id = sc.connected_student_id
                WHERE sc.student_id = ${student.id}
                  AND sc.status = 'pending'
                ORDER BY sc.created_at DESC
            `;

            sendJson(res, 200, {
                directory,
                connections,
                incomingRequests,
                outgoingRequests,
                counts: {
                    connections: connections.length,
                    incoming: incomingRequests.length,
                    outgoing: outgoingRequests.length
                }
            });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const targetStudentId = String(body.targetStudentId || '').trim();
        const action = String(body.action || 'connect').trim().toLowerCase();

        if (!deviceId || !targetStudentId) {
            sendJson(res, 400, { error: 'deviceId and targetStudentId are required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        if (student.id === targetStudentId) {
            sendJson(res, 400, { error: 'You cannot connect with yourself.' });
            return;
        }

        if (action === 'connect' || action === 'request') {
            // Check if already mutually accepted
            const existingMutual = await sql`
                SELECT status FROM student_connections
                WHERE student_id = ${student.id} AND connected_student_id = ${targetStudentId}
                LIMIT 1
            `;

            if (existingMutual.length && existingMutual[0].status === 'accepted') {
                sendJson(res, 200, {
                    message: 'Already connected as study partners.',
                    status: 'connected'
                });
                return;
            }

            // Check if other student already sent a pending request to us -> Discord mutual connect!
            const incomingPending = await sql`
                SELECT status FROM student_connections
                WHERE student_id = ${targetStudentId} AND connected_student_id = ${student.id} AND status = 'pending'
                LIMIT 1
            `;

            if (incomingPending.length) {
                // Both users want to connect! Make it mutual and accepted!
                await sql`
                    UPDATE student_connections
                    SET status = 'accepted'
                    WHERE student_id = ${targetStudentId} AND connected_student_id = ${student.id}
                `;

                await sql`
                    INSERT INTO student_connections (student_id, connected_student_id, status)
                    VALUES (${student.id}, ${targetStudentId}, 'accepted')
                    ON CONFLICT (student_id, connected_student_id)
                    DO UPDATE SET status = 'accepted'
                `;

                sendJson(res, 200, {
                    message: 'Mutual connection confirmed! You are now connected study partners.',
                    status: 'connected',
                    mutual: true
                });
                return;
            }

            // Otherwise, send a single-direction pending request
            await sql`
                INSERT INTO student_connections (student_id, connected_student_id, status)
                VALUES (${student.id}, ${targetStudentId}, 'pending')
                ON CONFLICT (student_id, connected_student_id)
                DO UPDATE SET status = 'pending'
            `;

            sendJson(res, 200, {
                message: 'Connection request sent. Waiting for classmate to accept.',
                status: 'pending_sent'
            });
            return;
        }

        if (action === 'accept') {
            // Accept incoming request from targetStudentId
            await sql`
                UPDATE student_connections
                SET status = 'accepted'
                WHERE student_id = ${targetStudentId} AND connected_student_id = ${student.id}
            `;

            await sql`
                INSERT INTO student_connections (student_id, connected_student_id, status)
                VALUES (${student.id}, ${targetStudentId}, 'accepted')
                ON CONFLICT (student_id, connected_student_id)
                DO UPDATE SET status = 'accepted'
            `;

            sendJson(res, 200, {
                message: 'Connection request accepted! You are now study partners.',
                status: 'connected'
            });
            return;
        }

        if (action === 'reject') {
            // Reject incoming request from targetStudentId
            await sql`
                DELETE FROM student_connections
                WHERE student_id = ${targetStudentId} AND connected_student_id = ${student.id} AND status = 'pending'
            `;

            sendJson(res, 200, {
                message: 'Connection request declined.',
                status: 'none'
            });
            return;
        }

        if (action === 'cancel') {
            // Cancel outgoing request from student.id to targetStudentId
            await sql`
                DELETE FROM student_connections
                WHERE student_id = ${student.id} AND connected_student_id = ${targetStudentId} AND status = 'pending'
            `;

            sendJson(res, 200, {
                message: 'Connection request cancelled.',
                status: 'none'
            });
            return;
        }

        if (action === 'disconnect') {
            // Dissolve mutual connection between both users
            await sql`
                DELETE FROM student_connections
                WHERE (student_id = ${student.id} AND connected_student_id = ${targetStudentId})
                   OR (student_id = ${targetStudentId} AND connected_student_id = ${student.id})
            `;

            sendJson(res, 200, {
                message: 'Study partner connection removed.',
                status: 'none'
            });
            return;
        }

        sendJson(res, 400, { error: `Invalid connection action: ${action}` });
    } catch (error) {
        console.error('Social API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to process student connection.' });
    }
};
