function renderProfilePage() {
    const stats = window.ACADEMY.calculateStats();
    const studentName = window.ACADEMY.getStudentName() || 'Student';
    const recentTopics = window.ACADEMY.getRecentTopics();
    const bookmarks = window.ACADEMY.getBookmarkedTopics();
    const sessions = window.ACADEMY.getPracticeSessions();

    document.getElementById('profileHero').innerHTML = `
        <div>
            <p class="revision-label">Personal progress</p>
            <h2 class="text-3xl font-extrabold text-white">${studentName}'s learning snapshot</h2>
            <p class="text-slate-400 mt-2">This page summarizes what the student has studied on this device so far.</p>
        </div>
        <a href="../index.html" class="secondary-cta">Return to curriculum</a>
    `;

    document.getElementById('profileStats').innerHTML = `
        <article class="metric-card"><p class="metric-label">Completion</p><div class="metric-value">${stats.completionRate}%</div><p class="metric-subtext">${stats.completedTopics}/${stats.totalTopics} topics covered</p></article>
        <article class="metric-card"><p class="metric-label">Accuracy</p><div class="metric-value">${stats.quizAccuracy}%</div><p class="metric-subtext">${stats.correctAnswers}/${stats.totalAttempts} quiz answers correct</p></article>
        <article class="metric-card"><p class="metric-label">Bookmarks</p><div class="metric-value">${bookmarks.length}</div><p class="metric-subtext">Saved weak or important topics</p></article>
        <article class="metric-card"><p class="metric-label">Mock sessions</p><div class="metric-value">${sessions.length}</div><p class="metric-subtext">Stored timed or drill sessions</p></article>
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
                        <p class="metric-label">${topic.courseCode} • Unit ${topic.unitNumber}</p>
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
                        <p class="text-sm text-slate-400 mt-2">${session.correct}/${session.total} correct • ${session.accuracy}% • ${session.mode}</p>
                    </div>
                `).join('') : '<p class="text-slate-400">No mock history yet. Complete a drill or timed mock from the tests page.</p>'}
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', renderProfilePage);
