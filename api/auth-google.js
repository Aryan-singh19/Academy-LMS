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

async function mergeGuestStudent(sql, guestId, primaryId) {
    // 1. Topic progress: deduplicate and migrate
    try {
        await sql`
            DELETE FROM student_topic_progress
            WHERE student_id = ${guestId}
              AND topic_id IN (
                  SELECT topic_id FROM student_topic_progress WHERE student_id = ${primaryId}
              )
        `;
        await sql`
            UPDATE student_topic_progress
            SET student_id = ${primaryId}
            WHERE student_id = ${guestId}
        `;
    } catch (e) {
        console.warn('Could not merge student_topic_progress:', e.message);
    }

    // 2. Exam drafts, quiz attempts, practice sessions
    try {
        await sql`UPDATE exam_drafts SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}
    try {
        await sql`UPDATE quiz_attempts SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}
    try {
        await sql`UPDATE practice_sessions SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}

    // 3. Lecture events, presence, messages, comments
    try {
        await sql`UPDATE lecture_watch_events SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}
    try {
        await sql`UPDATE lecture_presence SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}
    try {
        await sql`UPDATE lecture_messages SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}
    try {
        await sql`UPDATE topic_comments SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}

    // 4. Student connections: delete self-connections and duplicates, then reassign
    try {
        await sql`
            DELETE FROM student_connections
            WHERE (student_id = ${guestId} AND connected_student_id = ${primaryId})
               OR (student_id = ${primaryId} AND connected_student_id = ${guestId})
        `;
        await sql`
            DELETE FROM student_connections
            WHERE student_id = ${guestId}
              AND connected_student_id IN (
                  SELECT connected_student_id FROM student_connections WHERE student_id = ${primaryId}
              )
        `;
        await sql`
            DELETE FROM student_connections
            WHERE connected_student_id = ${guestId}
              AND student_id IN (
                  SELECT student_id FROM student_connections WHERE connected_student_id = ${primaryId}
              )
        `;
        await sql`UPDATE student_connections SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
        await sql`UPDATE student_connections SET connected_student_id = ${primaryId} WHERE connected_student_id = ${guestId}`;
    } catch (_) {}

    // 5. Direct messages
    try {
        await sql`UPDATE direct_messages SET sender_student_id = ${primaryId} WHERE sender_student_id = ${guestId}`;
        await sql`UPDATE direct_messages SET recipient_student_id = ${primaryId} WHERE recipient_student_id = ${guestId}`;
    } catch (_) {}

    // 6. Reports & uploads
    try {
        await sql`UPDATE student_reports SET reporter_student_id = ${primaryId} WHERE reporter_student_id = ${guestId}`;
        await sql`UPDATE student_reports SET target_student_id = ${primaryId} WHERE target_student_id = ${guestId}`;
        await sql`UPDATE student_uploads SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}

    // 7. Sessions & snapshots
    try {
        await sql`UPDATE student_sessions SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
        await sql`UPDATE student_state_snapshots SET student_id = ${primaryId} WHERE student_id = ${guestId}`;
    } catch (_) {}

    // 8. Relinquish device_id and delete guest record
    try {
        await sql`UPDATE students SET device_id = ${'merged-' + guestId} WHERE id = ${guestId}`;
        await sql`DELETE FROM students WHERE id = ${guestId}`;
    } catch (e) {
        console.warn('Could not remove merged guest student:', e.message);
    }
}

async function upsertGoogleStudent(sql, payload, deviceId) {
    const googleSub = String(payload.sub || '').trim();
    const email = String(payload.email || '').trim().toLowerCase();
    const normalizedEmail = email || null;
    const displayName = String(payload.name || 'Student').trim().slice(0, 60) || 'Student';
    const avatarUrl = String(payload.picture || '').trim();
    const emailVerified = Boolean(payload.email_verified);

    // 1. Locate any existing Google/email account
    let authStudent = null;
    if (googleSub) {
        const rows = await sql`
            SELECT *
            FROM students
            WHERE google_sub = ${googleSub}
            LIMIT 1
        `;
        if (rows[0]) authStudent = rows[0];
    }
    if (!authStudent && normalizedEmail) {
        const rows = await sql`
            SELECT *
            FROM students
            WHERE email = ${normalizedEmail}
            LIMIT 1
        `;
        if (rows[0]) authStudent = rows[0];
    }

    // 2. Locate any student record holding this device_id
    let devStudent = null;
    if (deviceId) {
        const rows = await sql`
            SELECT *
            FROM students
            WHERE device_id = ${deviceId}
            LIMIT 1
        `;
        if (rows[0]) devStudent = rows[0];
    }

    // 3. Resolve conflict if device_id is held by another row
    if (authStudent && devStudent && authStudent.id !== devStudent.id) {
        const isGuest = !devStudent.google_sub || devStudent.auth_provider === 'device';
        if (isGuest) {
            // Merge guest progress into authenticated account and purge guest row
            await mergeGuestStudent(sql, devStudent.id, authStudent.id);
        } else {
            // Another registered student used this machine previously; reassign their device_id
            await sql`
                UPDATE students
                SET device_id = ${'prev-' + devStudent.id + '-' + Date.now()}
                WHERE id = ${devStudent.id}
            `;
        }
        devStudent = null;
    }

    // 4. Update existing authenticated student
    if (authStudent) {
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
            WHERE id = ${authStudent.id}
            RETURNING *
        `;
        return rows[0];
    }

    // 5. Upgrade existing guest record holding this device_id
    if (devStudent) {
        const rows = await sql`
            UPDATE students
            SET
                display_name = ${displayName},
                google_sub = ${googleSub},
                auth_provider = 'google',
                email = ${normalizedEmail},
                email_verified = ${emailVerified},
                avatar_url = CASE WHEN ${avatarUrl} <> '' THEN ${avatarUrl} ELSE avatar_url END,
                last_seen_at = NOW(),
                last_login_at = NOW(),
                updated_at = NOW()
            WHERE id = ${devStudent.id}
            RETURNING *
        `;
        return rows[0];
    }

    // 6. Brand new user and device
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
        ON CONFLICT (device_id)
        DO UPDATE SET
            display_name = EXCLUDED.display_name,
            google_sub = EXCLUDED.google_sub,
            auth_provider = 'google',
            email = EXCLUDED.email,
            email_verified = EXCLUDED.email_verified,
            avatar_url = CASE WHEN EXCLUDED.avatar_url <> '' THEN EXCLUDED.avatar_url ELSE students.avatar_url END,
            last_seen_at = NOW(),
            last_login_at = NOW(),
            updated_at = NOW()
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

        // Universal entry: All email domains (Gmail, university/college accounts, and personal emails) are permitted.
        // No domain restrictions are enforced so students across any institution can access the platform.

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
