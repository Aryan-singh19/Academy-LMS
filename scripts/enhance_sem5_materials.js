const fs = require('fs');
const path = require('path');

function injectIntoTopic(content, topicKey, blockToInject, uniqueMarker) {
    if (content.includes(uniqueMarker)) {
        return content; // already injected
    }
    const keyRegex = new RegExp(`('${topicKey}':\\s*\\{[\\s\\S]*?content:\\s*\`\\r?\\n)`);
    if (!keyRegex.test(content)) {
        console.warn(`Could not find topic key ${topicKey}`);
        return content;
    }
    return content.replace(keyRegex, `$1${blockToInject}\n`);
}

// 1. CS-501 (TOC)
const cs501Path = path.join(__dirname, '../js/data_cs501.js');
let cs501 = fs.readFileSync(cs501Path, 'utf8');

cs501 = injectIntoTopic(cs501, 'cs501-u1t1', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Automata State Transition Model</h3>
<p class="mb-3 text-gray-400">Example: A deterministic finite automaton recognizing binary strings having an odd number of 1s.</p>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
stateDiagram-v2
    [*] --> q0 : Start
    q0 --> q0 : 0
    q0 --> q1 : 1
    q1 --> q0 : 1
    q1 --> q1 : 0
    q1 --> [*] : Accept (Odd Parity)
</div>`, 'Accept (Odd Parity)');

cs501 = injectIntoTopic(cs501, 'cs501-u1t3', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Moore vs Mealy Architecture Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph Moore [Moore: Output inside State]
        M0((q0 / 0)) -->|input 1| M1((q1 / 1))
        M1 -->|input 0| M0
    end
    subgraph Mealy [Mealy: Output on Transition]
        N0((s0)) -->|input 1 / out 1| N1((s1))
        N1 -->|input 0 / out 0| N0
    end
    style M0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style M1 fill:#1e293b,stroke:#10b981,color:#fff
    style N0 fill:#1e293b,stroke:#f59e0b,color:#fff
    style N1 fill:#1e293b,stroke:#ec4899,color:#fff
</div>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
    <div class="font-bold text-amber-300 text-sm mb-1">University Exam Trap: Output Length</div>
    <p class="text-xs text-slate-300">If the input string length is <em>n</em>, a Moore machine produces <strong>n + 1</strong> outputs (emits before reading). A Mealy machine produces exactly <strong>n</strong> outputs. This is asked in virtually every semester viva!</p>
</div>`, 'subgraph Moore [Moore: Output inside State]');

