const { allowMethods, sendJson, parseCookies, setCookie } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');
const { getSql, revokeStudentSession } = require('./_lib/db');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'auth-logout', limit: 30, windowMs: 60000 })) return;

    try {
        const cookies = parseCookies(req);
        const rawToken = String(cookies.academy_session || '').trim();
        if (rawToken) {
            const sql = await getSql();
            await revokeStudentSession(sql, rawToken);
        }

        setCookie(res, 'academy_session', '', {
            maxAge: 0,
            sameSite: 'Lax'
        });

        sendJson(res, 200, { message: 'Logged out.' });
    } catch (error) {
        console.error('Logout error', error);
        sendJson(res, 500, { error: error.message || 'Unable to log out.' });
    }
};
