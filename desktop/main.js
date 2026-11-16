/**
 * Academy LMS desktop shell.
 * Loads the live site (sign-in, cloud sync, chat). If the network is down it falls back
 * to the bundled offline copy in ./site so notes, quizzes and PDFs still work.
 */
const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

const APP_URL = process.env.ACADEMY_URL || 'https://academy-lms-sepia.vercel.app/';
const OFFLINE_INDEX = path.join(__dirname, 'site', 'index.html');

function createWindow() {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 960,
        minHeight: 640,
        title: 'Academy LMS',
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
