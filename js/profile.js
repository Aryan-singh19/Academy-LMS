let remoteProfile = null;
let socialDirectory = {
    directory: [],
    connections: [],
    incomingRequests: [],
    outgoingRequests: [],
    counts: { connections: 0, incoming: 0, outgoing: 0 }
};
let socialFilter = 'all'; // 'all' | 'connected' | 'requests'
let socialActionPending = false;
let socialToastTimeout = null;
let activePeerId = '';
let activeMessages = [];
let currentStudentId = '';

function showSocialToast(message, type = 'info') {
    const existing = document.getElementById('socialToast');
    if (existing) existing.remove();
    if (socialToastTimeout) clearTimeout(socialToastTimeout);

    const toast = document.createElement('div');
    toast.id = 'socialToast';
    const bgClass = type === 'success' ? 'bg-emerald-950/95 border-emerald-500/60 text-emerald-100 shadow-emerald-950/50' :
                   type === 'error' ? 'bg-rose-950/95 border-rose-500/60 text-rose-100 shadow-rose-950/50' :
                   'bg-slate-900/95 border-indigo-500/60 text-indigo-100 shadow-indigo-950/50';

    toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md text-xs font-medium transition-all duration-300 ${bgClass}`;
    toast.innerHTML = `
        <span class="text-sm shrink-0">${type === 'success' ? '✓' : type === 'error' ? '⚠️' : 'ℹ️'}</span>
        <span class="flex-1">${window.ACADEMY.escapeForAttribute(message)}</span>
        <button type="button" onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white shrink-0 ml-1 text-sm font-bold">&times;</button>
    `;
    document.body.appendChild(toast);
    socialToastTimeout = setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 4500);
}

function setSocialFilter(filter) {
    socialFilter = filter;
    renderStudents();
}
const MAX_PDF_BYTES = 10 * 1024 * 1024;
const MAX_PPT_BYTES = 25 * 1024 * 1024;
const MAX_AVATAR_BYTES = 2 * 1024 * 1024;
let profileAutoSaveTimer = null;
const AUTO_CHECK_PREFIX = '[AUTO_CHECK] ';

function formatDate(value) {
    if (!value) return 'Not yet';
    return new Date(value).toLocaleString([], {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

function formatBytes(bytes) {
    const parsed = Number(bytes);
    if (!Number.isFinite(parsed) || parsed <= 0) return '0 KB';
    const units = ['B', 'KB', 'MB', 'GB'];
    let value = parsed;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
        value /= 1024;
        index += 1;
    }
    return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

function splitDescriptionAndAutoCheck(rawDescription) {
    const value = String(rawDescription || '');
    const markerIndex = value.lastIndexOf(AUTO_CHECK_PREFIX);
    if (markerIndex === -1) return { description: value, autoCheck: null };
    const description = value.slice(0, markerIndex).trim();
    const rawMeta = value.slice(markerIndex + AUTO_CHECK_PREFIX.length).trim();
    try {
        return { description, autoCheck: JSON.parse(rawMeta) };
    } catch (_error) {
        return { description: value, autoCheck: null };
    }
}

function getStudentLabel() {
    return window.ACADEMY.getStudentName() || 'Student';
}

function getRemoteStudent() {
    return remoteProfile && remoteProfile.student ? remoteProfile.student : {};
}

function getProfileValue(key) {
    const student = getRemoteStudent();
    return student[key] || '';
}

function renderProfilePage() {
    const isAuthed = window.ACADEMY.isAuthenticated();
    const stats = window.ACADEMY.calculateStats();
    const studentName = getStudentLabel();
    const recentTopics = window.ACADEMY.getRecentTopics();
    const bookmarks = window.ACADEMY.getBookmarkedTopics();
    const sessions = window.ACADEMY.getPracticeSessions();
    const syncMeta = window.ACADEMY.getRemoteSyncStamp();
    const remoteStudent = getRemoteStudent();
    const uploads = remoteProfile && Array.isArray(remoteProfile.uploads) ? remoteProfile.uploads : [];

    document.getElementById('profileHero').innerHTML = `
        <div class="space-y-2">
            <div class="flex items-center gap-2">
                <span class="revision-label">${isAuthed ? 'Verified Student Profile' : 'Guest Student Cockpit'}</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${isAuthed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'}">
                    ${isAuthed ? 'ONLINE • CLOUD SYNCED' : 'LOCAL GUEST MODE'}
                </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">${studentName}'s learning cockpit</h2>
            <p class="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                ${isAuthed
                    ? 'Track completed topics, manage your verified student identity, upload solved material to your study vault, and direct-message fellow students.'
                    : 'Your quiz accuracy, completed topics, bookmarks, and revision progress are active and saved in your local browser session. Sign in with Google to sync across devices, message classmates, and upload to your study vault.'}
            </p>
        </div>
        <div class="profile-hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 sm:mt-0">
            <input id="profileNameInput" class="search-input profile-name-input text-xs sm:text-sm" value="${window.ACADEMY.escapeForAttribute(studentName)}" placeholder="Display name">
            ${!isAuthed ? `
                <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Sign In to Academy LMS', reason: 'Sign in with Google to back up your progress across devices, chat with students, and access all study material.' })" class="primary-cta text-xs !py-2 !px-4 whitespace-nowrap shadow-lg shadow-blue-500/20 flex items-center justify-center gap-1.5">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
                    <span>Sign In with Google</span>
                </button>
            ` : ''}
        </div>
    `;

    document.getElementById('profileStats').innerHTML = `
        <article class="metric-card"><p class="metric-label">Completion</p><div class="metric-value">${stats.completionRate}%</div><p class="metric-subtext">${stats.completedTopics}/${stats.totalTopics} topics covered</p></article>
        <article class="metric-card"><p class="metric-label">Accuracy</p><div class="metric-value">${stats.quizAccuracy}%</div><p class="metric-subtext">${stats.correctAnswers}/${stats.totalAttempts} quiz answers correct</p></article>
        <article class="metric-card"><p class="metric-label">Bookmarks</p><div class="metric-value">${bookmarks.length}</div><p class="metric-subtext">Saved weak or important topics</p></article>
        <article class="metric-card"><p class="metric-label">Study vault</p><div class="metric-value">${uploads.filter((item) => item.upload_kind === 'study-pdf').length}</div><p class="metric-subtext">${isAuthed ? 'Uploaded solved PDFs' : 'Cloud uploads (Sign In)'}</p></article>
    `;

    document.getElementById('profileIdentity').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Student identity</h3>
                <span class="text-xs ${isAuthed ? 'text-emerald-400' : 'text-amber-400'}">${isAuthed ? 'Verified Account' : 'Local Session'}</span>
            </div>
            <div class="grid md:grid-cols-[160px_minmax(0,1fr)] gap-5">
                <div class="space-y-4">
                    <div class="avatar-shell">
                        ${remoteStudent.avatar_url ? `<img src="${remoteStudent.avatar_url}" alt="${studentName}" class="avatar-image">` : `<span>${studentName.slice(0, 1).toUpperCase()}</span>`}
                    </div>
                    ${isAuthed ? `
                        <input id="avatarUploadInput" type="file" accept="image/png,image/jpeg,image/webp" class="search-input text-xs">
                        <button id="uploadAvatarBtn" class="secondary-cta w-full justify-center text-xs">Upload avatar</button>
                    ` : `
                        <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Sign In to Upload Avatar', reason: 'Sign in with Google to set a custom profile photo and sync it across devices.' })" class="secondary-cta w-full justify-center text-xs text-slate-300 hover:text-white border-slate-700">
                            🔒 Sign In to Upload
                        </button>
                    `}
                </div>
                <div class="space-y-4">
                    <input id="profileHeadlineInput" class="search-input text-xs sm:text-sm" placeholder="Headline, for example: CN revision sprinter and ML model tinkerer" value="${window.ACADEMY.escapeForAttribute(remoteStudent.headline || '')}">
                    <textarea id="profileBioInput" class="note-input !min-h-[9rem] text-xs sm:text-sm" placeholder="Short intro, strengths, or what you are currently revising...">${window.ACADEMY.escapeHtml(remoteStudent.bio || '')}</textarea>
                    <div class="grid md:grid-cols-2 gap-4">
                        <input id="profileEmailInput" class="search-input text-xs sm:text-sm" placeholder="Email (optional)" value="${window.ACADEMY.escapeForAttribute(remoteStudent.email || '')}">
                        <input id="profileGithubInput" class="search-input text-xs sm:text-sm" placeholder="GitHub URL" value="${window.ACADEMY.escapeForAttribute(remoteStudent.github_url || '')}">
                        <input id="profileLinkedinInput" class="search-input text-xs sm:text-sm" placeholder="LinkedIn URL" value="${window.ACADEMY.escapeForAttribute(remoteStudent.linkedin_url || '')}">
                        <input id="profileWebsiteInput" class="search-input text-xs sm:text-sm" placeholder="Website / portfolio URL" value="${window.ACADEMY.escapeForAttribute(remoteStudent.website_url || '')}">
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <span class="metric-subtext">Changes are saved to your session automatically.</span>
                    </div>
                </div>
            </div>
        </section>
    `;

    document.getElementById('profileCloud').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Study profile overview</h3>
                <span class="text-xs font-mono">${isAuthed ? 'Connected' : 'Local Storage'}</span>
            </div>
            <div class="space-y-4">
                <div class="status-chip status-${isAuthed ? (syncMeta.lastStatus || 'synced') : 'local-only'}">
                    ${isAuthed ? 'Cloud Synced via Google Account' : 'Local Browser Storage'}
                </div>
                <div class="summary-list text-xs space-y-1.5 text-slate-300">
                    <p><strong class="text-white">Active progress:</strong> ${stats.completedTopics}/${stats.totalTopics} topics, ${stats.totalAttempts} quiz attempts</p>
                    <p><strong class="text-white">Bookmarks:</strong> ${bookmarks.length} saved revision topics</p>
                    <p><strong class="text-white">Practice sessions:</strong> ${sessions.length ? `${sessions.length} sessions recorded` : 'Start solving tests to record metrics'}</p>
                    <p><strong class="text-white">Last status:</strong> ${isAuthed ? (syncMeta.lastMessage || 'Synced') : 'Stored locally in this browser'}</p>
                </div>
                ${!isAuthed ? `
                    <div class="p-3.5 bg-blue-500/10 border border-blue-500/30 rounded-xl space-y-2">
                        <h4 class="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <span>Back up your progress permanently</span>
                        </h4>
                        <p class="text-[11px] text-slate-300 leading-relaxed">Sign in with Google to enable automatic cloud backup so you never lose your bookmarks and scores when switching devices or clearing cookies.</p>
                        <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Enable Cloud Sync', reason: 'Sign in with Google to back up your progress and sync notes across devices.' })" class="primary-cta text-xs !py-1.5 !px-3 mt-1">
                            Sign In to Enable Cloud Sync
                        </button>
                    </div>
                ` : (remoteProfile ? `
                    <div class="study-rail-block !p-4">
                        <p class="metric-label">Cloud Snapshot</p>
                        <p class="text-sm text-slate-400 mt-2">${remoteProfile.summary.completed_topics || 0} completed topics • ${remoteProfile.summary.attempts_count || 0} quiz attempts • ${remoteProfile.summary.connections_count || 0} study connections • ${remoteProfile.summary.direct_messages_count || 0} messages received</p>
                    </div>
                ` : '')}
            </div>
        </section>
    `;

    document.getElementById('profileBreakdown').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Course coverage</h3>
                <span>Per-subject progress</span>
            </div>
            <div class="space-y-4">
                ${window.coursesData.map((course) => {
                    const courseStats = stats.courseStats[course.id] || { completed: 0, total: 0, completionRate: 0 };
                    return `
                        <div class="progress-row">
                            <div class="flex items-center justify-between gap-4">
                                <strong class="text-white">${course.code}</strong>
                                <span class="metric-subtext">${courseStats.completed}/${courseStats.total} topics</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-bar-fill" style="width:${courseStats.completionRate}%"></div>
                            </div>
                            <p class="text-sm text-slate-400 mt-2">${course.title}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </section>
    `;

    document.getElementById('profileAssets').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Study vault</h3>
                <span>${isAuthed ? 'PDF/PPT upload for solved material' : 'Cloud storage for solved material'}</span>
            </div>
            <div class="space-y-4">
                ${isAuthed ? `
                    <div class="grid md:grid-cols-[1fr_1fr] gap-4">
                        <input id="pdfTitleInput" class="search-input" placeholder="Title, for example: CN unit 3 solved answers">
                        <input id="pdfDescriptionInput" class="search-input" placeholder="Short note or description">
                    </div>
                    <input id="pdfUploadInput" type="file" accept="application/pdf,.pdf,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx" class="search-input">
                    <div class="flex flex-wrap gap-3 items-center">
                        <button id="uploadPdfBtn" class="primary-cta">Upload solved file</button>
                        <span class="metric-subtext">PDF: 10 MB, PPT/PPTX: 25 MB</span>
                    </div>
                ` : `
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 text-center space-y-2.5">
                        <div class="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                            <span>🔒</span>
                            <span>Sign In to Upload Study Materials</span>
                        </div>
                        <p class="text-xs text-slate-300 max-w-md mx-auto">
                            Guest accounts cannot upload files to the study vault. Sign in with Google to upload solved assignment PDFs, PPT presentations, and revision notes to your private cloud vault.
                        </p>
                        <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Sign In to Upload Study Materials', reason: 'Sign in with Google to upload solved assignment PDFs, presentations, and study cheat-sheets to your study vault.' })" class="primary-cta text-xs !py-2 !px-4">
                            Sign In with Google
                        </button>
                    </div>
                `}
                <div class="space-y-3">
                    ${uploads.length ? uploads.map((upload) => {
                        const parsedMeta = splitDescriptionAndAutoCheck(upload.description);
                        const autoCheck = parsedMeta.autoCheck;
                        const autoCheckLabel = autoCheck && autoCheck.status
                            ? (autoCheck.status === 'likely-correct'
                                ? `Keyword check: likely correct (${autoCheck.score || 0}%)`
                                : autoCheck.status === 'needs-review'
                                    ? `Keyword check: needs review (${autoCheck.score || 0}%)`
                                    : autoCheck.status === 'error'
                                        ? 'Keyword check: unavailable'
                                        : 'Keyword check: skipped')
                            : '';
                        return `
                        <article class="social-card">
                            <div class="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <strong class="text-white">${upload.title}</strong>
                                    <p class="text-sm text-slate-400 mt-2">${parsedMeta.description || (upload.upload_kind === 'avatar' ? 'Profile image' : 'Solved study material')}</p>
                                    ${autoCheckLabel ? `<p class="text-xs text-cyan-300 mt-2">${autoCheckLabel}</p>` : ''}
                                    <p class="text-xs text-slate-500 mt-2">${formatBytes(upload.size_bytes)} • ${formatDate(upload.uploaded_at)}</p>
                                </div>
                                <a href="${upload.download_url || upload.blob_url}" target="_blank" rel="noreferrer" class="secondary-cta text-sm !py-2 !px-4">Open</a>
                            </div>
                        </article>
                    `;
                    }).join('') : '<p class="text-slate-400">No uploads yet. Add solved PDFs, answer sheets, or compact revision notes here.</p>'}
                </div>
            </div>
        </section>
    `;

    document.getElementById('profileRecent').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Recent topics</h3>
                <span>Continue faster</span>
            </div>
            <div class="space-y-3">
                ${recentTopics.length ? recentTopics.slice(0, 8).map((topic) => `
                    <a href="../index.html" class="continue-card block">
                        <p class="metric-label">${topic.courseCode} â€¢ Unit ${topic.unitNumber}</p>
                        <h4 class="text-lg font-bold text-white mt-2">${topic.title}</h4>
                    </a>
                `).join('') : '<p class="text-slate-400">Open a few topics from the curriculum and they will start appearing here.</p>'}
            </div>
        </section>
    `;

    document.getElementById('profileHistory').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Practice history</h3>
                <span>Latest scores</span>
            </div>
            <div class="space-y-3">
                ${sessions.length ? sessions.slice(0, 8).map((session) => `
                    <div class="study-rail-block !p-4">
                        <strong class="text-white">${session.courseLabel}</strong>
                        <p class="text-sm text-slate-400 mt-2">${session.correct}/${session.total} correct â€¢ ${session.accuracy}% â€¢ ${session.mode}</p>
                        <p class="text-xs text-slate-500 mt-2">${formatDate(session.finishedAt)}</p>
                    </div>
                `).join('') : '<p class="text-slate-400">No mock history yet. Complete a drill or timed mock from the tests page.</p>'}
            </div>
        </section>
    `;

    renderStudentDirectory();
    renderInbox();
    bindProfileActions();
}

