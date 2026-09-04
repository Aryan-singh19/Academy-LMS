const { OAuth2Client } = require('google-auth-library');
const { getSql, createStudentSession } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson, setCookie } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

async function verifyGoogleToken(idToken, audience) {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
        idToken,
        audience
    });
    return ticket.getPayload();
}

async function upsertGoogleStudent(sql, payload, deviceId) {
    const googleSub = String(payload.sub || '').trim();
    const email = String(payload.email || '').trim().toLowerCase();
    const normalizedEmail = email || null;
    const displayName = String(payload.name || 'Student').trim().slice(0, 60) || 'Student';
    const avatarUrl = String(payload.picture || '').trim();
    const emailVerified = Boolean(payload.email_verified);

    const existing = await sql`
        SELECT id
        FROM students
        WHERE google_sub = ${googleSub}
           OR email = ${normalizedEmail}
           OR device_id = ${deviceId}
        ORDER BY CASE
            WHEN google_sub = ${googleSub} THEN 0
            WHEN email = ${normalizedEmail} THEN 1
            WHEN device_id = ${deviceId} THEN 2
            ELSE 3
        END
        LIMIT 1
    `;

    if (existing[0]) {
        const rows = await sql`
            UPDATE students
            SET
                device_id = ${deviceId},
                display_name = ${displayName},
                google_sub = ${googleSub},
                auth_provider = 'google',
                email = ${normalizedEmail},
                email_verified = ${emailVerified},
                avatar_url = CASE WHEN ${avatarUrl} <> '' THEN ${avatarUrl} ELSE avatar_url END,
                last_seen_at = NOW(),
                last_login_at = NOW(),
                updated_at = NOW()
            WHERE id = ${existing[0].id}
            RETURNING *
        `;
        return rows[0];
    }

    const rows = await sql`
        INSERT INTO students (
            device_id,
            display_name,
            google_sub,
            auth_provider,
            email,
            email_verified,
            avatar_seed,
            avatar_url,
            profile_started_at,
            last_seen_at,
            last_login_at
        )
        VALUES (
            ${deviceId},
            ${displayName},
            ${googleSub},
            'google',
            ${normalizedEmail},
            ${emailVerified},
            ${displayName.toLowerCase().replace(/[^a-z0-9]+/g, '-')},
            ${avatarUrl},
            NOW(),
            NOW(),
            NOW()
        )
        RETURNING *
    `;

    return rows[0];
}

const DEFAULT_GOOGLE_CLIENT_ID = '659669320220-hnaqggmsjl9vobtjfhfngen7ec9462e5.apps.googleusercontent.com';

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'auth-google', limit: 20, windowMs: 60000 })) return;

    try {
        const googleClientId = String(process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID).trim();
        if (!googleClientId) {
            sendJson(res, 503, { error: 'GOOGLE_CLIENT_ID is not configured yet.' });
            return;
        }

        const body = await readJsonBody(req);
        const idToken = String(body.idToken || '').trim();
        const deviceId = String(body.deviceId || '').trim();
        if (!idToken || !deviceId) {
            sendJson(res, 400, { error: 'idToken and deviceId are required.' });
            return;
        }

        const payload = await verifyGoogleToken(idToken, googleClientId);
        if (!payload || !payload.sub) {
            sendJson(res, 401, { error: 'Invalid Google identity token.' });
            return;
        }

        const sql = await getSql();
        const student = await upsertGoogleStudent(sql, payload, deviceId);
        if (student.is_banned) {
            sendJson(res, 403, { error: student.banned_reason || 'This account is banned from Academy LMS.' });
            return;
        }

        const session = await createStudentSession(sql, student.id, deviceId, req.headers['user-agent']);
        setCookie(res, 'academy_session', session.rawToken, {
            maxAge: 60 * 60 * 24 * 30,
            sameSite: 'Lax'
        });

        sendJson(res, 200, {
            message: 'Signed in with Google.',
            student
        });
    } catch (error) {
        console.error('Google auth error', error);
        sendJson(res, 500, { error: error.message || 'Unable to sign in with Google.' });
    }
};
