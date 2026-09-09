/**
 * Academy LMS - Practice & Testing Hub Controller
 * Supports:
 * 1. Topic Drills (Instant feedback & explanations)
 * 2. Timed Mock Exams (10m, 15m, 20m, 30m with automatic score logging)
 * 3. 3D Active-Recall Flashcard Deck (Self-grading & card mastery)
 * 4. Step-by-Step Solved Numerical & Proof Trainers (Subnetting, RSA, CPM, FIRST/FOLLOW)
 * 5. 60-Second Rapid-Fire Speed Streak Challenge (Combo multipliers & audio synthesizer)
 */

const extraPracticeQuestions = [
    // Semester 5: CS501 - Theory of Computation
    {
        id: 'bonus-toc-1',
        courseId: 'cs501',
        courseCode: 'CS501',
        topicTitle: 'Finite Automata',
        question: 'Which of the following is TRUE regarding Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA)?',
        options: [
            'DFAs are strictly more powerful in language acceptance than NFAs',
            'Every language accepted by an NFA can also be accepted by an equivalent DFA via subset construction',
            'NFAs can recognize context-free languages that DFAs cannot',
            'DFAs can have multiple transitions for the same symbol from a single state'
        ],
        answer: 1,
        explanation: 'Through Rabin-Scott subset construction, every NFA with N states can be converted into an equivalent DFA with up to 2^N states recognizing the exact same regular language.'
    },
    {
        id: 'bonus-toc-2',
        courseId: 'cs501',
        courseCode: 'CS501',
        topicTitle: 'Pumping Lemma',
        question: 'What is the primary academic purpose of the Pumping Lemma for regular languages?',
        options: [
            'To prove that a given language IS regular',
            'To minimize the number of states in a DFA',
            'To prove by contradiction that a given language is NOT regular',
            'To convert context-free grammars into Chomsky Normal Form'
        ],
        answer: 2,
        explanation: 'The Pumping Lemma provides a necessary condition for regularity; failure to satisfy the pumping conditions proves by contradiction that the language cannot be regular.'
    },

    // Semester 5: CS502 - Database Management Systems (DBMS)
    {
        id: 'bonus-dbms-1',
        courseId: 'cs502',
        courseCode: 'CS502',
        topicTitle: 'Normalization',
        question: 'A relation R is in Boyce-Codd Normal Form (BCNF) if and only if for every functional dependency X -> Y:',
        options: [
            'Y is a prime attribute',
            'X is a superkey of relation R',
            'R contains no multi-valued dependencies',
            'Every attribute is non-transitively dependent on the primary key'
        ],
        answer: 1,
        explanation: 'BCNF is a stricter form of 3NF requiring that for every non-trivial functional dependency X -> Y, the determinant X must be a superkey.'
    },
    {
        id: 'bonus-dbms-2',
        courseId: 'cs502',
        courseCode: 'CS502',
        topicTitle: 'Transactions & Concurrency',
        question: 'Which schedule property ensures that if transaction T2 reads data written by T1, then T1 commits before T2 commits?',
        options: ['Strict Schedule', 'Cascadeless Schedule', 'Recoverable Schedule', 'Conflict Serializable Schedule'],
        answer: 2,
        explanation: 'A recoverable schedule guarantees that no transaction commits with dirty read data that could later be aborted, preventing unrecoverable states.'
    },

    // Semester 5: CS503 - Data Analytics
    {
        id: 'bonus-da-1',
        courseId: 'cs503',
        courseCode: 'CS503',
        topicTitle: 'Statistical Testing',
        question: 'When testing a hypothesis, a Type I error occurs when:',
        options: [
            'The null hypothesis is true, but is incorrectly rejected',
            'The null hypothesis is false, but is accepted',
            'The sample size is too small to calculate variance',
            'The p-value exceeds the alpha significance threshold'
        ],
        answer: 0,
        explanation: 'A Type I error is a "false positive" where the researcher rejects a true null hypothesis (probability denoted by alpha).'
    },
    {
        id: 'bonus-da-2',
        courseId: 'cs503',
        courseCode: 'CS503',
        topicTitle: 'MapReduce Architecture',
        question: 'In the Hadoop MapReduce pipeline, what happens during the "Shuffle and Sort" phase?',
        options: [
            'Data is compressed and written directly to HDFS disk',
            'Intermediate key-value pairs produced by Mappers are partitioned and grouped by key before reaching Reducers',
            'Faulty nodes are restarted automatically by the NameNode',
            'SQL queries are compiled into Java bytecode'
        ],
        answer: 1,
        explanation: 'Shuffle and Sort collects mapper outputs, groups all values belonging to the same key, and routes them to the designated Reducer.'
    },

    // Semester 5: CS503-CS - Cyber Security
    {
        id: 'bonus-cs-1',
        courseId: 'cs503-cs',
        courseCode: 'CS503-CS',
        topicTitle: 'Asymmetric Cryptography',
        question: 'In the RSA public-key cryptosystem with primes p=7 and q=11, what is the value of the Euler Totient phi(n)?',
        options: ['77', '60', '70', '18'],
        answer: 1,
        explanation: 'phi(n) = (p - 1) * (q - 1) = (7 - 1) * (11 - 1) = 6 * 10 = 60.'
    },
    {
        id: 'bonus-cs-2',
        courseId: 'cs503-cs',
        courseCode: 'CS503-CS',
        topicTitle: 'Network Security',
        question: 'Which cryptographic protocol provides security at the Transport Layer of the OSI stack?',
        options: ['IPSec', 'TLS / SSL', 'SSH', 'Kerberos'],
        answer: 1,
        explanation: 'TLS operates right above the Transport layer (TCP) to provide end-to-end symmetric encryption, message integrity (HMAC), and server authentication.'
    },

    // Semester 5: CS504 - Web Technology
    {
        id: 'bonus-wt-1',
        courseId: 'cs504',
        courseCode: 'CS504',
        topicTitle: 'HTTP Protocol',
        question: 'Which HTTP method is idempotent and used to replace an entire resource at the target URI?',
        options: ['POST', 'PUT', 'PATCH', 'CONNECT'],
        answer: 1,
        explanation: 'PUT is defined as idempotent (multiple identical requests yield the identical server state) and completely updates/replaces the resource representation.'
    },

    // Semester 6: CS601 - Machine Learning
    {
        id: 'bonus-ml-1',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Model Evaluation',
        question: 'Which metric is most critical when the positive class is rare and false positives carry high penalty (e.g. spam detection)?',
        options: ['Accuracy', 'Precision', 'Recall', 'Mean Squared Error'],
        answer: 1,
        explanation: 'Precision = TP / (TP + FP). When false positives are costly, high precision ensures predicted positive labels are trustworthy.'
    },
    {
        id: 'bonus-ml-2',
        courseId: 'cs601',
        courseCode: 'CS601',
        topicTitle: 'Neural Networks',
        question: 'How does the Backpropagation algorithm calculate gradients for weight updates in deep neural networks?',
        options: [
            'Through Monte Carlo random sampling across output states',
            'By applying the calculus Chain Rule backwards from the loss function through each hidden layer',
            'By converting weights to discrete boolean values',
            'By calculating matrix inversions on input feature tensors'
        ],
        answer: 1,
        explanation: 'Backpropagation applies the Chain Rule backward to compute dLoss/dWeight for gradient descent parameter updates.'
    },

    // Semester 6: CS602 - Computer Networks
    {
        id: 'bonus-cn-1',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Subnetting & Addressing',
        question: 'How many usable host IP addresses are available in a /26 IPv4 subnet?',
        options: ['64', '62', '32', '30'],
        answer: 1,
        explanation: 'A /26 mask leaves 32 - 26 = 6 host bits. 2^6 = 64 total addresses. Subtracting 2 (network address and broadcast address) leaves 62 usable hosts.'
    },
    {
        id: 'bonus-cn-2',
        courseId: 'cs602',
        courseCode: 'CS602',
        topicTitle: 'Transport Layer Protocols',
        question: 'How does TCP handle flow control between sender and receiver?',
        options: [
            'By adjusting the IP TTL field on each hop',
            'Through the receiver advertising its available buffer space in the Window Size field',
            'By automatically terminating connections with packet loss',
            'Through UDP datagram checksum calculation'
        ],
        answer: 1,
        explanation: 'TCP flow control uses a sliding window where the receiver advertises its available buffer capacity in the 16-bit Window Size header field.'
    },

    // Semester 6: CS603 - Compiler Design
    {
        id: 'bonus-cd-1',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Syntax Analysis',
        question: 'Why must immediate left recursion (A -> A alpha | beta) be eliminated before constructing a top-down predictive LL(1) parser?',
        options: [
            'Because it causes infinite loops during recursive descent expansion',
            'Because left recursion is ungrammatical in context-free languages',
            'Because it forces the lexical analyzer to crash',
            'Because 3-address code cannot represent recursive functions'
        ],
        answer: 0,
        explanation: 'Top-down parsers expand the leftmost non-terminal; if A calls A immediately, the parser enters an infinite recursion without consuming any input token.'
    },
    {
        id: 'bonus-cd-2',
        courseId: 'cs603',
        courseCode: 'CS603',
        topicTitle: 'Code Optimization',
        question: 'Replacing "x = y * 2" with "x = y << 1" or "x = y + y" is an example of which compiler optimization technique?',
        options: ['Constant Folding', 'Strength Reduction', 'Dead Code Elimination', 'Loop Invariant Code Motion'],
        answer: 1,
        explanation: 'Strength reduction replaces an expensive arithmetic operation (like multiplication) with a cheaper equivalent operation (like bit-shift or addition).'
    },

    // Semester 6: CS604 - Project Management
    {
        id: 'bonus-pm-1',
        courseId: 'cs604',
        courseCode: 'CS604',
        topicTitle: 'Scheduling & CPM',
        question: 'In the Critical Path Method (CPM), what is the total float (slack) of activities located on the Critical Path?',
        options: ['Zero', 'Equal to half the project duration', 'Infinite', 'Proportional to risk factor'],
        answer: 0,
        explanation: 'The critical path is the longest sequence of dependent activities; any delay on this path directly delays the project, meaning its float is exactly zero.'
    },

    // Semester 6: CS603-CG - Computer Graphics
    {
        id: 'bonus-cg-1',
        courseId: 'cs603-cg',
        courseCode: 'CS603-CG',
        topicTitle: 'Rasterization & Algorithms',
        question: 'What is the principal computational advantage of Bresenham\'s line generation algorithm over DDA?',
        options: [
            'It works on 3D curves rather than straight lines',
            'It employs purely integer incremental arithmetic without floating-point multiplications or divisions',
            'It eliminates the need for frame buffers entirely',
            'It produces anti-aliased vector curves natively'
        ],
        answer: 1,
        explanation: 'Bresenham evaluates line scan-conversion using only incremental addition and sign checking on integers, which is computationally faster than DDA\'s floating-point math.'
    },

    // Semester 7: CS-701 - Software Architectures
    {
        id: 'bonus-cs701-1',
        courseId: 'cs701',
        courseCode: 'CS-701',
        topicTitle: '4+1 View Model',
        question: 'In Philippe Kruchten\'s 4+1 Architectural View Model, which view specifically targets system integrators dealing with concurrency, thread allocation, and throughput?',
        options: [
            'Logical View',
            'Process View',
            'Physical View',
            'Development View'
        ],
        answer: 1,
        explanation: 'The Process View deals with dynamic aspects of the system, addressing concurrency, synchronization, latency, and system throughput for system integrators.'
    },
    {
        id: 'bonus-cs701-2',
        courseId: 'cs701',
        courseCode: 'CS-701',
        topicTitle: 'Architectural Evaluation',
        question: 'What is the primary output of the Architecture Trade-off Analysis Method (ATAM)?',
        options: [
            'Executable binary test suites',
            'Sensitivity points, trade-off points, and architectural risk/non-risk themes',
            'Database entity-relationship normalizations',
            'Source code line-coverage metrics'
        ],
        answer: 1,
        explanation: 'ATAM identifies architectural sensitivity points, trade-off points (where improving one attribute compromises another), and risk themes.'
    },

    // Semester 7: CS-702-BD - Big Data
    {
        id: 'bonus-cs702bd-1',
        courseId: 'cs702-bd',
        courseCode: 'CS-702-BD',
        topicTitle: 'HDFS Architecture',
        question: 'In Hadoop Distributed File System (HDFS), how does the NameNode maintain block metadata in memory without losing state upon restart?',
        options: [
            'It queries all DataNodes via broadcast on every reboot',
            'It persists the state using FsImage checkpoints merged periodically with the EditLog',
            'It saves block locations in a relational PostgreSQL instance',
            'DataNodes send all replica data over HTTP during startup'
        ],
        answer: 1,
        explanation: 'The NameNode records transactional changes in the EditLog. During startup or via the Secondary NameNode, EditLog entries are merged with FsImage.'
    },
    {
        id: 'bonus-cs702bd-2',
        courseId: 'cs702-bd',
        courseCode: 'CS-702-BD',
        topicTitle: 'Apache Spark Computing',
        question: 'What fundamental design principle allows Apache Spark to achieve 10x-100x faster execution than traditional MapReduce on iterative machine learning algorithms?',
        options: [
            'Replacing TCP/IP sockets with UDP',
            'In-memory Resilient Distributed Datasets (RDDs) with lazy evaluation and lineage graphs',
            'Running without any master node or cluster coordinator',
            'Disabling data replication across worker nodes'
        ],
        answer: 1,
        explanation: 'Spark keeps intermediate transformations in RAM as immutable, fault-tolerant RDDs tracked by Directed Acyclic Graph (DAG) lineage, avoiding constant disk write/read cycles.'
    },

    // Semester 7: CS-702-WMC - Wireless & Mobile Computing
    {
        id: 'bonus-cs702wmc-1',
        courseId: 'cs702-wmc',
        courseCode: 'CS-702-WMC',
        topicTitle: 'Cellular Frequency Reuse',
        question: 'For a hexagonal cellular cluster with shift parameters i=2 and j=1, what is the valid cluster size N and the co-channel reuse distance ratio Q = D/R?',
        options: [
            'N = 4, Q = 3.46',
            'N = 7, Q = 4.58',
            'N = 9, Q = 5.20',
            'N = 12, Q = 6.00'
        ],
        answer: 1,
        explanation: 'Using N = i^2 + ij + j^2: N = 2^2 + 2(1) + 1^2 = 7 cells. The reuse ratio is Q = sqrt(3N) = sqrt(21) ≈ 4.58.'
    },
    {
        id: 'bonus-cs702wmc-2',
        courseId: 'cs702-wmc',
        courseCode: 'CS-702-WMC',
        topicTitle: 'MAC Layer & Collision',
        question: 'In IEEE 802.11 wireless networks, how does the CSMA/CA protocol mitigate the Hidden Terminal Problem?',
        options: [
            'By increasing the transmit power of all nodes to maximum',
            'By utilizing RTS/CTS (Request-to-Send / Clear-to-Send) handshaking and Network Allocation Vector (NAV)',
            'By switching all communications to full-duplex Ethernet cables',
            'By allowing collisions and recovering exclusively via parity checksums'
        ],
        answer: 1,
        explanation: 'RTS/CTS reserves the wireless medium locally; surrounding hidden stations overhear CTS and update their virtual carrier sensing NAV timer to remain silent.'
    },

    // Semester 7: CS-703-CIS - Cryptography & Information Security
    {
        id: 'bonus-cs703cis-1',
        courseId: 'cs703-cis',
        courseCode: 'CS-703-CIS',
        topicTitle: 'Diffie-Hellman Key Exchange',
        question: 'On what mathematical hardness assumption does the classic Diffie-Hellman Key Exchange protocol rely for its cryptographic security?',
        options: [
            'The difficulty of computing the Discrete Logarithm Problem (DLP) over a large finite cyclic group',
            'The difficulty of finding collisions in SHA-1',
            'The impossibility of inverting an AES S-box',
            'The prime number factorization problem of elliptic curves'
        ],
        answer: 0,
        explanation: 'Given g, p, and g^a mod p, it is computationally intractable (without a quantum computer) to determine the secret exponent a over a sufficiently large prime field p.'
    },
    {
        id: 'bonus-cs703cis-2',
        courseId: 'cs703-cis',
        courseCode: 'CS-703-CIS',
        topicTitle: 'Cryptographic Hash Functions',
        question: 'Which property of a cryptographic hash function guarantees that it is computationally infeasible to find ANY two distinct inputs x and y such that H(x) = H(y)?',
        options: [
            'Pre-image resistance (One-way property)',
            'Second pre-image resistance (Weak collision resistance)',
            'Collision resistance (Strong collision resistance)',
            'Avalanche criterion'
        ],
        answer: 2,
        explanation: 'Collision resistance requires that finding any arbitrary pair (x, y) with x != y and H(x) == H(y) requires on the order of 2^(n/2) operations due to the Birthday Paradox.'
    },

    // Semester 7: CS-703-DM - Disaster Management
    {
        id: 'bonus-cs703dm-1',
        courseId: 'cs703-dm',
        courseCode: 'CS-703-DM',
        topicTitle: 'Disaster Management Framework',
        question: 'Under the international Sendai Framework for Disaster Risk Reduction (2015-2030), what is Priority 4 of the action agenda?',
        options: [
            'Understanding disaster risk',
            'Strengthening disaster risk governance to manage disaster risk',
            'Investing in disaster risk reduction for resilience',
            'Enhancing disaster preparedness for effective response and to "Build Back Better" in recovery'
        ],
        answer: 3,
        explanation: 'Priority 4 specifically focuses on enhancing preparedness for effective response and recovery, rehabilitation, and reconstruction under the principle of "Build Back Better".'
    }
];