function renderStudentDirectory() {
    const isAuthed = window.ACADEMY.isAuthenticated();
    if (!isAuthed) {
        document.getElementById('profileStudents').innerHTML = `
            <section class="panel-card p-6 text-center space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto text-xl font-bold shadow-inner">
                    👥
                </div>
                <div>
                    <h3 class="text-base font-bold text-white">Student Network</h3>
                    <p class="text-xs text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
                        Connect with classmates across Semesters 5, 6, and 7 to form study groups, share notes, and prepare for exams together.
                    </p>
                </div>
                <div class="pt-2">
                    <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Sign In to View Student Network', reason: 'Sign in with Google to explore the verified student directory and connect with study partners.' })" class="primary-cta text-xs !py-2 !px-5">
                        Sign In to View Student Network
                    </button>
                </div>
            </section>
        `;
        return;
    }

    const incoming = socialDirectory.incomingRequests || [];
    const outgoing = socialDirectory.outgoingRequests || [];
    const connections = socialDirectory.connections || [];
    const directory = socialDirectory.directory || [];

    // Filter students to display
    let displayedStudents = [];
    if (socialFilter === 'connected') {
        displayedStudents = directory.filter((s) => s.connection_status === 'connected' || s.connected);
    } else if (socialFilter === 'requests') {
        displayedStudents = directory.filter((s) => s.connection_status === 'pending_sent' || s.connection_status === 'pending_received');
    } else {
        displayedStudents = directory;
    }

    document.getElementById('profileStudents').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head mb-4">
                <div>
                    <h3>Student network</h3>
                    <p class="text-xs text-slate-400 mt-0.5">Mutual study connections • Connect like Discord to link up</p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                        ${connections.length} Mutual Partners
                    </span>
                    ${incoming.length > 0 ? `
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 animate-pulse">
                            ${incoming.length} Request${incoming.length > 1 ? 's' : ''}
                        </span>
                    ` : ''}
                </div>
            </div>

            <!-- Incoming Requests Banner (Discord style) -->
            ${incoming.length > 0 ? `
                <div class="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 space-y-3 mb-5">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="flex h-2.5 w-2.5 relative">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                            </span>
                            <strong class="text-white text-xs uppercase tracking-wider font-semibold">Incoming Connection Requests (${incoming.length})</strong>
                        </div>
                        <span class="text-[11px] text-indigo-300">Accept to link as mutual study partner</span>
                    </div>
                    <div class="space-y-2">
                        ${incoming.map((reqStudent) => `
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/80 border border-indigo-500/20">
                                <div class="flex items-center gap-3">
                                    <div class="avatar-shell avatar-shell-small shrink-0">
                                        ${reqStudent.avatar_url ? `<img src="${reqStudent.avatar_url}" alt="${reqStudent.display_name}" class="avatar-image">` : `<span>${reqStudent.display_name.slice(0, 1).toUpperCase()}</span>`}
                                    </div>
                                    <div class="min-w-0">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <strong class="text-white text-sm">${reqStudent.display_name}</strong>
                                            <span class="text-[11px] text-slate-400 font-normal">sent you a request</span>
                                        </div>
                                        <p class="text-xs text-slate-400 mt-0.5 truncate">${reqStudent.headline || 'Computer Science Student'}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button type="button" onclick="window.handleConnectionAction('${reqStudent.id}', 'accept', '${window.ACADEMY.escapeForAttribute(reqStudent.display_name)}')" class="primary-cta text-xs !py-1.5 !px-3.5 !bg-emerald-600 hover:!bg-emerald-500">
                                        Accept Connect
                                    </button>
                                    <button type="button" onclick="window.handleConnectionAction('${reqStudent.id}', 'reject', '${window.ACADEMY.escapeForAttribute(reqStudent.display_name)}')" class="secondary-cta text-xs !py-1.5 !px-3 text-slate-400 hover:text-white">
                                        Decline
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Filter Navigation Tabs -->
            <div class="flex items-center gap-1.5 border-b border-slate-700/60 pb-3 mb-4 overflow-x-auto">
                <button type="button" onclick="window.setSocialFilter('all')" class="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${socialFilter === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
                    All Students (${directory.length})
                </button>
                <button type="button" onclick="window.setSocialFilter('connected')" class="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${socialFilter === 'connected' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
                    Mutual Partners (${connections.length})
                </button>
                <button type="button" onclick="window.setSocialFilter('requests')" class="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors relative ${socialFilter === 'requests' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}">
                    Requests (${incoming.length + outgoing.length})
                    ${incoming.length > 0 ? `<span class="inline-block w-2 h-2 rounded-full bg-amber-400 ml-1"></span>` : ''}
                </button>
            </div>

            <!-- Student Directory List -->
            <div class="space-y-3">
                ${displayedStudents.length ? displayedStudents.map((student) => {
                    const status = student.connection_status || (student.connected ? 'connected' : 'none');
                    return `
                        <div class="social-card p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 transition-all hover:border-slate-600">
                            <div class="flex items-start justify-between gap-4 flex-wrap">
                                <div class="flex items-start gap-3.5 flex-1 min-w-[240px]">
                                    <div class="avatar-shell avatar-shell-small shrink-0">
                                        ${student.avatar_url ? `<img src="${student.avatar_url}" alt="${student.display_name}" class="avatar-image">` : `<span>${student.display_name.slice(0, 1).toUpperCase()}</span>`}
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <strong class="text-white text-sm">${student.display_name}</strong>
                                            ${status === 'connected' ? `
                                                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                                                    ✓ Mutual Partner
                                                </span>
                                            ` : status === 'pending_sent' ? `
                                                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                                    ⏳ Request Sent
                                                </span>
                                            ` : status === 'pending_received' ? `
                                                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                                                    👋 Sent You a Request
                                                </span>
                                            ` : ''}
                                        </div>
                                        <p class="text-xs text-slate-300 mt-1">${student.headline || 'Studying, revising, and preparing for exams.'}</p>
                                        <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">${student.bio || 'Available for revision chats, shared notes, and mock tests.'}</p>
                                        <p class="text-[11px] text-slate-500 mt-2">Active ${formatDate(student.last_seen_at)}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-slate-800/80">
                                ${status === 'connected' ? `
                                    <button type="button" onclick="openMessageThread('${student.id}')" class="primary-cta text-xs !py-1.5 !px-3.5">
                                        Open DM
                                    </button>
                                    <button type="button" onclick="window.handleConnectionAction('${student.id}', 'disconnect', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="secondary-cta text-xs !py-1.5 !px-3 text-slate-400 hover:text-rose-300 hover:border-rose-500/40">
                                        Disconnect
                                    </button>
                                ` : status === 'pending_sent' ? `
                                    <button type="button" onclick="window.handleConnectionAction('${student.id}', 'cancel', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="secondary-cta text-xs !py-1.5 !px-3 text-amber-300 hover:border-amber-500/50">
                                        Cancel Request
                                    </button>
                                    <button type="button" onclick="openMessageThread('${student.id}')" class="secondary-cta text-xs !py-1.5 !px-3">
                                        Message
                                    </button>
                                ` : status === 'pending_received' ? `
                                    <button type="button" onclick="window.handleConnectionAction('${student.id}', 'accept', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="primary-cta text-xs !py-1.5 !px-3.5 !bg-emerald-600 hover:!bg-emerald-500">
                                        Accept Connect
                                    </button>
                                    <button type="button" onclick="window.handleConnectionAction('${student.id}', 'reject', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="secondary-cta text-xs !py-1.5 !px-3 text-slate-400 hover:text-white">
                                        Decline
                                    </button>
                                ` : `
                                    <button type="button" onclick="window.handleConnectionAction('${student.id}', 'connect', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="primary-cta text-xs !py-1.5 !px-3.5">
                                        + Connect
                                    </button>
                                    <button type="button" onclick="openMessageThread('${student.id}')" class="secondary-cta text-xs !py-1.5 !px-3">
                                        Message
                                    </button>
                                `}
                                <button type="button" onclick="reportStudent('${student.id}', '${window.ACADEMY.escapeForAttribute(student.display_name)}')" class="secondary-cta text-xs !py-1.5 !px-3 ml-auto text-slate-400 hover:text-slate-200">
                                    Report
                                </button>
                            </div>
                        </div>
                    `;
                }).join('') : `
                    <div class="text-center py-8 text-slate-400 text-xs">
                        ${socialFilter === 'connected' ? 'No mutual study partners yet. Send connection requests to classmates above!' :
                          socialFilter === 'requests' ? 'No pending connection requests.' :
                          'No students in directory yet.'}
                    </div>
                `}
            </div>
        </section>
    `;
}

function renderInbox() {
    const isAuthed = window.ACADEMY.isAuthenticated();
    if (!isAuthed) {
        document.getElementById('profileInbox').innerHTML = `
            <section class="panel-card p-6 text-center space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto text-xl font-bold shadow-inner">
                    💬
                </div>
                <div>
                    <h3 class="text-base font-bold text-white">Direct Messaging</h3>
                    <p class="text-xs text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
                        Direct messaging requires a signed-in student account to protect student safety and maintain clean academic discourse.
                    </p>
                </div>
                <div class="pt-2">
                    <button type="button" onclick="window.ACADEMY.showSignInPrompt({ title: 'Sign In to Message Students', reason: 'Sign in with Google to send direct messages to classmates and collaborate.' })" class="secondary-cta text-xs !py-2 !px-5 hover:border-indigo-500/40">
                        Sign In to Open Chat
                    </button>
                </div>
            </section>
        `;
        return;
    }

    const peer = (socialDirectory.directory || []).find((student) => student.id === activePeerId)
        || (socialDirectory.connections || []).find((student) => student.id === activePeerId)
        || (socialDirectory.incomingRequests || []).find((student) => student.id === activePeerId)
        || (socialDirectory.outgoingRequests || []).find((student) => student.id === activePeerId);

    const isMutual = peer && (peer.connection_status === 'connected' || (socialDirectory.connections || []).some((c) => c.id === peer.id));

    document.getElementById('profileInbox').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head mb-4">
                <div>
                    <h3>Direct messages</h3>
                    <p class="text-xs text-slate-400 mt-0.5">${peer ? `${peer.display_name} ${isMutual ? '• Mutual Study Partner' : '• Classmate'}` : 'Pick a student from the directory'}</p>
                </div>
                ${isMutual ? `
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        Mutual Study Partner
                    </span>
                ` : ''}
            </div>
            <div class="chat-thread chat-thread-whatsapp mb-4">
                ${activeMessages.length ? activeMessages.map((message) => `
                    <article class="chat-message chat-bubble ${message.sender_id === currentStudentId ? 'chat-bubble-own' : 'chat-bubble-peer'}">
                        <strong class="text-white">${message.sender_id === currentStudentId ? 'You' : message.sender_name}</strong>
                        <p class="text-sm text-slate-300 mt-1.5 leading-relaxed">${message.message_text}</p>
                        <p class="text-[11px] text-slate-400 mt-1.5">${formatDate(message.created_at)}</p>
                    </article>
                `).join('') : '<p class="text-slate-400 text-xs py-4">Choose a student from the directory to open a simple DM thread.</p>'}
            </div>
            <div class="space-y-3">
                <textarea id="dmInput" class="note-input !min-h-[5.5rem]" placeholder="Write a revision doubt, study invite, or message before the semester attacks again."></textarea>
                <div class="flex items-center justify-between">
                    <span class="text-[11px] text-slate-500">${peer ? `Sending to ${peer.display_name}` : 'Select a peer above'}</span>
                    <button id="sendDmBtn" class="primary-cta text-xs !py-2 !px-4 ${peer ? '' : 'opacity-50 pointer-events-none'}">Send Message</button>
                </div>
            </div>
        </section>
    `;
}

function bindProfileActions() {
    bindClick('sendDmBtn', sendDirectMessage);
    bindClick('uploadAvatarBtn', uploadAvatar);
    bindClick('uploadPdfBtn', uploadStudyPdf);
    bindProfileAutosave();
}

function bindClick(id, handler) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', handler);
    }
}