cs501 = injectIntoTopic(cs501, 'cs501-u2t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    subgraph DFA [Deterministic FA: Exactly 1 Transition per Symbol]
        D0((q0)) -->|a| D1((q1))
        D0 -->|b| D2((q2))
    end
    subgraph NFA [Non-Deterministic FA: 0, 1 or Multiple Branches + &epsilon;]
        N0((p0)) -->|a| N1((p1))
        N0 -->|a| N2((p2))
        N0 -->|&epsilon;| N3((p3))
    end
    style D0 fill:#1e293b,stroke:#3b82f6,color:#fff
    style N0 fill:#1e293b,stroke:#ec4899,color:#fff
</div>`, 'subgraph DFA [Deterministic FA: Exactly 1 Transition per Symbol]');

cs501 = injectIntoTopic(cs501, 'cs501-u2t4', `
<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">RGPV / University Exam Solved Numerical: Arden's Theorem</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Statement:</strong> If P and Q are regular expressions over &Sigma;, and P does not contain &epsilon;, then <code>R = Q + RP</code> has a unique solution <code>R = QP*</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div class="text-slate-400">// Given System of State Equations (q1 is start, q2 is final):</div>
        <div>q1 = q1(0) + &epsilon;            (Eq 1)</div>
        <div>q2 = q1(1) + q2(0 + 1)       (Eq 2)</div>
        <div class="text-slate-400 mt-2">// Step 1: Solve Eq 1 directly with Arden's (R = q1, Q = &epsilon;, P = 0):</div>
        <div class="text-cyan-300">q1 = &epsilon; &middot; 0* = 0*</div>
        <div class="text-slate-400 mt-2">// Step 2: Substitute q1 into Eq 2:</div>
        <div>q2 = (0*)1 + q2(0 + 1)</div>
        <div class="text-slate-400 mt-2">// Step 3: Apply Arden's to q2 (Q = 0*1, P = (0 + 1)):</div>
        <div class="text-yellow-300 font-bold">q2 = (0*1)(0 + 1)*  <-- Final Regular Expression</div>
    </div>
</div>`, 'q2 = (0*1)(0 + 1)*');

cs501 = injectIntoTopic(cs501, 'cs501-u3t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    T0[Type 0: Unrestricted Grammar / Turing Machine] --> T1[Type 1: Context-Sensitive Grammar / LBA]
    T1 --> T2[Type 2: Context-Free Grammar / Pushdown Automaton]
    T2 --> T3[Type 3: Regular Grammar / Finite Automaton]
    style T0 fill:#1e293b,stroke:#ef4444,color:#fff
    style T1 fill:#1e293b,stroke:#f59e0b,color:#fff
    style T2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style T3 fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Type 0: Unrestricted Grammar / Turing Machine');

cs501 = injectIntoTopic(cs501, 'cs501-u4t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Input[Input Tape: a a b b] --> Control[Finite Control State Q]
    Control <-->|Push / Pop & Read Top| Stack[LIFO Stack Memory: Z0, a, a]
    style Input fill:#1e293b,stroke:#64748b,color:#fff
    style Control fill:#1e293b,stroke:#3b82f6,color:#fff
    style Stack fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'LIFO Stack Memory: Z0, a, a');

cs501 = injectIntoTopic(cs501, 'cs501-u5t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Tape[Infinite Two-Way Memory Tape: ... | B | 0 | 1 | 1 | 0 | B | ...]
    Head[Read/Write Head: Can Read, Overwrite & Move Left/Right] --> Tape
    Control[Finite State Control Register Q] --> Head
    style Tape fill:#1e293b,stroke:#64748b,color:#fff
    style Head fill:#1e293b,stroke:#f59e0b,color:#fff
    style Control fill:#1e293b,stroke:#3b82f6,color:#fff
</div>`, 'Infinite Two-Way Memory Tape');

fs.writeFileSync(cs501Path, cs501, 'utf8');

// 2. CS-502 (DBMS)
const cs502Path = path.join(__dirname, '../js/data_cs502.js');
let cs502 = fs.readFileSync(cs502Path, 'utf8');

cs502 = injectIntoTopic(cs502, 'cs502-u1t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    V1[External View 1: Student Portal] & V2[External View 2: Faculty Portal] & V3[External View 3: Admin Desk] -->|Logical Data Independence| C[Conceptual Schema: Unified Relational Schema]
    C -->|Physical Data Independence| I[Internal / Physical Schema: Data Files, B+ Trees, Indexes]
    I --> D[(Physical Storage Hardware: Disks)]
    style C fill:#1e293b,stroke:#3b82f6,color:#fff
    style I fill:#1e293b,stroke:#10b981,color:#fff
    style D fill:#1e293b,stroke:#f59e0b,color:#fff
</div>`, 'External View 1: Student Portal');

cs502 = injectIntoTopic(cs502, 'cs502-u1t4', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    E1[STUDENT] --- R{ENROLLS_IN}
    R --- E2[COURSE]
    E1 --- A1((RollNo*))
    E1 --- A2((Name))
    E2 --- A3((CourseCode*))
    E2 --- A4((Credits))
    style E1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style E2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style R fill:#1e293b,stroke:#f59e0b,color:#fff
</div>`, 'ENROLLS_IN');

