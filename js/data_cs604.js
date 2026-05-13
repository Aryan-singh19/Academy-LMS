window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs604-u1': {
        'c4-u1t1': {
            title: 'Waterfall & SDLC',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Software Development Life Cycle (SDLC)</h3>
<p class="mb-4">The SDLC is a structured process used by software industries to design, develop, and test high-quality software. The goal is to produce software that meets or exceeds customer expectations, reaches completion within times and cost estimates.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The Waterfall Model: The Old School Approach</h3>
<p class="mb-4 text-gray-300">Invented in the 1970s, Waterfall is a linear, sequential approach to software development. You must completely finish one phase before you can move on to the next. There is no going back.</p>

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    A[Requirements Analysis] --> B[System Design]
    B --> C[Implementation / Coding]
    C --> D[Testing]
    D --> E[Deployment]
    E --> F[Maintenance]
    style A fill:#2d3748,stroke:#4a5568,color:#fff
    style B fill:#2d3748,stroke:#4a5568,color:#fff
    style C fill:#2b6cb0,stroke:#2c5282,color:#fff
    style D fill:#c53030,stroke:#9b2c2c,color:#fff
    style E fill:#2f855a,stroke:#276749,color:#fff
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-red-500 shadow-lg">
        <h4 class="text-red-400 font-bold mb-2">The Problem with Waterfall</h4>
        <p class="text-gray-300 text-sm mb-2">It assumes that requirements are perfectly known upfront. If the client changes their mind during the 'Testing' phase, you are completely doomed.</p>
        <p class="text-gray-300 text-sm">Working software is not produced until late during the life cycle. It has high amounts of risk and uncertainty.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg">
        <h4 class="text-green-400 font-bold mb-2">When to use Waterfall?</h4>
        <p class="text-gray-300 text-sm mb-2">When requirements are very well documented, clear, and absolutely fixed. Example: Building software for a medical device or a nuclear reactor where changing code on the fly is illegal or dangerous.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary drawback of the Waterfall model?",
                    options: [
                        "A) It is too fast and causes burnout.",
                        "B) It is highly rigid; accommodating changes after the process has started is difficult and expensive.",
                        "C) It requires too much hardware.",
                        "D) It only works for web applications."
                    ],
                    answer: 1,
                    explanation: "Waterfall's linearity means going 'upstream' to fix a fundamental design flaw during the testing phase is disastrously expensive."
                }
            ]
        },
        'c4-u1t2': {
            title: 'Agile & Scrum Methodologies',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Agile: Moving Fast and Breaking Things</h3>
<p class="mb-4">The Agile Manifesto (2001) revolutionized software engineering. Instead of massive, multi-year linear projects, Agile proposes building software in tiny, iterative cycles (called Sprints). You build a small piece of working software, show it to the client, get feedback, and adapt immediately.</p>

<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded border border-gray-700">
    <li><strong>Individuals and interactions</strong> over processes and tools.</li>
    <li><strong>Working software</strong> over comprehensive documentation.</li>
    <li><strong>Customer collaboration</strong> over contract negotiation.</li>
    <li><strong>Responding to change</strong> over following a rigid plan.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-purple-400">Scrum Framework</h3>
<p class="mb-4">Scrum is the most popular way to implement Agile. It organizes chaos into a highly structured, recurring loop.</p>
<table class="w-full text-left border-collapse mb-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-800 text-gray-200">
        <tr>
            <th class="p-4">Scrum Term</th>
            <th class="p-4">Definition</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-800">
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-blue-300">Sprint</td>
            <td class="p-4">A short, fixed timeframe (usually 2 weeks) to complete a set amount of work.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-yellow-300">Product Backlog</td>
            <td class="p-4">The master "To-Do List" of everything the software needs, maintained by the Product Owner.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-green-300">Daily Stand-up</td>
            <td class="p-4">A strict 15-minute daily meeting where developers say what they did yesterday, what they will do today, and if they are blocked.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-red-300">Scrum Master</td>
            <td class="p-4">A role dedicated to removing blockers for the developers and ensuring Scrum rules are followed. (Basically a shield against management).</td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "In the Scrum framework, what is the purpose of the Daily Stand-up?",
                    options: [
                        "A) To write code collaboratively.",
                        "B) To quickly sync up the team, discuss progress, and identify blockers.",
                        "C) To formally document software requirements for the client.",
                        "D) To present the final software to stakeholders."
                    ],
                    answer: 1,
                    explanation: "It's a fast-paced, 15-minute sync meeting designed purely for alignment and unblocking developers, not for deep technical problem-solving."
                }
            ],
            references: [
                { title: "Agile Manifesto", url: "https://agilemanifesto.org/" }
            ]
        }
    },
    'cs604-u2': {
        'c4-u2t1': {
            title: 'COCOMO Model',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">COCOMO: Constructive Cost Model</h3>
<p class="mb-4">How do you charge a client for software that hasn't been built yet? If you guess randomly, you either overcharge and lose the bid, or undercharge and go bankrupt. <strong>Barry Boehm</strong> invented COCOMO in 1981 to mathematically estimate the cost, effort, and schedule of software projects.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg mb-6">
    <h4 class="text-purple-400 font-bold mb-2">The Base Metric: KLOC</h4>
    <p class="text-gray-300 text-sm">COCOMO's fundamental input is <strong>Kilo Lines of Code (KLOC)</strong>. You have to guess how many thousands of lines of code the final project will be. Yes, guessing lines of code before you start writing is notoriously difficult, which is the primary criticism of COCOMO.</p>
</div>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The Three Modes of COCOMO</h3>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6">
    <li><strong>Organic Mode:</strong> Small teams, highly experienced, working in a familiar environment. Requirements are flexible. (e.g., A small internal payroll app).</li>
    <li><strong>Semi-Detached Mode:</strong> Medium-sized teams, mixed experience. The project is somewhat complex. (e.g., A new database system for a university).</li>
    <li><strong>Embedded Mode:</strong> Large projects with extremely rigid constraints and high complexity. Hardware/Software tightly coupled. (e.g., Flight control software for a fighter jet).</li>
</ul>

<div class="bg-gray-900 p-4 border border-gray-700 rounded mb-6 text-center shadow-inner font-mono text-sm text-green-400">
    Effort (Person-Months) = a * (KLOC)^b
</div>
<p class="mb-4 text-gray-400 text-sm italic">The constants 'a' and 'b' change depending on whether you are in Organic, Semi-Detached, or Embedded mode.</p>
            `,
            quizzes: [
                {
                    question: "Which COCOMO mode applies to a highly complex software system with rigid constraints, such as avionics software?",
                    options: ["A) Organic", "B) Semi-Detached", "C) Embedded", "D) Agile"],
                    answer: 2,
                    explanation: "Embedded projects operate under tight constraints (memory, speed, safety) and require rigorous planning and effort."
                }
            ]
        },
        'c4-u2t2': {
            title: 'PERT & Gantt Charts',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Visualizing the Chaos of Scheduling</h3>
<p class="mb-4">Once you have an estimate, you need a schedule. Visualizing dependencies is crucial—you cannot paint a wall before the drywall is installed.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Gantt Charts</h3>
<p class="mb-4 text-gray-300 text-sm">Invented by Henry Gantt, this is a horizontal bar chart that represents a project schedule. The X-axis is time, and the Y-axis lists the tasks.</p>

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
gantt
    title A Simple Software Project
    dateFormat  YYYY-MM-DD
    section Design
    Requirements Analysis :a1, 2026-01-01, 7d
    System Architecture   :a2, after a1, 5d
    section Development
    Database Setup        :a3, after a2, 3d
    Backend API           :a4, after a3, 10d
    Frontend UI           :a5, after a3, 10d
    section Testing
    Integration Tests     :a6, after a4, 5d
</div>

<h3 class="text-xl font-bold mb-2 text-purple-400">PERT Charts (Program Evaluation Review Technique)</h3>
<p class="mb-4 text-gray-300 text-sm">While Gantt charts are great for seeing timelines, PERT charts look like network diagrams. They are superior for identifying the <strong>Critical Path</strong>. The Critical Path is the longest sequence of dependent tasks. If ANY task on the critical path is delayed by 1 day, the ENTIRE project is delayed by 1 day.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded border border-gray-700">
    <li>PERT calculates time probabilistically using three estimates: <strong>Optimistic (O)</strong>, <strong>Most Likely (M)</strong>, and <strong>Pessimistic (P)</strong>.</li>
    <li>Expected Time = (O + 4M + P) / 6</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In project management, what is the 'Critical Path'?",
                    options: [
                        "A) The path that requires the most money.",
                        "B) The sequence of tasks that determines the shortest possible time to complete the project.",
                        "C) The easiest tasks in the project.",
                        "D) The tasks assigned to the Project Manager."
                    ],
                    answer: 1,
                    explanation: "It's the longest chain of dependent tasks. Because they depend on each other, you cannot shorten the project time without shortening the critical path."
                }
            ]
        }
    },
    'cs604-u3': {
        'c4-u3t1': {
            title: 'Risk Identification & Assessment',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">What Could Go Wrong?</h3>
<p class="mb-4">In software development, Murphy's Law is absolute: anything that can go wrong, will go wrong. Servers will crash, key developers will quit, and APIs will be deprecated. <strong>Risk Management</strong> is the formal process of predicting these disasters before they happen.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Types of Risks</h3>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-4 rounded border border-gray-700">
    <li><strong>Project Risks:</strong> Affect the schedule or resources. (e.g., The budget is slashed by 20%).</li>
    <li><strong>Technical Risks:</strong> Affect the quality or feasibility of the software. (e.g., A required 3rd-party library is too slow).</li>
    <li><strong>Business Risks:</strong> Affect the viability of the software. (e.g., A competitor launches a better product before you do).</li>
</ul>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-md">
    <h4 class="text-red-400 font-bold mb-2">Risk Exposure Formula</h4>
    <p class="text-gray-300 text-sm mb-2">You cannot worry about everything equally. You must calculate the Risk Exposure (RE) to prioritize.</p>
    <p class="text-green-400 font-mono text-sm">RE = Probability of Failure × Cost of Failure</p>
    <p class="text-gray-300 text-sm mt-2">A 1% chance of a catastrophic database deletion is a higher priority than a 90% chance of a button being slightly misaligned.</p>
</div>
            `,
            quizzes: [
                {
                    question: "How is 'Risk Exposure' mathematically calculated?",
                    options: [
                        "A) By adding the project budget to the project timeline.",
                        "B) By multiplying the Probability of the risk occurring by the Cost (or Impact) if it does occur.",
                        "C) By counting the number of bugs in the code.",
                        "D) By using the COCOMO model."
                    ],
                    answer: 1,
                    explanation: "Risk Exposure helps managers prioritize. A highly probable risk that causes zero damage is safely ignored. A highly improbable risk that destroys the company must be addressed."
                }
            ]
        },
        'c4-u3t2': {
            title: 'RMMM Plans (Mitigation)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">RMMM: Risk Mitigation, Monitoring, and Management</h3>
<p class="mb-4">Once you identify a high-exposure risk, you must create a formal plan to deal with it. This is the RMMM document.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Phase</th>
            <th class="p-3">Explanation</th>
            <th class="p-3 text-purple-300">Example (Risk: Lead Dev Quits)</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-green-400">Mitigation</td><td class="p-3">Proactive steps taken *before* the disaster to lower the probability.</td><td class="p-3">Implement pair programming so knowledge is shared.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-blue-400">Monitoring</td><td class="p-3">Watching for warning signs that the risk is about to happen.</td><td class="p-3">Notice that the Lead Dev is updating their LinkedIn profile.</td></tr>
        <tr class="hover:bg-gray-750 transition-colors"><td class="p-3 font-bold text-red-400">Management</td><td class="p-3">The Contingency Plan. What to do when the disaster actually strikes.</td><td class="p-3">Have a contract with a freelance agency ready to sign immediately.</td></tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "In an RMMM plan, what is the difference between Mitigation and Management?",
                    options: [
                        "A) Mitigation is done by developers; Management is done by the CEO.",
                        "B) Mitigation happens after the disaster to clean up; Management happens before.",
                        "C) Mitigation consists of proactive steps to reduce the likelihood of the risk; Management is the reactive contingency plan executed when the risk actually becomes a reality.",
                        "D) There is no difference."
                    ],
                    answer: 2,
                    explanation: "Mitigation is wearing a seatbelt. Management is calling the ambulance after the crash."
                }
            ]
        }
    },
    'cs604-u4': {
        'c4-u4t1': {
            title: 'Version Control (Git) & Baselines',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Software Configuration Management (SCM)</h3>
<p class="mb-4">When 50 developers are modifying the same 10,000 files simultaneously, chaos ensues. SCM is the discipline of managing and tracking changes to software code over time. Without SCM, you get files named <code>final_code_v3_REAL_final_fixed.zip</code>.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Version Control Systems (Git)</h3>
<p class="mb-4 text-gray-300 text-sm">Git, invented by Linus Torvalds, is the industry standard distributed version control system. It takes "snapshots" (commits) of the entire codebase.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-4 rounded border border-gray-700">
    <li><strong>Branching:</strong> Allows a developer to create a parallel universe of the code, safely experiment, and then merge it back into the main timeline.</li>
    <li><strong>Blame:</strong> A command that shows exactly which developer wrote which line of code, and when. Crucial for debugging (and pointing fingers).</li>
</ul>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg mb-6">
    <h4 class="text-green-400 font-bold mb-2">What is a Baseline?</h4>
    <p class="text-gray-300 text-sm">A baseline is a milestone in the development process that has been formally reviewed and agreed upon (e.g., "Version 1.0 Release Candidate"). Once a baseline is established, it cannot be changed casually. Any modifications require formal approval.</p>
</div>
            `,
            quizzes: [
                {
                    question: "In Software Configuration Management, what does it mean to establish a 'Baseline'?",
                    options: [
                        "A) Deleting all previous versions of the code.",
                        "B) Establishing a formally reviewed and approved milestone version of the software that can only be changed through a formal change control process.",
                        "C) Writing the base classes in object-oriented programming.",
                        "D) Pushing code to GitHub."
                    ],
                    answer: 1,
                    explanation: "A baseline acts as a stable foundation. You know it works, and you agree to lock it down so you can build the next phase on top of it without the foundation shifting."
                }
            ]
        },
        'c4-u4t2': {
            title: 'Change Control Boards (CCB)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Bureaucracy of Code</h3>
<p class="mb-4">In a large enterprise project, a developer cannot just push a random change directly to the production server. A seemingly small change (like altering a database column) might crash a completely different department's application.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">The Change Control Board (CCB)</h3>
<p class="mb-4 text-gray-300 text-sm">The CCB is a committee that evaluates and approves every single proposed change to the baselined software. It usually consists of project managers, lead architects, and QA testers.</p>

<ol class="list-decimal pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li>A developer submits a <strong>Change Request (CR)</strong>.</li>
    <li>The CCB reviews the CR to evaluate technical feasibility, cost, and potential impact on other systems.</li>
    <li>If approved, the CCB issues an <strong>Engineering Change Order (ECO)</strong> authorizing the developer to write the code.</li>
    <li>The code is written, audited, and merged.</li>
</ol>
            `,
            quizzes: [
                {
                    question: "What is the primary responsibility of a Change Control Board (CCB)?",
                    options: [
                        "A) To write the code for difficult features.",
                        "B) To formally evaluate, approve, or reject proposed changes to a baselined software system based on cost and impact.",
                        "C) To hire and fire developers.",
                        "D) To manage the GitHub repository servers."
                    ],
                    answer: 1,
                    explanation: "The CCB is the gatekeeper. They prevent cowboy developers from breaking the production environment with untested or highly disruptive changes."
                }
            ]
        }
    },
    'cs604-u5': {
        'c4-u5t1': {
            title: 'CI/CD Pipelines',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">DevOps: Bridging the Gap</h3>
<p class="mb-4">Historically, <strong>Developers (Dev)</strong> wrote the code, tossed it over a wall to <strong>Operations (Ops)</strong>, and told them to run it on the servers. This caused massive friction, because Devs want to release new features constantly, but Ops wants stability and hates changes. <strong>DevOps</strong> is a cultural and technical philosophy that merges these teams.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Continuous Integration (CI)</h3>
<p class="mb-4 text-gray-300 text-sm">Whenever a developer pushes code to GitHub, a cloud server (like GitHub Actions or Jenkins) automatically downloads the code, compiles it, and runs every single automated unit test. If any test fails, the code is rejected immediately. This ensures the main branch is NEVER broken.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Continuous Deployment (CD)</h3>
<p class="mb-4 text-gray-300 text-sm">If the CI tests pass, the CD pipeline automatically takes the compiled code and pushes it directly to the live production servers without human intervention. Companies like Amazon deploy new code to production every 11 seconds using CI/CD.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary goal of Continuous Integration (CI)?",
                    options: [
                        "A) To keep developers working continuously without breaks.",
                        "B) To automatically build and test code every time a change is committed, preventing broken code from entering the main repository.",
                        "C) To integrate the frontend UI with the backend database.",
                        "D) To write unit tests automatically using AI."
                    ],
                    answer: 1,
                    explanation: "CI acts as an automated bouncer. If your code breaks the tests, the CI server rejects your commit."
                }
            ]
        },
        'c4-u5t2': {
            title: 'Docker & Microservices Architecture',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">"It works on my machine!"</h3>
<p class="mb-4">The most infamous excuse in software engineering. A developer writes code on a Mac running Python 3.9, but the production server is Linux running Python 3.7. The code crashes.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg mb-6">
    <h4 class="text-blue-400 font-bold mb-2">Docker (Containerization)</h4>
    <p class="text-gray-300 text-sm mb-2">Docker solves this by packaging the code, the exact version of Python, and the exact operating system libraries into a single, standardized box called a <strong>Container</strong>.</p>
    <p class="text-gray-300 text-sm">If the container runs on the developer's laptop, it is mathematically guaranteed to run identically on an AWS server.</p>
</div>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Microservices vs Monoliths</h3>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>Monolith:</strong> The old way. The entire application (Login, Billing, Shopping Cart) is compiled into one massive file. If the Shopping Cart breaks, the whole app crashes. You must re-deploy the entire massive file to fix a typo.</li>
    <li><strong>Microservices:</strong> The DevOps way. The application is broken into dozens of tiny, independent Docker containers. The Login service is completely separate from the Billing service. If Billing crashes, people can still Login. You can update and deploy the Shopping Cart 10 times a day without touching the rest of the app.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "How does Docker solve the 'It works on my machine' problem?",
                    options: [
                        "A) By forcing all developers to use Windows.",
                        "B) By packaging the application code along with its exact dependencies and operating system environment into a standardized container that runs identically anywhere.",
                        "C) By converting the code into Machine Learning models.",
                        "D) By uploading the code to the blockchain."
                    ],
                    answer: 1,
                    explanation: "Docker containers carry their own environment with them, ensuring absolute consistency between a local laptop and a production cloud server."
                }
            ]
        }
    }
});