function collectProfilePayload() {
    return {
        headline: document.getElementById('profileHeadlineInput').value.trim(),
        bio: document.getElementById('profileBioInput').value.trim(),
        email: document.getElementById('profileEmailInput').value.trim(),
        githubUrl: document.getElementById('profileGithubInput').value.trim(),
        linkedinUrl: document.getElementById('profileLinkedinInput').value.trim(),
        websiteUrl: document.getElementById('profileWebsiteInput').value.trim()
    };
}

async function saveProfileDetails() {
    if (window.location.protocol === 'file:') return;
    const displayName = document.getElementById('profileNameInput').value.trim() || getStudentLabel();
    window.ACADEMY.setStudentName(displayName);

    await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            deviceId: window.ACADEMY.state.deviceId,
            displayName,
            snapshot: window.ACADEMY.exportStudentSnapshot(),
            profile: collectProfilePayload()
        })
    });

    await hydrateRemoteProfile();
    renderProfilePage();
}

function queueProfileAutosave() {
    if (window.location.protocol === 'file:') return;
    clearTimeout(profileAutoSaveTimer);
    profileAutoSaveTimer = window.setTimeout(async () => {
        try {
            await saveProfileDetails();
            await hydrateRemoteProfile();
        } catch (error) {
            console.error('Unable to autosave profile details', error);
        }
    }, 1600);
}

