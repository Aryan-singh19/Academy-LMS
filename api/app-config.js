const { allowMethods, sendJson } = require('./_lib/http');

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET'])) return;

    sendJson(res, 200, {
        googleClientId: String(process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '').trim(),
        blobEnabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN)
    });
};
