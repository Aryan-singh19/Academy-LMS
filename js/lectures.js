let activeLectureSubject = 'all';
let activeLectureIndex = 0;

function renderLecturePage() {
    renderLectureTabs();
    renderLectureList();
    renderLectureViewer();
}

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
            <p class="text-slate-400 mt-2">Add YouTube embed links in \`js/lecture-library.js\` and they will appear here.</p>
        </article>
    `;
}

function renderLectureViewer() {
    const lectures = getFilteredLectures();
    const target = document.getElementById('lectureViewer');
    if (!lectures.length) {
        target.innerHTML = '<p class="text-slate-400">No lecture selected.</p>';
        return;
    }

    const lecture = lectures[activeLectureIndex];
    target.innerHTML = `
        <p class="metric-label">${lecture.subjectLabel} • Embedded lecture view</p>
        <h2 class="text-2xl font-extrabold text-white mt-2">${lecture.title}</h2>
        <p class="text-slate-400 mt-2">${lecture.description}</p>
        <div class="mt-5 rounded-[1.25rem] overflow-hidden border border-blue-100 shadow-lg">
            <iframe src="${normalizeLectureUrl(lecture.url)}" title="${lecture.title}" class="w-full h-[520px]" allowfullscreen></iframe>
        </div>
    `;
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

document.addEventListener('DOMContentLoaded', renderLecturePage);
