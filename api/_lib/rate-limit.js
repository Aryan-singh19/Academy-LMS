const buckets = new Map();

function getClientAddress(req) {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.trim()) {
        return forwarded.split(',')[0].trim();
    }
    return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : 'unknown';
}

function applyRateLimit(req, res, options = {}) {
    const windowMs = Number(options.windowMs || 60000);
    const limit = Number(options.limit || 60);
    const scope = String(options.scope || 'global');
    const key = `${scope}:${getClientAddress(req)}`;
    const now = Date.now();

    let bucket = buckets.get(key);
    if (!bucket || now >= bucket.resetAt) {
        bucket = {
            count: 0,
            resetAt: now + windowMs
        };
        buckets.set(key, bucket);
    }

    bucket.count += 1;
    res.setHeader('X-RateLimit-Limit', String(limit));
    res.setHeader('X-RateLimit-Remaining', String(Math.max(limit - bucket.count, 0)));
    res.setHeader('X-RateLimit-Reset', String(Math.ceil(bucket.resetAt / 1000)));

    if (bucket.count <= limit) {
        return true;
    }

    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({
        error: 'Too many requests. Pause for a moment and try again.'
    }));
    return false;
}

module.exports = {
    applyRateLimit
};