// Active State Variables
let currentActiveMode = 'drill'; // 'drill' | 'mock' | 'flashcards' | 'numericals' | 'speed'
let practiceSession = [];
let practiceCourse = 'all';
let currentSemesterFilter = 'all';
let sessionMode = 'drill';
let timerSeconds = 0;
let timerHandle = null;
let mockFinished = false;

// Flashcard State
let flashcardDeck = [];
let currentFlashcardIndex = 0;
let isFlashcardFlipped = false;
let flashcardStats = { mastered: 0, review: 0 };

// Speed Streak Challenge State
let speedTimerSeconds = 60;
let speedTimerHandle = null;
let speedScore = 0;
let speedStreak = 0;
let speedBestStreak = 0;
let speedCorrectCount = 0;
let speedCurrentQuestion = null;
let speedAudioCtx = null;

// Numerical Solvers State
let currentSubnetProblem = {
    ip: '192.168.10.0',
    prefix: 26,
    mask: '255.255.255.192',
    subnets: 4,
    usableHosts: 62,
    blockSize: 64
};

let currentRsaProblem = {
    p: 7,
    q: 11,
    e: 13,
    n: 77,
    phi: 60,
    d: 37
};

let currentDhProblem = {
    p: 23,
    g: 5,
    a: 6,
    b: 15,
    A: 8,
    B: 19,
    K: 2
};

let currentCellularProblem = {
    i: 2,
    j: 1,
    totalChannels: 420,
    N: 7,
    k: 60,
    Q: 4.58
};

let currentHdfsProblem = {
    rawGb: 320,
    blockSizeMb: 128,
    replication: 3,
    rawBlocks: 2560,
    physicalStorageGb: 960
};

let currentArchProblem = {
    mtbf: 4320,
    mttr: 0.5,
    availability: 99.988,
    annualDowntimeMin: 60.9
};

let activeSimQuestionId = 'sim-cs701-1';

