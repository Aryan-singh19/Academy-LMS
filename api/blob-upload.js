const { getSql, getStudentByDevice } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');
const { applyRateLimit } = require('./_lib/rate-limit');

const MAX_PDF_BYTES = 10 * 1024 * 1024;
const MAX_AVATAR_BYTES = 2 * 1024 * 1024;

function parsePayload(rawPayload) {
    try {
        return rawPayload ? JSON.parse(rawPayload) : {};
    } catch (error) {
        return {};
    }
}

function sanitizeSlug(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 60) || 'upload';
}

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['POST'])) return;
    if (!applyRateLimit(req, res, { scope: 'blob-upload', limit: 20, windowMs: 60000 })) return;

    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            sendJson(res, 503, { error: 'Vercel Blob is not configured yet. Connect Blob storage in Vercel first.' });
            return;
        }

        const body = await readJsonBody(req);
        const { handleUpload } = await import('@vercel/blob/client');
        const sql = await getSql();

        const jsonResponse = await handleUpload({
            body,
            request: req,
            onBeforeGenerateToken: async (_pathname, clientPayload) => {
                const payload = parsePayload(clientPayload);
                const deviceId = String(payload.deviceId || '').trim();
                const uploadKind = String(payload.uploadKind || '').trim();
                const originalName = String(payload.originalName || '').trim();

                if (!deviceId || !uploadKind) {
                    throw new Error('deviceId and uploadKind are required.');
                }

                const student = await getStudentByDevice(sql, deviceId);
                if (!student) {
                    throw new Error('Student profile not found. Sync the profile first.');
                }

                const isAvatar = uploadKind === 'avatar';
                return {
                    allowedContentTypes: isAvatar
                        ? ['image/jpeg', 'image/png', 'image/webp']
                        : ['application/pdf'],
                    addRandomSuffix: true,
                    tokenPayload: JSON.stringify({
                        deviceId,
                        studentId: student.id,
                        uploadKind,
                        originalName,
                        title: payload.title || originalName,
                        description: payload.description || ''
                    })
                };
            },
            onUploadCompleted: async ({ blob, tokenPayload }) => {
                const payload = parsePayload(tokenPayload);
                const sizeBytes = Number(blob.size || 0);
                const uploadKind = payload.uploadKind;

                if (uploadKind === 'study-pdf' && sizeBytes > MAX_PDF_BYTES) {
                    throw new Error('Study PDF exceeds the 10 MB limit.');
                }

                if (uploadKind === 'avatar' && sizeBytes > MAX_AVATAR_BYTES) {
                    throw new Error('Avatar image exceeds the 2 MB limit.');
                }

                if (uploadKind === 'avatar') {
                    await sql`
                        UPDATE students
                        SET avatar_url = ${blob.url}, updated_at = NOW()
                        WHERE id = ${payload.studentId}
                    `;
                }

                await sql`
                    INSERT INTO student_uploads (
                        student_id,
                        upload_kind,
                        title,
                        description,
                        blob_url,
                        download_url,
                        pathname,
                        content_type,
                        size_bytes
                    )
                    VALUES (
                        ${payload.studentId},
                        ${uploadKind},
                        ${payload.title || payload.originalName || 'Student Upload'},
                        ${payload.description || ''},
                        ${blob.url},
                        ${blob.downloadUrl || blob.url},
                        ${blob.pathname || sanitizeSlug(payload.originalName)},
                        ${blob.contentType || (uploadKind === 'avatar' ? 'image/*' : 'application/pdf')},
                        ${sizeBytes}
                    )
                    ON CONFLICT (blob_url)
                    DO NOTHING
                `;
            }
        });

        sendJson(res, 200, jsonResponse);
    } catch (error) {
        console.error('Blob upload error', error);
        sendJson(res, 400, { error: error.message || 'Unable to prepare upload.' });
    }
};
