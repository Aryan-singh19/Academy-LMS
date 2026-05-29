let activeLectureSubject = 'all';
let activeLectureKey = '';
let lectureSearchQuery = '';
let lectureChatState = {
    local: { messages: [], onlineCount: 0 },
    global: { messages: [], onlineCount: 0 }
};
let lecturePollingTimer = null;
let lectureFetchInFlight = false;

function getLectureSubjects() {
    return [
        { id: 'all', label: 'All subjects' },
        { id: 'cs601', label: 'CS601' },
        { id: 'cs602', label: 'CS602' },
        { id: 'cs603', label: 'CS603' },
        { id: 'cs603-cg', label: 'CS603-CG' },
        { id: 'cs604', label: 'CS604' }
    ];
}

function lectureKeyFor(lecture) {
    return lecture.lectureKey || `${lecture.subject}-${lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function getFilteredLectures() {
    return (window.lectureLibrary || []).filter((item) => {
        if (activeLectureSubject !== 'all' && item.subject !== activeLectureSubject) return false;
        if (!lectureSearchQuery) return true;
        const haystack = `${item.subjectLabel} ${item.title} ${item.lecturer} ${item.description}`.toLowerCase();
        return haystack.includes(lectureSearchQuery);
    });
}

function getActiveLecture() {
    const lectures = getFilteredLectures();
    const matched = lectures.find((item) => lectureKeyFor(item) === activeLectureKey);
    return matched || lectures[0] || null;
}

function renderLecturePage() {
    renderLectureTabs();
    renderLectureToolbar();
    renderLectureList();
    renderLectureViewer();
}

function renderLectureTabs() {
    document.getElementById('lectureSubjectTabs').innerHTML = getLectureSubjects().map((subject) => `
        <button onclick="setLectureSubject('${subject.id}')" class="course-pill ${activeLectureSubject === subject.id ? 'course-pill-active' : ''}">${subject.label}</button>
    `).join('');
}

function renderLectureToolbar() {
    const lectures = getFilteredLectures();
    const target = document.getElementById('lectureToolbar');
    if (!target) return;

    target.innerHTML = `
        <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div class="metric-subtext">${lectures.length} lecture options available</div>
            <input id="lectureSearchInput" class="search-input md:max-w-md" placeholder="Search by topic, lecturer, or subject" value="${window.ACADEMY.escapeForAttribute(lectureSearchQuery)}">
        </div>
    `;

    const input = document.getElementById('lectureSearchInput');
    if (input) {
        input.addEventListener('input', (event) => {
            lectureSearchQuery = String(event.target.value || '').trim().toLowerCase();
            const first = getFilteredLectures()[0];
            activeLectureKey = first ? lectureKeyFor(first) : '';
            renderLecturePage();
        });
    }
}

function renderLectureList() {
    const lectures = getFilteredLectures();
    const active = getActiveLecture();
    activeLectureKey = active ? lectureKeyFor(active) : '';

    document.getElementById('lectureList').innerHTML = lectures.length ? lectures.map((lecture) => `
        <button onclick="selectLecture('${lectureKeyFor(lecture)}')" class="continue-card ${activeLectureKey === lectureKeyFor(lecture) ? 'ring-2 ring-blue-200' : ''}">
            <p class="metric-label">${lecture.subjectLabel}</p>
            <h3 class="text-lg font-bold text-white mt-2">${lecture.title}</h3>
            <p class="metric-subtext mt-2">${lecture.lecturer}</p>
            <p class="text-sm text-slate-400 mt-3">${lecture.description}</p>
        </button>
    `).join('') : `
        <article class="panel-card p-5">
            <h3 class="text-xl font-bold text-white">No lecture links match this filter</h3>
            <p class="text-slate-400 mt-2">Try a different subject tab or clear the search text.</p>
        </article>
    `;
}

function renderLectureViewer() {
    const target = document.getElementById('lectureViewer');
    const lecture = getActiveLecture();
    if (!lecture) {
        target.innerHTML = '<p class="text-slate-400">No lecture selected.</p>';
        document.getElementById('lectureCommunity').innerHTML = '';
        return;
    }

    target.innerHTML = `
        <p class="metric-label">${lecture.subjectLabel} • Flexible lecture view</p>
        <h2 class="text-2xl font-extrabold text-white mt-2">${lecture.title}</h2>
        <p class="text-slate-400 mt-2">${lecture.description}</p>
        <div class="flex flex-wrap gap-3 mt-4">
            <a class="secondary-cta text-sm !py-2 !px-4" href="${lecture.url}" target="_blank" rel="noreferrer">Open on YouTube</a>
        </div>
        ${renderLectureEmbed(lecture)}
    `;

    renderLectureCommunity();
    queueLecturePresence();
}

function renderLectureEmbed(lecture) {
    const embedUrl = normalizeLectureUrl(lecture.url);
    const embeddable = /^https:\/\/www\.youtube\.com\/embed\//.test(embedUrl);

    if (!embeddable) {
        return `
            <div class="study-rail-block mt-5">
                <p class="text-sm text-slate-300">This item opens directly on YouTube instead of inline embed. Students can still pick any lecture from the left list and switch instantly.</p>
            </div>
        `;
    }

    return `
        <div class="mt-5 rounded-[1.25rem] overflow-hidden border border-blue-100 shadow-lg">
            <iframe src="${embedUrl}" title="${lecture.title}" class="w-full h-[520px]" allowfullscreen></iframe>
        </div>
    `;
}

function renderLectureCommunity() {
    const lecture = getActiveLecture();
    const community = document.getElementById('lectureCommunity');
    if (!lecture) {
        community.innerHTML = '';
        return;
    }

    community.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-5">
            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Lecture room chat</h3>
                    <span>${formatOnlineCount(lectureChatState.local.onlineCount)}</span>
                </div>
                <div class="chat-thread mb-4">
                    ${renderLectureMessages('local')}
                </div>
                <div class="space-y-3">
                    <textarea id="localLectureMessage" class="note-input !min-h-[7rem]" placeholder="Ask about this lecture, timestamp a tough section, or drop a revision shortcut."></textarea>
                    <button onclick="sendLectureMessage('local')" class="primary-cta">Send to this lecture room</button>
                </div>
            </section>
            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Global student chat</h3>
                    <span>${formatOnlineCount(lectureChatState.global.onlineCount)}</span>
                </div>
                <div class="chat-thread mb-4">
                    ${renderLectureMessages('global')}
                </div>
                <div class="space-y-3">
                    <textarea id="globalLectureMessage" class="note-input !min-h-[7rem]" placeholder="Discuss strategy, playlists, and exam prep rhythm with other students."></textarea>
                    <button onclick="sendLectureMessage('global')" class="secondary-cta">Send to global lounge</button>
                </div>
            </section>
        </div>
    `;
}