function bindProfileAutosave() {
    [
        'profileNameInput',
        'profileHeadlineInput',
        'profileBioInput',
        'profileEmailInput',
        'profileGithubInput',
        'profileLinkedinInput',
        'profileWebsiteInput'
    ].forEach((id) => {
        const field = document.getElementById(id);
        if (!field) return;
        field.addEventListener('input', queueProfileAutosave);
        field.addEventListener('blur', queueProfileAutosave);
    });
}

async function hydrateRemoteProfile() {
    if (window.location.protocol === 'file:') return;

    try {
        const response = await fetch(`/api/profile?deviceId=${encodeURIComponent(window.ACADEMY.state.deviceId)}`);
        if (!response.ok) return;
        remoteProfile = await response.json();
        if (remoteProfile && remoteProfile.student && remoteProfile.student.avatar_url) {
            window.ACADEMY.setProfileAvatar(remoteProfile.student.avatar_url);
        }
    } catch (error) {
        console.error('Unable to load remote profile', error);
    }
}

async function hydrateStudentDirectory() {
    if (window.location.protocol === 'file:') return;

    try {
        const response = await fetch(`/api/social?deviceId=${encodeURIComponent(window.ACADEMY.state.deviceId)}`);
        if (!response.ok) return;
        socialDirectory = await response.json();
    } catch (error) {
        console.error('Unable to load student directory', error);
    }
}

