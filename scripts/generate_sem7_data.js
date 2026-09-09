const fs = require('fs');
const path = require('path');

// Helper to wrap topic details
function createTopicEntry(title, intro, keyPoints, mermaidDiagram, formulaOrNote, quiz) {
    let content = `
<h3 class="text-2xl font-bold mb-4 text-blue-400">${title}</h3>
<p class="mb-4 text-slate-300 leading-relaxed">${intro}</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg">
        <h4 class="text-blue-300 font-bold mb-3 text-lg">Core Principles & Architecture</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
    <div class="bg-gray-800/90 p-5 rounded-xl border-t-4 border-emerald-500 shadow-lg">
        <h4 class="text-emerald-300 font-bold mb-3 text-lg">Exam Focus & Practical Trade-offs</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            ${keyPoints.slice(3).map(p => `<li>${p}</li>`).join('\n            ')}
        </ul>
    </div>
</div>
`;

    if (mermaidDiagram) {
        content += `
<h3 class="text-xl font-bold mb-2 text-blue-400">System & Architectural Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
${mermaidDiagram}
</div>
`;
    }

    if (formulaOrNote) {
        content += `
<div class="bg-slate-900 border border-amber-500/30 rounded-xl p-5 mb-6 text-sm text-amber-200/90">
    <h4 class="font-bold text-amber-300 mb-2 flex items-center gap-2">
        <span>&#128221;</span> Exam Blueprint / Mathematical Formulation
    </h4>
    <p class="leading-relaxed">${formulaOrNote}</p>
</div>
`;
    }

    return {
        title,
        content: content.trim(),
        quiz: quiz || []
    };
}

