const express = require('express');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    try {
        const content = fs.readFileSync(envPath, 'utf8');
        for (const line of content.split('\n')) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;
            const eqIdx = trimmed.indexOf('=');
            if (eqIdx !== -1) {
                const key = trimmed.slice(0, eqIdx).trim();
                const val = trimmed.slice(eqIdx + 1).trim();
                if (val && (!process.env[key] || process.env[key] === '')) {
                    process.env[key] = val;
                }
            }
        }
    } catch (e) {
        console.warn('[Env] Failed to read .env:', e.message);
    }
}
if (!process.env.GOOGLE_CLIENT_ID) {
    process.env.GOOGLE_CLIENT_ID = '659669320220-hnaqggmsjl9vobtjfhfngen7ec9462e5.apps.googleusercontent.com';
}


const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Middlewares
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// API route handlers
const apiRoutes = {
    'app-config': require('./api/app-config.js'),
    'auth-google': require('./api/auth-google.js'),
    'auth-logout': require('./api/auth-logout.js'),
    'auth-session': require('./api/auth-session.js'),
    'blob-upload': require('./api/blob-upload.js'),
    'lecture-chat': require('./api/lecture-chat.js'),
    'messages': require('./api/messages.js'),
    'profile': require('./api/profile.js'),
    'report-user': require('./api/report-user.js'),
    'social': require('./api/social.js'),
    'topic-comments': require('./api/topic-comments.js'),
    'admin': require('./api/admin.js')
};

// Dispatch /api/:route
app.all('/api/:route', async (req, res) => {
    const route = req.params.route;
    const handler = apiRoutes[route];

    if (!handler) {
        return res.status(404).json({ error: `API endpoint /api/${route} not found.` });
    }

    try {
        await handler(req, res);
    } catch (error) {
        console.error(`Unhandled error in /api/${route}:`, error);
        if (!res.headersSent) {
            res.status(error.statusCode || 500).json({ error: error.message || 'Internal server error.' });
        }
    }
});

// Static assets & frontend routing
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/html', express.static(path.join(__dirname, 'html')));
app.use(express.static(__dirname));

// Fallback for page navigation
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Academy LMS server running on http://${HOST}:${PORT}`);
});
