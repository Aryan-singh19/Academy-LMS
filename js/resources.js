let activeResourceType = 'all';
let resourceSearchQuery = '';

function getTypes() {
    return [
        { id: 'all', label: 'All Resources' },
        { id: 'notes', label: 'Notes' },
        { id: 'mock-papers', label: 'Mock Papers' },
        { id: 'assignments', label: 'Assignments' },
        { id: 'slides', label: 'Slides' },
        { id: 'resources', label: 'Other Resources' }
    ];
}

function getValidResources() {
    return (window.resourceLibrary || []).filter((item) => {
        if (!item || !item.extension || item.extension === '') return false;
        if (item.title && item.title.toLowerCase().includes('gitkeep')) return false;
        return true;
    });
}

function getFilteredResources() {
    const valid = getValidResources();
    const query = resourceSearchQuery.trim().toLowerCase();

    return valid.filter((item) => {
        // Type filter check
        if (activeResourceType !== 'all' && item.type !== activeResourceType) {
            return false;
        }

        // Search query check
        if (query) {
            const titleMatch = (item.title || '').toLowerCase().includes(query);
            const subjectMatch = (item.subjectLabel || '').toLowerCase().includes(query) || (item.subject || '').toLowerCase().includes(query);
            const typeMatch = (item.typeLabel || '').toLowerCase().includes(query) || (item.type || '').toLowerCase().includes(query);
            const extMatch = (item.extension || '').toLowerCase().includes(query);
            if (!titleMatch && !subjectMatch && !typeMatch && !extMatch) {
                return false;
            }
        }

        return true;
    });
}

function renderResourcePage() {
    renderResourceTypeTabs();
    renderResourceSummary();
    renderResourceGrid();
    updateMatchBadge();
}

function renderResourceTypeTabs() {
    const container = document.getElementById('resourceTypeTabs');
    if (!container) return;

    const allResources = getValidResources();

    container.innerHTML = getTypes().map((type) => {
        const count = type.id === 'all'
            ? allResources.length
            : allResources.filter((item) => item.type === type.id).length;

        const isActive = activeResourceType === type.id;
        return `
            <button
                type="button"
                onclick="setResourceType('${type.id}')"
                class="course-pill !text-xs !py-1 !px-2.5 whitespace-nowrap flex items-center gap-1.5 ${isActive ? 'course-pill-active font-semibold shadow-sm' : ''}"
            >
                <span>${type.label}</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-800 text-slate-400 font-mono'}">${count}</span>
            </button>
        `;
    }).join('');
}

function renderResourceSummary() {
    const container = document.getElementById('resourceSummary');
    if (!container) return;

    const filtered = getFilteredResources();
    const notesCount = filtered.filter((item) => item.type === 'notes').length;
    const practiceCount = filtered.filter((item) => item.type === 'mock-papers' || item.type === 'assignments').length;
    const pdfCount = filtered.filter((item) => (item.extension || '').toLowerCase() === 'pdf').length;

    container.innerHTML = `
        <article class="metric-card !p-3">
            <p class="metric-label text-[11px]">Total Visible</p>
            <div class="metric-value text-xl font-extrabold text-white mt-0.5">${filtered.length}</div>
            <p class="metric-subtext text-[11px]">Files ready for download</p>
        </article>
        <article class="metric-card !p-3">
            <p class="metric-label text-[11px]">Revision Notes</p>
            <div class="metric-value text-xl font-extrabold text-blue-400 mt-0.5">${notesCount}</div>
            <p class="metric-subtext text-[11px]">Concept sheets &amp; handbooks</p>
        </article>
        <article class="metric-card !p-3">
            <p class="metric-label text-[11px]">Mocks &amp; Assignments</p>
            <div class="metric-value text-xl font-extrabold text-emerald-400 mt-0.5">${practiceCount}</div>
            <p class="metric-subtext text-[11px]">Practice question banks</p>
        </article>
        <article class="metric-card !p-3">
            <p class="metric-label text-[11px]">PDF Handbooks</p>
            <div class="metric-value text-xl font-extrabold text-red-400 mt-0.5">${pdfCount}</div>
            <p class="metric-subtext text-[11px]">Print &amp; offline ready</p>
        </article>
    `;
}

