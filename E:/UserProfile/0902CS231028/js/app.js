let activeCourseId = 'cs601';
let activeUnitId = 'cs601-u1';
let activeTopicId = 't1';

function initApp() {
    renderCoursesNav();
    renderCourseView();
}

function renderCoursesNav() {
    const navContainer = document.getElementById('coursesNav');
    navContainer.innerHTML = '';
    
    coursesData.forEach(course => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${course.id === activeCourseId ? 'active' : ''}`;
        btn.innerText = course.code;
        btn.onclick = () => {
            activeCourseId = course.id;
            activeUnitId = course.units[0].id; // Reset to first unit
            activeTopicId = course.units[0].topics[0].id; // Reset to first topic
            renderCoursesNav();
            renderCourseView();
        };
        navContainer.appendChild(btn);
    });
}

function renderCourseView() {
    const course = coursesData.find(c => c.id === activeCourseId);
    const container = document.getElementById('mainContent');
    
    let html = `
        <div class="animate-fadeIn flex flex-col md:flex-row gap-8 h-full">
            
            <!-- Left Sidebar: Units & Topics -->
            <div class="w-full md:w-1/3 lg:w-1/4 shrink-0 flex flex-col gap-4">
                <div class="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h2 class="text-xl font-bold text-white mb-1">${course.code}</h2>
                    <p class="text-xs text-gray-400 mb-4 line-clamp-2" title="${course.description}">${course.description}</p>
                    
                    <div class="space-y-4">
                        ${course.units.map(unit => `
                            <div>
                                <button onclick="selectUnit('${unit.id}')" class="w-full text-left font-bold py-2 px-3 rounded flex justify-between items-center transition-colors ${unit.id === activeUnitId ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'text-gray-300 hover:bg-gray-700'}">
                                    <span>Unit ${unit.unitNumber}</span>
                                    <svg class="w-4 h-4 transform transition-transform ${unit.id === activeUnitId ? 'rotate-90 text-blue-400' : 'text-gray-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </button>
                                
                                <!-- Topics List (visible if unit is active) -->
                                <div class="${unit.id === activeUnitId ? 'block' : 'hidden'} mt-2 ml-2 pl-3 border-l border-gray-700 space-y-1">
                                    ${unit.topics.map((topic, idx) => {
                                        const isTopicActive = topic.id === activeTopicId;
                                        return `
                                            <button onclick="selectTopic('${topic.id}')" class="w-full text-left py-2 px-3 text-sm rounded transition-colors ${isTopicActive ? 'bg-gray-700 text-white font-medium shadow-inner' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}">
                                                ${idx + 1}. ${topic.title}
                                            </button>
                                        `;
                                    }).join('')}
                                    
                                    <!-- Unit Exam Button -->
                                    <button onclick="selectTopic('exam')" class="w-full text-left py-2 px-3 text-sm rounded transition-colors ${activeTopicId === 'exam' ? 'bg-purple-900/40 text-purple-300 font-medium border border-purple-500/30' : 'text-purple-400 hover:bg-gray-800'} mt-2 flex items-center">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        Unit Exam
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Right Content Area -->
            <div class="w-full md:w-2/3 lg:w-3/4 bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-700 shadow-2xl overflow-y-auto">
                <div id="topicContentArea"></div>
            </div>
            
        </div>
    `;

    container.innerHTML = html;
    renderTopicContent();
}

function selectUnit(unitId) {
    if (activeUnitId === unitId) return; // Already active
    
    activeUnitId = unitId;
    // Auto-select first topic of the newly selected unit
    const course = coursesData.find(c => c.id === activeCourseId);
    const unit = course.units.find(u => u.id === unitId);
    activeTopicId = unit.topics[0].id;
    
    renderCourseView();
}

function selectTopic(topicId) {
    if (activeTopicId === topicId) return;
    activeTopicId = topicId;
    renderCourseView();
}

function renderTopicContent() {
    const contentArea = document.getElementById('topicContentArea');
    
    // Check if exam is selected
    if (activeTopicId === 'exam') {
        renderExamContent(contentArea);
        return;
    }

    // Check if we have data for this unit/topic in topicDetails
    const unitData = window.topicDetails[activeUnitId];
    if (!unitData || !unitData[activeTopicId]) {
        contentArea.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center py-20 animate-fadeIn">
                <svg class="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <h3 class="text-2xl font-bold text-gray-400 mb-2">Content Brewin'</h3>
                <p class="text-gray-500">The detailed notes and quizzes for this topic are currently being forged by our AI hamsters. Check back soon!</p>
            </div>
        `;
        return;
    }

    const topic = unitData[activeTopicId];
    
    let html = `
        <div class="animate-fadeIn">
            <h2 class="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">${topic.title}</h2>
            
            <div class="text-gray-300 leading-relaxed space-y-4">
                ${topic.content}
            </div>
            
            <hr class="border-gray-700 my-10">
            <h2 class="text-2xl font-bold text-white mb-6">Topic Knowledge Checks</h2>
    `;

    // Render Quizzes
    if (topic.quizzes && topic.quizzes.length > 0) {
        topic.quizzes.forEach((quiz, index) => {
            html += `
                <div class="mt-6 bg-gray-900 rounded-xl p-6 border border-blue-900/30 relative overflow-hidden shadow-lg">
                    <div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <h3 class="text-lg font-bold text-blue-400 mb-4 flex items-center">
                        <span class="bg-blue-900/50 text-blue-300 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2 border border-blue-700">Q${index+1}</span>
                        ${quiz.question}
                    </h3>
                    <div class="space-y-2">
                        ${quiz.options.map((opt, i) => `
                            <button onclick="checkAnswer(this, ${i}, ${quiz.answer}, '${quiz.explanation.replace(/'/g, "\\'")}')" class="w-full text-left p-3 rounded bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-750 transition-colors">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                    <div class="quiz-result mt-4 hidden p-4 rounded-lg"></div>
                </div>
            `;
        });
    }

    html += `</div>`;
    contentArea.innerHTML = html;

    // Re-render mermaid diagrams if any
    setTimeout(() => {
        if(window.mermaid) {
            try { mermaid.init(undefined, document.querySelectorAll('.mermaid')); } catch(e){}
        }
    }, 100);
}

function renderExamContent(contentArea) {
    const examData = window.topicDetails[activeUnitId].unitExam;
    
    let html = `
        <div class="animate-fadeIn max-w-3xl mx-auto py-8">
            <div class="text-center mb-10">
                <div class="w-20 h-20 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h2 class="text-4xl font-bold text-white mb-4">${examData.title}</h2>
                <p class="text-gray-400 text-lg leading-relaxed">${examData.description}</p>
            </div>
            
            <div class="space-y-8">
                <!-- Medium Questions -->
                <div class="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <div class="bg-gray-750 px-6 py-4 border-b border-gray-700">
                        <h3 class="text-xl font-bold text-yellow-500 flex items-center">
                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Medium Level Questions
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        ${examData.mediumQuestions.map((q, i) => `
                            <div>
                                <p class="text-gray-200 font-medium mb-3"><strong>Q${i+1}.</strong> ${q}</p>
                                <textarea class="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-yellow-500 transition-colors resize-y h-32" placeholder="Type your answer here..."></textarea>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Hard Questions -->
                <div class="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <div class="bg-gray-750 px-6 py-4 border-b border-gray-700">
                        <h3 class="text-xl font-bold text-red-500 flex items-center">
                            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            Hard Level Questions
                        </h3>
                    </div>
                    <div class="p-6 space-y-6">
                        ${examData.hardQuestions.map((q, i) => `
                            <div>
                                <p class="text-gray-200 font-medium mb-3"><strong>Q${i+1}.</strong> ${q}</p>
                                <textarea class="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-300 focus:outline-none focus:border-red-500 transition-colors resize-y h-48" placeholder="Type your detailed analysis here..."></textarea>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <button class="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-transform transform active:scale-95">
                    Submit Exam Responses
                </button>
            </div>
        </div>
    `;
    contentArea.innerHTML = html;
}

function checkAnswer(btnElement, selected, correct, explanation) {
    const parentContainer = btnElement.parentElement.parentElement;
    const resultDiv = parentContainer.querySelector('.quiz-result');
    const allButtons = parentContainer.querySelectorAll('button');
    
    // Disable all buttons after guessing
    allButtons.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:border-blue-500', 'hover:bg-gray-750');
        b.classList.add('opacity-50', 'cursor-not-allowed');
    });

    resultDiv.classList.remove('hidden');
    
    if (selected === correct) {
        btnElement.classList.remove('border-gray-700', 'bg-gray-800');
        btnElement.classList.add('border-green-500', 'bg-green-900/40', 'opacity-100');
        
        resultDiv.className = 'quiz-result mt-4 p-4 rounded-lg bg-green-900/20 border border-green-800/50 text-green-400 animate-fadeIn';
        resultDiv.innerHTML = `<p class="font-bold mb-1 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Spot on!</p><p class="text-sm">${explanation}</p>`;
    } else {
        btnElement.classList.remove('border-gray-700', 'bg-gray-800');
        btnElement.classList.add('border-red-500', 'bg-red-900/40', 'opacity-100');
        
        // Highlight correct answer
        allButtons[correct].classList.remove('border-gray-700', 'bg-gray-800', 'opacity-50');
        allButtons[correct].classList.add('border-green-500', 'bg-green-900/40', 'opacity-100');

        resultDiv.className = 'quiz-result mt-4 p-4 rounded-lg bg-red-900/20 border border-red-800/50 text-red-400 animate-fadeIn';
        resultDiv.innerHTML = `<p class="font-bold mb-1 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Incorrect.</p><p class="text-sm text-gray-300">${explanation}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('coursesNav')) {
        initApp();
    }
});
