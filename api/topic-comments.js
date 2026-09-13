const { getSql, resolveStudent, assertStudentAllowed, getStudentFromSession } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');
const { isEmailAdmin } = require('./_lib/admin-auth');

const THREE_HOURS_MS = 3 * 60 * 60 * 1000;

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'topic-comments', limit: req.method === 'GET' ? 120 : 60, windowMs: 60000 })) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const topicId = String(req.query.topicId || '').trim();
            if (!topicId) {
                sendJson(res, 400, { error: 'topicId is required.' });
                return;
            }

            const currentStudent = await getStudentFromSession(req, sql);

            const comments = await sql`
                SELECT
                    tc.id,
                    tc.student_id,
                    tc.topic_id,
                    tc.course_id,
                    tc.message_text,
                    tc.created_at,
                    tc.is_edited,
                    s.display_name
                FROM topic_comments tc
                JOIN students s ON s.id = tc.student_id
                WHERE tc.topic_id = ${topicId}
                ORDER BY tc.created_at ASC
                LIMIT 50
            `;

            sendJson(res, 200, {
                comments,
                currentStudentId: currentStudent ? currentStudent.id : null
            });
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const topicId = String(body.topicId || '').trim();
        const courseId = String(body.courseId || '').trim();
        const messageText = String(body.messageText || '').trim().slice(0, 500);
        const action = String(body.action || 'post').trim();
        const commentId = String(body.commentId || '').trim();

        if (!deviceId && !req.headers.cookie) {
            sendJson(res, 400, { error: 'deviceId or session is required.' });
            return;
        }

        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        // Delete comment (author or admin)
        if (action === 'delete') {
            if (!commentId) {
                sendJson(res, 400, { error: 'commentId is required to delete.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, student_id FROM topic_comments WHERE id = ${commentId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Comment not found.' });
                return;
            }

            const targetComment = targetRows[0];
            const isAuthor = String(targetComment.student_id) === String(student.id);
            const isAdmin = isEmailAdmin(student.email);

            if (!isAuthor && !isAdmin) {
                sendJson(res, 403, { error: 'You do not have permission to delete this comment.' });
                return;
            }

            await sql`DELETE FROM topic_comments WHERE id = ${commentId}`;
            sendJson(res, 200, { message: 'Comment deleted successfully.' });
            return;
        }

        // Edit comment (author only, up to 3 hours)
        if (action === 'edit') {
            if (!commentId || !messageText) {
                sendJson(res, 400, { error: 'commentId and messageText are required to edit.' });
                return;
            }

            const targetRows = await sql`
                SELECT id, student_id, created_at FROM topic_comments WHERE id = ${commentId} LIMIT 1
            `;

            if (!targetRows.length) {
                sendJson(res, 404, { error: 'Comment not found.' });
                return;
            }

            const targetComment = targetRows[0];
            const isAuthor = String(targetComment.student_id) === String(student.id);

            if (!isAuthor) {
                sendJson(res, 403, { error: 'You can only edit your own comments.' });
                return;
            }

            const elapsedMs = Date.now() - new Date(targetComment.created_at).getTime();
            if (elapsedMs > THREE_HOURS_MS) {
                sendJson(res, 403, { error: 'Comments can only be edited within 3 hours of posting.' });
                return;
            }

            await sql`
                UPDATE topic_comments
                SET
                    message_text = ${messageText},
                    is_edited = TRUE,
                    updated_at = NOW()
                WHERE id = ${commentId}
            `;

            sendJson(res, 200, { message: 'Comment updated successfully.' });
            return;
        }

        if (!topicId || !courseId || !messageText) {
            sendJson(res, 400, { error: 'topicId, courseId, and messageText are required.' });
            return;
        }

        await sql`
            INSERT INTO topic_comments (student_id, topic_id, course_id, message_text)
            VALUES (${student.id}, ${topicId}, ${courseId}, ${messageText})
        `;

        sendJson(res, 200, { message: 'Comment posted.' });
    } catch (error) {
        console.error('Topic comments API error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to handle topic comment.' });
    }
};
