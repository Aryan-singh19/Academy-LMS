function sendJson(res, statusCode, payload) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
    if (req.body && typeof req.body === 'object') {
        return req.body;
    }

    if (typeof req.body === 'string' && req.body.trim()) {
        return JSON.parse(req.body);
    }

    const chunks = [];
    for await (const chunk of req) {
        chunks.push(chunk);
    }

    const raw = Buffer.concat(chunks).toString('utf8');
    return raw ? JSON.parse(raw) : {};
}

function allowMethods(req, res, methods) {
    if (methods.indexOf(req.method) !== -1) return true;
    res.setHeader('Allow', methods.join(', '));
    sendJson(res, 405, { error: `Method ${req.method} not allowed.` });
    return false;
}

function parseCookies(req) {
    const raw = String(req.headers.cookie || '');
    if (!raw) return {};

    return raw.split(';').reduce((acc, item) => {
        const [name, ...rest] = item.trim().split('=');
        if (!name) return acc;
        acc[name] = decodeURIComponent(rest.join('=') || '');
        return acc;
    }, {});
}

function setCookie(res, name, value, options = {}) {
    const parts = [`${name}=${encodeURIComponent(value)}`];
    parts.push(`Path=${options.path || '/'}`);
    if (options.maxAge !== undefined) parts.push(`Max-Age=${Math.max(0, Math.floor(options.maxAge))}`);
    if (options.httpOnly !== false) parts.push('HttpOnly');
    if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
    if (options.secure !== false) parts.push('Secure');
    if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);

    const existing = res.getHeader('Set-Cookie');
    const next = Array.isArray(existing) ? existing.concat(parts.join('; ')) : existing ? [existing, parts.join('; ')] : parts.join('; ');
    res.setHeader('Set-Cookie', next);
}

module.exports = {
    sendJson,
    readJsonBody,
    allowMethods,
    parseCookies,
    setCookie
};
