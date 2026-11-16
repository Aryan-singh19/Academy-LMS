/**
 * Academy LMS desktop shell.
 * Loads the live site (sign-in, cloud sync, chat). If the network is down it falls back
 * to the bundled offline copy in ./site so notes, quizzes and PDFs still work.
 */
const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

const APP_URL = process.env.ACADEMY_URL || 'https://academy-lms-sepia.vercel.app/';
const OFFLINE_INDEX = path.join(__dirname, 'site', 'index.html');
const ICON = path.join(__dirname, 'build', 'icon.png');
const SPLASH_MIN_MS = 2200;
const SPLASH_MAX_MS = 8000;

function createSplash() {
    const splash = new BrowserWindow({
        width: 460,
        height: 400,
        frame: false,
        transparent: true,
        resizable: false,
        movable: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        show: false,
        center: true,
        icon: ICON,
        webPreferences: { contextIsolation: true, sandbox: true }
    });
    splash.loadFile(path.join(__dirname, 'splash.html'));
    splash.once('ready-to-show', () => splash.show());
    return splash;
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 960,
        minHeight: 640,
        title: 'Academy LMS',
        icon: ICON,
        show: false,
        backgroundColor: '#eef4ff',
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            sandbox: true
        }
    });

    let triedOffline = false;
    win.webContents.on('did-fail-load', (_event, errorCode, _desc, _url, isMainFrame) => {
        if (!isMainFrame || triedOffline || errorCode === -3) return;
        triedOffline = true;
        win.loadFile(OFFLINE_INDEX, { query: { view: 'study' } });
    });

    // open external links (YouTube, RGPV portal) in the default browser
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (/^https?:/i.test(url)) shell.openExternal(url);
        return { action: 'deny' };
    });

    // keep the animated splash up until the desk has loaded (at least SPLASH_MIN_MS, at most SPLASH_MAX_MS)
    const splash = createSplash();
    const shownAt = Date.now();
    let revealed = false;
    const reveal = () => {
        if (revealed) return;
        revealed = true;
        const wait = Math.max(0, SPLASH_MIN_MS - (Date.now() - shownAt));
        setTimeout(() => {
            win.show();
            win.focus();
            if (!splash.isDestroyed()) splash.destroy();
        }, wait);
    };
    win.webContents.on('did-finish-load', reveal);
    setTimeout(reveal, SPLASH_MAX_MS);

    win.loadURL(APP_URL);
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
