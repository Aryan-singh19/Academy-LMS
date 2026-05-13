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

module.exports = {
    sendJson,
    readJsonBody,
    allowMethods
};
