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
    return String(req.headers['x-admin-secret'] || req.query.secret || '').trim();
}

function getAdminEmailHeader(req) {
    return String(req.headers['x-admin-email'] || req.query.email || '').trim().toLowerCase();
}

async function authenticateAdmin(req, sql) {
    const allowed = getAllowedAdminEmails();
    const configuredSecret = String(process.env.ADMIN_SECRET || '').trim();

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

    if (configuredSecret && providedSecret && providedSecret === configuredSecret) {
        if (headerEmail && allowed.has(headerEmail)) {
            return {
                ok: true,
                adminEmail: headerEmail,
                student: null,
                mode: 'secret'
            };
        }
        // If valid secret is provided but no header email, pick first allowed admin email
        const fallbackEmail = headerEmail || Array.from(allowed)[0] || 'admin@academylms.local';
        return {
            ok: true,
            adminEmail: fallbackEmail,
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
