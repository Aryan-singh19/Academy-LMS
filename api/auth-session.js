const { allowMethods, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');
const { getSql, getStudentFromSession } = require('./_lib/db');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET'])) return;
    if (!applyRateLimit(req, res, { scope: 'auth-session', limit: 80, windowMs: 60000 })) return;

    try {
        const sql = await getSql();
        const student = await getStudentFromSession(req, sql);
        sendJson(res, 200, {
            authenticated: Boolean(student && !student.is_banned),
            student: student && !student.is_banned ? student : null
        });
    } catch (error) {
        console.error('Auth session error', error);
        sendJson(res, 200, { authenticated: false, student: null });
    }
};