cs502 = injectIntoTopic(cs502, 'cs502-u2t4', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Root[&Pi; StudentName, CourseName] --> Join[&bowtie; Enrollment.CourseID = Course.CourseID]
    Join --> Filter[&sigma; Department = 'CSE']
    Filter --> Table1[(STUDENT Table)]
    Join --> Table2[(COURSE Table)]
    style Root fill:#1e293b,stroke:#3b82f6,color:#fff
    style Join fill:#1e293b,stroke:#f59e0b,color:#fff
    style Filter fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Enrollment.CourseID = Course.CourseID');

cs502 = injectIntoTopic(cs502, 'cs502-u3t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    N1[1NF: Atomic Values] --> N2[2NF: No Partial Key Dependencies]
    N2 --> N3[3NF: No Transitive Dependencies]
    N3 --> N4[BCNF: Every Determinant is a Super Key]
    style N1 fill:#1e293b,stroke:#64748b,color:#fff
    style N2 fill:#1e293b,stroke:#3b82f6,color:#fff
    style N3 fill:#1e293b,stroke:#10b981,color:#fff
    style N4 fill:#1e293b,stroke:#f59e0b,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: BCNF Decomposition</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given Relation:</strong> <code>R(A, B, C, D)</code> with Functional Dependencies: <code>AB &rarr; C, C &rarr; D, D &rarr; A</code>.</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Candidate Keys: Closure (AB)+ = {A,B,C,D}. Also (BD)+ = {B,D,A,C} and (BC)+ = {B,C,D,A}. Candidate Keys are AB, BD, BC.</div>
        <div>2. Test C &rarr; D: C is NOT a superkey, but D is a prime attribute (part of candidate key BD). Hence it passes 3NF, but VIOLATES BCNF!</div>
        <div>3. Decompose R into BCNF:</div>
        <div class="text-cyan-300">   R1(C, D) with FD: C &rarr; D (C is key of R1, so R1 is in BCNF)</div>
        <div class="text-cyan-300">   R2(A, B, C) with FDs: AB &rarr; C (AB is key of R2, so R2 is in BCNF)</div>
        <div class="text-yellow-300 font-bold">4. Verify Lossless Join: R1 &cap; R2 = {C}, and C &rarr; CD determines all of R1. Hence decomposition is LOSSLESS!</div>
    </div>
</div>`, 'BCNF: Every Determinant is a Super Key');

cs502 = injectIntoTopic(cs502, 'cs502-u4t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
stateDiagram-v2
    [*] --> Active : BEGIN TRANSACTION
    Active --> Partially_Committed : Last SQL statement executed
    Partially_Committed --> Committed : Flush log buffer to disk
    Active --> Failed : Arithmetic overflow or deadlock
    Partially_Committed --> Failed : Disk write error
    Failed --> Aborted : ROLLBACK and undo changes
    Committed --> [*]
    Aborted --> [*]
</div>`, 'BEGIN TRANSACTION');

cs502 = injectIntoTopic(cs502, 'cs502-u4t4', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph Phase1 [Growing Phase]
        G[Acquire Shared/Exclusive Locks. NO locks released.]
    end
    Phase1 --> LockPoint((Lock Point: Peak Locks))
    LockPoint --> Phase2 [Shrinking Phase]
    subgraph Phase2 [Shrinking Phase]
        S[Release Locks. NO new locks can be acquired.]
    end
    style Phase1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style LockPoint fill:#1e293b,stroke:#f59e0b,color:#fff
    style Phase2 fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Lock Point: Peak Locks');

fs.writeFileSync(cs502Path, cs502, 'utf8');

// 3. CS-503 (Data Analytics)
const cs503Path = path.join(__dirname, '../js/data_cs503.js');
let cs503 = fs.readFileSync(cs503Path, 'utf8');

cs503 = injectIntoTopic(cs503, 'cs503-u1t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    H[Formulate Null Hypothesis H0 & Alt H1] --> Sample[Collect Sample & Compute Test Statistic: z, t, or F]
    Sample --> PVal{Compare p-value to Significance Level &alpha;}
    PVal -- p-value &le; &alpha; --> Reject[Reject H0: Statistically Significant Effect]
    PVal -- p-value > &alpha; --> FailReject[Fail to Reject H0: Insufficient Evidence]
    style H fill:#1e293b,stroke:#3b82f6,color:#fff
    style Reject fill:#1e293b,stroke:#10b981,color:#fff
    style FailReject fill:#1e293b,stroke:#ef4444,color:#fff
</div>`, 'Formulate Null Hypothesis H0');

cs503 = injectIntoTopic(cs503, 'cs503-u2t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    BD[The 4 V Dimensions of Big Data] --> V1[Volume: Terabytes to Exabytes of Data]
    BD --> V2[Velocity: Real-time streams & sensor bursts]
    BD --> V3[Variety: Structured tables, JSON, Video, Logs]
    BD --> V4[Veracity: Data noise, anomalies & trust level]
    style BD fill:#1e293b,stroke:#3b82f6,color:#fff
    style V1 fill:#1e293b,stroke:#f59e0b,color:#fff
    style V2 fill:#1e293b,stroke:#10b981,color:#fff
    style V3 fill:#1e293b,stroke:#ec4899,color:#fff
    style V4 fill:#1e293b,stroke:#06b6d4,color:#fff
</div>`, 'The 4 V Dimensions of Big Data');

cs503 = injectIntoTopic(cs503, 'cs503-u3t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    S1[(MySQL)] & S2[(MongoDB)] & S3[Log Streams] --> Ingest[Data Ingestion: Apache Sqoop / Flume]
    Ingest --> Lake[(HDFS Data Lake / Staging)]
    Lake --> Process[MapReduce / Spark Transformation]
    Process --> Warehouse[(Hive Data Warehouse)]
    style Lake fill:#1e293b,stroke:#3b82f6,color:#fff
    style Process fill:#1e293b,stroke:#f59e0b,color:#fff
    style Warehouse fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Data Ingestion: Apache Sqoop');

cs503 = injectIntoTopic(cs503, 'cs503-u4t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Input[Input Splits in HDFS] --> Map[Mapper: Emit key, 1]
    Map --> Shuffle[Shuffle & Sort: Partition by Key]
    Shuffle --> Reduce[Reducer: Aggregate Values]
    Reduce --> Output[(HDFS Storage Output)]
    style Map fill:#1e293b,stroke:#3b82f6,color:#fff
    style Shuffle fill:#1e293b,stroke:#f59e0b,color:#fff
    style Reduce fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Input Splits in HDFS');

cs503 = injectIntoTopic(cs503, 'cs503-u5t3', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    CLI[Hive Client: CLI, Web UI, JDBC/ODBC] --> Driver[Hive Driver: Compiler, Optimizer, Executor]
    Driver <--> Meta[(Metastore: MySQL/Postgres Schema DB)]
    Driver --> Engine[Execution Engine: MapReduce / Tez / Spark]
    Engine --> HDFS[(HDFS Storage: Raw Data Files)]
    style Driver fill:#1e293b,stroke:#3b82f6,color:#fff
    style Meta fill:#1e293b,stroke:#f59e0b,color:#fff
    style Engine fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Hive Client: CLI, Web UI');

fs.writeFileSync(cs503Path, cs503, 'utf8');

// 4. CS-503-CS (Cyber Security)
const cs503csPath = path.join(__dirname, '../js/data_cs503-cs.js');
let cs503cs = fs.readFileSync(cs503csPath, 'utf8');

cs503cs = injectIntoTopic(cs503cs, 'cs503cs-u1t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    R[1. Reconnaissance] --> W[2. Weaponization]
    W --> D[3. Delivery]
    D --> E[4. Exploitation]
    E --> I[5. Installation]
    I --> C[6. Command & Control]
    C --> A[7. Actions on Objectives]
    style R fill:#1e293b,stroke:#64748b,color:#fff
    style E fill:#1e293b,stroke:#ef4444,color:#fff
    style C fill:#1e293b,stroke:#f59e0b,color:#fff
    style A fill:#1e293b,stroke:#dc2626,color:#fff
</div>`, '1. Reconnaissance');

cs503cs = injectIntoTopic(cs503cs, 'cs503cs-u2t5', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
sequenceDiagram
    autonumber
    Victim->>Server: 1. Login with credentials
    Server-->>Victim: 2. Issues Session Cookie (SID=abc123xyz)
    Attacker->>Victim: 3. Steals cookie via XSS / Sniffing
    Attacker->>Server: 4. Replays SID=abc123xyz directly
    Server-->>Attacker: 5. Grants full authenticated access!
</div>`, 'Issues Session Cookie');

cs503cs = injectIntoTopic(cs503cs, 'cs503cs-u3t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Complaint[Cyber Complaint Filed] --> Offence{Nature of Crime}
    Offence -- Civil Offence Sec 43 --> Adj[Adjudicating Officer: Up to Rs 5 Crore Damage Award]
    Offence -- Criminal Offence Sec 66 --> Court[Metropolitan / Judicial Magistrate: Imprisonment & Fine]
    Adj --> AppTribunal[Telecom Dispute / Cyber Appellate Tribunal]
    Court --> Sessions[Sessions Court]
    AppTribunal & Sessions --> HighCourt[High Court]
    style Offence fill:#1e293b,stroke:#f59e0b,color:#fff
    style Adj fill:#1e293b,stroke:#3b82f6,color:#fff
    style Court fill:#1e293b,stroke:#ef4444,color:#fff
</div>`, 'Civil Offence Sec 43');

cs503cs = injectIntoTopic(cs503cs, 'cs503cs-u4t4', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    subgraph Signing [Digital Signing: Sender Side]
        Doc1[Plaintext Contract] -->|SHA-256| Hash1[Computed Hash Value]
        Hash1 -->|Sender Private Key| Sig[Digital Signature Block]
    end
    subgraph Verifying [Verification: Receiver Side]
        Sig -->|Sender Public Key| DecHash[Decrypted Original Hash]
        RecDoc[Received Contract] -->|SHA-256| RecHash[Newly Computed Hash]
        DecHash & RecHash -->|Integrity Comparison| Comp{Match?}
        Comp -- Identical --> Valid[Authentic & Legally Binding]
        Comp -- Mismatch --> Alert[Tampered or Forged: Rejected]
    end
    style Sig fill:#1e293b,stroke:#3b82f6,color:#fff
    style Valid fill:#1e293b,stroke:#10b981,color:#fff
    style Alert fill:#1e293b,stroke:#ef4444,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Indian Evidence Act Section 65B Mandatory Certificate Checklist</h4>
    <p class="text-sm text-gray-300 mb-2">Under the landmark Supreme Court ruling in <em>Anvar P.V. vs P.K. Basheer (2014)</em>, secondary electronic records (printouts, CDs, hard disk images) are strictly inadmissible without a 65B certificate stating:</p>
    <ul class="list-disc pl-5 text-xs text-slate-300 space-y-1">
        <li>The computer was used regularly to store or process information during the period.</li>
        <li>Information of that kind was regularly supplied into the device in the ordinary course of activities.</li>
        <li>The computer was operating properly throughout the material period (or brief outages did not affect accuracy).</li>
        <li>The reproduction is a true copy produced by the computer in the ordinary course.</li>
    </ul>
</div>`, 'Indian Evidence Act Section 65B Mandatory Certificate Checklist');

cs503cs = injectIntoTopic(cs503cs, 'cs503cs-u5t4', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Master[Attacker Command & Control C2] --> B1[Bot Zombie 1] & B2[Bot Zombie 2] & B3[Bot Zombie 3] & B4[Bot Zombie 4]
    B1 & B2 & B3 & B4 -->|Volumetric SYN/UDP Flood| Victim[(Target Web Server: Crashed!)]
    style Master fill:#1e293b,stroke:#ef4444,color:#fff
    style Victim fill:#1e293b,stroke:#dc2626,color:#fff
</div>`, 'Volumetric SYN/UDP Flood');

fs.writeFileSync(cs503csPath, cs503cs, 'utf8');

// 5. CS-504 (Web Technology)
const cs504Path = path.join(__dirname, '../js/data_cs504.js');
let cs504 = fs.readFileSync(cs504Path, 'utf8');

cs504 = injectIntoTopic(cs504, 'cs504-u1t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
sequenceDiagram
    autonumber
    Browser->>Server: 1. TCP SYN (Handshake Initiated)
    Server-->>Browser: 2. TCP SYN-ACK
    Browser->>Server: 3. TCP ACK (Connection Established)
    Browser->>Server: 4. HTTP GET /index.html (Headers + Cookies)
    Server-->>Browser: 5. HTTP/1.1 200 OK (Content-Type text/html + HTML payload)
</div>`, '1. TCP SYN (Handshake Initiated)');

cs504 = injectIntoTopic(cs504, 'cs504-u2t5', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    HTML[HTML Tokens] --> DOM[DOM Tree]
    CSS[CSS Rules] --> CSSOM[CSSOM Tree]
    DOM & CSSOM --> Render[Render Tree]
    Render --> Layout[Layout / Geometry Reflow]
    Layout --> Paint[Paint & GPU Compositing]
    style DOM fill:#1e293b,stroke:#3b82f6,color:#fff
    style CSSOM fill:#1e293b,stroke:#ec4899,color:#fff
    style Render fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Layout / Geometry Reflow');

cs504 = injectIntoTopic(cs504, 'cs504-u3t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    M[Margin: External Spacing] --> B[Border: Outer Frame]
    B --> P[Padding: Internal Breathing Space]
    P --> C[Content: Text, Image or Video]
    style M fill:#1e293b,stroke:#f59e0b,color:#fff
    style B fill:#1e293b,stroke:#ef4444,color:#fff
    style P fill:#1e293b,stroke:#10b981,color:#fff
    style C fill:#1e293b,stroke:#3b82f6,color:#fff
</div>`, 'Padding: Internal Breathing Space');

cs504 = injectIntoTopic(cs504, 'cs504-u3t6', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Window[1. Window / Document] -->|Capturing Phase| Body[2. Body]
    Body -->|Capturing Phase| Form[3. Form Container]
    Form -->|Target Phase| Button[4. Clicked Target Button]
    Button -->|Bubbling Phase| Form
    Form -->|Bubbling Phase| Body
    Body -->|Bubbling Phase| Window
    style Button fill:#1e293b,stroke:#ef4444,color:#fff
    style Window fill:#1e293b,stroke:#3b82f6,color:#fff
    style Form fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'Capturing Phase');

cs504 = injectIntoTopic(cs504, 'cs504-u4t2', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    XML[(XML Source Data)] --> Engine[XSLT Transformation Processor]
    XSL[XSL Stylesheet Template] --> Engine
    Engine --> Output[Output: Clean Responsive HTML / XHTML]
    style XML fill:#1e293b,stroke:#3b82f6,color:#fff
    style XSL fill:#1e293b,stroke:#f59e0b,color:#fff
    style Output fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'XSLT Transformation Processor');

cs504 = injectIntoTopic(cs504, 'cs504-u5t1', `
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Client[Web Browser] -->|HTTP Request| Server[Apache / Nginx Web Server]
    Server -->|Pass .php script| Engine[Zend PHP Engine]
    Engine <-->|PDO / MySQLi Driver| DB[(MySQL Database)]
    Engine -->|Compiled HTML| Server
    Server -->|HTTP Response| Client
    style Server fill:#1e293b,stroke:#3b82f6,color:#fff
    style Engine fill:#1e293b,stroke:#f59e0b,color:#fff
    style DB fill:#1e293b,stroke:#10b981,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Best Practice Code: Secure PHP PDO Prepared Statements</h4>
    <p class="text-sm text-gray-300 mb-2">Always use parameterized queries with PDO to neutralize SQL Injection attacks in production:</p>
    <pre class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 overflow-x-auto border border-slate-800">
&lt;?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=university_db;charset=utf8mb4", "db_user", "secure_password", [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    // Secure query with parameterized placeholder
    $stmt = $pdo->prepare("SELECT id, name, email FROM students WHERE semester = :sem AND branch = :branch");
    $stmt->execute([
        ':sem' => 5,
        ':branch' => 'CSE'
    ]);
    $results = $stmt->fetchAll();
    
    foreach ($results as $row) {
        echo htmlspecialchars($row['name']) . "&lt;br&gt;";
    }
} catch (PDOException $e) {
    error_log($e->getMessage());
    echo "Database query could not be completed safely.";
}
?&gt;</pre>
</div>`, 'Secure PHP PDO Prepared Statements');

fs.writeFileSync(cs504Path, cs504, 'utf8');

console.log('All 5 subjects successfully injected with diagrams, code, and exam aids!');
