let cachedSql;
const crypto = require('crypto');
const { parseCookies } = require('./http');

async function getSql() {
    if (cachedSql) return cachedSql;

    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL;
    if (!databaseUrl) {
        throw new Error('Database URL missing. Set DATABASE_URL or POSTGRES_URL in Vercel.');
    }

    const { neon } = await import('@neondatabase/serverless');
    cachedSql = neon(databaseUrl);
    return cachedSql;
}

async function getStudentByDevice(sql, deviceId) {
    const rows = await sql`
        SELECT
            id,
            device_id,
            display_name,
            email,
            bio,
            headline,
            avatar_seed,
            avatar_url,
            github_url,
            linkedin_url,
            website_url,
            extra_links,
            profile_started_at,
            created_at,
            updated_at,
            last_seen_at
        FROM students
        WHERE device_id = ${deviceId}
        LIMIT 1
    `;
    return rows[0] || null;
}

async function getStudentById(sql, studentId) {
    const rows = await sql`
        SELECT
            id,
            device_id,
            display_name,
            google_sub,
            auth_provider,
            email,
            email_verified,
            bio,
            headline,
            avatar_seed,
            avatar_url,
            github_url,
            linkedin_url,
            website_url,
            extra_links,
            is_banned,
            banned_reason,
            banned_at,
            profile_started_at,
            created_at,
            updated_at,
            last_seen_at,
            last_login_at
        FROM students
        WHERE id = ${studentId}
        LIMIT 1
    `;
    return rows[0] || null;
}

function hashSessionToken(token) {
    return crypto.createHash('sha256').update(String(token || '')).digest('hex');
}

function createRawSessionToken() {
    return crypto.randomBytes(32).toString('hex');
}

async function createStudentSession(sql, studentId, deviceId, userAgent) {
    const rawToken = createRawSessionToken();
    const tokenHash = hashSessionToken(rawToken);
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    await sql`
        INSERT INTO student_sessions (
            student_id,
            session_token_hash,
            device_id,
            user_agent,
            expires_at
        )
        VALUES (
            ${studentId},
            ${tokenHash},
            ${deviceId || ''},
            ${String(userAgent || '').slice(0, 300)},
            ${expiresAt.toISOString()}
        )
    `;

    return {
        rawToken,
        expiresAt
    };
}

async function revokeStudentSession(sql, rawToken) {
    const tokenHash = hashSessionToken(rawToken);
    await sql`
        UPDATE student_sessions
        SET revoked_at = NOW()
        WHERE session_token_hash = ${tokenHash}
          AND revoked_at IS NULL
    `;
}

async function getStudentFromSession(req, sql) {
    const cookies = parseCookies(req);
    const rawToken = String(cookies.academy_session || '').trim();
    if (!rawToken) return null;

    const tokenHash = hashSessionToken(rawToken);
    const rows = await sql`
        SELECT s.*
        FROM student_sessions ss
        JOIN students s ON s.id = ss.student_id
        WHERE ss.session_token_hash = ${tokenHash}
          AND ss.revoked_at IS NULL
          AND ss.expires_at > NOW()
        LIMIT 1
    `;

    return rows[0] || null;
}

async function resolveStudent(req, sql, deviceId) {
    const sessionStudent = await getStudentFromSession(req, sql);
    if (sessionStudent) {
        return sessionStudent;
    }
    if (!deviceId) return null;
    return getStudentByDevice(sql, deviceId);
}

function assertStudentAllowed(student) {
    if (!student) {
        const error = new Error('Student not found. Sign in first.');
        error.statusCode = 404;
        throw error;
    }
    if (student.is_banned) {
        const error = new Error(student.banned_reason || 'This account is banned from Academy LMS.');
        error.statusCode = 403;
        throw error;
    }
}

module.exports = {
    getSql,
    getStudentByDevice,
    getStudentById,
    createStudentSession,
    revokeStudentSession,
    getStudentFromSession,
    resolveStudent,
    assertStudentAllowed
};