// -------------------------------------------------------------
// CS-701: SOFTWARE ARCHITECTURES
// -------------------------------------------------------------
const cs701Data = {
    'cs701-u1': {
        'cs701-u1t1': createTopicEntry(
            'What is Software Architecture? Stakeholders & 4+1 View Model',
            'Software architecture is the fundamental organization of a system embodied in its components, their relationships to each other and the environment, and the principles guiding its design and evolution. Kruchten\'s 4+1 View Model structures architecture for varied stakeholders.',
            [
                '<strong>Logical View:</strong> Concerns functional requirements, class diagrams, state machines (target: end-users, analysts).',
                '<strong>Process View:</strong> Concurrency, threads, synchronization, throughput, non-functional performance (target: system integrators).',
                '<strong>Development View:</strong> Software modules, packages, build hierarchies, version control (target: developers).',
                '<strong>Physical View:</strong> Deployment mapping onto server nodes, networks, cloud VMs (target: DevOps, infrastructure engineers).',
                '<strong>+1 Scenarios / Use Cases:</strong> Drives the discovery of architectural elements and validates all four views together.'
            ],
            `graph TD
    UC[Scenarios & Use Cases] --> LV[Logical View: Object Models]
    UC --> PV[Process View: Concurrency & Threads]
    UC --> DV[Development View: Package Modules]
    UC --> PhysV[Physical View: Nodes & Cloud Deploy]
    style UC fill:#1e293b,stroke:#3b82f6,color:#fff
    style LV fill:#1e293b,stroke:#10b981,color:#fff
    style PV fill:#1e293b,stroke:#f59e0b,color:#fff
    style DV fill:#1e293b,stroke:#8b5cf6,color:#fff
    style PhysV fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Architectural decisions are irreversible without substantial cost: $Cost_{refactor} \\gg Cost_{initial}$. The 4+1 view prevents single-perspective blind spots.',
            [
                {
                    question: 'In Kruchten\'s 4+1 View Model, which view addresses system throughput, latency, and concurrency?',
                    options: ['Development View', 'Process View', 'Logical View', 'Physical View'],
                    answer: 1,
                    explanation: 'The Process View handles concurrency, threads, processes, and run-time system throughput.'
                }
            ]
        ),
        'cs701-u1t2': createTopicEntry(
            'Architectural Styles vs Design Patterns: Component & Connector',
            'An architectural style defines a family of systems in terms of a pattern of structural organization. Design patterns solve recurring problems at the micro/class level (GoF), whereas architectural styles govern macro-level system topologies, components, and connectors.',
            [
                '<strong>Components:</strong> Computational units or data stores (e.g., databases, servers, microservices).',
                '<strong>Connectors:</strong> Mechanisms that mediate interactions among components (e.g., procedure calls, pipes, message queues).',
                '<strong>Configurations:</strong> Topologies connecting ports of components to roles of connectors.',
                '<strong>Architectural Invariants:</strong> Constraints enforced across the style (e.g., layers cannot call upwards directly).',
                '<strong>Scope difference:</strong> Architectural styles dictate whole-system boundaries; design patterns operate within single processes.'
            ],
            `graph LR
    C1[Component A] -->|Connector: RPC / REST| C2[Component B]
    C2 -->|Connector: Message Queue| C3[Component C: Worker]
    C3 -->|Connector: SQL Driver| DB[(Database)]
    style C1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style C2 fill:#1e293b,stroke:#10b981,color:#fff
    style C3 fill:#1e293b,stroke:#f59e0b,color:#fff
    style DB fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'C&C (Component & Connector) view model formally defines systems as $S = \\{Components, Connectors, Topologies, Constraints\\}$.',
            [
                {
                    question: 'Which of the following is a connector rather than a component in software architecture?',
                    options: ['SQL Database', 'Web Application Server', 'RabbitMQ Message Broker Channel', 'Payment Processing Service'],
                    answer: 2,
                    explanation: 'Message channels/queues mediate communication between components, functioning as connectors.'
                }
            ]
        ),
        'cs701-u1t3': createTopicEntry(
            'Data-Centered (Blackboard) & Data-Flow (Pipe & Filter) Styles',
            'Data-centered architectures feature a central data repository accessed by independent processing agents. The Blackboard variation features active knowledge sources triggered by blackboard state changes. Pipe-and-Filter architectures transform continuous data streams independently.',
            [
                '<strong>Blackboard Architecture:</strong> Central blackboard blackboard store, knowledge sources (agents), and a control shell arbiter.',
                '<strong>Application of Blackboard:</strong> Speech recognition, AI expert systems, sonar signal identification.',
                '<strong>Pipe and Filter:</strong> Filters perform incremental transformations without knowledge of adjacent filter identities.',
                '<strong>Loose Coupling:</strong> Filters can be reordered or parallelized trivially along the stream pipeline.',
                '<strong>Performance caveat:</strong> High overhead in serialization/parsing if pipes exchange raw text across process boundaries.'
            ],
            `graph LR
    Input[Stream Input] --> F1[Filter 1: Tokenizer]
    F1 -->|Pipe 1| F2[Filter 2: Normalizer]
    F2 -->|Pipe 2| F3[Filter 3: Filter / Validator]
    F3 -->|Pipe 3| Out[Stream Output]
    style Input fill:#1e293b,stroke:#3b82f6,color:#fff
    style F1 fill:#1e293b,stroke:#10b981,color:#fff
    style F2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style F3 fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Out fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Unix pipelines (<code>cat data.log | grep ERROR | awk \'{print $2}\' | sort | uniq -c</code>) are canonical Pipe-and-Filter architectures.',
            [
                {
                    question: 'Which architectural style is best suited for non-deterministic AI problem solving with diverse expert modules?',
                    options: ['Pipe and Filter', 'Blackboard Architecture', 'Layered Architecture', 'Model-View-Controller'],
                    answer: 1,
                    explanation: 'Blackboard architecture coordinates opportunistic knowledge sources around a shared state repository.'
                }
            ]
        ),
        'cs701-u1t4': createTopicEntry(
            'Call-and-Return Styles: Layered Architecture, MVC & Tiering',
            'Call-and-return styles organize software around synchronous or hierarchical control transfers. Layered systems partition functionality into stacked abstraction tiers where each layer offers services to the layer above and consumes services from the layer below.',
            [
                '<strong>Strict Layering:</strong> Layer $N$ may only call Layer $N-1$ directly, maximizing decoupling and modifiability.',
                '<strong>Relaxed / Open Layering:</strong> Layer $N$ may call any lower layer $N-k$, reducing pass-through performance penalties.',
                '<strong>Tiers vs Layers:</strong> Layers refer to logical separation of concerns in code; Tiers refer to physical deployment boundaries across hardware.',
                '<strong>Model-View-Controller (MVC):</strong> Model encapsulates business logic and data; View renders UI; Controller interprets user gestures.',
                '<strong>Layering Drawback:</strong> Cascade changes across data layer, business layer, and presentation layer for small schema alterations.'
            ],
            `graph TD
    PL[Presentation Layer / UI] --> BL[Business Logic Layer]
    BL --> DAL[Data Access Layer]
    DAL --> DB[(Database / Persistence)]
    style PL fill:#1e293b,stroke:#3b82f6,color:#fff
    style BL fill:#1e293b,stroke:#10b981,color:#fff
    style DAL fill:#1e293b,stroke:#f59e0b,color:#fff
    style DB fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Layer cohesion metric: $L_c = \\frac{\\text{Internal Layer Calls}}{\\text{Total Layer Calls}}$. High cohesion and strict downward dependencies ensure testability with mock layers.',
            [
                {
                    question: 'What is the key difference between a "Layer" and a "Tier"?',
                    options: [
                        'Layers represent physical server deployments; Tiers represent logical code modules',
                        'Layers represent logical code boundaries; Tiers represent physical hardware/deployment boundaries',
                        'Layers only exist in client-side code; Tiers exist in backend code',
                        'There is no difference; they are strictly synonymous'
                    ],
                    answer: 1,
                    explanation: 'Layers denote logical organization in software architecture, whereas tiers denote physical hardware/infrastructure boundaries.'
                }
            ]
        ),
        'cs701-u1t5': createTopicEntry(
            'Event-Driven Architectures & Publish-Subscribe Systems',
            'Event-Driven Architecture (EDA) decouples producers from consumers using asynchronous events. Components react to state changes without knowing who produced them or who else consumes them.',
            [
                '<strong>Event Producers:</strong> Emit event notices when business state changes occur (e.g., OrderPlaced).',
                '<strong>Event Brokers / Routers:</strong> Distribute events based on topics, routing keys, or message filters (Kafka, RabbitMQ, SNS).',
                '<strong>Event Consumers:</strong> Autonomously subscribe to relevant topics, processing events independently.',
                '<strong>Temporal Decoupling:</strong> Producers and consumers do not need to be online at the same time.',
                '<strong>Challenges:</strong> Eventual consistency, distributed tracing complexity, duplicate message handling (idempotency).'
            ],
            `graph LR
    P[Order Service: Producer] -->|Emit: OrderCreated| B[Event Broker / Kafka]
    B -->|Subscribe| C1[Billing Service]
    B -->|Subscribe| C2[Inventory Service]
    B -->|Subscribe| C3[Notification Service]
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style B fill:#1e293b,stroke:#f59e0b,color:#fff
    style C1 fill:#1e293b,stroke:#10b981,color:#fff
    style C2 fill:#1e293b,stroke:#10b981,color:#fff
    style C3 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Consumer Idempotency Formula: $f(f(x)) = f(x)$. Processing the exact same event notification multiple times must not alter system state beyond the first application.',
            [
                {
                    question: 'Why is idempotency essential for consumers in asynchronous event-driven architectures?',
                    options: [
                        'To prevent SQL injection attacks in event brokers',
                        'Because at-least-once message delivery guarantees can re-deliver duplicate events',
                        'To convert asynchronous events into synchronous REST responses',
                        'To compress event payload sizes across TCP sockets'
                    ],
                    answer: 1,
                    explanation: 'Distributed brokers commonly implement at-least-once delivery; idempotent consumers safely handle duplicate message deliveries without corrupting state.'
                }
            ]
        )
    },
    'cs701-u2': {
        'cs701-u2t1': createTopicEntry(
            'Quality Attribute Scenarios: Availability, Performance, Modifiability',
            'Quality attributes define the non-functional fitness of an architecture. The SEI specifies Quality Attribute Scenarios consisting of six parts: Source of stimulus, Stimulus, Artifact, Environment, Response, and Response Measure.',
            [
                '<strong>Availability:</strong> System readiness for correct operation. Measured by uptime percentage (e.g., 99.999% "five nines") and MTBF / MTTR.',
                '<strong>Performance:</strong> Latency, throughput, jitter under given transaction workloads.',
                '<strong>Modifiability:</strong> Cost and time required to introduce changes without breaking existing functionality.',
                '<strong>Six-Part Scenario:</strong> (1) Source, (2) Stimulus, (3) Artifact, (4) Environment, (5) Response, (6) Response Measure.',
                '<strong>Example Availability Scenario:</strong> An external server crashes (Stimulus) during peak hours (Environment); system fails over to standby in < 2 seconds (Response Measure).'
            ],
            `graph LR
    Src[Source of Stimulus] --> Stim[Stimulus]
    Stim --> Sys[System / Artifact under Environment]
    Sys --> Resp[System Response]
    Resp --> Meas[Response Measure e.g. < 200ms]
    style Src fill:#1e293b,stroke:#3b82f6,color:#fff
    style Stim fill:#1e293b,stroke:#f59e0b,color:#fff
    style Sys fill:#1e293b,stroke:#10b981,color:#fff
    style Resp fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Meas fill:#1e293b,stroke:#ef4444,color:#fff`,
            'System Availability Formula: $\\text{Availability} = \\frac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}}$. Five-nines (99.999%) equates to under 5.26 minutes of unscheduled downtime per year.',
            [
                {
                    question: 'Which of the following is NOT one of the six parts of a SEI Quality Attribute Scenario?',
                    options: ['Stimulus', 'Response Measure', 'Programming Language', 'Environment'],
                    answer: 2,
                    explanation: 'The six parts are Source, Stimulus, Artifact, Environment, Response, and Response Measure. Programming language is an implementation detail.'
                }
            ]
        ),
        'cs701-u2t2': createTopicEntry(
            'Security Tactics, Testability & Usability in System Design',
            'Architectural tactics are design decisions that influence the achievement of a quality attribute response. Security tactics focus on resisting, detecting, and recovering from attacks.',
            [
                '<strong>Detect Attacks Tactics:</strong> Intrusion detection systems (IDS), audit logs, cryptographic checksums, anomaly detection.',
                '<strong>Resist Attacks Tactics:</strong> User authentication, role-based authorization (RBAC), data encryption at rest and in transit, input sanitation.',
                '<strong>React to Attacks Tactics:</strong> Revoking sessions, IP rate-limiting, isolate compromised subnets, honeypots.',
                '<strong>Testability Tactics:</strong> Specialized test harnesses, dependency injection, recording and playback interfaces, observability.',
                '<strong>Usability Tactics:</strong> Support user cancellation, progress indicators, undo/redo buffers, predictable command response times.'
            ],
            `graph TD
    Sec[Security Tactics] --> Det[Detect Attacks: IDS, Checksums]
    Sec --> Res[Resist Attacks: Auth, Encryption, RBAC]
    Sec --> React[React: Rate-Limiting, Session Revocation]
    Sec --> Rec[Recover: Redundant Backups, Audits]
    style Sec fill:#1e293b,stroke:#3b82f6,color:#fff
    style Det fill:#1e293b,stroke:#f59e0b,color:#fff
    style Res fill:#1e293b,stroke:#10b981,color:#fff
    style React fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Rec fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Security in depth: $P(\\text{Breach}) = \\prod_{i=1}^{k} P(\\text{Breach Layer } i)$. Stacking authentication, network segmentation, and application validation drastically reduces compromise probabilities.',
            [
                {
                    question: 'Which architectural tactic is specifically classified under "Resisting Attacks"?',
                    options: ['Audit Log Analysis', 'Intrusion Detection System', 'Data Encryption at Rest', 'State Restoration from Backups'],
                    answer: 2,
                    explanation: 'Encrypting data at rest directly resists unauthorized inspection of stolen storage volumes.'
                }
            ]
        ),
        'cs701-u2t3': createTopicEntry(
            'Trade-Off Analysis: Latency, Throughput & Consistency',
            'Architecture is fundamentally the study of trade-offs. Improving one quality attribute often degrades another. The CAP theorem, PACELC theorem, and performance vs security trade-offs require quantitative analysis.',
            [
                '<strong>CAP Theorem:</strong> In a network-partitioned distributed system, one must choose between Consistency (C) and Availability (A).',
                '<strong>PACELC Extension:</strong> If there is a Partition (P), trade Consistency (C) or Availability (A); Else (E), trade Latency (L) or Consistency (C).',
                '<strong>Security vs Latency:</strong> Deep packet inspection, TLS handshakes, and heavy hashing algorithms add latency to request paths.',
                '<strong>Modifiability vs Performance:</strong> Excessive abstraction layers and indirection increase developer agility but introduce function call and serialization overhead.',
                '<strong>Memory vs Compute:</strong> Caching drastically cuts latency and DB load but introduces stale cache eviction challenges.'
            ],
            `graph TD
    P[Partition Occurs?] -->|Yes| CAP[Trade-off: Consistency vs Availability]
    P -->|No / Normal| EL[Trade-off: Latency vs Consistency]
    style P fill:#1e293b,stroke:#3b82f6,color:#fff
    style CAP fill:#1e293b,stroke:#ef4444,color:#fff
    style EL fill:#1e293b,stroke:#10b981,color:#fff`,
            'Little\'s Law: $L = \\lambda \\cdot W$, where $L$ is concurrency, $\\lambda$ is throughput (req/s), and $W$ is mean response latency (seconds).',
            [
                {
                    question: 'According to the PACELC theorem, when a distributed database is operating normally without partitions, what trade-off must it make?',
                    options: ['Partition Tolerance vs Modifiability', 'Latency vs Consistency', 'Throughput vs Durability', 'Security vs Testability'],
                    answer: 1,
                    explanation: 'The "ELC" part of PACELC states: Else (no partition), choose between Latency (L) and Consistency (C).'
                }
            ]
        ),
        'cs701-u2t4': createTopicEntry(
            'Fault Tolerance Tactics: Heartbeats, Redundancy & Graceful Degradation',
            'Fault tolerance ensures that a system continues operating satisfactorily in the presence of hardware failures or software defects. Key tactics include active/passive redundancy, health heartbeats, and circuit breakers.',
            [
                '<strong>Active Redundancy (Triple Modular Redundancy - TMR):</strong> All redundant nodes process every request concurrently; majority voting selects output.',
                '<strong>Passive Redundancy (Active-Standby):</strong> Primary node processes traffic and replicates state; standby takes over upon heartbeat timeout.',
                '<strong>Heartbeat Protocol:</strong> Periodic status pings sent between nodes to detect failure within a configured timeout window.',
                '<strong>Graceful Degradation:</strong> If a subsystem fails (e.g., recommendation engine), serve fallback static defaults rather than crashing the storefront.',
                '<strong>Split-Brain Hazard:</strong> Network splits causing both standby and primary to assume they are the master; solved using quorum consensus (Raft/Paxos).'
            ],
            `graph LR
    Client --> LB[Load Balancer]
    LB --> Pri[Primary Node: Active]
    Pri -.->|State Replication| Sec[Standby Node: Passive]
    Pri <-->|Heartbeat Ping| Sec
    Sec -.->|Takeover on Heartbeat Timeout| LB
    style LB fill:#1e293b,stroke:#3b82f6,color:#fff
    style Pri fill:#1e293b,stroke:#10b981,color:#fff
    style Sec fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Quorum consensus requires $Q > \\frac{N}{2}$ nodes. A 3-node cluster tolerates 1 node failure; a 5-node cluster tolerates 2 node failures.',
            [
                {
                    question: 'What distributed system failure occurs when a network partition causes two nodes to simultaneously believe they are the authoritative primary?',
                    options: ['Byzantine Fault', 'Split-Brain Condition', 'Cascading Failure', 'Deadlock Cycle'],
                    answer: 1,
                    explanation: 'Split-brain occurs when partitioned nodes lose communication and both elect themselves primary, leading to divergent conflicting state writes.'
                }
            ]
        )
    },
    'cs701-u3': {
        'cs701-u3t1': createTopicEntry(
            'Attribute-Driven Design (ADD) Method',
            'Attribute-Driven Design (ADD) is a systematic, iterative approach to software architecture design developed by the Software Engineering Institute (SEI). It grounds architectural design in quality attribute requirements.',
            [
                '<strong>Inputs to ADD:</strong> Quality attribute scenarios, functional requirements, architectural constraints.',
                '<strong>Step 1:</strong> Choose an element of the system to design (starts with the whole system for iteration 1).',
                '<strong>Step 2:</strong> Identify the highest-priority architectural drivers (Quality Attributes + Constraints).',
                '<strong>Step 3:</strong> Select design concepts, styles, and tactics that satisfy these drivers.',
                '<strong>Step 4:</strong> Instantiate architectural elements and allocate responsibilities, verify and repeat for child elements.'
            ],
            `graph TD
    In[Inputs: Requirements & Constraints] --> Pick[Step 1: Choose System Element]
    Pick --> Driver[Step 2: Identify Driving Scenarios]
    Driver --> Tactics[Step 3: Select Styles & Tactics]
    Tactics --> Allocate[Step 4: Instantiate & Allocate Responsibilities]
    Allocate --> Verify[Step 5: Verify Quality Attributes]
    Verify -->|Next Iteration| Pick
    style In fill:#1e293b,stroke:#3b82f6,color:#fff
    style Tactics fill:#1e293b,stroke:#10b981,color:#fff
    style Verify fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'ADD prioritizes design decisions based on high-risk, high-business-value architectural drivers rather than implementing arbitrary features prematurely.',
            [
                {
                    question: 'In the Attribute-Driven Design (ADD) methodology, what serves as the primary driver for architectural decomposition?',
                    options: ['Database schema tables', 'Quality Attribute Scenarios and constraints', 'Programming language keywords', 'User interface wireframes'],
                    answer: 1,
                    explanation: 'ADD is explicitly driven by quality attribute scenarios and constraints rather than raw UI layouts.'
                }
            ]
        ),
        'cs701-u3t2': createTopicEntry(
            'Architectural Description Languages (ADLs): Wright, Acme & UML',
            'Architectural Description Languages (ADLs) provide formal syntax and conceptual frameworks for representing software architectures. Unlike programming languages, ADLs emphasize high-level components, connectors, and protocols.',
            [
                '<strong>Wright:</strong> Specializes in formal modeling of connector protocols using CSP (Communicating Sequential Processes) to prove deadlock freedom.',
                '<strong>Acme:</strong> Developed as an architectural interchange language to bridge different specialized ADLs.',
                '<strong>UML for Architecture:</strong> Component diagrams, deployment diagrams, package diagrams, and custom stereotypes/profiles.',
                '<strong>ADL Components:</strong> Ports (interfaces), Roles (connector interaction points), Attachments, and Properties.',
                '<strong>Trade-off:</strong> High formal precision versus steep learning curve compared to standard informal box-and-line UML.'
            ],
            `graph LR
    Sub[Component: Client] -->|Port| R1[Role: Caller]
    R1 --- C[Connector: RPC]
    C --- R2[Role: Callee]
    R2 -->|Port| Srv[Component: Server]
    style Sub fill:#1e293b,stroke:#3b82f6,color:#fff
    style C fill:#1e293b,stroke:#f59e0b,color:#fff
    style Srv fill:#1e293b,stroke:#10b981,color:#fff`,
            'Wright formalization uses CSP to verify: $\\text{DeadlockFree}(P) \\iff \\forall s \\in \\text{traces}(P), (s, \\Sigma) \\notin \\text{failures}(P)$.',
            [
                {
                    question: 'Which Architectural Description Language (ADL) uses CSP (Communicating Sequential Processes) to formally analyze communication protocols for deadlock?',
                    options: ['Acme', 'Wright', 'Darwin', 'Koala'],
                    answer: 1,
                    explanation: 'Wright uses CSP formal semantics to check component-connector interactions for deadlock freedom.'
                }
            ]
        ),
        'cs701-u3t3': createTopicEntry(
            'Documenting Software Architectures: Views, Interfaces & C4 Model',
            'Architecture documentation serves as a communication vehicle among stakeholders and a blueprint for construction. Modern architecture documentation leans heavily on the C4 model (Context, Containers, Components, Code).',
            [
                '<strong>C4 Level 1 - System Context:</strong> How the system fits into the world; users and external system integrations.',
                '<strong>C4 Level 2 - Container Diagram:</strong> High-level technical architecture (web apps, databases, API servers, message queues).',
                '<strong>C4 Level 3 - Component Diagram:</strong> Internal structural modules inside a single container.',
                '<strong>C4 Level 4 - Code Diagram:</strong> UML class or sequence diagrams inside a specific component (often auto-generated).',
                '<strong>Interface Documentation:</strong> Syntax (signatures), semantics (pre/post-conditions), usage protocols, error codes.'
            ],
            `graph TD
    L1[Level 1: System Context Diagram] --> L2[Level 2: Container Diagram: Apps & DBs]
    L2 --> L3[Level 3: Component Diagram: Modules in Container]
    L3 --> L4[Level 4: Code Diagram: Classes & Methods]
    style L1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style L2 fill:#1e293b,stroke:#10b981,color:#fff
    style L3 fill:#1e293b,stroke:#f59e0b,color:#fff
    style L4 fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Views and Beyond principle: "Documenting an architecture is a matter of documenting the relevant views and then documenting the information that applies across views."',
            [
                {
                    question: 'In Simon Brown\'s C4 model, which level illustrates the deployable executables, web applications, and database engines?',
                    options: ['Level 1: Context', 'Level 2: Container', 'Level 3: Component', 'Level 4: Code'],
                    answer: 1,
                    explanation: 'Level 2 (Container diagram) represents independently deployable applications, services, and databases.'
                }
            ]
        ),
        'cs701-u3t4': createTopicEntry(
            'Architecture Evaluation: ATAM (Tradeoff Analysis) & CBAM',
            'The Architecture Tradeoff Analysis Method (ATAM) is a rigorous evaluation method developed by the SEI to assess whether an architecture meets its specified quality goals and identify architectural risks, sensitivity points, and tradeoff points.',
            [
                '<strong>Sensitivity Point:</strong> An architectural parameter where a small change causes a significant change in a quality attribute.',
                '<strong>Tradeoff Point:</strong> An architectural parameter that affects multiple quality attributes in opposing directions (e.g., encryption depth).',
                '<strong>Risk:</strong> An architectural decision that may lead to undesirable consequences.',
                '<strong>Non-Risk:</strong> An architectural decision that has been positively verified to meet requirements.',
                '<strong>CBAM (Cost Benefit Analysis Method):</strong> Extends ATAM by modeling financial ROI and resource costs of architectural strategies.'
            ],
            `graph TD
    A[Present Business Drivers] --> B[Present Architecture]
    B --> C[Identify Architectural Approaches]
    C --> D[Generate Utility Tree]
    D --> E[Analyze Approaches & Scenarios]
    E --> F[Synthesize Risks, Non-Risks, Sensitivities & Tradeoffs]
    style A fill:#1e293b,stroke:#3b82f6,color:#fff
    style D fill:#1e293b,stroke:#f59e0b,color:#fff
    style F fill:#1e293b,stroke:#10b981,color:#fff`,
            'Utility Tree: Root is "Utility", children are Quality Attributes (e.g., Performance, Security), leaves are Scenarios ranked by (High/Medium/Low) Business Value and Architectural Difficulty.',
            [
                {
                    question: 'In an ATAM evaluation, what is an architectural decision that improves security but simultaneously degrades response time called?',
                    options: ['Non-Risk Point', 'Sensitivity Point', 'Tradeoff Point', 'Invariant Point'],
                    answer: 2,
                    explanation: 'A Tradeoff Point is an architectural parameter that affects two or more quality attributes in opposing directions.'
                }
            ]
        )
    },
    'cs701-u4': {
        'cs701-u4t1': createTopicEntry(
            'Service-Oriented Architecture (SOA) vs Microservices',
            'Both SOA and Microservices decompose monolithic systems into services. However, SOA emphasizes enterprise-wide integration and service reuse via an Enterprise Service Bus (ESB), while Microservices emphasize fine-grained, decentralized, independently deployable autonomy.',
            [
                '<strong>SOA:</strong> Coarse-grained, enterprise-scoped, centralized governance, shared databases, heavy ESB middleware (SOAP/XML).',
                '<strong>Microservices:</strong> Fine-grained, application-scoped, decentralized governance, polyglot persistence (database per service), lightweight REST/gRPC.',
                '<strong>Smart endpoints, dumb pipes:</strong> Microservices avoid smart ESBs; services handle their own routing, retries, and transformation logic.',
                '<strong>Failure blast radius:</strong> Microservices isolate failures; a crash in the notification service does not take down payment processing.',
                '<strong>Operational Complexity:</strong> Microservices demand automated CI/CD, container orchestration (Kubernetes), and distributed tracing.'
            ],
            `graph LR
    subgraph SOA[SOA Model]
        S1[Service 1] --> ESB[Enterprise Service Bus: Heavy XML]
        S2[Service 2] --> ESB
        ESB --> SharedDB[(Shared Enterprise DB)]
    end
    subgraph Micro[Microservices Model]
        MS1[Order Service] --> DB1[(Order DB)]
        MS2[User Service] --> DB2[(User DB)]
        MS1 -->|Lightweight gRPC| MS2
    end
    style ESB fill:#1e293b,stroke:#ef4444,color:#fff
    style SharedDB fill:#1e293b,stroke:#ef4444,color:#fff
    style MS1 fill:#1e293b,stroke:#10b981,color:#fff
    style MS2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Conway\'s Law: "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations."',
            [
                {
                    question: 'Which characteristic is a hallmark of Microservices over traditional Service-Oriented Architecture (SOA)?',
                    options: ['Centralized Enterprise Service Bus (ESB)', 'Shared corporate relational database', 'Database-per-service pattern', 'Monolithic release cycles'],
                    answer: 2,
                    explanation: 'Microservices enforce decentralized data management where each service owns its private database.'
                }
            ]
        ),
        'cs701-u4t2': createTopicEntry(
            'Microservices Decomposition by Subdomain & Bounded Context',
            'Decomposing a monolith into microservices requires domain-driven design (DDD) principles. Identifying bounded contexts and core vs supporting subdomains prevents tangled distributed monoliths.',
            [
                '<strong>Bounded Context:</strong> A boundary within a domain where a particular domain model applies strictly and unambiguously.',
                '<strong>Ubiquitous Language:</strong> Terminology shared by developers and domain experts inside the bounded context.',
                '<strong>Core Domain:</strong> The primary competitive advantage of the business (e.g., search algorithms for Google, matching for Uber).',
                '<strong>Supporting Subdomain:</strong> Complements core capabilities (e.g., driver ratings, loyalty points).',
                '<strong>Generic Subdomain:</strong> Standard commodity functionality (e.g., authentication, billing, email dispatch).'
            ],
            `graph TD
    Domain[E-Commerce Business Domain] --> BC1[Orders Bounded Context]
    Domain --> BC2[Inventory Bounded Context]
    Domain --> BC3[Shipping Bounded Context]
    BC1 -->|Domain Event: OrderApproved| BC2
    BC2 -->|Domain Event: ItemsReserved| BC3
    style Domain fill:#1e293b,stroke:#3b82f6,color:#fff
    style BC1 fill:#1e293b,stroke:#10b981,color:#fff
    style BC2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style BC3 fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Context Mapping patterns: Shared Kernel, Customer-Supplier, Conformist, Anti-Corruption Layer (ACL) for insulating modern services from legacy systems.',
            [
                {
                    question: 'What is the purpose of an Anti-Corruption Layer (ACL) in Domain-Driven Design?',
                    options: [
                        'To prevent SQL injection attacks in the persistence tier',
                        'To translate and insulate a modern bounded context from legacy domain models',
                        'To encrypt network packets between microservices',
                        'To enforce strict schema typing in NoSQL databases'
                    ],
                    answer: 1,
                    explanation: 'An ACL acts as a bidirectional translation adapter ensuring foreign/legacy concepts do not contaminate the clean domain model of a service.'
                }
            ]
        ),
        'cs701-u4t3': createTopicEntry(
            'API Gateway, Service Mesh & Circuit Breaker Pattern',
            'Distributed microservices require infrastructural traffic management. An API Gateway acts as the single entry point for clients. A Service Mesh handles east-west service-to-service traffic. Circuit Breakers protect systems from cascading failures.',
            [
                '<strong>API Gateway:</strong> SSL termination, authentication, request routing, rate limiting, and response aggregation (e.g., Kong, Envoy).',
                '<strong>Service Mesh:</strong> Sidecar proxies (Envoy/Istio) intercepting inter-service network traffic for mTLS, tracing, and canary deployments.',
                '<strong>Circuit Breaker States:</strong> Closed (normal traffic), Open (requests fail fast immediately without hitting dead downstream), Half-Open (trial requests test recovery).',
                '<strong>Bulkhead Pattern:</strong> Isolates resource pools (e.g., thread pools) so one failing dependency cannot exhaust all server threads.',
                '<strong>Distributed Tracing:</strong> Correlation IDs (W3C Trace Context) pass through HTTP headers across the entire invocation tree.'
            ],
            `graph LR
    Client --> GW[API Gateway]
    GW --> SvcA[Service A: Sidecar Proxy]
    SvcA -->|Circuit Breaker Protected| SvcB[Service B: Downstream]
    style GW fill:#1e293b,stroke:#3b82f6,color:#fff
    style SvcA fill:#1e293b,stroke:#10b981,color:#fff
    style SvcB fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Circuit Breaker Threshold: When $\\frac{\\text{Failed Requests}}{\\text{Total Requests in Window}} > T_{threshold}$, trip state from CLOSED to OPEN for duration $T_{sleep}$.',
            [
                {
                    question: 'In a Circuit Breaker pattern, what state allows a limited number of trial requests through to evaluate whether a failing service has recovered?',
                    options: ['Open', 'Half-Open', 'Closed', 'Isolated'],
                    answer: 1,
                    explanation: 'In the Half-Open state, test requests are dispatched. If they succeed, the breaker resets to Closed; if they fail, it trips back to Open.'
                }
            ]
        ),
        'cs701-u4t4': createTopicEntry(
            'Event Sourcing, CQRS & Serverless (FaaS) Architectures',
            'Modern cloud-native patterns decouple storage models and compute lifecycles. Event Sourcing stores the state of a business entity as an append-only sequence of immutable events. CQRS separates read queries from write commands.',
            [
                '<strong>Event Sourcing:</strong> Instead of storing current state in mutable rows, store all historical events (e.g., AccountCreated, MoneyDeposited). Current state is reconstructed by replaying events.',
                '<strong>CQRS (Command Query Responsibility Segregation):</strong> Command model handles validations and mutations; Query model uses optimized materialized read views.',
                '<strong>Serverless / FaaS:</strong> Ephemeral compute containers spun up on-demand by cloud triggers (HTTP, S3 upload, SQS queue), scaling to zero.',
                '<strong>Benefits of Event Sourcing:</strong> Perfect audit trail, time-travel debugging, zero state loss, native replayability.',
                '<strong>Drawback:</strong> Event schema versioning complexity and eventual consistency lag between writes and read views.'
            ],
            `graph LR
    Cmd[Client Write Command] --> WriteM[Command Model]
    WriteM --> EventStore[(Append-Only Event Store)]
    EventStore -->|Event Stream| Projector[Read Projector]
    Projector --> ReadDB[(Materialized Read DB)]
    ReadClient[Client Read Query] --> ReadDB
    style Cmd fill:#1e293b,stroke:#3b82f6,color:#fff
    style EventStore fill:#1e293b,stroke:#f59e0b,color:#fff
    style ReadDB fill:#1e293b,stroke:#10b981,color:#fff`,
            'State replay formula: $State_t = \\text{foldL}(\\text{applyEvent}, InitialState, [E_1, E_2, \\dots, E_t])$. Snapshots are taken every $N$ events to bound recovery time.',
            [
                {
                    question: 'What architectural pattern stores changes to application state as an immutable append-only log of events rather than modifying rows directly?',
                    options: ['Model-View-Presenter', 'Event Sourcing', 'Active Record', 'Repository Pattern'],
                    answer: 1,
                    explanation: 'Event Sourcing persists the full history of domain events as the authoritative source of truth.'
                }
            ]
        )
    },
    'cs701-u5': {
        'cs701-u5t1': createTopicEntry(
            'Component-Based Software Engineering (CBSE) & Contracts',
            'Component-Based Software Engineering (CBSE) emphasizes the design and construction of software systems using reusable, encapsulated software components with formally defined contracts.',
            [
                '<strong>Component:</strong> An independent unit of composition with contractually specified interfaces and explicit context dependencies.',
                '<strong>Provided Interface:</strong> Services that the component implements and exposes to external consumers.',
                '<strong>Required Interface:</strong> Services and runtime dependencies that the component demands from its environment to function.',
                '<strong>Design by Contract (DbC):</strong> Pre-conditions (caller obligation), Post-conditions (component guarantee), and Invariants.',
                '<strong>Component Models:</strong> Enterprise JavaBeans (EJB), CORBA Component Model (CCM), Microsoft COM/.NET assemblies.'
            ],
            `graph LR
    Req[Consumer Component] -->|Required Interface (Socket)| Prov[Provided Interface (Lollipop)]
    Prov --> Srv[Service Component]
    style Req fill:#1e293b,stroke:#3b82f6,color:#fff
    style Srv fill:#1e293b,stroke:#10b981,color:#fff`,
            'Meyer\'s Design by Contract: $\\{P\\} \\ C \\ \\{Q\\}$. If pre-condition $P$ is satisfied prior to invocation, component code $C$ guarantees post-condition $Q$ on termination.',
            [
                {
                    question: 'In Component-Based Software Engineering, what is a "Required Interface"?',
                    options: [
                        'The operations a component offers to external clients',
                        'The external dependencies and services a component needs to perform its work',
                        'The programming language compiler required to build the component',
                        'The graphical UI skin mandated by the operating system'
                    ],
                    answer: 1,
                    explanation: 'A Required Interface explicitly declares what other services the component depends upon from its hosting environment.'
                }
            ]
        ),
        'cs701-u5t2': createTopicEntry(
            'Software Product Lines (SPL) & Domain Engineering',
            'A Software Product Line (SPL) is a set of software-intensive systems sharing a common, managed set of core assets satisfying the specific needs of a particular market segment or domain.',
            [
                '<strong>Domain Engineering:</strong> Establishes the reusable platform and identifies commonalities and variabilities.',
                '<strong>Application Engineering:</strong> Derives specific product instances by configuring the core asset base with variant choices.',
                '<strong>Feature Diagrams:</strong> Hierarchical trees displaying mandatory features, optional features, and alternative (OR/XOR) features.',
                '<strong>Variability Mechanisms:</strong> Feature toggles, plugins, inheritance, templates, aspect-oriented programming.',
                '<strong>Economic Advantage:</strong> Up to 10x reduction in time-to-market for derived product variants; shared testing of core assets.'
            ],
            `graph TD
    Root[Vehicle Control System] --> Mand[Engine Control: Mandatory]
    Root --> Opt[Navigation System: Optional]
    Root --> Alt{Transmission Choice: Alternative}
    Alt --> Man[Manual]
    Alt --> Auto[Automatic]
    style Root fill:#1e293b,stroke:#3b82f6,color:#fff
    style Mand fill:#1e293b,stroke:#10b981,color:#fff
    style Opt fill:#1e293b,stroke:#f59e0b,color:#fff
    style Alt fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'SPL Economies of scale: $Cost_{SPL} = Cost_{CorePlatform} + \\sum_{i=1}^{n} Cost_{Variant}(i)$. For $n \\ge 3$, SPL total cost drops far below developing $n$ individual bespoke systems.',
            [
                {
                    question: 'In Software Product Line engineering, what activity focuses on developing the reusable core platform assets?',
                    options: ['Application Engineering', 'Domain Engineering', 'Regression Testing', 'Post-mortem Analysis'],
                    answer: 1,
                    explanation: 'Domain Engineering establishes the common architectural platform and reusable core assets across the product line.'
                }
            ]
        ),
        'cs701-u5t3': createTopicEntry(
            'Architectural Decay, Erosion & Technical Debt Management',
            'Over time, software architectures degrade due to hurried bug fixes, deadline pressure, and uncoordinated modifications. This gap between the planned architecture and implemented architecture manifests as architectural drift and erosion.',
            [
                '<strong>Architectural Drift:</strong> Introducing decisions that are not part of the documented architecture, but do not directly violate its principles.',
                '<strong>Architectural Erosion:</strong> Introducing implementation decisions that directly violate architectural invariants (e.g., circular dependencies between layers).',
                '<strong>Technical Debt:</strong> The implied cost of future reworking caused by choosing an easy solution now instead of a better approach.',
                '<strong>Symptoms of Erosion:</strong> Spaghetti code, escalating defect counts in untouched modules, fragile deployments.',
                '<strong>Prevention:</strong> Architecture Fitness Functions, automated SonarQube dependency rules, ArchUnit CI test assertions.'
            ],
            `graph TD
    Intent[Intended Architecture] -->|Drift: Undocumented Shortcuts| Impl[Implemented Codebase]
    Impl -->|Erosion: Direct Rule Violations| Chaos[Architectural Decay & Debt]
    Chaos -->|Refactoring & Fitness Tests| Intent
    style Intent fill:#1e293b,stroke:#10b981,color:#fff
    style Impl fill:#1e293b,stroke:#f59e0b,color:#fff
    style Chaos fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Technical Debt Ratio: $\\text{TDR} = \\frac{\\text{Remediation Effort}}{\\text{Development Effort}} \\times 100\\%$. Keeping TDR under 5% prevents software death spirals.',
            [
                {
                    question: 'What is the term for changes made to an implementation that directly violate defined architectural rules and constraints?',
                    options: ['Architectural Drift', 'Architectural Erosion', 'Feature Creep', 'Scope Inflation'],
                    answer: 1,
                    explanation: 'Architectural Erosion refers specifically to changes that violate prescribed architectural invariants and principles.'
                }
            ]
        ),
        'cs701-u5t4': createTopicEntry(
            'Architecture Recovery, Conformance Checking & Refactoring',
            'Architecture recovery extracts structural models from existing legacy code through static and dynamic analysis. Conformance checking verifies whether the running implementation honors the prescriptive architectural model.',
            [
                '<strong>Static Analysis Recovery:</strong> AST parsing, dependency extraction, call graph generation, module clustering.',
                '<strong>Dynamic Analysis:</strong> Tracing live runtime execution, profiling heap allocations, distributed packet inspection.',
                '<strong>Reflexion Modeling:</strong> Compares high-level conceptual model against source code model to report Convergences, Divergences, and Absences.',
                '<strong>Convergence:</strong> Expected dependency that actually exists in code.',
                '<strong>Divergence:</strong> Prohibited dependency present in code (violates architecture).',
                '<strong>Absence:</strong> Expected dependency from architectural blueprint that is missing in code.'
            ],
            `graph LR
    Source[Legacy Source Code] --> Static[Static / Dynamic Analysis]
    Static --> SourceModel[Concrete Code Model]
    HighModel[Intended Architecture] --> RM[Reflexion Model Engine]
    SourceModel --> RM
    RM --> Out[Output: Convergences, Divergences & Absences]
    style Source fill:#1e293b,stroke:#3b82f6,color:#fff
    style HighModel fill:#1e293b,stroke:#10b981,color:#fff
    style Out fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Murphy\'s Software Reflexion Method categorizes relations: $R_{intended} \\cap R_{implemented} = \\text{Convergences}$, $R_{implemented} - R_{intended} = \\text{Divergences}$, $R_{intended} - R_{implemented} = \\text{Absences}$.',
            [
                {
                    question: 'In Murphy\'s Reflexion Model for architecture conformance checking, what does a "Divergence" signify?',
                    options: [
                        'A dependency prescribed in the blueprint that is verified in code',
                        'A dependency found in the code that is NOT allowed by the high-level architecture',
                        'A dependency prescribed in the blueprint that was never built in code',
                        'A syntax error preventing compilation'
                    ],
                    answer: 1,
                    explanation: 'A Divergence indicates an illegal dependency in the implementation that violates the architectural rules.'
                }
            ]
        )
    }
};

// -------------------------------------------------------------
// CS-702 (A): BIG DATA
// -------------------------------------------------------------
const cs702bdData = {
    'cs702bd-u1': {
        'cs702bd-u1t1': createTopicEntry(
            '5 V’s of Big Data: Volume, Velocity, Variety, Veracity, Value',
            'Big Data describes datasets whose size, complexity, and rate of generation exceed the storage and processing capabilities of traditional relational database engines. The paradigm is defined by the 5 V\'s.',
            [
                '<strong>Volume:</strong> Scale of data generation (terabytes to petabytes and exabytes).',
                '<strong>Velocity:</strong> Speed at which data arrives and must be processed (real-time clickstreams, IoT telemetry).',
                '<strong>Variety:</strong> Structured (SQL), semi-structured (JSON, XML), and unstructured formats (audio, video, PDFs).',
                '<strong>Veracity:</strong> Trustworthiness, noise, bias, anomalies, and data quality issues.',
                '<strong>Value:</strong> The business insights and predictive power extracted from the data lake.'
            ],
            `graph TD
    BD[Big Data 5 V's] --> Vol[Volume: Terabytes to Exabytes]
    BD --> Vel[Velocity: Real-Time Telemetry & Streams]
    BD --> Var[Variety: Structured, JSON, Video, Unstructured]
    BD --> Ver[Veracity: Data Quality, Noise, Bias]
    BD --> Val[Value: ROI, Predictive Machine Learning]
    style BD fill:#1e293b,stroke:#3b82f6,color:#fff
    style Vol fill:#1e293b,stroke:#10b981,color:#fff
    style Vel fill:#1e293b,stroke:#f59e0b,color:#fff
    style Var fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Ver fill:#1e293b,stroke:#ef4444,color:#fff
    style Val fill:#1e293b,stroke:#38bdf8,color:#fff`,
            'Amdahl\'s vs Gustafson\'s Law: In big data processing, Gustafson\'s Law ($S(P) = P - \\alpha(P-1)$) emphasizes scaling cluster size $P$ to handle proportionally larger data volumes rather than attempting to solve fixed-size workloads faster.',
            [
                {
                    question: 'Which of the 5 V\'s of Big Data deals directly with data reliability, noise, and data cleanliness?',
                    options: ['Velocity', 'Variety', 'Veracity', 'Volume'],
                    answer: 2,
                    explanation: 'Veracity addresses the trustworthiness, cleanliness, and accuracy of big datasets.'
                }
            ]
        ),
        'cs702bd-u1t2': createTopicEntry(
            'HDFS Architecture: NameNode, Secondary NameNode & DataNodes',
            'Hadoop Distributed File System (HDFS) is a distributed, scalable file system designed to run on commodity hardware. It follows a master/worker architecture designed for high throughput access to large streaming files.',
            [
                '<strong>NameNode (Master):</strong> Manages file system namespace, directory trees, and maps block IDs to DataNodes. Holds metadata entirely in RAM for fast lookups.',
                '<strong>DataNodes (Workers):</strong> Store and retrieve actual 128 MB data blocks on local physical disks; report block inventory to NameNode.',
                '<strong>Secondary NameNode:</strong> NOT a hot standby! Periodically merges EditLog transactions into FsImage checkpoint files to prevent NameNode startup delays.',
                '<strong>Write-Once, Read-Many (WORM):</strong> HDFS files cannot be updated in-place; only sequential reads and appends are supported.',
                '<strong>Block Size:</strong> Default 128 MB (or 256 MB) to minimize disk seek times relative to transfer times.'
            ],
            `graph TD
    Client -->|1. Request Metadata| NN[NameNode: Master Metadata in RAM]
    NN -.->|Periodic Checkpoints| SNN[Secondary NameNode]
    Client -->|2. Direct Block Read/Write| DN1[DataNode 1: Block Blk_01]
    Client -->|2. Direct Block Read/Write| DN2[DataNode 2: Block Blk_01 replica]
    Client -->|2. Direct Block Read/Write| DN3[DataNode 3: Block Blk_01 replica]
    DN1 <-->|Heartbeats & BlockReports| NN
    style NN fill:#1e293b,stroke:#3b82f6,color:#fff
    style SNN fill:#1e293b,stroke:#f59e0b,color:#fff
    style DN1 fill:#1e293b,stroke:#10b981,color:#fff
    style DN2 fill:#1e293b,stroke:#10b981,color:#fff
    style DN3 fill:#1e293b,stroke:#10b981,color:#fff`,
            'HDFS metadata memory rule of thumb: Each file, directory, and block allocation occupies approximately 150 bytes in NameNode RAM. 100 million small files consume ~15 GB RAM.',
            [
                {
                    question: 'What is the primary role of the Secondary NameNode in Apache Hadoop?',
                    options: [
                        'To act as an immediate failover hot standby when the primary NameNode crashes',
                        'To periodically merge the EditLog and FsImage into clean metadata checkpoints',
                        'To execute map and reduce tasks across worker nodes',
                        'To store file block replicas on local disks'
                    ],
                    answer: 1,
                    explanation: 'The Secondary NameNode merges the EditLog into the FsImage checkpoint; it is not an automatic high-availability standby.'
                }
            ]
        ),
        'cs702bd-u1t3': createTopicEntry(
            'HDFS Block Replication, Rack Awareness & Heartbeat Protocol',
            'To survive frequent node failures in commodity hardware clusters, HDFS replicates blocks across different machines and racks. Rack awareness optimizes replica placement for both failure tolerance and bandwidth.',
            [
                '<strong>Default Replication Factor:</strong> 3 copies for every block.',
                '<strong>Replica Placement Policy:</strong> Replica 1 placed on local node (or random node in local rack); Replica 2 placed on a different rack; Replica 3 placed on the same remote rack as Replica 2.',
                '<strong>Fault Tolerance:</strong> Cluster survives entire rack power failure or network switch outage without data loss.',
                '<strong>Heartbeats:</strong> DataNodes send heartbeats every 3 seconds. If no heartbeat arrives for 10 minutes, NameNode marks node DEAD and replicates its blocks elsewhere.',
                '<strong>BlockReports:</strong> Sent every 6 hours by DataNodes to confirm block integrity.'
            ],
            `graph TD
    subgraph Rack1[Rack 1]
        DN1[DataNode 1: Replica 1]
        DN2[DataNode 2]
    end
    subgraph Rack2[Rack 2]
        DN3[DataNode 3: Replica 2]
        DN4[DataNode 4: Replica 3]
    end
    style Rack1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style Rack2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Storage overhead formula: $Storage_{raw} = DataSize \\times ReplicationFactor$. 100 TB of raw data requires 300 TB of physical disk capacity at default replication 3.',
            [
                {
                    question: 'In HDFS default rack-aware replication policy (replication factor = 3), how are the 3 replicas distributed across racks?',
                    options: [
                        'All 3 replicas on 3 distinct racks',
                        'All 3 replicas on the exact same rack',
                        '2 replicas on one rack and 1 replica on a different rack',
                        '1 replica in RAM and 2 replicas on SSD'
                    ],
                    answer: 2,
                    explanation: 'HDFS places 1 replica on the local rack, and the remaining 2 replicas on a different remote rack (balancing network bandwidth and switch failure tolerance).'
                }
            ]
        ),
        'cs702bd-u1t4': createTopicEntry(
            'Hadoop YARN Architecture: ResourceManager & NodeManagers',
            'YARN (Yet Another Resource Negotiator) was introduced in Hadoop 2.x to separate cluster resource management from the MapReduce execution engine, allowing diverse compute frameworks (Spark, Flink, Storm) to share the same cluster.',
            [
                '<strong>ResourceManager (RM):</strong> Cluster-level master arbitrating CPU and RAM resources among all contending applications.',
                '<strong>NodeManager (NM):</strong> Per-machine agent monitoring local node resource containers and reporting usage to the RM.',
                '<strong>ApplicationMaster (AM):</strong> Per-job coordinator negotiating resource containers with RM and executing tasks with NMs.',
                '<strong>Containers:</strong> Isolated allocation of physical resources (e.g., 4 GB RAM, 2 vCPUs) running task processes.',
                '<strong>Schedulers:</strong> FIFO Scheduler, Capacity Scheduler (multi-tenant queue quotas), and Fair Scheduler (dynamic equal shares).'
            ],
            `graph TD
    Client -->|Submit Job| RM[ResourceManager: Global Arbiter]
    RM -->|Allocate Container| NM1[NodeManager 1]
    NM1 --> AM[ApplicationMaster for Job]
    AM -->|Request Worker Containers| RM
    RM -->|Grants Containers| AM
    AM -->|Launch Tasks| NM1
    AM -->|Launch Tasks| NM2[NodeManager 2]
    style RM fill:#1e293b,stroke:#3b82f6,color:#fff
    style AM fill:#1e293b,stroke:#f59e0b,color:#fff
    style NM1 fill:#1e293b,stroke:#10b981,color:#fff
    style NM2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Container allocation unit: Memory configured via <code>yarn.nodemanager.resource.memory-mb</code> and vCores via <code>yarn.nodemanager.resource.cpu-vcores</code>.',
            [
                {
                    question: 'In YARN, which component is uniquely instantiated for every individual submitted application to coordinate its tasks?',
                    options: ['ResourceManager', 'ApplicationMaster', 'NodeManager', 'ZooKeeper Arbiter'],
                    answer: 1,
                    explanation: 'The ApplicationMaster is spun up per-job to negotiate containers and supervise execution for that specific application.'
                }
            ]
        )
    },
    'cs702bd-u2': {
        'cs702bd-u2t1': createTopicEntry(
            'MapReduce Programming Model: Mappers, Reducers & Combiners',
            'MapReduce is a software framework for processing vast amounts of data in parallel on large clusters of commodity hardware in a reliable, fault-tolerant manner. It abstracts distributed parallelization into two core functions: map and reduce.',
            [
                '<strong>Map Function:</strong> Transforms input key/value pairs into intermediate key/value pairs: $(k_1, v_1) \\to \\text{list}(k_2, v_2)$.',
                '<strong>Reduce Function:</strong> Merges all values associated with the same intermediate key: $(k_2, \\text{list}(v_2)) \\to \\text{list}(k_3, v_3)$.',
                '<strong>Data Locality:</strong> Computation is scheduled on the exact DataNode hosting the target HDFS block, minimizing network traffic.',
                '<strong>Combiner (Mini-Reducer):</strong> Optional local aggregation function executed in memory immediately after mapping to compress intermediate network transfers.',
                '<strong>Fault Handling:</strong> Failed map or reduce tasks are automatically restarted on alternate healthy worker nodes.'
            ],
            `graph LR
    Input[Input Split] --> Map[Mapper: Produce k2, v2]
    Map --> Comb[Combiner: Local Pre-aggregation]
    Comb --> Shuffle[Shuffle & Network Sort]
    Shuffle --> Red[Reducer: Aggregate by Key]
    Red --> Out[HDFS Output File]
    style Input fill:#1e293b,stroke:#3b82f6,color:#fff
    style Map fill:#1e293b,stroke:#10b981,color:#fff
    style Comb fill:#1e293b,stroke:#f59e0b,color:#fff
    style Red fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Out fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Word Count Map: <code>map(doc_id, text) -> emit(word, 1)</code>. Reduce: <code>reduce(word, list(1, 1, 1...)) -> emit(word, sum)</code>.',
            [
                {
                    question: 'What is the primary architectural purpose of a Combiner in the MapReduce pipeline?',
                    options: [
                        'To write final outputs directly to HDFS without needing reducers',
                        'To perform local pre-aggregation on mapper nodes and reduce network shuffle traffic',
                        'To split large files into 128 MB blocks',
                        'To verify client authentication tokens'
                    ],
                    answer: 1,
                    explanation: 'A Combiner acts as a mini-reducer locally on the mapper node to collapse key-value counts and minimize cross-network shuffle volume.'
                }
            ]
        ),
        'cs702bd-u2t2': createTopicEntry(
            'Shuffle & Sort Phase, Partitioners & Spill Management',
            'The Shuffle and Sort phase is the critical intermediary step between Map completion and Reduce execution. It transfers intermediate key-value pairs across cluster nodes and groups all values belonging to identical keys.',
            [
                '<strong>Partitioner:</strong> Determines which Reducer receives which intermediate key. Default is hash partitioning: $P = \\text{hash}(key) \\pmod{\\text{numReducers}}$.',
                '<strong>Spill to Disk:</strong> Mappers write output to an in-memory buffer (default 100 MB). When 80% full, a background thread spills sorted runs to local disk.',
                '<strong>Merging Spills:</strong> Before mapper finishes, individual spill files are merged into one large sorted, partitioned file.',
                '<strong>Shuffle Network Fetch:</strong> Reducers fetch their assigned partitions from all completed mapper nodes over HTTP.',
                '<strong>Data Skew:</strong> Uneven key distribution causes one reducer to process 90% of the data while other reducers sit idle.'
            ],
            `graph TD
    M1[Mapper 1 Buffer] -->|Spill & Partition| P1[Part 0] & P2[Part 1]
    M2[Mapper 2 Buffer] -->|Spill & Partition| P3[Part 0] & P4[Part 1]
    P1 & P3 -->|Shuffle HTTP Fetch| R0[Reducer 0]
    P2 & P4 -->|Shuffle HTTP Fetch| R1[Reducer 1]
    style M1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style M2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R0 fill:#1e293b,stroke:#10b981,color:#fff
    style R1 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Custom Partitioner: When data skew occurs on popular keys, overriding <code>getPartition(key, val, numPartitions)</code> distributes hot keys across multiple reducers.',
            [
                {
                    question: 'How does Hadoop determine which Reducer instance processes a given intermediate key by default?',
                    options: [
                        'Round-robin assignment based on timestamp',
                        'Hash code of the key modulo the number of reducers',
                        'Alphabetical order of key strings',
                        'Random assignment by the NameNode'
                    ],
                    answer: 1,
                    explanation: 'Default HashPartitioner uses (key.hashCode() & Integer.MAX_VALUE) % numReducers.'
                }
            ]
        ),
        'cs702bd-u2t3': createTopicEntry(
            'Classic Algorithms: Word Count, Inverted Index & Matrix Multiply',
            'Complex analytical algorithms are cast into MapReduce iterations. Standard formulations include Inverted Indexing (search engines) and Matrix Multiplication (graph analytics & ML).',
            [
                '<strong>Inverted Index:</strong> Maps words to the list of document IDs containing them. Map: emit $(word, docID)$. Reduce: emit $(word, [docID_1, docID_2, ...])$.',
                '<strong>Two-Pass Matrix Multiplication:</strong> To multiply $A_{m \\times k} \\times B_{k \\times n}$, first pass computes products $A_{ik} B_{kj}$, second pass sums elements.',
                '<strong>One-Pass Matrix Multiply:</strong> Mapper sends $A_{ik}$ to all reducers $(i, j)$ for $1 \\le j \\le n$; sends $B_{kj}$ to all reducers $(i, j)$ for $1 \\le i \\le m$.',
                '<strong>Graph PageRank:</strong> Mappers distribute current PageRank mass along outgoing edges; reducers sum incoming contributions with damping factor $d = 0.85$.',
                '<strong>Iterative MapReduce limitation:</strong> Writes entire intermediate graph state to HDFS disk after every iteration, causing massive I/O overhead.'
            ],
            `graph LR
    Doc1["Doc 1: Cat Dog"] --> M1[Mapper 1]
    Doc2["Doc 2: Cat Bird"] --> M2[Mapper 2]
    M1 --> S[Shuffle]
    M2 --> S
    S --> R1["Reducer: 'Cat' -> [Doc1, Doc2]"]
    S --> R2["Reducer: 'Dog' -> [Doc1]"]
    style Doc1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style Doc2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R1 fill:#1e293b,stroke:#10b981,color:#fff
    style R2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'PageRank iteration equation: $PR(u) = \\frac{1-d}{N} + d \\sum_{v \\in B_u} \\frac{PR(v)}{L(v)}$. Each iteration requires a separate MapReduce job step.',
            [
                {
                    question: 'Why is traditional MapReduce inefficient for iterative machine learning and graph algorithms (like PageRank)?',
                    options: [
                        'MapReduce cannot handle string data types',
                        'It persists complete state to physical HDFS disks between every iteration cycle',
                        'It does not support multiple worker nodes',
                        'It lacks support for the Java programming language'
                    ],
                    answer: 1,
                    explanation: 'MapReduce writes intermediate results to disk and replicates over the network on every iteration, incurring massive disk I/O penalties.'
                }
            ]
        ),
        'cs702bd-u2t4': createTopicEntry(
            'Distributed Joins: Map-Side Join vs Reduce-Side Join',
            'Joining two datasets in distributed architectures is constrained by network bandwidth. Strategies vary dramatically depending on dataset sizes.',
            [
                '<strong>Reduce-Side Join (Repartition Join):</strong> Generic join supporting datasets of any size. Both datasets tagged with source identifier and mapped on join key; Reducer joins matching records.',
                '<strong>Reduce-Side Drawback:</strong> Massive network shuffle because ALL records from both datasets must cross the network switches.',
                '<strong>Map-Side Join (Broadcast / Replicated Join):</strong> One dataset is small enough to fit in memory (e.g., < 100 MB dimension table). Distributed Cache broadcasts small table to all mappers; mappers join in memory with zero shuffle.',
                '<strong>Bucket / Sort-Merge Bucket (SMB) Join:</strong> Both datasets pre-partitioned on identical join keys and pre-sorted. Mappers perform linear-time merge without shuffle.',
                '<strong>Skewed Join:</strong> Handles popular join keys by splitting hot keys across multiple reducers.'
            ],
            `graph TD
    SmallDB[Small Table: Customers] -->|Distributed Cache Broadcast| M1[Mapper 1 with Large Orders]
    SmallDB -->|Distributed Cache Broadcast| M2[Mapper 2 with Large Orders]
    M1 -->|In-Memory Join| Out1[Joined Output: Zero Shuffle]
    M2 -->|In-Memory Join| Out2[Joined Output: Zero Shuffle]
    style SmallDB fill:#1e293b,stroke:#f59e0b,color:#fff
    style M1 fill:#1e293b,stroke:#10b981,color:#fff
    style M2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Broadcast Join memory condition: $\\text{Size}(Table_{small}) < \\text{JVM Heap Limit}$. If breached, mappers throw <code>OutOfMemoryError</code>.',
            [
                {
                    question: 'Which join strategy completely eliminates the expensive network Shuffle & Sort phase in MapReduce when one table is small?',
                    options: ['Reduce-Side Join', 'Map-Side Broadcast Join', 'Cartesian Product Join', 'Cascading Repartition Join'],
                    answer: 1,
                    explanation: 'A Map-Side Join distributes the small table to all mappers via Distributed Cache, joining in memory without any reducer shuffle.'
                }
            ]
        )
    },
    'cs702bd-u3': {
        'cs702bd-u3t1': createTopicEntry(
            'Spark Ecosystem: Driver, Cluster Manager, Executors & Lineage',
            'Apache Spark is a unified analytics engine for large-scale data processing. By maintaining datasets in RAM across computations, Spark achieves up to 100x faster execution than MapReduce for iterative workloads.',
            [
                '<strong>Driver Program:</strong> Contains the <code>main()</code> method, instantiates <code>SparkSession</code>, translates user code into execution DAGs.',
                '<strong>Cluster Manager:</strong> Allocates cluster resources (Standalone, YARN, Mesos, or Kubernetes).',
                '<strong>Executors:</strong> Worker JVM processes running on cluster nodes executing individual tasks and caching data in RAM.',
                '<strong>DAGScheduler:</strong> Breaks logical execution plans into stages of tasks based on shuffle boundaries.',
                '<strong>TaskScheduler:</strong> Sends tasks to executors with locality awareness (PROCESS_LOCAL, NODE_LOCAL, RACK_LOCAL).'
            ],
            `graph TD
    UserCode[Spark Application] --> Driver[Driver: DAGScheduler & TaskScheduler]
    Driver --> CM[Cluster Manager: YARN / K8s]
    CM --> Exec1[Executor 1: Tasks & Memory Cache]
    CM --> Exec2[Executor 2: Tasks & Memory Cache]
    style Driver fill:#1e293b,stroke:#3b82f6,color:#fff
    style CM fill:#1e293b,stroke:#f59e0b,color:#fff
    style Exec1 fill:#1e293b,stroke:#10b981,color:#fff
    style Exec2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Data Locality levels: $\\text{PROCESS\\_LOCAL} < \\text{NODE\\_LOCAL} < \\text{NO\\_PREF} < \\text{RACK\\_LOCAL} < \\text{ANY}$. Spark waits short intervals (locality wait) before falling back to remote nodes.',
            [
                {
                    question: 'In Apache Spark, which component is responsible for translating user code into a Directed Acyclic Graph (DAG) of execution stages?',
                    options: ['Worker NodeManager', 'Driver Program / DAGScheduler', 'Shuffle Service', 'HDFS NameNode'],
                    answer: 1,
                    explanation: 'The Driver program\'s DAGScheduler converts transformations into a DAG of execution stages.'
                }
            ]
        ),
        'cs702bd-u3t2': createTopicEntry(
            'Resilient Distributed Datasets (RDDs): Transformations vs Actions',
            'An RDD is an immutable, partitioned collection of records that can be operated on in parallel. RDDs are resilient because they track their computational lineage graph, allowing lost partitions to be recomputed on the fly.',
            [
                '<strong>Transformations (Lazy):</strong> Create a new RDD from an existing one without executing computation (e.g., <code>map, filter, flatMap, groupByKey, reduceByKey</code>).',
                '<strong>Actions (Eager):</strong> Trigger execution of the lineage graph and return values to driver or write to storage (e.g., <code>count, collect, take, saveAsTextFile</code>).',
                '<strong>Narrow Dependency:</strong> Each parent partition is used by at most one child partition (e.g., <code>map, filter</code>); no network shuffle needed.',
                '<strong>Wide Dependency:</strong> Multiple child partitions depend on data in a parent partition (e.g., <code>groupByKey, join</code>); requires full network shuffle.',
                '<strong>Persistence:</strong> <code>rdd.persist(StorageLevel.MEMORY_AND_DISK)</code> caches RDD in RAM to prevent re-executing lineage.'
            ],
            `graph TD
    R1[RDD 1: Raw Lines] -->|Narrow: map| R2[RDD 2: Words]
    R2 -->|Narrow: filter| R3[RDD 3: Non-empty]
    R3 -->|Wide: reduceByKey / Shuffle| R4[RDD 4: Aggregated Counts]
    R4 -->|Action: collect| Driver[Driver Result]
    style R1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R2 fill:#1e293b,stroke:#10b981,color:#fff
    style R3 fill:#1e293b,stroke:#10b981,color:#fff
    style R4 fill:#1e293b,stroke:#f59e0b,color:#fff
    style Driver fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Why <code>reduceByKey</code> beats <code>groupByKey</code>: <code>reduceByKey</code> performs map-side combine before shuffle; <code>groupByKey</code> transfers all raw unaggregated values over the network.',
            [
                {
                    question: 'What is the key difference between a Narrow Dependency and a Wide Dependency in Spark RDDs?',
                    options: [
                        'Narrow dependencies store data on SSD; wide dependencies store in RAM',
                        'Narrow dependencies do not require network shuffle; wide dependencies require data shuffling across partitions',
                        'Narrow dependencies can only be written in Python; wide dependencies require Scala',
                        'Narrow dependencies are actions; wide dependencies are transformations'
                    ],
                    answer: 1,
                    explanation: 'Narrow dependencies execute locally without shuffling, whereas wide dependencies require cross-network partition shuffling.'
                }
            ]
        ),
        'cs702bd-u3t3': createTopicEntry(
            'Spark SQL, DataFrames & Catalyst Optimizer Engine',
            'DataFrames provide structured abstractions over RDDs with named columns, schema typing, and SQL querying. Spark SQL utilizes the Catalyst Optimizer and Tungsten execution engine to compile high-level queries into high-performance JVM bytecode.',
            [
                '<strong>Catalyst Optimizer:</strong> Performs rule-based and cost-based query optimization across four phases: Analysis, Logical Optimization, Physical Planning, and Code Generation.',
                '<strong>Predicate Pushdown:</strong> Filters (e.g., <code>WHERE age > 21</code>) are pushed down directly to the storage layer (Parquet) so only relevant blocks are read into RAM.',
                '<strong>Column Pruning:</strong> Drops unselected columns before scanning data files.',
                '<strong>Tungsten Engine:</strong> Bypasses JVM garbage collection by managing off-heap binary memory in compact byte arrays; utilizes whole-stage code generation.',
                '<strong>Adaptive Query Execution (AQE):</strong> Re-optimizes query execution plans dynamically at runtime based on actual stage shuffle statistics.'
            ],
            `graph LR
    SQL[SQL Query / DF Code] --> AST[Unresolved Logical Plan]
    AST -->|Catalog Analysis| Analyzed[Analyzed Logical Plan]
    Analyzed -->|Optimization Rules| OptPlan[Optimized Logical Plan: Predicate Pushdown]
    OptPlan -->|Cost Model| PhysPlan[Physical Plan]
    PhysPlan -->|Tungsten CodeGen| Bytecode[Native Java Bytecode]
    style SQL fill:#1e293b,stroke:#3b82f6,color:#fff
    style OptPlan fill:#1e293b,stroke:#10b981,color:#fff
    style Bytecode fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Predicate Pushdown performance gain: $I/O_{optimized} = I/O_{raw} \\times \\frac{\\text{Matching Rows}}{\\text{Total Rows}}$. Reduces I/O by 90%+ on columnar formats.',
            [
                {
                    question: 'What optimization technique allows Spark SQL to skip loading unnecessary columns from Parquet files on disk into memory?',
                    options: ['Predicate Pushdown', 'Column Pruning', 'Shuffle Hash Join', 'Lineage Recomputation'],
                    answer: 1,
                    explanation: 'Column Pruning restricts the disk scan exclusively to the columns explicitly referenced in the query.'
                }
            ]
        ),
        'cs702bd-u3t4': createTopicEntry(
            'Spark Streaming & Structured Streaming Architecture',
            'Real-time streaming in Spark evolved from legacy DStreams (micro-batching) to Structured Streaming, which treats real-time streams as continuously appended unbounded tables with unified DataFrame APIs.',
            [
                '<strong>Legacy DStreams:</strong> Discretized streams processing incoming data in small fixed time windows (e.g., 500ms micro-batches).',
                '<strong>Structured Streaming:</strong> Query views stream as an unbounded table: incoming data items are rows appended continuously.',
                '<strong>Event-Time vs Processing-Time:</strong> Event-time is the timestamp embedded in the event at generation; processing-time is when the server receives it.',
                '<strong>Watermarking:</strong> Allows the engine to drop late-arriving events: <code>withWatermark("timestamp", "10 minutes")</code> bounds state store size.',
                '<strong>Output Modes:</strong> Append Mode (only new rows), Complete Mode (entire updated result table), Update Mode (only changed rows).'
            ],
            `graph LR
    Stream[Live Event Stream] --> Unbounded[(Unbounded Input Table)]
    Unbounded --> Query[Structured Streaming Query]
    Query --> Result[(Result Table)]
    Result --> Sink[Output Sink: Kafka / Delta Lake]
    style Stream fill:#1e293b,stroke:#3b82f6,color:#fff
    style Query fill:#1e293b,stroke:#10b981,color:#fff
    style Sink fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Watermark boundary equation: $T_{cutoff} = \\max(EventTime) - DelayThreshold$. Any event where $EventTime < T_{cutoff}$ is discarded from stateful window aggregation.',
            [
                {
                    question: 'In Spark Structured Streaming, what is the role of a "Watermark"?',
                    options: [
                        'To embed copyright metadata into output files',
                        'To set a threshold for discarding late-arriving data and clean up intermediate memory state',
                        'To compress streaming output using gzip',
                        'To monitor cluster CPU temperature'
                    ],
                    answer: 1,
                    explanation: 'Watermarks define how late data can arrive before being discarded, bounding memory usage for stateful aggregations.'
                }
            ]
        )
    },
    'cs702bd-u4': {
        'cs702bd-u4t1': createTopicEntry(
            'CAP Theorem, PACELC Theorem & BASE vs ACID Models',
            'Distributed storage systems cannot provide all classical database guarantees simultaneously over unreliable physical networks. Architectural decisions require understanding CAP, PACELC, and BASE properties.',
            [
                '<strong>Consistency (C in CAP):</strong> Every read receives the most recent write or an error (linearizability).',
                '<strong>Availability (A in CAP):</strong> Every non-failing node returns a non-error response without guaranteeing latest write.',
                '<strong>Partition Tolerance (P in CAP):</strong> System continues operating despite arbitrary network dropped/delayed packets.',
                '<strong>BASE Model:</strong> Basically Available, Soft state, Eventual consistency (contrasted with relational ACID).',
                '<strong>System Classifications:</strong> CP (MongoDB, HBase, Bigtable), AP (Cassandra, DynamoDB, Couchbase).'
            ],
            `graph TD
    CAP[CAP Theorem Trilemma] --> CP[CP: Consistency + Partition Tolerance e.g. HBase, MongoDB]
    CAP --> AP[AP: Availability + Partition Tolerance e.g. Cassandra, Dynamo]
    CAP --> CA[CA: Consistency + Availability *No distributed partitions e.g. Single-node RDBMS]
    style CAP fill:#1e293b,stroke:#3b82f6,color:#fff
    style CP fill:#1e293b,stroke:#10b981,color:#fff
    style AP fill:#1e293b,stroke:#f59e0b,color:#fff
    style CA fill:#1e293b,stroke:#ef4444,color:#fff`,
            'Quorum Consistency equation: $R + W > N$. If Read Quorum ($R$) plus Write Quorum ($W$) strictly exceeds Total Replicas ($N$), reads are guaranteed to overlap with latest write, achieving strong consistency on an AP database.',
            [
                {
                    question: 'In a distributed database with N = 3 replicas, what values of R (read quorum) and W (write quorum) guarantee strong consistency according to the quorum equation?',
                    options: ['R = 1, W = 1', 'R = 1, W = 2', 'R = 2, W = 2', 'R = 0, W = 3'],
                    answer: 2,
                    explanation: 'For strong consistency, R + W > N. Here 2 + 2 = 4 > 3, ensuring at least one overlapping node contains the newest write.'
                }
            ]
        ),
        'cs702bd-u4t2': createTopicEntry(
            'Key-Value (Redis) & Document Stores (MongoDB BSON & Replica Sets)',
            'NoSQL databases sacrifice relational join constraints for horizontal scalability and schema flexibility. Key-Value stores optimize for sub-millisecond retrieval; Document stores handle nested semi-structured objects.',
            [
                '<strong>Redis (In-Memory Key-Value):</strong> Single-threaded event loop (epoll), in-memory data structures (strings, hashes, lists, sets, sorted sets), RDB and AOF persistence.',
                '<strong>MongoDB (Document Store):</strong> JSON-like BSON documents with dynamic schema, WiredTiger storage engine, secondary indexes.',
                '<strong>MongoDB Replica Set:</strong> Primary-secondary architecture with Raft-like election. Primary handles all writes and replicates oplog to secondaries.',
                '<strong>Sharding in MongoDB:</strong> Horizontal data partitioning across shard clusters routed through <code>mongos</code> query routers using shard keys.',
                '<strong>Best Use Cases:</strong> Redis for session stores, leaderboards, distributed locks; MongoDB for e-commerce catalogs, CMS, user profiles.'
            ],
            `graph TD
    Client --> Router[mongos Query Router]
    Router --> ConfigDB[Config Server: Metadata & Chunk Ranges]
    Router --> Shard1[Shard 1: Primary + Secondaries]
    Router --> Shard2[Shard 2: Primary + Secondaries]
    style Router fill:#1e293b,stroke:#3b82f6,color:#fff
    style Shard1 fill:#1e293b,stroke:#10b981,color:#fff
    style Shard2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Redis Single-Threaded Performance: Handles 100,000+ operations/sec per core by avoiding CPU context switching and lock contention while operating entirely in memory.',
            [
                {
                    question: 'How does MongoDB replicate data between primary and secondary nodes inside a Replica Set?',
                    options: ['By executing raw SQL trigger procedures', 'By streaming operations recorded in the internal oplog (operations log)', 'By taking full filesystem snapshots every second', 'By copying whole collection files across FTP'],
                    answer: 1,
                    explanation: 'Secondary nodes tail the primary\'s <code>oplog</code> (operations log) and apply modifications asynchronously to keep replicas synchronized.'
                }
            ]
        ),
        'cs702bd-u4t3': createTopicEntry(
            'Column-Family: Cassandra Consistent Hashing, Gossip & LSM Trees',
            'Apache Cassandra is a distributed, decentralized, masterless NoSQL database designed for high write throughput and zero single points of failure, inspired by Amazon Dynamo and Google Bigtable.',
            [
                '<strong>Masterless Ring Architecture:</strong> Every node is peer identical; any node can act as coordinator for any read/write request.',
                '<strong>Consistent Hashing:</strong> Partition key is hashed with Murmur3 onto a 64-bit ring $(-2^{63} \\text{ to } 2^{63}-1)$ with virtual nodes (vnodes).',
                '<strong>Gossip Protocol:</strong> Peer-to-peer communication protocol where nodes exchange state information every second to detect cluster topology and node health.',
                '<strong>Write Path (LSM Tree):</strong> Client $\\to$ CommitLog on disk (durability) $+$ Memtable in RAM. When Memtable fills, it flushes to immutable SSTable files on disk.',
                '<strong>Read Path & Bloom Filters:</strong> Bloom filters in RAM check whether an SSTable definitely does NOT contain a key, preventing unnecessary disk seeks.'
            ],
            `graph TD
    Write[Write Request] --> CL[CommitLog: Sequential Append Disk]
    Write --> MT[Memtable: In-Memory Sorted Tree]
    MT -->|Flush when full| SST[Immutable SSTable: Disk]
    SST -->|Compaction| MergedSST[Compacted SSTable]
    style Write fill:#1e293b,stroke:#3b82f6,color:#fff
    style CL fill:#1e293b,stroke:#ef4444,color:#fff
    style MT fill:#1e293b,stroke:#10b981,color:#fff
    style SST fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Bloom Filter false positive rate: $p \\approx \\left(1 - e^{-kn/m}\\right)^k$, where $m$ is filter bits, $k$ is hash count, and $n$ is inserted keys. Never returns false negatives.',
            [
                {
                    question: 'Why are writes in Apache Cassandra exceptionally fast compared to traditional relational databases?',
                    options: [
                        'Cassandra does not write data to persistent disks',
                        'Writes append sequentially to an in-memory Memtable and append-only CommitLog without random disk seeks',
                        'Cassandra disables all encryption and network security checks',
                        'All writes bypass the coordinator node entirely'
                    ],
                    answer: 1,
                    explanation: 'Cassandra uses Log-Structured Merge (LSM) trees: writes append sequentially to the CommitLog and Memtable, avoiding random disk seeks.'
                }
            ]
        ),
        'cs702bd-u4t4': createTopicEntry(
            'Graph Databases: Neo4j Cypher & Index-Free Adjacency',
            'Graph databases store data as nodes, edges (relationships), and properties. Unlike relational databases that simulate relationships using foreign keys and expensive table joins, graph engines treat relationships as first-class physical pointers.',
            [
                '<strong>Index-Free Adjacency:</strong> Every node contains direct physical memory/disk pointers to its adjacent connected nodes. Traversing an edge requires $O(1)$ pointer dereferencing.',
                '<strong>Join Elimination:</strong> Multi-hop relationships (e.g., "friends of friends of friends") traverse in time proportional to subgraph size, independent of total database scale.',
                '<strong>Property Graph Model:</strong> Nodes represent entities; edges represent directed, typed relationships with key-value properties.',
                '<strong>Cypher Query Language:</strong> Declarative ASCII-art pattern matching: <code>MATCH (u:User)-[:FRIEND]->(f:User) RETURN f.name</code>.',
                '<strong>Applications:</strong> Social networks, fraud detection rings, recommendation engines, knowledge graphs.'
            ],
            `graph LR
    U1[(Node: Alice)] -->|:FOLLOWS {since: 2021}| U2[(Node: Bob)]
    U2 -->|:MANAGES| U3[(Node: Engineering)]
    U1 -->|:MEMBER_OF| U3
    style U1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style U2 fill:#1e293b,stroke:#10b981,color:#fff
    style U3 fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Graph traversal complexity: With Index-Free Adjacency, visiting $k$ edges takes $O(k)$ time. In relational systems with $m$ total rows, joining $d$ tables takes $O(d \\log m)$.',
            [
                {
                    question: 'What architectural property enables graph databases like Neo4j to traverse relationships in O(1) time per hop without global index lookups?',
                    options: ['Sharded B-Trees', 'Index-Free Adjacency', 'Hash Partitioning', 'Consistent Hashing'],
                    answer: 1,
                    explanation: 'Index-Free Adjacency means each node directly holds physical pointers to its neighboring nodes.'
                }
            ]
        )
    },
    'cs702bd-u5': {
        'cs702bd-u5t1': createTopicEntry(
            'Apache Kafka Architecture: Topics, Partitions & Consumer Groups',
            'Apache Kafka is a distributed event streaming platform capable of handling trillions of events a day. It is structured as a distributed, partitioned, replicated commit log.',
            [
                '<strong>Topic:</strong> A named category or feed to which records are published.',
                '<strong>Partitions:</strong> Topics are split into ordered, immutable sequences of records on disk. Partitions are the unit of parallelism in Kafka.',
                '<strong>Producers:</strong> Write records; partition determined by key hash or round-robin.',
                '<strong>Consumer Groups:</strong> Each partition in a topic is consumed by exactly ONE consumer instance within a consumer group, allowing load scaling.',
                '<strong>Log Retention & Offsets:</strong> Messages are not deleted upon consumption; consumers track their progress via integer offsets.'
            ],
            `graph LR
    Prod[Producer] -->|Key Hash| T1[Topic A: Partition 0]
    Prod -->|Key Hash| T2[Topic A: Partition 1]
    T1 -->|Read Offset 104| CG1[Consumer 1 in Group]
    T2 -->|Read Offset 89| CG2[Consumer 2 in Group]
    style Prod fill:#1e293b,stroke:#3b82f6,color:#fff
    style T1 fill:#1e293b,stroke:#f59e0b,color:#fff
    style T2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style CG1 fill:#1e293b,stroke:#10b981,color:#fff
    style CG2 fill:#1e293b,stroke:#10b981,color:#fff`,
            'Consumer scaling limit: If topic has $P$ partitions, maximum active consumers in a single consumer group is $P$. Adding consumer $P+1$ leaves it idle.',
            [
                {
                    question: 'If an Apache Kafka topic has 4 partitions, what happens if you deploy 6 consumer instances in the same consumer group?',
                    options: [
                        'Kafka crashes due to buffer overflow',
                        '4 consumers will each read from 1 partition, and 2 consumers will remain completely idle',
                        'Partitions are split into fractions dynamically',
                        'Messages are duplicated across all 6 consumers'
                    ],
                    answer: 1,
                    explanation: 'Each partition can be assigned to at most one consumer per group; extra consumers remain idle until a rebalance occurs.'
                }
            ]
        ),
        'cs702bd-u5t2': createTopicEntry(
            'Lambda Architecture vs Kappa Architecture Data Pipelines',
            'Data pipeline architectures balance low-latency streaming analytics with comprehensive batch accuracy. Lambda architecture runs parallel batch and speed layers; Kappa architecture processes all data through a single stream engine.',
            [
                '<strong>Lambda Batch Layer:</strong> Immutable master dataset processed periodically via MapReduce/Spark for 100% complete, accurate batch views.',
                '<strong>Lambda Speed Layer:</strong> Real-time streaming engine (Flink/Spark Streaming) processing recent Delta data with low latency.',
                '<strong>Lambda Serving Layer:</strong> Combines queries across batch and speed views to answer client requests.',
                '<strong>Lambda Pain Point:</strong> Code duplication—developers must maintain two separate codebases (batch and streaming) doing the same business logic.',
                '<strong>Kappa Architecture:</strong> Eliminates batch layer entirely! Everything is an append-only event stream (Kafka); reprocessing is done by replaying the log from offset 0.'
            ],
            `graph TD
    subgraph Lambda[Lambda Architecture]
        In1[Raw Data] --> Batch[Batch Layer: HDFS + Spark]
        In1 --> Speed[Speed Layer: Streaming]
        Batch --> Serving[Serving Layer: Merged View]
        Speed --> Serving
    end
    subgraph Kappa[Kappa Architecture]
        In2[Raw Data] --> StreamLog[Stream Store: Kafka]
        StreamLog --> StreamProc[Stream Engine: Flink / Spark]
        StreamProc --> OutView[Real-time Serving View]
    end
    style Lambda fill:#1e293b,stroke:#3b82f6,color:#fff
    style Kappa fill:#1e293b,stroke:#10b981,color:#fff`,
            'Query in Lambda: $\\text{Query}(Q) = \\text{MergeFunction}(\\text{BatchView}(Q), \\text{RealtimeView}(Q))$.',
            [
                {
                    question: 'What is the primary operational advantage of the Kappa Architecture over the Lambda Architecture?',
                    options: [
                        'Kappa architecture eliminates code duplication by using a single streaming engine for both real-time and reprocessing workloads',
                        'Kappa architecture requires zero disk storage',
                        'Kappa architecture uses only relational SQL databases',
                        'Kappa architecture eliminates the need for network connectivity'
                    ],
                    answer: 0,
                    explanation: 'Kappa architecture avoids maintaining dual batch and streaming codebases by running all computations through a single stream engine.'
                }
            ]
        ),
        'cs702bd-u5t3': createTopicEntry(
            'Data Lakes, Parquet Columns & Lakehouses (Delta Lake / Iceberg)',
            'Modern big data storage evolved from unmanaged data swamps into ACID-compliant Data Lakehouses combining the cheap object storage of Data Lakes (S3) with the transactional guarantees of Data Warehouses.',
            [
                '<strong>Data Lake:</strong> Central repository storing structured and unstructured data at scale in raw formats (S3, GCS, ADLS).',
                '<strong>Apache Parquet:</strong> Columnar storage format featuring dictionary encoding, bit packing, run-length encoding (RLE), and column metadata statistics (min/max).',
                '<strong>Lakehouse (Delta Lake, Apache Iceberg, Apache Hudi):</strong> Adds an ACID transaction log over Parquet files, enabling time-travel, concurrent writes, and schema enforcement.',
                '<strong>Columnar vs Row-oriented:</strong> Row-oriented (CSV, Avro) is ideal for OLTP record inserts; Columnar (Parquet, ORC) is 10-100x faster for OLAP aggregations.',
                '<strong>Time Travel:</strong> Ability to query historical table snapshots: <code>SELECT * FROM sales VERSION AS OF 14</code>.'
            ],
            `graph TD
    Raw[Raw Ingestion: Logs & JSON] --> Lake[Bronze: Raw Data Lake]
    Lake --> Silver[Silver: Cleaned & Filtered Parquet]
    Silver --> Gold[Gold: Aggregated Delta Lakehouse with ACID]
    Gold --> BI[BI Dashboards & ML Models]
    style Raw fill:#1e293b,stroke:#3b82f6,color:#fff
    style Lake fill:#1e293b,stroke:#f59e0b,color:#fff
    style Silver fill:#1e293b,stroke:#10b981,color:#fff
    style Gold fill:#1e293b,stroke:#8b5cf6,color:#fff`,
            'Parquet compression efficiency: Column values of identical types compress drastically better than mixed row records; typical compression ratio is 75-85% compared to raw CSV.',
            [
                {
                    question: 'What capability do technologies like Delta Lake and Apache Iceberg bring to raw Parquet object storage in a Data Lake?',
                    options: [
                        'ACID transactions, time-travel, and schema enforcement',
                        'Physical spinning hard drive defragmentation',
                        'Conversion to Microsoft Excel spreadsheets',
                        'Automatic generation of HTML websites'
                    ],
                    answer: 0,
                    explanation: 'Lakehouse table formats add ACID transactions, commit log tracking, and time-travel querying on top of cloud object storage.'
                }
            ]
        ),
        'cs702bd-u5t4': createTopicEntry(
            'Big Data Governance, Kerberos Security & Apache Ranger',
            'Enterprise big data clusters store sensitive customer and corporate data across thousands of shared nodes, mandating enterprise-grade authentication, authorization, auditing, and lineage tracking.',
            [
                '<strong>Kerberos Authentication:</strong> Prevents unauthorized nodes or users from spoofing identities on the Hadoop RPC network using Ticket Granting Tickets (TGT).',
                '<strong>Apache Ranger:</strong> Centralized framework to define, administer, and manage fine-grained authorization policies (row-level filtering, column masking).',
                '<strong>Apache Atlas:</strong> Provides open metadata management and data governance, tracking end-to-end data lineage across pipeline stages.',
                '<strong>Data Masking:</strong> Obfuscates PII (Personally Identifiable Information) like Social Security Numbers or Credit Cards in-flight.',
                '<strong>Regulatory Compliance:</strong> Enforcing GDPR "Right to be Forgotten" in immutable append-only data lakes using Lakehouse point-updates.'
            ],
            `graph LR
    Client -->|1. Request TGT| KDC[Kerberos KDC]
    KDC -->|2. Issue Ticket| Client
    Client -->|3. Authenticated RPC| NN[HDFS NameNode]
    NN -->|4. Check Authorization| Ranger[Apache Ranger Policy Engine]
    Ranger -->|Allow / Deny & Audit| NN
    style KDC fill:#1e293b,stroke:#3b82f6,color:#fff
    style NN fill:#1e293b,stroke:#10b981,color:#fff
    style Ranger fill:#1e293b,stroke:#f59e0b,color:#fff`,
            'Data Lineage Graph: Directed graph $G = (V, E)$ where vertices $V$ are datasets/processes and edges $E$ are transformations, auditing data provenance.',
            [
                {
                    question: 'Which open-source tool provides centralized security policy management, row-level filtering, and data masking across the Hadoop ecosystem?',
                    options: ['Apache Ranger', 'Apache Flume', 'Apache Oozie', 'Apache Mahout'],
                    answer: 0,
                    explanation: 'Apache Ranger is the standard framework for centralized security administration, role-based authorization, and column/row masking in big data.'
                }
            ]
        )
    }
};

// Write files function
function writeDataFile(filename, dataObj) {
    const fullPath = path.join(__dirname, '../js', filename);
    const content = `/**
 * Academy LMS - Auto-Generated Curriculum Data
 * Course: ${filename}
 */
window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, ${JSON.stringify(dataObj, null, 4)});
`;
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[SUCCESS] Wrote ${filename} (${(content.length / 1024).toFixed(1)} KB)`);
}

writeDataFile('data_cs701.js', cs701Data);
writeDataFile('data_cs702-bd.js', cs702bdData);
