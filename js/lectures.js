let activeLectureSubject = 'all';
let activeLectureIndex = 0;
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

function getFilteredLectures() {
    return (window.lectureLibrary || []).filter((item) => activeLectureSubject === 'all' || item.subject === activeLectureSubject);
}

function getActiveLecture() {
    const lectures = getFilteredLectures();
    return lectures[activeLectureIndex] || null;
}

function lectureKeyFor(lecture) {
    return lecture.lectureKey || `${lecture.subject}-${lecture.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function renderLecturePage() {
    renderLectureTabs();
    renderLectureList();
    renderLectureViewer();
}

function renderLectureTabs() {
    document.getElementById('lectureSubjectTabs').innerHTML = getLectureSubjects().map((subject) => `
        <button onclick="setLectureSubject('${subject.id}')" class="course-pill ${activeLectureSubject === subject.id ? 'course-pill-active' : ''}">${subject.label}</button>
    `).join('');
}

function renderLectureList() {
    const lectures = getFilteredLectures();
    if (activeLectureIndex >= lectures.length) activeLectureIndex = 0;

    document.getElementById('lectureList').innerHTML = lectures.length ? lectures.map((lecture, index) => `
        <button onclick="selectLecture(${index})" class="continue-card ${activeLectureIndex === index ? 'ring-2 ring-blue-200' : ''}">
            <p class="metric-label">${lecture.subjectLabel}</p>
            <h3 class="text-lg font-bold text-white mt-2">${lecture.title}</h3>
            <p class="metric-subtext mt-2">${lecture.lecturer}</p>
            <p class="text-sm text-slate-400 mt-3">${lecture.description}</p>
        </button>
    `).join('') : `
        <article class="panel-card p-5">
            <h3 class="text-xl font-bold text-white">No lecture links yet</h3>
            <p class="text-slate-400 mt-2">Add YouTube links in \`js/lecture-library.js\` and they will appear here.</p>
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
        <p class="metric-label">${lecture.subjectLabel} • Embedded lecture view</p>
        <h2 class="text-2xl font-extrabold text-white mt-2">${lecture.title}</h2>
        <p class="text-slate-400 mt-2">${lecture.description}</p>
        <div class="mt-5 rounded-[1.25rem] overflow-hidden border border-blue-100 shadow-lg">
            <iframe src="${normalizeLectureUrl(lecture.url)}" title="${lecture.title}" class="w-full h-[520px]" allowfullscreen></iframe>
        </div>
    `;

    renderLectureCommunity();
    queueLecturePresence();
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
                    <span>${lectureChatState.local.onlineCount}/45 online</span>
                </div>
                <div class="chat-thread mb-4">
                    ${renderLectureMessages('local')}
                </div>
                <div class="space-y-3">
                    <textarea id="localLectureMessage" class="note-input !min-h-[7rem]" placeholder="Ask about this lecture, timestamp a tough section, or admit that the professor just speedran three concepts in 40 seconds."></textarea>
                    <button onclick="sendLectureMessage('local')" class="primary-cta">Send to this lecture room</button>
                </div>
            </section>
            <section class="study-rail-block">
                <div class="section-head">
                    <h3>Global student chat</h3>
                    <span>${lectureChatState.global.onlineCount}/45 online</span>
                </div>
                <div class="chat-thread mb-4">
                    ${renderLectureMessages('global')}
                </div>
                <div class="space-y-3">
                    <textarea id="globalLectureMessage" class="note-input !min-h-[7rem]" placeholder="Share a study tip, ask who is revising tonight, or drop the one topic that just personally offended you."></textarea>
                    <button onclick="sendLectureMessage('global')" class="secondary-cta">Send to global lounge</button>
                </div>
            </section>
        </div>
    `;
}

function renderLectureMessages(scope) {
    const messages = lectureChatState[scope].messages || [];
    if (!messages.length) {
        return '<p class="text-slate-400">No messages yet. Be the calm responsible scholar who starts the thread.</p>';
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
    const match = url.match(/[?&]v=([^&]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
}

function setLectureSubject(subject) {
    activeLectureSubject = subject;
    activeLectureIndex = 0;
    renderLecturePage();
}

function selectLecture(index) {
    activeLectureIndex = index;
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

document.addEventListener('DOMContentLoaded', () => {
    window.ACADEMY.scheduleCloudSync();
    renderLecturePage();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            queueLecturePresence();
            return;
        }
        clearInterval(lecturePollingTimer);
    });
});
