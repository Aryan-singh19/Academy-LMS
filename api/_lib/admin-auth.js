const crypto = require('crypto');
const { getStudentFromSession } = require('./db');

const BUILT_IN_ADMIN_EMAILS = new Set([
    'aryansingh19gh@gmail.com',
    'yograjsharma@rjit.ac.in',
    'shiroonigami23@gmail.com'
]);

function getAllowedAdminEmails() {
    const configured = String(process.env.ADMIN_EMAILS || '')
        .split(',')
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean);

    return new Set([...BUILT_IN_ADMIN_EMAILS, ...configured]);
}

function isEmailAdmin(email) {
    if (!email) return false;
    return getAllowedAdminEmails().has(String(email).trim().toLowerCase());
}

function getAdminSecret(req) {
    // header only: a secret in the query string ends up in access logs and browser history
    return String(req.headers['x-admin-secret'] || '').trim();
}

// The secret fallback is only enabled when ADMIN_SECRET is configured (12+ characters).
// Local development without a database (in-memory mock store) accepts 'admin123'.
function getConfiguredSecret() {
    const configured = String(process.env.ADMIN_SECRET || '').trim();
    if (configured.length >= 12) return configured;
    const usingMockStore = !(process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL);
    return usingMockStore ? 'admin123' : '';
}

function secretsMatch(provided, expected) {
    if (!provided || !expected) return false;
    const a = Buffer.from(provided);
    const b = Buffer.from(expected);
    return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function getAdminEmailHeader(req) {
    return String(req.headers['x-admin-email'] || req.query.email || '').trim().toLowerCase();
}

async function authenticateAdmin(req, sql) {
    const allowed = getAllowedAdminEmails();
    const configuredSecret = getConfiguredSecret();

    // 1. Direct session check (logged in with admin Google account)
    const sessionStudent = await getStudentFromSession(req, sql);
    if (sessionStudent && !sessionStudent.is_banned && sessionStudent.email) {
        const studentEmail = sessionStudent.email.trim().toLowerCase();
        if (allowed.has(studentEmail)) {
            return {
                ok: true,
                adminEmail: studentEmail,
                student: sessionStudent,
                mode: 'session'
            };
        }
    }

    // 2. Secret + allowed email header fallback
    const headerEmail = getAdminEmailHeader(req);
    const providedSecret = getAdminSecret(req);

    const isSecretValid = secretsMatch(providedSecret, configuredSecret);

    if (isSecretValid) {
        const adminEmail = (headerEmail && allowed.has(headerEmail)) ? headerEmail : (Array.from(allowed)[0] || 'admin@academylms.local');
        return {
            ok: true,
            adminEmail,
            student: null,
            mode: 'secret'
        };
    }

    return {
        ok: false,
        error: sessionStudent
            ? `Account (${sessionStudent.email}) is not authorized as an administrator.`
            : 'Authentication required. Please sign in with an authorized admin account or provide ADMIN_SECRET.',
        sessionStudent: sessionStudent || null
    };
}

module.exports = {
    BUILT_IN_ADMIN_EMAILS,
    getAllowedAdminEmails,
    isEmailAdmin,
    authenticateAdmin
};