async function handleConnectionAction(targetStudentId, action = 'connect', studentName = 'classmate') {
    if (socialActionPending) return;
    if (action === 'disconnect') {
        const confirmed = window.confirm(`Disconnect from ${studentName}? You will no longer be mutual study partners.`);
        if (!confirmed) return;
    }

    socialActionPending = true;
    try {
        const response = await fetch('/api/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                targetStudentId,
                action
            })
        });

        const data = await response.json();
        if (!response.ok) {
            showSocialToast(data.error || 'Unable to update connection.', 'error');
            return;
        }

        showSocialToast(data.message || 'Connection updated.', 'success');
        await hydrateStudentDirectory();
        await hydrateRemoteProfile();
        renderStudents();
        renderInbox();
    } catch (error) {
        console.error('Connection action error:', error);
        showSocialToast('Connection request failed. Please check network.', 'error');
    } finally {
        socialActionPending = false;
    }
}

async function connectStudent(targetStudentId) {
    return handleConnectionAction(targetStudentId, 'connect');
}

async function openMessageThread(peerId) {
    activePeerId = peerId;
    try {
        const response = await fetch(`/api/messages?deviceId=${encodeURIComponent(window.ACADEMY.state.deviceId)}&peerId=${encodeURIComponent(peerId)}`);
        if (!response.ok) return;
        const payload = await response.json();
        activeMessages = payload.messages || [];
        currentStudentId = payload.currentStudentId || currentStudentId;
        renderProfilePage();
    } catch (error) {
        console.error('Unable to load messages', error);
    }
}