function formatOnlineCount(count) {
    const total = Number.isFinite(Number(count)) ? Number(count) : 0;
    return `${total} online`;
}

function renderLectureMessages(scope) {
    const messages = lectureChatState[scope].messages || [];
    if (!messages.length) {
        return '<p class="text-slate-400">No messages yet. Start the thread with a useful note for the next student.</p>';
    }
    return messages.map((message) => `
        <article class="chat-message">
            <strong class="text-white">${message.display_name}</strong>
            <p class="text-sm text-slate-400 mt-2">${message.message_text}</p>
            <p class="text-xs text-slate-500 mt-2">${new Date(message.created_at).toLocaleString()}</p>
        </article>
    `).join('');
}

function normalizeLectureUrl(url) {
    if (url.indexOf('embed') !== -1) return url;
    if (url.indexOf('/results?') !== -1) return url;
    const match = url.match(/[?&]v=([^&]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
}

function setLectureSubject(subject) {
    activeLectureSubject = subject;
    const filtered = getFilteredLectures();
    activeLectureKey = filtered[0] ? lectureKeyFor(filtered[0]) : '';
    renderLecturePage();
}

function selectLecture(lectureKey) {
    activeLectureKey = lectureKey;
    renderLecturePage();
}

async function fetchLectureChat(scope) {
    const lecture = getActiveLecture();
    if (!lecture || window.location.protocol === 'file:') return;

    try {
        const response = await fetch(`/api/lecture-chat?lectureKey=${encodeURIComponent(lectureKeyFor(lecture))}&scope=${encodeURIComponent(scope)}`);
        if (!response.ok) return;
        lectureChatState[scope] = await response.json();
        renderLectureCommunity();
    } catch (error) {
        console.error('Unable to load lecture chat', error);
    }
}

async function queueLecturePresence() {
    clearInterval(lecturePollingTimer);
    if (document.visibilityState === 'hidden') return;

    await Promise.all([
        sendLectureHeartbeat('local'),
        sendLectureHeartbeat('global'),
        fetchLectureChat('local'),
        fetchLectureChat('global')
    ]);

    lecturePollingTimer = window.setInterval(() => {
        if (lectureFetchInFlight || document.visibilityState === 'hidden') return;
        lectureFetchInFlight = true;
        sendLectureHeartbeat('local');
        sendLectureHeartbeat('global');
        Promise.all([
            fetchLectureChat('local'),
            fetchLectureChat('global')
        ]).finally(() => {
            lectureFetchInFlight = false;
        });
    }, 45000);
}

async function sendLectureHeartbeat(scope) {
    const lecture = getActiveLecture();
    if (!lecture || window.location.protocol === 'file:') return;
    try {
        await fetch('/api/lecture-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                lectureKey: lectureKeyFor(lecture),
                subjectCode: lecture.subject,
                scope,
                action: 'heartbeat'
            })
        });
    } catch (error) {
        console.error('Unable to record lecture presence', error);
    }
}

async function sendLectureMessage(scope) {
    const lecture = getActiveLecture();
    const field = document.getElementById(`${scope}LectureMessage`);
    const messageText = field ? field.value.trim() : '';
    if (!lecture || !messageText || window.location.protocol === 'file:') return;

    try {
        await fetch('/api/lecture-chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                deviceId: window.ACADEMY.state.deviceId,
                lectureKey: lectureKeyFor(lecture),
                subjectCode: lecture.subject,
                scope,
                action: 'message',
                messageText
            })
        });
        field.value = '';
        await fetchLectureChat(scope);
    } catch (error) {
        console.error('Unable to send lecture chat message', error);
    }
}

window.setLectureSubject = setLectureSubject;
window.selectLecture = selectLecture;
window.sendLectureMessage = sendLectureMessage;

document.addEventListener('DOMContentLoaded', async () => {
    const allowed = await window.ACADEMY.requireStudentAuth({
        nextPath: '/html/lectures.html'
    });
    if (!allowed) return;

    window.ACADEMY.scheduleCloudSync();
    const initial = getFilteredLectures()[0];
    activeLectureKey = initial ? lectureKeyFor(initial) : '';
    renderLecturePage();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            queueLecturePresence();
            return;
        }
        clearInterval(lecturePollingTimer);
    });
});