Object.assign(window.topicDetails['cs604-u1'], {
    'c4-u1t3': {
        title: 'Stakeholders, Communication & Requirement Drift',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Projects Fail Quietly Before They Fail Publicly</h3>
<p class="mb-4">Many projects do not collapse because the team is lazy. They collapse because stakeholders are misaligned, expectations are vague, and requirements mutate every week like they discovered a gym membership and a personality shift at the same time.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Stakeholder</th>
            <th class="p-3">What they care about</th>
            <th class="p-3">Risk if ignored</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">Client</td><td class="p-3">Business value</td><td class="p-3">Wrong product delivered</td></tr>
        <tr><td class="p-3">Users</td><td class="p-3">Usability</td><td class="p-3">Adoption failure</td></tr>
        <tr><td class="p-3">Developers</td><td class="p-3">Feasibility and clarity</td><td class="p-3">Rework and frustration</td></tr>
    </tbody>
</table>

<p class="text-gray-300 text-sm">Requirement drift is normal. The trick is not pretending change will never happen; it is building a communication rhythm that catches change before the sprint board turns into modern art.</p>
        `,
        quizzes: [
            {
                question: 'What is requirement drift?',
                options: ['A) Random CPU failure', 'B) Gradual change in project requirements over time', 'C) A network protocol', 'D) A type of UML diagram'],
                answer: 1,
                explanation: 'Requirements drift means expectations shift over time, often due to new learning or changing business needs.'
            },
            {
                question: 'Why is stakeholder communication important?',
                options: ['A) It reduces clarity', 'B) It keeps expectations, decisions, and priorities aligned', 'C) It replaces testing', 'D) It removes scheduling needs'],
                answer: 1,
                explanation: 'Good communication prevents teams from building the wrong thing very efficiently.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u2'], {
    'c4-u2t6': {
        title: 'Critical Path, Float & Schedule Compression',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Critical Path: The Project's Mood Swing Trigger</h3>
<p class="mb-4">The <strong>Critical Path</strong> is the longest chain of dependent tasks in the project. If even one task on that path slips, the whole project slips. It is basically the project's most dramatic friend: late by 20 minutes and now everyone's plan is ruined.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-800 text-gray-200">
        <tr>
            <th class="p-4">Concept</th>
            <th class="p-4">Meaning</th>
            <th class="p-4">Quick exam cue</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-800 text-sm">
        <tr><td class="p-4 font-bold text-blue-300">Critical Path</td><td class="p-4">Longest dependency chain that decides total project duration.</td><td class="p-4">Zero slack.</td></tr>
        <tr><td class="p-4 font-bold text-green-300">Float / Slack</td><td class="p-4">How long a task can slip without delaying the whole project.</td><td class="p-4">Non-critical tasks may have positive float.</td></tr>
        <tr><td class="p-4 font-bold text-yellow-300">Fast Tracking</td><td class="p-4">Run tasks in parallel that were originally sequential.</td><td class="p-4">Faster, but riskier.</td></tr>
        <tr><td class="p-4 font-bold text-red-300">Crashing</td><td class="p-4">Add more resources to shorten critical tasks.</td><td class="p-4">Costs more money.</td></tr>
    </tbody>
</table>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-cyan-500 shadow-md">
    <h4 class="text-cyan-300 font-bold mb-2">Real-life example</h4>
    <p class="text-gray-300 text-sm">If the backend API, database schema, and payment gateway all block launch, they sit on the critical path. Meanwhile, changing the footer color has float. The footer may be loud, but it is not blocking release.</p>
</div>
        `,
        quizzes: [
            {
                question: "What does 'float' mean in project scheduling?",
                options: [
                    "A) The amount of money reserved for emergencies.",
                    "B) The time a task can be delayed without delaying the project or successor milestones.",
                    "C) The total number of developers on standby.",
                    "D) The number of tasks in the backlog."
                ],
                answer: 1,
                explanation: "Float or slack tells you how much breathing room a task has. Critical path tasks usually have zero float."
            },
            {
                question: "Which schedule compression technique usually increases cost directly?",
                options: ["A) Crashing", "B) Fast tracking", "C) Buffering", "D) Escalation"],
                answer: 0,
                explanation: "Crashing means throwing extra resources at critical tasks, so it usually shortens time by spending more money."
            }
        ]
    },
    'c4-u2t3': {
        title: 'Earned Value Management (EVM)',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Measuring Whether the Project Is Actually on Track</h3>
<p class="mb-4">A manager saying "we are 80% done" without a measurement model is basically performing optimistic fiction. <strong>Earned Value Management</strong> compares planned work, completed work, and actual spending.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong>PV (Planned Value):</strong> Budgeted cost of scheduled work.</li>
    <li><strong>EV (Earned Value):</strong> Budgeted cost of work actually completed.</li>
    <li><strong>AC (Actual Cost):</strong> Real money spent so far.</li>
</ul>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Metric</th>
            <th class="p-3">Formula</th>
            <th class="p-3">Meaning</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">SV</td><td class="p-3">EV - PV</td><td class="p-3">Schedule variance</td></tr>
        <tr><td class="p-3">CV</td><td class="p-3">EV - AC</td><td class="p-3">Cost variance</td></tr>
        <tr><td class="p-3">CPI</td><td class="p-3">EV / AC</td><td class="p-3">Cost efficiency</td></tr>
    </tbody>
</table>
        `,
        quizzes: [
            {
                question: 'What does EV represent in EVM?',
                options: ['A) Estimated voltage', 'B) Earned Value: the budgeted value of completed work', 'C) Event variance', 'D) Engineering visibility'],
                answer: 1,
                explanation: 'Earned Value measures how much planned value has actually been delivered.'
            },
            {
                question: 'If EV is less than AC, what does that usually suggest?',
                options: ['A) Under budget', 'B) Over budget', 'C) Ahead of schedule automatically', 'D) Perfect execution'],
                answer: 1,
                explanation: 'If actual spending exceeds earned value, cost performance is poor and the project is likely over budget.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u3'], {
    'c4-u3t3': {
        title: 'Risk Register, Heat Maps & Escalation',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">A Risk Nobody Writes Down Is a Surprise Waiting for a Meeting</h3>
<p class="mb-4">Professional teams maintain a <strong>risk register</strong>: a living list of threats, owners, triggers, responses, and current status. It is less glamorous than product demos, but dramatically better for sleeping at night.</p>

<div class="mermaid bg-gray-900 p-5 rounded-lg mb-6 border border-gray-700">
quadrantChart
    title Risk Heat Map
    x-axis Low Impact --> High Impact
    y-axis Low Probability --> High Probability
    quadrant-1 Escalate now
    quadrant-2 Watch closely
    quadrant-3 Minor concern
    quadrant-4 Backup plans
</div>

<p class="text-gray-300 text-sm">Heat maps help teams visualize which risks deserve immediate attention. Escalation matters when a risk crosses thresholds beyond the team’s authority, budget, or timeline tolerance.</p>
        `,
        quizzes: [
            {
                question: 'What is a risk register?',
                options: ['A) A list of random bugs only', 'B) A documented record of identified risks and their management details', 'C) A salary ledger', 'D) A code parser'],
                answer: 1,
                explanation: 'A risk register tracks risks, owners, impact, response plans, and current status.'
            },
            {
                question: 'Why are heat maps useful in risk management?',
                options: ['A) They add colors for decoration only', 'B) They visually prioritize risks by impact and probability', 'C) They eliminate all uncertainty', 'D) They replace mitigation planning'],
                answer: 1,
                explanation: 'Heat maps make it easier to identify which risks are severe enough to escalate quickly.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u4'], {
    'c4-u4t3': {
        title: 'Build, Release & Environment Management',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Shipping Software Without Causing Ceremonial Damage</h3>
<p class="mb-4">Configuration management is not only about versioning code. It is also about controlling <strong>builds</strong>, <strong>releases</strong>, and environments such as dev, staging, and production.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong>Build management:</strong> producing repeatable artifacts from source code.</li>
    <li><strong>Release management:</strong> planning what changes go out, when, and with rollback plans.</li>
    <li><strong>Environment management:</strong> making sure dev, test, and production do not drift into three different universes.</li>
</ul>

<p class="text-gray-300 text-sm">A classic disaster is "it worked in staging." Usually that means production had different configuration, secrets, data volume, or permissions. In short: same code, different environment, maximum embarrassment.</p>
        `,
        quizzes: [
            {
                question: 'Why is environment management important?',
                options: ['A) To make all laptops identical colors', 'B) To reduce differences between development, testing, and production setups', 'C) To replace documentation', 'D) To avoid version control'],
                answer: 1,
                explanation: 'Controlling environments reduces deployment surprises caused by inconsistent configurations.'
            },
            {
                question: 'What is release management mainly concerned with?',
                options: ['A) Random daily coding', 'B) Planning and controlling what changes are deployed and when', 'C) Only UI design', 'D) Only employee leave'],
                answer: 1,
                explanation: 'Release management coordinates the timing, scope, and safety of production changes.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u5'], {
    'c4-u5t3': {
        title: 'Observability, SRE & Incident Response',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Keeping Systems Alive After Launch</h3>
<p class="mb-4">Deploying software is not the finish line. It is the moment the real world begins filing complaints. Modern teams use observability and incident response practices to understand failures fast and recover before users completely lose patience.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Signal</th>
            <th class="p-3">Purpose</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3 font-bold text-blue-400">Metrics</td><td class="p-3">Track trends like latency, CPU, error rate</td></tr>
        <tr><td class="p-3 font-bold text-green-400">Logs</td><td class="p-3">Detailed event records for debugging</td></tr>
        <tr><td class="p-3 font-bold text-purple-400">Traces</td><td class="p-3">Follow a request across services</td></tr>
    </tbody>
</table>

<p class="text-gray-300 text-sm"><strong>Site Reliability Engineering (SRE)</strong> treats reliability as an engineering goal. During incidents, teams triage, communicate, mitigate, and then run a blameless postmortem so the same fire does not return wearing a fake moustache next week.</p>
        `,
        quizzes: [
            {
                question: 'What is the goal of observability?',
                options: ['A) To hide failures better', 'B) To understand system behavior using signals like metrics, logs, and traces', 'C) To replace deployment pipelines', 'D) To remove monitoring'],
                answer: 1,
                explanation: 'Observability helps engineers understand what is happening inside systems, especially during failures.'
            },
            {
                question: 'What usually happens after a serious incident in mature teams?',
                options: ['A) Nothing at all', 'B) A blameless postmortem to learn and improve', 'C) Deleting all logs', 'D) Disabling alerts forever'],
                answer: 1,
                explanation: 'Postmortems focus on learning, prevention, and system improvement rather than blame.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u1'], {
    'c4-u1t4': {
        title: 'Project Life Cycle & Phase Gates',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Projects Move Through Stages, Not Vibes</h3>
<p class="mb-4">A project life cycle usually includes initiation, planning, execution, monitoring, and closure. <strong>Phase gates</strong> are decision checkpoints between stages where leadership asks, "Do we continue, fix course, or stop before this becomes expensive fan fiction?"</p>
        `,
        quizzes: [
            {
                question: 'What is the purpose of a phase gate?',
                options: ['A) To permanently block developers', 'B) To review project readiness before moving to the next stage', 'C) To replace all schedules', 'D) To delete risk logs'],
                answer: 1,
                explanation: 'Phase gates help organizations make structured go/no-go decisions at major milestones.'
            }
        ],
        references: [
            { title: 'Project management (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Project_management' }
        ]
    },
    'c4-u1t5': {
        title: 'Feasibility Study & Business Case',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Should We Even Start This Project?</h3>
<p class="mb-4">Before building anything, teams examine <strong>technical</strong>, <strong>economic</strong>, <strong>operational</strong>, and <strong>schedule</strong> feasibility. The business case explains why the project deserves time, money, and several people's blood pressure.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li>Technical feasibility: can the solution actually be built?</li>
    <li>Economic feasibility: is the value worth the cost?</li>
    <li>Operational feasibility: will people adopt and support it?</li>
    <li>Schedule feasibility: can it happen in time?</li>
</ul>
        `,
        quizzes: [
            {
                question: 'Which feasibility question asks whether the project is worth its cost?',
                options: ['A) Technical', 'B) Economic', 'C) Operational', 'D) Legal only'],
                answer: 1,
                explanation: 'Economic feasibility focuses on financial value versus investment.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u2'], {
    'c4-u2t4': {
        title: 'Work Breakdown Structure (WBS)',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Breaking Big Work into Smaller, Less Terrifying Work</h3>
<p class="mb-4">A <strong>WBS</strong> divides the project into manageable deliverables and tasks. If the full project is one elephant, the WBS is how you stop pretending you can eat it in one bite.</p>

<div class="mermaid bg-gray-900 p-5 rounded-lg mb-6 border border-gray-700">
flowchart TD
    P[Project] --> A[Frontend]
    P --> B[Backend]
    P --> C[Testing]
    A --> A1[UI screens]
    A --> A2[Validation]
</div>
        `,
        quizzes: [
            {
                question: 'What is the main purpose of a WBS?',
                options: ['A) To increase ambiguity', 'B) To decompose the project into smaller manageable components', 'C) To replace budgeting', 'D) To avoid scheduling'],
                answer: 1,
                explanation: 'A WBS creates structure by breaking a large project into smaller deliverables and tasks.'
            }
        ]
    },
    'c4-u2t5': {
        title: 'Resource Allocation & Leveling',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Schedules Look Great Until the Same Person Is Assigned to Five Things at Once</h3>
<p class="mb-4">Resource allocation assigns people, tools, and budget to activities. <strong>Resource leveling</strong> adjusts the schedule when demand exceeds available capacity.</p>

<p class="text-gray-300 text-sm">If one developer is somehow scheduled to design the UI, build the API, run testing, and attend three meetings at 10 AM, leveling is the process that politely tells the plan to return to reality.</p>
        `,
        quizzes: [
            {
                question: 'What problem does resource leveling address?',
                options: ['A) Too many backups', 'B) Over-allocation of limited resources', 'C) Missing CSS colors', 'D) IP collisions'],
                answer: 1,
                explanation: 'Resource leveling smooths schedules when available people or assets are overbooked.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u3'], {
    'c4-u3t4': {
        title: 'Qualitative vs Quantitative Risk Analysis',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Two Ways to Judge Risk</h3>
<p class="mb-4"><strong>Qualitative analysis</strong> ranks risks using labels like low, medium, and high. <strong>Quantitative analysis</strong> assigns numeric estimates such as probability percentages or expected monetary value.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Type</th>
            <th class="p-3">Best for</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">Qualitative</td><td class="p-3">Fast prioritization</td></tr>
        <tr><td class="p-3">Quantitative</td><td class="p-3">Financial and schedule modeling</td></tr>
    </tbody>
</table>
        `,
        quizzes: [
            {
                question: 'Which risk analysis style uses numeric values like probability percentages or expected loss?',
                options: ['A) Qualitative', 'B) Quantitative', 'C) Narrative only', 'D) Lexical'],
                answer: 1,
                explanation: 'Quantitative risk analysis uses numbers to estimate impact and exposure more precisely.'
            }
        ]
    },
    'c4-u3t5': {
        title: 'Contingency, Fallback & Reserves',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Planning for the Plan to Go Wrong</h3>
<p class="mb-4">A <strong>contingency plan</strong> explains what to do if a known risk occurs. A <strong>fallback plan</strong> is the backup when even the contingency is not enough. <strong>Reserves</strong> are extra budget or time set aside for uncertainty.</p>

<p class="text-gray-300 text-sm">In simpler terms: contingency is carrying an umbrella, fallback is knowing which shop sells umbrellas nearby, and reserves are the money you kept because weather forecasts routinely develop trust issues.</p>
        `,
        quizzes: [
            {
                question: 'What is a contingency reserve mainly used for?',
                options: ['A) Decorating status reports', 'B) Handling known-unknown project risks', 'C) Replacing all budgets', 'D) Avoiding communication'],
                answer: 1,
                explanation: 'Contingency reserves are set aside for anticipated uncertainty tied to identified risks.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u4'], {
    'c4-u4t4': {
        title: 'Configuration Audits & Status Accounting',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Knowing What Changed, Who Approved It, and Whether It Matches Reality</h3>
<p class="mb-4"><strong>Status accounting</strong> tracks configuration items and their current states. <strong>Configuration audits</strong> verify that the actual product matches approved records and baselines.</p>

<p class="text-gray-300 text-sm">This is the part of SCM that stops teams from confidently saying "version 2.1 is deployed" when production is actually running "2.1-final-final-please-work".</p>
        `,
        quizzes: [
            {
                question: 'What is configuration auditing mainly concerned with?',
                options: ['A) Checking whether actual configuration matches approved records', 'B) Making slides prettier', 'C) Replacing Git', 'D) Removing test cases'],
                answer: 0,
                explanation: 'Audits verify consistency between documented baselines and the real delivered system.'
            }
        ]
    },
    'c4-u4t5': {
        title: 'Branching Strategy, Tags & Traceability',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Following a Change from Requirement to Release</h3>
<p class="mb-4">Branching strategies define how teams isolate work. <strong>Tags</strong> mark important versions. <strong>Traceability</strong> links requirements, changes, builds, and releases so teams can explain how a feature moved from idea to production.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li>Feature branches isolate ongoing work.</li>
    <li>Release tags identify exact shipped versions.</li>
    <li>Traceability supports audits, debugging, and accountability.</li>
</ul>
        `,
        quizzes: [
            {
                question: 'Why are tags useful in version control?',
                options: ['A) They decorate commits only', 'B) They mark important versions such as releases or milestones', 'C) They replace baselines', 'D) They store passwords'],
                answer: 1,
                explanation: 'Tags help identify and revisit exact commit snapshots tied to releases or milestones.'
            }
        ]
    }
});

Object.assign(window.topicDetails['cs604-u5'], {
    'c4-u5t4': {
        title: 'Infrastructure as Code & Immutable Deployments',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Treating Servers Like Versioned Artifacts, Not Sacred Furniture</h3>
<p class="mb-4"><strong>Infrastructure as Code (IaC)</strong> defines environments in code using tools like Terraform or CloudFormation. <strong>Immutable deployments</strong> avoid patching live servers in-place; instead, teams replace old environments with fresh consistent ones.</p>

<p class="text-gray-300 text-sm">Immutable deployment is like swapping the entire tiffin box instead of trying to repair a leaking lid during lunch break while still pretending everything is fine.</p>
        `,
        quizzes: [
            {
                question: 'What is a major benefit of Infrastructure as Code?',
                options: ['A) Servers become physically smaller', 'B) Environments become reproducible and version-controlled', 'C) It removes networking', 'D) It avoids documentation forever'],
                answer: 1,
                explanation: 'IaC allows teams to create, review, and reproduce infrastructure consistently through code.'
            }
        ]
    },
    'c4-u5t5': {
        title: 'Security in DevOps (DevSecOps)',
        content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Security Has to Join Early, Not Show Up Only After the Fire</h3>
<p class="mb-4">DevSecOps integrates security checks into the pipeline. Instead of waiting for a final audit, teams scan dependencies, analyze code, manage secrets safely, and enforce policy continuously.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Practice</th>
            <th class="p-3">Goal</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3">Dependency scanning</td><td class="p-3">Catch vulnerable packages</td></tr>
        <tr><td class="p-3">Secret management</td><td class="p-3">Protect credentials and tokens</td></tr>
        <tr><td class="p-3">Policy checks</td><td class="p-3">Enforce safe deployment rules</td></tr>
    </tbody>
</table>
        `,
        quizzes: [
            {
                question: 'What is the main idea behind DevSecOps?',
                options: ['A) Security is postponed until release day', 'B) Security is integrated throughout the development and deployment lifecycle', 'C) Only operations handles security', 'D) Security means only antivirus'],
                answer: 1,
                explanation: 'DevSecOps embeds security checks and practices continuously instead of treating them as a final afterthought.'
            }
        ]
    }
});