const simulatorQuestions = [
    {
        id: 'sim-cs701-1',
        courseCode: 'CS-701',
        subjectTitle: 'Software Architectures',
        marks: 14,
        title: 'Explain the 4+1 View Model of Software Architecture in detail. Provide architectural diagrams, describe target stakeholders, and demonstrate how quality attribute tactics map to these views.',
        context: 'University End-Semester Exam Format (Unit I & II): Answer both parts: (a) Contrast the responsibilities of Logical, Process, Development, and Physical views with Use Case integration. (b) Explain how Latency maps to Process View, Modifiability maps to Development View, and Fault Tolerance maps to Physical/Deployment View.',
        rubric: [
            { id: 'r1', text: 'Defined all 4 Views (Logical, Process, Development, Physical) + 1 (Scenarios/Use Cases)', marks: 3 },
            { id: 'r2', text: 'Identified respective stakeholders (End-users, Integrators, Programmers, System Engineers)', marks: 3 },
            { id: 'r3', text: 'Included UML architectural diagrams (Class diagram, Activity/Sequence, Component, Deployment)', marks: 4 },
            { id: 'r4', text: 'Quality Attribute Mapping: Explained Latency (Process), Modifiability (Dev), Availability (Physical)', marks: 4 }
        ],
        keywords: ['logical view', 'process view', 'development view', 'physical view', 'use case', 'stakeholder', 'latency', 'modifiability', 'redundancy'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Core Concept &amp; 4+1 Model Architecture</h5>
                <p>Formulated by Philippe Kruchten (1995), the <strong>4+1 View Model</strong> decomposes complex software systems into multiple concurrent views based on distinct stakeholder perspectives, bound together by selected Use Case Scenarios (+1).</p>
                <div class="p-3 bg-slate-950 rounded-lg font-mono text-[11px] text-cyan-300">
                    +--------------------------------------------------------+<br>
                    |                     [End Users]                        |<br>
                    |                     Logical View                       |<br>
                    |           (Class / Object / State Diagrams)            |<br>
                    +----------------------------+---------------------------+<br>
                                                 |<br>
      +---------------------+                    |                    +---------------------+<br>
      |    [Programmers]    |                    |                    |     [Integrators]   |<br>
      |   Development View  +-------+------------+------------+-------+     Process View    |<br>
      | (Component/Package) |       |    (+1) Scenarios       |       | (Sequence/Activity) |<br>
      +---------------------+       |  (Key Use Cases Drive)  |       +---------------------+<br>
                                    +------------+------------+<br>
                                                 |<br>
                    +----------------------------+---------------------------+<br>
                    |                  [System Engineers]                    |<br>
                    |                    Physical View                       |<br>
                    |          (Deployment / Hardware Topology)              |<br>
                    +--------------------------------------------------------+
                </div>
                <h5 class="text-sm font-bold text-white">2. Views &amp; Stakeholder Matrix</h5>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Logical View (End User):</strong> Functional requirements. Expressed via UML Class &amp; State Transition diagrams.</li>
                    <li><strong>Process View (System Integrator):</strong> Concurrency, threads, synchronization, and non-functional latency/throughput. Expressed via UML Sequence &amp; Activity diagrams.</li>
                    <li><strong>Development View (Programmer/Software Manager):</strong> Code modularity, packages, build hierarchies, and libraries. Expressed via UML Component &amp; Package diagrams.</li>
                    <li><strong>Physical View (DevOps/System Engineer):</strong> Mapping software artifacts onto server nodes, clusters, network topology, and cloud VMs. Expressed via UML Deployment diagrams.</li>
                    <li><strong>+1 Scenarios (All Stakeholders):</strong> Critical use cases that validate the coherence of all 4 views.</li>
                </ul>
                <h5 class="text-sm font-bold text-white">3. Quality Attribute Tactics Mapping</h5>
                <p><strong>Latency &rarr; Process View:</strong> Addressed by thread pooling, asynchronous message queues (Kafka/RabbitMQ), and non-blocking I/O event loops.</p>
                <p><strong>Modifiability &rarr; Development View:</strong> Addressed by loose coupling, microservices boundaries, dependency injection, and published API contracts.</p>
                <p><strong>Availability &amp; Fault Tolerance &rarr; Physical View:</strong> Addressed by active-passive failover nodes, dual-rack power supplies, load balancers, and geographic multi-region replication.</p>
            </div>
        `
    },
    {
        id: 'sim-cs702-bd-1',
        courseCode: 'CS-702',
        subjectTitle: 'Big Data Analytics',
        marks: 14,
        title: 'Explain the HDFS Architecture and MapReduce Data Flow in Apache Hadoop. Contrast NameNode and DataNode responsibilities, explain 3x Rack Awareness replication, and trace Map-Shuffle-Reduce stages.',
        context: 'University End-Semester Exam Format (Unit II & III): Detail: (a) Master-Worker model in HDFS, Heartbeat intervals, and Secondary NameNode checkpointing. (b) Step-by-step MapReduce computation pipeline including InputSplit, Mapper, Partitioner, Spill, In-memory Shuffle, and Reducer aggregation.',
        rubric: [
            { id: 'r1', text: 'HDFS Master/Worker Architecture: NameNode, DataNodes & Secondary NameNode roles', marks: 3 },
            { id: 'r2', text: 'Block Allocation & Rack Awareness Replication Strategy (Local rack + Remote rack)', marks: 4 },
            { id: 'r3', text: 'MapReduce Execution Flow: InputSplit, Map, Spill, Shuffle/Sort, and Reduce', marks: 4 },
            { id: 'r4', text: 'Fault Tolerance: Block corruptions, Heartbeat timeouts, and Data Locality optimization', marks: 3 }
        ],
        keywords: ['namenode', 'datanode', 'secondary namenode', 'rack awareness', 'replication', 'inputsplit', 'mapper', 'shuffle', 'reducer', 'spill'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. HDFS Master-Worker Architecture</h5>
                <p>HDFS follows a master/worker topology. The <strong>NameNode (Master)</strong> manages file system namespace, directory trees, and maps block IDs to physical DataNodes in RAM (~150 bytes per block). <strong>DataNodes (Workers)</strong> store actual block byte-streams on local ext4/XFS disks and periodically send 3-second heartbeats and 6-hour block reports.</p>
                <p><strong>Secondary NameNode:</strong> Does NOT act as a hot standby. Instead, it performs <em>checkpointing</em> by merging the in-memory <code class="text-cyan-300">fsimage</code> with the incremental transaction log <code class="text-cyan-300">edits</code> to prevent NameNode startup bloat.</p>
                <h5 class="text-sm font-bold text-white">2. 3x Rack Awareness Algorithm</h5>
                <p>When an HDFS client writes a block, Hadoop uses rack topology:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Replica 1:</strong> Written to a DataNode on the <em>local rack</em> (same as the client if running in cluster).</li>
                    <li><strong>Replica 2:</strong> Written to a different DataNode on the <em>same local rack</em> for intra-rack bandwidth efficiency.</li>
                    <li><strong>Replica 3:</strong> Written to a DataNode on a <em>completely different remote rack</em> to protect against entire rack switch / power failure.</li>
                </ul>
                <h5 class="text-sm font-bold text-white">3. MapReduce Computational Pipeline</h5>
                <p>MapReduce guarantees computation runs <em>at the location of data</em> (Data Locality):</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>InputSplit &amp; RecordReader:</strong> Input file split into logical records &rarr; parsed into (key, value) pairs.</li>
                    <li><strong>Map Task:</strong> User code processes each record, emitting intermediate (k2, v2). Buffered in a 100MB circular RAM buffer.</li>
                    <li><strong>Spill &amp; Partition:</strong> When buffer reaches 80% capacity, keys are sorted by partition <code class="text-cyan-300">hash(k2) % R</code> and spilled to disk.</li>
                    <li><strong>Shuffle &amp; Sort Phase:</strong> Reducers fetch their assigned partition keys across HTTP from all mappers, performing external merge-sort to group identical keys.</li>
                    <li><strong>Reduce Task:</strong> User reduce function aggregates list of values <code class="text-cyan-300">(k2, [v2, v2...]) &rarr; (k3, v3)</code> and writes directly to HDFS with 3x replication.</li>
                </ol>
            </div>
        `
    },
    {
        id: 'sim-cs702-wmc-1',
        courseCode: 'CS-702-WMC',
        subjectTitle: 'Wireless & Mobile Computing',
        marks: 14,
        title: 'Derive the mathematical relationship for cellular cluster size N = i^2 + ij + j^2 and Co-channel Reuse Ratio Q = D/R. For a 7-cell cluster with path loss exponent n=4, calculate the worst-case Signal-to-Interference Ratio (SIR) and compare Hard vs Soft handoffs.',
        context: 'University End-Semester Exam Format (Unit I & III): (a) Mathematical derivation of hexagonal cluster geometry and co-channel distance D = R*sqrt(3N). (b) Calculate SIR in dB for 6 co-channel interferers. (c) Analyze Mobile IP registration and contrast Break-Before-Make (Hard Handoff) with Make-Before-Break (Soft Handoff).',
        rubric: [
            { id: 'r1', text: 'Derivation of Cluster Size N = i^2 + ij + j^2 using hexagonal geometry (shift coordinates i, j)', marks: 4 },
            { id: 'r2', text: 'Derivation of Co-channel Reuse Ratio Q = D/R = sqrt(3N) and co-channel distance D', marks: 3 },
            { id: 'r3', text: 'Mathematical SIR calculation: SIR = (sqrt(3*7))^4 / 6 = 441/6 = 73.5 -> 18.66 dB (> 18 dB threshold)', marks: 4 },
            { id: 'r4', text: 'Handoff comparison: Hard handoff (TDMA/FDMA) vs Soft handoff (CDMA Rake Receiver) & Mobile IP Care-of-Address', marks: 3 }
        ],
        keywords: ['cluster size', 'reuse ratio', 'co-channel', 'sir', 'path loss', 'hard handoff', 'soft handoff', 'mobile ip', 'care-of address'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Hexagonal Cluster Size Derivation</h5>
                <p>Hexagonal geometry uses two basis unit vectors separated by 60&deg;. Moving $i$ cells along one axis and turning 60&deg; counter-clockwise for $j$ cells yields the distance squared to the nearest co-channel cell:</p>
                <p class="font-mono text-cyan-300">D&sup2; = (i &times; &radic;3 R)&sup2; + (j &times; &radic;3 R)&sup2; - 2(i &times; &radic;3 R)(j &times; &radic;3 R) cos(120&deg;) = 3R&sup2; (i&sup2; + ij + j&sup2;)</p>
                <p>Since the area of a cluster with $N$ cells equals $N \times (\frac{3\sqrt{3}}{2} R^2)$, setting equal gives the fundamental cluster equation: <strong>N = i&sup2; + ij + j&sup2;</strong>. Permissible cluster sizes are N = 1, 3, 4, 7, 9, 12, 13, 19...</p>
                <h5 class="text-sm font-bold text-white">2. Co-Channel Reuse Ratio &amp; SIR Calculation</h5>
                <p>The co-channel reuse ratio is defined as: <strong>Q = D / R = &radic;(3N)</strong>. For N = 7: $Q = \sqrt{21} \approx 4.58$.</p>
                <p>In a standard hexagonal layout, a central cell experiences interference from <strong>6 first-tier co-channel cells</strong> at distance $D$. With path loss exponent $n = 4$:</p>
                <p class="font-mono text-cyan-300">SIR = \frac{R^{-n}}{\sum_{k=1}^{6} D_k^{-n}} = \frac{1}{6} \left(\frac{D}{R}\right)^n = \frac{Q^4}{6} = \frac{(\sqrt{21})^4}{6} = \frac{441}{6} = 73.5</p>
                <p>Converting to decibels: <strong>SIR (dB) = 10 log10(73.5) = 18.66 dB</strong>. Since standard GSM voice networks mandate SIR &ge; 18 dB for acceptable audio quality, N = 7 is the industry-standard minimum frequency reuse cluster!</p>
                <h5 class="text-sm font-bold text-white">3. Handoff Mechanisms: Hard vs. Soft</h5>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Hard Handoff ("Break-before-make"):</strong> The connection to the old Base Station (BS) is released before connection to the new BS is established. Used in FDMA and TDMA (GSM). Brief interruption (~20-50ms), but simpler radio frequency design.</li>
                    <li><strong>Soft Handoff ("Make-before-break"):</strong> The Mobile Station (MS) communicates simultaneously with two or more Base Stations on the identical carrier frequency. Multipath signals are combined using a RAKE receiver. Used in CDMA and WCDMA (UMTS). Zero call-drop risk, but requires duplicate transceivers.</li>
                </ul>
            </div>
        `
    },
    {
        id: 'sim-cs703-cis-1',
        courseCode: 'CS-703',
        subjectTitle: 'Cryptography & Info Security',
        marks: 7,
        title: 'Explain the Diffie-Hellman Key Exchange algorithm with a numerical example. Analyze how a Man-In-The-Middle (MITM) attack compromises the exchange and explain how Public Key Infrastructure (PKI) prevents it.',
        context: 'University End-Semester Exam Format (Unit II): (a) Mathematical steps for generating shared secret K = g^(ab) mod p. (b) Step-by-step MITM interception by adversary Mallory. (c) Use of digital signatures / X.509 certificates to achieve mutual authentication.',
        rubric: [
            { id: 'r1', text: 'Step-by-step mathematical algorithm: Public prime p, generator g, Alice/Bob public keys & shared secret derivation', marks: 3 },
            { id: 'r2', text: 'Man-In-The-Middle (MITM) vulnerability: Mallory intercepting A and B, establishing two separate keys K1 and K2', marks: 2 },
            { id: 'r3', text: 'Mitigation strategy: Station-to-Station (STS) protocol, digital signatures, and TLS 1.3 certificate validation', marks: 2 }
        ],
        keywords: ['diffie-hellman', 'discrete logarithm', 'generator', 'public key', 'shared secret', 'mitm', 'mallory', 'digital signature', 'pki'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Diffie-Hellman Protocol Steps</h5>
                <p>Diffie-Hellman allows two parties to agree on a symmetric secret over an unencrypted channel:</p>
                <ol class="list-decimal pl-5 space-y-1">
                    <li>Alice and Bob agree publicly on a large prime $p$ and a primitive root generator $g$ mod $p$.</li>
                    <li>Alice selects private secret $a \in [1, p-1]$ and computes public key: <strong>A = g^a mod p</strong>.</li>
                    <li>Bob selects private secret $b \in [1, p-1]$ and computes public key: <strong>B = g^b mod p</strong>.</li>
                    <li>Alice and Bob exchange $A$ and $B$ over the public network.</li>
                    <li>Alice computes: <strong>K = B^a mod p = (g^b)^a mod p = g^(ab) mod p</strong>.</li>
                    <li>Bob computes: <strong>K = A^b mod p = (g^a)^b mod p = g^(ab) mod p</strong>.</li>
                </ol>
                <h5 class="text-sm font-bold text-white">2. Man-In-The-Middle (MITM) Vulnerability</h5>
                <p>Because Diffie-Hellman lacks <em>authentication</em>, an active attacker (Mallory) can intercept $A$ and send $M_1 = g^{m_1} \pmod p$ to Bob, and intercept $B$ and send $M_2 = g^{m_2} \pmod p$ to Alice. Mallory establishes separate keys $K_1 = g^{a \cdot m_2}$ with Alice and $K_2 = g^{b \cdot m_1}$ with Bob, decrypting and re-encrypting all traffic unnoticed!</p>
                <h5 class="text-sm font-bold text-white">3. Mitigation via Public Key Infrastructure (PKI)</h5>
                <p>Mitigated using <strong>Ephemeral Diffie-Hellman with Digital Signatures (DHE / ECDHE)</strong>, where Alice and Bob sign their public parameters $(p, g, A)$ with their private RSA/ECDSA keys certified by a trusted Certificate Authority (CA) — the standard handshake utilized in TLS 1.3.</p>
            </div>
        `
    },
    {
        id: 'sim-cs703-dm-1',
        courseCode: 'CS-703-DM',
        subjectTitle: 'Disaster Management',
        marks: 7,
        title: 'Differentiate between Hazard, Vulnerability, and Risk with quantitative formulas. Outline the 4 Phases of the Disaster Management Cycle and explain the role of Remote Sensing, GIS, and IT Disaster Recovery.',
        context: 'University End-Semester Exam Format (Unit I & IV): (a) Define Risk = (Hazard x Vulnerability) / Capacity. (b) Illustrate the Disaster Cycle: Mitigation, Preparedness, Response, Recovery. (c) Explain RTO (Recovery Time Objective) and RPO (Recovery Point Objective) for IT Disaster Recovery.',
        rubric: [
            { id: 'r1', text: 'Quantitative differentiation: Hazard (Trigger), Vulnerability (Susceptibility), Capacity, and Risk equation', marks: 2 },
            { id: 'r2', text: 'Disaster Management Cycle: Mitigation, Preparedness, Response (Golden Hour), and Recovery (Reconstruction)', marks: 2 },
            { id: 'r3', text: 'Technology role: GIS flood inundation mapping, satellite remote sensing, early warning sensor networks', marks: 2 },
            { id: 'r4', text: 'IT Disaster Recovery: RTO, RPO, and Cold/Warm/Hot secondary failover sites', marks: 1 }
        ],
        keywords: ['hazard', 'vulnerability', 'risk', 'capacity', 'disaster cycle', 'mitigation', 'preparedness', 'remote sensing', 'gis', 'rto', 'rpo'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Quantitative Disaster Formula</h5>
                <p>In disaster management science, Risk is quantitatively formulated as:</p>
                <p class="font-mono text-cyan-300 text-center p-2 bg-slate-950 rounded-lg">Risk = ( Hazard &times; Vulnerability ) / Coping Capacity</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Hazard (H):</strong> A dangerous physical event (earthquake, cyclone, flood) with a given probability of occurrence.</li>
                    <li><strong>Vulnerability (V):</strong> Susceptibility of physical assets, populations, or infrastructure to suffer damage.</li>
                    <li><strong>Capacity (C):</strong> Strengths, emergency resources, and engineering resilience available to withstand impact.</li>
                </ul>
                <h5 class="text-sm font-bold text-white">2. Disaster Management Cycle</h5>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>Pre-Disaster (Risk Reduction):</strong> <em>Mitigation</em> (earthquake-resistant building bylaws) and <em>Preparedness</em> (evacuation drills, stockpiling).</li>
                    <li><strong>Post-Disaster (Crisis Management):</strong> <em>Response</em> (Search and rescue within the "Golden 72 Hours") and <em>Recovery</em> (rebuilding infrastructure following the Sendai principle of "Build Back Better").</li>
                </ol>
                <h5 class="text-sm font-bold text-white">3. IT Disaster Recovery (DR) Metrics</h5>
                <p><strong>RTO (Recovery Time Objective):</strong> The maximum acceptable duration of IT infrastructure downtime before normal operations resume.</p>
                <p><strong>RPO (Recovery Point Objective):</strong> The maximum acceptable data loss measured in time (e.g., maximum allowable loss of 15 minutes of transactional database logs).</p>
            </div>
        `
    },
    {
        id: 'sim-cs601-1',
        courseCode: 'CS-601',
        subjectTitle: 'Machine Learning',
        marks: 7,
        title: 'Formulate the Optimization Problem of Support Vector Machines (SVM). Explain the concept of Maximum Margin Hyperplane, Slack Variables for Soft Margin, and the Kernel Trick.',
        context: 'University End-Semester Exam Format (Unit III): (a) Primal optimization formulation minimizing (1/2)||w||^2 subject to y_i(w.x_i + b) >= 1. (b) Purpose of Slack variables xi_i and regularization parameter C. (c) Mercer theorem and Radial Basis Function (RBF) Kernel.',
        rubric: [
            { id: 'r1', text: 'Mathematical formulation of Primal optimization: min 1/2 ||w||^2 subject to classification margin constraints', marks: 2 },
            { id: 'r2', text: 'Support Vectors: Definition as data points lying on margin boundaries w.x + b = +-1', marks: 2 },
            { id: 'r3', text: 'Soft-margin SVM: Introduction of slack variables xi_i and penalty hyperparameter C', marks: 2 },
            { id: 'r4', text: 'Kernel Trick: Mercer theorem K(x, z) = phi(x).phi(z) avoiding expensive high-dimensional projections', marks: 1 }
        ],
        keywords: ['support vector machine', 'hyperplane', 'margin', 'primal', 'slack variable', 'kernel trick', 'rbf', 'mercer'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Hard Margin SVM Formulation</h5>
                <p>Given linearly separable training data $(x_i, y_i)$ where $y_i \in \{-1, +1\}$, the decision hyperplane is $w^T x + b = 0$. The geometric margin between supporting hyperplanes is $\frac{2}{\|w\|}$. Maximizing this margin is formulated as the convex Quadratic Programming problem:</p>
                <p class="font-mono text-cyan-300 text-center p-2 bg-slate-950 rounded-lg">minimize \frac{1}{2} \|w\|^2 \quad \text{subject to} \quad y_i (w^T x_i + b) \ge 1 \quad \forall i</p>
                <h5 class="text-sm font-bold text-white">2. Soft Margin SVM &amp; Slack Variables</h5>
                <p>For noisy or non-linearly separable data, slack variables $\xi_i \ge 0$ permit controlled misclassifications, balanced by penalty hyperparameter $C$:</p>
                <p class="font-mono text-cyan-300 text-center p-2 bg-slate-950 rounded-lg">minimize \frac{1}{2} \|w\|^2 + C \sum_{i=1}^{n} \xi_i \quad \text{subject to} \quad y_i (w^T x_i + b) \ge 1 - \xi_i, \quad \xi_i \ge 0</p>
                <h5 class="text-sm font-bold text-white">3. The Kernel Trick</h5>
                <p>To classify non-linear data without explicitly mapping points into an infinite-dimensional feature space $\phi(x)$, SVM utilizes Mercer's Theorem: $K(x, z) = \langle \phi(x), \phi(z) \rangle$. Standard kernels include the <strong>Radial Basis Function (RBF/Gaussian)</strong>: $K(x, z) = \exp(-\gamma \|x - z\|^2)$.</p>
            </div>
        `
    },
    {
        id: 'sim-cs602-1',
        courseCode: 'CS-602',
        subjectTitle: 'Computer Networks',
        marks: 7,
        title: 'Explain the working of TCP Congestion Control algorithms: Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery. Draw the cwnd curve and compare TCP Tahoe vs TCP Reno.',
        context: 'University End-Semester Exam Format (Unit IV): (a) Exponential growth during Slow Start vs linear additive increase in Congestion Avoidance. (b) Role of 3 duplicate ACKs and ssthresh threshold. (c) Reaction to timeout vs packet loss in Tahoe vs Reno.',
        rubric: [
            { id: 'r1', text: 'Detailed phases: Slow Start (cwnd doubles each RTT), Congestion Avoidance (cwnd += 1 MSS each RTT)', marks: 2 },
            { id: 'r2', text: 'Fast Retransmit: Triggered by 3 duplicate ACKs without waiting for retransmission timer (RTO)', marks: 2 },
            { id: 'r3', text: 'Fast Recovery: Maintaining packet flow by halving ssthresh and setting cwnd = ssthresh + 3 MSS', marks: 2 },
            { id: 'r4', text: 'Tahoe vs Reno comparison: Tahoe drops cwnd to 1 MSS on 3 dup ACKs; Reno performs Fast Recovery', marks: 1 }
        ],
        keywords: ['tcp', 'congestion control', 'slow start', 'congestion avoidance', 'fast retransmit', 'fast recovery', 'cwnd', 'ssthresh', 'tahoe', 'reno'],
        modelAnswer: `
            <div class="space-y-3">
                <h5 class="text-sm font-bold text-white">1. Four Phases of TCP Congestion Control</h5>
                <ol class="list-decimal pl-5 space-y-1">
                    <li><strong>Slow Start:</strong> Initial congestion window $cwnd = 1 \text{ MSS}$. For each ACK received, $cwnd$ increments by $1 \text{ MSS}$, effectively doubling $cwnd$ every Round Trip Time (exponential growth: $1 \to 2 \to 4 \to 8 \dots$) until reaching the slow start threshold $ssthresh$.</li>
                    <li><strong>Congestion Avoidance:</strong> When $cwnd \ge ssthresh$, TCP transitions to Additive Increase Multiplicative Decrease (AIMD). $cwnd$ increments by $1 \text{ MSS}$ per RTT (linear growth) to probe capacity safely.</li>
                    <li><strong>Fast Retransmit:</strong> If sender receives <strong>3 duplicate ACKs</strong> for the same segment, it assumes segment loss rather than out-of-order delivery, retransmitting immediately without awaiting the slow RTO timeout.</li>
                    <li><strong>Fast Recovery:</strong> Instead of dropping $cwnd$ to 1 MSS, TCP sets $ssthresh = cwnd / 2$ and $cwnd = ssthresh + 3 \text{ MSS}$, keeping the data pipeline filled.</li>
                </ol>
                <h5 class="text-sm font-bold text-white">2. TCP Tahoe vs. TCP Reno</h5>
                <p><strong>TCP Tahoe:</strong> On <em>any</em> packet loss (whether timeout or 3 duplicate ACKs), sets $ssthresh = cwnd / 2$ and collapses $cwnd = 1 \text{ MSS}$, restarting from Slow Start.</p>
                <p><strong>TCP Reno:</strong> Distinguishes timeout from 3 duplicate ACKs. On timeout, it drops $cwnd$ to 1 MSS. But on 3 duplicate ACKs, it enters Fast Retransmit and Fast Recovery, setting $cwnd = ssthresh = cwnd / 2$ and resuming Congestion Avoidance linearly without stalling!</p>
            </div>
        `
    }
];


/**
 * Builds the combined question bank
 */
function buildPracticeBank() {
    const loadedBank = (window.ACADEMY && typeof window.ACADEMY.getLoadedQuestionBank === 'function')
        ? window.ACADEMY.getLoadedQuestionBank()
        : [];
    return [...loadedBank, ...extraPracticeQuestions];
}

function pickRandomQuestions(bank, amount) {
    const pool = [...bank];
    for (let index = pool.length - 1; index > 0; index -= 1) {
        const target = Math.floor(Math.random() * (index + 1));
        [pool[index], pool[target]] = [pool[target], pool[index]];
    }
    return pool.slice(0, Math.min(amount, pool.length));
}

/**
 * Initializes the page
 */
function initializeTestsPage() {
    renderPracticeHeader();
    buildPracticeSession('drill');
    renderPracticeHistory();
    initFlashcards();
    loadSpeedHighScore();
    initSimulator();
    initSandbox();
}

/**
 * Switch top-level Practice Modes
 */
function switchPracticeMode(mode) {
    stopTimer();
    stopSpeedChallenge();
    currentActiveMode = mode;

    // Update Mode Tabs
    ['drill', 'mock', 'flashcards', 'numericals', 'simulator', 'sandbox', 'speed'].forEach((m) => {
        const tab = document.getElementById(`modeTab-${m}`);
        if (tab) tab.classList.toggle('active', m === mode);
    });

    // Update Views visibility
    const drillView = document.getElementById('drillView');
    const flashcardView = document.getElementById('flashcardView');
    const numericalView = document.getElementById('numericalView');
    const simulatorView = document.getElementById('simulatorView');
    const sandboxView = document.getElementById('sandboxView');
    const speedView = document.getElementById('speedView');
    const mockControls = document.getElementById('mockControls');
    const drillControls = document.getElementById('drillControls');

    if (drillView) drillView.classList.toggle('hidden', mode !== 'drill' && mode !== 'mock');
    if (flashcardView) flashcardView.classList.toggle('hidden', mode !== 'flashcards');
    if (numericalView) numericalView.classList.toggle('hidden', mode !== 'numericals');
    if (simulatorView) simulatorView.classList.toggle('hidden', mode !== 'simulator');
    if (sandboxView) sandboxView.classList.toggle('hidden', mode !== 'sandbox');
    if (speedView) speedView.classList.toggle('hidden', mode !== 'speed');
    if (mockControls) mockControls.classList.toggle('hidden', mode !== 'mock');
    if (drillControls) drillControls.classList.toggle('hidden', mode === 'flashcards' || mode === 'numericals' || mode === 'simulator' || mode === 'sandbox' || mode === 'speed');

    // Update Banner Text
    updateBannerContent(mode);

    if (mode === 'drill') {
        buildPracticeSession('drill');
    } else if (mode === 'mock') {
        buildPracticeSession('mock', 15);
    } else if (mode === 'flashcards') {
        initFlashcards();
    } else if (mode === 'numericals') {
        generateNewSubnetProblem();
        generateNewRsaProblem();
        generateNewDhProblem();
        generateNewCellularProblem();
    } else if (mode === 'simulator') {
        initSimulator();
    } else if (mode === 'sandbox') {
        initSandbox();
    } else if (mode === 'speed') {
        resetSpeedChallengeView();
    }
}

function updateBannerContent(mode) {
    const label = document.getElementById('practiceBannerLabel');
    const title = document.getElementById('practiceBannerTitle');
    const desc = document.getElementById('practiceBannerDesc');

    if (!title || !desc) return;

    if (mode === 'drill') {
        if (label) label.textContent = 'Active Recall Drills';
        title.textContent = 'Subject-wise drills with instant explanation';
        desc.textContent = 'Choose any subject across Semesters 5, 6, and 7 to test your understanding with instant feedback, comprehensive derivations, and stored test accuracy.';
    } else if (mode === 'mock') {
        if (label) label.textContent = 'Timed Assessment';
        title.textContent = 'Timed Mock Exam Simulation';
        desc.textContent = 'Simulate actual university exam pressure with a strict countdown timer, automatic scoring, and performance records saved to your student profile.';
    } else if (mode === 'flashcards') {
        if (label) label.textContent = 'Memory Deck';
        title.textContent = 'Active Recall Flashcards';
        desc.textContent = 'Strengthen retention with interactive 3D cards. Test your recall on core theorems, state transition proofs, and architectural definitions before flipping.';
    } else if (mode === 'numericals') {
        if (label) label.textContent = 'Algorithmic Walkthroughs';
        title.textContent = 'Step-by-Step Solved Numerical Trainers';
        desc.textContent = 'Practice high-yield exam numericals: IPv4 CIDR subnetting, RSA key generation, Diffie-Hellman key exchange, Cellular frequency reuse, HDFS block sizing, and Architecture MTBF SLA.';
    } else if (mode === 'simulator') {
        if (label) label.textContent = 'University Format';
        title.textContent = 'Descriptive Exam Simulator & Rubric Grader';
        desc.textContent = 'Practice authentic 7-mark & 14-mark university exam questions with interactive answer drafting, self-assessed marking rubrics, and official model solutions.';
    } else if (mode === 'sandbox') {
        if (label) label.textContent = 'Protocol Labs';
        title.textContent = 'Interactive Algorithm & Protocol Sandboxes';
        desc.textContent = 'Run live mathematical computations for Diffie-Hellman key exchange, cellular cluster frequency reuse, HDFS block sizing, and architecture tactics.';
    } else if (mode === 'speed') {
        if (label) label.textContent = 'Rapid-Fire Challenge';
        title.textContent = '60-Second Speed Streak Challenge';
        desc.textContent = 'Put your quick recall to the test! Answer as many technical questions as possible in 60 seconds. Chain consecutive correct answers for score multipliers.';
    }
}

/**
 * Filter by Semester
 */
function setSemesterFilter(semester) {
    currentSemesterFilter = semester;

    ['all', 'sem5', 'sem6', 'sem7'].forEach((sem) => {
        const btn = document.getElementById(`semFilter-${sem}`);
        if (btn) {
            if (sem === semester) {
                btn.className = 'px-2.5 py-1 rounded-full text-blue-300 font-medium bg-blue-500/20';
            } else {
                btn.className = 'px-2.5 py-1 rounded-full text-slate-400 hover:text-white transition';
            }
        }
    });

    // Toggle subject pills visibility based on semester
    document.querySelectorAll('[data-course-filter]').forEach((button) => {
        const courseSem = button.dataset.sem;
        if (button.dataset.courseFilter === 'all') {
            button.style.display = 'inline-block';
        } else if (semester === 'all') {
            button.style.display = 'inline-block';
        } else {
            button.style.display = courseSem === semester ? 'inline-block' : 'none';
        }
    });

    // Reset to all subjects when switching semester filter if current selection doesn't belong
    setPracticeCourse('all');
}

/**
 * Filter by Subject
 */
function setPracticeCourse(courseId) {
    practiceCourse = courseId;
    document.querySelectorAll('[data-course-filter]').forEach((button) => {
        button.classList.toggle('course-pill-active', button.dataset.courseFilter === courseId);
    });

    if (currentActiveMode === 'flashcards') {
        initFlashcards();
    } else if (currentActiveMode === 'speed') {
        // Will apply on next speed session
    } else {
        buildPracticeSession(sessionMode === 'mock' ? 'mock' : 'drill', sessionMode === 'mock' ? 15 : 0);
    }
}

function renderPracticeHeader() {
    const stats = (window.ACADEMY && typeof window.ACADEMY.calculateStats === 'function')
        ? window.ACADEMY.calculateStats()
        : { quizAccuracy: 0, correctAnswers: 0, totalAttempts: 0, notesCount: 0, highlightCount: 0, completedTopics: 0, totalTopics: 0 };

    const container = document.getElementById('practiceOverview');
    if (!container) return;

    container.innerHTML = `
        <article class="metric-card">
            <p class="metric-label">All-time quiz accuracy</p>
            <div class="metric-value">${stats.quizAccuracy}%</div>
            <p class="metric-subtext">${stats.correctAnswers}/${stats.totalAttempts} correct attempts recorded</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Saved notes &amp; highlights</p>
            <div class="metric-value">${stats.notesCount}</div>
            <p class="metric-subtext">${stats.highlightCount} highlighted syntax snippets</p>
        </article>
        <article class="metric-card">
            <p class="metric-label">Curriculum mastery</p>
            <div class="metric-value">${stats.completedTopics}</div>
            <p class="metric-subtext">${stats.totalTopics} total syllabus topics tracked</p>
        </article>
    `;
}

/**
 * Builds standard Drill or Timed Mock question sessions
 */
function buildPracticeSession(mode = 'drill', durationMinutes = 0) {
    stopTimer();
    sessionMode = mode;
    timerSeconds = durationMinutes * 60;
    mockFinished = false;

    let bank = buildPracticeBank();

    // Filter by semester if needed
    if (currentSemesterFilter === 'sem5') {
        const sem5Courses = ['cs501', 'cs502', 'cs503', 'cs503-cs', 'cs504'];
        bank = bank.filter((q) => sem5Courses.includes(q.courseId));
    } else if (currentSemesterFilter === 'sem6') {
        const sem6Courses = ['cs601', 'cs602', 'cs603', 'cs604', 'cs603-cg'];
        bank = bank.filter((q) => sem6Courses.includes(q.courseId));
    } else if (currentSemesterFilter === 'sem7') {
        const sem7Courses = ['cs701', 'cs702-bd', 'cs702-wmc', 'cs703-cis', 'cs703-dm'];
        bank = bank.filter((q) => sem7Courses.includes(q.courseId));
    }

    // Filter by specific course
    if (practiceCourse !== 'all') {
        bank = bank.filter((question) => question.courseId === practiceCourse);
    }

    const questionCount = mode === 'mock' ? 20 : 12;
    practiceSession = pickRandomQuestions(bank, questionCount).map((question) => ({ ...question, sessionAnswer: null }));
    renderPracticeSession();

    if (mode === 'mock' && durationMinutes > 0) {
        startTimer();
    }
}

function renderPracticeSession() {
    const score = practiceSession.filter((item) => item.sessionAnswer !== null && item.sessionAnswer === item.answer).length;
    const attempted = practiceSession.filter((item) => item.sessionAnswer !== null).length;

    const metaContainer = document.getElementById('practiceMeta');
    if (metaContainer) {
        metaContainer.innerHTML = `
            <div class="flex flex-wrap gap-2.5 items-center">
                <span class="mini-badge">Mode: ${sessionMode === 'mock' ? 'Timed mock' : 'Active drill'}</span>
                <span class="mini-badge">Questions: ${practiceSession.length}</span>
                <span class="mini-badge">Attempted: ${attempted}</span>
                <span class="mini-badge">Score: ${score}</span>
                <span class="mini-badge ${sessionMode === 'mock' ? 'timer-pill' : ''}">${sessionMode === 'mock' ? `Time left: ${formatTimer(timerSeconds)}` : 'Untimed'}</span>
                <button onclick="submitCurrentSession()" class="secondary-cta text-xs !py-1.5 !px-3">Submit session</button>
            </div>
        `;
    }

    const listContainer = document.getElementById('practiceList');
    if (!listContainer) return;

    if (!practiceSession.length) {
        listContainer.innerHTML = `
            <div class="panel-card p-8 text-center space-y-3">
                <p class="text-slate-400 text-sm">No practice questions matched the selected subject filter.</p>
                <button onclick="setPracticeCourse('all')" class="primary-cta text-xs !py-2 !px-4">Reset to All Subjects</button>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = practiceSession.map((question, index) => {
        return `
            <article class="quiz-card">
                <div class="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <p class="text-xs uppercase tracking-[0.24em] text-slate-500 font-mono font-semibold">${question.courseCode || 'CS'} &bull; ${question.topicTitle || 'Question'}</p>
                        <h3 class="text-base sm:text-lg font-bold text-white mt-1.5 leading-snug">Q${index + 1}. ${question.question}</h3>
                    </div>
                    <span class="mini-badge">${question.sessionAnswer === null ? 'Open' : (question.sessionAnswer === question.answer ? 'Correct' : 'Review')}</span>
                </div>
                <div class="space-y-2.5">
                    ${(question.options || []).map((option, optionIndex) => `
                        <button onclick="answerPracticeQuestion(${index}, ${optionIndex})" class="quiz-option ${getPracticeOptionClass(question, optionIndex)}" ${question.sessionAnswer !== null || mockFinished ? 'disabled' : ''}>
                            ${option}
                        </button>
                    `).join('')}
                </div>
                ${question.sessionAnswer !== null || mockFinished ? `
                    <div class="quiz-feedback ${question.sessionAnswer === question.answer ? 'quiz-feedback-correct' : 'quiz-feedback-wrong'}">
                        <strong>${question.sessionAnswer === question.answer ? 'Correct Solution:' : 'Review Solution:'}</strong>
                        <p class="mt-1">${question.explanation}</p>
                    </div>
                ` : ''}
            </article>
        `;
    }).join('');
}

function getPracticeOptionClass(question, optionIndex) {
    if (question.sessionAnswer === null && !mockFinished) return '';
    if (optionIndex === question.answer) return 'quiz-option-correct';
    if (question.sessionAnswer !== null && optionIndex === question.sessionAnswer && question.sessionAnswer !== question.answer) return 'quiz-option-wrong';
    return 'quiz-option-muted';
}

function answerPracticeQuestion(index, optionIndex) {
    const question = practiceSession[index];
    if (question.sessionAnswer !== null || mockFinished) return;
    question.sessionAnswer = optionIndex;

    if (window.ACADEMY && typeof window.ACADEMY.recordQuizAttempt === 'function') {
        window.ACADEMY.recordQuizAttempt({
            quizId: `practice:${question.id}:${Date.now()}:${index}`,
            courseId: question.courseId,
            topicId: question.topicId || `practice-${question.courseId}`,
            question: question.question,
            selected: optionIndex,
            correct: optionIndex === question.answer
        });
    }

    if (sessionMode === 'mock' && practiceSession.every((item) => item.sessionAnswer !== null)) {
        submitCurrentSession();
        return;
    }

    renderPracticeHeader();
    renderPracticeSession();
}

function startMockTest(minutes) {
    switchPracticeMode('mock');
    buildPracticeSession('mock', minutes);
}

function startTimer() {
    stopTimer();
    timerHandle = window.setInterval(() => {
        timerSeconds -= 1;
        if (timerSeconds <= 0) {
            timerSeconds = 0;
            renderPracticeSession();
            submitCurrentSession(true);
            return;
        }
        renderPracticeSession();
    }, 1000);
}

function stopTimer() {
    if (timerHandle) {
        clearInterval(timerHandle);
        timerHandle = null;
    }
}

function submitCurrentSession(autoSubmitted = false) {
    if (mockFinished || !practiceSession.length) return;
    mockFinished = true;
    stopTimer();

    const attempted = practiceSession.filter((item) => item.sessionAnswer !== null).length;
    const correct = practiceSession.filter((item) => item.sessionAnswer === item.answer).length;
    const total = practiceSession.length;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;

    if (window.ACADEMY && typeof window.ACADEMY.recordPracticeSession === 'function') {
        window.ACADEMY.recordPracticeSession({
            courseId: practiceCourse,
            courseLabel: practiceCourse === 'all' ? 'All subjects' : ((practiceSession[0] && practiceSession[0].courseCode) || practiceCourse.toUpperCase()),
            mode: sessionMode,
            attempted,
            correct,
            total,
            accuracy,
            autoSubmitted
        });
    }

    renderPracticeHeader();
    renderPracticeSession();
    renderPracticeHistory();
}

function renderPracticeHistory() {
    const sessions = (window.ACADEMY && typeof window.ACADEMY.getPracticeSessions === 'function')
        ? window.ACADEMY.getPracticeSessions()
        : [];

    const historyContainer = document.getElementById('practiceHistory');
    if (!historyContainer) return;

    historyContainer.innerHTML = `
        <section class="panel-card p-5">
            <div class="section-head">
                <h3 class="text-white font-bold text-base">Assessment History</h3>
                <span class="text-xs text-slate-400">${sessions.length} recorded</span>
            </div>
            <div class="space-y-3 mt-3">
                ${sessions.length ? sessions.slice(0, 8).map((session) => `
                    <div class="study-rail-block !p-3.5">
                        <div class="flex items-center justify-between gap-3">
                            <strong class="text-white text-sm">${session.courseLabel}</strong>
                            <span class="mini-badge">${session.mode === 'mock' ? 'Timed mock' : 'Drill'}</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1.5">
                            ${session.correct}/${session.total} correct &bull; ${session.accuracy}% &bull; ${new Date(session.finishedAt).toLocaleDateString()}
                        </p>
                    </div>
                `).join('') : '<p class="text-xs text-slate-400">Complete any drill or timed mock to log your test marks here.</p>'}
            </div>
        </section>
    `;
}

function formatTimer(totalSeconds) {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

/* =========================================================================
   FEATURE 3: 3D Active-Recall Flashcard Engine
   ========================================================================= */

function initFlashcards() {
    let bank = buildPracticeBank();

    if (currentSemesterFilter === 'sem5') {
        const sem5Courses = ['cs501', 'cs502', 'cs503', 'cs503-cs', 'cs504'];
        bank = bank.filter((q) => sem5Courses.includes(q.courseId));
    } else if (currentSemesterFilter === 'sem6') {
        const sem6Courses = ['cs601', 'cs602', 'cs603', 'cs604', 'cs603-cg'];
        bank = bank.filter((q) => sem6Courses.includes(q.courseId));
    } else if (currentSemesterFilter === 'sem7') {
        const sem7Courses = ['cs701', 'cs702-bd', 'cs702-wmc', 'cs703-cis', 'cs703-dm'];
        bank = bank.filter((q) => sem7Courses.includes(q.courseId));
    }

    if (practiceCourse !== 'all') {
        bank = bank.filter((q) => q.courseId === practiceCourse);
    }

    flashcardDeck = pickRandomQuestions(bank, 25);
    currentFlashcardIndex = 0;
    isFlashcardFlipped = false;
    flashcardStats = { mastered: 0, review: 0 };
    renderActiveFlashcard();
}

function renderActiveFlashcard() {
    const cardInner = document.getElementById('flashcardInner');
    if (cardInner) {
        cardInner.classList.remove('flipped');
        isFlashcardFlipped = false;
    }

    const currentCard = flashcardDeck[currentFlashcardIndex];
    if (!currentCard) return;

    const catBadge = document.getElementById('fcCategoryBadge');
    const progText = document.getElementById('fcProgressText');
    const masteredText = document.getElementById('fcMasteredCount');
    const reviewText = document.getElementById('fcReviewCount');

    const frontSubj = document.getElementById('fcFrontSubject');
    const questionText = document.getElementById('fcQuestionText');
    const backSubj = document.getElementById('fcBackSubject');
    const answerText = document.getElementById('fcAnswerText');

    if (catBadge) catBadge.textContent = `${currentCard.courseCode || 'CS'} &bull; Flashcard`;
    if (progText) progText.textContent = `Card ${currentFlashcardIndex + 1} of ${flashcardDeck.length}`;
    if (masteredText) masteredText.textContent = `${flashcardStats.mastered} Mastered`;
    if (reviewText) reviewText.textContent = `${flashcardStats.review} Review`;

    if (frontSubj) frontSubj.textContent = `${currentCard.courseCode} &bull; ${currentCard.topicTitle || 'Concept'}`;
    if (questionText) questionText.textContent = currentCard.question;
    if (backSubj) backSubj.textContent = `${currentCard.courseCode} &bull; Solution / Proof`;

    if (answerText) {
        const correctOption = currentCard.options && currentCard.options[currentCard.answer] ? currentCard.options[currentCard.answer] : '';
        answerText.innerHTML = `
            <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-sm">
                &#10003; Correct Answer: ${correctOption}
            </div>
            <div class="mt-2 text-slate-700 text-xs leading-relaxed">
                <strong>Derivation &amp; Key Principle:</strong><br>
                ${currentCard.explanation}
            </div>
        `;
    }
}

function toggleFlashcardFlip() {
    const cardInner = document.getElementById('flashcardInner');
    if (!cardInner) return;
    isFlashcardFlipped = !isFlashcardFlipped;
    cardInner.classList.toggle('flipped', isFlashcardFlipped);
}

function nextFlashcard() {
    if (currentFlashcardIndex < flashcardDeck.length - 1) {
        currentFlashcardIndex += 1;
        renderActiveFlashcard();
    }
}

function prevFlashcard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex -= 1;
        renderActiveFlashcard();
    }
}

function shuffleFlashcards() {
    flashcardDeck = pickRandomQuestions(flashcardDeck, flashcardDeck.length);
    currentFlashcardIndex = 0;
    renderActiveFlashcard();
}

function gradeFlashcard(rating) {
    if (rating === 'mastered') {
        flashcardStats.mastered += 1;
    } else {
        flashcardStats.review += 1;
    }

    if (currentFlashcardIndex < flashcardDeck.length - 1) {
        nextFlashcard();
    } else {
        renderActiveFlashcard();
    }
}

/* =========================================================================
   FEATURE 4: Step-by-Step Solved Numerical & Proof Trainers
   ========================================================================= */

// Subnetting Trainer
function generateNewSubnetProblem() {
    const prefixes = [25, 26, 27, 28, 29];
    const chosenPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const hostBits = 32 - chosenPrefix;
    const totalHosts = Math.pow(2, hostBits);
    const usable = totalHosts - 2;
    const subnets = Math.pow(2, chosenPrefix - 24);
    const lastOctet = 256 - totalHosts;

    currentSubnetProblem = {
        ip: `192.168.${Math.floor(Math.random() * 20) + 1}.0`,
        prefix: chosenPrefix,
        mask: `255.255.255.${lastOctet}`,
        subnets,
        usableHosts: usable,
        blockSize: totalHosts
    };

    const disp = document.getElementById('subnetAddressDisplay');
    if (disp) disp.textContent = `${currentSubnetProblem.ip} /${currentSubnetProblem.prefix}`;

    // Reset inputs
    ['inputSubnetMask', 'inputSubnetCount', 'inputUsableHosts', 'inputBlockSize'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const feedback = document.getElementById('subnetFeedback');
    if (feedback) feedback.className = 'hidden';
}

function verifySubnetCalculation() {
    const inMask = (document.getElementById('inputSubnetMask').value || '').trim();
    const inSubnets = parseInt(document.getElementById('inputSubnetCount').value, 10);
    const inHosts = parseInt(document.getElementById('inputUsableHosts').value, 10);
    const inBlock = parseInt(document.getElementById('inputBlockSize').value, 10);

    const maskOk = inMask === currentSubnetProblem.mask;
    const subnetsOk = inSubnets === currentSubnetProblem.subnets;
    const hostsOk = inHosts === currentSubnetProblem.usableHosts;
    const blockOk = inBlock === currentSubnetProblem.blockSize;

    const allCorrect = maskOk && subnetsOk && hostsOk && blockOk;
    const feedback = document.getElementById('subnetFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allCorrect ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allCorrect
        ? '&#10003; Perfect calculation! All subnetting parameters match exactly.'
        : `Calculations review:<br>&bull; Mask: ${maskOk ? '&#10003; Correct' : '&#10007; Expected ' + currentSubnetProblem.mask}<br>&bull; Subnets: ${subnetsOk ? '&#10003; Correct' : '&#10007; Expected ' + currentSubnetProblem.subnets}<br>&bull; Usable Hosts: ${hostsOk ? '&#10003; Correct' : '&#10007; Expected ' + currentSubnetProblem.usableHosts}<br>&bull; Block Size: ${blockOk ? '&#10003; Correct' : '&#10007; Expected ' + currentSubnetProblem.blockSize}`;
}

function revealSubnetSolution() {
    const feedback = document.getElementById('subnetFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Step-by-Step Derivation:</strong>
        <p>1. Prefix /${currentSubnetProblem.prefix} allocates ${currentSubnetProblem.prefix - 24} subnet bits in the 4th octet.</p>
        <p>2. Subnet Count = 2^${currentSubnetProblem.prefix - 24} = ${currentSubnetProblem.subnets} subnets.</p>
        <p>3. Host bits = 32 - ${currentSubnetProblem.prefix} = ${32 - currentSubnetProblem.prefix}.</p>
        <p>4. Total addresses = 2^${32 - currentSubnetProblem.prefix} = ${currentSubnetProblem.blockSize}. Usable = ${currentSubnetProblem.blockSize} - 2 = ${currentSubnetProblem.usableHosts}.</p>
        <p>5. Subnet Mask = 255.255.255.${256 - currentSubnetProblem.blockSize}.</p>
    `;
}

// RSA Cryptosystem Trainer
function generateNewRsaProblem() {
    const primesList = [
        { p: 3, q: 11, e: 7, n: 33, phi: 20, d: 3 },
        { p: 7, q: 11, e: 13, n: 77, phi: 60, d: 37 },
        { p: 5, q: 11, e: 3, n: 55, phi: 40, d: 27 },
        { p: 3, q: 13, e: 5, n: 39, phi: 24, d: 5 }
    ];
    currentRsaProblem = primesList[Math.floor(Math.random() * primesList.length)];

    const disp = document.getElementById('rsaPrimesDisplay');
    if (disp) disp.textContent = `p = ${currentRsaProblem.p}, q = ${currentRsaProblem.q}, e = ${currentRsaProblem.e}`;

    ['inputRsaN', 'inputRsaPhi', 'inputRsaD'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const feedback = document.getElementById('rsaFeedback');
    if (feedback) feedback.className = 'hidden';
}

function verifyRsaCalculation() {
    const inN = parseInt(document.getElementById('inputRsaN').value, 10);
    const inPhi = parseInt(document.getElementById('inputRsaPhi').value, 10);
    const inD = parseInt(document.getElementById('inputRsaD').value, 10);

    const nOk = inN === currentRsaProblem.n;
    const phiOk = inPhi === currentRsaProblem.phi;
    const dOk = inD === currentRsaProblem.d;

    const allCorrect = nOk && phiOk && dOk;
    const feedback = document.getElementById('rsaFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allCorrect ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allCorrect
        ? '&#10003; Correct RSA key pair generated! Private key satisfies (d * e) % phi(n) == 1.'
        : `Verification checks:<br>&bull; Modulus n: ${nOk ? '&#10003; Correct' : '&#10007; Expected ' + currentRsaProblem.n}<br>&bull; Totient phi(n): ${phiOk ? '&#10003; Correct' : '&#10007; Expected ' + currentRsaProblem.phi}<br>&bull; Private Key d: ${dOk ? '&#10003; Correct' : '&#10007; Expected ' + currentRsaProblem.d}`;
}

function revealRsaSolution() {
    const feedback = document.getElementById('rsaFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">RSA Mathematical Derivation:</strong>
        <p>1. Modulus n = p &times; q = ${currentRsaProblem.p} &times; ${currentRsaProblem.q} = <strong>${currentRsaProblem.n}</strong>.</p>
        <p>2. Euler Totient &phi;(n) = (p - 1)(q - 1) = (${currentRsaProblem.p - 1})(${currentRsaProblem.q - 1}) = <strong>${currentRsaProblem.phi}</strong>.</p>
        <p>3. Private key d must satisfy: (${currentRsaProblem.e} &times; d) &equiv; 1 (mod ${currentRsaProblem.phi}).</p>
        <p>4. Since (${currentRsaProblem.e} &times; ${currentRsaProblem.d}) = ${currentRsaProblem.e * currentRsaProblem.d} = (${Math.floor((currentRsaProblem.e * currentRsaProblem.d) / currentRsaProblem.phi)} &times; ${currentRsaProblem.phi}) + 1 &rarr; <strong>d = ${currentRsaProblem.d}</strong>.</p>
    `;
}

// Critical Path Method (CPM) Float Trainer
function verifyCpmCalculation() {
    const inDur = parseInt(document.getElementById('inputCpmDuration').value, 10);
    const inFloat = parseInt(document.getElementById('inputCpmFloat').value, 10);

    // Path 1 = 3 + 4 + 6 + 2 = 15 days (Critical Path)
    // Path 2 = 3 + 2 + 3 + 2 = 10 days
    // Float on Path 2 = 15 - 10 = 5 days
    const durOk = inDur === 15;
    const floatOk = inFloat === 5;
    const feedback = document.getElementById('cpmFeedback');
    if (!feedback) return;

    if (durOk && floatOk) {
        feedback.className = 'p-3 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
        feedback.innerHTML = '&#10003; Correct! Path 1 (15 days) is the Critical Path with 0 float. Path 2 duration is 10 days, giving Total Float = 15 - 10 = 5 days.';
    } else {
        feedback.className = 'p-3 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30';
        feedback.innerHTML = `Calculation note: ${durOk ? 'Duration correct' : 'Check path durations'} &bull; ${floatOk ? 'Float correct' : 'Check float = Critical Path - Path 2'}`;
    }
}

function revealCpmSolution() {
    const feedback = document.getElementById('cpmFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">CPM Schedule Breakdown:</strong>
        <p>&bull; Duration of Path 1 (A &rarr; B &rarr; D &rarr; F): 3 + 4 + 6 + 2 = <strong>15 days</strong>.</p>
        <p>&bull; Duration of Path 2 (A &rarr; C &rarr; E &rarr; F): 3 + 2 + 3 + 2 = <strong>10 days</strong>.</p>
        <p>&bull; Since 15 &gt; 10, Path 1 is the <strong>Critical Path</strong> (Project duration = 15 days).</p>
        <p>&bull; Total Float of Path 2 = Project Duration - Path 2 Duration = 15 - 10 = <strong>5 days</strong>.</p>
    `;
}

// FIRST & FOLLOW Sets Trainer
function verifyParserCalculation() {
    const followE = document.getElementById('selectFollowE').value;
    const firstF = document.getElementById('selectFirstF').value;
    const feedback = document.getElementById('parserFeedback');
    if (!feedback) return;

    const followOk = followE === 'yes';
    const firstOk = firstF === 'correct';

    if (followOk && firstOk) {
        feedback.className = 'p-3 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
        feedback.innerHTML = '&#10003; Correct! $ is automatically placed in FOLLOW of start symbol E. And FIRST(F) = { (, id }.';
    } else {
        feedback.className = 'p-3 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30';
        feedback.innerHTML = 'Review the standard FIRST and FOLLOW definitions. Click "Show Full Steps" for the formal derivation.';
    }
}

function revealParserSolution() {
    const feedback = document.getElementById('parserFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Canonical LL(1) Parser Set Rules:</strong>
        <p>1. <strong>Rule 1 (FOLLOW Start Symbol):</strong> $ is always placed into FOLLOW(S) where S is the start symbol (here, E). Also, since F &rarr; ( E ), the closing parenthesis ')' is in FOLLOW(E). Hence FOLLOW(E) = { $, ) }.</p>
        <p>2. <strong>Rule 2 (FIRST of Terminals):</strong> F &rarr; ( E ) has terminal '(', and F &rarr; id has terminal 'id'. Hence FIRST(F) = { (, id }.</p>
    `;
}

// DFA Minimization Trainer
function verifyDfaMinimization() {
    const equiv = (document.getElementById('selectDfaEquiv').value || '').trim();
    const states = parseInt(document.getElementById('inputDfaStates').value, 10);

    const isEquivOk = equiv === 'equiv';
    const isStatesOk = states === 3;

    const feedback = document.getElementById('dfaMinFeedback');
    if (!feedback) return;

    const allOk = isEquivOk && isStatesOk;
    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Accurate Myhill-Nerode minimization! {q2, q3} are equivalent and the minimal DFA has 3 reachable states.'
        : `Minimization review:<br>&bull; States (q2, q3) Equivalence: ${isEquivOk ? '&#10003; Correct' : '&#10007; Both are accepting states with identical transitions &delta;(q2,0)=q1=&delta;(q3,0) and &delta;(q2,1)=q2, &delta;(q3,1)=q3 (same class)'}<br>&bull; Minimized States: ${isStatesOk ? '&#10003; Correct' : '&#10007; Expected 3 states: [q0], [q1], and combined [q2, q3] (q4 is unreachable from q0)'}`;
}

function revealDfaSolution() {
    const feedback = document.getElementById('dfaMinFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Step-by-Step Table-Filling Minimization:</strong>
        <p>1. <strong>Reachability Check:</strong> Trace paths from start state q0. q0 &rarr; q1 on 0, q0 &rarr; q2 on 1. From q1 &rarr; q3 on 1. State q4 has no incoming transitions from any reachable state, so q4 is unreachable and eliminated immediately.</p>
        <p>2. <strong>Step 0 (Final vs Non-Final):</strong> Distinguish {q0, q1} (non-final) from {q2, q3} (final).</p>
        <p>3. <strong>Equivalence of (q2, q3):</strong> On input 0: &delta;(q2,0) = q1, &delta;(q3,0) = q1 (identical). On input 1: &delta;(q2,1) = q2, &delta;(q3,1) = q3 (both remain in the same final set). Thus, (q2, q3) are 1-equivalent and can be merged into a single state [q2, q3].</p>
        <p>4. <strong>Resulting Minimal States:</strong> Exactly <strong>3</strong> states: [q0] (start), [q1], and [q2, q3] (accepting).</p>
    `;
}

// DBMS Closure & Normal Form Trainer
function verifyDbmsClosure() {
    const closure = (document.getElementById('selectClosureAE').value || '').trim();
    const isKey = (document.getElementById('selectIsCandidateKey').value || '').trim();

    const closureOk = closure === 'all';
    const keyOk = isKey === 'yes';

    const feedback = document.getElementById('dbmsClosureFeedback');
    if (!feedback) return;

    const allOk = closureOk && keyOk;
    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Perfect derivation! {AE}&#8314; = {A, B, C, D, E}, making AE a minimal candidate key.'
        : `Derivation review:<br>&bull; Closure of {AE}: ${closureOk ? '&#10003; Correct' : '&#10007; Expected {A, B, C, D, E}'}<br>&bull; Candidate Key Status: ${keyOk ? '&#10003; Correct' : '&#10007; Expected Yes (neither {A}+ nor {E}+ determines all attributes)'}`;
}

function revealDbmsSolution() {
    const feedback = document.getElementById('dbmsClosureFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Step-by-Step Attribute Closure Algorithm:</strong>
        <p>1. Start with closure set X&#8314; = { A, E }.</p>
        <p>2. Apply A &rarr; B: B is added &rarr; X&#8314; = { A, B, E }.</p>
        <p>3. Apply E &rarr; C: C is added &rarr; X&#8314; = { A, B, C, E }.</p>
        <p>4. Now both B and C are in the set. Apply BC &rarr; D: D is added &rarr; X&#8314; = { A, B, C, D, E }.</p>
        <p>5. Since {AE}&#8314; contains all attributes of R, AE is a Superkey. Testing proper subsets: {A}&#8314; = {A, B} &ne; R, and {E}&#8314; = {E, C} &ne; R. Therefore, {AE} is a minimal <strong>Candidate Key</strong>!</p>
    `;
}

// Numerical 7: Diffie-Hellman Key Exchange Trainer
function generateNewDhProblem() {
    const dhPresets = [
        { p: 23, g: 5, a: 6, b: 15, A: 8, B: 19, K: 2 },
        { p: 29, g: 2, a: 5, b: 12, A: 3, B: 7, K: 16 },
        { p: 17, g: 3, a: 7, b: 9, A: 11, B: 14, K: 4 },
        { p: 31, g: 3, a: 4, b: 6, A: 19, B: 16, K: 8 }
    ];
    currentDhProblem = dhPresets[Math.floor(Math.random() * dhPresets.length)];

    const disp = document.getElementById('dhParamsDisplay');
    if (disp) {
        disp.textContent = `p = ${currentDhProblem.p}, g = ${currentDhProblem.g}, a = ${currentDhProblem.a}, b = ${currentDhProblem.b}`;
    }

    ['inputDhA', 'inputDhB', 'inputDhK'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const feedback = document.getElementById('dhFeedback');
    if (feedback) feedback.className = 'hidden';
}

function verifyDhCalculation() {
    const inA = parseInt(document.getElementById('inputDhA').value, 10);
    const inB = parseInt(document.getElementById('inputDhB').value, 10);
    const inK = parseInt(document.getElementById('inputDhK').value, 10);

    const aOk = inA === currentDhProblem.A;
    const bOk = inB === currentDhProblem.B;
    const kOk = inK === currentDhProblem.K;

    const allOk = aOk && bOk && kOk;
    const feedback = document.getElementById('dhFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Perfect Diffie-Hellman calculation! Both Alice and Bob derive shared secret K = ' + currentDhProblem.K + ' without ever revealing secrets a or b.'
        : `Verification checks:<br>&bull; Alice Public Key A: ${aOk ? '&#10003; Correct' : '&#10007; Expected ' + currentDhProblem.A + ' (g^a mod p)'}<br>&bull; Bob Public Key B: ${bOk ? '&#10003; Correct' : '&#10007; Expected ' + currentDhProblem.B + ' (g^b mod p)'}<br>&bull; Negotiated Secret K: ${kOk ? '&#10003; Correct' : '&#10007; Expected ' + currentDhProblem.K + ' (B^a mod p = A^b mod p)'}`;
}

function revealDhSolution() {
    const feedback = document.getElementById('dhFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Diffie-Hellman Step-by-Step Derivation:</strong>
        <p>1. <strong>Alice Public Key:</strong> A = g^a mod p = ${currentDhProblem.g}^${currentDhProblem.a} mod ${currentDhProblem.p} = <strong>${currentDhProblem.A}</strong>.</p>
        <p>2. <strong>Bob Public Key:</strong> B = g^b mod p = ${currentDhProblem.g}^${currentDhProblem.b} mod ${currentDhProblem.p} = <strong>${currentDhProblem.B}</strong>.</p>
        <p>3. <strong>Alice Computes Secret:</strong> K = B^a mod p = ${currentDhProblem.B}^${currentDhProblem.a} mod ${currentDhProblem.p} = <strong>${currentDhProblem.K}</strong>.</p>
        <p>4. <strong>Bob Computes Secret:</strong> K = A^b mod p = ${currentDhProblem.A}^${currentDhProblem.b} mod ${currentDhProblem.p} = <strong>${currentDhProblem.K}</strong>.</p>
        <p class="text-emerald-400 font-mono text-[11px]">&bull; Security Proof: An eavesdropper Eve knows p=${currentDhProblem.p}, g=${currentDhProblem.g}, A=${currentDhProblem.A}, B=${currentDhProblem.B}, but computing K requires solving the Discrete Logarithm Problem g^a &equiv; A (mod p), which is computationally intractable for cryptographic 2048-bit primes!</p>
    `;
}

// Numerical 8: Cellular Frequency Reuse & Cluster Size Trainer
function generateNewCellularProblem() {
    const cellularPresets = [
        { i: 2, j: 1, totalChannels: 420, N: 7, k: 60, Q: 4.58 },
        { i: 3, j: 0, totalChannels: 360, N: 9, k: 40, Q: 5.20 },
        { i: 2, j: 2, totalChannels: 480, N: 12, k: 40, Q: 6.00 },
        { i: 1, j: 1, totalChannels: 300, N: 3, k: 100, Q: 3.00 }
    ];
    currentCellularProblem = cellularPresets[Math.floor(Math.random() * cellularPresets.length)];

    const disp = document.getElementById('cellularParamsDisplay');
    if (disp) {
        disp.textContent = `i = ${currentCellularProblem.i}, j = ${currentCellularProblem.j}, Total Duplex Channels = ${currentCellularProblem.totalChannels}`;
    }

    ['inputCellularN', 'inputCellularK', 'inputCellularQ'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const feedback = document.getElementById('cellularFeedback');
    if (feedback) feedback.className = 'hidden';
}

function verifyCellularCalculation() {
    const inN = parseInt(document.getElementById('inputCellularN').value, 10);
    const inK = parseInt(document.getElementById('inputCellularK').value, 10);
    const inQ = parseFloat(document.getElementById('inputCellularQ').value);

    const nOk = inN === currentCellularProblem.N;
    const kOk = inK === currentCellularProblem.k;
    const qOk = Math.abs(inQ - currentCellularProblem.Q) <= 0.05;

    const allOk = nOk && kOk && qOk;
    const feedback = document.getElementById('cellularFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Excellent cellular geometry design! Cluster size N = ' + currentCellularProblem.N + ', channels per cell k = ' + currentCellularProblem.k + ', and co-channel reuse ratio Q = ' + currentCellularProblem.Q + '.'
        : `Cellular review:<br>&bull; Cluster Size N: ${nOk ? '&#10003; Correct' : '&#10007; Expected ' + currentCellularProblem.N + ' (i^2 + ij + j^2)'}<br>&bull; Channels per Cell k: ${kOk ? '&#10003; Correct' : '&#10007; Expected ' + currentCellularProblem.k + ' (Total Channels / N)'}<br>&bull; Co-channel Ratio Q: ${qOk ? '&#10003; Correct' : '&#10007; Expected ' + currentCellularProblem.Q + ' (sqrt(3N))'}`;
}

function revealCellularSolution() {
    const feedback = document.getElementById('cellularFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Cellular Engineering Derivation:</strong>
        <p>1. <strong>Cluster Size N:</strong> N = i&sup2; + ij + j&sup2; = (${currentCellularProblem.i})&sup2; + (${currentCellularProblem.i} &times; ${currentCellularProblem.j}) + (${currentCellularProblem.j})&sup2; = ${currentCellularProblem.i * currentCellularProblem.i} + ${currentCellularProblem.i * currentCellularProblem.j} + ${currentCellularProblem.j * currentCellularProblem.j} = <strong>${currentCellularProblem.N} cells</strong>.</p>
        <p>2. <strong>Channels per Cell:</strong> k = S / N = ${currentCellularProblem.totalChannels} / ${currentCellularProblem.N} = <strong>${currentCellularProblem.k} channels/cell</strong>.</p>
        <p>3. <strong>Co-channel Reuse Ratio:</strong> Q = D / R = &radic;(3N) = &radic;(3 &times; ${currentCellularProblem.N}) = &radic;${3 * currentCellularProblem.N} = <strong>${currentCellularProblem.Q}</strong>.</p>
        <p class="text-emerald-400 font-mono text-[11px]">&bull; Capacity Note: A smaller cluster size (e.g. N=3) gives higher spectral capacity (100 channels/cell), but lower Q (3.00), which increases co-channel interference. N=7 provides the ideal balance with SIR &ge; 18 dB.</p>
    `;
}

// Numerical 9: HDFS Sizing Trainer
function verifyHdfsCalculation() {
    const inBlocks = parseInt(document.getElementById('inputHdfsBlocks').value, 10);
    const inStorage = parseInt(document.getElementById('inputHdfsStorage').value, 10);

    const blocksOk = inBlocks === 2560;
    const storageOk = inStorage === 960;

    const allOk = blocksOk && storageOk;
    const feedback = document.getElementById('hdfsFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Accurate HDFS cluster sizing! 320 GB dataset / 128 MB yields 2,560 raw blocks, requiring 960 GB physical disk with 3x replication.'
        : `HDFS calculation review:<br>&bull; Raw Block Count: ${blocksOk ? '&#10003; Correct' : '&#10007; Expected 2560 blocks ((320 * 1024 MB) / 128 MB)'}<br>&bull; Total Storage Required: ${storageOk ? '&#10003; Correct' : '&#10007; Expected 960 GB (320 GB * 3 replicas)'}`;
}

function revealHdfsSolution() {
    const feedback = document.getElementById('hdfsFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">HDFS Storage Sizing Mathematics:</strong>
        <p>1. Convert Dataset size to Megabytes: 320 GB &times; 1024 MB/GB = <strong>327,680 MB</strong>.</p>
        <p>2. Number of Raw Blocks = Total MB / Block Size = 327,680 / 128 = <strong>2,560 blocks</strong>.</p>
        <p>3. Physical Storage with 3x Replication = 320 GB &times; 3 = <strong>960 GB</strong>.</p>
        <p>4. Total Physical Replicas = 2,560 &times; 3 = <strong>7,680 block instances</strong>.</p>
        <p>5. NameNode Heap RAM Impact: At ~150 bytes metadata per block, 7,680 &times; 150 B = <strong>1.15 MB RAM</strong> in the NameNode JVM heap.</p>
    `;
}

// Numerical 10: System Availability & SLA Trainer
function verifyArchCalculation() {
    const inAvail = (document.getElementById('selectArchAvailability').value || '').trim();
    const inDown = parseFloat(document.getElementById('inputArchDowntime').value);

    const availOk = inAvail === '99.988';
    const downOk = Math.abs(inDown - 60.9) <= 1.0;

    const allOk = availOk && downOk;
    const feedback = document.getElementById('archFeedback');
    if (!feedback) return;

    feedback.className = `p-3 rounded-lg text-xs font-semibold ${allOk ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'}`;
    feedback.innerHTML = allOk
        ? '&#10003; Correct Availability SLA calculation! Availability = 99.988% and annual downtime is 60.9 minutes (~1 hour/year).'
        : `Architecture SLA review:<br>&bull; Availability Percentage: ${availOk ? '&#10003; Correct' : '&#10007; Expected 99.988% (4320 / (4320 + 0.5))'}<br>&bull; Annual Downtime: ${downOk ? '&#10003; Correct' : '&#10007; Expected ~60.9 minutes ((1 - 0.99988) * 8760 hours * 60 min)'}`;
}

function revealArchSolution() {
    const feedback = document.getElementById('archFeedback');
    if (!feedback) return;
    feedback.className = 'p-3 rounded-lg text-xs bg-slate-900 border border-blue-500/30 text-slate-300 space-y-1.5';
    feedback.innerHTML = `
        <strong class="text-white block font-bold">Availability SLA Derivation:</strong>
        <p>1. Formula: <strong>A = MTBF / (MTBF + MTTR)</strong> = 4,320 / (4,320 + 0.5) = 4,320 / 4,320.5 = <strong>0.999884 (99.988%)</strong>.</p>
        <p>2. Total Minutes in a standard year (365 days): 365 &times; 24 &times; 60 = <strong>525,600 minutes</strong>.</p>
        <p>3. Expected Downtime = (1 - 0.999884) &times; 525,600 minutes = 0.000116 &times; 525,600 = <strong>60.97 minutes / year</strong>.</p>
        <p class="text-emerald-400 font-mono text-[11px]">&bull; Industry Benchmark: Achieving &quot;Three Nines&quot; (99.9%) allows 8.76 hours of downtime per year. Reaching &quot;Four Nines&quot; (99.99%) allows only 52.6 minutes/year.</p>
    `;
}

/* =========================================================================
   FEATURE 5: University Descriptive Exam Simulator & Rubric Grader
   ========================================================================= */

function initSimulator() {
    const select = document.getElementById('simQuestionSelect');
    if (!select) return;

    select.innerHTML = simulatorQuestions.map((q) => {
        return `<option value="${q.id}">[${q.courseCode}] ${q.subjectTitle} (${q.marks}M)</option>`;
    }).join('');

    loadSimulatorQuestion(simulatorQuestions[0].id);
}

function loadSimulatorQuestion(qId) {
    activeSimQuestionId = qId;
    const q = simulatorQuestions.find((item) => item.id === qId) || simulatorQuestions[0];

    const subjectBadge = document.getElementById('simSubjectBadge');
    if (subjectBadge) subjectBadge.textContent = `${q.courseCode} ${q.subjectTitle}`;

    const codeEl = document.getElementById('simQCode');
    if (codeEl) codeEl.textContent = `${q.courseCode} University Question`;

    const marksEl = document.getElementById('simQMarks');
    if (marksEl) marksEl.textContent = `${q.marks} Marks`;

    const titleEl = document.getElementById('simQTitle');
    if (titleEl) titleEl.textContent = q.title;

    const ctxEl = document.getElementById('simQContext');
    if (ctxEl) ctxEl.textContent = q.context;

    // Restore student draft if exists
    const input = document.getElementById('simAnswerInput');
    const savedDraft = localStorage.getItem(`academy_sim_draft_${q.id}`) || '';
    if (input) {
        input.value = savedDraft;
        updateSimWordCount();
    }

    // Render Rubric Checklist
    const rubricContainer = document.getElementById('simRubricList');
    if (rubricContainer) {
        rubricContainer.innerHTML = q.rubric.map((r) => {
            return `
                <label class="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                    <input type="checkbox" data-rubric-id="${r.id}" data-marks="${r.marks}" onchange="updateSimScoreBadge()" class="mt-0.5 rounded border-slate-700 text-blue-500 focus:ring-0">
                    <div class="flex-1">
                        <span class="text-white block font-medium">${r.text}</span>
                        <span class="text-[10px] text-cyan-400 font-mono font-bold">+${r.marks} Marks Weight</span>
                    </div>
                </label>
            `;
        }).join('');
    }

    updateSimScoreBadge();

    // Reset feedback and model answer
    const feedback = document.getElementById('simEvaluationFeedback');
    if (feedback) feedback.className = 'hidden';

    hideSimModelAnswer();
}

function updateSimWordCount() {
    const input = document.getElementById('simAnswerInput');
    const countEl = document.getElementById('simWordCount');
    if (!input || !countEl) return;

    const text = input.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = text.length;

    countEl.textContent = `${words} words \u2022 ${chars} chars`;

    // Autosave draft to local study memory
    if (activeSimQuestionId) {
        localStorage.setItem(`academy_sim_draft_${activeSimQuestionId}`, input.value);
    }
}

function clearSimDraft() {
    const input = document.getElementById('simAnswerInput');
    if (!input) return;
    input.value = '';
    if (activeSimQuestionId) {
        localStorage.removeItem(`academy_sim_draft_${activeSimQuestionId}`);
    }
    updateSimWordCount();
    updateSimScoreBadge();
}

function updateSimScoreBadge() {
    const q = simulatorQuestions.find((item) => item.id === activeSimQuestionId);
    if (!q) return;

    const checkedBoxes = document.querySelectorAll('#simRubricList input[type="checkbox"]:checked');
    let currentScore = 0;
    checkedBoxes.forEach((cb) => {
        currentScore += parseInt(cb.getAttribute('data-marks') || '0', 10);
    });

    const badge = document.getElementById('simCurrentScoreBadge');
    if (badge) {
        badge.textContent = `${currentScore} / ${q.marks} Marks`;
    }
}

function evaluateSimAnswer() {
    const q = simulatorQuestions.find((item) => item.id === activeSimQuestionId);
    if (!q) return;

    const input = document.getElementById('simAnswerInput');
    const text = (input ? input.value : '').toLowerCase().trim();
    const wordCount = text ? text.split(/\s+/).length : 0;

    const checkedBoxes = document.querySelectorAll('#simRubricList input[type="checkbox"]:checked');
    let rubricMarks = 0;
    checkedBoxes.forEach((cb) => {
        rubricMarks += parseInt(cb.getAttribute('data-marks') || '0', 10);
    });

    // Scan for required technical keywords
    const detectedKeywords = q.keywords.filter((kw) => text.includes(kw.toLowerCase()));
    const keywordRatio = detectedKeywords.length / q.keywords.length;

    let totalMarks = rubricMarks;

    const feedback = document.getElementById('simEvaluationFeedback');
    if (!feedback) return;

    let gradeClass = 'bg-blue-500/15 text-blue-300 border border-blue-500/30';
    let summaryText = 'Good draft progress.';

    if (totalMarks >= q.marks * 0.8 && wordCount >= 100) {
        gradeClass = 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
        summaryText = 'Distinction standard! Your answer demonstrates thorough architectural depth and rubric alignment.';
    } else if (wordCount < 40) {
        gradeClass = 'bg-amber-500/15 text-amber-300 border border-amber-500/30';
        summaryText = 'Answer is too brief. University descriptive questions require detailed step-by-step paragraphs, diagrams, and trade-off points.';
    }

    feedback.className = `p-4 rounded-xl text-xs space-y-2.5 ${gradeClass}`;
    feedback.innerHTML = `
        <div class="flex items-center justify-between border-b border-white/10 pb-2">
            <strong class="text-white font-bold text-sm">Self-Assessment Grade: ${totalMarks} / ${q.marks} Marks</strong>
            <span class="font-mono text-[11px] font-bold">${Math.round((totalMarks / q.marks) * 100)}% Match</span>
        </div>
        <p class="leading-relaxed">${summaryText}</p>
        <div class="pt-1 text-[11px] space-y-1">
            <p><strong>Keyword Coverage:</strong> ${detectedKeywords.length} of ${q.keywords.length} core technical terms found (${Math.round(keywordRatio * 100)}%).</p>
            <p class="text-slate-400">Detected: ${detectedKeywords.length > 0 ? detectedKeywords.join(', ') : 'None yet'}</p>
        </div>
    `;
    feedback.classList.remove('hidden');
}

function revealSimModelAnswer() {
    const q = simulatorQuestions.find((item) => item.id === activeSimQuestionId);
    if (!q) return;

    const box = document.getElementById('simModelAnswerBox');
    const content = document.getElementById('simModelAnswerContent');
    if (!box || !content) return;

    content.innerHTML = q.modelAnswer;
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideSimModelAnswer() {
    const box = document.getElementById('simModelAnswerBox');
    if (box) box.classList.add('hidden');
}

/* =========================================================================
   FEATURE 6: Interactive Protocol & Algorithm Sandbox
   ========================================================================= */

function initSandbox() {
    runDhSimulator();
    runCellularPlanner();
    runHdfsPlanner();
    updateArchScenarioOptions();
}

function modPow(base, exp, mod) {
    let res = 1n;
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    const m = BigInt(mod);

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            res = (res * base) % m;
        }
        base = (base * base) % m;
        exp = exp / 2n;
    }
    return Number(res);
}

function runDhSimulator() {
    const p = parseInt(document.getElementById('simDhPrime').value, 10) || 23;
    const g = parseInt(document.getElementById('simDhGen').value, 10) || 5;
    const a = parseInt(document.getElementById('simDhAlicePriv').value, 10) || 6;
    const b = parseInt(document.getElementById('simDhBobPriv').value, 10) || 15;

    const A = modPow(g, a, p);
    const B = modPow(g, b, p);
    const kAlice = modPow(B, a, p);
    const kBob = modPow(A, b, p);

    const out = document.getElementById('simDhOutput');
    if (!out) return;

    const match = kAlice === kBob;
    out.innerHTML = `
        <div class="space-y-2">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-white font-bold">Diffie-Hellman Protocol Exchange Trace</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-mono ${match ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">${match ? '&#10003; Secret Keys Match' : 'Mismatch'}</span>
            </div>
            <div class="grid sm:grid-cols-2 gap-2 text-[11px]">
                <div class="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <strong class="text-blue-400 block mb-1">Alice's Calculations:</strong>
                    <p>&bull; Private secret: a = ${a}</p>
                    <p>&bull; Sends Public Key: A = ${g}^${a} mod ${p} = <strong class="text-white">${A}</strong></p>
                    <p>&bull; Receives Bob's Key: B = ${B}</p>
                    <p>&bull; Computes Secret: K = ${B}^${a} mod ${p} = <strong class="text-emerald-400 font-bold">${kAlice}</strong></p>
                </div>
                <div class="p-2.5 rounded bg-slate-950 border border-slate-800">
                    <strong class="text-purple-400 block mb-1">Bob's Calculations:</strong>
                    <p>&bull; Private secret: b = ${b}</p>
                    <p>&bull; Sends Public Key: B = ${g}^${b} mod ${p} = <strong class="text-white">${B}</strong></p>
                    <p>&bull; Receives Alice's Key: A = ${A}</p>
                    <p>&bull; Computes Secret: K = ${A}^${b} mod ${p} = <strong class="text-emerald-400 font-bold">${kBob}</strong></p>
                </div>
            </div>
            <div class="p-2 rounded bg-slate-950/80 text-[10px] text-slate-400">
                <span class="text-cyan-400 font-bold">Eve's Passive Wiretap:</span> Eve observes p=${p}, g=${g}, A=${A}, B=${B}. To find shared secret K=${kAlice}, Eve must compute the discrete logarithm a = log_${g}(${A}) mod ${p}.
            </div>
        </div>
    `;
}

function runCellularPlanner() {
    const i = parseInt(document.getElementById('simCellShiftI').value, 10) || 2;
    const j = parseInt(document.getElementById('simCellShiftJ').value, 10) || 1;
    const R = parseFloat(document.getElementById('simCellRadius').value) || 1.5;

    const N = i * i + i * j + j * j;
    const D = R * Math.sqrt(3 * N);
    const Q = Math.sqrt(3 * N);

    // Path loss n = 4, 6 first-tier co-channel cells
    const sirLinear = Math.pow(Q, 4) / 6;
    const sirDb = (10 * Math.log10(sirLinear)).toFixed(2);
    const reuseFactor = (1 / N).toFixed(4);

    const out = document.getElementById('simCellOutput');
    if (!out) return;

    const meetsThreshold = parseFloat(sirDb) >= 18.0;

    out.innerHTML = `
        <div class="space-y-2">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-white font-bold">Hexagonal Cluster Geometry Metrics</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-mono ${meetsThreshold ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">${meetsThreshold ? '&#10003; SIR &ge; 18 dB (Pass)' : 'SIR < 18 dB (Warning)'}</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Cluster Size N</span>
                    <strong class="text-white text-sm">${N} Cells</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Reuse Ratio Q</span>
                    <strong class="text-white text-sm">${Q.toFixed(2)}</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Distance D</span>
                    <strong class="text-white text-sm">${D.toFixed(2)} km</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Worst-case SIR</span>
                    <strong class="text-emerald-400 text-sm">${sirDb} dB</strong>
                </div>
            </div>
            <p class="text-[10px] text-slate-400">Frequency Reuse Factor = ${reuseFactor}. Total spectrum is divided among ${N} cell sites before repeating.</p>
        </div>
    `;
}

function runHdfsPlanner() {
    const rawGb = parseFloat(document.getElementById('simHdfsDataGb').value) || 500;
    const blockSizeMb = parseInt(document.getElementById('simHdfsBlockSize').value, 10) || 128;
    const rep = parseInt(document.getElementById('simHdfsReplication').value, 10) || 3;

    const rawBlocks = Math.ceil((rawGb * 1024) / blockSizeMb);
    const totalBlocks = rawBlocks * rep;
    const totalStorageGb = rawGb * rep;
    const nameNodeRamMb = ((totalBlocks * 150) / (1024 * 1024)).toFixed(2);
    const minDataNodes = Math.max(rep, Math.ceil(totalStorageGb / 1500));

    const out = document.getElementById('simHdfsOutput');
    if (!out) return;

    out.innerHTML = `
        <div class="space-y-2">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-white font-bold">HDFS Cluster Sizing Analysis</span>
                <span class="text-xs font-mono text-cyan-400 font-bold">${totalBlocks.toLocaleString()} Total Replicas</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Raw Logical Blocks</span>
                    <strong class="text-white text-sm">${rawBlocks.toLocaleString()}</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Physical Storage</span>
                    <strong class="text-white text-sm">${totalStorageGb.toLocaleString()} GB</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">NameNode RAM</span>
                    <strong class="text-white text-sm">${nameNodeRamMb} MB</strong>
                </div>
                <div class="p-2 rounded bg-slate-950">
                    <span class="text-slate-400 block text-[10px]">Min DataNodes</span>
                    <strong class="text-emerald-400 text-sm">${minDataNodes} Nodes</strong>
                </div>
            </div>
            <p class="text-[10px] text-slate-400">Rack Awareness Layout: Block 1 on Rack A Node 1 &bull; Block 2 on Rack A Node 2 &bull; Block 3 on Rack B Node 1.</p>
        </div>
    `;
}

function updateArchScenarioOptions() {
    const attr = document.getElementById('simArchAttr').value;
    const tacticSelect = document.getElementById('simArchTactic');
    if (!tacticSelect) return;

    if (attr === 'availability') {
        tacticSelect.innerHTML = `
            <option value="heartbeat">Heartbeat &amp; Active Redundancy</option>
            <option value="circuitbreaker">Circuit Breaker &amp; Fallback Degradation</option>
            <option value="retry">Blind Retry Loop (Anti-pattern)</option>
        `;
    } else if (attr === 'performance') {
        tacticSelect.innerHTML = `
            <option value="caching">Distributed In-Memory Caching (Redis/Memcached)</option>
            <option value="async">Asynchronous Message Broker (Kafka/RabbitMQ)</option>
            <option value="blocking">Synchronous Blocking RPC (Anti-pattern)</option>
        `;
    } else if (attr === 'security') {
        tacticSelect.innerHTML = `
            <option value="tls">Mutual TLS (mTLS) &amp; PKI Certificates</option>
            <option value="rbac">Role-Based Access Control (RBAC) with Least Privilege</option>
            <option value="cleartext">Unencrypted HTTP Tokens (Anti-pattern)</option>
        `;
    }

    verifyArchScenario();
}

function verifyArchScenario() {
    const attr = document.getElementById('simArchAttr').value;
    const tactic = document.getElementById('simArchTactic').value;

    const out = document.getElementById('simArchOutput');
    if (!out) return;

    let resultHtml = '';

    if (tactic === 'heartbeat') {
        resultHtml = `
            <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 space-y-1">
                <strong class="text-white block font-bold">&#10003; Recommended Availability Tactic</strong>
                <p>Heartbeat messages detect node failures within 200ms. Active redundancy automatically switches traffic without dropping client TCP sessions, achieving 99.99% availability.</p>
            </div>
        `;
    } else if (tactic === 'circuitbreaker') {
        resultHtml = `
            <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 space-y-1">
                <strong class="text-white block font-bold">&#10003; Recommended Resilience Tactic</strong>
                <p>Circuit breaker trips into OPEN state when error rate exceeds 50%, returning cached fallback responses and preventing cascading thread-pool exhaustion across downstream microservices.</p>
            </div>
        `;
    } else if (tactic === 'caching' || tactic === 'async') {
        resultHtml = `
            <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 space-y-1">
                <strong class="text-white block font-bold">&#10003; Recommended Performance Tactic</strong>
                <p>Decouples producer throughput from consumer database writes. p99 response latency drops from 450ms to &lt;15ms with guaranteed message ordering.</p>
            </div>
        `;
    } else if (tactic === 'tls' || tactic === 'rbac') {
        resultHtml = `
            <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 space-y-1">
                <strong class="text-white block font-bold">&#10003; Recommended Security Tactic</strong>
                <p>Guarantees cryptographic zero-trust confidentiality and cryptographically verifiable authorization tokens across internal service meshes.</p>
            </div>
        `;
    } else {
        resultHtml = `
            <div class="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 space-y-1">
                <strong class="text-white block font-bold">&#10007; Architectural Anti-Pattern Detected!</strong>
                <p>This configuration creates severe vulnerabilities or cascading failures under load. Examine the recommended tactics above to satisfy the SLA measure.</p>
            </div>
        `;
    }

    out.innerHTML = resultHtml;
}

/* =========================================================================
   FEATURE 7: 60-Second Rapid-Fire Speed Streak Challenge
   ========================================================================= */

function loadSpeedHighScore() {
    const high = localStorage.getItem('academy_lms_speed_high') || '0';
    const el = document.getElementById('speedHighScore');
    if (el) el.textContent = `${high} pts`;
}

function resetSpeedChallengeView() {
    stopSpeedChallenge();
    const prompt = document.getElementById('speedStartPrompt');
    const arena = document.getElementById('speedArena');
    const summary = document.getElementById('speedSummary');

    if (prompt) prompt.classList.remove('hidden');
    if (arena) arena.classList.add('hidden');
    if (summary) summary.classList.add('hidden');
    loadSpeedHighScore();
}

function playSynthesizerTone(frequency, durationMs) {
    try {
        if (!speedAudioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) speedAudioCtx = new AudioContext();
        }
        if (!speedAudioCtx) return;

        const osc = speedAudioCtx.createOscillator();
        const gain = speedAudioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, speedAudioCtx.currentTime);

        gain.gain.setValueAtTime(0.08, speedAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, speedAudioCtx.currentTime + (durationMs / 1000));

        osc.connect(gain);
        gain.connect(speedAudioCtx.destination);

        osc.start();
        osc.stop(speedAudioCtx.currentTime + (durationMs / 1000));
    } catch {
        // Silent fallback
    }
}

function startSpeedChallenge() {
    stopSpeedChallenge();

    speedScore = 0;
    speedStreak = 0;
    speedBestStreak = 0;
    speedCorrectCount = 0;
    speedTimerSeconds = 60;

    const prompt = document.getElementById('speedStartPrompt');
    const arena = document.getElementById('speedArena');
    const summary = document.getElementById('speedSummary');

    if (prompt) prompt.classList.add('hidden');
    if (summary) summary.classList.add('hidden');
    if (arena) arena.classList.remove('hidden');

    updateSpeedScoreboard();
    nextSpeedQuestion();

    speedTimerHandle = window.setInterval(() => {
        speedTimerSeconds -= 1;
        const timerText = document.getElementById('speedTimerText');
        const timeBar = document.getElementById('speedTimeBar');

        if (timerText) timerText.textContent = `${speedTimerSeconds}s`;
        if (timeBar) timeBar.style.width = `${(speedTimerSeconds / 60) * 100}%`;

        if (speedTimerSeconds <= 0) {
            endSpeedChallenge();
        }
    }, 1000);
}

function stopSpeedChallenge() {
    if (speedTimerHandle) {
        clearInterval(speedTimerHandle);
        speedTimerHandle = null;
    }
}

function nextSpeedQuestion() {
    const bank = buildPracticeBank();
    speedCurrentQuestion = bank[Math.floor(Math.random() * bank.length)];

    const subjTag = document.getElementById('speedSubjectTag');
    const title = document.getElementById('speedQuestionTitle');
    const optsContainer = document.getElementById('speedOptionsContainer');

    if (subjTag) subjTag.textContent = `${speedCurrentQuestion.courseCode || 'CS'} &bull; Speed Recall`;
    if (title) title.textContent = speedCurrentQuestion.question;

    if (optsContainer) {
        optsContainer.innerHTML = (speedCurrentQuestion.options || []).map((opt, idx) => `
            <button onclick="handleSpeedAnswer(${idx})" class="w-full text-left p-3 rounded-lg bg-slate-800/80 hover:bg-blue-600/30 border border-slate-700 hover:border-blue-500 text-white text-xs transition">
                ${opt}
            </button>
        `).join('');
    }
}

function handleSpeedAnswer(selectedIndex) {
    if (!speedCurrentQuestion || speedTimerSeconds <= 0) return;

    const isCorrect = selectedIndex === speedCurrentQuestion.answer;

    if (isCorrect) {
        speedStreak += 1;
        if (speedStreak > speedBestStreak) speedBestStreak = speedStreak;
        speedCorrectCount += 1;

        // Multiplier: 1-2 = 1x, 3-4 = 2x, 5+ = 3x
        const multiplier = speedStreak >= 5 ? 3 : (speedStreak >= 3 ? 2 : 1);
        speedScore += 10 * multiplier;

        playSynthesizerTone(587.33, 120); // D5 high chime
    } else {
        speedStreak = 0;
        playSynthesizerTone(220.00, 150); // A3 low pulse
    }

    updateSpeedScoreboard();
    nextSpeedQuestion();
}

function updateSpeedScoreboard() {
    const scoreText = document.getElementById('speedScoreText');
    const streakBadge = document.getElementById('speedStreakBadge');

    if (scoreText) scoreText.textContent = speedScore;
    if (streakBadge) {
        const multiplier = speedStreak >= 5 ? '3x Flame' : (speedStreak >= 3 ? '2x Combo' : `${speedStreak} Streak`);
        streakBadge.textContent = multiplier;
        streakBadge.classList.toggle('streak-active', speedStreak >= 3);
    }
}

function endSpeedChallenge() {
    stopSpeedChallenge();

    const arena = document.getElementById('speedArena');
    const summary = document.getElementById('speedSummary');

    if (arena) arena.classList.add('hidden');
    if (summary) summary.classList.remove('hidden');

    const finalScore = document.getElementById('finalScoreVal');
    const finalCorrect = document.getElementById('finalCorrectVal');
    const finalStreak = document.getElementById('finalStreakVal');

    if (finalScore) finalScore.textContent = speedScore;
    if (finalCorrect) finalCorrect.textContent = speedCorrectCount;
    if (finalStreak) finalStreak.textContent = speedBestStreak;

    // Save High Score
    const prevHigh = parseInt(localStorage.getItem('academy_lms_speed_high') || '0', 10);
    if (speedScore > prevHigh) {
        localStorage.setItem('academy_lms_speed_high', String(speedScore));
    }
    loadSpeedHighScore();

    // Log practice session
    if (window.ACADEMY && typeof window.ACADEMY.recordPracticeSession === 'function') {
        window.ACADEMY.recordPracticeSession({
            courseId: 'all',
            courseLabel: 'Speed Streak Challenge',
            mode: 'speed',
            attempted: speedCorrectCount,
            correct: speedCorrectCount,
            total: speedCorrectCount,
            accuracy: 100,
            autoSubmitted: true
        });
    }
}

// Global Exports
window.switchPracticeMode = switchPracticeMode;
window.setSemesterFilter = setSemesterFilter;
window.setPracticeCourse = setPracticeCourse;
window.buildPracticeSession = buildPracticeSession;
window.answerPracticeQuestion = answerPracticeQuestion;
window.startMockTest = startMockTest;
window.submitCurrentSession = submitCurrentSession;

window.toggleFlashcardFlip = toggleFlashcardFlip;
window.nextFlashcard = nextFlashcard;
window.prevFlashcard = prevFlashcard;
window.shuffleFlashcards = shuffleFlashcards;
window.gradeFlashcard = gradeFlashcard;

window.generateNewSubnetProblem = generateNewSubnetProblem;
window.verifySubnetCalculation = verifySubnetCalculation;
window.revealSubnetSolution = revealSubnetSolution;

window.generateNewRsaProblem = generateNewRsaProblem;
window.verifyRsaCalculation = verifyRsaCalculation;
window.revealRsaSolution = revealRsaSolution;

window.verifyCpmCalculation = verifyCpmCalculation;
window.revealCpmSolution = revealCpmSolution;

window.verifyParserCalculation = verifyParserCalculation;
window.revealParserSolution = revealParserSolution;

window.verifyDfaMinimization = verifyDfaMinimization;
window.revealDfaSolution = revealDfaSolution;

window.verifyDbmsClosure = verifyDbmsClosure;
window.revealDbmsSolution = revealDbmsSolution;

window.generateNewDhProblem = generateNewDhProblem;
window.verifyDhCalculation = verifyDhCalculation;
window.revealDhSolution = revealDhSolution;

window.generateNewCellularProblem = generateNewCellularProblem;
window.verifyCellularCalculation = verifyCellularCalculation;
window.revealCellularSolution = revealCellularSolution;

window.verifyHdfsCalculation = verifyHdfsCalculation;
window.revealHdfsSolution = revealHdfsSolution;

window.verifyArchCalculation = verifyArchCalculation;
window.revealArchSolution = revealArchSolution;

window.initSimulator = initSimulator;
window.loadSimulatorQuestion = loadSimulatorQuestion;
window.updateSimWordCount = updateSimWordCount;
window.clearSimDraft = clearSimDraft;
window.updateSimScoreBadge = updateSimScoreBadge;
window.evaluateSimAnswer = evaluateSimAnswer;
window.revealSimModelAnswer = revealSimModelAnswer;
window.hideSimModelAnswer = hideSimModelAnswer;

window.initSandbox = initSandbox;
window.runDhSimulator = runDhSimulator;
window.runCellularPlanner = runCellularPlanner;
window.runHdfsPlanner = runHdfsPlanner;
window.updateArchScenarioOptions = updateArchScenarioOptions;
window.verifyArchScenario = verifyArchScenario;

window.startSpeedChallenge = startSpeedChallenge;
window.handleSpeedAnswer = handleSpeedAnswer;

// Page Lifecycle Initialization
document.addEventListener('DOMContentLoaded', async () => {
    if (window.ACADEMY && typeof window.ACADEMY.requireStudentAuth === 'function') {
        const allowed = await window.ACADEMY.requireStudentAuth({
            nextPath: '/html/tests.html'
        });
        if (!allowed) return;
    }

    if (window.ACADEMY && typeof window.ACADEMY.scheduleCloudSync === 'function') {
        window.ACADEMY.scheduleCloudSync();
    }

    initializeTestsPage();
});