async function reportStudent(targetStudentId, studentName) {
    const reportReason = window.prompt(`Report ${studentName} for:`, 'Spam, abuse, fake account, or inappropriate behavior');
    if (!reportReason) return;

    try {
        await fetch('/api/report-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                targetStudentId,
                reportReason
            })
        });
        window.alert('Report sent to admin review.');
    } catch (error) {
        console.error('Unable to report student', error);
        window.alert('Unable to report this user right now.');
    }
}

async function sendDirectMessage() {
    const field = document.getElementById('dmInput');
    const messageText = field ? field.value.trim() : '';
    if (!activePeerId || !messageText) return;

    try {
        await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                recipientStudentId: activePeerId,
                messageText
            })
        });
        field.value = '';
        await openMessageThread(activePeerId);
    } catch (error) {
        console.error('Unable to send direct message', error);
    }
}

async function runBlobUpload(file, payload) {
    const appConfig = window.ACADEMY.getAppConfig();
    if (!appConfig.blobEnabled) {
        throw new Error('Blob uploads are not active on this deployment yet. Delete the old wrong token, keep only BLOB_READ_WRITE_TOKEN in Vercel, then redeploy once.');
    }

    const { upload } = await import('https://esm.sh/@vercel/blob@2.4.0/client');
    return upload(payload.pathname, file, {
        access: 'public',
        handleUploadUrl: '/api/blob-upload',
        multipart: file.size > 5 * 1024 * 1024,
        clientPayload: JSON.stringify(payload)
    });
}

