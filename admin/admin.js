// Academy LMS Admin Console
let adminSecret = '';
let adminEmail = '';
let selectedStudentId = '';
let activeTab = 'students';

let dashboardData = {
    adminEmail: '',
    stats: {},
    leaderboard: [],
    openReports: [],
    bannedDevices: [],
    recentUploads: [],
    globalChats: {
        lectureMessages: [],
        topicComments: []
    }
};

const ADMIN_EMAIL_KEY = 'academy_admin_email';
const ADMIN_SECRET_KEY = 'academy_admin_secret';

function esc(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatDate(value) {
    if (!value) return 'Never';
    return new Date(value).toLocaleString([], {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}

function formatBytes(bytes) {
    if (!bytes) return '0 KB';
    const units = ['B', 'KB', 'MB', 'GB'];
    let value = bytes;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
        value /= 1024;
        index += 1;
    }
    return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

async function fetchAdmin(path, options = {}) {
    const headers = {
        'Content-Type': 'application/json'
    };
    if (adminSecret) headers['x-admin-secret'] = adminSecret;
    if (adminEmail) headers['x-admin-email'] = adminEmail;

    const response = await fetch(path, {
        method: options.method || 'GET',
        headers,
        body: options.body
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(payload.error || 'Admin request failed.');
    }
    return payload;
}

// Check session or credentials
async function checkAuthAndLoad() {
    try {
        // Try session first (if user is logged in with admin Google account)
        const check = await fetch('/api/admin?checkAuth=true', {
            headers: {
                ...(adminSecret ? { 'x-admin-secret': adminSecret } : {}),
                ...(adminEmail ? { 'x-admin-email': adminEmail } : {})
            }
        });

        if (check.ok) {
            const authPayload = await check.json();
            adminEmail = authPayload.adminEmail;
            document.getElementById('activeAdminEmailDisplay').textContent = adminEmail;
            document.getElementById('adminAuthIndicator').classList.remove('hidden');
            document.getElementById('unauthorizedState').classList.add('hidden');
            document.getElementById('adminDashboard').classList.remove('hidden');
            await loadDashboard();
            return;
        }

        // If not authorized
        const err = await check.json().catch(() => ({}));
        showUnauthorized(err.error || 'You must be signed in with an authorized Academy LMS administrator email.');
    } catch (e) {
        showUnauthorized(e.message);
    }
}

function showUnauthorized(message) {
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('adminAuthIndicator').classList.add('hidden');
    document.getElementById('unauthorizedState').classList.remove('hidden');
    document.getElementById('unauthorizedMessage').textContent = message;
    document.getElementById('manualAuthDrawer').classList.remove('hidden');
}

function promptManualLogin() {
    document.getElementById('manualAuthDrawer').classList.remove('hidden');
    document.getElementById('adminEmailInput').focus();
}

async function loadDashboard() {
    try {
        const payload = await fetchAdmin('/api/admin');
        dashboardData = payload;

        // Render top stats
        const stats = payload.stats || {};
        document.getElementById('statTotalStudents').textContent = stats.total_students || (payload.leaderboard || []).length;
        document.getElementById('statOpenReports').textContent = stats.open_reports_count || (payload.openReports || []).length;
        const totalBanned = (Number(stats.banned_students || 0) + Number(stats.banned_devices_count || 0));
        document.getElementById('statBannedCount').textContent = totalBanned;
        document.getElementById('statTotalUploads').textContent = stats.total_uploads_count || (payload.recentUploads || []).length;
        document.getElementById('statLectureChats').textContent = stats.total_lecture_messages || (payload.globalChats?.lectureMessages || []).length;
        document.getElementById('statTopicComments').textContent = stats.total_topic_comments || (payload.globalChats?.topicComments || []).length;

        // Badge on reports tab
        const reportsCount = (payload.openReports || []).length;
        const badge = document.getElementById('tabReportsBadge');
        if (reportsCount > 0) {
            badge.textContent = reportsCount;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }

        // Render active tab
        renderActiveTab();

        // If no student selected yet, pick first
        if (!selectedStudentId && payload.leaderboard && payload.leaderboard.length) {
            await loadStudentDetail(payload.leaderboard[0].id);
        }
    } catch (e) {
        console.error('Failed to load admin dashboard', e);
        alert(e.message || 'Unable to load dashboard data.');
    }
}

function switchAdminTab(tabName) {
    activeTab = tabName;
    document.querySelectorAll('.admin-tab-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    document.getElementById('tabViewStudents').classList.toggle('hidden', tabName !== 'students');
    document.getElementById('tabViewReports').classList.toggle('hidden', tabName !== 'reports');
    document.getElementById('tabViewUploads').classList.toggle('hidden', tabName !== 'uploads');
    document.getElementById('tabViewChats').classList.toggle('hidden', tabName !== 'chats');
    document.getElementById('tabViewBanned').classList.toggle('hidden', tabName !== 'banned');

    renderActiveTab();
}

function renderActiveTab() {
    if (activeTab === 'students') {
        renderStudentsTable();
    } else if (activeTab === 'reports') {
        renderReportsList();
    } else if (activeTab === 'uploads') {
        renderUploadsList();
    } else if (activeTab === 'chats') {
        renderGlobalChats();
    } else if (activeTab === 'banned') {
        renderBannedTab();
    }
}

// --- Tab 1: Students & Progress ---
function renderStudentsTable() {
    const query = (document.getElementById('studentSearchInput')?.value || '').trim().toLowerCase();
    const statusFilter = document.getElementById('studentStatusFilter')?.value || 'all';

    let list = dashboardData.leaderboard || [];

    if (query) {
        list = list.filter((s) =>
            (s.display_name && s.display_name.toLowerCase().includes(query)) ||
            (s.email && s.email.toLowerCase().includes(query)) ||
            (s.device_id && s.device_id.toLowerCase().includes(query))
        );
    }

    if (statusFilter === 'active') {
        list = list.filter((s) => !s.is_banned);
    } else if (statusFilter === 'banned') {
        list = list.filter((s) => s.is_banned);
    }

    const tbody = document.getElementById('studentsTableBody');
    if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-500">No matching students found.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((s) => `
        <tr class="${selectedStudentId === s.id ? 'admin-row-active' : ''} cursor-pointer hover:bg-slate-800/40" onclick="loadStudentDetail('${s.id}')">
            <td>
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0">
                        ${s.avatar_url ? `<img src="${esc(s.avatar_url)}" class="w-full h-full rounded-full object-cover" />` : esc((s.display_name || 'S').slice(0, 1).toUpperCase())}
                    </div>
                    <div>
                        <strong class="text-white text-xs block">${esc(s.display_name || 'Unnamed')}</strong>
                        <span class="text-[11px] text-slate-400 font-mono block">${esc(s.email || (s.device_id ? `dev:${s.device_id.slice(0, 8)}` : 'Guest'))}</span>
                    </div>
                </div>
            </td>
            <td class="text-xs">${s.completed_topics || 0} / ${s.tracked_topics || 0}</td>
            <td class="text-xs font-mono ${Number(s.quiz_accuracy) >= 70 ? 'text-emerald-400' : 'text-slate-400'}">${s.quiz_accuracy || 0}%</td>
            <td class="text-xs">${s.uploads_count || 0}</td>
            <td class="text-xs">${s.comments_count || 0}</td>
            <td class="text-xs text-slate-400">${formatDate(s.last_seen_at)}</td>
            <td>
                ${s.is_banned
                    ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">Banned</span>`
                    : `<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400">Active</span>`}
            </td>
        </tr>
    `).join('');
}

async function loadStudentDetail(studentId) {
    selectedStudentId = studentId;
    renderStudentsTable();

    const panel = document.getElementById('studentDetailPanel');
    panel.innerHTML = `<div class="text-center py-12 text-slate-500">Loading student details...</div>`;

    try {
        const detail = await fetchAdmin(`/api/admin?studentId=${encodeURIComponent(studentId)}`);
        const s = detail.student;
        const uploads = detail.uploads || [];
        const comments = detail.comments || [];
        const chats = detail.lectureChats || [];
        const reports = detail.reports || [];

        panel.innerHTML = `
            <div class="space-y-4">
                <!-- Profile Header -->
                <div class="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-lg font-bold shrink-0">
                            ${s.avatar_url ? `<img src="${esc(s.avatar_url)}" class="w-full h-full rounded-full object-cover" />` : esc((s.display_name || 'S').slice(0, 1).toUpperCase())}
                        </div>
                        <div>
                            <h3 class="text-base font-bold text-white">${esc(s.display_name || 'Student')}</h3>
                            <p class="text-xs text-slate-400 font-mono">${esc(s.email || 'No email attached')}</p>
                            <p class="text-[11px] text-slate-500">Device ID: <span class="font-mono text-slate-400">${esc(s.device_id || 'None')}</span></p>
                        </div>
                    </div>
                </div>

                <!-- Moderation Actions -->
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-semibold text-slate-300">Moderation Controls</span>
                        ${s.is_banned ? `<span class="text-xs text-rose-400 font-bold">Banned: ${esc(s.banned_reason || 'Admin ban')}</span>` : `<span class="text-xs text-emerald-400">Account in good standing</span>`}
                    </div>
                    <div class="flex flex-wrap gap-2 pt-1">
                        ${s.is_banned ? `
                            <button type="button" onclick="adminUnbanStudent('${s.id}')" class="primary-cta text-xs !py-1.5 !px-3">
                                Unban Account & Device
                            </button>
                        ` : `
                            <button type="button" onclick="adminBanStudent('${s.id}', '${esc(s.display_name)}')" class="danger-cta text-xs !py-1.5 !px-3">
                                Ban Account & Device
                            </button>
                        `}
                        ${s.device_id ? `
                            <button type="button" onclick="adminBanDeviceDirect('${esc(s.device_id)}')" class="secondary-cta text-xs !py-1.5 !px-3">
                                Ban Device ID
                            </button>
                        ` : ''}
                    </div>
                </div>

                <!-- Learning Progress Summary -->
                <div class="grid grid-cols-3 gap-2 text-center p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div>
                        <span class="text-[10px] text-slate-500 uppercase block">Completed</span>
                        <strong class="text-sm text-emerald-400">${s.completed_topics || 0} topics</strong>
                    </div>
                    <div>
                        <span class="text-[10px] text-slate-500 uppercase block">Quiz Accuracy</span>
                        <strong class="text-sm text-blue-400">${s.quiz_attempts_count ? Math.round((Number(s.correct_quiz_answers || 0) * 100) / s.quiz_attempts_count) : 0}%</strong>
                    </div>
                    <div>
                        <span class="text-[10px] text-slate-500 uppercase block">Practice</span>
                        <strong class="text-sm text-purple-400">${s.practice_sessions_count || 0} runs</strong>
                    </div>
                </div>

                <!-- Reports Filed Against This Student -->
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Reports Against Student (${reports.length})</h4>
                    <div class="space-y-2 max-h-36 overflow-y-auto">
                        ${reports.length ? reports.map((r) => `
                            <div class="p-2 rounded bg-rose-950/20 border border-rose-900/30 text-xs">
                                <div class="flex justify-between items-center text-rose-300 font-semibold">
                                    <span>${esc(r.report_reason)}</span>
                                    <span class="text-[10px] text-slate-500">${formatDate(r.created_at)}</span>
                                </div>
                                <p class="text-slate-400 mt-1">${esc(r.report_details || 'No additional details')}</p>
                                <span class="text-[10px] text-slate-500 block mt-1">Reported by: ${esc(r.reporter_name)} • Status: ${esc(r.status)}</span>
                            </div>
                        `).join('') : '<p class="text-xs text-slate-500 italic">No reports filed against this learner.</p>'}
                    </div>
                </div>

                <!-- Student Uploaded Files -->
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Uploaded Resources (${uploads.length})</h4>
                    <div class="space-y-2 max-h-40 overflow-y-auto">
                        ${uploads.length ? uploads.map((u) => `
                            <div class="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 text-xs">
                                <div class="truncate mr-2">
                                    <strong class="text-white block truncate">${esc(u.title)}</strong>
                                    <span class="text-[10px] text-slate-500">${esc(u.upload_kind)} • ${formatBytes(u.size_bytes)}</span>
                                </div>
                                <div class="flex items-center gap-1 shrink-0">
                                    ${u.blob_url ? `<a href="${esc(u.blob_url)}" target="_blank" class="nav-pill text-[10px] !py-1 !px-2">View</a>` : ''}
                                    <button type="button" onclick="adminDeleteUpload('${u.id}', '${esc(u.title)}')" class="danger-cta text-[10px] !py-1 !px-2">Delete</button>
                                </div>
                            </div>
                        `).join('') : '<p class="text-xs text-slate-500 italic">No files uploaded by this student.</p>'}
                    </div>
                </div>

                <!-- Recent Public Comments -->
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Recent Topic Comments (${comments.length})</h4>
                    <div class="space-y-2 max-h-36 overflow-y-auto">
                        ${comments.length ? comments.map((c) => `
                            <div class="p-2 rounded bg-slate-900 border border-slate-800 text-xs">
                                <div class="flex justify-between items-center">
                                    <span class="font-mono text-[10px] text-blue-400">${esc(c.course_id)} / ${esc(c.topic_id)}</span>
                                    <div class="flex items-center gap-1.5">
                                        ${c.is_edited ? '<span class="text-[10px] text-slate-500 italic">(edited)</span>' : ''}
                                        <button type="button" onclick="adminDeleteChat('topic', '${c.id}')" class="text-rose-400 hover:text-rose-300 text-[10px]">Delete</button>
                                    </div>
                                </div>
                                <p class="text-slate-300 mt-1 leading-snug">${esc(c.message_text)}</p>
                                <span class="text-[10px] text-slate-500 block mt-1">${formatDate(c.created_at)}</span>
                            </div>
                        `).join('') : '<p class="text-xs text-slate-500 italic">No topic comments.</p>'}
                    </div>
                </div>

                <!-- Recent Lecture Chats -->
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Recent Lecture Chats (${chats.length})</h4>
                    <div class="space-y-2 max-h-36 overflow-y-auto">
                        ${chats.length ? chats.map((l) => `
                            <div class="p-2 rounded bg-slate-900 border border-slate-800 text-xs">
                                <div class="flex justify-between items-center">
                                    <span class="font-mono text-[10px] text-purple-400">${esc(l.lecture_key)} (${esc(l.scope)})</span>
                                    <div class="flex items-center gap-1.5">
                                        ${l.is_edited ? '<span class="text-[10px] text-slate-500 italic">(edited)</span>' : ''}
                                        <button type="button" onclick="adminDeleteChat('lecture', '${l.id}')" class="text-rose-400 hover:text-rose-300 text-[10px]">Delete</button>
                                    </div>
                                </div>
                                <p class="text-slate-300 mt-1 leading-snug">${esc(l.message_text)}</p>
                                <span class="text-[10px] text-slate-500 block mt-1">${formatDate(l.created_at)}</span>
                            </div>
                        `).join('') : '<p class="text-xs text-slate-500 italic">No lecture messages.</p>'}
                    </div>
                </div>

                <div class="text-[11px] text-slate-500 italic p-2 rounded bg-slate-950/60 border border-slate-800">
                    Direct messages (DMs) are private student-to-student conversations and are inaccessible to administrators.
                </div>
            </div>
        `;
    } catch (e) {
        panel.innerHTML = `<div class="text-center py-8 text-rose-400">${esc(e.message)}</div>`;
    }
}

// --- Tab 2: Reports & Moderation ---
function renderReportsList() {
    const list = dashboardData.openReports || [];
    document.getElementById('reportsCountLabel').textContent = `${list.length} open report${list.length === 1 ? '' : 's'}`;
    const container = document.getElementById('reportsListContainer');

    if (!list.length) {
        container.innerHTML = `<p class="text-slate-500 italic py-10 text-center">All clear! There are currently no open reports requiring moderation.</p>`;
        return;
    }

    container.innerHTML = list.map((r) => `
        <article class="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        ${esc(r.report_reason)}
                    </span>
                    <strong class="text-white text-sm">Against: ${esc(r.target_name)}</strong>
                    ${r.target_is_banned ? '<span class="text-[10px] text-rose-400 font-bold">(Already Banned)</span>' : ''}
                </div>
                <span class="text-xs text-slate-500 font-mono">${formatDate(r.created_at)}</span>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded border border-slate-800/80">
                ${esc(r.report_details || 'No additional comment provided by reporter.')}
            </p>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span class="text-[11px] text-slate-500">Reported by: <strong class="text-slate-400">${esc(r.reporter_name)}</strong> (${esc(r.reporter_email || 'guest')})</span>
                <div class="flex flex-wrap gap-2">
                    <button type="button" onclick="loadStudentDetail('${r.target_student_id}'); switchAdminTab('students');" class="secondary-cta text-xs !py-1.5 !px-3">Inspect Student</button>
                    <button type="button" onclick="adminResolveReport(${r.id})" class="primary-cta text-xs !py-1.5 !px-3">Resolve</button>
                    <button type="button" onclick="adminDismissReport(${r.id})" class="nav-pill text-xs !py-1.5 !px-3 text-slate-400 hover:text-white">Dismiss</button>
                    <button type="button" onclick="adminBanStudent('${r.target_student_id}', '${esc(r.target_name)}')" class="danger-cta text-xs !py-1.5 !px-3">Ban Account & Device</button>
                </div>
            </div>
        </article>
    `).join('');
}

// --- Tab 3: Uploaded Resources Management ---
function renderUploadsList() {
    const query = (document.getElementById('uploadSearchInput')?.value || '').trim().toLowerCase();
    let list = dashboardData.recentUploads || [];

    if (query) {
        list = list.filter((u) =>
            (u.title && u.title.toLowerCase().includes(query)) ||
            (u.student_name && u.student_name.toLowerCase().includes(query)) ||
            (u.upload_kind && u.upload_kind.toLowerCase().includes(query))
        );
    }

    const container = document.getElementById('uploadsListContainer');
    if (!list.length) {
        container.innerHTML = `<p class="text-slate-500 italic py-10 text-center">No uploaded resources found.</p>`;
        return;
    }

    container.innerHTML = list.map((u) => `
        <article class="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="space-y-1">
                <div class="flex items-center gap-2">
                    <strong class="text-white text-sm font-semibold">${esc(u.title)}</strong>
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">${esc(u.upload_kind)}</span>
                    <span class="text-xs text-slate-500">${formatBytes(u.size_bytes)}</span>
                </div>
                <p class="text-xs text-slate-400">${esc(u.description || 'No description provided')}</p>
                <p class="text-[11px] text-slate-500">
                    Uploaded by: <strong class="text-slate-300">${esc(u.student_name)}</strong> (${esc(u.student_email || 'guest')}) • ${formatDate(u.uploaded_at)}
                </p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                ${u.blob_url ? `<a href="${esc(u.blob_url)}" target="_blank" class="secondary-cta text-xs !py-1.5 !px-3">Open File</a>` : ''}
                <button type="button" onclick="adminDeleteUpload('${u.id}', '${esc(u.title)}')" class="danger-cta text-xs !py-1.5 !px-3">
                    Remove Resource
                </button>
            </div>
        </article>
    `).join('');
}

// --- Tab 4: Global Chats Moderation ---
function renderGlobalChats() {
    const lectureMessages = dashboardData.globalChats?.lectureMessages || [];
    const topicComments = dashboardData.globalChats?.topicComments || [];

    document.getElementById('lectureChatsCountLabel').textContent = `${lectureMessages.length} messages`;
    document.getElementById('topicCommentsCountLabel').textContent = `${topicComments.length} comments`;

    const lFeed = document.getElementById('lectureChatsFeed');
    if (!lectureMessages.length) {
        lFeed.innerHTML = `<p class="text-slate-500 italic py-6 text-center text-xs">No recent lecture messages.</p>`;
    } else {
        lFeed.innerHTML = lectureMessages.map((m) => `
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <strong class="text-blue-300 font-semibold">${esc(m.student_name)}</strong>
                        <span class="text-[10px] text-slate-500 font-mono">${esc(m.lecture_key)} (${esc(m.scope)})</span>
                        ${m.is_edited ? '<span class="text-[10px] text-slate-500 italic">(edited)</span>' : ''}
                    </div>
                    <button type="button" onclick="adminDeleteChat('lecture', '${m.id}')" class="text-rose-400 hover:text-rose-300 text-[11px] font-semibold">Delete</button>
                </div>
                <p class="text-slate-200 leading-relaxed">${esc(m.message_text)}</p>
                <span class="text-[10px] text-slate-500 block">${formatDate(m.created_at)}</span>
            </div>
        `).join('');
    }

    const tFeed = document.getElementById('topicCommentsFeed');
    if (!topicComments.length) {
        tFeed.innerHTML = `<p class="text-slate-500 italic py-6 text-center text-xs">No recent topic comments.</p>`;
    } else {
        tFeed.innerHTML = topicComments.map((c) => `
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <strong class="text-indigo-300 font-semibold">${esc(c.student_name)}</strong>
                        <span class="text-[10px] text-slate-500 font-mono">${esc(c.course_id)} / ${esc(c.topic_id)}</span>
                        ${c.is_edited ? '<span class="text-[10px] text-slate-500 italic">(edited)</span>' : ''}
                    </div>
                    <button type="button" onclick="adminDeleteChat('topic', '${c.id}')" class="text-rose-400 hover:text-rose-300 text-[11px] font-semibold">Delete</button>
                </div>
                <p class="text-slate-200 leading-relaxed">${esc(c.message_text)}</p>
                <span class="text-[10px] text-slate-500 block">${formatDate(c.created_at)}</span>
            </div>
        `).join('');
    }
}

// --- Tab 5: Banned Accounts & Devices ---
function renderBannedTab() {
    const bannedStudents = (dashboardData.leaderboard || []).filter((s) => s.is_banned);
    const bannedDevices = dashboardData.bannedDevices || [];

    const accountsContainer = document.getElementById('bannedAccountsList');
    if (!bannedStudents.length) {
        accountsContainer.innerHTML = `<p class="text-slate-500 italic py-6 text-center text-xs">No banned student accounts.</p>`;
    } else {
        accountsContainer.innerHTML = bannedStudents.map((s) => `
            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <div>
                    <strong class="text-rose-300 font-semibold block">${esc(s.display_name)}</strong>
                    <span class="text-slate-400 font-mono text-[11px] block">${esc(s.email || 'No email')}</span>
                    <span class="text-slate-500 text-[10px]">Reason: ${esc(s.banned_reason || 'Banned by admin')} • ${formatDate(s.banned_at)}</span>
                </div>
                <button type="button" onclick="adminUnbanStudent('${s.id}')" class="primary-cta text-xs !py-1 !px-3">Unban</button>
            </div>
        `).join('');
    }

    const devicesContainer = document.getElementById('bannedDevicesList');
    if (!bannedDevices.length) {
        devicesContainer.innerHTML = `<p class="text-slate-500 italic py-6 text-center text-xs">No banned device fingerprints.</p>`;
    } else {
        devicesContainer.innerHTML = bannedDevices.map((d) => `
            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <div>
                    <strong class="text-white font-mono text-xs block">${esc(d.device_id)}</strong>
                    <span class="text-slate-400 text-[11px] block">${esc(d.banned_reason || 'Device banned')}</span>
                    <span class="text-slate-500 text-[10px]">Banned by: ${esc(d.banned_by_admin || 'admin')} • ${formatDate(d.banned_at)}</span>
                </div>
                <button type="button" onclick="adminUnbanDevice('${esc(d.device_id)}')" class="secondary-cta text-xs !py-1 !px-3">Unban Device</button>
            </div>
        `).join('');
    }
}

// --- Action Handlers ---
async function adminBanStudent(studentId, name) {
    const reason = window.prompt(`Enter ban reason for ${name || 'student'}:`, 'Violation of community guidelines');
    if (!reason || !reason.trim()) return;

    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'ban-student',
                studentId,
                reason: reason.trim()
            })
        });
        alert('Student account and associated hardware device banned.');
        await loadDashboard();
        if (selectedStudentId === studentId) {
            await loadStudentDetail(studentId);
        }
    } catch (e) {
        alert(e.message);
    }
}

async function adminUnbanStudent(studentId) {
    if (!confirm('Are you sure you want to unban this student account and device?')) return;
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'unban-student',
                studentId
            })
        });
        alert('Student account and device unbanned.');
        await loadDashboard();
        if (selectedStudentId === studentId) {
            await loadStudentDetail(studentId);
        }
    } catch (e) {
        alert(e.message);
    }
}

async function promptBanDevice() {
    const deviceId = window.prompt('Enter Device ID to ban:');
    if (!deviceId || !deviceId.trim()) return;
    const reason = window.prompt('Ban reason:', 'Hardware device ban for repeated misconduct');
    if (!reason || !reason.trim()) return;

    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'ban-device',
                deviceId: deviceId.trim(),
                reason: reason.trim()
            })
        });
        alert(`Device ${deviceId} banned successfully.`);
        await loadDashboard();
    } catch (e) {
        alert(e.message);
    }
}

async function adminBanDeviceDirect(deviceId) {
    if (!confirm(`Ban hardware device "${deviceId}" from Academy LMS?`)) return;
    const reason = window.prompt('Ban reason:', 'Hardware device banned for moderation violation');
    if (!reason || !reason.trim()) return;

    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'ban-device',
                deviceId,
                reason: reason.trim()
            })
        });
        alert(`Device ${deviceId} banned.`);
        await loadDashboard();
        if (selectedStudentId) {
            await loadStudentDetail(selectedStudentId);
        }
    } catch (e) {
        alert(e.message);
    }
}

async function adminUnbanDevice(deviceId) {
    if (!confirm(`Unban device "${deviceId}"?`)) return;
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'unban-device',
                deviceId
            })
        });
        alert(`Device ${deviceId} unbanned.`);
        await loadDashboard();
    } catch (e) {
        alert(e.message);
    }
}

async function adminResolveReport(reportId) {
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'resolve-report',
                reportId
            })
        });
        await loadDashboard();
    } catch (e) {
        alert(e.message);
    }
}

async function adminDismissReport(reportId) {
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'dismiss-report',
                reportId
            })
        });
        await loadDashboard();
    } catch (e) {
        alert(e.message);
    }
}

async function adminDeleteUpload(uploadId, title) {
    if (!confirm(`Permanently remove uploaded resource "${title}"? This cannot be undone.`)) return;
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'delete-upload',
                uploadId
            })
        });
        alert('Resource removed successfully.');
        await loadDashboard();
        if (selectedStudentId) {
            await loadStudentDetail(selectedStudentId);
        }
    } catch (e) {
        alert(e.message);
    }
}

async function adminDeleteChat(chatType, chatId) {
    if (!confirm('Delete this message from the study room?')) return;
    try {
        await fetchAdmin('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                action: 'delete-chat',
                chatType,
                chatId
            })
        });
        await loadDashboard();
        if (selectedStudentId) {
            await loadStudentDetail(selectedStudentId);
        }
    } catch (e) {
        alert(e.message);
    }
}

// Global exposure
window.switchAdminTab = switchAdminTab;
window.renderStudentsTable = renderStudentsTable;
window.loadStudentDetail = loadStudentDetail;
window.renderUploadsList = renderUploadsList;
window.adminBanStudent = adminBanStudent;
window.adminUnbanStudent = adminUnbanStudent;
window.adminBanDeviceDirect = adminBanDeviceDirect;
window.adminUnbanDevice = adminUnbanDevice;
window.promptBanDevice = promptBanDevice;
window.adminResolveReport = adminResolveReport;
window.adminDismissReport = adminDismissReport;
window.adminDeleteUpload = adminDeleteUpload;
window.adminDeleteChat = adminDeleteChat;
window.promptManualLogin = promptManualLogin;

document.addEventListener('DOMContentLoaded', () => {
    // Check remembered values
    const storedEmail = localStorage.getItem(ADMIN_EMAIL_KEY) || '';
    const storedSecret = localStorage.getItem(ADMIN_SECRET_KEY) || '';
    if (storedEmail) {
        adminEmail = storedEmail;
        const input = document.getElementById('adminEmailInput');
        if (input) input.value = storedEmail;
    }
    if (storedSecret) {
        adminSecret = storedSecret;
        const secretInput = document.getElementById('adminSecretInput');
        if (secretInput) secretInput.value = storedSecret;
    }

    document.getElementById('refreshAdminBtn')?.addEventListener('click', loadDashboard);

    document.getElementById('manualAuthToggleBtn')?.addEventListener('click', () => {
        document.getElementById('manualAuthDrawer')?.classList.toggle('hidden');
    });

    document.getElementById('applyManualAuthBtn')?.addEventListener('click', async () => {
        adminEmail = document.getElementById('adminEmailInput').value.trim().toLowerCase();
        adminSecret = document.getElementById('adminSecretInput').value.trim();
        if (adminEmail) localStorage.setItem(ADMIN_EMAIL_KEY, adminEmail);
        if (adminSecret) localStorage.setItem(ADMIN_SECRET_KEY, adminSecret);
        await checkAuthAndLoad();
    });

    // Auto-authenticate via session!
    checkAuthAndLoad();
});
