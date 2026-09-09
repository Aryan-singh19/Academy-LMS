const fs = require('fs');
const path = require('path');

function injectBeforeEnd(content, topicKey, blockToInject, marker) {
    if (content.includes(marker)) {
        console.log(`[SKIP] Already contains marker: ${marker}`);
        return content;
    }
    const regex = new RegExp(`('${topicKey}':\\s*\\{[\\s\\S]*?content:\\s*\`)([\\s\\S]*?)(\`\\s*,\\s*quizzes:)`);
    const match = content.match(regex);
    if (!match) {
        console.warn(`[WARN] Could not find topic key: ${topicKey}`);
        return content;
    }
    const updated = content.replace(regex, `$1$2\n${blockToInject}\n$3`);
    console.log(`[SUCCESS] Injected into ${topicKey} (${marker})`);
    return updated;
}

console.log('--- Applying targeted enhancements ---');

// ==========================================
// 1. CS-603: Compiler Design
// ==========================================
const cs603Path = path.join(__dirname, '../js/data_cs603.js');
let cs603 = fs.readFileSync(cs603Path, 'utf8');

cs603 = injectBeforeEnd(cs603, 'c3-u1t1', `
<h3 class="text-xl font-bold mb-2 text-blue-400">The 6 Phases of Compiler Architecture</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Source[Source Code: High-Level Language] --> Lex[1. Lexical Analyzer: Scanner / Tokens]
    Lex --> Syn[2. Syntax Analyzer: Parser / Parse Tree]
    Syn --> Sem[3. Semantic Analyzer: Type Checking & Symbol Table]
    Sem --> ICG[4. Intermediate Code Generator: 3-Address Code / Quadruples]
    ICG --> Opt[5. Machine-Independent Optimizer: Dead Code, Loop Unrolling]
    Opt --> Target[6. Target Code Generator: Assembly / Machine Code]
    style Source fill:#1e293b,stroke:#64748b,color:#fff
    style Lex fill:#1e293b,stroke:#3b82f6,color:#fff
    style Syn fill:#1e293b,stroke:#10b981,color:#fff
    style Sem fill:#1e293b,stroke:#f59e0b,color:#fff
    style ICG fill:#1e293b,stroke:#ec4899,color:#fff
    style Opt fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Target fill:#1e293b,stroke:#06b6d4,color:#fff
</div>`, 'The 6 Phases of Compiler Architecture');