async function uploadAvatar() {
    if (!window.ACADEMY.isAuthenticated()) {
        window.ACADEMY.showSignInPrompt({
            title: 'Sign In to Upload Avatar',
            reason: 'Sign in with Google to set a custom profile avatar and sync it across devices.'
        });
        return;
    }

    const input = document.getElementById('avatarUploadInput');
    const file = input && input.files ? input.files[0] : null;
    if (!file) return;
    if (file.size > MAX_AVATAR_BYTES) {
        alert('Avatar must be 2 MB or smaller.');
        return;
    }

    try {
        await saveProfileDetails();
        await runBlobUpload(file, {
            deviceId: window.ACADEMY.state.deviceId,
            uploadKind: 'avatar',
            originalName: file.name,
            title: `${getStudentLabel()} avatar`,
            description: 'Profile image',
            pathname: `students/${window.ACADEMY.state.deviceId}/avatars/${file.name}`
        });
        input.value = '';
        await hydrateRemoteProfile();
        if (remoteProfile && remoteProfile.student && remoteProfile.student.avatar_url) {
            window.ACADEMY.setProfileAvatar(remoteProfile.student.avatar_url);
        }
        renderProfilePage();
    } catch (error) {
        console.error('Unable to upload avatar', error);
        alert(error.message || 'Unable to upload avatar right now.');
    }
}