function updateMatchBadge() {
    const badge = document.getElementById('resourceMatchBadge');
    const clearBtn = document.getElementById('resourceSearchClearBtn');
    if (!badge) return;

    const filtered = getFilteredResources();
    const total = getValidResources().length;

    if (resourceSearchQuery.trim()) {
        badge.innerHTML = `<span class="text-blue-400 font-semibold">${filtered.length}</span> / ${total} found`;
        if (clearBtn) clearBtn.classList.remove('hidden');
    } else {
        badge.innerHTML = `<span class="text-slate-300 font-semibold">${filtered.length}</span> total files`;
        if (clearBtn) clearBtn.classList.add('hidden');
    }
}

function renderResourceGrid() {
    const target = document.getElementById('resourceGrid');
    if (!target) return;

    const filtered = getFilteredResources();

    if (!filtered.length) {
        target.innerHTML = `
            <article class="panel-card p-6 sm:p-8 col-span-full text-center space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mx-auto">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-white">No resources match your current filter</h3>
                <p class="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    Try searching with another keyword or switch the Type filter to <strong>All Resources</strong>.
                </p>
                <div class="pt-2">
                    <button type="button" onclick="resetAllResourceFilters()" class="secondary-cta text-xs !py-1.5 !px-3">
                        Reset Filters
                    </button>
                </div>
            </article>
        `;
        return;
    }

    target.innerHTML = filtered.map((item, index) => {
        const isPdf = (item.extension || '').toLowerCase() === 'pdf';
        const extBadgeClass = isPdf
            ? 'bg-red-500/15 text-red-300 border-red-500/30'
            : 'bg-blue-500/15 text-blue-300 border-blue-500/30';

        const typeColor = item.type === 'notes'
            ? 'text-cyan-400'
            : (item.type === 'mock-papers' ? 'text-amber-400' : 'text-emerald-400');

        return `
            <article class="panel-card p-4 flex flex-col justify-between hover:border-blue-500/40 transition-colors group">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2.5">
                        <div class="flex items-center gap-1.5 min-w-0">
                            <span class="text-[10px] font-bold uppercase tracking-wider font-mono bg-slate-800/90 text-slate-200 px-2 py-0.5 rounded border border-slate-700 shrink-0">${item.subjectLabel || 'CS'}</span>
                            <span class="text-[10px] font-semibold uppercase tracking-wider font-mono ${typeColor} truncate">${item.typeLabel || 'Resource'}</span>
                        </div>
                        <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded border font-mono shrink-0 ${extBadgeClass}">
                            ${(item.extension || 'FILE').toUpperCase()}
                        </span>
                    </div>

                    <h3 class="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                        ${item.title}
                    </h3>

                    <p class="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        ${isPdf ? 'Complete structured revision handbook with formulas, diagrams, and exam topics.' : 'Verified study material and solved reference for university examinations.'}
                    </p>
                </div>

                <div class="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800/80">
                    <a
                        href="${item.path}"
                        class="primary-cta text-xs !py-1.5 !px-3 flex-1 text-center font-semibold flex items-center justify-center gap-1.5"
                        download
                        title="Download ${item.title}"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        <span>Download</span>
                    </a>
                    <button
                        type="button"
                        onclick="previewResource(${index})"
                        class="secondary-cta text-xs !py-1.5 !px-3 shrink-0 flex items-center justify-center gap-1"
                        title="Preview ${item.title}"
                    >
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        <span>Preview</span>
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

function handleResourceSearch(event) {
    resourceSearchQuery = (event && event.target ? event.target.value : '');
    renderResourcePage();
}

function clearResourceSearch() {
    resourceSearchQuery = '';
    const input = document.getElementById('resourceSearchInput');
    if (input) {
        input.value = '';
        input.focus();
    }
    renderResourcePage();
}

function setResourceType(type) {
    activeResourceType = type;
    renderResourcePage();
}

function resetAllResourceFilters() {
    activeResourceType = 'all';
    resourceSearchQuery = '';
    const input = document.getElementById('resourceSearchInput');
    if (input) input.value = '';
    renderResourcePage();
}

// In-App Document Preview Modal
async function previewResource(filteredIndex) {
    const filtered = getFilteredResources();
    const item = filtered[filteredIndex];
    if (!item) return;

    const modal = document.getElementById('resourcePreviewModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalFileBadge = document.getElementById('modalFileBadge');
    const modalSubjectBadge = document.getElementById('modalSubjectBadge');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalBody) return;

    modalTitle.textContent = item.title;
    modalSubjectBadge.textContent = item.subjectLabel || 'CS';
    modalFileBadge.textContent = (item.extension || 'FILE').toUpperCase();

    const isPdf = (item.extension || '').toLowerCase() === 'pdf';
    modalFileBadge.className = isPdf
        ? 'text-[10px] font-bold uppercase px-2 py-0.5 rounded font-mono bg-red-500/20 text-red-300 border border-red-500/30'
        : 'text-[10px] font-bold uppercase px-2 py-0.5 rounded font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30';

    modalDownloadBtn.href = item.path;
    modalDownloadBtn.setAttribute('download', item.title + '.' + (item.extension || 'pdf'));

    if (isPdf) {
        modalBody.innerHTML = `
            <div class="space-y-3">
                <div class="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p class="text-xs text-slate-300">
                        Viewing <span class="font-semibold text-white">${item.title}</span> (PDF Handbook)
                    </p>
                    <a href="${item.path}" target="_blank" rel="noreferrer" class="secondary-cta text-xs !py-1 !px-2.5 shrink-0 inline-flex items-center gap-1">
                        <span>Open in New Tab</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
                <iframe src="${item.path}" class="w-full h-[60vh] rounded-xl border border-slate-800 bg-slate-950 shadow-inner" title="${item.title}"></iframe>
            </div>
        `;
    } else {
        // Markdown / Text file
        modalBody.innerHTML = `
            <div class="flex items-center justify-center py-12 text-slate-400">
                <div class="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent mr-2"></div>
                <span>Loading notes preview...</span>
            </div>
        `;

        try {
            const res = await fetch(item.path);
            if (!res.ok) throw new Error('File not found');
            const text = await res.text();
            modalBody.innerHTML = `
                <div class="prose prose-invert max-w-none space-y-3">
                    ${formatMarkdownToHtml(text)}
                </div>
            `;
        } catch (e) {
            modalBody.innerHTML = `
                <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <h4 class="text-sm font-bold text-white">Direct Download Required</h4>
                    <p class="text-xs text-slate-400">Could not render inline preview. You can download or view this file directly:</p>
                    <div class="pt-2">
                        <a href="${item.path}" class="primary-cta text-xs !py-1.5 !px-3" download>Download File</a>
                    </div>
                </div>
            `;
        }
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function formatMarkdownToHtml(md) {
    if (!md) return '';
    return md
        .replace(/^### (.*$)/gim, '<h4 class="text-sm font-bold text-blue-300 mt-4 mb-1">$1</h4>')
        .replace(/^## (.*$)/gim, '<h3 class="text-base font-bold text-white border-b border-slate-800 pb-1 mt-5 mb-2">$1</h3>')
        .replace(/^# (.*$)/gim, '<h2 class="text-lg font-extrabold text-blue-400 border-b border-slate-700 pb-1 mb-3">$1</h2>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em class="text-slate-300">$1</em>')
        .replace(/`([^`]+)`/gim, '<code class="bg-slate-950 px-1.5 py-0.5 rounded text-blue-300 font-mono text-xs border border-slate-800">$1</code>')
        .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-slate-300">$1</li>')
        .replace(/\n\n/gim, '<p class="my-2"></p>')
        .replace(/\n/gim, '<br>');
}

function closeResourcePreviewModal() {
    const modal = document.getElementById('resourcePreviewModal');
    if (modal) {
        modal.classList.add('hidden');
        const modalBody = document.getElementById('modalBody');
        if (modalBody) modalBody.innerHTML = '';
    }
    document.body.style.overflow = '';
}

function handleModalBackdropClick(event) {
    if (event.target && event.target.id === 'resourcePreviewModal') {
        closeResourcePreviewModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResourcePreviewModal();
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    if (window.ACADEMY) {
        if (typeof window.ACADEMY.hydrateAuthSession === 'function') {
            window.ACADEMY.hydrateAuthSession().catch(() => {});
        }
        if (typeof window.ACADEMY.scheduleCloudSync === 'function') {
            window.ACADEMY.scheduleCloudSync();
        }
    }
    renderResourcePage();
});