cs603 = injectBeforeEnd(cs603, 'c3-u1t2', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Parsing Hierarchy & LL vs LR Classification</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Parser[Grammar Parsers] --> TopDown[Top-Down Parsers: Root to Leaves]
    Parser --> BottomUp[Bottom-Up Parsers: Leaves to Root / Shift-Reduce]
    TopDown --> LL[LL: Left-to-right, Leftmost derivation: LL 1, Recursive Descent]
    BottomUp --> LR[LR: Left-to-right, Rightmost derivation in reverse]
    LR --> SLR[SLR 1: Simple LR]
    LR --> LALR[LALR 1: Look-Ahead LR, Yacc/Bison]
    LR --> CLR[CLR 1: Canonical LR, Most Powerful]
    style TopDown fill:#1e293b,stroke:#3b82f6,color:#fff
    style BottomUp fill:#1e293b,stroke:#10b981,color:#fff
    style LL fill:#1e293b,stroke:#f59e0b,color:#fff
    style LR fill:#1e293b,stroke:#ec4899,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: FIRST and FOLLOW Sets</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Given Grammar:</strong></p>
    <div class="bg-gray-950 p-3 rounded font-mono text-xs text-cyan-300 mb-3 border border-slate-800">
        E  &rarr; T E'<br>
        E' &rarr; + T E' | &epsilon;<br>
        T  &rarr; F T'<br>
        T' &rarr; * F T' | &epsilon;<br>
        F  &rarr; ( E ) | id
    </div>
    <div class="space-y-2 text-xs font-mono text-gray-300">
        <div class="text-emerald-400 font-bold">1. FIRST Sets:</div>
        <div>FIRST(F)  = { (, id }</div>
        <div>FIRST(T') = { *, &epsilon; }</div>
        <div>FIRST(T)  = FIRST(F) = { (, id }</div>
        <div>FIRST(E') = { +, &epsilon; }</div>
        <div>FIRST(E)  = FIRST(T) = { (, id }</div>
        <div class="text-emerald-400 font-bold mt-2">2. FOLLOW Sets (Rule: $ in FOLLOW(Start)):</div>
        <div>FOLLOW(E)  = { $, ) }</div>
        <div>FOLLOW(E') = FOLLOW(E) = { $, ) }</div>
        <div>FOLLOW(T)  = FIRST(E') \ {&epsilon;} &cup; FOLLOW(E') = { +, $, ) }</div>
        <div>FOLLOW(T') = FOLLOW(T) = { +, $, ) }</div>
        <div>FOLLOW(F)  = FIRST(T') \ {&epsilon;} &cup; FOLLOW(T') = { *, +, $, ) }</div>
    </div>
</div>`, 'University Exam Solved Numerical: FIRST and FOLLOW Sets');

cs603 = injectBeforeEnd(cs603, 'c3-u2t2', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Control Flow Graph (CFG) & Basic Block Partitioning</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    Entry([Entry]) --> B1[B1: i = 1, sum = 0]
    B1 --> B2{B2: if i <= 100}
    B2 -- True --> B3[B3: sum += i, i++]
    B3 --> B2
    B2 -- False --> B4[B4: print sum, return]
    B4 --> Exit([Exit])
    style Entry fill:#1e293b,stroke:#64748b,color:#fff
    style B1 fill:#1e293b,stroke:#3b82f6,color:#fff
    style B2 fill:#1e293b,stroke:#f59e0b,color:#fff
    style B3 fill:#1e293b,stroke:#10b981,color:#fff
    style B4 fill:#1e293b,stroke:#ec4899,color:#fff
    style Exit fill:#1e293b,stroke:#64748b,color:#fff
</div>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
    <div class="font-bold text-amber-300 text-sm mb-1">Leader Identification Rules for Basic Blocks</div>
    <ol class="list-decimal pl-5 text-xs text-slate-300 space-y-1">
        <li>The very first three-address statement in the intermediate code is a leader.</li>
        <li>Any statement that is the target of a conditional or unconditional jump (e.g. <code>goto L1</code>) is a leader.</li>
        <li>Any statement that immediately follows a conditional or unconditional jump statement is a leader.</li>
    </ol>
</div>`, 'Control Flow Graph (CFG) & Basic Block Partitioning');

fs.writeFileSync(cs603Path, cs603, 'utf8');

// ==========================================
// 2. CS-601: Machine Learning
// ==========================================
const cs601Path = path.join(__dirname, '../js/data_cs601.js');
let cs601 = fs.readFileSync(cs601Path, 'utf8');

cs601 = injectBeforeEnd(cs601, 't1', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Machine Learning Taxonomy & Paradigms</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    ML[Machine Learning Paradigms] --> Sup[Supervised Learning: Labeled Data]
    ML --> Unsup[Unsupervised Learning: Unlabeled Data]
    ML --> RL[Reinforcement Learning: Reward / Penalty]
    Sup --> Reg[Regression: Continuous Targets e.g., House Price]
    Sup --> Class[Classification: Discrete Classes e.g., Spam/Ham]
    Unsup --> Clust[Clustering: K-Means, DBSCAN]
    Unsup --> Dim[Dimensionality Reduction: PCA, t-SNE]
    RL --> Policy[Policy / Q-Learning: Robotics, Game AI]
    style ML fill:#1e293b,stroke:#3b82f6,color:#fff
    style Sup fill:#1e293b,stroke:#10b981,color:#fff
    style Unsup fill:#1e293b,stroke:#f59e0b,color:#fff
    style RL fill:#1e293b,stroke:#ec4899,color:#fff
</div>`, 'Machine Learning Taxonomy & Paradigms');

cs601 = injectBeforeEnd(cs601, 'u2t3', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Backpropagation & Computational Graph</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph Forward [Forward Pass: Compute Predictions & Loss]
        X[Input x] -->|W1, b1| Z1[Hidden Linear: z1 = W1x+b1]
        Z1 -->|Activation| A1[Hidden Act: a1 = sigma z1]
        A1 -->|W2, b2| Z2[Output: y_hat = W2a1+b2]
        Z2 --> Loss[Loss Function L]
    end
    subgraph Backward [Backward Pass: Chain Rule Gradients]
        Loss -.->|dL/dy_hat| Z2
        Z2 -.->|dL/dW2| A1
        A1 -.->|dL/da1 * sigma'| Z1
        Z1 -.->|dL/dW1| X
    end
    style Forward fill:#1e293b,stroke:#3b82f6,color:#fff
    style Backward fill:#1e293b,stroke:#ef4444,color:#fff
</div>

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Key Formula: Gradient Descent Weight Update</h4>
    <div class="bg-gray-950 p-3 rounded font-mono text-xs text-emerald-300 space-y-1 border border-slate-800">
        <div>W := W - &alpha; &middot; (&part;L / &part;W)</div>
        <div>b := b - &alpha; &middot; (&part;L / &part;b)</div>
        <div class="text-slate-400 mt-2">// Where &alpha; is the learning rate. If &alpha; is too large &rarr; divergence; if too small &rarr; slow convergence.</div>
    </div>
</div>`, 'Backpropagation & Computational Graph');

fs.writeFileSync(cs601Path, cs601, 'utf8');

// ==========================================
// 3. CS-602: Computer Networks
// ==========================================
const cs602Path = path.join(__dirname, '../js/data_cs602.js');
let cs602 = fs.readFileSync(cs602Path, 'utf8');

cs602 = injectBeforeEnd(cs602, 'cn-u1t1', `
<h3 class="text-xl font-bold mb-2 text-blue-400">OSI 7-Layer vs TCP/IP 4-Layer Architecture</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    subgraph OSI [OSI 7-Layer Model]
        L7[7. Application]
        L6[6. Presentation]
        L5[5. Session]
        L4[4. Transport]
        L3[3. Network]
        L2[2. Data Link]
        L1[1. Physical]
    end
    subgraph TCPIP [TCP/IP 4-Layer Model]
        T4[Application: HTTP, DNS, SMTP]
        T3[Transport: TCP, UDP]
        T2[Internet: IP, ICMP, ARP]
        T1[Network Access: Ethernet, Wi-Fi]
    end
    L7 & L6 & L5 -.-> T4
    L4 -.-> T3
    L3 -.-> T2
    L2 & L1 -.-> T1
    style OSI fill:#1e293b,stroke:#3b82f6,color:#fff
    style TCPIP fill:#1e293b,stroke:#10b981,color:#fff
</div>`, 'OSI 7-Layer vs TCP/IP 4-Layer Architecture');

cs602 = injectBeforeEnd(cs602, 'cn-u2t1', `
<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">University Exam Solved Numerical: IPv4 Subnetting & CIDR</h4>
    <p class="text-sm text-gray-300 mb-2"><strong>Problem:</strong> Given the network address <code>192.168.10.0/26</code>, calculate:</p>
    <div class="bg-gray-950 p-4 rounded text-xs font-mono text-emerald-300 space-y-1.5 border border-slate-800">
        <div>1. Subnet Mask: /26 means 26 ones and 6 zeros.</div>
        <div class="text-cyan-300">   Binary: 11111111.11111111.11111111.11000000 = 255.255.255.192</div>
        <div>2. Number of Subnets: Host borrowed bits = 2. Total subnets = 2^2 = 4 subnets.</div>
        <div>3. Block Size: 256 - 192 = 64 addresses per subnet.</div>
        <div>4. Usable Hosts per Subnet: 2^(32 - 26) - 2 = 2^6 - 2 = 64 - 2 = 62 valid hosts.</div>
        <div class="text-yellow-300 font-bold">5. Subnet 1 Boundaries:</div>
        <div>   - Network ID:    192.168.10.0</div>
        <div>   - First Host:    192.168.10.1</div>
        <div>   - Last Host:     192.168.10.62</div>
        <div>   - Broadcast ID:  192.168.10.63</div>
    </div>
</div>`, 'University Exam Solved Numerical: IPv4 Subnetting & CIDR');

fs.writeFileSync(cs602Path, cs602, 'utf8');

// ==========================================
// 4. CS-604: Project Management
// ==========================================
const cs604Path = path.join(__dirname, '../js/data_cs604.js');
let cs604 = fs.readFileSync(cs604Path, 'utf8');

cs604 = injectBeforeEnd(cs604, 'c4-u2t2', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Critical Path Method (CPM) & Float Calculation</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    A((A: Start<br>Dur: 3)) --> B((B: Design<br>Dur: 4))
    A --> C((C: Setup<br>Dur: 2))
    B --> D((D: Coding<br>Dur: 6))
    C --> E((E: Docs<br>Dur: 3))
    D --> F((F: Finish<br>Dur: 2))
    E --> F
    style A fill:#1e293b,stroke:#3b82f6,color:#fff
    style B fill:#1e293b,stroke:#ef4444,color:#fff
    style D fill:#1e293b,stroke:#ef4444,color:#fff
    style F fill:#1e293b,stroke:#ef4444,color:#fff
    style C fill:#1e293b,stroke:#64748b,color:#fff
    style E fill:#1e293b,stroke:#64748b,color:#fff
</div>

<div class="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
    <div class="font-bold text-amber-300 text-sm mb-1">Exam Rule: Identifying the Critical Path</div>
    <p class="text-xs text-slate-300">Path 1 (A-B-D-F): 3 + 4 + 6 + 2 = <strong>15 days</strong> (Longest path = Critical Path, Slack = 0).<br>Path 2 (A-C-E-F): 3 + 2 + 3 + 2 = 10 days (Slack = 15 - 10 = 5 days float). Any delay on the Critical Path directly delays the entire project!</p>
</div>`, 'Critical Path Method (CPM) & Float Calculation');

cs604 = injectBeforeEnd(cs604, 'c4-u1t2', `
<h3 class="text-xl font-bold mb-2 text-blue-400">Scrum Agile Workflow & Ceremonies</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Backlog[Product Backlog: Prioritized User Stories] --> SprintPlanning[Sprint Planning]
    SprintPlanning --> SprintBacklog[Sprint Backlog: 2-4 Week Scope]
    SprintBacklog --> DailyScrum[Daily Standup: 15-min sync]
    DailyScrum --> Dev[Sprint Execution & Development]
    Dev --> Shipped[Potentially Shippable Product Increment]
    Shipped --> Review[Sprint Review & Demo]
    Review --> Retro[Sprint Retrospective: Continuous Improvement]
    Retro -.-> SprintPlanning
    style Backlog fill:#1e293b,stroke:#3b82f6,color:#fff
    style SprintPlanning fill:#1e293b,stroke:#f59e0b,color:#fff
    style SprintBacklog fill:#1e293b,stroke:#10b981,color:#fff
    style DailyScrum fill:#1e293b,stroke:#ec4899,color:#fff
    style Shipped fill:#1e293b,stroke:#06b6d4,color:#fff
    style Review fill:#1e293b,stroke:#8b5cf6,color:#fff
    style Retro fill:#1e293b,stroke:#64748b,color:#fff
</div>`, 'Scrum Agile Workflow & Ceremonies');

fs.writeFileSync(cs604Path, cs604, 'utf8');

// ==========================================
// 5. CS-503 (Data Analytics) MapReduce & Hypothesis
// ==========================================
const cs503Path = path.join(__dirname, '../js/data_cs503.js');
let cs503 = fs.readFileSync(cs503Path, 'utf8');

cs503 = injectBeforeEnd(cs503, 'cs503-u4t1', `
<h3 class="text-xl font-bold mb-2 text-blue-400">MapReduce Execution Architecture & Data Flow</h3>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Input[HDFS Input Splits] --> Map[Map Phase: Key-Value Pairs]
    Map --> Part[Partition & Hash]
    Part --> Shuffle[Shuffle & Sort: Group by Key]
    Shuffle --> Reduce[Reduce Phase: Aggregate Values]
    Reduce --> Output[HDFS Output Directory]
    style Input fill:#1e293b,stroke:#64748b,color:#fff
    style Map fill:#1e293b,stroke:#3b82f6,color:#fff
    style Part fill:#1e293b,stroke:#f59e0b,color:#fff
    style Shuffle fill:#1e293b,stroke:#ec4899,color:#fff
    style Reduce fill:#1e293b,stroke:#10b981,color:#fff
    style Output fill:#1e293b,stroke:#06b6d4,color:#fff
</div>`, 'MapReduce Execution Architecture & Data Flow');

cs503 = injectBeforeEnd(cs503, 'cs503-u1t2', `
<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Hypothesis Testing: Type I vs Type II Errors (Viva Matrix)</h4>
    <div class="overflow-x-auto">
        <table class="w-full text-xs text-left border border-slate-700">
            <thead class="bg-slate-800 text-slate-200">
                <tr>
                    <th class="p-2 border border-slate-700">Decision \ True Reality</th>
                    <th class="p-2 border border-slate-700 text-emerald-400">H0 is Actually True</th>
                    <th class="p-2 border border-slate-700 text-red-400">H0 is Actually False</th>
                </tr>
            </thead>
            <tbody class="text-slate-300">
                <tr>
                    <td class="p-2 border border-slate-700 font-semibold">Reject H0</td>
                    <td class="p-2 border border-slate-700 bg-red-950/40 text-red-300 font-bold">Type I Error (&alpha;)<br><span class="font-normal text-[11px]">False Positive (Convicting innocent)</span></td>
                    <td class="p-2 border border-slate-700 bg-emerald-950/40 text-emerald-300 font-bold">Correct Decision (1 - &beta;)<br><span class="font-normal text-[11px]">Statistical Power</span></td>
                </tr>
                <tr>
                    <td class="p-2 border border-slate-700 font-semibold">Fail to Reject H0</td>
                    <td class="p-2 border border-slate-700 bg-emerald-950/40 text-emerald-300 font-bold">Correct Decision (1 - &alpha;)<br><span class="font-normal text-[11px]">Confidence Level</span></td>
                    <td class="p-2 border border-slate-700 bg-red-950/40 text-red-300 font-bold">Type II Error (&beta;)<br><span class="font-normal text-[11px]">False Negative (Letting guilty free)</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`, 'Hypothesis Testing: Type I vs Type II Errors');

fs.writeFileSync(cs503Path, cs503, 'utf8');

console.log('All targeted enhancements applied successfully!');