async function uploadStudyPdf() {
    if (!window.ACADEMY.isAuthenticated()) {
        window.ACADEMY.showSignInPrompt({
            title: 'Sign In to Upload Solved Material',
            reason: 'Sign in with Google to upload solved assignment PDFs, presentations, and study cheat-sheets to your study vault.'
        });
        return;
    }

    const input = document.getElementById('pdfUploadInput');
    const file = input && input.files ? input.files[0] : null;
    if (!file) return;
    const lowerName = String(file.name || '').toLowerCase();
    const isPdf = file.type === 'application/pdf' || lowerName.endsWith('.pdf');
    const isPpt = file.type === 'application/vnd.ms-powerpoint'
        || file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        || lowerName.endsWith('.ppt')
        || lowerName.endsWith('.pptx');
    if (!isPdf && !isPpt) {
        alert('Upload only PDF, PPT, or PPTX.');
        return;
    }
    if (isPdf && file.size > MAX_PDF_BYTES) {
        alert('Solved PDF must be 10 MB or smaller.');
        return;
    }
    if (isPpt && file.size > MAX_PPT_BYTES) {
        alert('Solved PPT/PPTX must be 25 MB or smaller.');
        return;
    }

    const title = document.getElementById('pdfTitleInput').value.trim() || file.name.replace(/\.pdf$/i, '');
    const description = document.getElementById('pdfDescriptionInput').value.trim();

    try {
        await saveProfileDetails();
        await runBlobUpload(file, {
            deviceId: window.ACADEMY.state.deviceId,
            uploadKind: 'study-pdf',
            originalName: file.name,
            title,
            description,
            pathname: `students/${window.ACADEMY.state.deviceId}/study-pdfs/${file.name}`
        });
        input.value = '';
        document.getElementById('pdfTitleInput').value = '';
        document.getElementById('pdfDescriptionInput').value = '';
        await hydrateRemoteProfile();
        renderProfilePage();
    } catch (error) {
        console.error('Unable to upload study PDF', error);
        alert(error.message || 'Unable to upload solved PDF right now.');
    }
}

window.connectStudent = connectStudent;
window.handleConnectionAction = handleConnectionAction;
window.setSocialFilter = setSocialFilter;
window.showSocialToast = showSocialToast;
window.openMessageThread = openMessageThread;
window.reportStudent = reportStudent;

document.addEventListener('DOMContentLoaded', async () => {
    await window.ACADEMY.loadAppConfig();
    await window.ACADEMY.hydrateAuthSession();

    // RENDER IMMEDIATELY so the profile is ALWAYS visible for both guests and authenticated students
    renderProfilePage();

    if (window.ACADEMY.isAuthenticated()) {
        window.ACADEMY.scheduleCloudSync();
        await hydrateRemoteProfile();
        await hydrateStudentDirectory();
        currentStudentId = remoteProfile && remoteProfile.student ? remoteProfile.student.id : currentStudentId;
        renderProfilePage();
    }
});


