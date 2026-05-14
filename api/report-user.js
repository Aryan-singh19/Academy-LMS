const { getSql, resolveStudent, assertStudentAllowed } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'report-user', limit: 15, windowMs: 60000 })) return;

    try {
        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const targetStudentId = String(body.targetStudentId || '').trim();
        const reportReason = String(body.reportReason || '').trim().slice(0, 160);
        const reportDetails = String(body.reportDetails || '').trim().slice(0, 800);
        if (!targetStudentId || !reportReason) {
            sendJson(res, 400, { error: 'targetStudentId and reportReason are required.' });
            return;
        }

        const sql = await getSql();
        const student = await resolveStudent(req, sql, deviceId);
        assertStudentAllowed(student);

        await sql`
            INSERT INTO student_reports (
                reporter_student_id,
                target_student_id,
                report_reason,
                report_details
            )
            VALUES (
                ${student.id},
                ${targetStudentId},
                ${reportReason},
                ${reportDetails}
            )
        `;

        sendJson(res, 200, { message: 'Report sent to admin review.' });
    } catch (error) {
        console.error('Report user error', error);
        sendJson(res, error.statusCode || 500, { error: error.message || 'Unable to send report.' });
    }
};
