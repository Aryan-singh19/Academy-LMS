let activeResourceSubject = 'all';
let activeResourceType = 'all';

function getSubjects() {
    return [
        { id: 'all', label: 'All subjects' },
        { id: 'cs501', label: 'CS501' },
        { id: 'cs502', label: 'CS502' },
        { id: 'cs503', label: 'CS503' },
        { id: 'cs503-cs', label: 'CS503-CS' },
        { id: 'cs504', label: 'CS504' },
        { id: 'cs601', label: 'CS601' },
        { id: 'cs602', label: 'CS602' },
        { id: 'cs603', label: 'CS603' },
        { id: 'cs603-cg', label: 'CS603-CG' },
        { id: 'cs604', label: 'CS604' },
        { id: 'cs701', label: 'CS701' },
        { id: 'cs702', label: 'CS702' },
        { id: 'cs702-wmc', label: 'CS702-WMC' },
        { id: 'cs703', label: 'CS703' },
        { id: 'cs703-dm', label: 'CS703-DM' }
    ];
}

function getTypes() {
    return [
        { id: 'all', label: 'Everything' },
        { id: 'notes', label: 'Notes' },
        { id: 'assignments', label: 'Assignments' },
        { id: 'mock-papers', label: 'Mock Papers' },
        { id: 'slides', label: 'Slides' },
        { id: 'resources', label: 'Other resources' }
    ];
}

function renderResourcePage() {
    renderResourceTabs();
    renderResourceSummary();
    renderResourceGrid();
}

function renderResourceTabs() {
    document.getElementById('resourceSubjectTabs').innerHTML = getSubjects().map((subject) => `
        <button onclick="setResourceSubject('${subject.id}')" class="course-pill ${activeResourceSubject === subject.id ? 'course-pill-active' : ''}">${subject.label}</button>
    `).join('');

    document.getElementById('resourceTypeTabs').innerHTML = getTypes().map((type) => `
        <button onclick="setResourceType('${type.id}')" class="course-pill ${activeResourceType === type.id ? 'course-pill-active' : ''}">${type.label}</button>
    `).join('');
}

function getFilteredResources() {
    return (window.resourceLibrary || []).filter((item) => {
        if (activeResourceSubject !== 'all' && item.subject !== activeResourceSubject) return false;
        if (activeResourceType !== 'all' && item.type !== activeResourceType) return false;
        return true;
    });
}

function renderResourceSummary() {
    const filtered = getFilteredResources();
    const notesCount = filtered.filter((item) => item.type === 'notes').length;
    const assignmentCount = filtered.filter((item) => item.type === 'assignments').length;
    const mockCount = filtered.filter((item) => item.type === 'mock-papers').length;

    document.getElementById('resourceSummary').innerHTML = `
        <article class="metric-card">
            <p class="metric-label">Filtered files</p>
            <div class="metric-value">${filtered.length}</div>
            <p class="metric-subtext">Visible under current tabs</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Notes</p>
            <div class="metric-value">${notesCount}</div>
            <p class="metric-subtext">Revision material</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Assignments + mocks</p>
            <div class="metric-value">${assignmentCount + mockCount}</div>
            <p class="metric-subtext">Practice-friendly files</p>
        </article>
    `;
}

function renderResourceGrid() {
    const filtered = getFilteredResources();
    const target = document.getElementById('resourceGrid');
    if (!filtered.length) {
        target.innerHTML = `
            <article class="panel-card p-6 md:col-span-2 xl:col-span-3">
                <h3 class="text-xl font-bold text-white">No files match these tabs yet.</h3>
                <p class="text-slate-400 mt-2">Drop PDFs or PPTX files into \`incoming_resources/\` with names like \`cs601_notes_unit1.pdf\` or \`graphic_mock_test_1.pdf\`, then the workflow will sort and surface them here.</p>
            </article>
        `;
        return;
    }

    target.innerHTML = filtered.map((item) => `
        <article class="panel-card p-5">
            <p class="metric-label">${item.subjectLabel} • ${item.typeLabel}</p>
            <h3 class="text-xl font-bold text-white mt-2">${item.title}</h3>
            <p class="metric-subtext mt-2">${item.extension.toUpperCase()} file available for students to download.</p>
            <div class="flex gap-3 mt-5">
                <a href="${item.path}" class="primary-cta text-sm !py-2 !px-4" download>Download</a>
                <a href="${item.path}" class="secondary-cta text-sm !py-2 !px-4" target="_blank" rel="noreferrer">Preview</a>
            </div>
        </article>
    `).join('');
}

function setResourceSubject(subject) {
    activeResourceSubject = subject;
    renderResourcePage();
}

function setResourceType(type) {
    activeResourceType = type;
    renderResourcePage();
}

document.addEventListener('DOMContentLoaded', async () => {
    const allowed = await window.ACADEMY.requireStudentAuth({
        nextPath: '/html/resources.html'
    });
    if (!allowed) return;

    window.ACADEMY.scheduleCloudSync();
    renderResourcePage();
});
