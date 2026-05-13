let adminSecret = '';
let adminEmail = '';
let selectedStudentId = '';
let leaderboard = [];

function formatDate(value) {
    if (!value) return 'Not yet';
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

async function fetchAdmin(path) {
    const response = await fetch(path, {
        headers: {
            'x-admin-secret': adminSecret,
            'x-admin-email': adminEmail
        }
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(payload.error || 'Admin request failed.');
    }
    return payload;
}

function renderLeaderboard() {
    document.getElementById('adminLeaderboard').innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3>Leaderboard</h3>
                <span>${leaderboard.length} students</span>
            </div>
            <div class="overflow-x-auto">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Completed</th>
                            <th>Accuracy</th>
                            <th>Uploads</th>
                            <th>Comments</th>
                            <th>Last seen</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${leaderboard.map((student) => `
                            <tr class="${selectedStudentId === student.id ? 'admin-row-active' : ''}" onclick="loadStudentDetail('${student.id}')">
                                <td>
                                    <strong class="text-white">${student.display_name}</strong>
                                    <p class="text-xs text-slate-500 mt-1">${student.headline || 'No headline yet'}</p>
                                </td>
                                <td>${student.completed_topics}/${student.tracked_topics}</td>
                                <td>${student.quiz_accuracy}%</td>
                                <td>${student.uploads_count}</td>
                                <td>${student.comments_count}</td>
                                <td>${formatDate(student.last_seen_at)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderDetail(detail) {
    if (!detail) {
        document.getElementById('adminDetail').innerHTML = `
            <section class="panel-card p-5">
                <h3 class="text-xl font-bold text-white">Student detail</h3>
                <p class="text-slate-400 mt-2">Pick a student from the leaderboard to inspect their profile, uploads, comments, and recent messages.</p>
            </section>
        `;
        return;
    }

    const student = detail.student;
    document.getElementById('adminDetail').innerHTML = `
        <section class="panel-card p-5 space-y-5">
            <div class="flex items-start gap-4">
                <div class="avatar-shell avatar-shell-small">
                    ${student.avatar_url ? `<img src="${student.avatar_url}" alt="${student.display_name}" class="avatar-image">` : `<span>${student.display_name.slice(0, 1).toUpperCase()}</span>`}
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-white">${student.display_name}</h3>
                    <p class="text-sm text-slate-400 mt-1">${student.headline || 'No headline yet'}</p>
                    <p class="text-sm text-slate-400 mt-2">${student.bio || 'No bio saved yet.'}</p>
                    <p class="text-xs text-slate-500 mt-2">Seen ${formatDate(student.last_seen_at)}</p>
                </div>
            </div>
            <div class="summary-list">
                <p><strong class="text-white">Email:</strong> ${student.email || 'Not provided'}</p>
                <p><strong class="text-white">GitHub:</strong> ${student.github_url || 'Not provided'}</p>
                <p><strong class="text-white">LinkedIn:</strong> ${student.linkedin_url || 'Not provided'}</p>
                <p><strong class="text-white">Website:</strong> ${student.website_url || 'Not provided'}</p>
                <p><strong class="text-white">Progress:</strong> ${student.completed_topics || 0}/${student.tracked_topics || 0} topics</p>
                <p><strong class="text-white">Quiz attempts:</strong> ${student.quiz_attempts_count || 0}</p>
            </div>
            <div>
                <h4 class="text-lg font-bold text-white mb-3">Uploads</h4>
                <div class="space-y-3">
                    ${(detail.uploads || []).length ? detail.uploads.map((upload) => `
                        <article class="social-card">
                            <strong class="text-white">${upload.title}</strong>
                            <p class="text-sm text-slate-400 mt-2">${upload.description || upload.upload_kind}</p>
                            <p class="text-xs text-slate-500 mt-2">${formatBytes(upload.size_bytes)} • ${formatDate(upload.uploaded_at)}</p>
                        </article>
                    `).join('') : '<p class="text-slate-400">No uploads yet.</p>'}
                </div>
            </div>
            <div>
                <h4 class="text-lg font-bold text-white mb-3">Recent comments</h4>
                <div class="chat-thread">
                    ${(detail.comments || []).length ? detail.comments.map((comment) => `
                        <article class="chat-message">
                            <strong class="text-white">${comment.course_id} / ${comment.topic_id}</strong>
                            <p class="text-sm text-slate-400 mt-2">${comment.message_text}</p>
                            <p class="text-xs text-slate-500 mt-2">${formatDate(comment.created_at)}</p>
                        </article>
                    `).join('') : '<p class="text-slate-400">No comments yet.</p>'}
                </div>
            </div>
            <div>
                <h4 class="text-lg font-bold text-white mb-3">Recent messages</h4>
                <div class="chat-thread">
                    ${(detail.messages || []).length ? detail.messages.map((message) => `
                        <article class="chat-message">
                            <p class="text-sm text-slate-400">${message.message_text}</p>
                            <p class="text-xs text-slate-500 mt-2">${formatDate(message.created_at)}</p>
                        </article>
                    `).join('') : '<p class="text-slate-400">No recent messages yet.</p>'}
                </div>
            </div>
        </section>
    `;
}

async function loadLeaderboard() {
    const payload = await fetchAdmin('/api/admin');
    leaderboard = payload.leaderboard || [];
    renderLeaderboard();
    if (leaderboard.length && !selectedStudentId) {
        await loadStudentDetail(leaderboard[0].id);
    } else {
        renderDetail(null);
    }
}

async function loadStudentDetail(studentId) {
    selectedStudentId = studentId;
    renderLeaderboard();
    const detail = await fetchAdmin(`/api/admin?studentId=${encodeURIComponent(studentId)}`);
    renderDetail(detail);
}

window.loadStudentDetail = loadStudentDetail;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loadAdminBtn').addEventListener('click', async () => {
        adminEmail = document.getElementById('adminEmailInput').value.trim().toLowerCase();
        adminSecret = document.getElementById('adminSecretInput').value.trim();
        if (!adminEmail || !adminSecret) return;
        try {
            await loadLeaderboard();
        } catch (error) {
            renderDetail({
                student: {
                    display_name: 'Admin error',
                    headline: '',
                    bio: error.message
                },
                uploads: [],
                comments: []
            });
        }
    });
});
