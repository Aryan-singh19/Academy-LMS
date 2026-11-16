const coursesData = [
    // === SEMESTER 5 COURSES ===
    {
        id: 'cs501',
        semester: 5,
        title: 'Theory of Computation',
        code: 'CS-501',
        description: 'Computability, formal languages, grammars, automata, and computational complexity.',
        objectives: [
            'To understand computability, decidability, and complexity through problem solving.',
            'To analyse and design abstract model of computation & formal languages.',
            'To understand and conduct mathematical proofs for computation and algorithms.'
        ],
        units: [
            {
                id: 'cs501-u1',
                unitNumber: 1,
                title: 'Introduction of Automata Theory',
                topics: [
                    { id: 'cs501-u1t1', title: 'Examples of Automata Machines & Foundational Concepts' },
                    { id: 'cs501-u1t2', title: 'Finite Automata as Language Acceptor & Translator' },
                    { id: 'cs501-u1t3', title: 'Moore Machines & Mealy Machines' },
                    { id: 'cs501-u1t4', title: 'Composite Machines' },
                    { id: 'cs501-u1t5', title: 'Conversion from Mealy to Moore & Vice Versa' }
                ]
            },
            {
                id: 'cs501-u2',
                unitNumber: 2,
                title: 'Types of Finite Automata',
                topics: [
                    { id: 'cs501-u2t1', title: 'Deterministic (DFA) & Non-Deterministic (NDFA) Automata' },
                    { id: 'cs501-u2t2', title: 'Conversion of NDFA to DFA (Subset Construction)' },
                    { id: 'cs501-u2t3', title: 'Minimization of Automata Machines' },
                    { id: 'cs501-u2t4', title: 'Regular Expressions & Arden’s Theorem' },
                    { id: 'cs501-u2t5', title: 'Language Operations (Union, Intersection, Closure) & 2-Way DFA' }
                ]
            },
            {
                id: 'cs501-u3',
                unitNumber: 3,
                title: 'Grammars & Chomsky Hierarchy',
                topics: [
                    { id: 'cs501-u3t1', title: 'Types of Grammar & Chomsky Hierarchy' },
                    { id: 'cs501-u3t2', title: 'Context Sensitive, Context Free & Regular Grammars' },
                    { id: 'cs501-u3t3', title: 'Derivation Trees & Ambiguity in Grammar' },
                    { id: 'cs501-u3t4', title: 'Simplification of CFG: Eliminating Null & Unit Productions' },
                    { id: 'cs501-u3t5', title: 'Normal Forms: Chomsky Normal Form (CNF) & Greibach Normal Form (GNF)' }
                ]
            },
            {
                id: 'cs501-u4',
                unitNumber: 4,
                title: 'Pushdown Automata (PDA)',
                topics: [
                    { id: 'cs501-u4t1', title: 'Pushdown Automata: Architecture & Examples' },
                    { id: 'cs501-u4t2', title: 'Deterministic vs Non-Deterministic PDA' },
                    { id: 'cs501-u4t3', title: 'Acceptance by Final State vs Empty Stack' },
                    { id: 'cs501-u4t4', title: 'Conversion of PDA into Context Free Grammar & Vice Versa' },
                    { id: 'cs501-u4t5', title: 'CFG Equivalent to PDA & Petrinet Model' }
                ]
            },
            {
                id: 'cs501-u5',
                unitNumber: 5,
                title: 'Turing Machine & Computability',
                topics: [
                    { id: 'cs501-u5t1', title: 'Turing Machine: Techniques for Construction' },
                    { id: 'cs501-u5t2', title: 'Universal TM, Multitape, Multihead & Multidimensional TM' },
                    { id: 'cs501-u5t3', title: 'Decidability & Recursively Enumerable Languages' },
                    { id: 'cs501-u5t4', title: 'Halting Problem of Turing Machine & Post Correspondence Problem' },
                    { id: 'cs501-u5t5', title: 'P, NP & NP-Complete Problems' }
                ]
            }
        ]
    },
    {
        id: 'cs502',
        semester: 5,
        title: 'Database Management Systems',
        code: 'CS-502',
        description: 'Relational data modeling, SQL, normalization, concurrency control, transaction processing, and modern DBMS.',
        outcomes: [
            'Understand different issues involved in the design and implementation of a database system.',
            'Study physical and logical database designs, database modeling, relational, hierarchical, and network models.',
            'Understand and use data manipulation language to query, update, and manage a database.',
            'Develop an understanding of essential DBMS concepts such as database security, integrity, and concurrency.',
            'Design and build a simple database system with modeling, designing, and implementing a DBMS.',
            'Evaluate a business situation and design & build database applications.'
        ],
        units: [
            {
                id: 'cs502-u1',
                unitNumber: 1,
                title: 'DBMS Concepts and Architecture',
                topics: [
                    { id: 'cs502-u1t1', title: 'Database Approach vs Traditional File Accessing & Advantages' },
                    { id: 'cs502-u1t2', title: 'Data Models, Schemas, Instances & Data Independence' },
                    { id: 'cs502-u1t3', title: 'Database Languages, Overall Structure & Roles of DBA/Designer' },
                    { id: 'cs502-u1t4', title: 'ER Data Model: Entities, Attributes & E-R Diagrams' },
                    { id: 'cs502-u1t5', title: 'Generalization, Aggregation, Specialization & Mapping ER to Tables' },
                    { id: 'cs502-u1t6', title: 'Comparison: Relational, Hierarchical, Network & Object Models' }
                ]
            },
            {
                id: 'cs502-u2',
                unitNumber: 2,
                title: 'Relational Data Models & Relational Algebra',
                topics: [
                    { id: 'cs502-u2t1', title: 'Relational Model: Domains, Tuples, Attributes & Keys' },
                    { id: 'cs502-u2t2', title: 'Schemas, Integrity Constraints, Referential Integrity, Intension & Extension' },
                    { id: 'cs502-u2t3', title: 'Relational Algebra: Select, Project, Join, Division & Outer Union' },
                    { id: 'cs502-u2t4', title: 'Relational Calculus: Tuple-Oriented & Domain-Oriented Calculus' },
                    { id: 'cs502-u2t5', title: 'SQL-DDL, DML, Complex Queries, Joins, Triggers & Assertions' }
                ]
            },
            {
                id: 'cs502-u3',
                unitNumber: 3,
                title: 'Database Design & Query Optimization',
                topics: [
                    { id: 'cs502-u3t1', title: 'Introduction to Normalization & Functional Dependencies' },
                    { id: 'cs502-u3t2', title: 'Normal Forms (1NF, 2NF, 3NF, BCNF) & Multivalued Dependencies' },
                    { id: 'cs502-u3t3', title: 'Decomposition, Dependency Preservation & Lossless Joins' },
                    { id: 'cs502-u3t4', title: 'Problems with Null Valued & Dangling Tuples' },
                    { id: 'cs502-u3t5', title: 'Query Optimization: Steps, Algorithms & Heuristic / Cost Estimation' }
                ]
            },
            {
                id: 'cs502-u4',
                unitNumber: 4,
                title: 'Transaction Processing & Concurrency Control',
                topics: [
                    { id: 'cs502-u4t1', title: 'Transaction Concepts & ACID Properties' },
                    { id: 'cs502-u4t2', title: 'Testing Serializability: Conflict & View Serializable Schedules' },
                    { id: 'cs502-u4t3', title: 'Recoverability, Failure Recovery, Log-Based Recovery & Checkpoints' },
                    { id: 'cs502-u4t4', title: 'Concurrency Control: Locking Techniques (2PL), Deadlocks & Timestamps' },
                    { id: 'cs502-u4t5', title: 'Validation Protocols, Multi-Version Schemes & Distributed Databases' },
                    { id: 'cs502-u4t6', title: 'OODBMS vs DBMS, Temporal, Deductive, Multimedia & Mobile Databases' }
                ]
            },
            {
                id: 'cs502-u5',
                unitNumber: 5,
                title: 'Relational DBMS Implementation (Oracle / PL-SQL / MySQL)',
                topics: [
                    { id: 'cs502-u5t1', title: 'Architecture, Physical Files, Memory Structures & Background Processes' },
                    { id: 'cs502-u5t2', title: 'Tablespaces, Segments, Extents, Blocks & Dedicated/Multi-threaded Servers' },
                    { id: 'cs502-u5t3', title: 'Distributed DB, Data Dictionary, Security, Roles & Privilege Management' },
                    { id: 'cs502-u5t4', title: 'Advanced Queries: Joins, LIKE, ANY, ALL, EXISTS, Hierarchical & Flashback' },
                    { id: 'cs502-u5t5', title: 'PL/SQL: Anonymous Blocks, Cursors & Exception Handling' },
                    { id: 'cs502-u5t6', title: 'Stored Procedures, Parameters, User-Defined Functions & Triggers' }
                ]
            }
        ]
    },
    {
        id: 'cs503',
        semester: 5,
        title: 'Data Analytics',
        code: 'CS-503',
        description: 'Descriptive and inferential statistics, Big Data landscape, Hadoop MapReduce, Pig Latin, and Hive.',
        units: [
            {
                id: 'cs503-u1',
                unitNumber: 1,
                title: 'Descriptive & Inferential Statistics',
                topics: [
                    { id: 'cs503-u1t1', title: 'Descriptive Statistics & Probability Distributions' },
                    { id: 'cs503-u1t2', title: 'Inferential Statistics through Hypothesis Tests' },
                    { id: 'cs503-u1t3', title: 'Regression Analysis (Linear & Multiple)' },
                    { id: 'cs503-u1t4', title: 'ANOVA (Analysis of Variance)' }
                ]
            },
            {
                id: 'cs503-u2',
                unitNumber: 2,
                title: 'Introduction to Big Data & Technologies',
                topics: [
                    { id: 'cs503-u2t1', title: 'Big Data & Its Importance, Four V’s & Drivers' },
                    { id: 'cs503-u2t2', title: 'Introduction to Big Data Analytics & Applications' },
                    { id: 'cs503-u2t3', title: 'Big Data Technologies: Hadoop Parallel World & Data Discovery' },
                    { id: 'cs503-u2t4', title: 'Open Source Tech, Cloud Big Data & Predictive Analytics' },
                    { id: 'cs503-u2t5', title: 'Mobile BI, Crowd Sourcing Analytics & Information Management' }
                ]
            },
            {
                id: 'cs503-u3',
                unitNumber: 3,
                title: 'Processing Big Data',
                topics: [
                    { id: 'cs503-u3t1', title: 'Integrating Disparate Data Stores' },
                    { id: 'cs503-u3t2', title: 'Mapping Data to the Programming Framework' },
                    { id: 'cs503-u3t3', title: 'Connecting and Extracting Data from Storage' },
                    { id: 'cs503-u3t4', title: 'Transforming Data for Processing' },
                    { id: 'cs503-u3t5', title: 'Subdividing Data in Preparation for Hadoop MapReduce' }
                ]
            },
            {
                id: 'cs503-u4',
                unitNumber: 4,
                title: 'Hadoop MapReduce',
                topics: [
                    { id: 'cs503-u4t1', title: 'Employing Hadoop MapReduce & Creating Job Components' },
                    { id: 'cs503-u4t2', title: 'Distributing Data Processing Across Server Farms' },
                    { id: 'cs503-u4t3', title: 'Executing Jobs & Monitoring the Progress of Job Flows' },
                    { id: 'cs503-u4t4', title: 'Building Blocks of Hadoop MapReduce: Daemons & HDFS' },
                    { id: 'cs503-u4t5', title: 'Execution Modes: Local, Pseudo-Distributed & Fully Distributed' }
                ]
            },
            {
                id: 'cs503-u5',
                unitNumber: 5,
                title: 'Big Data Tools and Techniques (Pig & Hive)',
                topics: [
                    { id: 'cs503-u5t1', title: 'Installing & Running Pig, Comparison with Databases' },
                    { id: 'cs503-u5t2', title: 'Pig Latin, User-Defined Functions & Data Processing Operators' },
                    { id: 'cs503-u5t3', title: 'Installing & Running Hive, Hive Architecture & Metastore' },
                    { id: 'cs503-u5t4', title: 'HiveQL: Querying Data & User-Defined Functions' },
                    { id: 'cs503-u5t5', title: 'Oracle Big Data Integration & Ecosystem Summary' }
                ]
            }
        ]
    },
    {
        id: 'cs503-cs',
        semester: 5,
        title: 'Cyber Security',
        code: 'CS-503-CS',
        description: 'Cyber crimes, online frauds, legal provisions under IT Act 2000 & Evidence Act, network attacks, and defensive tools.',
        units: [
            {
                id: 'cs503cs-u1',
                unitNumber: 1,
                title: 'Introduction of Cyber Crime',
                topics: [
                    { id: 'cs503cs-u1t1', title: 'Introduction to Cyber Crime & Challenges' },
                    { id: 'cs503cs-u1t2', title: 'Classifications of Cybercrimes' },
                    { id: 'cs503cs-u1t3', title: 'Email Spoofing & Spamming' },
                    { id: 'cs503cs-u1t4', title: 'Internet Time Theft' },
                    { id: 'cs503cs-u1t5', title: 'Salami Attack / Salami Technique' }
                ]
            },
            {
                id: 'cs503cs-u2',
                unitNumber: 2,
                title: 'Cyber Frauds, Intrusions & Attack Vectors',
                topics: [
                    { id: 'cs503cs-u2t1', title: 'Web Jacking & Online Frauds' },
                    { id: 'cs503cs-u2t2', title: 'Software Piracy & Computer Network Intrusions' },
                    { id: 'cs503cs-u2t3', title: 'Password Sniffing & Identity Theft' },
                    { id: 'cs503cs-u2t4', title: 'Cyber Terrorism & Virtual Crime' },
                    { id: 'cs503cs-u2t5', title: 'Perception of Cyber Criminals: Hackers, Insurgents & Extremists' },
                    { id: 'cs503cs-u2t6', title: 'Web Server Hacking & Session Hijacking' }
                ]
            },
            {
                id: 'cs503cs-u3',
                unitNumber: 3,
                title: 'Cyber Crime and Criminal Justice (IT Act 2000)',
                topics: [
                    { id: 'cs503cs-u3t1', title: 'Concept of Cyber Crime and the IT Act 2000' },
                    { id: 'cs503cs-u3t2', title: 'Hacking & Teenage Web Vandals' },
                    { id: 'cs503cs-u3t3', title: 'Cyber Fraud, Cheating, Defamation, Harassment & Email Abuse' },
                    { id: 'cs503cs-u3t4', title: 'Other IT Act Offences, Monetary Penalties & Jurisdiction' },
                    { id: 'cs503cs-u3t5', title: 'Nature of Criminality & Strategies to Tackle Cyber Crime' }
                ]
            },
            {
                id: 'cs503cs-u4',
                unitNumber: 4,
                title: 'Evidence Act 1872 vs Information Technology Act 2000',
                topics: [
                    { id: 'cs503cs-u4t1', title: 'Indian Evidence Act 1872 vs IT Act 2000' },
                    { id: 'cs503cs-u4t2', title: 'Status, Proof & Management of Electronic Records as Evidence' },
                    { id: 'cs503cs-u4t3', title: 'Relevancy, Admissibility & Probative Value of E-Evidence' },
                    { id: 'cs503cs-u4t4', title: 'Proving Digital Signatures' },
                    { id: 'cs503cs-u4t5', title: 'Proof of Electronic Agreements & Electronic Messages' }
                ]
            },
            {
                id: 'cs503cs-u5',
                unitNumber: 5,
                title: 'Tools and Methods in Cybercrime',
                topics: [
                    { id: 'cs503cs-u5t1', title: 'Proxy Servers & Anonymizers' },
                    { id: 'cs503cs-u5t2', title: 'Password Cracking Tools & Methods' },
                    { id: 'cs503cs-u5t3', title: 'Keyloggers, Spyware, Viruses, Worms, Trojans & Backdoors' },
                    { id: 'cs503cs-u5t4', title: 'DoS and DDoS Attacks, Buffer Overflow' },
                    { id: 'cs503cs-u5t5', title: 'Attack on Wireless Networks' },
                    { id: 'cs503cs-u5t6', title: 'Phishing: Methods & Advanced Phishing Techniques' }
                ]
            }
        ]
    },
    {
        id: 'cs504',
        semester: 5,
        title: 'Internet and Web Technology',
        code: 'CS-504',
        description: 'WWW protocols, web design fundamentals, HTML5, CSS3, dynamic JavaScript DOM, and server-side PHP with MySQL.',
        objectives: [
            'Describe concepts of WWW including browser and HTTP protocol.',
            'List various HTML tags and use them to develop user friendly web pages.',
            'Define CSS with its types and use them to provide styles to webpages at various levels.',
            'Develop modern web pages using HTML and CSS features with different layouts as per need of applications.',
            'Use JavaScript to develop dynamic web pages.',
            'Use server side scripting with PHP to generate web pages dynamically using database connectivity.',
            'Develop modern Web applications using client and server side technologies and web design fundamentals.'
        ],
        units: [
            {
                id: 'cs504-u1',
                unitNumber: 1,
                title: 'Introduction: WWW, HTTP & Effective Web Design',
                topics: [
                    { id: 'cs504-u1t1', title: 'Concept of WWW, Internet and WWW Architecture' },
                    { id: 'cs504-u1t2', title: 'HTTP Protocol: Request and Response Model' },
                    { id: 'cs504-u1t3', title: 'Web Browsers, Web Servers & Features of Web 2.0' },
                    { id: 'cs504-u1t4', title: 'Concepts of Effective Web Design: Browser, Bandwidth & Cache' },
                    { id: 'cs504-u1t5', title: 'Display Resolution, Look & Feel, Page Layout & Linking' },
                    { id: 'cs504-u1t6', title: 'User Centric Design, Sitemap, Planning & Navigation Design' }
                ]
            },
            {
                id: 'cs504-u2',
                unitNumber: 2,
                title: 'HTML & XHTML Fundamentals',
                topics: [
                    { id: 'cs504-u2t1', title: 'Basics of HTML, Formatting, Fonts & Commenting Code' },
                    { id: 'cs504-u2t2', title: 'Color, Hyperlinks, Lists, Tables & Images' },
                    { id: 'cs504-u2t3', title: 'HTML Forms, Input Controls & Attributes' },
                    { id: 'cs504-u2t4', title: 'XHTML, Meta Tags, Character Entities, Frames & Framesets' },
                    { id: 'cs504-u2t5', title: 'Browser Architecture & Website Structure' },
                    { id: 'cs504-u2t6', title: 'Overview and Features of HTML5' }
                ]
            },
            {
                id: 'cs504-u3',
                unitNumber: 3,
                title: 'Style Sheets (CSS) & Client-Side JavaScript',
                topics: [
                    { id: 'cs504-u3t1', title: 'Need for CSS, Basic Syntax, Structure & Inclusion Types' },
                    { id: 'cs504-u3t2', title: 'Backgrounds, Colors, Fonts, Text Manipulation & Box Model' },
                    { id: 'cs504-u3t3', title: 'Positioning using CSS, CSS2 & Features of CSS3' },
                    { id: 'cs504-u3t4', title: 'Client-Side Scripting with JavaScript: Variables, Functions, Loops & Popups' },
                    { id: 'cs504-u3t5', title: 'Advanced JS: JavaScript Objects & DOM Environments' },
                    { id: 'cs504-u3t6', title: 'Manipulation using DOM, Form Validations & Event Handling' },
                    { id: 'cs504-u3t7', title: 'DHTML: Combining HTML, CSS and JavaScript' }
                ]
            },
            {
                id: 'cs504-u4',
                unitNumber: 4,
                title: 'XML & PHP Scripting',
                topics: [
                    { id: 'cs504-u4t1', title: 'Introduction to XML, Uses, DTD and Schemas' },
                    { id: 'cs504-u4t2', title: 'Transforming XML using XSL and XSLT' },
                    { id: 'cs504-u4t3', title: 'Introduction & Basic Syntax of PHP, Decision & Looping' },
                    { id: 'cs504-u4t4', title: 'PHP & HTML Integration, Arrays & Functions' },
                    { id: 'cs504-u4t5', title: 'Browser Control, Detection, String & Form Processing' },
                    { id: 'cs504-u4t6', title: 'Files, Cookies, Sessions & OOP with PHP' }
                ]
            },
            {
                id: 'cs504-u5',
                unitNumber: 5,
                title: 'PHP and MySQL Database Connectivity',
                topics: [
                    { id: 'cs504-u5t1', title: 'Basic Commands with PHP Examples & Server Connection' },
                    { id: 'cs504-u5t2', title: 'Creating, Selecting, Listing & Deleting Databases' },
                    { id: 'cs504-u5t3', title: 'Creating Tables, Inserting Data, Altering Tables & Queries' },
                    { id: 'cs504-u5t4', title: 'Deleting Data & Tables with PHP' },
                    { id: 'cs504-u5t5', title: 'phpMyAdmin Usage, Database Administration & Debugging' }
                ]
            }
        ]
    },

    // === SEMESTER 6 COURSES ===
    {
        id: 'cs601',
        semester: 6,
        title: 'Machine Learning',
        code: 'CS601',
        description: 'Teach machines to think, so you don\'t have to. Warning: Might lead to Skynet.',
        units: [
            { id: 'cs601-u1', unitNumber: 1, title: 'Introduction & Basics', topics: [{ id: 't1', title: 'Intro to ML, Scope & Limitations' }, { id: 't2', title: 'Regression Basics' }, { id: 't3', title: 'Math: Probability, Stats & Linear Algebra' }, { id: 't4', title: 'Convex Optimization' }, { id: 't5', title: 'Data Visualization' }, { id: 't6', title: 'Hypothesis Function & Testing' }, { id: 't7', title: 'Data Prep & Normalization' }, { id: 't8', title: 'Supervised vs Unsupervised Learning' }] },
            { id: 'cs601-u2', unitNumber: 2, title: 'Neural Networks Basics', topics: [{ id: 'u2t1', title: 'Linearity vs Non-linearity, Weights & Bias' }, { id: 'u2t2', title: 'Activation Functions (Sigmoid, ReLU)' }, { id: 'u2t3', title: 'Loss Function & Gradient Descent' }, { id: 'u2t4', title: 'Multilayer Network & Backpropagation' }, { id: 'u2t5', title: 'Unstable Gradients & Regularization' }, { id: 'u2t6', title: 'Auto Encoders & Hyperparameters' }] },
            { id: 'cs601-u3', unitNumber: 3, title: 'Convolutional Neural Networks', topics: [{id: 'u3t1', title: 'Intro to Computer Vision & Image Processing'}, {id: 'u3t2', title: 'Convolutional Layers & Filters'}, {id: 'u3t3', title: 'Pooling Layers & Strides'}, {id: 'u3t4', title: 'Famous Architectures (ResNet, VGG)'}] },
            { id: 'cs601-u4', unitNumber: 4, title: 'RNNs & Sequential Data', topics: [{id: 'u4t1', title: 'The Problem with Time & Sequential Data'}, {id: 'u4t2', title: 'Recurrent Neural Networks (RNNs)'}, {id: 'u4t3', title: 'LSTMs and Memory Cells'}, {id: 'u4t4', title: 'Gated Recurrent Units (GRUs)'}, {id: 'u4t5', title: 'Word Embeddings (Word2Vec/GloVe)'}, {id: 'u4t6', title: 'Seq2Seq Models & Early Attention'}] },
            { id: 'cs601-u5', unitNumber: 5, title: 'Advanced ML & Deployment', topics: [{id: 'u5t1', title: 'Generative Adversarial Networks (GANs)'}, {id: 'u5t2', title: 'Transformers & Large Language Models'}, {id: 'u5t3', title: 'Model Deployment (ONNX, Flask/FastAPI)'}, {id: 'u5t4', title: 'Reinforcement Learning Basics'}, {id: 'u5t5', title: 'Markov Decision Processes & Q-Learning'}, {id: 'u5t6', title: 'AutoML & MLOps Pipelines'}] }
        ]
    },
    {
        id: 'cs602',
        semester: 6,
        title: 'Computer Networks',
        code: 'CS602',
        description: 'How to send memes globally in milliseconds without losing packets.',
        units: [
            { id: 'cs602-u1', unitNumber: 1, title: 'Network Basics & Architecture', topics: [{id: 'cn-u1t1', title: 'The OSI Model & TCP/IP Suite'}, {id: 'cn-u1t2', title: 'Physical Media & Data Link Layer'}, {id: 'cn-u1t3', title: 'Network Topologies, Switching & Transmission Modes'}] },
            { id: 'cs602-u2', unitNumber: 2, title: 'The Network Layer (Routing)', topics: [{id: 'cn-u2t1', title: 'IPv4 vs IPv6 Addressing'}, {id: 'cn-u2t2', title: 'Routing Algorithms (Dijkstra, Bellman-Ford)'}, {id: 'cn-u2t3', title: 'Subnetting, CIDR & NAT'}] },
            { id: 'cs602-u3', unitNumber: 3, title: 'Transport & Application Layers', topics: [{id: 'cn-u3t1', title: 'TCP vs UDP: The Delivery Drivers'}, {id: 'cn-u3t2', title: 'HTTP, DNS & The Web'}, {id: 'cn-u3t3', title: 'Flow Control, Congestion Control & Sliding Window'}] },
            { id: 'cs602-u4', unitNumber: 4, title: 'Network Security & Cryptography', topics: [{id: 'cn-u4t1', title: 'Symmetric vs Asymmetric Encryption (RSA, AES)'}, {id: 'cn-u4t2', title: 'Firewalls, VPNs & IPSec'}, {id: 'cn-u4t3', title: 'SSL/TLS Handshake & HTTPS Trust'}] },
            { id: 'cs602-u5', unitNumber: 5, title: 'Wireless & Mobile Networks', topics: [{id: 'cn-u5t1', title: '802.11 Wi-Fi Standards'}, {id: 'cn-u5t2', title: 'Cellular Architecture (4G/5G) & Mobile IP'}, {id: 'cn-u5t3', title: 'QoS, Latency, Jitter & Real-Time Traffic'}] }
        ]
    },
    {
        id: 'cs603',
        semester: 6,
        title: 'Compiler Design',
        code: 'CS603',
        description: 'Translating human gibberish into machine gibberish.',
        units: [
            { id: 'cs603-u1', unitNumber: 1, title: 'Lexical Analysis', topics: [{id: 'c3-u1t1', title: 'Tokenization & Scanners'}, {id: 'c3-u1t2', title: 'Finite Automata (DFA/NFA)'}, {id: 'c3-u1t3', title: 'Regular Expressions & Token Patterns'}] },
            { id: 'cs603-u2', unitNumber: 2, title: 'Syntax Analysis', topics: [{id: 'c3-u2t1', title: 'Context-Free Grammars'}, {id: 'c3-u2t2', title: 'Top-Down vs Bottom-Up Parsing'}, {id: 'c3-u2t3', title: 'FIRST, FOLLOW & Predictive Parsing'}, {id: 'c3-u2t4', title: 'LR Parsing Tables, Shift-Reduce & Conflicts'}] },
            { id: 'cs603-u3', unitNumber: 3, title: 'Code Generation', topics: [{id: 'c3-u3t1', title: 'Intermediate Code & Optimization'}, {id: 'c3-u3t2', title: 'Target Machine Code'}, {id: 'c3-u3t3', title: 'Three-Address Code & Syntax-Directed Translation'}, {id: 'c3-u3t4', title: 'Basic Blocks, Flow Graphs & Register Pressure'}] },
            { id: 'cs603-u4', unitNumber: 4, title: 'Symbol Tables & Error Handling', topics: [{id: 'c3-u4t1', title: 'Hash Table Implementations'}, {id: 'c3-u4t2', title: 'Panic-Mode Error Recovery'}, {id: 'c3-u4t3', title: 'Semantic Analysis & Type Checking'}, {id: 'c3-u4t4', title: 'Scope Resolution, Symbol Lifetime & AST Binding'}] },
            { id: 'cs603-u5', unitNumber: 5, title: 'Advanced Optimization Techniques', topics: [{id: 'c3-u5t1', title: 'Data-Flow Analysis & Loop Unrolling'}, {id: 'c3-u5t2', title: 'Peephole Optimization & Dead Code Elimination'}, {id: 'c3-u5t3', title: 'Common Subexpression Elimination & Strength Reduction'}] }
        ]
    },
    {
        id: 'cs604',
        semester: 6,
        title: 'Project Management',
        code: 'CS604',
        description: 'Herding cats, but with Gantt charts and deadlines.',
        units: [
            { id: 'cs604-u1', unitNumber: 1, title: 'Conventional Management', topics: [{id: 'c4-u1t1', title: 'Waterfall & SDLC'}, {id: 'c4-u1t2', title: 'Agile & Scrum Methodologies'}, {id: 'c4-u1t3', title: 'Stakeholders, Communication & Requirement Drift'}, {id: 'c4-u1t4', title: 'Project Life Cycle & Phase Gates'}, {id: 'c4-u1t5', title: 'Feasibility Study & Business Case'}, {id: 'c4-u1t6', title: 'Requirements Prioritization & Change Negotiation'}] },
            { id: 'cs604-u2', unitNumber: 2, title: 'Estimation & Scheduling', topics: [{id: 'c4-u2t1', title: 'COCOMO Model'}, {id: 'c4-u2t2', title: 'PERT & Gantt Charts'}, {id: 'c4-u2t3', title: 'Earned Value Management (EVM)'}, {id: 'c4-u2t4', title: 'Work Breakdown Structure (WBS)'}, {id: 'c4-u2t5', title: 'Resource Allocation & Leveling'}, {id: 'c4-u2t6', title: 'Critical Path, Float & Schedule Compression'}, {id: 'c4-u2t7', title: 'Milestones, Buffers & Schedule Baselines'}] },
            { id: 'cs604-u3', unitNumber: 3, title: 'Risk Management', topics: [{id: 'c4-u3t1', title: 'Risk Identification & Assessment'}, {id: 'c4-u3t2', title: 'RMMM Plans (Mitigation)'}, {id: 'c4-u3t3', title: 'Risk Register, Heat Maps & Escalation'}, {id: 'c4-u3t4', title: 'Qualitative vs Quantitative Risk Analysis'}, {id: 'c4-u3t5', title: 'Contingency, Fallback & Reserves'}] },
            { id: 'cs604-u4', unitNumber: 4, title: 'Software Configuration Management', topics: [{id: 'c4-u4t1', title: 'Version Control (Git) & Baselines'}, {id: 'c4-u4t2', title: 'Change Control Boards (CCB)'}, {id: 'c4-u4t3', title: 'Build, Release & Environment Management'}, {id: 'c4-u4t4', title: 'Configuration Audits & Status Accounting'}, {id: 'c4-u4t5', title: 'Branching Strategy, Tags & Traceability'}] },
            { id: 'cs604-u5', unitNumber: 5, title: 'Modern DevOps', topics: [{id: 'c4-u5t1', title: 'CI/CD Pipelines'}, {id: 'c4-u5t2', title: 'Docker & Microservices Architecture'}, {id: 'c4-u5t3', title: 'Observability, SRE & Incident Response'}, {id: 'c4-u5t4', title: 'Infrastructure as Code & Immutable Deployments'}, {id: 'c4-u5t5', title: 'Security in DevOps (DevSecOps)'}] }
        ]
    },
    {
        id: 'cs603-cg',
        semester: 6,
        title: 'Computer Graphics & Visualisation',
        code: 'CS603-CG',
        description: 'Making pretty pictures using a terrifying amount of math.',
        units: [
            { id: 'cs603-cg-u1', unitNumber: 1, title: '2D Graphics', topics: [{id: 'cg-u1t1', title: 'Raster Scan Displays & Bresenham Algorithm'}, {id: 'cg-u1t2', title: '2D Transformations (Translation, Rotation)'}, {id: 'cg-u1t3', title: 'Line, Circle & Ellipse Drawing Algorithms'}, {id: 'cg-u1t4', title: 'Windowing, Viewports & Clipping'}] },
            { id: 'cs603-cg-u2', unitNumber: 2, title: '3D Graphics', topics: [{id: 'cg-u2t1', title: '3D Projections (Perspective vs Parallel)'}, {id: 'cg-u2t2', title: 'Hidden Surface Removal'}, {id: 'cg-u2t3', title: '3D Transformations & Viewing Pipeline'}, {id: 'cg-u2t4', title: 'Polygon Meshes, Curved Surfaces & Modeling'}] },
            { id: 'cs603-cg-u3', unitNumber: 3, title: 'Illumination & Shading', topics: [{id: 'cg-u3t1', title: 'Light Sources (Ambient, Diffuse, Specular)'}, {id: 'cg-u3t2', title: 'Phong vs Gouraud Shading'}, {id: 'cg-u3t3', title: 'Texture Mapping & UV Coordinates'}, {id: 'cg-u3t4', title: 'Color Models, Aliasing & Anti-Aliasing'}, {id: 'cg-u3t5', title: 'Ray Casting vs Ray Tracing'}] },
            { id: 'cs603-cg-u4', unitNumber: 4, title: 'Curves & Surfaces', topics: [{id: 'cg-u4t1', title: 'Bezier Curves'}, {id: 'cg-u4t2', title: 'B-Spline & NURBS'}, {id: 'cg-u4t3', title: 'Fractals, Procedural Curves & Terrain'}, {id: 'cg-u4t4', title: 'Surface Patches & Subdivision'}] },
            { id: 'cs603-cg-u5', unitNumber: 5, title: 'Animation & Rendering', topics: [{id: 'cg-u5t1', title: 'Keyframing & Kinematics'}, {id: 'cg-u5t2', title: 'Ray Tracing Fundamentals'}, {id: 'cg-u5t3', title: 'Rendering Pipeline, Z-Testing & Real-Time Graphics'}, {id: 'cg-u5t4', title: 'Particle Systems, Physics & Motion Capture'}] }
        ]
    },

    // === SEMESTER 7 COURSES ===
    {
        id: 'cs701',
        semester: 7,
        title: 'Software Architectures',
        code: 'CS-701',
        description: 'System-level architectural styles, quality attribute tactics (ATAM), microservices, API gateways, and component-based software engineering.',
        units: [
            {
                id: 'cs701-u1',
                unitNumber: 1,
                title: 'Introduction to Software Architecture & Styles',
                topics: [
                    { id: 'cs701-u1t1', title: 'What is Software Architecture? Stakeholders & 4+1 View Model' },
                    { id: 'cs701-u1t2', title: 'Architectural Styles vs Design Patterns: Component & Connector' },
                    { id: 'cs701-u1t3', title: 'Data-Centered (Blackboard) & Data-Flow (Pipe & Filter) Styles' },
                    { id: 'cs701-u1t4', title: 'Call-and-Return Styles: Layered Architecture, MVC & Tiering' },
                    { id: 'cs701-u1t5', title: 'Event-Driven Architectures & Publish-Subscribe Systems' }
                ]
            },
            {
                id: 'cs701-u2',
                unitNumber: 2,
                title: 'Quality Attributes & Tactical Design',
                topics: [
                    { id: 'cs701-u2t1', title: 'Quality Attribute Scenarios: Availability, Performance, Modifiability' },
                    { id: 'cs701-u2t2', title: 'Security Tactics, Testability & Usability in System Design' },
                    { id: 'cs701-u2t3', title: 'Trade-Off Analysis: Latency, Throughput & Consistency' },
                    { id: 'cs701-u2t4', title: 'Fault Tolerance Tactics: Heartbeats, Redundancy & Graceful Degradation' }
                ]
            },
            {
                id: 'cs701-u3',
                unitNumber: 3,
                title: 'Design, ADLs & Architectural Evaluation',
                topics: [
                    { id: 'cs701-u3t1', title: 'Attribute-Driven Design (ADD) Method' },
                    { id: 'cs701-u3t2', title: 'Architectural Description Languages (ADLs): Wright, Acme & UML' },
                    { id: 'cs701-u3t3', title: 'Documenting Software Architectures: Views, Interfaces & C4 Model' },
                    { id: 'cs701-u3t4', title: 'Architecture Evaluation: ATAM (Tradeoff Analysis) & CBAM' }
                ]
            },
            {
                id: 'cs701-u4',
                unitNumber: 4,
                title: 'Distributed, Cloud-Native & Microservices',
                topics: [
                    { id: 'cs701-u4t1', title: 'Service-Oriented Architecture (SOA) vs Microservices' },
                    { id: 'cs701-u4t2', title: 'Microservices Decomposition by Subdomain & Bounded Context' },
                    { id: 'cs701-u4t3', title: 'API Gateway, Service Mesh & Circuit Breaker Pattern' },
                    { id: 'cs701-u4t4', title: 'Event Sourcing, CQRS & Serverless (FaaS) Architectures' }
                ]
            },
            {
                id: 'cs701-u5',
                unitNumber: 5,
                title: 'Component-Based Engineering & Evolution',
                topics: [
                    { id: 'cs701-u5t1', title: 'Component-Based Software Engineering (CBSE) & Contracts' },
                    { id: 'cs701-u5t2', title: 'Software Product Lines (SPL) & Domain Engineering' },
                    { id: 'cs701-u5t3', title: 'Architectural Decay, Erosion & Technical Debt Management' },
                    { id: 'cs701-u5t4', title: 'Architecture Recovery, Conformance Checking & Refactoring' }
                ]
            }
        ]
    },
    {
        id: 'cs702-bd',
        semester: 7,
        title: 'Big Data',
        code: 'CS-702 (Big Data)',
        description: 'Hadoop distributed file system (HDFS), MapReduce execution flows, Apache Spark in-memory analytics, NoSQL paradigms, and real-time Kafka streaming.',
        units: [
            {
                id: 'cs702bd-u1',
                unitNumber: 1,
                title: 'Big Data Fundamentals & Distributed Storage',
                topics: [
                    { id: 'cs702bd-u1t1', title: '5 V’s of Big Data: Volume, Velocity, Variety, Veracity, Value' },
                    { id: 'cs702bd-u1t2', title: 'HDFS Architecture: NameNode, Secondary NameNode & DataNodes' },
                    { id: 'cs702bd-u1t3', title: 'HDFS Block Replication, Rack Awareness & Heartbeat Protocol' },
                    { id: 'cs702bd-u1t4', title: 'Hadoop YARN Architecture: ResourceManager & NodeManagers' }
                ]
            },
            {
                id: 'cs702bd-u2',
                unitNumber: 2,
                title: 'MapReduce Distributed Computing',
                topics: [
                    { id: 'cs702bd-u2t1', title: 'MapReduce Programming Model: Mappers, Reducers & Combiners' },
                    { id: 'cs702bd-u2t2', title: 'Shuffle & Sort Phase, Partitioners & Spill Management' },
                    { id: 'cs702bd-u2t3', title: 'Classic Algorithms: Word Count, Inverted Index & Matrix Multiply' },
                    { id: 'cs702bd-u2t4', title: 'Distributed Joins: Map-Side Join vs Reduce-Side Join' }
                ]
            },
            {
                id: 'cs702bd-u3',
                unitNumber: 3,
                title: 'Apache Spark & In-Memory Compute',
                topics: [
                    { id: 'cs702bd-u3t1', title: 'Spark Ecosystem: Driver, Cluster Manager, Executors & Lineage' },
                    { id: 'cs702bd-u3t2', title: 'Resilient Distributed Datasets (RDDs): Transformations vs Actions' },
                    { id: 'cs702bd-u3t3', title: 'Spark SQL, DataFrames & Catalyst Optimizer Engine' },
                    { id: 'cs702bd-u3t4', title: 'Spark Streaming & Structured Streaming Architecture' }
                ]
            },
            {
                id: 'cs702bd-u4',
                unitNumber: 4,
                title: 'NoSQL Databases & Distributed Consensus',
                topics: [
                    { id: 'cs702bd-u4t1', title: 'CAP Theorem, PACELC Theorem & BASE vs ACID Models' },
                    { id: 'cs702bd-u4t2', title: 'Key-Value (Redis) & Document Stores (MongoDB BSON & Replica Sets)' },
                    { id: 'cs702bd-u4t3', title: 'Column-Family: Cassandra Consistent Hashing, Gossip & LSM Trees' },
                    { id: 'cs702bd-u4t4', title: 'Graph Databases: Neo4j Cypher & Index-Free Adjacency' }
                ]
            },
            {
                id: 'cs702bd-u5',
                unitNumber: 5,
                title: 'Big Data Pipelines & Streaming Architectures',
                topics: [
                    { id: 'cs702bd-u5t1', title: 'Apache Kafka Architecture: Topics, Partitions & Consumer Groups' },
                    { id: 'cs702bd-u5t2', title: 'Lambda Architecture vs Kappa Architecture Data Pipelines' },
                    { id: 'cs702bd-u5t3', title: 'Data Lakes, Parquet Columns & Lakehouses (Delta Lake / Iceberg)' },
                    { id: 'cs702bd-u5t4', title: 'Big Data Governance, Kerberos Security & Apache Ranger' }
                ]
            }
        ]
    },
    {
        id: 'cs702-wmc',
        semester: 7,
        title: 'Wireless & Mobile Computing',
        code: 'CS-702 (Wireless)',
        description: 'Wireless propagation, fading channels, MAC protocols (CSMA/CA, CDMA), cellular architectures (GSM, 4G LTE, 5G), Mobile IP, and MANET routing.',
        units: [
            {
                id: 'cs702wmc-u1',
                unitNumber: 1,
                title: 'Wireless Transmission & Physical Layer',
                topics: [
                    { id: 'cs702wmc-u1t1', title: 'Electromagnetic Spectrum & Radio Frequency Propagation' },
                    { id: 'cs702wmc-u1t2', title: 'Modulation: FSK, PSK, QAM & OFDM Principles' },
                    { id: 'cs702wmc-u1t3', title: 'Signal Fading: Path Loss, Multipath Fading & Doppler Shift' },
                    { id: 'cs702wmc-u1t4', title: 'Antennas, Beamforming & Multi-Input Multi-Output (MIMO)' }
                ]
            },
            {
                id: 'cs702wmc-u2',
                unitNumber: 2,
                title: 'Wireless Medium Access Control (MAC)',
                topics: [
                    { id: 'cs702wmc-u2t1', title: 'Hidden Terminal & Exposed Terminal Problems in Wireless' },
                    { id: 'cs702wmc-u2t2', title: 'Multiple Access: FDMA, TDMA, CDMA & Walsh Orthogonal Codes' },
                    { id: 'cs702wmc-u2t3', title: 'IEEE 802.11 Wi-Fi: CSMA/CA, RTS/CTS Handshake & NAV' },
                    { id: 'cs702wmc-u2t4', title: 'Bluetooth Architecture: Piconet, Scatternet & Frequency Hopping' }
                ]
            },
            {
                id: 'cs702wmc-u3',
                unitNumber: 3,
                title: 'Cellular Networks: 2G GSM to 5G NR',
                topics: [
                    { id: 'cs702wmc-u3t1', title: 'Cellular Concept: Frequency Reuse, Cluster Size N & Cell Splitting' },
                    { id: 'cs702wmc-u3t2', title: 'GSM Architecture: BTS, BSC, MSC, HLR, VLR & Security' },
                    { id: 'cs702wmc-u3t3', title: 'Handoff Strategies: Hard Handoff, Soft Handoff & Power Control' },
                    { id: 'cs702wmc-u3t4', title: '4G LTE vs 5G NR: Network Slicing, Massive MIMO & Millimeter Wave' }
                ]
            },
            {
                id: 'cs702wmc-u4',
                unitNumber: 4,
                title: 'Mobile Network Layer & Mobile IP',
                topics: [
                    { id: 'cs702wmc-u4t1', title: 'Mobile IP Architecture: Home Agent (HA), Foreign Agent & CoA' },
                    { id: 'cs702wmc-u4t2', title: 'IP Tunneling & Encapsulation: IP-in-IP & Minimal Encapsulation' },
                    { id: 'cs702wmc-u4t3', title: 'Triangle Routing Problem & Route Optimization Techniques' },
                    { id: 'cs702wmc-u4t4', title: 'Dynamic Host Configuration Protocol (DHCP) for Mobile Devices' }
                ]
            },
            {
                id: 'cs702wmc-u5',
                unitNumber: 5,
                title: 'Mobile Transport, MANET & IoT Protocols',
                topics: [
                    { id: 'cs702wmc-u5t1', title: 'TCP over Wireless: Packet Loss vs Congestion Misinterpretations' },
                    { id: 'cs702wmc-u5t2', title: 'Mobile TCP Variants: Indirect-TCP (I-TCP), Snooping TCP & M-TCP' },
                    { id: 'cs702wmc-u5t3', title: 'Mobile Ad-Hoc Networks (MANET): DSDV vs AODV & DSR Routing' },
                    { id: 'cs702wmc-u5t4', title: 'Wireless Sensor Networks (WSN) & Low-Power IoT (ZigBee, LoRaWAN)' }
                ]
            }
        ]
    },
    {
        id: 'cs703-cis',
        semester: 7,
        title: 'Cryptography & Information Security',
        code: 'CS-703 (InfoSec)',
        description: 'Classical ciphers, DES/AES symmetric cryptography, RSA/ECC public key systems, SHA-256 hash algorithms, digital certificates, and network security defenses.',
        units: [
            {
                id: 'cs703cis-u1',
                unitNumber: 1,
                title: 'Foundations of Security & Classical Cryptography',
                topics: [
                    { id: 'cs703cis-u1t1', title: 'CIA Triad, Security Attacks (Passive vs Active) & Threat Models' },
                    { id: 'cs703cis-u1t2', title: 'Substitution Ciphers: Caesar, Playfair, Monoalphabetic & Vigenère' },
                    { id: 'cs703cis-u1t3', title: 'Transposition Ciphers: Rail Fence, Columnar & One-Time Pad' },
                    { id: 'cs703cis-u1t4', title: 'Modular Arithmetic, Euclidean Algorithm & Extended GCD' },
                    { id: 'cs703cis-u1t5', title: 'Fermat’s Little Theorem, Euler’s Totient & Chinese Remainder Theorem' }
                ]
            },
            {
                id: 'cs703cis-u2',
                unitNumber: 2,
                title: 'Symmetric Ciphers: DES, AES & Modes',
                topics: [
                    { id: 'cs703cis-u2t1', title: 'Feistel Cipher Architecture: Confusion, Diffusion & Round Keys' },
                    { id: 'cs703cis-u2t2', title: 'Data Encryption Standard (DES): 16 Rounds, S-Boxes & 3DES' },
                    { id: 'cs703cis-u2t3', title: 'Advanced Encryption Standard (AES): SubBytes, ShiftRows, MixColumns' },
                    { id: 'cs703cis-u2t4', title: 'Block Cipher Modes of Operation: ECB, CBC, CFB, OFB & CTR' },
                    { id: 'cs703cis-u2t5', title: 'Stream Ciphers: RC4 Keystream Generation & LFSR' }
                ]
            },
            {
                id: 'cs703cis-u3',
                unitNumber: 3,
                title: 'Asymmetric Cryptography & Key Management',
                topics: [
                    { id: 'cs703cis-u3t1', title: 'Public Key Principles: One-Way Trapdoor Functions & Number Theory' },
                    { id: 'cs703cis-u3t2', title: 'RSA Cryptosystem: Key Generation, Encryption, Proof & Factoring Attacks' },
                    { id: 'cs703cis-u3t3', title: 'Diffie-Hellman Key Exchange: Discrete Logarithm & MITM Attack' },
                    { id: 'cs703cis-u3t4', title: 'Elliptic Curve Cryptography (ECC) & ElGamal Cryptosystem' }
                ]
            },
            {
                id: 'cs703cis-u4',
                unitNumber: 4,
                title: 'Integrity, Hash Functions & Digital Signatures',
                topics: [
                    { id: 'cs703cis-u4t1', title: 'Cryptographic Hash Properties: Preimage & Collision Resistance' },
                    { id: 'cs703cis-u4t2', title: 'Secure Hash Algorithm: SHA-256 Architecture & Merkle-Damgård' },
                    { id: 'cs703cis-u4t3', title: 'Message Authentication Codes (HMAC) & Birthday Paradox Attacks' },
                    { id: 'cs703cis-u4t4', title: 'Digital Signatures: RSA Signatures, DSA & ECDSA Verification' },
                    { id: 'cs703cis-u4t5', title: 'Public Key Infrastructure (PKI): X.509 Certificates & Trust Chains' }
                ]
            },
            {
                id: 'cs703cis-u5',
                unitNumber: 5,
                title: 'Network Defenses, Protocols & Access Control',
                topics: [
                    { id: 'cs703cis-u5t1', title: 'Transport Layer Security: SSL/TLS Handshake & Session Keys' },
                    { id: 'cs703cis-u5t2', title: 'IPSec Protocol Suite: AH vs ESP, Tunnel Mode vs Transport Mode' },
                    { id: 'cs703cis-u5t3', title: 'Kerberos Authentication Architecture: KDC, AS, TGS & Tickets' },
                    { id: 'cs703cis-u5t4', title: 'Firewalls (Stateful / Proxy), DMZ & Intrusion Detection (IDS/IPS)' }
                ]
            }
        ]
    },
    {
        id: 'cs703-dm',
        semester: 7,
        title: 'Disaster Management',
        code: 'CS-703 (Disaster Mgmt)',
        description: 'Hazard identification, disaster management cycle, risk assessment, satellite GIS early warning systems, NDMA frameworks, and resilient engineering systems.',
        units: [
            {
                id: 'cs703dm-u1',
                unitNumber: 1,
                title: 'Understanding Disasters, Hazards & Vulnerabilities',
                topics: [
                    { id: 'cs703dm-u1t1', title: 'Core Concepts: Hazards, Risks, Vulnerability & Capacity Equation' },
                    { id: 'cs703dm-u1t2', title: 'Natural Hazards: Earthquakes, Floods, Cyclones, Tsunamis & Drought' },
                    { id: 'cs703dm-u1t3', title: 'Anthropogenic Disasters: Industrial Leaks, Chemical & Nuclear Events' },
                    { id: 'cs703dm-u1t4', title: 'Climate Change, Deforestation & Environmental Amplifiers' }
                ]
            },
            {
                id: 'cs703dm-u2',
                unitNumber: 2,
                title: 'The Disaster Management Cycle',
                topics: [
                    { id: 'cs703dm-u2t1', title: 'The Complete Cycle: Pre-Disaster, During & Post-Disaster Phases' },
                    { id: 'cs703dm-u2t2', title: 'Prevention, Mitigation & Preparedness: Zoning & Building Codes' },
                    { id: 'cs703dm-u2t3', title: 'Emergency Response, Search & Rescue, Incident Command & Triage' },
                    { id: 'cs703dm-u2t4', title: 'Rehabilitation, Reconstruction & "Building Back Better" (BBB)' }
                ]
            },
            {
                id: 'cs703dm-u3',
                unitNumber: 3,
                title: 'Disaster Risk Assessment & Vulnerability Analysis',
                topics: [
                    { id: 'cs703dm-u3t1', title: 'Disaster Risk Assessment (DRA) Framework & Matrix' },
                    { id: 'cs703dm-u3t2', title: 'Vulnerability Profiling: Physical, Economic, Social & Ecological' },
                    { id: 'cs703dm-u3t3', title: 'Community-Based Disaster Risk Reduction (CBDRR) & Local Knowledge' },
                    { id: 'cs703dm-u3t4', title: 'Structural vs Non-Structural Mitigation Measures' }
                ]
            },
            {
                id: 'cs703dm-u4',
                unitNumber: 4,
                title: 'Technology & Remote Sensing in Disaster Systems',
                topics: [
                    { id: 'cs703dm-u4t1', title: 'GIS & Satellite Remote Sensing for Hazard Mapping & Tracking' },
                    { id: 'cs703dm-u4t2', title: 'Early Warning Systems (EWS): Doppler Radar, Ocean Buoys & SMS Alerts' },
                    { id: 'cs703dm-u4t3', title: 'Emergency Communications: HAM Radio, Satphones & Mesh Networks' },
                    { id: 'cs703dm-u4t4', title: 'AI, Big Data & Drone/UAV Applications in Disaster Relief' }
                ]
            },
            {
                id: 'cs703dm-u5',
                unitNumber: 5,
                title: 'Institutional Frameworks & Case Studies',
                topics: [
                    { id: 'cs703dm-u5t1', title: 'Institutional Setup in India: DM Act 2005, NDMA, SDMA & NDRF' },
                    { id: 'cs703dm-u5t2', title: 'Global Frameworks: Sendai Framework (2015-2030) Priorities' },
                    { id: 'cs703dm-u5t3', title: 'Critical IT Infrastructure: Disaster Recovery (DR) Sites & BCP' },
                    { id: 'cs703dm-u5t4', title: 'Major Case Studies: 2004 Tsunami, Fukushima 2011 & Kedarnath 2013' }
                ]
            }
        ]
    }
];

window.coursesData = coursesData;
// Ensure global object exists for dynamic data loaders
window.topicDetails = window.topicDetails || {};

// <<MULTIBRANCH:START>> (generated by scripts/build_multibranch_curriculum.js - do not edit by hand)
coursesData.push(...[
    {
        "id": "bt101",
        "semester": 1,
        "title": "Engineering Chemistry",
        "code": "BT-101",
        "description": "Water treatment, fuels, lubricants, polymers, corrosion, spectroscopy and instrumental methods.",
        "generated": true,
        "references": [
            {
                "title": "Engineering Chemistry",
                "author": "Jain & Jain"
            },
            {
                "title": "A Textbook of Engineering Chemistry",
                "author": "S. S. Dara"
            },
            {
                "title": "Engineering Chemistry",
                "author": "Shashi Chawla"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt101/notes/bt101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt101/notes/bt101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt101/mock-papers/bt101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt101/mock-papers/bt101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt101/mock-papers/bt101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt101-u1",
                "unitNumber": 1,
                "title": "Water Analysis & Treatment",
                "topics": [
                    {
                        "id": "bt101-u1t1",
                        "title": "Hardness of Water"
                    },
                    {
                        "id": "bt101-u1t2",
                        "title": "EDTA Method & Alkalinity"
                    },
                    {
                        "id": "bt101-u1t3",
                        "title": "Boiler Troubles"
                    },
                    {
                        "id": "bt101-u1t4",
                        "title": "Softening Methods"
                    }
                ]
            },
            {
                "id": "bt101-u2",
                "unitNumber": 2,
                "title": "Fuels & Combustion",
                "topics": [
                    {
                        "id": "bt101-u2t1",
                        "title": "Classification of Fuels"
                    },
                    {
                        "id": "bt101-u2t2",
                        "title": "Coal Analysis"
                    },
                    {
                        "id": "bt101-u2t3",
                        "title": "Petroleum & Cracking"
                    },
                    {
                        "id": "bt101-u2t4",
                        "title": "Combustion Calculations"
                    }
                ]
            },
            {
                "id": "bt101-u3",
                "unitNumber": 3,
                "title": "Lubricants & Polymers",
                "topics": [
                    {
                        "id": "bt101-u3t1",
                        "title": "Lubricants & Mechanisms"
                    },
                    {
                        "id": "bt101-u3t2",
                        "title": "Properties of Lubricants"
                    },
                    {
                        "id": "bt101-u3t3",
                        "title": "Polymers"
                    },
                    {
                        "id": "bt101-u3t4",
                        "title": "Rubber & Composites"
                    }
                ]
            },
            {
                "id": "bt101-u4",
                "unitNumber": 4,
                "title": "Corrosion & Electrochemistry",
                "topics": [
                    {
                        "id": "bt101-u4t1",
                        "title": "Electrochemical Cells"
                    },
                    {
                        "id": "bt101-u4t2",
                        "title": "Batteries & Fuel Cells"
                    },
                    {
                        "id": "bt101-u4t3",
                        "title": "Corrosion Mechanisms"
                    },
                    {
                        "id": "bt101-u4t4",
                        "title": "Corrosion Prevention"
                    }
                ]
            },
            {
                "id": "bt101-u5",
                "unitNumber": 5,
                "title": "Instrumental Methods",
                "topics": [
                    {
                        "id": "bt101-u5t1",
                        "title": "Spectroscopy Basics"
                    },
                    {
                        "id": "bt101-u5t2",
                        "title": "Chromatography"
                    },
                    {
                        "id": "bt101-u5t3",
                        "title": "Thermal Analysis"
                    },
                    {
                        "id": "bt101-u5t4",
                        "title": "Green Chemistry & Nanomaterials"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt102",
        "semester": 1,
        "title": "Mathematics-I",
        "code": "BT-102",
        "description": "Calculus, sequences and series, matrices, multivariable calculus and multiple integrals.",
        "generated": true,
        "references": [
            {
                "title": "Higher Engineering Mathematics",
                "author": "B. S. Grewal"
            },
            {
                "title": "Advanced Engineering Mathematics",
                "author": "Erwin Kreyszig"
            },
            {
                "title": "Engineering Mathematics",
                "author": "H. K. Dass"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt102/notes/bt102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt102/notes/bt102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt102/mock-papers/bt102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt102/mock-papers/bt102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt102/mock-papers/bt102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt102-u1",
                "unitNumber": 1,
                "title": "Calculus",
                "topics": [
                    {
                        "id": "bt102-u1t1",
                        "title": "Rolle's & Mean Value Theorems"
                    },
                    {
                        "id": "bt102-u1t2",
                        "title": "Taylor & Maclaurin Series"
                    },
                    {
                        "id": "bt102-u1t3",
                        "title": "Indeterminate Forms"
                    },
                    {
                        "id": "bt102-u1t4",
                        "title": "Maxima & Minima"
                    }
                ]
            },
            {
                "id": "bt102-u2",
                "unitNumber": 2,
                "title": "Sequences & Series",
                "topics": [
                    {
                        "id": "bt102-u2t1",
                        "title": "Sequences"
                    },
                    {
                        "id": "bt102-u2t2",
                        "title": "Tests for Convergence"
                    },
                    {
                        "id": "bt102-u2t3",
                        "title": "p-series & Alternating Series"
                    },
                    {
                        "id": "bt102-u2t4",
                        "title": "Fourier Series Basics"
                    }
                ]
            },
            {
                "id": "bt102-u3",
                "unitNumber": 3,
                "title": "Matrices",
                "topics": [
                    {
                        "id": "bt102-u3t1",
                        "title": "Rank of a Matrix"
                    },
                    {
                        "id": "bt102-u3t2",
                        "title": "System of Linear Equations"
                    },
                    {
                        "id": "bt102-u3t3",
                        "title": "Eigenvalues & Eigenvectors"
                    },
                    {
                        "id": "bt102-u3t4",
                        "title": "Cayley-Hamilton & Diagonalisation"
                    }
                ]
            },
            {
                "id": "bt102-u4",
                "unitNumber": 4,
                "title": "Multivariable Calculus",
                "topics": [
                    {
                        "id": "bt102-u4t1",
                        "title": "Partial Differentiation"
                    },
                    {
                        "id": "bt102-u4t2",
                        "title": "Jacobians"
                    },
                    {
                        "id": "bt102-u4t3",
                        "title": "Maxima & Minima of Two Variables"
                    },
                    {
                        "id": "bt102-u4t4",
                        "title": "Lagrange Multipliers"
                    }
                ]
            },
            {
                "id": "bt102-u5",
                "unitNumber": 5,
                "title": "Multiple Integrals",
                "topics": [
                    {
                        "id": "bt102-u5t1",
                        "title": "Double Integrals"
                    },
                    {
                        "id": "bt102-u5t2",
                        "title": "Polar Coordinates in Integration"
                    },
                    {
                        "id": "bt102-u5t3",
                        "title": "Triple Integrals"
                    },
                    {
                        "id": "bt102-u5t4",
                        "title": "Beta & Gamma Functions"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt103",
        "semester": 1,
        "title": "English for Communication",
        "code": "BT-103",
        "description": "Communication process, grammar, vocabulary, reading, writing, technical writing and presentation skills.",
        "generated": true,
        "references": [
            {
                "title": "Technical Communication: Principles and Practice",
                "author": "Meenakshi Raman & Sangeeta Sharma"
            },
            {
                "title": "Business Communication",
                "author": "Urmila Rai & S. M. Rai"
            },
            {
                "title": "High School English Grammar",
                "author": "Wren & Martin"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt103/notes/bt103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt103/notes/bt103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt103/mock-papers/bt103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt103/mock-papers/bt103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt103/mock-papers/bt103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt103-u1",
                "unitNumber": 1,
                "title": "Communication Fundamentals",
                "topics": [
                    {
                        "id": "bt103-u1t1",
                        "title": "Process of Communication"
                    },
                    {
                        "id": "bt103-u1t2",
                        "title": "Barriers to Communication"
                    },
                    {
                        "id": "bt103-u1t3",
                        "title": "Verbal & Non-verbal Communication"
                    },
                    {
                        "id": "bt103-u1t4",
                        "title": "Formal & Informal Channels"
                    }
                ]
            },
            {
                "id": "bt103-u2",
                "unitNumber": 2,
                "title": "Grammar & Vocabulary",
                "topics": [
                    {
                        "id": "bt103-u2t1",
                        "title": "Parts of Speech & Tenses"
                    },
                    {
                        "id": "bt103-u2t2",
                        "title": "Voice & Narration"
                    },
                    {
                        "id": "bt103-u2t3",
                        "title": "Vocabulary Building"
                    },
                    {
                        "id": "bt103-u2t4",
                        "title": "Common Errors"
                    }
                ]
            },
            {
                "id": "bt103-u3",
                "unitNumber": 3,
                "title": "Reading & Listening",
                "topics": [
                    {
                        "id": "bt103-u3t1",
                        "title": "Reading Comprehension"
                    },
                    {
                        "id": "bt103-u3t2",
                        "title": "Note Making & Summarising"
                    },
                    {
                        "id": "bt103-u3t3",
                        "title": "Listening Skills"
                    },
                    {
                        "id": "bt103-u3t4",
                        "title": "Critical Reading"
                    }
                ]
            },
            {
                "id": "bt103-u4",
                "unitNumber": 4,
                "title": "Writing Skills",
                "topics": [
                    {
                        "id": "bt103-u4t1",
                        "title": "Paragraph & Essay Writing"
                    },
                    {
                        "id": "bt103-u4t2",
                        "title": "Business Letters"
                    },
                    {
                        "id": "bt103-u4t3",
                        "title": "Emails & Memos"
                    },
                    {
                        "id": "bt103-u4t4",
                        "title": "Job Applications & Resume"
                    }
                ]
            },
            {
                "id": "bt103-u5",
                "unitNumber": 5,
                "title": "Technical Writing & Presentation",
                "topics": [
                    {
                        "id": "bt103-u5t1",
                        "title": "Technical Reports"
                    },
                    {
                        "id": "bt103-u5t2",
                        "title": "Proposals & Minutes"
                    },
                    {
                        "id": "bt103-u5t3",
                        "title": "Presentation Skills"
                    },
                    {
                        "id": "bt103-u5t4",
                        "title": "Group Discussion & Interviews"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt104",
        "semester": 1,
        "title": "Basic Electrical & Electronics Engineering",
        "code": "BT-104",
        "description": "DC circuits, AC circuits, magnetic circuits, transformers, machines and basic electronics.",
        "generated": true,
        "references": [
            {
                "title": "Basic Electrical Engineering",
                "author": "D. P. Kothari & I. J. Nagrath"
            },
            {
                "title": "A Textbook of Electrical Technology Vol. 1",
                "author": "B. L. Theraja"
            },
            {
                "title": "Electronic Devices and Circuit Theory",
                "author": "Boylestad & Nashelsky"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt104/notes/bt104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt104/notes/bt104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt104/mock-papers/bt104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt104/mock-papers/bt104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt104/mock-papers/bt104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt104-u1",
                "unitNumber": 1,
                "title": "DC Circuits",
                "topics": [
                    {
                        "id": "bt104-u1t1",
                        "title": "Circuit Elements & Ohm's Law"
                    },
                    {
                        "id": "bt104-u1t2",
                        "title": "Kirchhoff's Laws"
                    },
                    {
                        "id": "bt104-u1t3",
                        "title": "Network Theorems"
                    },
                    {
                        "id": "bt104-u1t4",
                        "title": "Star-Delta Transformation"
                    }
                ]
            },
            {
                "id": "bt104-u2",
                "unitNumber": 2,
                "title": "AC Circuits",
                "topics": [
                    {
                        "id": "bt104-u2t1",
                        "title": "AC Fundamentals"
                    },
                    {
                        "id": "bt104-u2t2",
                        "title": "Phasors & Single-phase Circuits"
                    },
                    {
                        "id": "bt104-u2t3",
                        "title": "Resonance"
                    },
                    {
                        "id": "bt104-u2t4",
                        "title": "Three-phase Systems"
                    }
                ]
            },
            {
                "id": "bt104-u3",
                "unitNumber": 3,
                "title": "Magnetic Circuits & Transformers",
                "topics": [
                    {
                        "id": "bt104-u3t1",
                        "title": "Magnetic Circuits"
                    },
                    {
                        "id": "bt104-u3t2",
                        "title": "Electromagnetic Induction"
                    },
                    {
                        "id": "bt104-u3t3",
                        "title": "Single-phase Transformer"
                    },
                    {
                        "id": "bt104-u3t4",
                        "title": "Transformer Losses & Efficiency"
                    }
                ]
            },
            {
                "id": "bt104-u4",
                "unitNumber": 4,
                "title": "Electrical Machines",
                "topics": [
                    {
                        "id": "bt104-u4t1",
                        "title": "DC Machines"
                    },
                    {
                        "id": "bt104-u4t2",
                        "title": "Three-phase Induction Motor"
                    },
                    {
                        "id": "bt104-u4t3",
                        "title": "Single-phase Motors"
                    },
                    {
                        "id": "bt104-u4t4",
                        "title": "Synchronous Machines"
                    }
                ]
            },
            {
                "id": "bt104-u5",
                "unitNumber": 5,
                "title": "Basic Electronics",
                "topics": [
                    {
                        "id": "bt104-u5t1",
                        "title": "Semiconductor Diode"
                    },
                    {
                        "id": "bt104-u5t2",
                        "title": "Rectifiers"
                    },
                    {
                        "id": "bt104-u5t3",
                        "title": "Transistors"
                    },
                    {
                        "id": "bt104-u5t4",
                        "title": "Digital Electronics Basics"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt105",
        "semester": 1,
        "title": "Engineering Graphics",
        "code": "BT-105",
        "description": "Drawing instruments, scales, curves, projections of points, lines, planes and solids, sections, developments and isometric views.",
        "generated": true,
        "references": [
            {
                "title": "Engineering Drawing",
                "author": "N. D. Bhatt"
            },
            {
                "title": "Engineering Graphics",
                "author": "K. Venugopal"
            },
            {
                "title": "Engineering Drawing",
                "author": "P. S. Gill"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt105/notes/bt105-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt105/notes/bt105-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt105/mock-papers/bt105-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt105/mock-papers/bt105-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt105/mock-papers/bt105-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt105-u1",
                "unitNumber": 1,
                "title": "Drawing Fundamentals",
                "topics": [
                    {
                        "id": "bt105-u1t1",
                        "title": "Drawing Instruments & Conventions"
                    },
                    {
                        "id": "bt105-u1t2",
                        "title": "Dimensioning"
                    },
                    {
                        "id": "bt105-u1t3",
                        "title": "Scales"
                    },
                    {
                        "id": "bt105-u1t4",
                        "title": "Vernier Scale"
                    }
                ]
            },
            {
                "id": "bt105-u2",
                "unitNumber": 2,
                "title": "Engineering Curves",
                "topics": [
                    {
                        "id": "bt105-u2t1",
                        "title": "Conic Sections"
                    },
                    {
                        "id": "bt105-u2t2",
                        "title": "Construction of Conics"
                    },
                    {
                        "id": "bt105-u2t3",
                        "title": "Cycloidal Curves"
                    },
                    {
                        "id": "bt105-u2t4",
                        "title": "Involutes & Spirals"
                    }
                ]
            },
            {
                "id": "bt105-u3",
                "unitNumber": 3,
                "title": "Projections of Points, Lines & Planes",
                "topics": [
                    {
                        "id": "bt105-u3t1",
                        "title": "Orthographic Projection"
                    },
                    {
                        "id": "bt105-u3t2",
                        "title": "Projection of Points"
                    },
                    {
                        "id": "bt105-u3t3",
                        "title": "Projection of Lines"
                    },
                    {
                        "id": "bt105-u3t4",
                        "title": "Projection of Planes"
                    }
                ]
            },
            {
                "id": "bt105-u4",
                "unitNumber": 4,
                "title": "Projections & Sections of Solids",
                "topics": [
                    {
                        "id": "bt105-u4t1",
                        "title": "Types of Solids"
                    },
                    {
                        "id": "bt105-u4t2",
                        "title": "Projection of Solids"
                    },
                    {
                        "id": "bt105-u4t3",
                        "title": "Sections of Solids"
                    },
                    {
                        "id": "bt105-u4t4",
                        "title": "Development of Surfaces"
                    }
                ]
            },
            {
                "id": "bt105-u5",
                "unitNumber": 5,
                "title": "Isometric & Computer Graphics",
                "topics": [
                    {
                        "id": "bt105-u5t1",
                        "title": "Isometric Projection"
                    },
                    {
                        "id": "bt105-u5t2",
                        "title": "Conversion of Views"
                    },
                    {
                        "id": "bt105-u5t3",
                        "title": "Introduction to CAD"
                    },
                    {
                        "id": "bt105-u5t4",
                        "title": "CAD Commands"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt201",
        "semester": 2,
        "title": "Engineering Physics",
        "code": "BT-201",
        "description": "Quantum mechanics, wave optics, lasers, fibre optics, solid state physics and nuclear physics.",
        "generated": true,
        "references": [
            {
                "title": "Engineering Physics",
                "author": "H. K. Malik & A. K. Singh"
            },
            {
                "title": "Optics",
                "author": "Ajoy Ghatak"
            },
            {
                "title": "Concepts of Modern Physics",
                "author": "Arthur Beiser"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt201/notes/bt201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt201/notes/bt201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt201/mock-papers/bt201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt201/mock-papers/bt201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt201/mock-papers/bt201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt201-u1",
                "unitNumber": 1,
                "title": "Quantum Physics",
                "topics": [
                    {
                        "id": "bt201-u1t1",
                        "title": "Wave-Particle Duality"
                    },
                    {
                        "id": "bt201-u1t2",
                        "title": "Heisenberg Uncertainty Principle"
                    },
                    {
                        "id": "bt201-u1t3",
                        "title": "Schrödinger Wave Equation"
                    },
                    {
                        "id": "bt201-u1t4",
                        "title": "Particle in a Box"
                    }
                ]
            },
            {
                "id": "bt201-u2",
                "unitNumber": 2,
                "title": "Wave Optics",
                "topics": [
                    {
                        "id": "bt201-u2t1",
                        "title": "Interference"
                    },
                    {
                        "id": "bt201-u2t2",
                        "title": "Thin Film & Newton's Rings"
                    },
                    {
                        "id": "bt201-u2t3",
                        "title": "Diffraction"
                    },
                    {
                        "id": "bt201-u2t4",
                        "title": "Polarisation"
                    }
                ]
            },
            {
                "id": "bt201-u3",
                "unitNumber": 3,
                "title": "Lasers & Fibre Optics",
                "topics": [
                    {
                        "id": "bt201-u3t1",
                        "title": "Laser Principles"
                    },
                    {
                        "id": "bt201-u3t2",
                        "title": "Types of Lasers"
                    },
                    {
                        "id": "bt201-u3t3",
                        "title": "Applications of Lasers"
                    },
                    {
                        "id": "bt201-u3t4",
                        "title": "Optical Fibres"
                    }
                ]
            },
            {
                "id": "bt201-u4",
                "unitNumber": 4,
                "title": "Solid State Physics",
                "topics": [
                    {
                        "id": "bt201-u4t1",
                        "title": "Crystal Structure"
                    },
                    {
                        "id": "bt201-u4t2",
                        "title": "X-ray Diffraction"
                    },
                    {
                        "id": "bt201-u4t3",
                        "title": "Band Theory"
                    },
                    {
                        "id": "bt201-u4t4",
                        "title": "Semiconductors & Hall Effect"
                    }
                ]
            },
            {
                "id": "bt201-u5",
                "unitNumber": 5,
                "title": "Nuclear Physics & Modern Materials",
                "topics": [
                    {
                        "id": "bt201-u5t1",
                        "title": "Nuclear Structure"
                    },
                    {
                        "id": "bt201-u5t2",
                        "title": "Radioactivity"
                    },
                    {
                        "id": "bt201-u5t3",
                        "title": "Nuclear Fission & Fusion"
                    },
                    {
                        "id": "bt201-u5t4",
                        "title": "Superconductors & Nanomaterials"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt202",
        "semester": 2,
        "title": "Mathematics-II",
        "code": "BT-202",
        "description": "Ordinary differential equations, partial differential equations, complex variables and vector calculus.",
        "generated": true,
        "references": [
            {
                "title": "Higher Engineering Mathematics",
                "author": "B. S. Grewal"
            },
            {
                "title": "Advanced Engineering Mathematics",
                "author": "Erwin Kreyszig"
            },
            {
                "title": "Complex Variables and Applications",
                "author": "Churchill & Brown"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt202/notes/bt202-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt202/notes/bt202-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt202/mock-papers/bt202-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt202/mock-papers/bt202-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt202/mock-papers/bt202-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt202-u1",
                "unitNumber": 1,
                "title": "First Order ODEs",
                "topics": [
                    {
                        "id": "bt202-u1t1",
                        "title": "Exact Differential Equations"
                    },
                    {
                        "id": "bt202-u1t2",
                        "title": "Linear & Bernoulli Equations"
                    },
                    {
                        "id": "bt202-u1t3",
                        "title": "Equations of Higher Degree"
                    },
                    {
                        "id": "bt202-u1t4",
                        "title": "Applications of First Order ODEs"
                    }
                ]
            },
            {
                "id": "bt202-u2",
                "unitNumber": 2,
                "title": "Higher Order Linear ODEs",
                "topics": [
                    {
                        "id": "bt202-u2t1",
                        "title": "Homogeneous Equations"
                    },
                    {
                        "id": "bt202-u2t2",
                        "title": "Particular Integral"
                    },
                    {
                        "id": "bt202-u2t3",
                        "title": "Variation of Parameters"
                    },
                    {
                        "id": "bt202-u2t4",
                        "title": "Cauchy-Euler Equations"
                    }
                ]
            },
            {
                "id": "bt202-u3",
                "unitNumber": 3,
                "title": "Partial Differential Equations",
                "topics": [
                    {
                        "id": "bt202-u3t1",
                        "title": "Formation of PDEs"
                    },
                    {
                        "id": "bt202-u3t2",
                        "title": "Lagrange's Linear Equation"
                    },
                    {
                        "id": "bt202-u3t3",
                        "title": "Non-linear First Order PDEs"
                    },
                    {
                        "id": "bt202-u3t4",
                        "title": "Method of Separation of Variables"
                    }
                ]
            },
            {
                "id": "bt202-u4",
                "unitNumber": 4,
                "title": "Complex Variables",
                "topics": [
                    {
                        "id": "bt202-u4t1",
                        "title": "Analytic Functions"
                    },
                    {
                        "id": "bt202-u4t2",
                        "title": "Complex Integration"
                    },
                    {
                        "id": "bt202-u4t3",
                        "title": "Series & Singularities"
                    },
                    {
                        "id": "bt202-u4t4",
                        "title": "Residue Theorem"
                    }
                ]
            },
            {
                "id": "bt202-u5",
                "unitNumber": 5,
                "title": "Vector Calculus",
                "topics": [
                    {
                        "id": "bt202-u5t1",
                        "title": "Gradient, Divergence & Curl"
                    },
                    {
                        "id": "bt202-u5t2",
                        "title": "Directional Derivative"
                    },
                    {
                        "id": "bt202-u5t3",
                        "title": "Line & Surface Integrals"
                    },
                    {
                        "id": "bt202-u5t4",
                        "title": "Integral Theorems"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt203",
        "semester": 2,
        "title": "Basic Mechanical Engineering",
        "code": "BT-203",
        "description": "Materials, measurement, machine tools, fluid basics, thermodynamics, steam boilers and IC engines.",
        "generated": true,
        "references": [
            {
                "title": "Basic Mechanical Engineering",
                "author": "Basant Agrawal & C. M. Agrawal"
            },
            {
                "title": "Elements of Mechanical Engineering",
                "author": "Hajra Choudhury"
            },
            {
                "title": "Engineering Thermodynamics",
                "author": "P. K. Nag"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt203/notes/bt203-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt203/notes/bt203-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt203/mock-papers/bt203-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt203/mock-papers/bt203-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt203/mock-papers/bt203-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt203-u1",
                "unitNumber": 1,
                "title": "Engineering Materials",
                "topics": [
                    {
                        "id": "bt203-u1t1",
                        "title": "Classification of Materials"
                    },
                    {
                        "id": "bt203-u1t2",
                        "title": "Mechanical Properties"
                    },
                    {
                        "id": "bt203-u1t3",
                        "title": "Stress-Strain Diagram"
                    },
                    {
                        "id": "bt203-u1t4",
                        "title": "Heat Treatment Basics"
                    }
                ]
            },
            {
                "id": "bt203-u2",
                "unitNumber": 2,
                "title": "Measurement & Machine Tools",
                "topics": [
                    {
                        "id": "bt203-u2t1",
                        "title": "Measuring Instruments"
                    },
                    {
                        "id": "bt203-u2t2",
                        "title": "Lathe Machine"
                    },
                    {
                        "id": "bt203-u2t3",
                        "title": "Drilling & Milling"
                    },
                    {
                        "id": "bt203-u2t4",
                        "title": "Basic Manufacturing Processes"
                    }
                ]
            },
            {
                "id": "bt203-u3",
                "unitNumber": 3,
                "title": "Fluid Mechanics Basics",
                "topics": [
                    {
                        "id": "bt203-u3t1",
                        "title": "Fluid Properties"
                    },
                    {
                        "id": "bt203-u3t2",
                        "title": "Pressure Measurement"
                    },
                    {
                        "id": "bt203-u3t3",
                        "title": "Bernoulli's Equation"
                    },
                    {
                        "id": "bt203-u3t4",
                        "title": "Hydraulic Machines"
                    }
                ]
            },
            {
                "id": "bt203-u4",
                "unitNumber": 4,
                "title": "Thermodynamics",
                "topics": [
                    {
                        "id": "bt203-u4t1",
                        "title": "Basic Concepts"
                    },
                    {
                        "id": "bt203-u4t2",
                        "title": "Laws of Thermodynamics"
                    },
                    {
                        "id": "bt203-u4t3",
                        "title": "Ideal Gas Processes"
                    },
                    {
                        "id": "bt203-u4t4",
                        "title": "Heat Engines & Efficiency"
                    }
                ]
            },
            {
                "id": "bt203-u5",
                "unitNumber": 5,
                "title": "Steam Boilers & IC Engines",
                "topics": [
                    {
                        "id": "bt203-u5t1",
                        "title": "Properties of Steam"
                    },
                    {
                        "id": "bt203-u5t2",
                        "title": "Steam Boilers"
                    },
                    {
                        "id": "bt203-u5t3",
                        "title": "IC Engines"
                    },
                    {
                        "id": "bt203-u5t4",
                        "title": "Engine Performance Basics"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt204",
        "semester": 2,
        "title": "Basic Civil Engineering & Mechanics",
        "code": "BT-204",
        "description": "Building materials, surveying, construction, forces, equilibrium, friction and properties of sections.",
        "generated": true,
        "references": [
            {
                "title": "Basic Civil Engineering",
                "author": "S. S. Bhavikatti"
            },
            {
                "title": "Engineering Mechanics",
                "author": "R. S. Khurmi"
            },
            {
                "title": "Surveying Vol. 1",
                "author": "B. C. Punmia"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt204/notes/bt204-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt204/notes/bt204-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt204/mock-papers/bt204-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt204/mock-papers/bt204-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt204/mock-papers/bt204-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt204-u1",
                "unitNumber": 1,
                "title": "Building Materials",
                "topics": [
                    {
                        "id": "bt204-u1t1",
                        "title": "Stones, Bricks & Lime"
                    },
                    {
                        "id": "bt204-u1t2",
                        "title": "Cement & Concrete"
                    },
                    {
                        "id": "bt204-u1t3",
                        "title": "Timber, Steel & Modern Materials"
                    },
                    {
                        "id": "bt204-u1t4",
                        "title": "Tests on Materials"
                    }
                ]
            },
            {
                "id": "bt204-u2",
                "unitNumber": 2,
                "title": "Surveying",
                "topics": [
                    {
                        "id": "bt204-u2t1",
                        "title": "Principles of Surveying"
                    },
                    {
                        "id": "bt204-u2t2",
                        "title": "Compass Surveying"
                    },
                    {
                        "id": "bt204-u2t3",
                        "title": "Levelling"
                    },
                    {
                        "id": "bt204-u2t4",
                        "title": "Modern Surveying Instruments"
                    }
                ]
            },
            {
                "id": "bt204-u3",
                "unitNumber": 3,
                "title": "Building Construction",
                "topics": [
                    {
                        "id": "bt204-u3t1",
                        "title": "Foundations"
                    },
                    {
                        "id": "bt204-u3t2",
                        "title": "Masonry & Walls"
                    },
                    {
                        "id": "bt204-u3t3",
                        "title": "Floors, Roofs & Building Components"
                    },
                    {
                        "id": "bt204-u3t4",
                        "title": "Building Planning & Bye-laws"
                    }
                ]
            },
            {
                "id": "bt204-u4",
                "unitNumber": 4,
                "title": "Engineering Mechanics: Forces",
                "topics": [
                    {
                        "id": "bt204-u4t1",
                        "title": "System of Forces"
                    },
                    {
                        "id": "bt204-u4t2",
                        "title": "Lami's Theorem & Equilibrium"
                    },
                    {
                        "id": "bt204-u4t3",
                        "title": "Moments & Couples"
                    },
                    {
                        "id": "bt204-u4t4",
                        "title": "Support Reactions & Trusses"
                    }
                ]
            },
            {
                "id": "bt204-u5",
                "unitNumber": 5,
                "title": "Friction & Properties of Sections",
                "topics": [
                    {
                        "id": "bt204-u5t1",
                        "title": "Laws of Friction"
                    },
                    {
                        "id": "bt204-u5t2",
                        "title": "Applications of Friction"
                    },
                    {
                        "id": "bt204-u5t3",
                        "title": "Centroid & Centre of Gravity"
                    },
                    {
                        "id": "bt204-u5t4",
                        "title": "Moment of Inertia"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt205",
        "semester": 2,
        "title": "Basic Computer Engineering",
        "code": "BT-205",
        "description": "Computer fundamentals, operating systems, C++ programming basics, networking, databases and emerging technologies.",
        "generated": true,
        "references": [
            {
                "title": "Fundamentals of Computers",
                "author": "E. Balagurusamy"
            },
            {
                "title": "Object Oriented Programming with C++",
                "author": "E. Balagurusamy"
            },
            {
                "title": "Computer Fundamentals",
                "author": "P. K. Sinha"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt205/notes/bt205-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt205/notes/bt205-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt205/mock-papers/bt205-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt205/mock-papers/bt205-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt205/mock-papers/bt205-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt205-u1",
                "unitNumber": 1,
                "title": "Computer Fundamentals",
                "topics": [
                    {
                        "id": "bt205-u1t1",
                        "title": "Computer Organisation"
                    },
                    {
                        "id": "bt205-u1t2",
                        "title": "Number Systems"
                    },
                    {
                        "id": "bt205-u1t3",
                        "title": "Generations & Types of Computers"
                    },
                    {
                        "id": "bt205-u1t4",
                        "title": "Software Types"
                    }
                ]
            },
            {
                "id": "bt205-u2",
                "unitNumber": 2,
                "title": "Operating Systems",
                "topics": [
                    {
                        "id": "bt205-u2t1",
                        "title": "OS Functions"
                    },
                    {
                        "id": "bt205-u2t2",
                        "title": "Types of OS"
                    },
                    {
                        "id": "bt205-u2t3",
                        "title": "File Systems & Commands"
                    },
                    {
                        "id": "bt205-u2t4",
                        "title": "Windows & Linux"
                    }
                ]
            },
            {
                "id": "bt205-u3",
                "unitNumber": 3,
                "title": "Programming in C++",
                "topics": [
                    {
                        "id": "bt205-u3t1",
                        "title": "Basics of C++"
                    },
                    {
                        "id": "bt205-u3t2",
                        "title": "Control Structures"
                    },
                    {
                        "id": "bt205-u3t3",
                        "title": "Functions & Arrays"
                    },
                    {
                        "id": "bt205-u3t4",
                        "title": "OOP Concepts"
                    }
                ]
            },
            {
                "id": "bt205-u4",
                "unitNumber": 4,
                "title": "Networking & Internet",
                "topics": [
                    {
                        "id": "bt205-u4t1",
                        "title": "Computer Networks"
                    },
                    {
                        "id": "bt205-u4t2",
                        "title": "Internet & Protocols"
                    },
                    {
                        "id": "bt205-u4t3",
                        "title": "Network Devices"
                    },
                    {
                        "id": "bt205-u4t4",
                        "title": "Cyber Security Basics"
                    }
                ]
            },
            {
                "id": "bt205-u5",
                "unitNumber": 5,
                "title": "Databases & Emerging Technologies",
                "topics": [
                    {
                        "id": "bt205-u5t1",
                        "title": "Database Basics"
                    },
                    {
                        "id": "bt205-u5t2",
                        "title": "Cloud Computing"
                    },
                    {
                        "id": "bt205-u5t3",
                        "title": "IoT & AI"
                    },
                    {
                        "id": "bt205-u5t4",
                        "title": "Big Data & Blockchain"
                    }
                ]
            }
        ]
    },
    {
        "id": "es301",
        "semester": 3,
        "title": "Energy & Environmental Engineering",
        "code": "ES-301",
        "description": "Energy resources, ecosystems, biodiversity, pollution control and environmental policy.",
        "generated": true,
        "references": [
            {
                "title": "Environmental Studies",
                "author": "Erach Bharucha"
            },
            {
                "title": "Non-Conventional Energy Sources",
                "author": "G. D. Rai"
            },
            {
                "title": "Environmental Engineering",
                "author": "Peavy, Rowe & Tchobanoglous"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/es301/notes/es301-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/es301/notes/es301-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/es301/mock-papers/es301-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/es301/mock-papers/es301-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/es301/mock-papers/es301-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "es301-u1",
                "unitNumber": 1,
                "title": "Energy Science & Resources",
                "topics": [
                    {
                        "id": "es301-u1t1",
                        "title": "Energy Systems & Resource Classification"
                    },
                    {
                        "id": "es301-u1t2",
                        "title": "Solar Energy"
                    },
                    {
                        "id": "es301-u1t3",
                        "title": "Wind, Hydro & Tidal Power"
                    },
                    {
                        "id": "es301-u1t4",
                        "title": "Biomass, Geothermal & Fuel Cells"
                    }
                ]
            },
            {
                "id": "es301-u2",
                "unitNumber": 2,
                "title": "Ecosystems",
                "topics": [
                    {
                        "id": "es301-u2t1",
                        "title": "Structure & Function of an Ecosystem"
                    },
                    {
                        "id": "es301-u2t2",
                        "title": "Energy Flow & Food Chains"
                    },
                    {
                        "id": "es301-u2t3",
                        "title": "Ecological Pyramids & Succession"
                    },
                    {
                        "id": "es301-u2t4",
                        "title": "Biogeochemical Cycles"
                    }
                ]
            },
            {
                "id": "es301-u3",
                "unitNumber": 3,
                "title": "Biodiversity & Its Conservation",
                "topics": [
                    {
                        "id": "es301-u3t1",
                        "title": "Levels & Value of Biodiversity"
                    },
                    {
                        "id": "es301-u3t2",
                        "title": "Hotspots & India as a Mega-diversity Nation"
                    },
                    {
                        "id": "es301-u3t3",
                        "title": "Threats to Biodiversity"
                    },
                    {
                        "id": "es301-u3t4",
                        "title": "In-situ & Ex-situ Conservation"
                    }
                ]
            },
            {
                "id": "es301-u4",
                "unitNumber": 4,
                "title": "Environmental Pollution",
                "topics": [
                    {
                        "id": "es301-u4t1",
                        "title": "Air Pollution"
                    },
                    {
                        "id": "es301-u4t2",
                        "title": "Water Pollution & Treatment"
                    },
                    {
                        "id": "es301-u4t3",
                        "title": "Soil, Noise & Thermal Pollution"
                    },
                    {
                        "id": "es301-u4t4",
                        "title": "Solid Waste & Hazardous Waste Management"
                    }
                ]
            },
            {
                "id": "es301-u5",
                "unitNumber": 5,
                "title": "Social Issues & Environmental Policy",
                "topics": [
                    {
                        "id": "es301-u5t1",
                        "title": "Climate Change & Global Warming"
                    },
                    {
                        "id": "es301-u5t2",
                        "title": "Sustainable Development"
                    },
                    {
                        "id": "es301-u5t3",
                        "title": "Environmental Laws in India"
                    },
                    {
                        "id": "es301-u5t4",
                        "title": "International Protocols & Public Awareness"
                    }
                ]
            }
        ]
    },
    {
        "id": "bt301",
        "semester": 3,
        "title": "Mathematics-III",
        "code": "BT-301",
        "description": "Numerical methods, interpolation, numerical calculus, ODE solvers, transforms and probability for engineers.",
        "generated": true,
        "references": [
            {
                "title": "Numerical Methods in Engineering and Science",
                "author": "B. S. Grewal"
            },
            {
                "title": "Higher Engineering Mathematics",
                "author": "B. S. Grewal"
            },
            {
                "title": "Introductory Methods of Numerical Analysis",
                "author": "S. S. Sastry"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/bt301/notes/bt301-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/bt301/notes/bt301-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/bt301/mock-papers/bt301-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/bt301/mock-papers/bt301-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/bt301/mock-papers/bt301-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "bt301-u1",
                "unitNumber": 1,
                "title": "Numerical Solution of Equations",
                "topics": [
                    {
                        "id": "bt301-u1t1",
                        "title": "Bisection & Regula-Falsi Methods"
                    },
                    {
                        "id": "bt301-u1t2",
                        "title": "Newton-Raphson Method"
                    },
                    {
                        "id": "bt301-u1t3",
                        "title": "Solution of Linear Systems"
                    },
                    {
                        "id": "bt301-u1t4",
                        "title": "Errors in Numerical Computation"
                    }
                ]
            },
            {
                "id": "bt301-u2",
                "unitNumber": 2,
                "title": "Interpolation & Finite Differences",
                "topics": [
                    {
                        "id": "bt301-u2t1",
                        "title": "Finite Difference Operators"
                    },
                    {
                        "id": "bt301-u2t2",
                        "title": "Newton's Interpolation Formulae"
                    },
                    {
                        "id": "bt301-u2t3",
                        "title": "Lagrange & Divided Differences"
                    },
                    {
                        "id": "bt301-u2t4",
                        "title": "Central Difference Formulae"
                    }
                ]
            },
            {
                "id": "bt301-u3",
                "unitNumber": 3,
                "title": "Numerical Differentiation & Integration",
                "topics": [
                    {
                        "id": "bt301-u3t1",
                        "title": "Numerical Differentiation"
                    },
                    {
                        "id": "bt301-u3t2",
                        "title": "Trapezoidal Rule"
                    },
                    {
                        "id": "bt301-u3t3",
                        "title": "Simpson's Rules"
                    },
                    {
                        "id": "bt301-u3t4",
                        "title": "Gaussian Quadrature"
                    }
                ]
            },
            {
                "id": "bt301-u4",
                "unitNumber": 4,
                "title": "Numerical Solution of ODEs",
                "topics": [
                    {
                        "id": "bt301-u4t1",
                        "title": "Taylor Series & Picard's Method"
                    },
                    {
                        "id": "bt301-u4t2",
                        "title": "Euler & Modified Euler Methods"
                    },
                    {
                        "id": "bt301-u4t3",
                        "title": "Runge-Kutta Methods"
                    },
                    {
                        "id": "bt301-u4t4",
                        "title": "Predictor-Corrector Methods"
                    }
                ]
            },
            {
                "id": "bt301-u5",
                "unitNumber": 5,
                "title": "Transforms & Probability",
                "topics": [
                    {
                        "id": "bt301-u5t1",
                        "title": "Laplace Transform"
                    },
                    {
                        "id": "bt301-u5t2",
                        "title": "Fourier Series & Transform"
                    },
                    {
                        "id": "bt301-u5t3",
                        "title": "Probability Distributions"
                    },
                    {
                        "id": "bt301-u5t4",
                        "title": "Correlation, Regression & Hypothesis Tests"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs302",
        "semester": 3,
        "title": "Discrete Structure",
        "code": "CS-302",
        "description": "Sets, relations, logic, algebraic structures, graphs, posets and combinatorics.",
        "generated": true,
        "references": [
            {
                "title": "Discrete Mathematics and Its Applications",
                "author": "Kenneth H. Rosen"
            },
            {
                "title": "Discrete Mathematical Structures with Applications to Computer Science",
                "author": "Tremblay & Manohar"
            },
            {
                "title": "Elements of Discrete Mathematics",
                "author": "C. L. Liu"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs302/notes/cs302-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs302/notes/cs302-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs302/mock-papers/cs302-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs302/mock-papers/cs302-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs302/mock-papers/cs302-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs302-u1",
                "unitNumber": 1,
                "title": "Set Theory, Relations & Functions",
                "topics": [
                    {
                        "id": "cs302-u1t1",
                        "title": "Sets & Set Operations"
                    },
                    {
                        "id": "cs302-u1t2",
                        "title": "Relations & Their Properties"
                    },
                    {
                        "id": "cs302-u1t3",
                        "title": "Equivalence Relations & Partitions"
                    },
                    {
                        "id": "cs302-u1t4",
                        "title": "Functions & Pigeonhole Principle"
                    }
                ]
            },
            {
                "id": "cs302-u2",
                "unitNumber": 2,
                "title": "Algebraic Structures",
                "topics": [
                    {
                        "id": "cs302-u2t1",
                        "title": "Groups & Semigroups"
                    },
                    {
                        "id": "cs302-u2t2",
                        "title": "Abelian, Cyclic Groups & Subgroups"
                    },
                    {
                        "id": "cs302-u2t3",
                        "title": "Cosets & Lagrange's Theorem"
                    },
                    {
                        "id": "cs302-u2t4",
                        "title": "Rings, Fields & Homomorphisms"
                    }
                ]
            },
            {
                "id": "cs302-u3",
                "unitNumber": 3,
                "title": "Propositional Logic & Proofs",
                "topics": [
                    {
                        "id": "cs302-u3t1",
                        "title": "Propositions & Connectives"
                    },
                    {
                        "id": "cs302-u3t2",
                        "title": "Tautology, Contradiction & Normal Forms"
                    },
                    {
                        "id": "cs302-u3t3",
                        "title": "Predicates & Quantifiers"
                    },
                    {
                        "id": "cs302-u3t4",
                        "title": "Rules of Inference & Mathematical Induction"
                    }
                ]
            },
            {
                "id": "cs302-u4",
                "unitNumber": 4,
                "title": "Graph Theory & Trees",
                "topics": [
                    {
                        "id": "cs302-u4t1",
                        "title": "Graph Terminology & Representation"
                    },
                    {
                        "id": "cs302-u4t2",
                        "title": "Euler & Hamiltonian Paths"
                    },
                    {
                        "id": "cs302-u4t3",
                        "title": "Planar Graphs & Graph Colouring"
                    },
                    {
                        "id": "cs302-u4t4",
                        "title": "Trees & Spanning Trees"
                    }
                ]
            },
            {
                "id": "cs302-u5",
                "unitNumber": 5,
                "title": "Posets, Lattices & Combinatorics",
                "topics": [
                    {
                        "id": "cs302-u5t1",
                        "title": "Partial Order & Hasse Diagrams"
                    },
                    {
                        "id": "cs302-u5t2",
                        "title": "Lattices & Boolean Algebra"
                    },
                    {
                        "id": "cs302-u5t3",
                        "title": "Permutations & Combinations"
                    },
                    {
                        "id": "cs302-u5t4",
                        "title": "Recurrence Relations & Generating Functions"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs303",
        "semester": 3,
        "title": "Data Structure",
        "code": "CS-303",
        "description": "Arrays, stacks, queues, linked lists, trees, graphs, sorting, searching and hashing.",
        "generated": true,
        "references": [
            {
                "title": "Fundamentals of Data Structures in C",
                "author": "Horowitz, Sahni & Anderson-Freed"
            },
            {
                "title": "Data Structures Using C",
                "author": "Reema Thareja"
            },
            {
                "title": "Data Structures and Algorithm Analysis in C",
                "author": "Mark Allen Weiss"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs303/notes/cs303-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs303/notes/cs303-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs303/mock-papers/cs303-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs303/mock-papers/cs303-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs303/mock-papers/cs303-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs303-u1",
                "unitNumber": 1,
                "title": "Introduction, Arrays & Complexity",
                "topics": [
                    {
                        "id": "cs303-u1t1",
                        "title": "Abstract Data Types & Complexity"
                    },
                    {
                        "id": "cs303-u1t2",
                        "title": "Arrays & Address Calculation"
                    },
                    {
                        "id": "cs303-u1t3",
                        "title": "Strings & Pattern Operations"
                    },
                    {
                        "id": "cs303-u1t4",
                        "title": "Recursion"
                    }
                ]
            },
            {
                "id": "cs303-u2",
                "unitNumber": 2,
                "title": "Stacks & Queues",
                "topics": [
                    {
                        "id": "cs303-u2t1",
                        "title": "Stack Operations"
                    },
                    {
                        "id": "cs303-u2t2",
                        "title": "Expression Conversion & Evaluation"
                    },
                    {
                        "id": "cs303-u2t3",
                        "title": "Queues & Circular Queues"
                    },
                    {
                        "id": "cs303-u2t4",
                        "title": "Deque & Priority Queue"
                    }
                ]
            },
            {
                "id": "cs303-u3",
                "unitNumber": 3,
                "title": "Linked Lists",
                "topics": [
                    {
                        "id": "cs303-u3t1",
                        "title": "Singly Linked List"
                    },
                    {
                        "id": "cs303-u3t2",
                        "title": "Doubly & Circular Linked Lists"
                    },
                    {
                        "id": "cs303-u3t3",
                        "title": "Linked Implementation of Stack & Queue"
                    },
                    {
                        "id": "cs303-u3t4",
                        "title": "Polynomial Representation"
                    }
                ]
            },
            {
                "id": "cs303-u4",
                "unitNumber": 4,
                "title": "Trees",
                "topics": [
                    {
                        "id": "cs303-u4t1",
                        "title": "Binary Tree Basics & Traversals"
                    },
                    {
                        "id": "cs303-u4t2",
                        "title": "Binary Search Tree"
                    },
                    {
                        "id": "cs303-u4t3",
                        "title": "AVL Trees & Balancing"
                    },
                    {
                        "id": "cs303-u4t4",
                        "title": "B-Trees, Heaps & Threaded Trees"
                    }
                ]
            },
            {
                "id": "cs303-u5",
                "unitNumber": 5,
                "title": "Graphs, Sorting, Searching & Hashing",
                "topics": [
                    {
                        "id": "cs303-u5t1",
                        "title": "Graph Representation & Traversal"
                    },
                    {
                        "id": "cs303-u5t2",
                        "title": "Shortest Path & Spanning Trees"
                    },
                    {
                        "id": "cs303-u5t3",
                        "title": "Sorting Algorithms"
                    },
                    {
                        "id": "cs303-u5t4",
                        "title": "Searching & Hashing"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs304",
        "semester": 3,
        "title": "Digital Systems",
        "code": "CS-304",
        "description": "Number systems, Boolean algebra, combinational and sequential circuits, logic families and A/D conversion.",
        "generated": true,
        "references": [
            {
                "title": "Digital Design",
                "author": "M. Morris Mano"
            },
            {
                "title": "Modern Digital Electronics",
                "author": "R. P. Jain"
            },
            {
                "title": "Digital Principles and Applications",
                "author": "Malvino & Leach"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs304/notes/cs304-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs304/notes/cs304-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs304/mock-papers/cs304-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs304/mock-papers/cs304-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs304/mock-papers/cs304-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs304-u1",
                "unitNumber": 1,
                "title": "Number Systems & Codes",
                "topics": [
                    {
                        "id": "cs304-u1t1",
                        "title": "Number Systems & Conversion"
                    },
                    {
                        "id": "cs304-u1t2",
                        "title": "Complements & Signed Arithmetic"
                    },
                    {
                        "id": "cs304-u1t3",
                        "title": "Binary Codes"
                    },
                    {
                        "id": "cs304-u1t4",
                        "title": "Error Detecting & Correcting Codes"
                    }
                ]
            },
            {
                "id": "cs304-u2",
                "unitNumber": 2,
                "title": "Boolean Algebra & Minimisation",
                "topics": [
                    {
                        "id": "cs304-u2t1",
                        "title": "Boolean Laws & Theorems"
                    },
                    {
                        "id": "cs304-u2t2",
                        "title": "Logic Gates & Universal Gates"
                    },
                    {
                        "id": "cs304-u2t3",
                        "title": "SOP, POS & Canonical Forms"
                    },
                    {
                        "id": "cs304-u2t4",
                        "title": "K-Map & Quine-McCluskey"
                    }
                ]
            },
            {
                "id": "cs304-u3",
                "unitNumber": 3,
                "title": "Combinational Circuits",
                "topics": [
                    {
                        "id": "cs304-u3t1",
                        "title": "Adders & Subtractors"
                    },
                    {
                        "id": "cs304-u3t2",
                        "title": "Multiplexers & Demultiplexers"
                    },
                    {
                        "id": "cs304-u3t3",
                        "title": "Decoders, Encoders & Comparators"
                    },
                    {
                        "id": "cs304-u3t4",
                        "title": "Code Converters & Parity Generators"
                    }
                ]
            },
            {
                "id": "cs304-u4",
                "unitNumber": 4,
                "title": "Sequential Circuits",
                "topics": [
                    {
                        "id": "cs304-u4t1",
                        "title": "Latches & Flip-Flops"
                    },
                    {
                        "id": "cs304-u4t2",
                        "title": "Flip-Flop Conversion & Timing"
                    },
                    {
                        "id": "cs304-u4t3",
                        "title": "Registers & Shift Registers"
                    },
                    {
                        "id": "cs304-u4t4",
                        "title": "Counters"
                    }
                ]
            },
            {
                "id": "cs304-u5",
                "unitNumber": 5,
                "title": "Logic Families & Converters",
                "topics": [
                    {
                        "id": "cs304-u5t1",
                        "title": "Logic Family Characteristics"
                    },
                    {
                        "id": "cs304-u5t2",
                        "title": "TTL, ECL & CMOS"
                    },
                    {
                        "id": "cs304-u5t3",
                        "title": "Digital-to-Analog Converters"
                    },
                    {
                        "id": "cs304-u5t4",
                        "title": "Analog-to-Digital Converters"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs305",
        "semester": 3,
        "title": "Object Oriented Programming & Methodology",
        "code": "CS-305",
        "description": "Classes, objects, encapsulation, inheritance, polymorphism, exceptions, templates and UML.",
        "generated": true,
        "references": [
            {
                "title": "Object-Oriented Programming in C++",
                "author": "Robert Lafore"
            },
            {
                "title": "The C++ Programming Language",
                "author": "Bjarne Stroustrup"
            },
            {
                "title": "Object-Oriented Analysis and Design with Applications",
                "author": "Grady Booch"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs305/notes/cs305-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs305/notes/cs305-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs305/mock-papers/cs305-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs305/mock-papers/cs305-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs305/mock-papers/cs305-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs305-u1",
                "unitNumber": 1,
                "title": "OOP Concepts & Classes",
                "topics": [
                    {
                        "id": "cs305-u1t1",
                        "title": "Procedural vs Object-Oriented Programming"
                    },
                    {
                        "id": "cs305-u1t2",
                        "title": "Encapsulation & Data Hiding"
                    },
                    {
                        "id": "cs305-u1t3",
                        "title": "Constructors & Destructors"
                    },
                    {
                        "id": "cs305-u1t4",
                        "title": "Static Members & Friend Functions"
                    }
                ]
            },
            {
                "id": "cs305-u2",
                "unitNumber": 2,
                "title": "Inheritance",
                "topics": [
                    {
                        "id": "cs305-u2t1",
                        "title": "Inheritance Basics"
                    },
                    {
                        "id": "cs305-u2t2",
                        "title": "Types of Inheritance"
                    },
                    {
                        "id": "cs305-u2t3",
                        "title": "Diamond Problem & Virtual Base Class"
                    },
                    {
                        "id": "cs305-u2t4",
                        "title": "Composition vs Inheritance"
                    }
                ]
            },
            {
                "id": "cs305-u3",
                "unitNumber": 3,
                "title": "Polymorphism",
                "topics": [
                    {
                        "id": "cs305-u3t1",
                        "title": "Function Overloading"
                    },
                    {
                        "id": "cs305-u3t2",
                        "title": "Operator Overloading"
                    },
                    {
                        "id": "cs305-u3t3",
                        "title": "Virtual Functions & Runtime Polymorphism"
                    },
                    {
                        "id": "cs305-u3t4",
                        "title": "Abstract Classes & Interfaces"
                    }
                ]
            },
            {
                "id": "cs305-u4",
                "unitNumber": 4,
                "title": "Exceptions, Templates & I/O",
                "topics": [
                    {
                        "id": "cs305-u4t1",
                        "title": "Exception Handling"
                    },
                    {
                        "id": "cs305-u4t2",
                        "title": "Templates & Generic Programming"
                    },
                    {
                        "id": "cs305-u4t3",
                        "title": "Streams & File Handling"
                    },
                    {
                        "id": "cs305-u4t4",
                        "title": "Java Basics for OOP"
                    }
                ]
            },
            {
                "id": "cs305-u5",
                "unitNumber": 5,
                "title": "Object-Oriented Design & UML",
                "topics": [
                    {
                        "id": "cs305-u5t1",
                        "title": "Object-Oriented Analysis & Design"
                    },
                    {
                        "id": "cs305-u5t2",
                        "title": "UML Class & Object Diagrams"
                    },
                    {
                        "id": "cs305-u5t3",
                        "title": "UML Behavioural Diagrams"
                    },
                    {
                        "id": "cs305-u5t4",
                        "title": "Design Patterns Overview"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs402",
        "semester": 4,
        "title": "Analysis & Design of Algorithms",
        "code": "CS-402",
        "description": "Asymptotic analysis, divide and conquer, greedy, dynamic programming, backtracking, branch and bound and NP-completeness.",
        "generated": true,
        "references": [
            {
                "title": "Introduction to Algorithms",
                "author": "Cormen, Leiserson, Rivest & Stein"
            },
            {
                "title": "Fundamentals of Computer Algorithms",
                "author": "Horowitz, Sahni & Rajasekaran"
            },
            {
                "title": "Algorithm Design",
                "author": "Kleinberg & Tardos"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs402/notes/cs402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs402/notes/cs402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs402/mock-papers/cs402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs402/mock-papers/cs402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs402/mock-papers/cs402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs402-u1",
                "unitNumber": 1,
                "title": "Algorithm Analysis & Divide and Conquer",
                "topics": [
                    {
                        "id": "cs402-u1t1",
                        "title": "Asymptotic Notations"
                    },
                    {
                        "id": "cs402-u1t2",
                        "title": "Recurrences & Master Theorem"
                    },
                    {
                        "id": "cs402-u1t3",
                        "title": "Binary Search, Merge Sort & Quick Sort"
                    },
                    {
                        "id": "cs402-u1t4",
                        "title": "Strassen's Matrix Multiplication"
                    }
                ]
            },
            {
                "id": "cs402-u2",
                "unitNumber": 2,
                "title": "Greedy Method",
                "topics": [
                    {
                        "id": "cs402-u2t1",
                        "title": "Greedy Strategy"
                    },
                    {
                        "id": "cs402-u2t2",
                        "title": "Fractional Knapsack & Job Sequencing"
                    },
                    {
                        "id": "cs402-u2t3",
                        "title": "Huffman Coding"
                    },
                    {
                        "id": "cs402-u2t4",
                        "title": "Minimum Spanning Trees & Dijkstra"
                    }
                ]
            },
            {
                "id": "cs402-u3",
                "unitNumber": 3,
                "title": "Dynamic Programming",
                "topics": [
                    {
                        "id": "cs402-u3t1",
                        "title": "Principles of Dynamic Programming"
                    },
                    {
                        "id": "cs402-u3t2",
                        "title": "0/1 Knapsack & Multistage Graphs"
                    },
                    {
                        "id": "cs402-u3t3",
                        "title": "Longest Common Subsequence & Matrix Chain"
                    },
                    {
                        "id": "cs402-u3t4",
                        "title": "All-Pairs Shortest Paths & TSP"
                    }
                ]
            },
            {
                "id": "cs402-u4",
                "unitNumber": 4,
                "title": "Backtracking & Branch and Bound",
                "topics": [
                    {
                        "id": "cs402-u4t1",
                        "title": "Backtracking Method"
                    },
                    {
                        "id": "cs402-u4t2",
                        "title": "N-Queens & Graph Colouring"
                    },
                    {
                        "id": "cs402-u4t3",
                        "title": "Sum of Subsets"
                    },
                    {
                        "id": "cs402-u4t4",
                        "title": "Branch and Bound"
                    }
                ]
            },
            {
                "id": "cs402-u5",
                "unitNumber": 5,
                "title": "Advanced Topics & Complexity Classes",
                "topics": [
                    {
                        "id": "cs402-u5t1",
                        "title": "Tree & Graph Traversal Techniques"
                    },
                    {
                        "id": "cs402-u5t2",
                        "title": "String Matching Algorithms"
                    },
                    {
                        "id": "cs402-u5t3",
                        "title": "P, NP & NP-Complete"
                    },
                    {
                        "id": "cs402-u5t4",
                        "title": "NP-Hard Problems & Approximation"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs403",
        "semester": 4,
        "title": "Software Engineering",
        "code": "CS-403",
        "description": "Process models, requirements, design, testing, project estimation, quality and maintenance.",
        "generated": true,
        "references": [
            {
                "title": "Software Engineering: A Practitioner's Approach",
                "author": "Roger S. Pressman"
            },
            {
                "title": "Software Engineering",
                "author": "Ian Sommerville"
            },
            {
                "title": "An Integrated Approach to Software Engineering",
                "author": "Pankaj Jalote"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs403/notes/cs403-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs403/notes/cs403-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs403/mock-papers/cs403-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs403/mock-papers/cs403-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs403/mock-papers/cs403-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs403-u1",
                "unitNumber": 1,
                "title": "Software Process Models",
                "topics": [
                    {
                        "id": "cs403-u1t1",
                        "title": "Software Engineering Fundamentals"
                    },
                    {
                        "id": "cs403-u1t2",
                        "title": "Waterfall & V-Model"
                    },
                    {
                        "id": "cs403-u1t3",
                        "title": "Prototyping, Spiral & Incremental Models"
                    },
                    {
                        "id": "cs403-u1t4",
                        "title": "Agile Methodology"
                    }
                ]
            },
            {
                "id": "cs403-u2",
                "unitNumber": 2,
                "title": "Requirements Engineering",
                "topics": [
                    {
                        "id": "cs403-u2t1",
                        "title": "Requirement Elicitation"
                    },
                    {
                        "id": "cs403-u2t2",
                        "title": "SRS Document"
                    },
                    {
                        "id": "cs403-u2t3",
                        "title": "Analysis Modelling"
                    },
                    {
                        "id": "cs403-u2t4",
                        "title": "Feasibility Study & Validation"
                    }
                ]
            },
            {
                "id": "cs403-u3",
                "unitNumber": 3,
                "title": "Software Design",
                "topics": [
                    {
                        "id": "cs403-u3t1",
                        "title": "Design Concepts"
                    },
                    {
                        "id": "cs403-u3t2",
                        "title": "Coupling & Cohesion"
                    },
                    {
                        "id": "cs403-u3t3",
                        "title": "Architectural & Structured Design"
                    },
                    {
                        "id": "cs403-u3t4",
                        "title": "User Interface Design"
                    }
                ]
            },
            {
                "id": "cs403-u4",
                "unitNumber": 4,
                "title": "Software Testing",
                "topics": [
                    {
                        "id": "cs403-u4t1",
                        "title": "Testing Fundamentals"
                    },
                    {
                        "id": "cs403-u4t2",
                        "title": "White-box Testing"
                    },
                    {
                        "id": "cs403-u4t3",
                        "title": "Black-box Testing"
                    },
                    {
                        "id": "cs403-u4t4",
                        "title": "Levels of Testing"
                    }
                ]
            },
            {
                "id": "cs403-u5",
                "unitNumber": 5,
                "title": "Project Management, Quality & Maintenance",
                "topics": [
                    {
                        "id": "cs403-u5t1",
                        "title": "Software Metrics & Estimation"
                    },
                    {
                        "id": "cs403-u5t2",
                        "title": "Scheduling & Risk Management"
                    },
                    {
                        "id": "cs403-u5t3",
                        "title": "Software Quality Assurance"
                    },
                    {
                        "id": "cs403-u5t4",
                        "title": "Maintenance & Re-engineering"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs404",
        "semester": 4,
        "title": "Computer Organization & Architecture",
        "code": "CS-404",
        "description": "CPU organisation, instruction sets, control unit, arithmetic, memory hierarchy, I/O and pipelining.",
        "generated": true,
        "references": [
            {
                "title": "Computer System Architecture",
                "author": "M. Morris Mano"
            },
            {
                "title": "Computer Organization and Architecture",
                "author": "William Stallings"
            },
            {
                "title": "Computer Organization",
                "author": "Hamacher, Vranesic & Zaky"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs404/notes/cs404-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs404/notes/cs404-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs404/mock-papers/cs404-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs404/mock-papers/cs404-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs404/mock-papers/cs404-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs404-u1",
                "unitNumber": 1,
                "title": "Basic Computer Organisation",
                "topics": [
                    {
                        "id": "cs404-u1t1",
                        "title": "Von Neumann Architecture & Functional Units"
                    },
                    {
                        "id": "cs404-u1t2",
                        "title": "Registers & Register Transfer"
                    },
                    {
                        "id": "cs404-u1t3",
                        "title": "Instruction Cycle"
                    },
                    {
                        "id": "cs404-u1t4",
                        "title": "Bus Organisation"
                    }
                ]
            },
            {
                "id": "cs404-u2",
                "unitNumber": 2,
                "title": "Instruction Set & Control Unit",
                "topics": [
                    {
                        "id": "cs404-u2t1",
                        "title": "Instruction Formats"
                    },
                    {
                        "id": "cs404-u2t2",
                        "title": "Addressing Modes"
                    },
                    {
                        "id": "cs404-u2t3",
                        "title": "RISC vs CISC"
                    },
                    {
                        "id": "cs404-u2t4",
                        "title": "Hardwired vs Microprogrammed Control"
                    }
                ]
            },
            {
                "id": "cs404-u3",
                "unitNumber": 3,
                "title": "Computer Arithmetic",
                "topics": [
                    {
                        "id": "cs404-u3t1",
                        "title": "Addition & Subtraction of Signed Numbers"
                    },
                    {
                        "id": "cs404-u3t2",
                        "title": "Booth's Multiplication"
                    },
                    {
                        "id": "cs404-u3t3",
                        "title": "Division Algorithms"
                    },
                    {
                        "id": "cs404-u3t4",
                        "title": "Floating Point Representation"
                    }
                ]
            },
            {
                "id": "cs404-u4",
                "unitNumber": 4,
                "title": "Memory Organisation",
                "topics": [
                    {
                        "id": "cs404-u4t1",
                        "title": "Memory Hierarchy"
                    },
                    {
                        "id": "cs404-u4t2",
                        "title": "Cache Memory & Mapping"
                    },
                    {
                        "id": "cs404-u4t3",
                        "title": "Main Memory & Associative Memory"
                    },
                    {
                        "id": "cs404-u4t4",
                        "title": "Virtual Memory"
                    }
                ]
            },
            {
                "id": "cs404-u5",
                "unitNumber": 5,
                "title": "I/O Organisation & Parallel Processing",
                "topics": [
                    {
                        "id": "cs404-u5t1",
                        "title": "I/O Interface & Modes of Transfer"
                    },
                    {
                        "id": "cs404-u5t2",
                        "title": "DMA & I/O Processors"
                    },
                    {
                        "id": "cs404-u5t3",
                        "title": "Pipelining"
                    },
                    {
                        "id": "cs404-u5t4",
                        "title": "Parallel Processing & Multiprocessors"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs405",
        "semester": 4,
        "title": "Operating Systems",
        "code": "CS-405",
        "description": "Processes, CPU scheduling, synchronisation, deadlocks, memory management, file systems and disk scheduling.",
        "generated": true,
        "references": [
            {
                "title": "Operating System Concepts",
                "author": "Silberschatz, Galvin & Gagne"
            },
            {
                "title": "Modern Operating Systems",
                "author": "Andrew S. Tanenbaum"
            },
            {
                "title": "Operating Systems: Internals and Design Principles",
                "author": "William Stallings"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs405/notes/cs405-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs405/notes/cs405-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs405/mock-papers/cs405-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs405/mock-papers/cs405-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs405/mock-papers/cs405-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs405-u1",
                "unitNumber": 1,
                "title": "OS Introduction & Processes",
                "topics": [
                    {
                        "id": "cs405-u1t1",
                        "title": "Operating System Functions & Types"
                    },
                    {
                        "id": "cs405-u1t2",
                        "title": "System Calls & OS Structure"
                    },
                    {
                        "id": "cs405-u1t3",
                        "title": "Process Concept & PCB"
                    },
                    {
                        "id": "cs405-u1t4",
                        "title": "Threads"
                    }
                ]
            },
            {
                "id": "cs405-u2",
                "unitNumber": 2,
                "title": "CPU Scheduling",
                "topics": [
                    {
                        "id": "cs405-u2t1",
                        "title": "Scheduling Criteria"
                    },
                    {
                        "id": "cs405-u2t2",
                        "title": "FCFS & SJF Scheduling"
                    },
                    {
                        "id": "cs405-u2t3",
                        "title": "Priority & Round Robin Scheduling"
                    },
                    {
                        "id": "cs405-u2t4",
                        "title": "Multilevel Queue Scheduling"
                    }
                ]
            },
            {
                "id": "cs405-u3",
                "unitNumber": 3,
                "title": "Process Synchronisation & Deadlocks",
                "topics": [
                    {
                        "id": "cs405-u3t1",
                        "title": "Critical Section Problem"
                    },
                    {
                        "id": "cs405-u3t2",
                        "title": "Semaphores & Classical Problems"
                    },
                    {
                        "id": "cs405-u3t3",
                        "title": "Deadlock Characterisation"
                    },
                    {
                        "id": "cs405-u3t4",
                        "title": "Deadlock Avoidance, Detection & Recovery"
                    }
                ]
            },
            {
                "id": "cs405-u4",
                "unitNumber": 4,
                "title": "Memory Management",
                "topics": [
                    {
                        "id": "cs405-u4t1",
                        "title": "Contiguous Allocation & Fragmentation"
                    },
                    {
                        "id": "cs405-u4t2",
                        "title": "Paging & Segmentation"
                    },
                    {
                        "id": "cs405-u4t3",
                        "title": "Virtual Memory & Demand Paging"
                    },
                    {
                        "id": "cs405-u4t4",
                        "title": "Page Replacement Algorithms"
                    }
                ]
            },
            {
                "id": "cs405-u5",
                "unitNumber": 5,
                "title": "File Systems & Disk Management",
                "topics": [
                    {
                        "id": "cs405-u5t1",
                        "title": "File Concepts & Access Methods"
                    },
                    {
                        "id": "cs405-u5t2",
                        "title": "Directory Structures & Allocation"
                    },
                    {
                        "id": "cs405-u5t3",
                        "title": "Disk Scheduling"
                    },
                    {
                        "id": "cs405-u5t4",
                        "title": "Protection & Security"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs801",
        "semester": 6,
        "title": "Internet of Things",
        "code": "CS-801",
        "description": "IoT architecture, sensors and actuators, networking, protocols (MQTT, CoAP), platforms, security and case studies.",
        "generated": true,
        "references": [
            {
                "title": "Internet of Things: A Hands-On Approach",
                "author": "Arshdeep Bahga & Vijay Madisetti"
            },
            {
                "title": "Introduction to IoT",
                "author": "Sudip Misra, Anandarup Mukherjee & Arijit Roy"
            },
            {
                "title": "IoT Fundamentals",
                "author": "Hanes, Salgueiro et al. (Cisco Press)"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs801/notes/cs801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs801/notes/cs801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs801/mock-papers/cs801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs801/mock-papers/cs801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs801/mock-papers/cs801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs801-u1",
                "unitNumber": 1,
                "title": "IoT Fundamentals & Architecture",
                "topics": [
                    {
                        "id": "cs801-u1t1",
                        "title": "IoT Definition & Characteristics"
                    },
                    {
                        "id": "cs801-u1t2",
                        "title": "IoT Conceptual & Architectural Framework"
                    },
                    {
                        "id": "cs801-u1t3",
                        "title": "M2M vs IoT"
                    },
                    {
                        "id": "cs801-u1t4",
                        "title": "IoT Communication Models"
                    }
                ]
            },
            {
                "id": "cs801-u2",
                "unitNumber": 2,
                "title": "Sensors, Actuators & Hardware",
                "topics": [
                    {
                        "id": "cs801-u2t1",
                        "title": "Sensors & Their Classification"
                    },
                    {
                        "id": "cs801-u2t2",
                        "title": "Actuators"
                    },
                    {
                        "id": "cs801-u2t3",
                        "title": "Microcontrollers & Development Boards"
                    },
                    {
                        "id": "cs801-u2t4",
                        "title": "Embedded System Basics"
                    }
                ]
            },
            {
                "id": "cs801-u3",
                "unitNumber": 3,
                "title": "IoT Networking & Protocols",
                "topics": [
                    {
                        "id": "cs801-u3t1",
                        "title": "IoT Network Technologies"
                    },
                    {
                        "id": "cs801-u3t2",
                        "title": "MQTT"
                    },
                    {
                        "id": "cs801-u3t3",
                        "title": "CoAP, XMPP & AMQP"
                    },
                    {
                        "id": "cs801-u3t4",
                        "title": "6LoWPAN & IPv6 for IoT"
                    }
                ]
            },
            {
                "id": "cs801-u4",
                "unitNumber": 4,
                "title": "IoT Platforms, Cloud & Data",
                "topics": [
                    {
                        "id": "cs801-u4t1",
                        "title": "Cloud & Edge Computing for IoT"
                    },
                    {
                        "id": "cs801-u4t2",
                        "title": "IoT Platforms"
                    },
                    {
                        "id": "cs801-u4t3",
                        "title": "IoT Data Analytics"
                    },
                    {
                        "id": "cs801-u4t4",
                        "title": "SDN & NFV for IoT"
                    }
                ]
            },
            {
                "id": "cs801-u5",
                "unitNumber": 5,
                "title": "IoT Security & Applications",
                "topics": [
                    {
                        "id": "cs801-u5t1",
                        "title": "IoT Security Challenges"
                    },
                    {
                        "id": "cs801-u5t2",
                        "title": "Privacy & Trust"
                    },
                    {
                        "id": "cs801-u5t3",
                        "title": "Smart Home & Smart City"
                    },
                    {
                        "id": "cs801-u5t4",
                        "title": "Industrial IoT, Healthcare & Agriculture"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs802-bc",
        "semester": 8,
        "title": "Blockchain Technologies",
        "code": "CS-802(A)",
        "description": "Distributed ledgers, cryptographic primitives, consensus, Bitcoin, Ethereum smart contracts and enterprise blockchains.",
        "generated": true,
        "references": [
            {
                "title": "Mastering Bitcoin",
                "author": "Andreas M. Antonopoulos"
            },
            {
                "title": "Blockchain Technology",
                "author": "Chandramouli Subramanian et al."
            },
            {
                "title": "Mastering Ethereum",
                "author": "Antonopoulos & Wood"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs802-bc/notes/cs802-bc-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs802-bc/notes/cs802-bc-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs802-bc/mock-papers/cs802-bc-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs802-bc/mock-papers/cs802-bc-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs802-bc/mock-papers/cs802-bc-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs802-bc-u1",
                "unitNumber": 1,
                "title": "Blockchain Fundamentals",
                "topics": [
                    {
                        "id": "cs802-bc-u1t1",
                        "title": "What is Blockchain?"
                    },
                    {
                        "id": "cs802-bc-u1t2",
                        "title": "Types of Blockchain"
                    },
                    {
                        "id": "cs802-bc-u1t3",
                        "title": "Block Structure"
                    },
                    {
                        "id": "cs802-bc-u1t4",
                        "title": "Decentralisation & Trust"
                    }
                ]
            },
            {
                "id": "cs802-bc-u2",
                "unitNumber": 2,
                "title": "Cryptographic Foundations",
                "topics": [
                    {
                        "id": "cs802-bc-u2t1",
                        "title": "Hash Functions"
                    },
                    {
                        "id": "cs802-bc-u2t2",
                        "title": "Merkle Trees"
                    },
                    {
                        "id": "cs802-bc-u2t3",
                        "title": "Public-key Cryptography & Signatures"
                    },
                    {
                        "id": "cs802-bc-u2t4",
                        "title": "Zero-knowledge & Privacy Techniques"
                    }
                ]
            },
            {
                "id": "cs802-bc-u3",
                "unitNumber": 3,
                "title": "Consensus Mechanisms",
                "topics": [
                    {
                        "id": "cs802-bc-u3t1",
                        "title": "Proof of Work"
                    },
                    {
                        "id": "cs802-bc-u3t2",
                        "title": "Proof of Stake & Variants"
                    },
                    {
                        "id": "cs802-bc-u3t3",
                        "title": "Byzantine Fault Tolerance"
                    },
                    {
                        "id": "cs802-bc-u3t4",
                        "title": "Forks & Network Upgrades"
                    }
                ]
            },
            {
                "id": "cs802-bc-u4",
                "unitNumber": 4,
                "title": "Bitcoin & Ethereum",
                "topics": [
                    {
                        "id": "cs802-bc-u4t1",
                        "title": "Bitcoin Transactions"
                    },
                    {
                        "id": "cs802-bc-u4t2",
                        "title": "Ethereum & the EVM"
                    },
                    {
                        "id": "cs802-bc-u4t3",
                        "title": "Smart Contracts & Solidity"
                    },
                    {
                        "id": "cs802-bc-u4t4",
                        "title": "Tokens & DApps"
                    }
                ]
            },
            {
                "id": "cs802-bc-u5",
                "unitNumber": 5,
                "title": "Enterprise Blockchain & Applications",
                "topics": [
                    {
                        "id": "cs802-bc-u5t1",
                        "title": "Hyperledger Fabric"
                    },
                    {
                        "id": "cs802-bc-u5t2",
                        "title": "Blockchain Scalability"
                    },
                    {
                        "id": "cs802-bc-u5t3",
                        "title": "Applications Beyond Cryptocurrency"
                    },
                    {
                        "id": "cs802-bc-u5t4",
                        "title": "Limitations, Oracles & Regulation"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs802-cc",
        "semester": 7,
        "title": "Cloud Computing",
        "code": "CS-802(B)",
        "description": "SOA and web services, virtualisation, cloud service and deployment models, cloud platforms, storage and security.",
        "generated": true,
        "references": [
            {
                "title": "Cloud Computing: Principles and Paradigms",
                "author": "Buyya, Broberg & Goscinski"
            },
            {
                "title": "Mastering Cloud Computing",
                "author": "Buyya, Vecchiola & Selvi"
            },
            {
                "title": "Cloud Computing: Concepts, Technology & Architecture",
                "author": "Thomas Erl"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs802-cc/notes/cs802-cc-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs802-cc/notes/cs802-cc-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs802-cc/mock-papers/cs802-cc-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs802-cc/mock-papers/cs802-cc-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs802-cc/mock-papers/cs802-cc-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs802-cc-u1",
                "unitNumber": 1,
                "title": "SOA & Web Services",
                "topics": [
                    {
                        "id": "cs802-cc-u1t1",
                        "title": "Service Oriented Architecture"
                    },
                    {
                        "id": "cs802-cc-u1t2",
                        "title": "SOAP, WSDL & UDDI"
                    },
                    {
                        "id": "cs802-cc-u1t3",
                        "title": "RESTful Web Services"
                    },
                    {
                        "id": "cs802-cc-u1t4",
                        "title": "Cloud Computing Definition & Characteristics"
                    }
                ]
            },
            {
                "id": "cs802-cc-u2",
                "unitNumber": 2,
                "title": "Virtualisation",
                "topics": [
                    {
                        "id": "cs802-cc-u2t1",
                        "title": "Virtualisation Concepts"
                    },
                    {
                        "id": "cs802-cc-u2t2",
                        "title": "Hypervisor Types"
                    },
                    {
                        "id": "cs802-cc-u2t3",
                        "title": "Containers"
                    },
                    {
                        "id": "cs802-cc-u2t4",
                        "title": "Live Migration & Resource Management"
                    }
                ]
            },
            {
                "id": "cs802-cc-u3",
                "unitNumber": 3,
                "title": "Service & Deployment Models",
                "topics": [
                    {
                        "id": "cs802-cc-u3t1",
                        "title": "IaaS, PaaS & SaaS"
                    },
                    {
                        "id": "cs802-cc-u3t2",
                        "title": "Deployment Models"
                    },
                    {
                        "id": "cs802-cc-u3t3",
                        "title": "Serverless & FaaS"
                    },
                    {
                        "id": "cs802-cc-u3t4",
                        "title": "SLA & Cloud Economics"
                    }
                ]
            },
            {
                "id": "cs802-cc-u4",
                "unitNumber": 4,
                "title": "Cloud Platforms & Storage",
                "topics": [
                    {
                        "id": "cs802-cc-u4t1",
                        "title": "Major Cloud Platforms"
                    },
                    {
                        "id": "cs802-cc-u4t2",
                        "title": "Cloud Storage"
                    },
                    {
                        "id": "cs802-cc-u4t3",
                        "title": "MapReduce & Big Data in the Cloud"
                    },
                    {
                        "id": "cs802-cc-u4t4",
                        "title": "Installing & Evaluating Cloud Platforms"
                    }
                ]
            },
            {
                "id": "cs802-cc-u5",
                "unitNumber": 5,
                "title": "Cloud Security & Management",
                "topics": [
                    {
                        "id": "cs802-cc-u5t1",
                        "title": "Cloud Security Issues"
                    },
                    {
                        "id": "cs802-cc-u5t2",
                        "title": "Identity & Access Management"
                    },
                    {
                        "id": "cs802-cc-u5t3",
                        "title": "Disaster Recovery & Availability"
                    },
                    {
                        "id": "cs802-cc-u5t4",
                        "title": "Cloud Monitoring & Governance"
                    }
                ]
            }
        ]
    },
    {
        "id": "cs803-ip",
        "semester": 8,
        "title": "Image Processing & Computer Vision",
        "code": "CS-803(A)",
        "description": "Digital image fundamentals, enhancement, filtering, restoration, segmentation, morphology, features and recognition.",
        "generated": true,
        "references": [
            {
                "title": "Digital Image Processing",
                "author": "Gonzalez & Woods"
            },
            {
                "title": "Computer Vision: Algorithms and Applications",
                "author": "Richard Szeliski"
            },
            {
                "title": "Fundamentals of Digital Image Processing",
                "author": "Anil K. Jain"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/cs803-ip/notes/cs803-ip-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/cs803-ip/notes/cs803-ip-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/cs803-ip/mock-papers/cs803-ip-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/cs803-ip/mock-papers/cs803-ip-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/cs803-ip/mock-papers/cs803-ip-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "cs803-ip-u1",
                "unitNumber": 1,
                "title": "Digital Image Fundamentals",
                "topics": [
                    {
                        "id": "cs803-ip-u1t1",
                        "title": "Image Formation & Representation"
                    },
                    {
                        "id": "cs803-ip-u1t2",
                        "title": "Resolution & Colour Models"
                    },
                    {
                        "id": "cs803-ip-u1t3",
                        "title": "Pixel Relationships"
                    },
                    {
                        "id": "cs803-ip-u1t4",
                        "title": "Image Processing Pipeline"
                    }
                ]
            },
            {
                "id": "cs803-ip-u2",
                "unitNumber": 2,
                "title": "Image Enhancement",
                "topics": [
                    {
                        "id": "cs803-ip-u2t1",
                        "title": "Intensity Transformations"
                    },
                    {
                        "id": "cs803-ip-u2t2",
                        "title": "Histogram Processing"
                    },
                    {
                        "id": "cs803-ip-u2t3",
                        "title": "Spatial Filtering"
                    },
                    {
                        "id": "cs803-ip-u2t4",
                        "title": "Frequency Domain Filtering"
                    }
                ]
            },
            {
                "id": "cs803-ip-u3",
                "unitNumber": 3,
                "title": "Restoration & Compression",
                "topics": [
                    {
                        "id": "cs803-ip-u3t1",
                        "title": "Noise Models"
                    },
                    {
                        "id": "cs803-ip-u3t2",
                        "title": "Restoration Filters"
                    },
                    {
                        "id": "cs803-ip-u3t3",
                        "title": "Image Compression Fundamentals"
                    },
                    {
                        "id": "cs803-ip-u3t4",
                        "title": "JPEG & Transform Coding"
                    }
                ]
            },
            {
                "id": "cs803-ip-u4",
                "unitNumber": 4,
                "title": "Segmentation & Morphology",
                "topics": [
                    {
                        "id": "cs803-ip-u4t1",
                        "title": "Edge Detection"
                    },
                    {
                        "id": "cs803-ip-u4t2",
                        "title": "Thresholding & Region-based Segmentation"
                    },
                    {
                        "id": "cs803-ip-u4t3",
                        "title": "Morphological Operations"
                    },
                    {
                        "id": "cs803-ip-u4t4",
                        "title": "Hough Transform"
                    }
                ]
            },
            {
                "id": "cs803-ip-u5",
                "unitNumber": 5,
                "title": "Features & Recognition",
                "topics": [
                    {
                        "id": "cs803-ip-u5t1",
                        "title": "Feature Extraction"
                    },
                    {
                        "id": "cs803-ip-u5t2",
                        "title": "Pattern Recognition Basics"
                    },
                    {
                        "id": "cs803-ip-u5t3",
                        "title": "CNNs for Vision"
                    },
                    {
                        "id": "cs803-ip-u5t4",
                        "title": "Vision Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "it402",
        "semester": 4,
        "title": "Analog & Digital Communication",
        "code": "CSIT-402",
        "description": "Signals, AM/FM modulation, sampling, pulse modulation, digital modulation and information theory.",
        "generated": true,
        "references": [
            {
                "title": "Communication Systems",
                "author": "Simon Haykin"
            },
            {
                "title": "Modern Digital and Analog Communication Systems",
                "author": "B. P. Lathi"
            },
            {
                "title": "Electronic Communication Systems",
                "author": "George Kennedy"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/it402/notes/it402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/it402/notes/it402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/it402/mock-papers/it402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/it402/mock-papers/it402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/it402/mock-papers/it402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "it402-u1",
                "unitNumber": 1,
                "title": "Signals & Spectra",
                "topics": [
                    {
                        "id": "it402-u1t1",
                        "title": "Signals & Classification"
                    },
                    {
                        "id": "it402-u1t2",
                        "title": "Fourier Analysis of Signals"
                    },
                    {
                        "id": "it402-u1t3",
                        "title": "Communication System Model"
                    },
                    {
                        "id": "it402-u1t4",
                        "title": "Noise"
                    }
                ]
            },
            {
                "id": "it402-u2",
                "unitNumber": 2,
                "title": "Analog Modulation",
                "topics": [
                    {
                        "id": "it402-u2t1",
                        "title": "Amplitude Modulation"
                    },
                    {
                        "id": "it402-u2t2",
                        "title": "DSB-SC & SSB"
                    },
                    {
                        "id": "it402-u2t3",
                        "title": "Frequency & Phase Modulation"
                    },
                    {
                        "id": "it402-u2t4",
                        "title": "Radio Receivers"
                    }
                ]
            },
            {
                "id": "it402-u3",
                "unitNumber": 3,
                "title": "Sampling & Pulse Modulation",
                "topics": [
                    {
                        "id": "it402-u3t1",
                        "title": "Sampling Theorem"
                    },
                    {
                        "id": "it402-u3t2",
                        "title": "PAM, PWM & PPM"
                    },
                    {
                        "id": "it402-u3t3",
                        "title": "Pulse Code Modulation"
                    },
                    {
                        "id": "it402-u3t4",
                        "title": "Delta & Adaptive Delta Modulation"
                    }
                ]
            },
            {
                "id": "it402-u4",
                "unitNumber": 4,
                "title": "Digital Modulation",
                "topics": [
                    {
                        "id": "it402-u4t1",
                        "title": "ASK, FSK & PSK"
                    },
                    {
                        "id": "it402-u4t2",
                        "title": "QPSK & QAM"
                    },
                    {
                        "id": "it402-u4t3",
                        "title": "Line Coding"
                    },
                    {
                        "id": "it402-u4t4",
                        "title": "Multiplexing"
                    }
                ]
            },
            {
                "id": "it402-u5",
                "unitNumber": 5,
                "title": "Information Theory & Coding",
                "topics": [
                    {
                        "id": "it402-u5t1",
                        "title": "Information & Entropy"
                    },
                    {
                        "id": "it402-u5t2",
                        "title": "Channel Capacity"
                    },
                    {
                        "id": "it402-u5t3",
                        "title": "Source Coding"
                    },
                    {
                        "id": "it402-u5t4",
                        "title": "Error Control Coding"
                    }
                ]
            }
        ]
    },
    {
        "id": "it504-ai",
        "semester": 5,
        "title": "Artificial Intelligence",
        "code": "CSIT-504(B)",
        "description": "Intelligent agents, search, knowledge representation, reasoning under uncertainty, learning and expert systems.",
        "generated": true,
        "references": [
            {
                "title": "Artificial Intelligence: A Modern Approach",
                "author": "Russell & Norvig"
            },
            {
                "title": "Artificial Intelligence",
                "author": "Elaine Rich & Kevin Knight"
            },
            {
                "title": "Introduction to Artificial Intelligence and Expert Systems",
                "author": "Dan W. Patterson"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/it504-ai/notes/it504-ai-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/it504-ai/notes/it504-ai-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/it504-ai/mock-papers/it504-ai-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/it504-ai/mock-papers/it504-ai-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/it504-ai/mock-papers/it504-ai-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "it504-ai-u1",
                "unitNumber": 1,
                "title": "Introduction & Intelligent Agents",
                "topics": [
                    {
                        "id": "it504-ai-u1t1",
                        "title": "Foundations of AI"
                    },
                    {
                        "id": "it504-ai-u1t2",
                        "title": "Intelligent Agents"
                    },
                    {
                        "id": "it504-ai-u1t3",
                        "title": "Environment Types"
                    },
                    {
                        "id": "it504-ai-u1t4",
                        "title": "Agent Architectures"
                    }
                ]
            },
            {
                "id": "it504-ai-u2",
                "unitNumber": 2,
                "title": "Search Strategies",
                "topics": [
                    {
                        "id": "it504-ai-u2t1",
                        "title": "Problem Formulation & Uninformed Search"
                    },
                    {
                        "id": "it504-ai-u2t2",
                        "title": "Heuristic Search"
                    },
                    {
                        "id": "it504-ai-u2t3",
                        "title": "Local Search"
                    },
                    {
                        "id": "it504-ai-u2t4",
                        "title": "Adversarial Search"
                    }
                ]
            },
            {
                "id": "it504-ai-u3",
                "unitNumber": 3,
                "title": "Knowledge Representation & Reasoning",
                "topics": [
                    {
                        "id": "it504-ai-u3t1",
                        "title": "Propositional & First-Order Logic"
                    },
                    {
                        "id": "it504-ai-u3t2",
                        "title": "Forward & Backward Chaining"
                    },
                    {
                        "id": "it504-ai-u3t3",
                        "title": "Semantic Networks & Frames"
                    },
                    {
                        "id": "it504-ai-u3t4",
                        "title": "Planning"
                    }
                ]
            },
            {
                "id": "it504-ai-u4",
                "unitNumber": 4,
                "title": "Uncertainty & Learning",
                "topics": [
                    {
                        "id": "it504-ai-u4t1",
                        "title": "Probabilistic Reasoning"
                    },
                    {
                        "id": "it504-ai-u4t2",
                        "title": "Bayesian Networks"
                    },
                    {
                        "id": "it504-ai-u4t3",
                        "title": "Fuzzy Logic"
                    },
                    {
                        "id": "it504-ai-u4t4",
                        "title": "Machine Learning Overview"
                    }
                ]
            },
            {
                "id": "it504-ai-u5",
                "unitNumber": 5,
                "title": "Expert Systems & Applications",
                "topics": [
                    {
                        "id": "it504-ai-u5t1",
                        "title": "Expert Systems"
                    },
                    {
                        "id": "it504-ai-u5t2",
                        "title": "Natural Language Processing Basics"
                    },
                    {
                        "id": "it504-ai-u5t3",
                        "title": "Neural Networks & Deep Learning"
                    },
                    {
                        "id": "it504-ai-u5t4",
                        "title": "AI Ethics & Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "it702-nlp",
        "semester": 7,
        "title": "Natural Language Processing",
        "code": "CSIT-702(D)",
        "description": "Text processing, language models, POS tagging, parsing, semantics, embeddings and transformer-based NLP.",
        "generated": true,
        "references": [
            {
                "title": "Speech and Language Processing",
                "author": "Jurafsky & Martin"
            },
            {
                "title": "Foundations of Statistical NLP",
                "author": "Manning & Schütze"
            },
            {
                "title": "Natural Language Processing with Python",
                "author": "Bird, Klein & Loper"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/it702-nlp/notes/it702-nlp-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/it702-nlp/notes/it702-nlp-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/it702-nlp/mock-papers/it702-nlp-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/it702-nlp/mock-papers/it702-nlp-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/it702-nlp/mock-papers/it702-nlp-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "it702-nlp-u1",
                "unitNumber": 1,
                "title": "Text Processing Basics",
                "topics": [
                    {
                        "id": "it702-nlp-u1t1",
                        "title": "NLP Pipeline & Challenges"
                    },
                    {
                        "id": "it702-nlp-u1t2",
                        "title": "Tokenisation & Normalisation"
                    },
                    {
                        "id": "it702-nlp-u1t3",
                        "title": "Regular Expressions & Edit Distance"
                    },
                    {
                        "id": "it702-nlp-u1t4",
                        "title": "Morphology"
                    }
                ]
            },
            {
                "id": "it702-nlp-u2",
                "unitNumber": 2,
                "title": "Language Modelling",
                "topics": [
                    {
                        "id": "it702-nlp-u2t1",
                        "title": "N-gram Language Models"
                    },
                    {
                        "id": "it702-nlp-u2t2",
                        "title": "Smoothing"
                    },
                    {
                        "id": "it702-nlp-u2t3",
                        "title": "Perplexity & Evaluation"
                    },
                    {
                        "id": "it702-nlp-u2t4",
                        "title": "Neural Language Models"
                    }
                ]
            },
            {
                "id": "it702-nlp-u3",
                "unitNumber": 3,
                "title": "Syntax & Parsing",
                "topics": [
                    {
                        "id": "it702-nlp-u3t1",
                        "title": "Part-of-Speech Tagging"
                    },
                    {
                        "id": "it702-nlp-u3t2",
                        "title": "Context-Free Grammars"
                    },
                    {
                        "id": "it702-nlp-u3t3",
                        "title": "Parsing Algorithms"
                    },
                    {
                        "id": "it702-nlp-u3t4",
                        "title": "Named Entity Recognition & Chunking"
                    }
                ]
            },
            {
                "id": "it702-nlp-u4",
                "unitNumber": 4,
                "title": "Semantics & Embeddings",
                "topics": [
                    {
                        "id": "it702-nlp-u4t1",
                        "title": "Lexical Semantics"
                    },
                    {
                        "id": "it702-nlp-u4t2",
                        "title": "Vector Semantics"
                    },
                    {
                        "id": "it702-nlp-u4t3",
                        "title": "Word Embeddings"
                    },
                    {
                        "id": "it702-nlp-u4t4",
                        "title": "Semantic Role Labelling & Coreference"
                    }
                ]
            },
            {
                "id": "it702-nlp-u5",
                "unitNumber": 5,
                "title": "Transformers & Applications",
                "topics": [
                    {
                        "id": "it702-nlp-u5t1",
                        "title": "Attention & Transformers"
                    },
                    {
                        "id": "it702-nlp-u5t2",
                        "title": "Pretrained Language Models"
                    },
                    {
                        "id": "it702-nlp-u5t3",
                        "title": "Machine Translation & Summarisation"
                    },
                    {
                        "id": "it702-nlp-u5t4",
                        "title": "Question Answering, Chatbots & Sentiment"
                    }
                ]
            }
        ]
    },
    {
        "id": "it801",
        "semester": 8,
        "title": "Data Science",
        "code": "CSIT-801",
        "description": "Data science lifecycle, statistics, data wrangling, exploratory analysis, machine learning, visualisation and big data tools.",
        "generated": true,
        "references": [
            {
                "title": "Data Science from Scratch",
                "author": "Joel Grus"
            },
            {
                "title": "Python for Data Analysis",
                "author": "Wes McKinney"
            },
            {
                "title": "An Introduction to Statistical Learning",
                "author": "James, Witten, Hastie & Tibshirani"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/it801/notes/it801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/it801/notes/it801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/it801/mock-papers/it801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/it801/mock-papers/it801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/it801/mock-papers/it801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "it801-u1",
                "unitNumber": 1,
                "title": "Introduction & Data Science Lifecycle",
                "topics": [
                    {
                        "id": "it801-u1t1",
                        "title": "What is Data Science?"
                    },
                    {
                        "id": "it801-u1t2",
                        "title": "Types of Data"
                    },
                    {
                        "id": "it801-u1t3",
                        "title": "Data Collection & Sources"
                    },
                    {
                        "id": "it801-u1t4",
                        "title": "Tools of Data Science"
                    }
                ]
            },
            {
                "id": "it801-u2",
                "unitNumber": 2,
                "title": "Statistics for Data Science",
                "topics": [
                    {
                        "id": "it801-u2t1",
                        "title": "Descriptive Statistics"
                    },
                    {
                        "id": "it801-u2t2",
                        "title": "Probability & Distributions"
                    },
                    {
                        "id": "it801-u2t3",
                        "title": "Hypothesis Testing"
                    },
                    {
                        "id": "it801-u2t4",
                        "title": "Correlation & Regression"
                    }
                ]
            },
            {
                "id": "it801-u3",
                "unitNumber": 3,
                "title": "Data Wrangling & Exploration",
                "topics": [
                    {
                        "id": "it801-u3t1",
                        "title": "Data Cleaning"
                    },
                    {
                        "id": "it801-u3t2",
                        "title": "Data Transformation"
                    },
                    {
                        "id": "it801-u3t3",
                        "title": "Exploratory Data Analysis"
                    },
                    {
                        "id": "it801-u3t4",
                        "title": "Feature Engineering"
                    }
                ]
            },
            {
                "id": "it801-u4",
                "unitNumber": 4,
                "title": "Machine Learning for Data Science",
                "topics": [
                    {
                        "id": "it801-u4t1",
                        "title": "Supervised Learning Models"
                    },
                    {
                        "id": "it801-u4t2",
                        "title": "Unsupervised Learning"
                    },
                    {
                        "id": "it801-u4t3",
                        "title": "Model Evaluation"
                    },
                    {
                        "id": "it801-u4t4",
                        "title": "Overfitting & Regularisation"
                    }
                ]
            },
            {
                "id": "it801-u5",
                "unitNumber": 5,
                "title": "Visualisation, Big Data & Ethics",
                "topics": [
                    {
                        "id": "it801-u5t1",
                        "title": "Data Visualisation Principles"
                    },
                    {
                        "id": "it801-u5t2",
                        "title": "Visualisation Tools"
                    },
                    {
                        "id": "it801-u5t3",
                        "title": "Big Data Tools"
                    },
                    {
                        "id": "it801-u5t4",
                        "title": "Data Ethics & Privacy"
                    }
                ]
            }
        ]
    },
    {
        "id": "it802-dwm",
        "semester": 8,
        "title": "Data Warehousing & Mining",
        "code": "CSIT-802(A)",
        "description": "Data warehouse architecture, OLAP, preprocessing, association rules, classification, clustering and web mining.",
        "generated": true,
        "references": [
            {
                "title": "Data Mining: Concepts and Techniques",
                "author": "Han, Kamber & Pei"
            },
            {
                "title": "Introduction to Data Mining",
                "author": "Tan, Steinbach & Kumar"
            },
            {
                "title": "Building the Data Warehouse",
                "author": "W. H. Inmon"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/it802-dwm/notes/it802-dwm-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/it802-dwm/notes/it802-dwm-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/it802-dwm/mock-papers/it802-dwm-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/it802-dwm/mock-papers/it802-dwm-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/it802-dwm/mock-papers/it802-dwm-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "it802-dwm-u1",
                "unitNumber": 1,
                "title": "Data Warehousing Concepts",
                "topics": [
                    {
                        "id": "it802-dwm-u1t1",
                        "title": "Data Warehouse Fundamentals"
                    },
                    {
                        "id": "it802-dwm-u1t2",
                        "title": "Warehouse Architecture"
                    },
                    {
                        "id": "it802-dwm-u1t3",
                        "title": "Multidimensional Data Model"
                    },
                    {
                        "id": "it802-dwm-u1t4",
                        "title": "Schemas for Warehouses"
                    }
                ]
            },
            {
                "id": "it802-dwm-u2",
                "unitNumber": 2,
                "title": "OLAP & Preprocessing",
                "topics": [
                    {
                        "id": "it802-dwm-u2t1",
                        "title": "OLAP Operations"
                    },
                    {
                        "id": "it802-dwm-u2t2",
                        "title": "OLAP Servers"
                    },
                    {
                        "id": "it802-dwm-u2t3",
                        "title": "Data Preprocessing"
                    },
                    {
                        "id": "it802-dwm-u2t4",
                        "title": "Data Reduction & Discretisation"
                    }
                ]
            },
            {
                "id": "it802-dwm-u3",
                "unitNumber": 3,
                "title": "Association Rule Mining",
                "topics": [
                    {
                        "id": "it802-dwm-u3t1",
                        "title": "Frequent Itemsets"
                    },
                    {
                        "id": "it802-dwm-u3t2",
                        "title": "Apriori Algorithm"
                    },
                    {
                        "id": "it802-dwm-u3t3",
                        "title": "FP-Growth"
                    },
                    {
                        "id": "it802-dwm-u3t4",
                        "title": "Interestingness Measures"
                    }
                ]
            },
            {
                "id": "it802-dwm-u4",
                "unitNumber": 4,
                "title": "Classification",
                "topics": [
                    {
                        "id": "it802-dwm-u4t1",
                        "title": "Decision Tree Induction"
                    },
                    {
                        "id": "it802-dwm-u4t2",
                        "title": "Bayesian Classification"
                    },
                    {
                        "id": "it802-dwm-u4t3",
                        "title": "Rule-based & Lazy Learners"
                    },
                    {
                        "id": "it802-dwm-u4t4",
                        "title": "Classifier Evaluation"
                    }
                ]
            },
            {
                "id": "it802-dwm-u5",
                "unitNumber": 5,
                "title": "Clustering & Advanced Mining",
                "topics": [
                    {
                        "id": "it802-dwm-u5t1",
                        "title": "Partitioning Methods"
                    },
                    {
                        "id": "it802-dwm-u5t2",
                        "title": "Hierarchical & Density-based Methods"
                    },
                    {
                        "id": "it802-dwm-u5t3",
                        "title": "Outlier Analysis"
                    },
                    {
                        "id": "it802-dwm-u5t4",
                        "title": "Web, Text & Spatial Mining"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec302",
        "semester": 3,
        "title": "Electronic Measurement & Instrumentation",
        "code": "EC-302",
        "description": "Measurement errors, analog and digital meters, bridges, oscilloscopes, transducers and data acquisition.",
        "generated": true,
        "references": [
            {
                "title": "Electronic Instrumentation",
                "author": "H. S. Kalsi"
            },
            {
                "title": "A Course in Electrical and Electronic Measurements and Instrumentation",
                "author": "A. K. Sawhney"
            },
            {
                "title": "Modern Electronic Instrumentation and Measurement Techniques",
                "author": "Helfrick & Cooper"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec302/notes/ec302-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec302/notes/ec302-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec302/mock-papers/ec302-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec302/mock-papers/ec302-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec302/mock-papers/ec302-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec302-u1",
                "unitNumber": 1,
                "title": "Measurement Fundamentals",
                "topics": [
                    {
                        "id": "ec302-u1t1",
                        "title": "Characteristics of Instruments"
                    },
                    {
                        "id": "ec302-u1t2",
                        "title": "Errors in Measurement"
                    },
                    {
                        "id": "ec302-u1t3",
                        "title": "Standards & Calibration"
                    },
                    {
                        "id": "ec302-u1t4",
                        "title": "Statistical Analysis of Data"
                    }
                ]
            },
            {
                "id": "ec302-u2",
                "unitNumber": 2,
                "title": "Analog & Digital Meters",
                "topics": [
                    {
                        "id": "ec302-u2t1",
                        "title": "PMMC Instruments"
                    },
                    {
                        "id": "ec302-u2t2",
                        "title": "Moving Iron & Electrodynamometer Instruments"
                    },
                    {
                        "id": "ec302-u2t3",
                        "title": "Digital Voltmeters"
                    },
                    {
                        "id": "ec302-u2t4",
                        "title": "Digital Multimeter & Frequency Counter"
                    }
                ]
            },
            {
                "id": "ec302-u3",
                "unitNumber": 3,
                "title": "Bridges",
                "topics": [
                    {
                        "id": "ec302-u3t1",
                        "title": "DC Bridges"
                    },
                    {
                        "id": "ec302-u3t2",
                        "title": "AC Bridges for Inductance"
                    },
                    {
                        "id": "ec302-u3t3",
                        "title": "AC Bridges for Capacitance & Frequency"
                    },
                    {
                        "id": "ec302-u3t4",
                        "title": "Q-meter"
                    }
                ]
            },
            {
                "id": "ec302-u4",
                "unitNumber": 4,
                "title": "Oscilloscopes & Signal Generators",
                "topics": [
                    {
                        "id": "ec302-u4t1",
                        "title": "Cathode Ray Oscilloscope"
                    },
                    {
                        "id": "ec302-u4t2",
                        "title": "Lissajous Patterns & Measurements"
                    },
                    {
                        "id": "ec302-u4t3",
                        "title": "Digital Storage Oscilloscope"
                    },
                    {
                        "id": "ec302-u4t4",
                        "title": "Signal Generators & Analysers"
                    }
                ]
            },
            {
                "id": "ec302-u5",
                "unitNumber": 5,
                "title": "Transducers & Data Acquisition",
                "topics": [
                    {
                        "id": "ec302-u5t1",
                        "title": "Transducer Classification"
                    },
                    {
                        "id": "ec302-u5t2",
                        "title": "Strain Gauges & LVDT"
                    },
                    {
                        "id": "ec302-u5t3",
                        "title": "Temperature & Pressure Transducers"
                    },
                    {
                        "id": "ec302-u5t4",
                        "title": "Data Acquisition Systems"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec303",
        "semester": 3,
        "title": "Digital System Design",
        "code": "EC-303",
        "description": "Logic minimisation, combinational and sequential design, state machines, memories, PLDs and logic families.",
        "generated": true,
        "references": [
            {
                "title": "Digital Design",
                "author": "M. Morris Mano"
            },
            {
                "title": "Fundamentals of Logic Design",
                "author": "Charles H. Roth"
            },
            {
                "title": "Modern Digital Electronics",
                "author": "R. P. Jain"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec303/notes/ec303-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec303/notes/ec303-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec303/mock-papers/ec303-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec303/mock-papers/ec303-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec303/mock-papers/ec303-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec303-u1",
                "unitNumber": 1,
                "title": "Logic Simplification",
                "topics": [
                    {
                        "id": "ec303-u1t1",
                        "title": "Boolean Algebra Review"
                    },
                    {
                        "id": "ec303-u1t2",
                        "title": "K-Map Minimisation"
                    },
                    {
                        "id": "ec303-u1t3",
                        "title": "Quine-McCluskey Method"
                    },
                    {
                        "id": "ec303-u1t4",
                        "title": "Hazards in Combinational Circuits"
                    }
                ]
            },
            {
                "id": "ec303-u2",
                "unitNumber": 2,
                "title": "Combinational Design",
                "topics": [
                    {
                        "id": "ec303-u2t1",
                        "title": "Arithmetic Circuits"
                    },
                    {
                        "id": "ec303-u2t2",
                        "title": "MUX & DEMUX Design"
                    },
                    {
                        "id": "ec303-u2t3",
                        "title": "Decoders & Encoders"
                    },
                    {
                        "id": "ec303-u2t4",
                        "title": "Comparators & ALU Design"
                    }
                ]
            },
            {
                "id": "ec303-u3",
                "unitNumber": 3,
                "title": "Sequential Circuits",
                "topics": [
                    {
                        "id": "ec303-u3t1",
                        "title": "Flip-Flops"
                    },
                    {
                        "id": "ec303-u3t2",
                        "title": "Counters"
                    },
                    {
                        "id": "ec303-u3t3",
                        "title": "Shift Registers"
                    },
                    {
                        "id": "ec303-u3t4",
                        "title": "Timing & Clocking"
                    }
                ]
            },
            {
                "id": "ec303-u4",
                "unitNumber": 4,
                "title": "Finite State Machines",
                "topics": [
                    {
                        "id": "ec303-u4t1",
                        "title": "Mealy & Moore Machines"
                    },
                    {
                        "id": "ec303-u4t2",
                        "title": "State Reduction & Assignment"
                    },
                    {
                        "id": "ec303-u4t3",
                        "title": "Sequence Detector Design"
                    },
                    {
                        "id": "ec303-u4t4",
                        "title": "Asynchronous Sequential Circuits"
                    }
                ]
            },
            {
                "id": "ec303-u5",
                "unitNumber": 5,
                "title": "Memories, PLDs & HDL",
                "topics": [
                    {
                        "id": "ec303-u5t1",
                        "title": "Semiconductor Memories"
                    },
                    {
                        "id": "ec303-u5t2",
                        "title": "Programmable Logic Devices"
                    },
                    {
                        "id": "ec303-u5t3",
                        "title": "Logic Families"
                    },
                    {
                        "id": "ec303-u5t4",
                        "title": "Introduction to Verilog/VHDL"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec304",
        "semester": 3,
        "title": "Electronic Devices",
        "code": "EC-304",
        "description": "Semiconductor physics, PN junction, BJT, FET and MOSFET, special diodes and optoelectronic devices.",
        "generated": true,
        "references": [
            {
                "title": "Solid State Electronic Devices",
                "author": "Streetman & Banerjee"
            },
            {
                "title": "Electronic Devices and Circuit Theory",
                "author": "Boylestad & Nashelsky"
            },
            {
                "title": "Integrated Electronics",
                "author": "Millman & Halkias"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec304/notes/ec304-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec304/notes/ec304-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec304/mock-papers/ec304-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec304/mock-papers/ec304-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec304/mock-papers/ec304-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec304-u1",
                "unitNumber": 1,
                "title": "Semiconductor Material Properties",
                "topics": [
                    {
                        "id": "ec304-u1t1",
                        "title": "Energy Bands & Carriers"
                    },
                    {
                        "id": "ec304-u1t2",
                        "title": "Doping & Extrinsic Semiconductors"
                    },
                    {
                        "id": "ec304-u1t3",
                        "title": "Carrier Transport"
                    },
                    {
                        "id": "ec304-u1t4",
                        "title": "Hall Effect & Carrier Lifetime"
                    }
                ]
            },
            {
                "id": "ec304-u2",
                "unitNumber": 2,
                "title": "PN Junction Diode",
                "topics": [
                    {
                        "id": "ec304-u2t1",
                        "title": "PN Junction Formation"
                    },
                    {
                        "id": "ec304-u2t2",
                        "title": "Diode Characteristics"
                    },
                    {
                        "id": "ec304-u2t3",
                        "title": "Diode Capacitances & Breakdown"
                    },
                    {
                        "id": "ec304-u2t4",
                        "title": "Rectifiers & Clippers"
                    }
                ]
            },
            {
                "id": "ec304-u3",
                "unitNumber": 3,
                "title": "Bipolar Junction Transistor",
                "topics": [
                    {
                        "id": "ec304-u3t1",
                        "title": "BJT Construction & Operation"
                    },
                    {
                        "id": "ec304-u3t2",
                        "title": "BJT Configurations"
                    },
                    {
                        "id": "ec304-u3t3",
                        "title": "BJT Biasing"
                    },
                    {
                        "id": "ec304-u3t4",
                        "title": "BJT Small-signal Models"
                    }
                ]
            },
            {
                "id": "ec304-u4",
                "unitNumber": 4,
                "title": "Field Effect Transistors",
                "topics": [
                    {
                        "id": "ec304-u4t1",
                        "title": "JFET"
                    },
                    {
                        "id": "ec304-u4t2",
                        "title": "MOSFET"
                    },
                    {
                        "id": "ec304-u4t3",
                        "title": "FET Biasing & Small-signal Model"
                    },
                    {
                        "id": "ec304-u4t4",
                        "title": "CMOS & Comparison of Devices"
                    }
                ]
            },
            {
                "id": "ec304-u5",
                "unitNumber": 5,
                "title": "Special Semiconductor Devices",
                "topics": [
                    {
                        "id": "ec304-u5t1",
                        "title": "Zener Diode & Regulators"
                    },
                    {
                        "id": "ec304-u5t2",
                        "title": "Tunnel & Varactor Diodes"
                    },
                    {
                        "id": "ec304-u5t3",
                        "title": "Optoelectronic Devices"
                    },
                    {
                        "id": "ec304-u5t4",
                        "title": "Thyristors"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec305",
        "semester": 3,
        "title": "Network Analysis",
        "code": "EC-305",
        "description": "Circuit laws, network theorems, transient analysis, Laplace methods, two-port networks and filters.",
        "generated": true,
        "references": [
            {
                "title": "Network Analysis",
                "author": "M. E. Van Valkenburg"
            },
            {
                "title": "Engineering Circuit Analysis",
                "author": "Hayt, Kemmerly & Durbin"
            },
            {
                "title": "Circuit Theory",
                "author": "A. Chakrabarti"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec305/notes/ec305-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec305/notes/ec305-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec305/mock-papers/ec305-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec305/mock-papers/ec305-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec305/mock-papers/ec305-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec305-u1",
                "unitNumber": 1,
                "title": "Circuit Fundamentals",
                "topics": [
                    {
                        "id": "ec305-u1t1",
                        "title": "Circuit Elements & Sources"
                    },
                    {
                        "id": "ec305-u1t2",
                        "title": "Kirchhoff's Laws"
                    },
                    {
                        "id": "ec305-u1t3",
                        "title": "Mesh & Nodal Analysis"
                    },
                    {
                        "id": "ec305-u1t4",
                        "title": "Graph Theory of Networks"
                    }
                ]
            },
            {
                "id": "ec305-u2",
                "unitNumber": 2,
                "title": "Network Theorems",
                "topics": [
                    {
                        "id": "ec305-u2t1",
                        "title": "Superposition & Linearity"
                    },
                    {
                        "id": "ec305-u2t2",
                        "title": "Thevenin & Norton Theorems"
                    },
                    {
                        "id": "ec305-u2t3",
                        "title": "Maximum Power Transfer"
                    },
                    {
                        "id": "ec305-u2t4",
                        "title": "Reciprocity, Millman & Tellegen"
                    }
                ]
            },
            {
                "id": "ec305-u3",
                "unitNumber": 3,
                "title": "Transient Analysis",
                "topics": [
                    {
                        "id": "ec305-u3t1",
                        "title": "RL & RC Transients"
                    },
                    {
                        "id": "ec305-u3t2",
                        "title": "RLC Transients"
                    },
                    {
                        "id": "ec305-u3t3",
                        "title": "Laplace Transform in Circuits"
                    },
                    {
                        "id": "ec305-u3t4",
                        "title": "Step & Impulse Response"
                    }
                ]
            },
            {
                "id": "ec305-u4",
                "unitNumber": 4,
                "title": "Network Functions & Two-port Networks",
                "topics": [
                    {
                        "id": "ec305-u4t1",
                        "title": "Network Functions"
                    },
                    {
                        "id": "ec305-u4t2",
                        "title": "Z & Y Parameters"
                    },
                    {
                        "id": "ec305-u4t3",
                        "title": "h & ABCD Parameters"
                    },
                    {
                        "id": "ec305-u4t4",
                        "title": "Interconnection of Two-ports"
                    }
                ]
            },
            {
                "id": "ec305-u5",
                "unitNumber": 5,
                "title": "Resonance & Filters",
                "topics": [
                    {
                        "id": "ec305-u5t1",
                        "title": "Series Resonance"
                    },
                    {
                        "id": "ec305-u5t2",
                        "title": "Parallel Resonance"
                    },
                    {
                        "id": "ec305-u5t3",
                        "title": "Passive Filters"
                    },
                    {
                        "id": "ec305-u5t4",
                        "title": "Attenuators & Coupled Circuits"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec402",
        "semester": 3,
        "title": "Signals & Systems",
        "code": "EC-402",
        "description": "Signal classification, LTI systems, convolution, Fourier series and transforms, Laplace and Z-transforms, sampling.",
        "generated": true,
        "references": [
            {
                "title": "Signals and Systems",
                "author": "Oppenheim, Willsky & Nawab"
            },
            {
                "title": "Signals and Systems",
                "author": "Simon Haykin & Barry Van Veen"
            },
            {
                "title": "Principles of Linear Systems and Signals",
                "author": "B. P. Lathi"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec402/notes/ec402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec402/notes/ec402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec402/mock-papers/ec402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec402/mock-papers/ec402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec402/mock-papers/ec402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec402-u1",
                "unitNumber": 1,
                "title": "Signals & Their Classification",
                "topics": [
                    {
                        "id": "ec402-u1t1",
                        "title": "Continuous & Discrete Signals"
                    },
                    {
                        "id": "ec402-u1t2",
                        "title": "Elementary Signals"
                    },
                    {
                        "id": "ec402-u1t3",
                        "title": "Signal Operations"
                    },
                    {
                        "id": "ec402-u1t4",
                        "title": "Even, Odd, Energy & Power Signals"
                    }
                ]
            },
            {
                "id": "ec402-u2",
                "unitNumber": 2,
                "title": "LTI Systems",
                "topics": [
                    {
                        "id": "ec402-u2t1",
                        "title": "System Properties"
                    },
                    {
                        "id": "ec402-u2t2",
                        "title": "Convolution"
                    },
                    {
                        "id": "ec402-u2t3",
                        "title": "Stability & Impulse Response"
                    },
                    {
                        "id": "ec402-u2t4",
                        "title": "Difference & Differential Equations"
                    }
                ]
            },
            {
                "id": "ec402-u3",
                "unitNumber": 3,
                "title": "Fourier Analysis",
                "topics": [
                    {
                        "id": "ec402-u3t1",
                        "title": "Fourier Series"
                    },
                    {
                        "id": "ec402-u3t2",
                        "title": "Continuous-time Fourier Transform"
                    },
                    {
                        "id": "ec402-u3t3",
                        "title": "Discrete-time Fourier Transform"
                    },
                    {
                        "id": "ec402-u3t4",
                        "title": "DFT & FFT"
                    }
                ]
            },
            {
                "id": "ec402-u4",
                "unitNumber": 4,
                "title": "Laplace & Z-Transform",
                "topics": [
                    {
                        "id": "ec402-u4t1",
                        "title": "Laplace Transform & ROC"
                    },
                    {
                        "id": "ec402-u4t2",
                        "title": "Z-Transform"
                    },
                    {
                        "id": "ec402-u4t3",
                        "title": "Inverse Z-Transform"
                    },
                    {
                        "id": "ec402-u4t4",
                        "title": "System Analysis with Transforms"
                    }
                ]
            },
            {
                "id": "ec402-u5",
                "unitNumber": 5,
                "title": "Sampling & Correlation",
                "topics": [
                    {
                        "id": "ec402-u5t1",
                        "title": "Sampling Theorem"
                    },
                    {
                        "id": "ec402-u5t2",
                        "title": "Reconstruction"
                    },
                    {
                        "id": "ec402-u5t3",
                        "title": "Correlation"
                    },
                    {
                        "id": "ec402-u5t4",
                        "title": "Random Signals"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec403",
        "semester": 4,
        "title": "Analog Communication",
        "code": "EC-403",
        "description": "Amplitude, angle and pulse modulation, transmitters, receivers, noise and performance.",
        "generated": true,
        "references": [
            {
                "title": "Communication Systems",
                "author": "Simon Haykin"
            },
            {
                "title": "Electronic Communication Systems",
                "author": "George Kennedy"
            },
            {
                "title": "Principles of Communication Systems",
                "author": "Taub & Schilling"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec403/notes/ec403-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec403/notes/ec403-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec403/mock-papers/ec403-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec403/mock-papers/ec403-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec403/mock-papers/ec403-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec403-u1",
                "unitNumber": 1,
                "title": "Amplitude Modulation",
                "topics": [
                    {
                        "id": "ec403-u1t1",
                        "title": "AM Fundamentals"
                    },
                    {
                        "id": "ec403-u1t2",
                        "title": "AM Generation"
                    },
                    {
                        "id": "ec403-u1t3",
                        "title": "AM Detection"
                    },
                    {
                        "id": "ec403-u1t4",
                        "title": "DSB-SC, SSB & VSB"
                    }
                ]
            },
            {
                "id": "ec403-u2",
                "unitNumber": 2,
                "title": "Angle Modulation",
                "topics": [
                    {
                        "id": "ec403-u2t1",
                        "title": "Frequency Modulation"
                    },
                    {
                        "id": "ec403-u2t2",
                        "title": "FM Spectrum & Bandwidth"
                    },
                    {
                        "id": "ec403-u2t3",
                        "title": "FM Generation"
                    },
                    {
                        "id": "ec403-u2t4",
                        "title": "FM Detection"
                    }
                ]
            },
            {
                "id": "ec403-u3",
                "unitNumber": 3,
                "title": "Transmitters & Receivers",
                "topics": [
                    {
                        "id": "ec403-u3t1",
                        "title": "AM & FM Transmitters"
                    },
                    {
                        "id": "ec403-u3t2",
                        "title": "Tuned Radio Frequency Receiver"
                    },
                    {
                        "id": "ec403-u3t3",
                        "title": "Superheterodyne Receiver"
                    },
                    {
                        "id": "ec403-u3t4",
                        "title": "AGC & Receiver Characteristics"
                    }
                ]
            },
            {
                "id": "ec403-u4",
                "unitNumber": 4,
                "title": "Noise in Communication",
                "topics": [
                    {
                        "id": "ec403-u4t1",
                        "title": "Sources of Noise"
                    },
                    {
                        "id": "ec403-u4t2",
                        "title": "Noise Figure & Temperature"
                    },
                    {
                        "id": "ec403-u4t3",
                        "title": "Noise in AM Systems"
                    },
                    {
                        "id": "ec403-u4t4",
                        "title": "Noise in FM Systems"
                    }
                ]
            },
            {
                "id": "ec403-u5",
                "unitNumber": 5,
                "title": "Pulse Modulation & Multiplexing",
                "topics": [
                    {
                        "id": "ec403-u5t1",
                        "title": "Sampling & PAM"
                    },
                    {
                        "id": "ec403-u5t2",
                        "title": "PWM & PPM"
                    },
                    {
                        "id": "ec403-u5t3",
                        "title": "Frequency Division Multiplexing"
                    },
                    {
                        "id": "ec403-u5t4",
                        "title": "Time Division Multiplexing"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec404",
        "semester": 4,
        "title": "Control System",
        "code": "EC-404",
        "description": "Control system modelling, time response, stability, root locus, frequency response and state-space analysis.",
        "generated": true,
        "references": [
            {
                "title": "Control Systems Engineering",
                "author": "I. J. Nagrath & M. Gopal"
            },
            {
                "title": "Modern Control Engineering",
                "author": "Katsuhiko Ogata"
            },
            {
                "title": "Automatic Control Systems",
                "author": "Benjamin C. Kuo"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec404/notes/ec404-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec404/notes/ec404-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec404/mock-papers/ec404-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec404/mock-papers/ec404-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec404/mock-papers/ec404-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec404-u1",
                "unitNumber": 1,
                "title": "Introduction & Modelling",
                "topics": [
                    {
                        "id": "ec404-u1t1",
                        "title": "Control System Basics"
                    },
                    {
                        "id": "ec404-u1t2",
                        "title": "Transfer Function"
                    },
                    {
                        "id": "ec404-u1t3",
                        "title": "Block Diagram Reduction"
                    },
                    {
                        "id": "ec404-u1t4",
                        "title": "Signal Flow Graph & Mason's Gain"
                    }
                ]
            },
            {
                "id": "ec404-u2",
                "unitNumber": 2,
                "title": "Time Response Analysis",
                "topics": [
                    {
                        "id": "ec404-u2t1",
                        "title": "Standard Test Signals"
                    },
                    {
                        "id": "ec404-u2t2",
                        "title": "First & Second Order Response"
                    },
                    {
                        "id": "ec404-u2t3",
                        "title": "Time-domain Specifications"
                    },
                    {
                        "id": "ec404-u2t4",
                        "title": "Steady-state Error"
                    }
                ]
            },
            {
                "id": "ec404-u3",
                "unitNumber": 3,
                "title": "Stability Analysis",
                "topics": [
                    {
                        "id": "ec404-u3t1",
                        "title": "Concept of Stability"
                    },
                    {
                        "id": "ec404-u3t2",
                        "title": "Routh-Hurwitz Criterion"
                    },
                    {
                        "id": "ec404-u3t3",
                        "title": "Root Locus"
                    },
                    {
                        "id": "ec404-u3t4",
                        "title": "Effect of Adding Poles & Zeros"
                    }
                ]
            },
            {
                "id": "ec404-u4",
                "unitNumber": 4,
                "title": "Frequency Response Analysis",
                "topics": [
                    {
                        "id": "ec404-u4t1",
                        "title": "Frequency-domain Specifications"
                    },
                    {
                        "id": "ec404-u4t2",
                        "title": "Bode Plot"
                    },
                    {
                        "id": "ec404-u4t3",
                        "title": "Gain & Phase Margin"
                    },
                    {
                        "id": "ec404-u4t4",
                        "title": "Nyquist & Polar Plots"
                    }
                ]
            },
            {
                "id": "ec404-u5",
                "unitNumber": 5,
                "title": "Controllers & State Space",
                "topics": [
                    {
                        "id": "ec404-u5t1",
                        "title": "Compensators"
                    },
                    {
                        "id": "ec404-u5t2",
                        "title": "PID Controllers"
                    },
                    {
                        "id": "ec404-u5t3",
                        "title": "State-space Representation"
                    },
                    {
                        "id": "ec404-u5t4",
                        "title": "Controllability & Observability"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec405",
        "semester": 3,
        "title": "Analog Circuits",
        "code": "EC-405",
        "description": "Amplifier frequency response, feedback, oscillators, power amplifiers, op-amps and their applications.",
        "generated": true,
        "references": [
            {
                "title": "Microelectronic Circuits",
                "author": "Sedra & Smith"
            },
            {
                "title": "Integrated Electronics",
                "author": "Millman & Halkias"
            },
            {
                "title": "Op-Amps and Linear Integrated Circuits",
                "author": "Ramakant Gayakwad"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec405/notes/ec405-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec405/notes/ec405-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec405/mock-papers/ec405-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec405/mock-papers/ec405-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec405/mock-papers/ec405-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec405-u1",
                "unitNumber": 1,
                "title": "Amplifier Frequency Response",
                "topics": [
                    {
                        "id": "ec405-u1t1",
                        "title": "Multistage Amplifiers"
                    },
                    {
                        "id": "ec405-u1t2",
                        "title": "Low-frequency Response"
                    },
                    {
                        "id": "ec405-u1t3",
                        "title": "High-frequency Response"
                    },
                    {
                        "id": "ec405-u1t4",
                        "title": "Cascode & Darlington Amplifiers"
                    }
                ]
            },
            {
                "id": "ec405-u2",
                "unitNumber": 2,
                "title": "Feedback Amplifiers",
                "topics": [
                    {
                        "id": "ec405-u2t1",
                        "title": "Negative Feedback Concepts"
                    },
                    {
                        "id": "ec405-u2t2",
                        "title": "Feedback Topologies"
                    },
                    {
                        "id": "ec405-u2t3",
                        "title": "Effect of Feedback"
                    },
                    {
                        "id": "ec405-u2t4",
                        "title": "Stability of Feedback Amplifiers"
                    }
                ]
            },
            {
                "id": "ec405-u3",
                "unitNumber": 3,
                "title": "Oscillators",
                "topics": [
                    {
                        "id": "ec405-u3t1",
                        "title": "Oscillator Principles"
                    },
                    {
                        "id": "ec405-u3t2",
                        "title": "RC Oscillators"
                    },
                    {
                        "id": "ec405-u3t3",
                        "title": "LC Oscillators"
                    },
                    {
                        "id": "ec405-u3t4",
                        "title": "Crystal Oscillators"
                    }
                ]
            },
            {
                "id": "ec405-u4",
                "unitNumber": 4,
                "title": "Power Amplifiers & Tuned Amplifiers",
                "topics": [
                    {
                        "id": "ec405-u4t1",
                        "title": "Classification of Power Amplifiers"
                    },
                    {
                        "id": "ec405-u4t2",
                        "title": "Push-Pull Amplifiers"
                    },
                    {
                        "id": "ec405-u4t3",
                        "title": "Complementary Symmetry & Heat Sinks"
                    },
                    {
                        "id": "ec405-u4t4",
                        "title": "Tuned Amplifiers"
                    }
                ]
            },
            {
                "id": "ec405-u5",
                "unitNumber": 5,
                "title": "Operational Amplifiers",
                "topics": [
                    {
                        "id": "ec405-u5t1",
                        "title": "Op-amp Characteristics"
                    },
                    {
                        "id": "ec405-u5t2",
                        "title": "Basic Op-amp Circuits"
                    },
                    {
                        "id": "ec405-u5t3",
                        "title": "Op-amp Applications"
                    },
                    {
                        "id": "ec405-u5t4",
                        "title": "Comparators, Filters & 555 Timer"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec501",
        "semester": 5,
        "title": "Microprocessor & Its Applications",
        "code": "EC-501",
        "description": "8085 and 8086 architecture, instruction sets, assembly programming, interrupts and peripheral interfacing.",
        "generated": true,
        "references": [
            {
                "title": "Microprocessor Architecture, Programming and Applications with the 8085",
                "author": "Ramesh Gaonkar"
            },
            {
                "title": "Microprocessors and Interfacing",
                "author": "Douglas V. Hall"
            },
            {
                "title": "Advanced Microprocessors and Peripherals",
                "author": "A. K. Ray & K. M. Bhurchandi"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec501/notes/ec501-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec501/notes/ec501-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec501/mock-papers/ec501-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec501/mock-papers/ec501-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec501/mock-papers/ec501-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec501-u1",
                "unitNumber": 1,
                "title": "8085 Microprocessor",
                "topics": [
                    {
                        "id": "ec501-u1t1",
                        "title": "8085 Architecture"
                    },
                    {
                        "id": "ec501-u1t2",
                        "title": "8085 Pin Diagram & Buses"
                    },
                    {
                        "id": "ec501-u1t3",
                        "title": "Timing Diagrams"
                    },
                    {
                        "id": "ec501-u1t4",
                        "title": "8085 Interrupts"
                    }
                ]
            },
            {
                "id": "ec501-u2",
                "unitNumber": 2,
                "title": "8085 Instruction Set & Programming",
                "topics": [
                    {
                        "id": "ec501-u2t1",
                        "title": "Addressing Modes of 8085"
                    },
                    {
                        "id": "ec501-u2t2",
                        "title": "Data Transfer & Arithmetic Instructions"
                    },
                    {
                        "id": "ec501-u2t3",
                        "title": "Logical, Branch & Machine Control Instructions"
                    },
                    {
                        "id": "ec501-u2t4",
                        "title": "Stack & Subroutines"
                    }
                ]
            },
            {
                "id": "ec501-u3",
                "unitNumber": 3,
                "title": "8086 Microprocessor",
                "topics": [
                    {
                        "id": "ec501-u3t1",
                        "title": "8086 Architecture"
                    },
                    {
                        "id": "ec501-u3t2",
                        "title": "Memory Segmentation"
                    },
                    {
                        "id": "ec501-u3t3",
                        "title": "8086 Addressing Modes & Instructions"
                    },
                    {
                        "id": "ec501-u3t4",
                        "title": "Minimum & Maximum Mode"
                    }
                ]
            },
            {
                "id": "ec501-u4",
                "unitNumber": 4,
                "title": "Peripheral Interfacing",
                "topics": [
                    {
                        "id": "ec501-u4t1",
                        "title": "Memory & I/O Interfacing"
                    },
                    {
                        "id": "ec501-u4t2",
                        "title": "8255 PPI"
                    },
                    {
                        "id": "ec501-u4t3",
                        "title": "8253/8254 Timer & 8259 PIC"
                    },
                    {
                        "id": "ec501-u4t4",
                        "title": "8257 DMA & 8251 USART"
                    }
                ]
            },
            {
                "id": "ec501-u5",
                "unitNumber": 5,
                "title": "Applications & Microcontrollers",
                "topics": [
                    {
                        "id": "ec501-u5t1",
                        "title": "ADC & DAC Interfacing"
                    },
                    {
                        "id": "ec501-u5t2",
                        "title": "Display & Keyboard Interfacing"
                    },
                    {
                        "id": "ec501-u5t3",
                        "title": "Stepper Motor & Traffic Light Control"
                    },
                    {
                        "id": "ec501-u5t4",
                        "title": "Introduction to 8051 Microcontroller"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec502",
        "semester": 5,
        "title": "Digital Communication",
        "code": "EC-502",
        "description": "Pulse code modulation, baseband transmission, digital modulation, detection, spread spectrum and error control.",
        "generated": true,
        "references": [
            {
                "title": "Digital Communications",
                "author": "Simon Haykin"
            },
            {
                "title": "Digital Communications",
                "author": "John G. Proakis"
            },
            {
                "title": "Digital Communications: Fundamentals and Applications",
                "author": "Bernard Sklar"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec502/notes/ec502-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec502/notes/ec502-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec502/mock-papers/ec502-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec502/mock-papers/ec502-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec502/mock-papers/ec502-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec502-u1",
                "unitNumber": 1,
                "title": "Sampling & Waveform Coding",
                "topics": [
                    {
                        "id": "ec502-u1t1",
                        "title": "Sampling & Quantisation"
                    },
                    {
                        "id": "ec502-u1t2",
                        "title": "Pulse Code Modulation"
                    },
                    {
                        "id": "ec502-u1t3",
                        "title": "DPCM & Delta Modulation"
                    },
                    {
                        "id": "ec502-u1t4",
                        "title": "Line Codes & Spectra"
                    }
                ]
            },
            {
                "id": "ec502-u2",
                "unitNumber": 2,
                "title": "Baseband Transmission",
                "topics": [
                    {
                        "id": "ec502-u2t1",
                        "title": "Inter-symbol Interference"
                    },
                    {
                        "id": "ec502-u2t2",
                        "title": "Eye Diagram"
                    },
                    {
                        "id": "ec502-u2t3",
                        "title": "Equalisation"
                    },
                    {
                        "id": "ec502-u2t4",
                        "title": "Matched Filter"
                    }
                ]
            },
            {
                "id": "ec502-u3",
                "unitNumber": 3,
                "title": "Digital Modulation Techniques",
                "topics": [
                    {
                        "id": "ec502-u3t1",
                        "title": "Binary ASK, FSK & PSK"
                    },
                    {
                        "id": "ec502-u3t2",
                        "title": "DPSK & QPSK"
                    },
                    {
                        "id": "ec502-u3t3",
                        "title": "M-ary Modulation & QAM"
                    },
                    {
                        "id": "ec502-u3t4",
                        "title": "MSK & GMSK"
                    }
                ]
            },
            {
                "id": "ec502-u4",
                "unitNumber": 4,
                "title": "Detection & Performance",
                "topics": [
                    {
                        "id": "ec502-u4t1",
                        "title": "Optimum Detection"
                    },
                    {
                        "id": "ec502-u4t2",
                        "title": "Probability of Error"
                    },
                    {
                        "id": "ec502-u4t3",
                        "title": "Coherent & Non-coherent Detection"
                    },
                    {
                        "id": "ec502-u4t4",
                        "title": "Synchronisation"
                    }
                ]
            },
            {
                "id": "ec502-u5",
                "unitNumber": 5,
                "title": "Spread Spectrum & Error Control",
                "topics": [
                    {
                        "id": "ec502-u5t1",
                        "title": "Spread Spectrum Concepts"
                    },
                    {
                        "id": "ec502-u5t2",
                        "title": "DSSS & FHSS"
                    },
                    {
                        "id": "ec502-u5t3",
                        "title": "Linear Block Codes"
                    },
                    {
                        "id": "ec502-u5t4",
                        "title": "Convolutional Codes"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec503-mc",
        "semester": 5,
        "title": "Mobile Communication",
        "code": "EC-503(B)",
        "description": "Cellular concepts, frequency reuse, propagation, multiple access, GSM, CDMA and 4G/5G systems.",
        "generated": true,
        "references": [
            {
                "title": "Wireless Communications: Principles and Practice",
                "author": "Theodore S. Rappaport"
            },
            {
                "title": "Mobile Cellular Telecommunications",
                "author": "William C. Y. Lee"
            },
            {
                "title": "Wireless Communications",
                "author": "Andrea Goldsmith"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec503-mc/notes/ec503-mc-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec503-mc/notes/ec503-mc-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec503-mc/mock-papers/ec503-mc-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec503-mc/mock-papers/ec503-mc-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec503-mc/mock-papers/ec503-mc-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec503-mc-u1",
                "unitNumber": 1,
                "title": "Cellular Concept",
                "topics": [
                    {
                        "id": "ec503-mc-u1t1",
                        "title": "Evolution of Mobile Systems"
                    },
                    {
                        "id": "ec503-mc-u1t2",
                        "title": "Frequency Reuse"
                    },
                    {
                        "id": "ec503-mc-u1t3",
                        "title": "Channel Assignment & Handoff"
                    },
                    {
                        "id": "ec503-mc-u1t4",
                        "title": "Capacity Improvement"
                    }
                ]
            },
            {
                "id": "ec503-mc-u2",
                "unitNumber": 2,
                "title": "Mobile Radio Propagation",
                "topics": [
                    {
                        "id": "ec503-mc-u2t1",
                        "title": "Large-scale Path Loss"
                    },
                    {
                        "id": "ec503-mc-u2t2",
                        "title": "Reflection, Diffraction & Scattering"
                    },
                    {
                        "id": "ec503-mc-u2t3",
                        "title": "Small-scale Fading"
                    },
                    {
                        "id": "ec503-mc-u2t4",
                        "title": "Doppler & Delay Spread"
                    }
                ]
            },
            {
                "id": "ec503-mc-u3",
                "unitNumber": 3,
                "title": "Multiple Access & Diversity",
                "topics": [
                    {
                        "id": "ec503-mc-u3t1",
                        "title": "FDMA & TDMA"
                    },
                    {
                        "id": "ec503-mc-u3t2",
                        "title": "CDMA & OFDMA"
                    },
                    {
                        "id": "ec503-mc-u3t3",
                        "title": "Diversity Techniques"
                    },
                    {
                        "id": "ec503-mc-u3t4",
                        "title": "MIMO Basics"
                    }
                ]
            },
            {
                "id": "ec503-mc-u4",
                "unitNumber": 4,
                "title": "GSM & CDMA Systems",
                "topics": [
                    {
                        "id": "ec503-mc-u4t1",
                        "title": "GSM Architecture"
                    },
                    {
                        "id": "ec503-mc-u4t2",
                        "title": "GSM Channels & Frame Structure"
                    },
                    {
                        "id": "ec503-mc-u4t3",
                        "title": "GPRS & EDGE"
                    },
                    {
                        "id": "ec503-mc-u4t4",
                        "title": "IS-95 & CDMA2000"
                    }
                ]
            },
            {
                "id": "ec503-mc-u5",
                "unitNumber": 5,
                "title": "3G, 4G & 5G",
                "topics": [
                    {
                        "id": "ec503-mc-u5t1",
                        "title": "UMTS & WCDMA"
                    },
                    {
                        "id": "ec503-mc-u5t2",
                        "title": "LTE Architecture"
                    },
                    {
                        "id": "ec503-mc-u5t3",
                        "title": "5G Technologies"
                    },
                    {
                        "id": "ec503-mc-u5t4",
                        "title": "Mobile IP & Wireless Standards"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec504-emt",
        "semester": 5,
        "title": "Electromagnetic Theory",
        "code": "EC-504(A)",
        "description": "Vector analysis, electrostatics, magnetostatics, Maxwell's equations, plane waves and transmission lines.",
        "generated": true,
        "references": [
            {
                "title": "Elements of Electromagnetics",
                "author": "Matthew N. O. Sadiku"
            },
            {
                "title": "Engineering Electromagnetics",
                "author": "Hayt & Buck"
            },
            {
                "title": "Electromagnetic Waves and Radiating Systems",
                "author": "Jordan & Balmain"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec504-emt/notes/ec504-emt-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec504-emt/notes/ec504-emt-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec504-emt/mock-papers/ec504-emt-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec504-emt/mock-papers/ec504-emt-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec504-emt/mock-papers/ec504-emt-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec504-emt-u1",
                "unitNumber": 1,
                "title": "Vector Analysis & Electrostatics",
                "topics": [
                    {
                        "id": "ec504-emt-u1t1",
                        "title": "Vector Calculus"
                    },
                    {
                        "id": "ec504-emt-u1t2",
                        "title": "Coordinate Systems"
                    },
                    {
                        "id": "ec504-emt-u1t3",
                        "title": "Coulomb's Law & Electric Field"
                    },
                    {
                        "id": "ec504-emt-u1t4",
                        "title": "Gauss's Law & Potential"
                    }
                ]
            },
            {
                "id": "ec504-emt-u2",
                "unitNumber": 2,
                "title": "Dielectrics, Capacitance & Boundary Conditions",
                "topics": [
                    {
                        "id": "ec504-emt-u2t1",
                        "title": "Conductors & Dielectrics"
                    },
                    {
                        "id": "ec504-emt-u2t2",
                        "title": "Capacitance"
                    },
                    {
                        "id": "ec504-emt-u2t3",
                        "title": "Boundary Conditions"
                    },
                    {
                        "id": "ec504-emt-u2t4",
                        "title": "Poisson's & Laplace's Equations"
                    }
                ]
            },
            {
                "id": "ec504-emt-u3",
                "unitNumber": 3,
                "title": "Magnetostatics",
                "topics": [
                    {
                        "id": "ec504-emt-u3t1",
                        "title": "Biot-Savart Law"
                    },
                    {
                        "id": "ec504-emt-u3t2",
                        "title": "Ampere's Circuital Law"
                    },
                    {
                        "id": "ec504-emt-u3t3",
                        "title": "Magnetic Flux & Vector Potential"
                    },
                    {
                        "id": "ec504-emt-u3t4",
                        "title": "Magnetic Forces & Inductance"
                    }
                ]
            },
            {
                "id": "ec504-emt-u4",
                "unitNumber": 4,
                "title": "Maxwell's Equations & Plane Waves",
                "topics": [
                    {
                        "id": "ec504-emt-u4t1",
                        "title": "Faraday's Law & Displacement Current"
                    },
                    {
                        "id": "ec504-emt-u4t2",
                        "title": "Maxwell's Equations"
                    },
                    {
                        "id": "ec504-emt-u4t3",
                        "title": "Uniform Plane Waves"
                    },
                    {
                        "id": "ec504-emt-u4t4",
                        "title": "Wave Propagation in Media"
                    }
                ]
            },
            {
                "id": "ec504-emt-u5",
                "unitNumber": 5,
                "title": "Transmission Lines",
                "topics": [
                    {
                        "id": "ec504-emt-u5t1",
                        "title": "Transmission Line Parameters"
                    },
                    {
                        "id": "ec504-emt-u5t2",
                        "title": "Reflection & Standing Waves"
                    },
                    {
                        "id": "ec504-emt-u5t3",
                        "title": "Input Impedance & Special Lines"
                    },
                    {
                        "id": "ec504-emt-u5t4",
                        "title": "Smith Chart & Matching"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec601",
        "semester": 6,
        "title": "Digital Signal Processing",
        "code": "EC-601",
        "description": "Discrete-time systems, Z-transform, DFT/FFT, FIR and IIR filter design, multirate DSP and DSP processors.",
        "generated": true,
        "references": [
            {
                "title": "Digital Signal Processing: Principles, Algorithms and Applications",
                "author": "Proakis & Manolakis"
            },
            {
                "title": "Discrete-Time Signal Processing",
                "author": "Oppenheim & Schafer"
            },
            {
                "title": "Digital Signal Processing",
                "author": "S. K. Mitra"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec601/notes/ec601-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec601/notes/ec601-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec601/mock-papers/ec601-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec601/mock-papers/ec601-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec601/mock-papers/ec601-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec601-u1",
                "unitNumber": 1,
                "title": "Discrete-time Signals & Systems",
                "topics": [
                    {
                        "id": "ec601-u1t1",
                        "title": "Discrete-time Signals"
                    },
                    {
                        "id": "ec601-u1t2",
                        "title": "LTI Systems & Convolution"
                    },
                    {
                        "id": "ec601-u1t3",
                        "title": "Difference Equations"
                    },
                    {
                        "id": "ec601-u1t4",
                        "title": "Correlation of Sequences"
                    }
                ]
            },
            {
                "id": "ec601-u2",
                "unitNumber": 2,
                "title": "Z-Transform & Frequency Analysis",
                "topics": [
                    {
                        "id": "ec601-u2t1",
                        "title": "Z-Transform & ROC"
                    },
                    {
                        "id": "ec601-u2t2",
                        "title": "System Function & Pole-Zero Analysis"
                    },
                    {
                        "id": "ec601-u2t3",
                        "title": "Frequency Response"
                    },
                    {
                        "id": "ec601-u2t4",
                        "title": "Inverse Z-Transform"
                    }
                ]
            },
            {
                "id": "ec601-u3",
                "unitNumber": 3,
                "title": "DFT & FFT",
                "topics": [
                    {
                        "id": "ec601-u3t1",
                        "title": "Discrete Fourier Transform"
                    },
                    {
                        "id": "ec601-u3t2",
                        "title": "DFT Properties"
                    },
                    {
                        "id": "ec601-u3t3",
                        "title": "FFT Algorithms"
                    },
                    {
                        "id": "ec601-u3t4",
                        "title": "Linear Filtering via DFT"
                    }
                ]
            },
            {
                "id": "ec601-u4",
                "unitNumber": 4,
                "title": "Digital Filter Design",
                "topics": [
                    {
                        "id": "ec601-u4t1",
                        "title": "FIR Filter Design by Windowing"
                    },
                    {
                        "id": "ec601-u4t2",
                        "title": "Frequency Sampling Design"
                    },
                    {
                        "id": "ec601-u4t3",
                        "title": "IIR Filters from Analog Prototypes"
                    },
                    {
                        "id": "ec601-u4t4",
                        "title": "Bilinear & Impulse Invariant Transformation"
                    }
                ]
            },
            {
                "id": "ec601-u5",
                "unitNumber": 5,
                "title": "Filter Structures, Multirate & DSP Processors",
                "topics": [
                    {
                        "id": "ec601-u5t1",
                        "title": "Filter Realisation Structures"
                    },
                    {
                        "id": "ec601-u5t2",
                        "title": "Finite Word-length Effects"
                    },
                    {
                        "id": "ec601-u5t3",
                        "title": "Multirate Signal Processing"
                    },
                    {
                        "id": "ec601-u5t4",
                        "title": "DSP Processors"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec602",
        "semester": 6,
        "title": "Antennas & Wave Propagation",
        "code": "EC-602",
        "description": "Antenna parameters, radiation from dipoles, arrays, practical antennas, measurements and propagation modes.",
        "generated": true,
        "references": [
            {
                "title": "Antenna Theory: Analysis and Design",
                "author": "Constantine A. Balanis"
            },
            {
                "title": "Antennas and Wave Propagation",
                "author": "J. D. Kraus"
            },
            {
                "title": "Electromagnetic Waves and Radiating Systems",
                "author": "Jordan & Balmain"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec602/notes/ec602-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec602/notes/ec602-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec602/mock-papers/ec602-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec602/mock-papers/ec602-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec602/mock-papers/ec602-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec602-u1",
                "unitNumber": 1,
                "title": "Antenna Fundamentals",
                "topics": [
                    {
                        "id": "ec602-u1t1",
                        "title": "Radiation Mechanism"
                    },
                    {
                        "id": "ec602-u1t2",
                        "title": "Radiation Pattern & Beamwidth"
                    },
                    {
                        "id": "ec602-u1t3",
                        "title": "Directivity, Gain & Efficiency"
                    },
                    {
                        "id": "ec602-u1t4",
                        "title": "Radiation Resistance & Polarisation"
                    }
                ]
            },
            {
                "id": "ec602-u2",
                "unitNumber": 2,
                "title": "Wire Antennas",
                "topics": [
                    {
                        "id": "ec602-u2t1",
                        "title": "Hertzian Dipole"
                    },
                    {
                        "id": "ec602-u2t2",
                        "title": "Half-wave Dipole"
                    },
                    {
                        "id": "ec602-u2t3",
                        "title": "Monopole & Loop Antennas"
                    },
                    {
                        "id": "ec602-u2t4",
                        "title": "Travelling Wave Antennas"
                    }
                ]
            },
            {
                "id": "ec602-u3",
                "unitNumber": 3,
                "title": "Antenna Arrays",
                "topics": [
                    {
                        "id": "ec602-u3t1",
                        "title": "Array Fundamentals"
                    },
                    {
                        "id": "ec602-u3t2",
                        "title": "Broadside & End-fire Arrays"
                    },
                    {
                        "id": "ec602-u3t3",
                        "title": "Binomial & Phased Arrays"
                    },
                    {
                        "id": "ec602-u3t4",
                        "title": "Yagi-Uda Antenna"
                    }
                ]
            },
            {
                "id": "ec602-u4",
                "unitNumber": 4,
                "title": "Microwave & Special Antennas",
                "topics": [
                    {
                        "id": "ec602-u4t1",
                        "title": "Horn Antennas"
                    },
                    {
                        "id": "ec602-u4t2",
                        "title": "Parabolic Reflectors"
                    },
                    {
                        "id": "ec602-u4t3",
                        "title": "Microstrip Patch Antennas"
                    },
                    {
                        "id": "ec602-u4t4",
                        "title": "Antenna Measurements"
                    }
                ]
            },
            {
                "id": "ec602-u5",
                "unitNumber": 5,
                "title": "Wave Propagation",
                "topics": [
                    {
                        "id": "ec602-u5t1",
                        "title": "Ground Wave Propagation"
                    },
                    {
                        "id": "ec602-u5t2",
                        "title": "Sky Wave Propagation"
                    },
                    {
                        "id": "ec602-u5t3",
                        "title": "Space Wave Propagation"
                    },
                    {
                        "id": "ec602-u5t4",
                        "title": "Skip Distance & Fading"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec603-sat",
        "semester": 6,
        "title": "Satellite Communication",
        "code": "EC-603(C)",
        "description": "Orbital mechanics, satellite subsystems, link budget, multiple access, earth stations and satellite services.",
        "generated": true,
        "references": [
            {
                "title": "Satellite Communications",
                "author": "Timothy Pratt, Charles Bostian & Jeremy Allnutt"
            },
            {
                "title": "Satellite Communication",
                "author": "Dennis Roddy"
            },
            {
                "title": "Satellite Communications Systems",
                "author": "Maral & Bousquet"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec603-sat/notes/ec603-sat-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec603-sat/notes/ec603-sat-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec603-sat/mock-papers/ec603-sat-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec603-sat/mock-papers/ec603-sat-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec603-sat/mock-papers/ec603-sat-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec603-sat-u1",
                "unitNumber": 1,
                "title": "Orbital Mechanics",
                "topics": [
                    {
                        "id": "ec603-sat-u1t1",
                        "title": "Kepler's Laws"
                    },
                    {
                        "id": "ec603-sat-u1t2",
                        "title": "Types of Orbits"
                    },
                    {
                        "id": "ec603-sat-u1t3",
                        "title": "Orbital Elements & Perturbations"
                    },
                    {
                        "id": "ec603-sat-u1t4",
                        "title": "Look Angles & Launch"
                    }
                ]
            },
            {
                "id": "ec603-sat-u2",
                "unitNumber": 2,
                "title": "Satellite Subsystems",
                "topics": [
                    {
                        "id": "ec603-sat-u2t1",
                        "title": "Space Segment Overview"
                    },
                    {
                        "id": "ec603-sat-u2t2",
                        "title": "Attitude & Orbit Control"
                    },
                    {
                        "id": "ec603-sat-u2t3",
                        "title": "Power & Thermal Subsystems"
                    },
                    {
                        "id": "ec603-sat-u2t4",
                        "title": "Transponders & TTC"
                    }
                ]
            },
            {
                "id": "ec603-sat-u3",
                "unitNumber": 3,
                "title": "Link Design",
                "topics": [
                    {
                        "id": "ec603-sat-u3t1",
                        "title": "Frequency Bands"
                    },
                    {
                        "id": "ec603-sat-u3t2",
                        "title": "Link Budget"
                    },
                    {
                        "id": "ec603-sat-u3t3",
                        "title": "G/T & System Noise"
                    },
                    {
                        "id": "ec603-sat-u3t4",
                        "title": "Atmospheric Effects"
                    }
                ]
            },
            {
                "id": "ec603-sat-u4",
                "unitNumber": 4,
                "title": "Multiple Access",
                "topics": [
                    {
                        "id": "ec603-sat-u4t1",
                        "title": "FDMA in Satellites"
                    },
                    {
                        "id": "ec603-sat-u4t2",
                        "title": "TDMA in Satellites"
                    },
                    {
                        "id": "ec603-sat-u4t3",
                        "title": "CDMA & DAMA"
                    },
                    {
                        "id": "ec603-sat-u4t4",
                        "title": "VSAT Networks"
                    }
                ]
            },
            {
                "id": "ec603-sat-u5",
                "unitNumber": 5,
                "title": "Earth Stations & Applications",
                "topics": [
                    {
                        "id": "ec603-sat-u5t1",
                        "title": "Earth Station Design"
                    },
                    {
                        "id": "ec603-sat-u5t2",
                        "title": "Satellite Broadcasting"
                    },
                    {
                        "id": "ec603-sat-u5t3",
                        "title": "Navigation Satellites"
                    },
                    {
                        "id": "ec603-sat-u5t4",
                        "title": "Remote Sensing & Mobile Satellite Services"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec604-mes",
        "semester": 6,
        "title": "Microcontroller & Embedded Systems",
        "code": "EC-604(A)",
        "description": "8051 and ARM architecture, programming, interfacing, embedded design and RTOS.",
        "generated": true,
        "references": [
            {
                "title": "The 8051 Microcontroller and Embedded Systems",
                "author": "Mazidi, Mazidi & McKinlay"
            },
            {
                "title": "ARM System Developer's Guide",
                "author": "Sloss, Symes & Wright"
            },
            {
                "title": "Embedded Systems: Architecture, Programming and Design",
                "author": "Raj Kamal"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec604-mes/notes/ec604-mes-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec604-mes/notes/ec604-mes-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec604-mes/mock-papers/ec604-mes-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec604-mes/mock-papers/ec604-mes-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec604-mes/mock-papers/ec604-mes-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec604-mes-u1",
                "unitNumber": 1,
                "title": "8051 Architecture",
                "topics": [
                    {
                        "id": "ec604-mes-u1t1",
                        "title": "8051 Features"
                    },
                    {
                        "id": "ec604-mes-u1t2",
                        "title": "Memory Organisation"
                    },
                    {
                        "id": "ec604-mes-u1t3",
                        "title": "Ports & Pin Functions"
                    },
                    {
                        "id": "ec604-mes-u1t4",
                        "title": "Oscillator & Reset"
                    }
                ]
            },
            {
                "id": "ec604-mes-u2",
                "unitNumber": 2,
                "title": "8051 Programming",
                "topics": [
                    {
                        "id": "ec604-mes-u2t1",
                        "title": "Addressing Modes"
                    },
                    {
                        "id": "ec604-mes-u2t2",
                        "title": "Instruction Set"
                    },
                    {
                        "id": "ec604-mes-u2t3",
                        "title": "Embedded C for 8051"
                    },
                    {
                        "id": "ec604-mes-u2t4",
                        "title": "Assembler & Toolchain"
                    }
                ]
            },
            {
                "id": "ec604-mes-u3",
                "unitNumber": 3,
                "title": "Timers, Serial & Interrupts",
                "topics": [
                    {
                        "id": "ec604-mes-u3t1",
                        "title": "Timers & Counters"
                    },
                    {
                        "id": "ec604-mes-u3t2",
                        "title": "Serial Communication"
                    },
                    {
                        "id": "ec604-mes-u3t3",
                        "title": "Interrupts"
                    },
                    {
                        "id": "ec604-mes-u3t4",
                        "title": "Interfacing Peripherals"
                    }
                ]
            },
            {
                "id": "ec604-mes-u4",
                "unitNumber": 4,
                "title": "ARM & Advanced Microcontrollers",
                "topics": [
                    {
                        "id": "ec604-mes-u4t1",
                        "title": "ARM Architecture"
                    },
                    {
                        "id": "ec604-mes-u4t2",
                        "title": "ARM Registers & Modes"
                    },
                    {
                        "id": "ec604-mes-u4t3",
                        "title": "Cortex-M Features"
                    },
                    {
                        "id": "ec604-mes-u4t4",
                        "title": "Popular Development Platforms"
                    }
                ]
            },
            {
                "id": "ec604-mes-u5",
                "unitNumber": 5,
                "title": "Embedded System Design & RTOS",
                "topics": [
                    {
                        "id": "ec604-mes-u5t1",
                        "title": "Embedded System Characteristics"
                    },
                    {
                        "id": "ec604-mes-u5t2",
                        "title": "Embedded Design Process"
                    },
                    {
                        "id": "ec604-mes-u5t3",
                        "title": "RTOS Concepts"
                    },
                    {
                        "id": "ec604-mes-u5t4",
                        "title": "Inter-task Communication"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec701",
        "semester": 7,
        "title": "VLSI Design",
        "code": "EC-701",
        "description": "MOS physics, CMOS logic, fabrication, layout, combinational and sequential design, memories and design flow.",
        "generated": true,
        "references": [
            {
                "title": "CMOS VLSI Design",
                "author": "Weste & Harris"
            },
            {
                "title": "Digital Integrated Circuits",
                "author": "Rabaey, Chandrakasan & Nikolic"
            },
            {
                "title": "Basic VLSI Design",
                "author": "Pucknell & Eshraghian"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec701/notes/ec701-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec701/notes/ec701-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec701/mock-papers/ec701-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec701/mock-papers/ec701-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec701/mock-papers/ec701-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec701-u1",
                "unitNumber": 1,
                "title": "MOS Transistor Theory",
                "topics": [
                    {
                        "id": "ec701-u1t1",
                        "title": "MOSFET Structure & Operation"
                    },
                    {
                        "id": "ec701-u1t2",
                        "title": "I-V Characteristics"
                    },
                    {
                        "id": "ec701-u1t3",
                        "title": "Second-order Effects"
                    },
                    {
                        "id": "ec701-u1t4",
                        "title": "Scaling"
                    }
                ]
            },
            {
                "id": "ec701-u2",
                "unitNumber": 2,
                "title": "CMOS Logic & Fabrication",
                "topics": [
                    {
                        "id": "ec701-u2t1",
                        "title": "CMOS Inverter"
                    },
                    {
                        "id": "ec701-u2t2",
                        "title": "Static CMOS Gates"
                    },
                    {
                        "id": "ec701-u2t3",
                        "title": "Fabrication Process"
                    },
                    {
                        "id": "ec701-u2t4",
                        "title": "Layout & Design Rules"
                    }
                ]
            },
            {
                "id": "ec701-u3",
                "unitNumber": 3,
                "title": "Circuit Characterisation",
                "topics": [
                    {
                        "id": "ec701-u3t1",
                        "title": "Delay Estimation"
                    },
                    {
                        "id": "ec701-u3t2",
                        "title": "Power Dissipation"
                    },
                    {
                        "id": "ec701-u3t3",
                        "title": "Interconnect"
                    },
                    {
                        "id": "ec701-u3t4",
                        "title": "Low-power Design"
                    }
                ]
            },
            {
                "id": "ec701-u4",
                "unitNumber": 4,
                "title": "Combinational & Sequential Design",
                "topics": [
                    {
                        "id": "ec701-u4t1",
                        "title": "Pass Transistor & Transmission Gate Logic"
                    },
                    {
                        "id": "ec701-u4t2",
                        "title": "Dynamic Logic"
                    },
                    {
                        "id": "ec701-u4t3",
                        "title": "Latches & Flip-flops"
                    },
                    {
                        "id": "ec701-u4t4",
                        "title": "Datapath Elements"
                    }
                ]
            },
            {
                "id": "ec701-u5",
                "unitNumber": 5,
                "title": "Memories & Design Methodology",
                "topics": [
                    {
                        "id": "ec701-u5t1",
                        "title": "Semiconductor Memories"
                    },
                    {
                        "id": "ec701-u5t2",
                        "title": "Programmable Logic"
                    },
                    {
                        "id": "ec701-u5t3",
                        "title": "ASIC Design Flow"
                    },
                    {
                        "id": "ec701-u5t4",
                        "title": "Testing & Design for Testability"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec702-mw",
        "semester": 7,
        "title": "Microwave Engineering",
        "code": "EC-702(A)",
        "description": "Waveguides, microwave components, S-parameters, microwave tubes, solid-state devices and measurements.",
        "generated": true,
        "references": [
            {
                "title": "Microwave Engineering",
                "author": "David M. Pozar"
            },
            {
                "title": "Microwave Devices and Circuits",
                "author": "Samuel Y. Liao"
            },
            {
                "title": "Foundations for Microwave Engineering",
                "author": "R. E. Collin"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec702-mw/notes/ec702-mw-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec702-mw/notes/ec702-mw-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec702-mw/mock-papers/ec702-mw-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec702-mw/mock-papers/ec702-mw-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec702-mw/mock-papers/ec702-mw-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec702-mw-u1",
                "unitNumber": 1,
                "title": "Waveguides",
                "topics": [
                    {
                        "id": "ec702-mw-u1t1",
                        "title": "Rectangular Waveguides"
                    },
                    {
                        "id": "ec702-mw-u1t2",
                        "title": "Waveguide Parameters"
                    },
                    {
                        "id": "ec702-mw-u1t3",
                        "title": "Circular Waveguides & Cavities"
                    },
                    {
                        "id": "ec702-mw-u1t4",
                        "title": "Planar Transmission Lines"
                    }
                ]
            },
            {
                "id": "ec702-mw-u2",
                "unitNumber": 2,
                "title": "Microwave Components & S-parameters",
                "topics": [
                    {
                        "id": "ec702-mw-u2t1",
                        "title": "Scattering Parameters"
                    },
                    {
                        "id": "ec702-mw-u2t2",
                        "title": "Tee Junctions"
                    },
                    {
                        "id": "ec702-mw-u2t3",
                        "title": "Directional Couplers"
                    },
                    {
                        "id": "ec702-mw-u2t4",
                        "title": "Ferrite Devices"
                    }
                ]
            },
            {
                "id": "ec702-mw-u3",
                "unitNumber": 3,
                "title": "Microwave Tubes",
                "topics": [
                    {
                        "id": "ec702-mw-u3t1",
                        "title": "Limitations of Conventional Tubes"
                    },
                    {
                        "id": "ec702-mw-u3t2",
                        "title": "Klystrons"
                    },
                    {
                        "id": "ec702-mw-u3t3",
                        "title": "Magnetron"
                    },
                    {
                        "id": "ec702-mw-u3t4",
                        "title": "Travelling Wave Tube"
                    }
                ]
            },
            {
                "id": "ec702-mw-u4",
                "unitNumber": 4,
                "title": "Solid-state Microwave Devices",
                "topics": [
                    {
                        "id": "ec702-mw-u4t1",
                        "title": "Microwave Transistors"
                    },
                    {
                        "id": "ec702-mw-u4t2",
                        "title": "Transferred Electron Devices"
                    },
                    {
                        "id": "ec702-mw-u4t3",
                        "title": "Avalanche Transit-time Devices"
                    },
                    {
                        "id": "ec702-mw-u4t4",
                        "title": "PIN & Varactor Applications"
                    }
                ]
            },
            {
                "id": "ec702-mw-u5",
                "unitNumber": 5,
                "title": "Microwave Measurements & Applications",
                "topics": [
                    {
                        "id": "ec702-mw-u5t1",
                        "title": "Power Measurement"
                    },
                    {
                        "id": "ec702-mw-u5t2",
                        "title": "VSWR & Impedance Measurement"
                    },
                    {
                        "id": "ec702-mw-u5t3",
                        "title": "Frequency & Attenuation Measurement"
                    },
                    {
                        "id": "ec702-mw-u5t4",
                        "title": "Microwave Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec702-itc",
        "semester": 7,
        "title": "Information Theory & Coding",
        "code": "EC-702(B)",
        "description": "Entropy, source coding, channel capacity, block codes, cyclic codes, convolutional codes and modern codes.",
        "generated": true,
        "references": [
            {
                "title": "Elements of Information Theory",
                "author": "Cover & Thomas"
            },
            {
                "title": "Information Theory, Coding and Cryptography",
                "author": "Ranjan Bose"
            },
            {
                "title": "Error Control Coding",
                "author": "Shu Lin & Daniel Costello"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec702-itc/notes/ec702-itc-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec702-itc/notes/ec702-itc-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec702-itc/mock-papers/ec702-itc-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec702-itc/mock-papers/ec702-itc-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec702-itc/mock-papers/ec702-itc-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec702-itc-u1",
                "unitNumber": 1,
                "title": "Information & Entropy",
                "topics": [
                    {
                        "id": "ec702-itc-u1t1",
                        "title": "Measure of Information"
                    },
                    {
                        "id": "ec702-itc-u1t2",
                        "title": "Entropy"
                    },
                    {
                        "id": "ec702-itc-u1t3",
                        "title": "Joint & Conditional Entropy"
                    },
                    {
                        "id": "ec702-itc-u1t4",
                        "title": "Mutual Information"
                    }
                ]
            },
            {
                "id": "ec702-itc-u2",
                "unitNumber": 2,
                "title": "Source Coding",
                "topics": [
                    {
                        "id": "ec702-itc-u2t1",
                        "title": "Source Coding Theorem"
                    },
                    {
                        "id": "ec702-itc-u2t2",
                        "title": "Prefix Codes & Kraft Inequality"
                    },
                    {
                        "id": "ec702-itc-u2t3",
                        "title": "Shannon-Fano & Huffman Coding"
                    },
                    {
                        "id": "ec702-itc-u2t4",
                        "title": "Lempel-Ziv & Arithmetic Coding"
                    }
                ]
            },
            {
                "id": "ec702-itc-u3",
                "unitNumber": 3,
                "title": "Channel Capacity",
                "topics": [
                    {
                        "id": "ec702-itc-u3t1",
                        "title": "Discrete Memoryless Channels"
                    },
                    {
                        "id": "ec702-itc-u3t2",
                        "title": "Channel Capacity"
                    },
                    {
                        "id": "ec702-itc-u3t3",
                        "title": "Shannon-Hartley Theorem"
                    },
                    {
                        "id": "ec702-itc-u3t4",
                        "title": "Channel Coding Theorem"
                    }
                ]
            },
            {
                "id": "ec702-itc-u4",
                "unitNumber": 4,
                "title": "Linear Block & Cyclic Codes",
                "topics": [
                    {
                        "id": "ec702-itc-u4t1",
                        "title": "Linear Block Codes"
                    },
                    {
                        "id": "ec702-itc-u4t2",
                        "title": "Syndrome Decoding & Hamming Codes"
                    },
                    {
                        "id": "ec702-itc-u4t3",
                        "title": "Cyclic Codes"
                    },
                    {
                        "id": "ec702-itc-u4t4",
                        "title": "BCH & Reed-Solomon Codes"
                    }
                ]
            },
            {
                "id": "ec702-itc-u5",
                "unitNumber": 5,
                "title": "Convolutional & Modern Codes",
                "topics": [
                    {
                        "id": "ec702-itc-u5t1",
                        "title": "Convolutional Encoding"
                    },
                    {
                        "id": "ec702-itc-u5t2",
                        "title": "Viterbi Decoding"
                    },
                    {
                        "id": "ec702-itc-u5t3",
                        "title": "Interleaving & Concatenated Codes"
                    },
                    {
                        "id": "ec702-itc-u5t4",
                        "title": "Turbo & LDPC Codes"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec801",
        "semester": 8,
        "title": "Optical Fibre Communication",
        "code": "EC-801",
        "description": "Light propagation, fibre types, losses and dispersion, sources, detectors, links and WDM.",
        "generated": true,
        "references": [
            {
                "title": "Optical Fiber Communications",
                "author": "Gerd Keiser"
            },
            {
                "title": "Optical Fiber Communications: Principles and Practice",
                "author": "John M. Senior"
            },
            {
                "title": "Fiber-Optic Communication Systems",
                "author": "Govind P. Agrawal"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec801/notes/ec801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec801/notes/ec801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec801/mock-papers/ec801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec801/mock-papers/ec801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec801/mock-papers/ec801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec801-u1",
                "unitNumber": 1,
                "title": "Optical Fibre Fundamentals",
                "topics": [
                    {
                        "id": "ec801-u1t1",
                        "title": "Optical Communication Overview"
                    },
                    {
                        "id": "ec801-u1t2",
                        "title": "Total Internal Reflection"
                    },
                    {
                        "id": "ec801-u1t3",
                        "title": "Numerical Aperture & Acceptance Angle"
                    },
                    {
                        "id": "ec801-u1t4",
                        "title": "Modes & V-number"
                    }
                ]
            },
            {
                "id": "ec801-u2",
                "unitNumber": 2,
                "title": "Fibre Types & Transmission Characteristics",
                "topics": [
                    {
                        "id": "ec801-u2t1",
                        "title": "Step-index & Graded-index Fibres"
                    },
                    {
                        "id": "ec801-u2t2",
                        "title": "Attenuation"
                    },
                    {
                        "id": "ec801-u2t3",
                        "title": "Dispersion"
                    },
                    {
                        "id": "ec801-u2t4",
                        "title": "Bending & Splicing Losses"
                    }
                ]
            },
            {
                "id": "ec801-u3",
                "unitNumber": 3,
                "title": "Optical Sources",
                "topics": [
                    {
                        "id": "ec801-u3t1",
                        "title": "LED Sources"
                    },
                    {
                        "id": "ec801-u3t2",
                        "title": "Laser Diodes"
                    },
                    {
                        "id": "ec801-u3t3",
                        "title": "Laser Types"
                    },
                    {
                        "id": "ec801-u3t4",
                        "title": "Modulation of Sources"
                    }
                ]
            },
            {
                "id": "ec801-u4",
                "unitNumber": 4,
                "title": "Optical Detectors & Receivers",
                "topics": [
                    {
                        "id": "ec801-u4t1",
                        "title": "Photodetector Principles"
                    },
                    {
                        "id": "ec801-u4t2",
                        "title": "PIN & APD Photodiodes"
                    },
                    {
                        "id": "ec801-u4t3",
                        "title": "Receiver Noise & Sensitivity"
                    },
                    {
                        "id": "ec801-u4t4",
                        "title": "Receiver Structures"
                    }
                ]
            },
            {
                "id": "ec801-u5",
                "unitNumber": 5,
                "title": "Optical Links & Networks",
                "topics": [
                    {
                        "id": "ec801-u5t1",
                        "title": "Link Power Budget"
                    },
                    {
                        "id": "ec801-u5t2",
                        "title": "Rise Time Budget"
                    },
                    {
                        "id": "ec801-u5t3",
                        "title": "WDM & Optical Amplifiers"
                    },
                    {
                        "id": "ec801-u5t4",
                        "title": "Optical Networks"
                    }
                ]
            }
        ]
    },
    {
        "id": "ec802-wc",
        "semester": 8,
        "title": "Wireless Communication",
        "code": "EC-802(B)",
        "description": "Wireless channels, fading, diversity, OFDM, MIMO, multiple access and wireless standards.",
        "generated": true,
        "references": [
            {
                "title": "Wireless Communications",
                "author": "Andrea Goldsmith"
            },
            {
                "title": "Fundamentals of Wireless Communication",
                "author": "Tse & Viswanath"
            },
            {
                "title": "Wireless Communications: Principles and Practice",
                "author": "Theodore S. Rappaport"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ec802-wc/notes/ec802-wc-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ec802-wc/notes/ec802-wc-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ec802-wc/mock-papers/ec802-wc-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ec802-wc/mock-papers/ec802-wc-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ec802-wc/mock-papers/ec802-wc-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ec802-wc-u1",
                "unitNumber": 1,
                "title": "Wireless Channel",
                "topics": [
                    {
                        "id": "ec802-wc-u1t1",
                        "title": "Path Loss Models"
                    },
                    {
                        "id": "ec802-wc-u1t2",
                        "title": "Multipath Fading"
                    },
                    {
                        "id": "ec802-wc-u1t3",
                        "title": "Doppler Spread & Coherence Time"
                    },
                    {
                        "id": "ec802-wc-u1t4",
                        "title": "Channel Models"
                    }
                ]
            },
            {
                "id": "ec802-wc-u2",
                "unitNumber": 2,
                "title": "Diversity & Equalisation",
                "topics": [
                    {
                        "id": "ec802-wc-u2t1",
                        "title": "Diversity Types"
                    },
                    {
                        "id": "ec802-wc-u2t2",
                        "title": "Combining Techniques"
                    },
                    {
                        "id": "ec802-wc-u2t3",
                        "title": "Equalisation"
                    },
                    {
                        "id": "ec802-wc-u2t4",
                        "title": "Channel Estimation"
                    }
                ]
            },
            {
                "id": "ec802-wc-u3",
                "unitNumber": 3,
                "title": "OFDM & MIMO",
                "topics": [
                    {
                        "id": "ec802-wc-u3t1",
                        "title": "OFDM Principles"
                    },
                    {
                        "id": "ec802-wc-u3t2",
                        "title": "OFDM Issues"
                    },
                    {
                        "id": "ec802-wc-u3t3",
                        "title": "MIMO Channel & Capacity"
                    },
                    {
                        "id": "ec802-wc-u3t4",
                        "title": "Space-time Coding"
                    }
                ]
            },
            {
                "id": "ec802-wc-u4",
                "unitNumber": 4,
                "title": "Multiple Access & Spread Spectrum",
                "topics": [
                    {
                        "id": "ec802-wc-u4t1",
                        "title": "Multiple Access Techniques"
                    },
                    {
                        "id": "ec802-wc-u4t2",
                        "title": "CDMA & Spread Spectrum"
                    },
                    {
                        "id": "ec802-wc-u4t3",
                        "title": "Random Access"
                    },
                    {
                        "id": "ec802-wc-u4t4",
                        "title": "NOMA & Cognitive Radio"
                    }
                ]
            },
            {
                "id": "ec802-wc-u5",
                "unitNumber": 5,
                "title": "Wireless Standards & Networks",
                "topics": [
                    {
                        "id": "ec802-wc-u5t1",
                        "title": "Wireless LAN"
                    },
                    {
                        "id": "ec802-wc-u5t2",
                        "title": "WPAN Technologies"
                    },
                    {
                        "id": "ec802-wc-u5t3",
                        "title": "Cellular Standards"
                    },
                    {
                        "id": "ec802-wc-u5t4",
                        "title": "Wireless Sensor Networks"
                    }
                ]
            }
        ]
    },
    {
        "id": "me302",
        "semester": 3,
        "title": "Thermodynamics",
        "code": "ME-302",
        "description": "Basic concepts, first and second laws, entropy, properties of steam, gas cycles and availability.",
        "generated": true,
        "references": [
            {
                "title": "Engineering Thermodynamics",
                "author": "P. K. Nag"
            },
            {
                "title": "Thermodynamics: An Engineering Approach",
                "author": "Cengel & Boles"
            },
            {
                "title": "Fundamentals of Classical Thermodynamics",
                "author": "Van Wylen & Sonntag"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me302/notes/me302-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me302/notes/me302-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me302/mock-papers/me302-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me302/mock-papers/me302-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me302/mock-papers/me302-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me302-u1",
                "unitNumber": 1,
                "title": "Basic Concepts & Zeroth Law",
                "topics": [
                    {
                        "id": "me302-u1t1",
                        "title": "System, Surroundings & Properties"
                    },
                    {
                        "id": "me302-u1t2",
                        "title": "State, Process & Cycle"
                    },
                    {
                        "id": "me302-u1t3",
                        "title": "Zeroth Law & Temperature"
                    },
                    {
                        "id": "me302-u1t4",
                        "title": "Work & Heat"
                    }
                ]
            },
            {
                "id": "me302-u2",
                "unitNumber": 2,
                "title": "First Law of Thermodynamics",
                "topics": [
                    {
                        "id": "me302-u2t1",
                        "title": "First Law for Closed Systems"
                    },
                    {
                        "id": "me302-u2t2",
                        "title": "Steady Flow Energy Equation"
                    },
                    {
                        "id": "me302-u2t3",
                        "title": "Applications of SFEE"
                    },
                    {
                        "id": "me302-u2t4",
                        "title": "PMM1 & Ideal Gas Processes"
                    }
                ]
            },
            {
                "id": "me302-u3",
                "unitNumber": 3,
                "title": "Second Law & Entropy",
                "topics": [
                    {
                        "id": "me302-u3t1",
                        "title": "Heat Engines & Heat Pumps"
                    },
                    {
                        "id": "me302-u3t2",
                        "title": "Kelvin-Planck & Clausius Statements"
                    },
                    {
                        "id": "me302-u3t3",
                        "title": "Carnot Cycle"
                    },
                    {
                        "id": "me302-u3t4",
                        "title": "Entropy"
                    }
                ]
            },
            {
                "id": "me302-u4",
                "unitNumber": 4,
                "title": "Properties of Pure Substances",
                "topics": [
                    {
                        "id": "me302-u4t1",
                        "title": "Phase Change of Water"
                    },
                    {
                        "id": "me302-u4t2",
                        "title": "Dryness Fraction & Steam Tables"
                    },
                    {
                        "id": "me302-u4t3",
                        "title": "T-s & h-s Diagrams"
                    },
                    {
                        "id": "me302-u4t4",
                        "title": "Measurement of Dryness Fraction"
                    }
                ]
            },
            {
                "id": "me302-u5",
                "unitNumber": 5,
                "title": "Gas Power Cycles & Availability",
                "topics": [
                    {
                        "id": "me302-u5t1",
                        "title": "Air Standard Cycles"
                    },
                    {
                        "id": "me302-u5t2",
                        "title": "Brayton Cycle"
                    },
                    {
                        "id": "me302-u5t3",
                        "title": "Mean Effective Pressure"
                    },
                    {
                        "id": "me302-u5t4",
                        "title": "Availability & Irreversibility"
                    }
                ]
            }
        ]
    },
    {
        "id": "me303",
        "semester": 3,
        "title": "Materials Technology",
        "code": "ME-303",
        "description": "Crystal structure, imperfections, phase diagrams, heat treatment, ferrous and non-ferrous alloys and material testing.",
        "generated": true,
        "references": [
            {
                "title": "Materials Science and Engineering",
                "author": "William D. Callister"
            },
            {
                "title": "Material Science and Metallurgy",
                "author": "O. P. Khanna"
            },
            {
                "title": "Physical Metallurgy",
                "author": "Vijendra Singh"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me303/notes/me303-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me303/notes/me303-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me303/mock-papers/me303-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me303/mock-papers/me303-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me303/mock-papers/me303-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me303-u1",
                "unitNumber": 1,
                "title": "Crystal Structure & Imperfections",
                "topics": [
                    {
                        "id": "me303-u1t1",
                        "title": "Crystal Structures"
                    },
                    {
                        "id": "me303-u1t2",
                        "title": "Miller Indices"
                    },
                    {
                        "id": "me303-u1t3",
                        "title": "Crystal Imperfections"
                    },
                    {
                        "id": "me303-u1t4",
                        "title": "Deformation & Strengthening"
                    }
                ]
            },
            {
                "id": "me303-u2",
                "unitNumber": 2,
                "title": "Phase Diagrams",
                "topics": [
                    {
                        "id": "me303-u2t1",
                        "title": "Solid Solutions & Phase Rule"
                    },
                    {
                        "id": "me303-u2t2",
                        "title": "Binary Phase Diagrams"
                    },
                    {
                        "id": "me303-u2t3",
                        "title": "Iron-Carbon Diagram"
                    },
                    {
                        "id": "me303-u2t4",
                        "title": "Microstructures of Steel & Cast Iron"
                    }
                ]
            },
            {
                "id": "me303-u3",
                "unitNumber": 3,
                "title": "Heat Treatment",
                "topics": [
                    {
                        "id": "me303-u3t1",
                        "title": "TTT Diagrams"
                    },
                    {
                        "id": "me303-u3t2",
                        "title": "Annealing & Normalising"
                    },
                    {
                        "id": "me303-u3t3",
                        "title": "Hardening & Tempering"
                    },
                    {
                        "id": "me303-u3t4",
                        "title": "Surface Hardening"
                    }
                ]
            },
            {
                "id": "me303-u4",
                "unitNumber": 4,
                "title": "Engineering Materials",
                "topics": [
                    {
                        "id": "me303-u4t1",
                        "title": "Plain Carbon & Alloy Steels"
                    },
                    {
                        "id": "me303-u4t2",
                        "title": "Cast Irons"
                    },
                    {
                        "id": "me303-u4t3",
                        "title": "Non-ferrous Alloys"
                    },
                    {
                        "id": "me303-u4t4",
                        "title": "Polymers, Ceramics & Composites"
                    }
                ]
            },
            {
                "id": "me303-u5",
                "unitNumber": 5,
                "title": "Material Testing",
                "topics": [
                    {
                        "id": "me303-u5t1",
                        "title": "Tensile Test"
                    },
                    {
                        "id": "me303-u5t2",
                        "title": "Hardness Testing"
                    },
                    {
                        "id": "me303-u5t3",
                        "title": "Impact & Fatigue Testing"
                    },
                    {
                        "id": "me303-u5t4",
                        "title": "Non-destructive Testing"
                    }
                ]
            }
        ]
    },
    {
        "id": "me304",
        "semester": 3,
        "title": "Strength of Materials",
        "code": "ME-304",
        "description": "Stress and strain, SFD and BMD, bending and shear stresses, torsion, deflection, columns and principal stresses.",
        "generated": true,
        "references": [
            {
                "title": "Strength of Materials",
                "author": "R. K. Rajput"
            },
            {
                "title": "Mechanics of Materials",
                "author": "Gere & Goodno"
            },
            {
                "title": "Strength of Materials",
                "author": "S. S. Rattan"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me304/notes/me304-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me304/notes/me304-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me304/mock-papers/me304-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me304/mock-papers/me304-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me304/mock-papers/me304-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me304-u1",
                "unitNumber": 1,
                "title": "Simple Stress & Strain",
                "topics": [
                    {
                        "id": "me304-u1t1",
                        "title": "Stress, Strain & Hooke's Law"
                    },
                    {
                        "id": "me304-u1t2",
                        "title": "Elastic Constants"
                    },
                    {
                        "id": "me304-u1t3",
                        "title": "Bars of Varying Section & Compound Bars"
                    },
                    {
                        "id": "me304-u1t4",
                        "title": "Strain Energy"
                    }
                ]
            },
            {
                "id": "me304-u2",
                "unitNumber": 2,
                "title": "Shear Force & Bending Moment",
                "topics": [
                    {
                        "id": "me304-u2t1",
                        "title": "Types of Beams & Loads"
                    },
                    {
                        "id": "me304-u2t2",
                        "title": "SFD & BMD"
                    },
                    {
                        "id": "me304-u2t3",
                        "title": "Point of Contraflexure"
                    },
                    {
                        "id": "me304-u2t4",
                        "title": "Standard Results"
                    }
                ]
            },
            {
                "id": "me304-u3",
                "unitNumber": 3,
                "title": "Bending & Shear Stresses",
                "topics": [
                    {
                        "id": "me304-u3t1",
                        "title": "Theory of Simple Bending"
                    },
                    {
                        "id": "me304-u3t2",
                        "title": "Moment of Inertia"
                    },
                    {
                        "id": "me304-u3t3",
                        "title": "Shear Stress in Beams"
                    },
                    {
                        "id": "me304-u3t4",
                        "title": "Combined Direct & Bending Stress"
                    }
                ]
            },
            {
                "id": "me304-u4",
                "unitNumber": 4,
                "title": "Torsion & Deflection",
                "topics": [
                    {
                        "id": "me304-u4t1",
                        "title": "Torsion of Shafts"
                    },
                    {
                        "id": "me304-u4t2",
                        "title": "Hollow Shafts & Combined Loading"
                    },
                    {
                        "id": "me304-u4t3",
                        "title": "Deflection of Beams"
                    },
                    {
                        "id": "me304-u4t4",
                        "title": "Moment Area & Springs"
                    }
                ]
            },
            {
                "id": "me304-u5",
                "unitNumber": 5,
                "title": "Columns, Cylinders & Principal Stresses",
                "topics": [
                    {
                        "id": "me304-u5t1",
                        "title": "Columns & Struts"
                    },
                    {
                        "id": "me304-u5t2",
                        "title": "Rankine's Formula"
                    },
                    {
                        "id": "me304-u5t3",
                        "title": "Thin & Thick Cylinders"
                    },
                    {
                        "id": "me304-u5t4",
                        "title": "Principal Stresses & Mohr's Circle"
                    }
                ]
            }
        ]
    },
    {
        "id": "me305",
        "semester": 3,
        "title": "Manufacturing Process",
        "code": "ME-305",
        "description": "Casting, forming, welding, powder metallurgy and plastic processing.",
        "generated": true,
        "references": [
            {
                "title": "Manufacturing Technology Vol. 1",
                "author": "P. N. Rao"
            },
            {
                "title": "Elements of Workshop Technology",
                "author": "Hajra Choudhury"
            },
            {
                "title": "Manufacturing Engineering and Technology",
                "author": "Kalpakjian & Schmid"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me305/notes/me305-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me305/notes/me305-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me305/mock-papers/me305-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me305/mock-papers/me305-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me305/mock-papers/me305-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me305-u1",
                "unitNumber": 1,
                "title": "Casting Processes",
                "topics": [
                    {
                        "id": "me305-u1t1",
                        "title": "Sand Casting & Patterns"
                    },
                    {
                        "id": "me305-u1t2",
                        "title": "Moulding Sand & Gating System"
                    },
                    {
                        "id": "me305-u1t3",
                        "title": "Special Casting Processes"
                    },
                    {
                        "id": "me305-u1t4",
                        "title": "Casting Defects"
                    }
                ]
            },
            {
                "id": "me305-u2",
                "unitNumber": 2,
                "title": "Metal Forming",
                "topics": [
                    {
                        "id": "me305-u2t1",
                        "title": "Hot & Cold Working"
                    },
                    {
                        "id": "me305-u2t2",
                        "title": "Rolling"
                    },
                    {
                        "id": "me305-u2t3",
                        "title": "Forging"
                    },
                    {
                        "id": "me305-u2t4",
                        "title": "Extrusion & Drawing"
                    }
                ]
            },
            {
                "id": "me305-u3",
                "unitNumber": 3,
                "title": "Sheet Metal Operations",
                "topics": [
                    {
                        "id": "me305-u3t1",
                        "title": "Shearing Operations"
                    },
                    {
                        "id": "me305-u3t2",
                        "title": "Bending & Deep Drawing"
                    },
                    {
                        "id": "me305-u3t3",
                        "title": "Press Tools & Presses"
                    },
                    {
                        "id": "me305-u3t4",
                        "title": "High Energy Rate Forming"
                    }
                ]
            },
            {
                "id": "me305-u4",
                "unitNumber": 4,
                "title": "Welding & Joining",
                "topics": [
                    {
                        "id": "me305-u4t1",
                        "title": "Arc Welding"
                    },
                    {
                        "id": "me305-u4t2",
                        "title": "Gas Welding & Cutting"
                    },
                    {
                        "id": "me305-u4t3",
                        "title": "TIG, MIG & Resistance Welding"
                    },
                    {
                        "id": "me305-u4t4",
                        "title": "Welding Defects & Soldering"
                    }
                ]
            },
            {
                "id": "me305-u5",
                "unitNumber": 5,
                "title": "Powder Metallurgy & Plastics",
                "topics": [
                    {
                        "id": "me305-u5t1",
                        "title": "Powder Production & Compaction"
                    },
                    {
                        "id": "me305-u5t2",
                        "title": "Sintering & Applications"
                    },
                    {
                        "id": "me305-u5t3",
                        "title": "Plastic Moulding Processes"
                    },
                    {
                        "id": "me305-u5t4",
                        "title": "Extrusion & Thermoforming of Plastics"
                    }
                ]
            }
        ]
    },
    {
        "id": "me402",
        "semester": 4,
        "title": "Instrumentation & Control",
        "code": "ME-402",
        "description": "Measurement system characteristics, transducers for displacement, force, pressure, flow and temperature, and control systems.",
        "generated": true,
        "references": [
            {
                "title": "Mechanical Measurements",
                "author": "Beckwith, Marangoni & Lienhard"
            },
            {
                "title": "Mechanical Measurements and Control",
                "author": "D. S. Kumar"
            },
            {
                "title": "Instrumentation, Measurement and Analysis",
                "author": "Nakra & Chaudhry"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me402/notes/me402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me402/notes/me402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me402/mock-papers/me402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me402/mock-papers/me402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me402/mock-papers/me402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me402-u1",
                "unitNumber": 1,
                "title": "Measurement Systems",
                "topics": [
                    {
                        "id": "me402-u1t1",
                        "title": "Generalised Measurement System"
                    },
                    {
                        "id": "me402-u1t2",
                        "title": "Static Characteristics"
                    },
                    {
                        "id": "me402-u1t3",
                        "title": "Dynamic Characteristics"
                    },
                    {
                        "id": "me402-u1t4",
                        "title": "Errors & Uncertainty"
                    }
                ]
            },
            {
                "id": "me402-u2",
                "unitNumber": 2,
                "title": "Displacement, Force & Torque Measurement",
                "topics": [
                    {
                        "id": "me402-u2t1",
                        "title": "Displacement Measurement"
                    },
                    {
                        "id": "me402-u2t2",
                        "title": "Strain Measurement"
                    },
                    {
                        "id": "me402-u2t3",
                        "title": "Force Measurement"
                    },
                    {
                        "id": "me402-u2t4",
                        "title": "Torque & Speed Measurement"
                    }
                ]
            },
            {
                "id": "me402-u3",
                "unitNumber": 3,
                "title": "Pressure & Flow Measurement",
                "topics": [
                    {
                        "id": "me402-u3t1",
                        "title": "Pressure Gauges"
                    },
                    {
                        "id": "me402-u3t2",
                        "title": "Low Pressure Measurement"
                    },
                    {
                        "id": "me402-u3t3",
                        "title": "Obstruction Flow Meters"
                    },
                    {
                        "id": "me402-u3t4",
                        "title": "Other Flow Meters"
                    }
                ]
            },
            {
                "id": "me402-u4",
                "unitNumber": 4,
                "title": "Temperature Measurement",
                "topics": [
                    {
                        "id": "me402-u4t1",
                        "title": "Expansion Thermometers"
                    },
                    {
                        "id": "me402-u4t2",
                        "title": "Thermocouples"
                    },
                    {
                        "id": "me402-u4t3",
                        "title": "Resistance Thermometers"
                    },
                    {
                        "id": "me402-u4t4",
                        "title": "Pyrometers"
                    }
                ]
            },
            {
                "id": "me402-u5",
                "unitNumber": 5,
                "title": "Control Systems",
                "topics": [
                    {
                        "id": "me402-u5t1",
                        "title": "Open & Closed Loop Control"
                    },
                    {
                        "id": "me402-u5t2",
                        "title": "Transfer Function & Block Diagrams"
                    },
                    {
                        "id": "me402-u5t3",
                        "title": "Controller Modes"
                    },
                    {
                        "id": "me402-u5t4",
                        "title": "Hydraulic & Pneumatic Control"
                    }
                ]
            }
        ]
    },
    {
        "id": "me403",
        "semester": 4,
        "title": "Theory of Machines",
        "code": "ME-403",
        "description": "Mechanisms, velocity and acceleration analysis, cams, gears, gear trains, friction, belts and governors.",
        "generated": true,
        "references": [
            {
                "title": "Theory of Machines",
                "author": "S. S. Rattan"
            },
            {
                "title": "Theory of Machines",
                "author": "R. S. Khurmi & J. K. Gupta"
            },
            {
                "title": "Theory of Machines and Mechanisms",
                "author": "Uicker, Pennock & Shigley"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me403/notes/me403-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me403/notes/me403-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me403/mock-papers/me403-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me403/mock-papers/me403-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me403/mock-papers/me403-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me403-u1",
                "unitNumber": 1,
                "title": "Mechanisms",
                "topics": [
                    {
                        "id": "me403-u1t1",
                        "title": "Kinematic Links & Pairs"
                    },
                    {
                        "id": "me403-u1t2",
                        "title": "Degrees of Freedom"
                    },
                    {
                        "id": "me403-u1t3",
                        "title": "Four-bar Chain & Inversions"
                    },
                    {
                        "id": "me403-u1t4",
                        "title": "Slider-Crank & Double Slider"
                    }
                ]
            },
            {
                "id": "me403-u2",
                "unitNumber": 2,
                "title": "Velocity & Acceleration Analysis",
                "topics": [
                    {
                        "id": "me403-u2t1",
                        "title": "Relative Velocity Method"
                    },
                    {
                        "id": "me403-u2t2",
                        "title": "Instantaneous Centre Method"
                    },
                    {
                        "id": "me403-u2t3",
                        "title": "Acceleration Analysis"
                    },
                    {
                        "id": "me403-u2t4",
                        "title": "Klein's Construction"
                    }
                ]
            },
            {
                "id": "me403-u3",
                "unitNumber": 3,
                "title": "Cams & Gears",
                "topics": [
                    {
                        "id": "me403-u3t1",
                        "title": "Cams & Followers"
                    },
                    {
                        "id": "me403-u3t2",
                        "title": "Follower Motions"
                    },
                    {
                        "id": "me403-u3t3",
                        "title": "Gear Terminology & Law of Gearing"
                    },
                    {
                        "id": "me403-u3t4",
                        "title": "Interference & Contact Ratio"
                    }
                ]
            },
            {
                "id": "me403-u4",
                "unitNumber": 4,
                "title": "Gear Trains & Friction Drives",
                "topics": [
                    {
                        "id": "me403-u4t1",
                        "title": "Simple & Compound Gear Trains"
                    },
                    {
                        "id": "me403-u4t2",
                        "title": "Epicyclic Gear Trains"
                    },
                    {
                        "id": "me403-u4t3",
                        "title": "Belt & Rope Drives"
                    },
                    {
                        "id": "me403-u4t4",
                        "title": "Friction, Clutches & Brakes"
                    }
                ]
            },
            {
                "id": "me403-u5",
                "unitNumber": 5,
                "title": "Governors & Gyroscope",
                "topics": [
                    {
                        "id": "me403-u5t1",
                        "title": "Watt & Porter Governors"
                    },
                    {
                        "id": "me403-u5t2",
                        "title": "Hartnell Governor & Characteristics"
                    },
                    {
                        "id": "me403-u5t3",
                        "title": "Governor Effort & Power"
                    },
                    {
                        "id": "me403-u5t4",
                        "title": "Gyroscopic Effects"
                    }
                ]
            }
        ]
    },
    {
        "id": "me404",
        "semester": 4,
        "title": "Fluid Mechanics",
        "code": "ME-404",
        "description": "Fluid properties, statics, kinematics, dynamics, flow measurement, viscous flow, boundary layer and dimensional analysis.",
        "generated": true,
        "references": [
            {
                "title": "Fluid Mechanics and Hydraulic Machines",
                "author": "R. K. Bansal"
            },
            {
                "title": "Fluid Mechanics",
                "author": "Frank M. White"
            },
            {
                "title": "Fluid Mechanics",
                "author": "Cengel & Cimbala"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me404/notes/me404-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me404/notes/me404-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me404/mock-papers/me404-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me404/mock-papers/me404-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me404/mock-papers/me404-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me404-u1",
                "unitNumber": 1,
                "title": "Fluid Properties & Statics",
                "topics": [
                    {
                        "id": "me404-u1t1",
                        "title": "Properties of Fluids"
                    },
                    {
                        "id": "me404-u1t2",
                        "title": "Pressure & Its Measurement"
                    },
                    {
                        "id": "me404-u1t3",
                        "title": "Hydrostatic Forces"
                    },
                    {
                        "id": "me404-u1t4",
                        "title": "Buoyancy & Stability"
                    }
                ]
            },
            {
                "id": "me404-u2",
                "unitNumber": 2,
                "title": "Fluid Kinematics",
                "topics": [
                    {
                        "id": "me404-u2t1",
                        "title": "Types of Flow"
                    },
                    {
                        "id": "me404-u2t2",
                        "title": "Streamlines & Continuity"
                    },
                    {
                        "id": "me404-u2t3",
                        "title": "Velocity Potential & Stream Function"
                    },
                    {
                        "id": "me404-u2t4",
                        "title": "Rotation & Vorticity"
                    }
                ]
            },
            {
                "id": "me404-u3",
                "unitNumber": 3,
                "title": "Fluid Dynamics",
                "topics": [
                    {
                        "id": "me404-u3t1",
                        "title": "Euler's & Bernoulli's Equations"
                    },
                    {
                        "id": "me404-u3t2",
                        "title": "Flow Measurement Devices"
                    },
                    {
                        "id": "me404-u3t3",
                        "title": "Momentum Equation"
                    },
                    {
                        "id": "me404-u3t4",
                        "title": "Notches & Weirs"
                    }
                ]
            },
            {
                "id": "me404-u4",
                "unitNumber": 4,
                "title": "Viscous Flow & Pipe Flow",
                "topics": [
                    {
                        "id": "me404-u4t1",
                        "title": "Laminar Flow in Pipes"
                    },
                    {
                        "id": "me404-u4t2",
                        "title": "Turbulent Flow & Friction"
                    },
                    {
                        "id": "me404-u4t3",
                        "title": "Minor Losses & Pipe Networks"
                    },
                    {
                        "id": "me404-u4t4",
                        "title": "Water Hammer"
                    }
                ]
            },
            {
                "id": "me404-u5",
                "unitNumber": 5,
                "title": "Boundary Layer & Dimensional Analysis",
                "topics": [
                    {
                        "id": "me404-u5t1",
                        "title": "Boundary Layer Concept"
                    },
                    {
                        "id": "me404-u5t2",
                        "title": "Flow Separation & Drag"
                    },
                    {
                        "id": "me404-u5t3",
                        "title": "Dimensional Analysis"
                    },
                    {
                        "id": "me404-u5t4",
                        "title": "Model Analysis & Similitude"
                    }
                ]
            }
        ]
    },
    {
        "id": "me405",
        "semester": 4,
        "title": "Manufacturing Technology",
        "code": "ME-405",
        "description": "Metal cutting theory, machine tools, grinding, non-conventional machining, jigs and fixtures and metrology.",
        "generated": true,
        "references": [
            {
                "title": "Manufacturing Technology Vol. 2",
                "author": "P. N. Rao"
            },
            {
                "title": "Production Technology",
                "author": "R. K. Jain"
            },
            {
                "title": "Fundamentals of Metal Machining and Machine Tools",
                "author": "Geoffrey Boothroyd"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me405/notes/me405-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me405/notes/me405-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me405/mock-papers/me405-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me405/mock-papers/me405-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me405/mock-papers/me405-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me405-u1",
                "unitNumber": 1,
                "title": "Theory of Metal Cutting",
                "topics": [
                    {
                        "id": "me405-u1t1",
                        "title": "Orthogonal & Oblique Cutting"
                    },
                    {
                        "id": "me405-u1t2",
                        "title": "Chip Formation"
                    },
                    {
                        "id": "me405-u1t3",
                        "title": "Merchant's Circle"
                    },
                    {
                        "id": "me405-u1t4",
                        "title": "Tool Life & Wear"
                    }
                ]
            },
            {
                "id": "me405-u2",
                "unitNumber": 2,
                "title": "Machine Tools",
                "topics": [
                    {
                        "id": "me405-u2t1",
                        "title": "Lathe"
                    },
                    {
                        "id": "me405-u2t2",
                        "title": "Drilling & Boring"
                    },
                    {
                        "id": "me405-u2t3",
                        "title": "Shaper, Planer & Slotter"
                    },
                    {
                        "id": "me405-u2t4",
                        "title": "Milling"
                    }
                ]
            },
            {
                "id": "me405-u3",
                "unitNumber": 3,
                "title": "Grinding & Finishing",
                "topics": [
                    {
                        "id": "me405-u3t1",
                        "title": "Grinding Process"
                    },
                    {
                        "id": "me405-u3t2",
                        "title": "Grinding Wheel Specification"
                    },
                    {
                        "id": "me405-u3t3",
                        "title": "Superfinishing Processes"
                    },
                    {
                        "id": "me405-u3t4",
                        "title": "Surface Roughness"
                    }
                ]
            },
            {
                "id": "me405-u4",
                "unitNumber": 4,
                "title": "Non-conventional Machining",
                "topics": [
                    {
                        "id": "me405-u4t1",
                        "title": "Need for Unconventional Processes"
                    },
                    {
                        "id": "me405-u4t2",
                        "title": "EDM & Wire EDM"
                    },
                    {
                        "id": "me405-u4t3",
                        "title": "ECM & Chemical Machining"
                    },
                    {
                        "id": "me405-u4t4",
                        "title": "USM, LBM & AJM"
                    }
                ]
            },
            {
                "id": "me405-u5",
                "unitNumber": 5,
                "title": "Jigs, Fixtures & Metrology",
                "topics": [
                    {
                        "id": "me405-u5t1",
                        "title": "Jigs & Fixtures"
                    },
                    {
                        "id": "me405-u5t2",
                        "title": "Limits, Fits & Tolerances"
                    },
                    {
                        "id": "me405-u5t3",
                        "title": "Linear & Angular Measurement"
                    },
                    {
                        "id": "me405-u5t4",
                        "title": "Comparators & Gauges"
                    }
                ]
            }
        ]
    },
    {
        "id": "me501",
        "semester": 5,
        "title": "Internal Combustion Engines",
        "code": "ME-501",
        "description": "Engine classification, fuel-air cycles, carburetion and injection, combustion, performance testing and emissions.",
        "generated": true,
        "references": [
            {
                "title": "Internal Combustion Engines",
                "author": "V. Ganesan"
            },
            {
                "title": "Internal Combustion Engine Fundamentals",
                "author": "John B. Heywood"
            },
            {
                "title": "A Course in Internal Combustion Engines",
                "author": "Mathur & Sharma"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me501/notes/me501-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me501/notes/me501-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me501/mock-papers/me501-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me501/mock-papers/me501-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me501/mock-papers/me501-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me501-u1",
                "unitNumber": 1,
                "title": "IC Engine Fundamentals",
                "topics": [
                    {
                        "id": "me501-u1t1",
                        "title": "Classification of IC Engines"
                    },
                    {
                        "id": "me501-u1t2",
                        "title": "Engine Components & Terminology"
                    },
                    {
                        "id": "me501-u1t3",
                        "title": "Valve Timing Diagram"
                    },
                    {
                        "id": "me501-u1t4",
                        "title": "Fuel-air & Actual Cycles"
                    }
                ]
            },
            {
                "id": "me501-u2",
                "unitNumber": 2,
                "title": "Fuel Supply Systems",
                "topics": [
                    {
                        "id": "me501-u2t1",
                        "title": "Carburetion"
                    },
                    {
                        "id": "me501-u2t2",
                        "title": "Petrol Injection"
                    },
                    {
                        "id": "me501-u2t3",
                        "title": "Diesel Injection"
                    },
                    {
                        "id": "me501-u2t4",
                        "title": "Ignition Systems"
                    }
                ]
            },
            {
                "id": "me501-u3",
                "unitNumber": 3,
                "title": "Combustion",
                "topics": [
                    {
                        "id": "me501-u3t1",
                        "title": "Combustion in SI Engines"
                    },
                    {
                        "id": "me501-u3t2",
                        "title": "Combustion in CI Engines"
                    },
                    {
                        "id": "me501-u3t3",
                        "title": "Fuel Ratings"
                    },
                    {
                        "id": "me501-u3t4",
                        "title": "Combustion Chamber Design"
                    }
                ]
            },
            {
                "id": "me501-u4",
                "unitNumber": 4,
                "title": "Engine Performance & Testing",
                "topics": [
                    {
                        "id": "me501-u4t1",
                        "title": "Performance Parameters"
                    },
                    {
                        "id": "me501-u4t2",
                        "title": "Fuel Consumption & Efficiency"
                    },
                    {
                        "id": "me501-u4t3",
                        "title": "Engine Testing"
                    },
                    {
                        "id": "me501-u4t4",
                        "title": "Supercharging & Turbocharging"
                    }
                ]
            },
            {
                "id": "me501-u5",
                "unitNumber": 5,
                "title": "Lubrication, Cooling & Emissions",
                "topics": [
                    {
                        "id": "me501-u5t1",
                        "title": "Lubrication Systems"
                    },
                    {
                        "id": "me501-u5t2",
                        "title": "Cooling Systems"
                    },
                    {
                        "id": "me501-u5t3",
                        "title": "Engine Emissions"
                    },
                    {
                        "id": "me501-u5t4",
                        "title": "Emission Control"
                    }
                ]
            }
        ]
    },
    {
        "id": "me502",
        "semester": 5,
        "title": "Mechanical Vibrations",
        "code": "ME-502",
        "description": "Free and forced vibration, damping, two-degree and multi-degree systems, vibration isolation, measurement and noise.",
        "generated": true,
        "references": [
            {
                "title": "Mechanical Vibrations",
                "author": "S. S. Rao"
            },
            {
                "title": "Mechanical Vibrations",
                "author": "G. K. Grover"
            },
            {
                "title": "Theory of Vibration with Applications",
                "author": "W. T. Thomson"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me502/notes/me502-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me502/notes/me502-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me502/mock-papers/me502-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me502/mock-papers/me502-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me502/mock-papers/me502-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me502-u1",
                "unitNumber": 1,
                "title": "Fundamentals of Vibration",
                "topics": [
                    {
                        "id": "me502-u1t1",
                        "title": "Vibration Basics"
                    },
                    {
                        "id": "me502-u1t2",
                        "title": "Simple Harmonic Motion"
                    },
                    {
                        "id": "me502-u1t3",
                        "title": "Elements of Vibrating Systems"
                    },
                    {
                        "id": "me502-u1t4",
                        "title": "Harmonic Analysis"
                    }
                ]
            },
            {
                "id": "me502-u2",
                "unitNumber": 2,
                "title": "Undamped Free Vibration",
                "topics": [
                    {
                        "id": "me502-u2t1",
                        "title": "Natural Frequency"
                    },
                    {
                        "id": "me502-u2t2",
                        "title": "Energy & Rayleigh's Methods"
                    },
                    {
                        "id": "me502-u2t3",
                        "title": "Torsional Vibration"
                    },
                    {
                        "id": "me502-u2t4",
                        "title": "Transverse Vibration & Whirling"
                    }
                ]
            },
            {
                "id": "me502-u3",
                "unitNumber": 3,
                "title": "Damped & Forced Vibration",
                "topics": [
                    {
                        "id": "me502-u3t1",
                        "title": "Damped Free Vibration"
                    },
                    {
                        "id": "me502-u3t2",
                        "title": "Forced Vibration & Resonance"
                    },
                    {
                        "id": "me502-u3t3",
                        "title": "Rotating & Reciprocating Unbalance"
                    },
                    {
                        "id": "me502-u3t4",
                        "title": "Vibration Isolation & Transmissibility"
                    }
                ]
            },
            {
                "id": "me502-u4",
                "unitNumber": 4,
                "title": "Multi-degree of Freedom Systems",
                "topics": [
                    {
                        "id": "me502-u4t1",
                        "title": "Two-degree of Freedom Systems"
                    },
                    {
                        "id": "me502-u4t2",
                        "title": "Vibration Absorber"
                    },
                    {
                        "id": "me502-u4t3",
                        "title": "Holzer's Method"
                    },
                    {
                        "id": "me502-u4t4",
                        "title": "Matrix Methods"
                    }
                ]
            },
            {
                "id": "me502-u5",
                "unitNumber": 5,
                "title": "Vibration Measurement & Noise",
                "topics": [
                    {
                        "id": "me502-u5t1",
                        "title": "Vibration Measuring Instruments"
                    },
                    {
                        "id": "me502-u5t2",
                        "title": "Condition Monitoring"
                    },
                    {
                        "id": "me502-u5t3",
                        "title": "Fundamentals of Noise"
                    },
                    {
                        "id": "me502-u5t4",
                        "title": "Noise Control"
                    }
                ]
            }
        ]
    },
    {
        "id": "me503-mt",
        "semester": 5,
        "title": "Mechatronics",
        "code": "ME-503(A)",
        "description": "Sensors, actuators, signal conditioning, microcontrollers, PLCs and mechatronic system design.",
        "generated": true,
        "references": [
            {
                "title": "Mechatronics",
                "author": "W. Bolton"
            },
            {
                "title": "Mechatronics: Principles, Concepts and Applications",
                "author": "Mahalik"
            },
            {
                "title": "Introduction to Mechatronics and Measurement Systems",
                "author": "Alciatore & Histand"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me503-mt/notes/me503-mt-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me503-mt/notes/me503-mt-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me503-mt/mock-papers/me503-mt-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me503-mt/mock-papers/me503-mt-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me503-mt/mock-papers/me503-mt-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me503-mt-u1",
                "unitNumber": 1,
                "title": "Introduction to Mechatronics",
                "topics": [
                    {
                        "id": "me503-mt-u1t1",
                        "title": "Mechatronics Concept"
                    },
                    {
                        "id": "me503-mt-u1t2",
                        "title": "Measurement Systems"
                    },
                    {
                        "id": "me503-mt-u1t3",
                        "title": "Control Systems in Mechatronics"
                    },
                    {
                        "id": "me503-mt-u1t4",
                        "title": "Design Process"
                    }
                ]
            },
            {
                "id": "me503-mt-u2",
                "unitNumber": 2,
                "title": "Sensors & Transducers",
                "topics": [
                    {
                        "id": "me503-mt-u2t1",
                        "title": "Displacement & Position Sensors"
                    },
                    {
                        "id": "me503-mt-u2t2",
                        "title": "Proximity & Velocity Sensors"
                    },
                    {
                        "id": "me503-mt-u2t3",
                        "title": "Force, Pressure & Temperature Sensors"
                    },
                    {
                        "id": "me503-mt-u2t4",
                        "title": "Selection of Sensors"
                    }
                ]
            },
            {
                "id": "me503-mt-u3",
                "unitNumber": 3,
                "title": "Signal Conditioning & Data Acquisition",
                "topics": [
                    {
                        "id": "me503-mt-u3t1",
                        "title": "Operational Amplifier Circuits"
                    },
                    {
                        "id": "me503-mt-u3t2",
                        "title": "Filtering & Protection"
                    },
                    {
                        "id": "me503-mt-u3t3",
                        "title": "ADC & DAC"
                    },
                    {
                        "id": "me503-mt-u3t4",
                        "title": "Data Acquisition Systems"
                    }
                ]
            },
            {
                "id": "me503-mt-u4",
                "unitNumber": 4,
                "title": "Actuators",
                "topics": [
                    {
                        "id": "me503-mt-u4t1",
                        "title": "Electrical Actuators"
                    },
                    {
                        "id": "me503-mt-u4t2",
                        "title": "Hydraulic & Pneumatic Actuators"
                    },
                    {
                        "id": "me503-mt-u4t3",
                        "title": "Mechanical Actuation Systems"
                    },
                    {
                        "id": "me503-mt-u4t4",
                        "title": "Solenoids & Smart Actuators"
                    }
                ]
            },
            {
                "id": "me503-mt-u5",
                "unitNumber": 5,
                "title": "Controllers & PLC",
                "topics": [
                    {
                        "id": "me503-mt-u5t1",
                        "title": "Microcontrollers in Mechatronics"
                    },
                    {
                        "id": "me503-mt-u5t2",
                        "title": "Programmable Logic Controllers"
                    },
                    {
                        "id": "me503-mt-u5t3",
                        "title": "Ladder Logic Programming"
                    },
                    {
                        "id": "me503-mt-u5t4",
                        "title": "Mechatronic System Case Studies"
                    }
                ]
            }
        ]
    },
    {
        "id": "me504-fem",
        "semester": 2,
        "title": "Finite Element Method",
        "code": "ME-504(C)",
        "description": "Variational and weighted residual methods, 1D and 2D elements, isoparametric formulation, structural and thermal analysis.",
        "generated": true,
        "references": [
            {
                "title": "An Introduction to the Finite Element Method",
                "author": "J. N. Reddy"
            },
            {
                "title": "Introduction to Finite Elements in Engineering",
                "author": "Chandrupatla & Belegundu"
            },
            {
                "title": "The Finite Element Method",
                "author": "O. C. Zienkiewicz"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me504-fem/notes/me504-fem-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me504-fem/notes/me504-fem-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me504-fem/mock-papers/me504-fem-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me504-fem/mock-papers/me504-fem-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me504-fem/mock-papers/me504-fem-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me504-fem-u1",
                "unitNumber": 1,
                "title": "Introduction to FEM",
                "topics": [
                    {
                        "id": "me504-fem-u1t1",
                        "title": "Basics of FEM"
                    },
                    {
                        "id": "me504-fem-u1t2",
                        "title": "Steps in FEM"
                    },
                    {
                        "id": "me504-fem-u1t3",
                        "title": "Variational Methods"
                    },
                    {
                        "id": "me504-fem-u1t4",
                        "title": "Weighted Residual Methods"
                    }
                ]
            },
            {
                "id": "me504-fem-u2",
                "unitNumber": 2,
                "title": "One-dimensional Elements",
                "topics": [
                    {
                        "id": "me504-fem-u2t1",
                        "title": "Bar Element"
                    },
                    {
                        "id": "me504-fem-u2t2",
                        "title": "Truss Analysis"
                    },
                    {
                        "id": "me504-fem-u2t3",
                        "title": "Beam Element"
                    },
                    {
                        "id": "me504-fem-u2t4",
                        "title": "Quadratic Elements"
                    }
                ]
            },
            {
                "id": "me504-fem-u3",
                "unitNumber": 3,
                "title": "Two-dimensional Elements",
                "topics": [
                    {
                        "id": "me504-fem-u3t1",
                        "title": "Plane Stress & Plane Strain"
                    },
                    {
                        "id": "me504-fem-u3t2",
                        "title": "CST Element"
                    },
                    {
                        "id": "me504-fem-u3t3",
                        "title": "Quadrilateral & Higher Elements"
                    },
                    {
                        "id": "me504-fem-u3t4",
                        "title": "Mesh Generation"
                    }
                ]
            },
            {
                "id": "me504-fem-u4",
                "unitNumber": 4,
                "title": "Isoparametric Formulation & Integration",
                "topics": [
                    {
                        "id": "me504-fem-u4t1",
                        "title": "Isoparametric Elements"
                    },
                    {
                        "id": "me504-fem-u4t2",
                        "title": "Numerical Integration"
                    },
                    {
                        "id": "me504-fem-u4t3",
                        "title": "Convergence Requirements"
                    },
                    {
                        "id": "me504-fem-u4t4",
                        "title": "Error Estimation"
                    }
                ]
            },
            {
                "id": "me504-fem-u5",
                "unitNumber": 5,
                "title": "Applications",
                "topics": [
                    {
                        "id": "me504-fem-u5t1",
                        "title": "Heat Transfer Analysis"
                    },
                    {
                        "id": "me504-fem-u5t2",
                        "title": "Dynamic Analysis"
                    },
                    {
                        "id": "me504-fem-u5t3",
                        "title": "Fluid Flow & Torsion"
                    },
                    {
                        "id": "me504-fem-u5t4",
                        "title": "FEA Software"
                    }
                ]
            }
        ]
    },
    {
        "id": "me601",
        "semester": 6,
        "title": "Thermal Engineering & Gas Dynamics",
        "code": "ME-601",
        "description": "Boilers, steam nozzles and turbines, condensers, compressors and compressible flow.",
        "generated": true,
        "references": [
            {
                "title": "Thermal Engineering",
                "author": "R. K. Rajput"
            },
            {
                "title": "Power Plant Engineering",
                "author": "P. K. Nag"
            },
            {
                "title": "Fundamentals of Gas Dynamics",
                "author": "Zucker & Biblarz"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me601/notes/me601-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me601/notes/me601-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me601/mock-papers/me601-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me601/mock-papers/me601-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me601/mock-papers/me601-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me601-u1",
                "unitNumber": 1,
                "title": "Steam Generators & Boilers",
                "topics": [
                    {
                        "id": "me601-u1t1",
                        "title": "Classification of Boilers"
                    },
                    {
                        "id": "me601-u1t2",
                        "title": "High-pressure Boilers"
                    },
                    {
                        "id": "me601-u1t3",
                        "title": "Boiler Mountings & Accessories"
                    },
                    {
                        "id": "me601-u1t4",
                        "title": "Boiler Performance & Draught"
                    }
                ]
            },
            {
                "id": "me601-u2",
                "unitNumber": 2,
                "title": "Steam Nozzles & Turbines",
                "topics": [
                    {
                        "id": "me601-u2t1",
                        "title": "Flow Through Nozzles"
                    },
                    {
                        "id": "me601-u2t2",
                        "title": "Impulse Turbines"
                    },
                    {
                        "id": "me601-u2t3",
                        "title": "Compounding of Turbines"
                    },
                    {
                        "id": "me601-u2t4",
                        "title": "Reaction Turbines"
                    }
                ]
            },
            {
                "id": "me601-u3",
                "unitNumber": 3,
                "title": "Condensers & Cooling Towers",
                "topics": [
                    {
                        "id": "me601-u3t1",
                        "title": "Steam Condensers"
                    },
                    {
                        "id": "me601-u3t2",
                        "title": "Condenser Efficiency"
                    },
                    {
                        "id": "me601-u3t3",
                        "title": "Cooling Towers"
                    },
                    {
                        "id": "me601-u3t4",
                        "title": "Rankine Cycle Improvements"
                    }
                ]
            },
            {
                "id": "me601-u4",
                "unitNumber": 4,
                "title": "Air Compressors",
                "topics": [
                    {
                        "id": "me601-u4t1",
                        "title": "Reciprocating Compressors"
                    },
                    {
                        "id": "me601-u4t2",
                        "title": "Multistage Compression"
                    },
                    {
                        "id": "me601-u4t3",
                        "title": "Rotary Compressors"
                    },
                    {
                        "id": "me601-u4t4",
                        "title": "Compressor Performance"
                    }
                ]
            },
            {
                "id": "me601-u5",
                "unitNumber": 5,
                "title": "Gas Dynamics",
                "topics": [
                    {
                        "id": "me601-u5t1",
                        "title": "Compressible Flow Basics"
                    },
                    {
                        "id": "me601-u5t2",
                        "title": "Isentropic Flow in Nozzles"
                    },
                    {
                        "id": "me601-u5t3",
                        "title": "Normal Shock Waves"
                    },
                    {
                        "id": "me601-u5t4",
                        "title": "Fanno & Rayleigh Flow"
                    }
                ]
            }
        ]
    },
    {
        "id": "me602",
        "semester": 6,
        "title": "Machine Component Design",
        "code": "ME-602",
        "description": "Design for static and fatigue loads, shafts, keys, couplings, springs, bearings, gears, clutches and brakes.",
        "generated": true,
        "references": [
            {
                "title": "Design of Machine Elements",
                "author": "V. B. Bhandari"
            },
            {
                "title": "Shigley's Mechanical Engineering Design",
                "author": "Budynas & Nisbett"
            },
            {
                "title": "Machine Design",
                "author": "R. S. Khurmi & J. K. Gupta"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me602/notes/me602-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me602/notes/me602-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me602/mock-papers/me602-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me602/mock-papers/me602-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me602/mock-papers/me602-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me602-u1",
                "unitNumber": 1,
                "title": "Design Fundamentals",
                "topics": [
                    {
                        "id": "me602-u1t1",
                        "title": "Design Process & Considerations"
                    },
                    {
                        "id": "me602-u1t2",
                        "title": "Theories of Failure"
                    },
                    {
                        "id": "me602-u1t3",
                        "title": "Stress Concentration"
                    },
                    {
                        "id": "me602-u1t4",
                        "title": "Material Selection & Preferred Numbers"
                    }
                ]
            },
            {
                "id": "me602-u2",
                "unitNumber": 2,
                "title": "Fatigue & Shafts",
                "topics": [
                    {
                        "id": "me602-u2t1",
                        "title": "Fatigue Design"
                    },
                    {
                        "id": "me602-u2t2",
                        "title": "Endurance Limit Modifying Factors"
                    },
                    {
                        "id": "me602-u2t3",
                        "title": "Design of Shafts"
                    },
                    {
                        "id": "me602-u2t4",
                        "title": "Keys & Couplings"
                    }
                ]
            },
            {
                "id": "me602-u3",
                "unitNumber": 3,
                "title": "Springs & Bearings",
                "topics": [
                    {
                        "id": "me602-u3t1",
                        "title": "Helical Springs"
                    },
                    {
                        "id": "me602-u3t2",
                        "title": "Leaf Springs"
                    },
                    {
                        "id": "me602-u3t3",
                        "title": "Rolling Contact Bearings"
                    },
                    {
                        "id": "me602-u3t4",
                        "title": "Sliding Contact Bearings"
                    }
                ]
            },
            {
                "id": "me602-u4",
                "unitNumber": 4,
                "title": "Gears",
                "topics": [
                    {
                        "id": "me602-u4t1",
                        "title": "Spur Gear Design"
                    },
                    {
                        "id": "me602-u4t2",
                        "title": "Helical Gears"
                    },
                    {
                        "id": "me602-u4t3",
                        "title": "Bevel Gears"
                    },
                    {
                        "id": "me602-u4t4",
                        "title": "Worm Gears"
                    }
                ]
            },
            {
                "id": "me602-u5",
                "unitNumber": 5,
                "title": "Clutches, Brakes & Engine Parts",
                "topics": [
                    {
                        "id": "me602-u5t1",
                        "title": "Friction Clutches"
                    },
                    {
                        "id": "me602-u5t2",
                        "title": "Brakes"
                    },
                    {
                        "id": "me602-u5t3",
                        "title": "Engine Components Design"
                    },
                    {
                        "id": "me602-u5t4",
                        "title": "Crankshaft & Flywheel"
                    }
                ]
            }
        ]
    },
    {
        "id": "me603-tm",
        "semester": 6,
        "title": "Turbo Machinery",
        "code": "ME-603(A)",
        "description": "Energy transfer in turbomachines, centrifugal pumps, hydraulic turbines, compressors, fans and hydrostatic systems.",
        "generated": true,
        "references": [
            {
                "title": "Principles of Turbomachinery",
                "author": "Seppo A. Korpela"
            },
            {
                "title": "Turbomachines",
                "author": "B. U. Pai"
            },
            {
                "title": "Fluid Mechanics and Hydraulic Machines",
                "author": "R. K. Bansal"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me603-tm/notes/me603-tm-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me603-tm/notes/me603-tm-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me603-tm/mock-papers/me603-tm-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me603-tm/mock-papers/me603-tm-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me603-tm/mock-papers/me603-tm-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me603-tm-u1",
                "unitNumber": 1,
                "title": "Energy Transfer in Turbomachines",
                "topics": [
                    {
                        "id": "me603-tm-u1t1",
                        "title": "Classification of Turbomachines"
                    },
                    {
                        "id": "me603-tm-u1t2",
                        "title": "Euler's Turbine Equation"
                    },
                    {
                        "id": "me603-tm-u1t3",
                        "title": "Degree of Reaction"
                    },
                    {
                        "id": "me603-tm-u1t4",
                        "title": "Dimensionless Parameters"
                    }
                ]
            },
            {
                "id": "me603-tm-u2",
                "unitNumber": 2,
                "title": "Centrifugal & Reciprocating Pumps",
                "topics": [
                    {
                        "id": "me603-tm-u2t1",
                        "title": "Centrifugal Pump Working"
                    },
                    {
                        "id": "me603-tm-u2t2",
                        "title": "Pump Heads & Efficiencies"
                    },
                    {
                        "id": "me603-tm-u2t3",
                        "title": "Cavitation & NPSH"
                    },
                    {
                        "id": "me603-tm-u2t4",
                        "title": "Reciprocating Pumps"
                    }
                ]
            },
            {
                "id": "me603-tm-u3",
                "unitNumber": 3,
                "title": "Hydraulic Turbines",
                "topics": [
                    {
                        "id": "me603-tm-u3t1",
                        "title": "Pelton Wheel"
                    },
                    {
                        "id": "me603-tm-u3t2",
                        "title": "Francis Turbine"
                    },
                    {
                        "id": "me603-tm-u3t3",
                        "title": "Kaplan Turbine"
                    },
                    {
                        "id": "me603-tm-u3t4",
                        "title": "Turbine Performance & Governing"
                    }
                ]
            },
            {
                "id": "me603-tm-u4",
                "unitNumber": 4,
                "title": "Compressors, Fans & Blowers",
                "topics": [
                    {
                        "id": "me603-tm-u4t1",
                        "title": "Centrifugal Compressors"
                    },
                    {
                        "id": "me603-tm-u4t2",
                        "title": "Axial Flow Compressors"
                    },
                    {
                        "id": "me603-tm-u4t3",
                        "title": "Fans & Blowers"
                    },
                    {
                        "id": "me603-tm-u4t4",
                        "title": "Surge & Stall"
                    }
                ]
            },
            {
                "id": "me603-tm-u5",
                "unitNumber": 5,
                "title": "Hydraulic Systems",
                "topics": [
                    {
                        "id": "me603-tm-u5t1",
                        "title": "Hydrostatic Systems"
                    },
                    {
                        "id": "me603-tm-u5t2",
                        "title": "Hydraulic Devices"
                    },
                    {
                        "id": "me603-tm-u5t3",
                        "title": "Hydraulic Cranes & Lifts"
                    },
                    {
                        "id": "me603-tm-u5t4",
                        "title": "Fluid Couplings & Torque Converters"
                    }
                ]
            }
        ]
    },
    {
        "id": "me604-rob",
        "semester": 6,
        "title": "Robotics",
        "code": "ME-604(A)",
        "description": "Robot anatomy, kinematics, dynamics, trajectory planning, sensors, actuators, programming and applications.",
        "generated": true,
        "references": [
            {
                "title": "Introduction to Robotics: Mechanics and Control",
                "author": "John J. Craig"
            },
            {
                "title": "Industrial Robotics",
                "author": "Groover, Weiss, Nagel & Odrey"
            },
            {
                "title": "Robotics and Control",
                "author": "R. K. Mittal & I. J. Nagrath"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me604-rob/notes/me604-rob-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me604-rob/notes/me604-rob-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me604-rob/mock-papers/me604-rob-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me604-rob/mock-papers/me604-rob-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me604-rob/mock-papers/me604-rob-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me604-rob-u1",
                "unitNumber": 1,
                "title": "Introduction to Robotics",
                "topics": [
                    {
                        "id": "me604-rob-u1t1",
                        "title": "Robot Anatomy"
                    },
                    {
                        "id": "me604-rob-u1t2",
                        "title": "Robot Configurations"
                    },
                    {
                        "id": "me604-rob-u1t3",
                        "title": "Robot Specifications"
                    },
                    {
                        "id": "me604-rob-u1t4",
                        "title": "End Effectors"
                    }
                ]
            },
            {
                "id": "me604-rob-u2",
                "unitNumber": 2,
                "title": "Robot Kinematics",
                "topics": [
                    {
                        "id": "me604-rob-u2t1",
                        "title": "Homogeneous Transformations"
                    },
                    {
                        "id": "me604-rob-u2t2",
                        "title": "Forward Kinematics"
                    },
                    {
                        "id": "me604-rob-u2t3",
                        "title": "Inverse Kinematics"
                    },
                    {
                        "id": "me604-rob-u2t4",
                        "title": "Jacobian & Velocity Kinematics"
                    }
                ]
            },
            {
                "id": "me604-rob-u3",
                "unitNumber": 3,
                "title": "Dynamics & Trajectory Planning",
                "topics": [
                    {
                        "id": "me604-rob-u3t1",
                        "title": "Robot Dynamics"
                    },
                    {
                        "id": "me604-rob-u3t2",
                        "title": "Trajectory Planning"
                    },
                    {
                        "id": "me604-rob-u3t3",
                        "title": "Path Planning"
                    },
                    {
                        "id": "me604-rob-u3t4",
                        "title": "Robot Control"
                    }
                ]
            },
            {
                "id": "me604-rob-u4",
                "unitNumber": 4,
                "title": "Sensors & Actuators",
                "topics": [
                    {
                        "id": "me604-rob-u4t1",
                        "title": "Internal Sensors"
                    },
                    {
                        "id": "me604-rob-u4t2",
                        "title": "External Sensors"
                    },
                    {
                        "id": "me604-rob-u4t3",
                        "title": "Robot Vision"
                    },
                    {
                        "id": "me604-rob-u4t4",
                        "title": "Robot Actuators"
                    }
                ]
            },
            {
                "id": "me604-rob-u5",
                "unitNumber": 5,
                "title": "Programming & Applications",
                "topics": [
                    {
                        "id": "me604-rob-u5t1",
                        "title": "Robot Programming Methods"
                    },
                    {
                        "id": "me604-rob-u5t2",
                        "title": "Robot Languages"
                    },
                    {
                        "id": "me604-rob-u5t3",
                        "title": "Industrial Applications"
                    },
                    {
                        "id": "me604-rob-u5t4",
                        "title": "Mobile Robots & Safety"
                    }
                ]
            }
        ]
    },
    {
        "id": "me701",
        "semester": 7,
        "title": "Heat & Mass Transfer",
        "code": "ME-701",
        "description": "Conduction, extended surfaces, transient conduction, convection, radiation, heat exchangers and mass transfer.",
        "generated": true,
        "references": [
            {
                "title": "Heat and Mass Transfer",
                "author": "Cengel & Ghajar"
            },
            {
                "title": "Fundamentals of Heat and Mass Transfer",
                "author": "Incropera & DeWitt"
            },
            {
                "title": "Heat and Mass Transfer",
                "author": "R. K. Rajput"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me701/notes/me701-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me701/notes/me701-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me701/mock-papers/me701-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me701/mock-papers/me701-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me701/mock-papers/me701-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me701-u1",
                "unitNumber": 1,
                "title": "Conduction",
                "topics": [
                    {
                        "id": "me701-u1t1",
                        "title": "Modes of Heat Transfer"
                    },
                    {
                        "id": "me701-u1t2",
                        "title": "Heat Conduction Equation"
                    },
                    {
                        "id": "me701-u1t3",
                        "title": "Plane Wall, Cylinder & Sphere"
                    },
                    {
                        "id": "me701-u1t4",
                        "title": "Critical Radius of Insulation"
                    }
                ]
            },
            {
                "id": "me701-u2",
                "unitNumber": 2,
                "title": "Extended Surfaces & Transient Conduction",
                "topics": [
                    {
                        "id": "me701-u2t1",
                        "title": "Fins"
                    },
                    {
                        "id": "me701-u2t2",
                        "title": "Fin Efficiency & Effectiveness"
                    },
                    {
                        "id": "me701-u2t3",
                        "title": "Lumped Capacitance Method"
                    },
                    {
                        "id": "me701-u2t4",
                        "title": "Transient Charts"
                    }
                ]
            },
            {
                "id": "me701-u3",
                "unitNumber": 3,
                "title": "Convection",
                "topics": [
                    {
                        "id": "me701-u3t1",
                        "title": "Convection Fundamentals"
                    },
                    {
                        "id": "me701-u3t2",
                        "title": "Dimensionless Numbers"
                    },
                    {
                        "id": "me701-u3t3",
                        "title": "Forced Convection Correlations"
                    },
                    {
                        "id": "me701-u3t4",
                        "title": "Boiling & Condensation"
                    }
                ]
            },
            {
                "id": "me701-u4",
                "unitNumber": 4,
                "title": "Radiation",
                "topics": [
                    {
                        "id": "me701-u4t1",
                        "title": "Radiation Fundamentals"
                    },
                    {
                        "id": "me701-u4t2",
                        "title": "Planck's & Wien's Laws"
                    },
                    {
                        "id": "me701-u4t3",
                        "title": "View Factors"
                    },
                    {
                        "id": "me701-u4t4",
                        "title": "Radiation Exchange & Shields"
                    }
                ]
            },
            {
                "id": "me701-u5",
                "unitNumber": 5,
                "title": "Heat Exchangers & Mass Transfer",
                "topics": [
                    {
                        "id": "me701-u5t1",
                        "title": "Heat Exchanger Types"
                    },
                    {
                        "id": "me701-u5t2",
                        "title": "LMTD Method"
                    },
                    {
                        "id": "me701-u5t3",
                        "title": "NTU-Effectiveness Method"
                    },
                    {
                        "id": "me701-u5t4",
                        "title": "Mass Transfer"
                    }
                ]
            }
        ]
    },
    {
        "id": "me702-ppe",
        "semester": 7,
        "title": "Power Plant Engineering",
        "code": "ME-702(C)",
        "description": "Thermal, hydro, nuclear, gas turbine and diesel plants, non-conventional power and power plant economics.",
        "generated": true,
        "references": [
            {
                "title": "Power Plant Engineering",
                "author": "P. K. Nag"
            },
            {
                "title": "A Course in Power Plant Engineering",
                "author": "Arora & Domkundwar"
            },
            {
                "title": "Power Plant Engineering",
                "author": "R. K. Rajput"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me702-ppe/notes/me702-ppe-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me702-ppe/notes/me702-ppe-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me702-ppe/mock-papers/me702-ppe-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me702-ppe/mock-papers/me702-ppe-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me702-ppe/mock-papers/me702-ppe-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me702-ppe-u1",
                "unitNumber": 1,
                "title": "Introduction & Steam Power Plants",
                "topics": [
                    {
                        "id": "me702-ppe-u1t1",
                        "title": "Energy Scenario & Power Plants"
                    },
                    {
                        "id": "me702-ppe-u1t2",
                        "title": "Layout of Thermal Power Plant"
                    },
                    {
                        "id": "me702-ppe-u1t3",
                        "title": "Coal Handling & Combustion"
                    },
                    {
                        "id": "me702-ppe-u1t4",
                        "title": "Draught & Dust Collection"
                    }
                ]
            },
            {
                "id": "me702-ppe-u2",
                "unitNumber": 2,
                "title": "Hydroelectric Power Plants",
                "topics": [
                    {
                        "id": "me702-ppe-u2t1",
                        "title": "Hydrology & Site Selection"
                    },
                    {
                        "id": "me702-ppe-u2t2",
                        "title": "Hydro Plant Layout"
                    },
                    {
                        "id": "me702-ppe-u2t3",
                        "title": "Classification of Hydro Plants"
                    },
                    {
                        "id": "me702-ppe-u2t4",
                        "title": "Advantages & Limitations"
                    }
                ]
            },
            {
                "id": "me702-ppe-u3",
                "unitNumber": 3,
                "title": "Nuclear & Gas Turbine Plants",
                "topics": [
                    {
                        "id": "me702-ppe-u3t1",
                        "title": "Nuclear Fission & Reactor Components"
                    },
                    {
                        "id": "me702-ppe-u3t2",
                        "title": "Types of Reactors"
                    },
                    {
                        "id": "me702-ppe-u3t3",
                        "title": "Gas Turbine Power Plant"
                    },
                    {
                        "id": "me702-ppe-u3t4",
                        "title": "Combined Cycle Plants"
                    }
                ]
            },
            {
                "id": "me702-ppe-u4",
                "unitNumber": 4,
                "title": "Diesel & Non-conventional Plants",
                "topics": [
                    {
                        "id": "me702-ppe-u4t1",
                        "title": "Diesel Power Plant"
                    },
                    {
                        "id": "me702-ppe-u4t2",
                        "title": "Solar Power Plants"
                    },
                    {
                        "id": "me702-ppe-u4t3",
                        "title": "Wind Power Plants"
                    },
                    {
                        "id": "me702-ppe-u4t4",
                        "title": "Geothermal, Tidal & Biomass"
                    }
                ]
            },
            {
                "id": "me702-ppe-u5",
                "unitNumber": 5,
                "title": "Power Plant Economics",
                "topics": [
                    {
                        "id": "me702-ppe-u5t1",
                        "title": "Load Curves"
                    },
                    {
                        "id": "me702-ppe-u5t2",
                        "title": "Load Factors"
                    },
                    {
                        "id": "me702-ppe-u5t3",
                        "title": "Cost of Power Generation"
                    },
                    {
                        "id": "me702-ppe-u5t4",
                        "title": "Tariffs & Environmental Aspects"
                    }
                ]
            }
        ]
    },
    {
        "id": "me703-or",
        "semester": 6,
        "title": "Operations Research & Supply Chain",
        "code": "ME-703(A)",
        "description": "Linear programming, transportation and assignment, queuing, inventory, project scheduling and supply chain management.",
        "generated": true,
        "references": [
            {
                "title": "Operations Research: An Introduction",
                "author": "Hamdy A. Taha"
            },
            {
                "title": "Operations Research",
                "author": "Kanti Swarup, Gupta & Man Mohan"
            },
            {
                "title": "Supply Chain Management",
                "author": "Chopra & Meindl"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me703-or/notes/me703-or-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me703-or/notes/me703-or-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me703-or/mock-papers/me703-or-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me703-or/mock-papers/me703-or-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me703-or/mock-papers/me703-or-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me703-or-u1",
                "unitNumber": 1,
                "title": "Linear Programming",
                "topics": [
                    {
                        "id": "me703-or-u1t1",
                        "title": "LP Formulation"
                    },
                    {
                        "id": "me703-or-u1t2",
                        "title": "Graphical Method"
                    },
                    {
                        "id": "me703-or-u1t3",
                        "title": "Simplex Method"
                    },
                    {
                        "id": "me703-or-u1t4",
                        "title": "Duality & Sensitivity"
                    }
                ]
            },
            {
                "id": "me703-or-u2",
                "unitNumber": 2,
                "title": "Transportation & Assignment",
                "topics": [
                    {
                        "id": "me703-or-u2t1",
                        "title": "Transportation Problem"
                    },
                    {
                        "id": "me703-or-u2t2",
                        "title": "Optimality Test"
                    },
                    {
                        "id": "me703-or-u2t3",
                        "title": "Assignment Problem"
                    },
                    {
                        "id": "me703-or-u2t4",
                        "title": "Travelling Salesman Problem"
                    }
                ]
            },
            {
                "id": "me703-or-u3",
                "unitNumber": 3,
                "title": "Queuing & Game Theory",
                "topics": [
                    {
                        "id": "me703-or-u3t1",
                        "title": "Queuing Fundamentals"
                    },
                    {
                        "id": "me703-or-u3t2",
                        "title": "M/M/1 Model"
                    },
                    {
                        "id": "me703-or-u3t3",
                        "title": "Game Theory"
                    },
                    {
                        "id": "me703-or-u3t4",
                        "title": "Decision Theory"
                    }
                ]
            },
            {
                "id": "me703-or-u4",
                "unitNumber": 4,
                "title": "Inventory & Project Management",
                "topics": [
                    {
                        "id": "me703-or-u4t1",
                        "title": "Inventory Models"
                    },
                    {
                        "id": "me703-or-u4t2",
                        "title": "Inventory Control Systems"
                    },
                    {
                        "id": "me703-or-u4t3",
                        "title": "CPM"
                    },
                    {
                        "id": "me703-or-u4t4",
                        "title": "PERT & Crashing"
                    }
                ]
            },
            {
                "id": "me703-or-u5",
                "unitNumber": 5,
                "title": "Supply Chain Management",
                "topics": [
                    {
                        "id": "me703-or-u5t1",
                        "title": "Supply Chain Concepts"
                    },
                    {
                        "id": "me703-or-u5t2",
                        "title": "Bullwhip Effect"
                    },
                    {
                        "id": "me703-or-u5t3",
                        "title": "Logistics & Distribution"
                    },
                    {
                        "id": "me703-or-u5t4",
                        "title": "Sourcing & Performance"
                    }
                ]
            }
        ]
    },
    {
        "id": "me801",
        "semester": 8,
        "title": "Refrigeration & Air Conditioning",
        "code": "ME-801",
        "description": "Refrigeration cycles, refrigerants, vapour absorption, psychrometry, air conditioning systems and load calculation.",
        "generated": true,
        "references": [
            {
                "title": "Refrigeration and Air Conditioning",
                "author": "C. P. Arora"
            },
            {
                "title": "A Textbook of Refrigeration and Air Conditioning",
                "author": "R. S. Khurmi"
            },
            {
                "title": "Refrigeration and Air Conditioning",
                "author": "Stoecker & Jones"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me801/notes/me801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me801/notes/me801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me801/mock-papers/me801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me801/mock-papers/me801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me801/mock-papers/me801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me801-u1",
                "unitNumber": 1,
                "title": "Refrigeration Fundamentals",
                "topics": [
                    {
                        "id": "me801-u1t1",
                        "title": "Refrigeration Basics"
                    },
                    {
                        "id": "me801-u1t2",
                        "title": "Reversed Carnot Cycle"
                    },
                    {
                        "id": "me801-u1t3",
                        "title": "Air Refrigeration"
                    },
                    {
                        "id": "me801-u1t4",
                        "title": "Refrigerants"
                    }
                ]
            },
            {
                "id": "me801-u2",
                "unitNumber": 2,
                "title": "Vapour Compression Refrigeration",
                "topics": [
                    {
                        "id": "me801-u2t1",
                        "title": "Simple VCR Cycle"
                    },
                    {
                        "id": "me801-u2t2",
                        "title": "p-h & T-s Diagrams"
                    },
                    {
                        "id": "me801-u2t3",
                        "title": "Subcooling & Superheating"
                    },
                    {
                        "id": "me801-u2t4",
                        "title": "Multistage & Cascade Systems"
                    }
                ]
            },
            {
                "id": "me801-u3",
                "unitNumber": 3,
                "title": "Vapour Absorption & Other Systems",
                "topics": [
                    {
                        "id": "me801-u3t1",
                        "title": "Vapour Absorption System"
                    },
                    {
                        "id": "me801-u3t2",
                        "title": "Electrolux Refrigerator"
                    },
                    {
                        "id": "me801-u3t3",
                        "title": "Steam Jet & Thermoelectric Refrigeration"
                    },
                    {
                        "id": "me801-u3t4",
                        "title": "Refrigeration Components"
                    }
                ]
            },
            {
                "id": "me801-u4",
                "unitNumber": 4,
                "title": "Psychrometry",
                "topics": [
                    {
                        "id": "me801-u4t1",
                        "title": "Psychrometric Properties"
                    },
                    {
                        "id": "me801-u4t2",
                        "title": "Psychrometric Chart"
                    },
                    {
                        "id": "me801-u4t3",
                        "title": "Psychrometric Processes"
                    },
                    {
                        "id": "me801-u4t4",
                        "title": "Bypass Factor & Sensible Heat Factor"
                    }
                ]
            },
            {
                "id": "me801-u5",
                "unitNumber": 5,
                "title": "Air Conditioning Systems",
                "topics": [
                    {
                        "id": "me801-u5t1",
                        "title": "Human Comfort"
                    },
                    {
                        "id": "me801-u5t2",
                        "title": "Cooling Load Calculation"
                    },
                    {
                        "id": "me801-u5t3",
                        "title": "Air Conditioning Systems"
                    },
                    {
                        "id": "me801-u5t4",
                        "title": "Duct Design & Automotive AC"
                    }
                ]
            }
        ]
    },
    {
        "id": "me802-ae",
        "semester": 8,
        "title": "Automobile Engineering",
        "code": "ME-802(A)",
        "description": "Chassis and body, transmission, suspension, steering, brakes, electrical systems and emission control.",
        "generated": true,
        "references": [
            {
                "title": "Automobile Engineering Vol. 1 & 2",
                "author": "Kirpal Singh"
            },
            {
                "title": "Automotive Mechanics",
                "author": "William H. Crouse"
            },
            {
                "title": "Automobile Engineering",
                "author": "R. K. Rajput"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me802-ae/notes/me802-ae-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me802-ae/notes/me802-ae-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me802-ae/mock-papers/me802-ae-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me802-ae/mock-papers/me802-ae-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me802-ae/mock-papers/me802-ae-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me802-ae-u1",
                "unitNumber": 1,
                "title": "Chassis & Body Engineering",
                "topics": [
                    {
                        "id": "me802-ae-u1t1",
                        "title": "Chassis & Frame"
                    },
                    {
                        "id": "me802-ae-u1t2",
                        "title": "Vehicle Layouts"
                    },
                    {
                        "id": "me802-ae-u1t3",
                        "title": "Resistance to Motion"
                    },
                    {
                        "id": "me802-ae-u1t4",
                        "title": "Tractive Effort"
                    }
                ]
            },
            {
                "id": "me802-ae-u2",
                "unitNumber": 2,
                "title": "Transmission System",
                "topics": [
                    {
                        "id": "me802-ae-u2t1",
                        "title": "Clutch"
                    },
                    {
                        "id": "me802-ae-u2t2",
                        "title": "Gearbox"
                    },
                    {
                        "id": "me802-ae-u2t3",
                        "title": "Automatic Transmission"
                    },
                    {
                        "id": "me802-ae-u2t4",
                        "title": "Propeller Shaft & Differential"
                    }
                ]
            },
            {
                "id": "me802-ae-u3",
                "unitNumber": 3,
                "title": "Suspension & Steering",
                "topics": [
                    {
                        "id": "me802-ae-u3t1",
                        "title": "Suspension Systems"
                    },
                    {
                        "id": "me802-ae-u3t2",
                        "title": "Shock Absorbers"
                    },
                    {
                        "id": "me802-ae-u3t3",
                        "title": "Steering Geometry"
                    },
                    {
                        "id": "me802-ae-u3t4",
                        "title": "Steering Gears & Power Steering"
                    }
                ]
            },
            {
                "id": "me802-ae-u4",
                "unitNumber": 4,
                "title": "Brakes, Wheels & Tyres",
                "topics": [
                    {
                        "id": "me802-ae-u4t1",
                        "title": "Braking Systems"
                    },
                    {
                        "id": "me802-ae-u4t2",
                        "title": "ABS & Advanced Braking"
                    },
                    {
                        "id": "me802-ae-u4t3",
                        "title": "Wheels & Tyres"
                    },
                    {
                        "id": "me802-ae-u4t4",
                        "title": "Wheel Alignment & Balancing"
                    }
                ]
            },
            {
                "id": "me802-ae-u5",
                "unitNumber": 5,
                "title": "Electrical Systems & Emission Control",
                "topics": [
                    {
                        "id": "me802-ae-u5t1",
                        "title": "Battery & Charging System"
                    },
                    {
                        "id": "me802-ae-u5t2",
                        "title": "Starting & Lighting Systems"
                    },
                    {
                        "id": "me802-ae-u5t3",
                        "title": "Vehicle Electronics"
                    },
                    {
                        "id": "me802-ae-u5t4",
                        "title": "Emission Control & Alternative Vehicles"
                    }
                ]
            }
        ]
    },
    {
        "id": "me803-eca",
        "semester": 8,
        "title": "Energy Conservation & Audit",
        "code": "ME-803(B)",
        "description": "Energy scenario, audit methodology, energy efficiency in thermal and electrical systems, waste heat recovery and energy management.",
        "generated": true,
        "references": [
            {
                "title": "BEE Guide Books for Energy Managers and Auditors",
                "author": "Bureau of Energy Efficiency"
            },
            {
                "title": "Energy Management Handbook",
                "author": "Wayne C. Turner"
            },
            {
                "title": "Handbook of Energy Audits",
                "author": "Albert Thumann"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/me803-eca/notes/me803-eca-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/me803-eca/notes/me803-eca-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/me803-eca/mock-papers/me803-eca-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/me803-eca/mock-papers/me803-eca-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/me803-eca/mock-papers/me803-eca-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "me803-eca-u1",
                "unitNumber": 1,
                "title": "Energy Scenario & Conservation",
                "topics": [
                    {
                        "id": "me803-eca-u1t1",
                        "title": "Energy Scenario"
                    },
                    {
                        "id": "me803-eca-u1t2",
                        "title": "Energy Conservation Act"
                    },
                    {
                        "id": "me803-eca-u1t3",
                        "title": "Energy Pricing & Policy"
                    },
                    {
                        "id": "me803-eca-u1t4",
                        "title": "Principles of Conservation"
                    }
                ]
            },
            {
                "id": "me803-eca-u2",
                "unitNumber": 2,
                "title": "Energy Audit",
                "topics": [
                    {
                        "id": "me803-eca-u2t1",
                        "title": "Types of Energy Audit"
                    },
                    {
                        "id": "me803-eca-u2t2",
                        "title": "Audit Methodology"
                    },
                    {
                        "id": "me803-eca-u2t3",
                        "title": "Audit Instruments"
                    },
                    {
                        "id": "me803-eca-u2t4",
                        "title": "Energy Accounting"
                    }
                ]
            },
            {
                "id": "me803-eca-u3",
                "unitNumber": 3,
                "title": "Thermal Systems Efficiency",
                "topics": [
                    {
                        "id": "me803-eca-u3t1",
                        "title": "Boilers & Furnaces"
                    },
                    {
                        "id": "me803-eca-u3t2",
                        "title": "Steam Systems"
                    },
                    {
                        "id": "me803-eca-u3t3",
                        "title": "Waste Heat Recovery"
                    },
                    {
                        "id": "me803-eca-u3t4",
                        "title": "Cogeneration"
                    }
                ]
            },
            {
                "id": "me803-eca-u4",
                "unitNumber": 4,
                "title": "Electrical Systems Efficiency",
                "topics": [
                    {
                        "id": "me803-eca-u4t1",
                        "title": "Electric Motors"
                    },
                    {
                        "id": "me803-eca-u4t2",
                        "title": "Pumps, Fans & Compressors"
                    },
                    {
                        "id": "me803-eca-u4t3",
                        "title": "Lighting Systems"
                    },
                    {
                        "id": "me803-eca-u4t4",
                        "title": "Power Factor Improvement"
                    }
                ]
            },
            {
                "id": "me803-eca-u5",
                "unitNumber": 5,
                "title": "Energy Management & Economics",
                "topics": [
                    {
                        "id": "me803-eca-u5t1",
                        "title": "Energy Management System"
                    },
                    {
                        "id": "me803-eca-u5t2",
                        "title": "Financial Analysis"
                    },
                    {
                        "id": "me803-eca-u5t3",
                        "title": "Monitoring & Targeting"
                    },
                    {
                        "id": "me803-eca-u5t4",
                        "title": "Green Buildings & Renewables"
                    }
                ]
            }
        ]
    },
    {
        "id": "au501",
        "semester": 5,
        "title": "Automotive Engines",
        "code": "AU-501",
        "description": "Engine construction, fuel systems, combustion, engine management, performance and testing of automotive engines.",
        "generated": true,
        "references": [
            {
                "title": "Automotive Engines",
                "author": "Srinivasan"
            },
            {
                "title": "Internal Combustion Engine Fundamentals",
                "author": "John B. Heywood"
            },
            {
                "title": "Automotive Mechanics",
                "author": "William H. Crouse"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au501/notes/au501-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au501/notes/au501-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au501/mock-papers/au501-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au501/mock-papers/au501-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au501/mock-papers/au501-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au501-u1",
                "unitNumber": 1,
                "title": "Engine Construction",
                "topics": [
                    {
                        "id": "au501-u1t1",
                        "title": "Engine Classification for Vehicles"
                    },
                    {
                        "id": "au501-u1t2",
                        "title": "Cylinder Block & Head"
                    },
                    {
                        "id": "au501-u1t3",
                        "title": "Piston, Rings & Connecting Rod"
                    },
                    {
                        "id": "au501-u1t4",
                        "title": "Crankshaft, Camshaft & Valve Train"
                    }
                ]
            },
            {
                "id": "au501-u2",
                "unitNumber": 2,
                "title": "Fuel Systems",
                "topics": [
                    {
                        "id": "au501-u2t1",
                        "title": "Petrol Fuel Supply"
                    },
                    {
                        "id": "au501-u2t2",
                        "title": "Electronic Fuel Injection"
                    },
                    {
                        "id": "au501-u2t3",
                        "title": "Diesel Fuel Systems"
                    },
                    {
                        "id": "au501-u2t4",
                        "title": "Alternative Fuel Systems"
                    }
                ]
            },
            {
                "id": "au501-u3",
                "unitNumber": 3,
                "title": "Combustion & Engine Management",
                "topics": [
                    {
                        "id": "au501-u3t1",
                        "title": "SI Engine Combustion & Knock"
                    },
                    {
                        "id": "au501-u3t2",
                        "title": "CI Engine Combustion"
                    },
                    {
                        "id": "au501-u3t3",
                        "title": "Engine Management Systems"
                    },
                    {
                        "id": "au501-u3t4",
                        "title": "Variable Valve Timing"
                    }
                ]
            },
            {
                "id": "au501-u4",
                "unitNumber": 4,
                "title": "Engine Performance",
                "topics": [
                    {
                        "id": "au501-u4t1",
                        "title": "Performance Characteristics"
                    },
                    {
                        "id": "au501-u4t2",
                        "title": "Engine Testing Methods"
                    },
                    {
                        "id": "au501-u4t3",
                        "title": "Supercharging & Turbocharging"
                    },
                    {
                        "id": "au501-u4t4",
                        "title": "Engine Downsizing"
                    }
                ]
            },
            {
                "id": "au501-u5",
                "unitNumber": 5,
                "title": "Cooling, Lubrication & Emissions",
                "topics": [
                    {
                        "id": "au501-u5t1",
                        "title": "Cooling System Components"
                    },
                    {
                        "id": "au501-u5t2",
                        "title": "Lubrication System"
                    },
                    {
                        "id": "au501-u5t3",
                        "title": "Exhaust System"
                    },
                    {
                        "id": "au501-u5t4",
                        "title": "Emission Aftertreatment"
                    }
                ]
            }
        ]
    },
    {
        "id": "au502",
        "semester": 5,
        "title": "Automotive Chassis System",
        "code": "AU-502",
        "description": "Frames, front axle and steering, suspension, rear axle and final drive, wheels, tyres and brakes.",
        "generated": true,
        "references": [
            {
                "title": "Automotive Chassis",
                "author": "P. M. Heldt"
            },
            {
                "title": "Automobile Engineering Vol. 1",
                "author": "Kirpal Singh"
            },
            {
                "title": "The Automotive Chassis",
                "author": "J. Reimpell & H. Stoll"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au502/notes/au502-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au502/notes/au502-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au502/mock-papers/au502-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au502/mock-papers/au502-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au502/mock-papers/au502-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au502-u1",
                "unitNumber": 1,
                "title": "Frames & Body",
                "topics": [
                    {
                        "id": "au502-u1t1",
                        "title": "Types of Frames"
                    },
                    {
                        "id": "au502-u1t2",
                        "title": "Frame Materials & Loads"
                    },
                    {
                        "id": "au502-u1t3",
                        "title": "Vehicle Dimensions"
                    },
                    {
                        "id": "au502-u1t4",
                        "title": "Weight Distribution"
                    }
                ]
            },
            {
                "id": "au502-u2",
                "unitNumber": 2,
                "title": "Front Axle & Steering",
                "topics": [
                    {
                        "id": "au502-u2t1",
                        "title": "Front Axle Types"
                    },
                    {
                        "id": "au502-u2t2",
                        "title": "Steering Geometry"
                    },
                    {
                        "id": "au502-u2t3",
                        "title": "Steering Mechanisms"
                    },
                    {
                        "id": "au502-u2t4",
                        "title": "Steering Gearboxes & Power Steering"
                    }
                ]
            },
            {
                "id": "au502-u3",
                "unitNumber": 3,
                "title": "Suspension",
                "topics": [
                    {
                        "id": "au502-u3t1",
                        "title": "Suspension Requirements"
                    },
                    {
                        "id": "au502-u3t2",
                        "title": "Springs"
                    },
                    {
                        "id": "au502-u3t3",
                        "title": "Independent Suspension Types"
                    },
                    {
                        "id": "au502-u3t4",
                        "title": "Dampers & Stabilisers"
                    }
                ]
            },
            {
                "id": "au502-u4",
                "unitNumber": 4,
                "title": "Rear Axle & Final Drive",
                "topics": [
                    {
                        "id": "au502-u4t1",
                        "title": "Final Drive"
                    },
                    {
                        "id": "au502-u4t2",
                        "title": "Differential"
                    },
                    {
                        "id": "au502-u4t3",
                        "title": "Rear Axle Types"
                    },
                    {
                        "id": "au502-u4t4",
                        "title": "Rear Axle Drives"
                    }
                ]
            },
            {
                "id": "au502-u5",
                "unitNumber": 5,
                "title": "Wheels, Tyres & Brakes",
                "topics": [
                    {
                        "id": "au502-u5t1",
                        "title": "Wheels"
                    },
                    {
                        "id": "au502-u5t2",
                        "title": "Tyres"
                    },
                    {
                        "id": "au502-u5t3",
                        "title": "Brake Systems"
                    },
                    {
                        "id": "au502-u5t4",
                        "title": "Brake Performance"
                    }
                ]
            }
        ]
    },
    {
        "id": "au503-ats",
        "semester": 5,
        "title": "Automotive Transmission System",
        "code": "AU-503(A)",
        "description": "Clutches, manual and automatic gearboxes, fluid drives, CVT, driveline and hybrid transmissions.",
        "generated": true,
        "references": [
            {
                "title": "Automotive Transmissions",
                "author": "Naunheimer, Bertsche et al."
            },
            {
                "title": "Automobile Engineering Vol. 1",
                "author": "Kirpal Singh"
            },
            {
                "title": "Automotive Mechanics",
                "author": "William H. Crouse"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au503-ats/notes/au503-ats-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au503-ats/notes/au503-ats-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au503-ats/mock-papers/au503-ats-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au503-ats/mock-papers/au503-ats-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au503-ats/mock-papers/au503-ats-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au503-ats-u1",
                "unitNumber": 1,
                "title": "Clutches",
                "topics": [
                    {
                        "id": "au503-ats-u1t1",
                        "title": "Clutch Requirements"
                    },
                    {
                        "id": "au503-ats-u1t2",
                        "title": "Clutch Types"
                    },
                    {
                        "id": "au503-ats-u1t3",
                        "title": "Clutch Torque Calculation"
                    },
                    {
                        "id": "au503-ats-u1t4",
                        "title": "Clutch Operation & Faults"
                    }
                ]
            },
            {
                "id": "au503-ats-u2",
                "unitNumber": 2,
                "title": "Manual Gearbox",
                "topics": [
                    {
                        "id": "au503-ats-u2t1",
                        "title": "Need for Gearbox"
                    },
                    {
                        "id": "au503-ats-u2t2",
                        "title": "Gearbox Types"
                    },
                    {
                        "id": "au503-ats-u2t3",
                        "title": "Gear Ratio Design"
                    },
                    {
                        "id": "au503-ats-u2t4",
                        "title": "Gear Shift Mechanism"
                    }
                ]
            },
            {
                "id": "au503-ats-u3",
                "unitNumber": 3,
                "title": "Fluid Drives & Automatic Transmission",
                "topics": [
                    {
                        "id": "au503-ats-u3t1",
                        "title": "Fluid Coupling"
                    },
                    {
                        "id": "au503-ats-u3t2",
                        "title": "Torque Converter"
                    },
                    {
                        "id": "au503-ats-u3t3",
                        "title": "Epicyclic Gear Sets"
                    },
                    {
                        "id": "au503-ats-u3t4",
                        "title": "Automatic Transmission Control"
                    }
                ]
            },
            {
                "id": "au503-ats-u4",
                "unitNumber": 4,
                "title": "CVT, DCT & AMT",
                "topics": [
                    {
                        "id": "au503-ats-u4t1",
                        "title": "Continuously Variable Transmission"
                    },
                    {
                        "id": "au503-ats-u4t2",
                        "title": "Dual Clutch Transmission"
                    },
                    {
                        "id": "au503-ats-u4t3",
                        "title": "Automated Manual Transmission"
                    },
                    {
                        "id": "au503-ats-u4t4",
                        "title": "Electric & Hybrid Transmissions"
                    }
                ]
            },
            {
                "id": "au503-ats-u5",
                "unitNumber": 5,
                "title": "Driveline",
                "topics": [
                    {
                        "id": "au503-ats-u5t1",
                        "title": "Propeller Shaft"
                    },
                    {
                        "id": "au503-ats-u5t2",
                        "title": "Universal & CV Joints"
                    },
                    {
                        "id": "au503-ats-u5t3",
                        "title": "Transfer Case & 4WD"
                    },
                    {
                        "id": "au503-ats-u5t4",
                        "title": "Driveline Vibration & Losses"
                    }
                ]
            }
        ]
    },
    {
        "id": "au503-aaf",
        "semester": 5,
        "title": "Alternate Automotive Fuels & Emissions",
        "code": "AU-503(C)",
        "description": "Alternative fuels, their properties and engine adaptation, emission formation, measurement and control, norms.",
        "generated": true,
        "references": [
            {
                "title": "Alternative Fuels",
                "author": "S. S. Thipse"
            },
            {
                "title": "Automotive Emission Control",
                "author": "Crouse & Anglin"
            },
            {
                "title": "Internal Combustion Engines",
                "author": "V. Ganesan"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au503-aaf/notes/au503-aaf-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au503-aaf/notes/au503-aaf-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au503-aaf/mock-papers/au503-aaf-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au503-aaf/mock-papers/au503-aaf-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au503-aaf/mock-papers/au503-aaf-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au503-aaf-u1",
                "unitNumber": 1,
                "title": "Need for Alternative Fuels",
                "topics": [
                    {
                        "id": "au503-aaf-u1t1",
                        "title": "Energy Crisis & Fuel Scenario"
                    },
                    {
                        "id": "au503-aaf-u1t2",
                        "title": "Fuel Quality Parameters"
                    },
                    {
                        "id": "au503-aaf-u1t3",
                        "title": "Classification of Alternative Fuels"
                    },
                    {
                        "id": "au503-aaf-u1t4",
                        "title": "Fuel Policy in India"
                    }
                ]
            },
            {
                "id": "au503-aaf-u2",
                "unitNumber": 2,
                "title": "Alcohols & Biodiesel",
                "topics": [
                    {
                        "id": "au503-aaf-u2t1",
                        "title": "Alcohol Fuels"
                    },
                    {
                        "id": "au503-aaf-u2t2",
                        "title": "Alcohol in Engines"
                    },
                    {
                        "id": "au503-aaf-u2t3",
                        "title": "Biodiesel"
                    },
                    {
                        "id": "au503-aaf-u2t4",
                        "title": "Vegetable Oils & Biodiesel Issues"
                    }
                ]
            },
            {
                "id": "au503-aaf-u3",
                "unitNumber": 3,
                "title": "Gaseous Fuels",
                "topics": [
                    {
                        "id": "au503-aaf-u3t1",
                        "title": "CNG & LPG"
                    },
                    {
                        "id": "au503-aaf-u3t2",
                        "title": "Hydrogen as Fuel"
                    },
                    {
                        "id": "au503-aaf-u3t3",
                        "title": "Biogas & Producer Gas"
                    },
                    {
                        "id": "au503-aaf-u3t4",
                        "title": "Fuel Cells for Vehicles"
                    }
                ]
            },
            {
                "id": "au503-aaf-u4",
                "unitNumber": 4,
                "title": "Emission Formation",
                "topics": [
                    {
                        "id": "au503-aaf-u4t1",
                        "title": "Pollutants from SI Engines"
                    },
                    {
                        "id": "au503-aaf-u4t2",
                        "title": "Pollutants from CI Engines"
                    },
                    {
                        "id": "au503-aaf-u4t3",
                        "title": "Evaporative & Crankcase Emissions"
                    },
                    {
                        "id": "au503-aaf-u4t4",
                        "title": "Effects of Pollutants"
                    }
                ]
            },
            {
                "id": "au503-aaf-u5",
                "unitNumber": 5,
                "title": "Emission Control & Norms",
                "topics": [
                    {
                        "id": "au503-aaf-u5t1",
                        "title": "Engine Modifications"
                    },
                    {
                        "id": "au503-aaf-u5t2",
                        "title": "Aftertreatment Devices"
                    },
                    {
                        "id": "au503-aaf-u5t3",
                        "title": "Emission Measurement"
                    },
                    {
                        "id": "au503-aaf-u5t4",
                        "title": "Emission Norms"
                    }
                ]
            }
        ]
    },
    {
        "id": "au601",
        "semester": 6,
        "title": "Automotive Electrical & Electronics",
        "code": "AU-601",
        "description": "Batteries, charging, starting, ignition, lighting, sensors, actuators, ECUs and in-vehicle networks.",
        "generated": true,
        "references": [
            {
                "title": "Automotive Electrical Equipment",
                "author": "P. L. Kohli"
            },
            {
                "title": "Automobile Electrical and Electronic Systems",
                "author": "Tom Denton"
            },
            {
                "title": "Understanding Automotive Electronics",
                "author": "William B. Ribbens"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au601/notes/au601-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au601/notes/au601-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au601/mock-papers/au601-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au601/mock-papers/au601-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au601/mock-papers/au601-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au601-u1",
                "unitNumber": 1,
                "title": "Batteries & Charging",
                "topics": [
                    {
                        "id": "au601-u1t1",
                        "title": "Lead-acid Battery"
                    },
                    {
                        "id": "au601-u1t2",
                        "title": "Maintenance-free & Advanced Batteries"
                    },
                    {
                        "id": "au601-u1t3",
                        "title": "Alternator & Charging System"
                    },
                    {
                        "id": "au601-u1t4",
                        "title": "Charging System Faults"
                    }
                ]
            },
            {
                "id": "au601-u2",
                "unitNumber": 2,
                "title": "Starting & Ignition Systems",
                "topics": [
                    {
                        "id": "au601-u2t1",
                        "title": "Starting System"
                    },
                    {
                        "id": "au601-u2t2",
                        "title": "Conventional Ignition"
                    },
                    {
                        "id": "au601-u2t3",
                        "title": "Electronic & Distributorless Ignition"
                    },
                    {
                        "id": "au601-u2t4",
                        "title": "Spark Plugs"
                    }
                ]
            },
            {
                "id": "au601-u3",
                "unitNumber": 3,
                "title": "Lighting & Accessories",
                "topics": [
                    {
                        "id": "au601-u3t1",
                        "title": "Lighting System"
                    },
                    {
                        "id": "au601-u3t2",
                        "title": "Signalling & Instrumentation"
                    },
                    {
                        "id": "au601-u3t3",
                        "title": "Wiring & Protection"
                    },
                    {
                        "id": "au601-u3t4",
                        "title": "Comfort Accessories"
                    }
                ]
            },
            {
                "id": "au601-u4",
                "unitNumber": 4,
                "title": "Sensors & Actuators",
                "topics": [
                    {
                        "id": "au601-u4t1",
                        "title": "Engine Sensors"
                    },
                    {
                        "id": "au601-u4t2",
                        "title": "Exhaust & Air Sensors"
                    },
                    {
                        "id": "au601-u4t3",
                        "title": "Chassis Sensors"
                    },
                    {
                        "id": "au601-u4t4",
                        "title": "Actuators"
                    }
                ]
            },
            {
                "id": "au601-u5",
                "unitNumber": 5,
                "title": "Vehicle Electronics & Networks",
                "topics": [
                    {
                        "id": "au601-u5t1",
                        "title": "Electronic Control Unit"
                    },
                    {
                        "id": "au601-u5t2",
                        "title": "In-vehicle Networks"
                    },
                    {
                        "id": "au601-u5t3",
                        "title": "Safety Electronics"
                    },
                    {
                        "id": "au601-u5t4",
                        "title": "Diagnostics & ADAS"
                    }
                ]
            }
        ]
    },
    {
        "id": "au603",
        "semester": 6,
        "title": "Vehicle Dynamics",
        "code": "AU-603",
        "description": "Tyre mechanics, longitudinal, lateral and vertical dynamics, handling, ride and stability.",
        "generated": true,
        "references": [
            {
                "title": "Fundamentals of Vehicle Dynamics",
                "author": "Thomas D. Gillespie"
            },
            {
                "title": "Vehicle Dynamics: Theory and Application",
                "author": "Reza N. Jazar"
            },
            {
                "title": "Tire and Vehicle Dynamics",
                "author": "Hans B. Pacejka"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au603/notes/au603-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au603/notes/au603-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au603/mock-papers/au603-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au603/mock-papers/au603-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au603/mock-papers/au603-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au603-u1",
                "unitNumber": 1,
                "title": "Tyre Mechanics",
                "topics": [
                    {
                        "id": "au603-u1t1",
                        "title": "Tyre Forces"
                    },
                    {
                        "id": "au603-u1t2",
                        "title": "Cornering Force & Slip Angle"
                    },
                    {
                        "id": "au603-u1t3",
                        "title": "Tyre Models"
                    },
                    {
                        "id": "au603-u1t4",
                        "title": "Tyre Characteristics"
                    }
                ]
            },
            {
                "id": "au603-u2",
                "unitNumber": 2,
                "title": "Longitudinal Dynamics",
                "topics": [
                    {
                        "id": "au603-u2t1",
                        "title": "Tractive Performance"
                    },
                    {
                        "id": "au603-u2t2",
                        "title": "Braking Dynamics"
                    },
                    {
                        "id": "au603-u2t3",
                        "title": "Aerodynamic Resistance"
                    },
                    {
                        "id": "au603-u2t4",
                        "title": "Fuel Economy & Performance"
                    }
                ]
            },
            {
                "id": "au603-u3",
                "unitNumber": 3,
                "title": "Lateral Dynamics & Handling",
                "topics": [
                    {
                        "id": "au603-u3t1",
                        "title": "Steady-state Cornering"
                    },
                    {
                        "id": "au603-u3t2",
                        "title": "Understeer & Oversteer"
                    },
                    {
                        "id": "au603-u3t3",
                        "title": "Critical & Characteristic Speed"
                    },
                    {
                        "id": "au603-u3t4",
                        "title": "Rollover & Load Transfer"
                    }
                ]
            },
            {
                "id": "au603-u4",
                "unitNumber": 4,
                "title": "Vertical Dynamics & Ride",
                "topics": [
                    {
                        "id": "au603-u4t1",
                        "title": "Ride Comfort"
                    },
                    {
                        "id": "au603-u4t2",
                        "title": "Quarter Car Model"
                    },
                    {
                        "id": "au603-u4t3",
                        "title": "Pitch & Bounce"
                    },
                    {
                        "id": "au603-u4t4",
                        "title": "Suspension Tuning"
                    }
                ]
            },
            {
                "id": "au603-u5",
                "unitNumber": 5,
                "title": "Stability & Control Systems",
                "topics": [
                    {
                        "id": "au603-u5t1",
                        "title": "Directional Stability"
                    },
                    {
                        "id": "au603-u5t2",
                        "title": "Electronic Stability Control"
                    },
                    {
                        "id": "au603-u5t3",
                        "title": "Active Chassis Systems"
                    },
                    {
                        "id": "au603-u5t4",
                        "title": "Vehicle Testing"
                    }
                ]
            }
        ]
    },
    {
        "id": "au702",
        "semester": 7,
        "title": "Vehicle Body Engineering & Aerodynamics",
        "code": "AU-703",
        "description": "Car body design, materials, safety, aerodynamics, bus and commercial vehicle bodies.",
        "generated": true,
        "references": [
            {
                "title": "Vehicle Body Engineering",
                "author": "J. Powloski"
            },
            {
                "title": "Aerodynamics of Road Vehicles",
                "author": "Wolf-Heinrich Hucho"
            },
            {
                "title": "Automotive Body Design",
                "author": "Giles"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au702/notes/au702-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au702/notes/au702-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au702/mock-papers/au702-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au702/mock-papers/au702-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au702/mock-papers/au702-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au702-u1",
                "unitNumber": 1,
                "title": "Car Body Design",
                "topics": [
                    {
                        "id": "au702-u1t1",
                        "title": "Body Types"
                    },
                    {
                        "id": "au702-u1t2",
                        "title": "Body Construction"
                    },
                    {
                        "id": "au702-u1t3",
                        "title": "Visibility & Ergonomics"
                    },
                    {
                        "id": "au702-u1t4",
                        "title": "Body Materials"
                    }
                ]
            },
            {
                "id": "au702-u2",
                "unitNumber": 2,
                "title": "Vehicle Aerodynamics",
                "topics": [
                    {
                        "id": "au702-u2t1",
                        "title": "Aerodynamic Forces"
                    },
                    {
                        "id": "au702-u2t2",
                        "title": "Drag Reduction"
                    },
                    {
                        "id": "au702-u2t3",
                        "title": "Aerodynamic Devices"
                    },
                    {
                        "id": "au702-u2t4",
                        "title": "Wind Tunnel Testing"
                    }
                ]
            },
            {
                "id": "au702-u3",
                "unitNumber": 3,
                "title": "Body Safety",
                "topics": [
                    {
                        "id": "au702-u3t1",
                        "title": "Passive Safety"
                    },
                    {
                        "id": "au702-u3t2",
                        "title": "Crash Testing"
                    },
                    {
                        "id": "au702-u3t3",
                        "title": "Restraint Systems"
                    },
                    {
                        "id": "au702-u3t4",
                        "title": "Pedestrian Safety"
                    }
                ]
            },
            {
                "id": "au702-u4",
                "unitNumber": 4,
                "title": "Bus & Commercial Vehicle Bodies",
                "topics": [
                    {
                        "id": "au702-u4t1",
                        "title": "Bus Body Types"
                    },
                    {
                        "id": "au702-u4t2",
                        "title": "Bus Body Construction"
                    },
                    {
                        "id": "au702-u4t3",
                        "title": "Commercial Vehicle Bodies"
                    },
                    {
                        "id": "au702-u4t4",
                        "title": "Driver Cabin Design"
                    }
                ]
            },
            {
                "id": "au702-u5",
                "unitNumber": 5,
                "title": "Body Manufacturing & Finishing",
                "topics": [
                    {
                        "id": "au702-u5t1",
                        "title": "Panel Manufacturing"
                    },
                    {
                        "id": "au702-u5t2",
                        "title": "Painting Process"
                    },
                    {
                        "id": "au702-u5t3",
                        "title": "Corrosion Protection"
                    },
                    {
                        "id": "au702-u5t4",
                        "title": "Interior Trim & NVH"
                    }
                ]
            }
        ]
    },
    {
        "id": "au703",
        "semester": 7,
        "title": "Electric & Hybrid Vehicles",
        "code": "AU-704",
        "description": "EV architecture, motors, batteries, power electronics, charging and hybrid configurations.",
        "generated": true,
        "references": [
            {
                "title": "Modern Electric, Hybrid Electric and Fuel Cell Vehicles",
                "author": "Ehsani, Gao & Emadi"
            },
            {
                "title": "Electric and Hybrid Vehicles",
                "author": "Tom Denton"
            },
            {
                "title": "Electric Vehicle Technology Explained",
                "author": "James Larminie & John Lowry"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au703/notes/au703-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au703/notes/au703-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au703/mock-papers/au703-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au703/mock-papers/au703-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au703/mock-papers/au703-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au703-u1",
                "unitNumber": 1,
                "title": "Introduction to Electric Vehicles",
                "topics": [
                    {
                        "id": "au703-u1t1",
                        "title": "History & Need for EVs"
                    },
                    {
                        "id": "au703-u1t2",
                        "title": "EV Architecture"
                    },
                    {
                        "id": "au703-u1t3",
                        "title": "EV Types"
                    },
                    {
                        "id": "au703-u1t4",
                        "title": "Vehicle Performance"
                    }
                ]
            },
            {
                "id": "au703-u2",
                "unitNumber": 2,
                "title": "Electric Motors for EVs",
                "topics": [
                    {
                        "id": "au703-u2t1",
                        "title": "DC Motors"
                    },
                    {
                        "id": "au703-u2t2",
                        "title": "Induction Motors"
                    },
                    {
                        "id": "au703-u2t3",
                        "title": "Permanent Magnet Motors"
                    },
                    {
                        "id": "au703-u2t4",
                        "title": "Switched Reluctance Motors"
                    }
                ]
            },
            {
                "id": "au703-u3",
                "unitNumber": 3,
                "title": "Batteries & Energy Storage",
                "topics": [
                    {
                        "id": "au703-u3t1",
                        "title": "Battery Types"
                    },
                    {
                        "id": "au703-u3t2",
                        "title": "Battery Parameters"
                    },
                    {
                        "id": "au703-u3t3",
                        "title": "Battery Management System"
                    },
                    {
                        "id": "au703-u3t4",
                        "title": "Other Storage Devices"
                    }
                ]
            },
            {
                "id": "au703-u4",
                "unitNumber": 4,
                "title": "Power Electronics & Charging",
                "topics": [
                    {
                        "id": "au703-u4t1",
                        "title": "Power Converters"
                    },
                    {
                        "id": "au703-u4t2",
                        "title": "Motor Drives"
                    },
                    {
                        "id": "au703-u4t3",
                        "title": "EV Charging"
                    },
                    {
                        "id": "au703-u4t4",
                        "title": "Charging Infrastructure"
                    }
                ]
            },
            {
                "id": "au703-u5",
                "unitNumber": 5,
                "title": "Hybrid Vehicles",
                "topics": [
                    {
                        "id": "au703-u5t1",
                        "title": "Hybrid Concepts"
                    },
                    {
                        "id": "au703-u5t2",
                        "title": "Series Hybrid"
                    },
                    {
                        "id": "au703-u5t3",
                        "title": "Parallel Hybrid"
                    },
                    {
                        "id": "au703-u5t4",
                        "title": "Series-Parallel Hybrid & Control"
                    }
                ]
            }
        ]
    },
    {
        "id": "au801",
        "semester": 8,
        "title": "Vehicle Maintenance & Fault Diagnosis",
        "code": "AU-801",
        "description": "Maintenance types, workshop practice, engine and chassis diagnosis, electrical troubleshooting and diagnostic tools.",
        "generated": true,
        "references": [
            {
                "title": "Automotive Mechanics",
                "author": "William H. Crouse"
            },
            {
                "title": "Vehicle Maintenance and Garage Practice",
                "author": "Jigar A. Doshi"
            },
            {
                "title": "Automobile Electrical and Electronic Systems",
                "author": "Tom Denton"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au801/notes/au801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au801/notes/au801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au801/mock-papers/au801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au801/mock-papers/au801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au801/mock-papers/au801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au801-u1",
                "unitNumber": 1,
                "title": "Maintenance Fundamentals",
                "topics": [
                    {
                        "id": "au801-u1t1",
                        "title": "Types of Maintenance"
                    },
                    {
                        "id": "au801-u1t2",
                        "title": "Service Schedules"
                    },
                    {
                        "id": "au801-u1t3",
                        "title": "Workshop Layout & Tools"
                    },
                    {
                        "id": "au801-u1t4",
                        "title": "Workshop Safety"
                    }
                ]
            },
            {
                "id": "au801-u2",
                "unitNumber": 2,
                "title": "Engine Diagnosis & Overhaul",
                "topics": [
                    {
                        "id": "au801-u2t1",
                        "title": "Engine Fault Diagnosis"
                    },
                    {
                        "id": "au801-u2t2",
                        "title": "Engine Overhaul"
                    },
                    {
                        "id": "au801-u2t3",
                        "title": "Fuel System Diagnosis"
                    },
                    {
                        "id": "au801-u2t4",
                        "title": "Cooling & Lubrication Faults"
                    }
                ]
            },
            {
                "id": "au801-u3",
                "unitNumber": 3,
                "title": "Chassis Maintenance",
                "topics": [
                    {
                        "id": "au801-u3t1",
                        "title": "Clutch & Transmission Faults"
                    },
                    {
                        "id": "au801-u3t2",
                        "title": "Brake Maintenance"
                    },
                    {
                        "id": "au801-u3t3",
                        "title": "Suspension & Steering Faults"
                    },
                    {
                        "id": "au801-u3t4",
                        "title": "Tyre Maintenance"
                    }
                ]
            },
            {
                "id": "au801-u4",
                "unitNumber": 4,
                "title": "Electrical Diagnosis",
                "topics": [
                    {
                        "id": "au801-u4t1",
                        "title": "Battery & Charging Tests"
                    },
                    {
                        "id": "au801-u4t2",
                        "title": "Starting System Diagnosis"
                    },
                    {
                        "id": "au801-u4t3",
                        "title": "Wiring Faults"
                    },
                    {
                        "id": "au801-u4t4",
                        "title": "Lighting & Accessory Faults"
                    }
                ]
            },
            {
                "id": "au801-u5",
                "unitNumber": 5,
                "title": "Diagnostic Tools & Inspection",
                "topics": [
                    {
                        "id": "au801-u5t1",
                        "title": "On-board Diagnostics"
                    },
                    {
                        "id": "au801-u5t2",
                        "title": "Scan Tools & Oscilloscopes"
                    },
                    {
                        "id": "au801-u5t3",
                        "title": "Vehicle Inspection & Certification"
                    },
                    {
                        "id": "au801-u5t4",
                        "title": "Fleet Maintenance Management"
                    }
                ]
            }
        ]
    },
    {
        "id": "au802",
        "semester": 8,
        "title": "Automotive Safety & Legislation",
        "code": "AU-802",
        "description": "Active and passive safety, crash dynamics, occupant protection, motor vehicle law, homologation and type approval.",
        "generated": true,
        "references": [
            {
                "title": "Vehicle Safety",
                "author": "Bosch Automotive Handbook (Safety chapters)"
            },
            {
                "title": "Motor Vehicles Act 1988 (as amended 2019)",
                "author": "Government of India"
            },
            {
                "title": "Central Motor Vehicle Rules 1989",
                "author": "Ministry of Road Transport & Highways"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/au802/notes/au802-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/au802/notes/au802-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/au802/mock-papers/au802-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/au802/mock-papers/au802-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/au802/mock-papers/au802-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "au802-u1",
                "unitNumber": 1,
                "title": "Introduction to Vehicle Safety",
                "topics": [
                    {
                        "id": "au802-u1t1",
                        "title": "Road Safety Scenario"
                    },
                    {
                        "id": "au802-u1t2",
                        "title": "Active vs Passive Safety"
                    },
                    {
                        "id": "au802-u1t3",
                        "title": "Human Factors"
                    },
                    {
                        "id": "au802-u1t4",
                        "title": "Vehicle Conspicuity"
                    }
                ]
            },
            {
                "id": "au802-u2",
                "unitNumber": 2,
                "title": "Active Safety Systems",
                "topics": [
                    {
                        "id": "au802-u2t1",
                        "title": "Braking Safety Systems"
                    },
                    {
                        "id": "au802-u2t2",
                        "title": "Stability & Traction"
                    },
                    {
                        "id": "au802-u2t3",
                        "title": "ADAS"
                    },
                    {
                        "id": "au802-u2t4",
                        "title": "Tyre & Visibility Safety"
                    }
                ]
            },
            {
                "id": "au802-u3",
                "unitNumber": 3,
                "title": "Passive Safety & Crashworthiness",
                "topics": [
                    {
                        "id": "au802-u3t1",
                        "title": "Crash Dynamics"
                    },
                    {
                        "id": "au802-u3t2",
                        "title": "Crashworthy Structure"
                    },
                    {
                        "id": "au802-u3t3",
                        "title": "Occupant Protection"
                    },
                    {
                        "id": "au802-u3t4",
                        "title": "Injury Criteria"
                    }
                ]
            },
            {
                "id": "au802-u4",
                "unitNumber": 4,
                "title": "Motor Vehicle Legislation",
                "topics": [
                    {
                        "id": "au802-u4t1",
                        "title": "Motor Vehicles Act"
                    },
                    {
                        "id": "au802-u4t2",
                        "title": "Central Motor Vehicle Rules"
                    },
                    {
                        "id": "au802-u4t3",
                        "title": "Emission & Safety Regulations"
                    },
                    {
                        "id": "au802-u4t4",
                        "title": "Insurance & Liability"
                    }
                ]
            },
            {
                "id": "au802-u5",
                "unitNumber": 5,
                "title": "Homologation & Testing",
                "topics": [
                    {
                        "id": "au802-u5t1",
                        "title": "Homologation"
                    },
                    {
                        "id": "au802-u5t2",
                        "title": "Testing Agencies"
                    },
                    {
                        "id": "au802-u5t3",
                        "title": "International Standards"
                    },
                    {
                        "id": "au802-u5t4",
                        "title": "Recall & Product Liability"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce302",
        "semester": 3,
        "title": "Construction Materials",
        "code": "CE-302",
        "description": "Stones, bricks, lime, cement, concrete, timber, metals, polymers and modern construction materials.",
        "generated": true,
        "references": [
            {
                "title": "Building Materials",
                "author": "S. K. Duggal"
            },
            {
                "title": "Engineering Materials",
                "author": "Rangwala"
            },
            {
                "title": "Concrete Technology",
                "author": "M. S. Shetty"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce302/notes/ce302-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce302/notes/ce302-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce302/mock-papers/ce302-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce302/mock-papers/ce302-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce302/mock-papers/ce302-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce302-u1",
                "unitNumber": 1,
                "title": "Stones, Bricks & Tiles",
                "topics": [
                    {
                        "id": "ce302-u1t1",
                        "title": "Building Stones"
                    },
                    {
                        "id": "ce302-u1t2",
                        "title": "Tests on Stones"
                    },
                    {
                        "id": "ce302-u1t3",
                        "title": "Bricks"
                    },
                    {
                        "id": "ce302-u1t4",
                        "title": "Tiles & Clay Products"
                    }
                ]
            },
            {
                "id": "ce302-u2",
                "unitNumber": 2,
                "title": "Lime, Cement & Mortar",
                "topics": [
                    {
                        "id": "ce302-u2t1",
                        "title": "Lime"
                    },
                    {
                        "id": "ce302-u2t2",
                        "title": "Portland Cement"
                    },
                    {
                        "id": "ce302-u2t3",
                        "title": "Types & Tests of Cement"
                    },
                    {
                        "id": "ce302-u2t4",
                        "title": "Mortar"
                    }
                ]
            },
            {
                "id": "ce302-u3",
                "unitNumber": 3,
                "title": "Concrete",
                "topics": [
                    {
                        "id": "ce302-u3t1",
                        "title": "Constituents of Concrete"
                    },
                    {
                        "id": "ce302-u3t2",
                        "title": "Fresh Concrete Properties"
                    },
                    {
                        "id": "ce302-u3t3",
                        "title": "Hardened Concrete Properties"
                    },
                    {
                        "id": "ce302-u3t4",
                        "title": "Admixtures & Special Concretes"
                    }
                ]
            },
            {
                "id": "ce302-u4",
                "unitNumber": 4,
                "title": "Timber & Metals",
                "topics": [
                    {
                        "id": "ce302-u4t1",
                        "title": "Timber"
                    },
                    {
                        "id": "ce302-u4t2",
                        "title": "Preservation of Timber"
                    },
                    {
                        "id": "ce302-u4t3",
                        "title": "Ferrous Metals"
                    },
                    {
                        "id": "ce302-u4t4",
                        "title": "Non-ferrous Metals"
                    }
                ]
            },
            {
                "id": "ce302-u5",
                "unitNumber": 5,
                "title": "Modern & Miscellaneous Materials",
                "topics": [
                    {
                        "id": "ce302-u5t1",
                        "title": "Glass & Plastics"
                    },
                    {
                        "id": "ce302-u5t2",
                        "title": "Paints & Varnishes"
                    },
                    {
                        "id": "ce302-u5t3",
                        "title": "Eco-friendly Materials"
                    },
                    {
                        "id": "ce302-u5t4",
                        "title": "Geosynthetics & Smart Materials"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce303",
        "semester": 3,
        "title": "Surveying",
        "code": "CE-303",
        "description": "Chain, compass, levelling, plane table, theodolite, tacheometry, curves and modern surveying instruments.",
        "generated": true,
        "references": [
            {
                "title": "Surveying Vol. 1 & 2",
                "author": "B. C. Punmia"
            },
            {
                "title": "Surveying and Levelling",
                "author": "R. Subramanian"
            },
            {
                "title": "Surveying",
                "author": "S. K. Duggal"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce303/notes/ce303-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce303/notes/ce303-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce303/mock-papers/ce303-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce303/mock-papers/ce303-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce303/mock-papers/ce303-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce303-u1",
                "unitNumber": 1,
                "title": "Chain & Compass Surveying",
                "topics": [
                    {
                        "id": "ce303-u1t1",
                        "title": "Principles of Surveying"
                    },
                    {
                        "id": "ce303-u1t2",
                        "title": "Chain Surveying"
                    },
                    {
                        "id": "ce303-u1t3",
                        "title": "Compass Surveying"
                    },
                    {
                        "id": "ce303-u1t4",
                        "title": "Traversing"
                    }
                ]
            },
            {
                "id": "ce303-u2",
                "unitNumber": 2,
                "title": "Levelling & Contouring",
                "topics": [
                    {
                        "id": "ce303-u2t1",
                        "title": "Levelling Fundamentals"
                    },
                    {
                        "id": "ce303-u2t2",
                        "title": "Reduction of Levels"
                    },
                    {
                        "id": "ce303-u2t3",
                        "title": "Errors & Special Levelling"
                    },
                    {
                        "id": "ce303-u2t4",
                        "title": "Contouring"
                    }
                ]
            },
            {
                "id": "ce303-u3",
                "unitNumber": 3,
                "title": "Plane Table & Theodolite",
                "topics": [
                    {
                        "id": "ce303-u3t1",
                        "title": "Plane Table Surveying"
                    },
                    {
                        "id": "ce303-u3t2",
                        "title": "Theodolite"
                    },
                    {
                        "id": "ce303-u3t3",
                        "title": "Measurement of Angles"
                    },
                    {
                        "id": "ce303-u3t4",
                        "title": "Traverse Computation"
                    }
                ]
            },
            {
                "id": "ce303-u4",
                "unitNumber": 4,
                "title": "Tacheometry & Curves",
                "topics": [
                    {
                        "id": "ce303-u4t1",
                        "title": "Tacheometry"
                    },
                    {
                        "id": "ce303-u4t2",
                        "title": "Simple Circular Curves"
                    },
                    {
                        "id": "ce303-u4t3",
                        "title": "Transition Curves"
                    },
                    {
                        "id": "ce303-u4t4",
                        "title": "Vertical Curves"
                    }
                ]
            },
            {
                "id": "ce303-u5",
                "unitNumber": 5,
                "title": "Modern Surveying",
                "topics": [
                    {
                        "id": "ce303-u5t1",
                        "title": "Electronic Distance Measurement"
                    },
                    {
                        "id": "ce303-u5t2",
                        "title": "GPS & GNSS"
                    },
                    {
                        "id": "ce303-u5t3",
                        "title": "Remote Sensing in Surveying"
                    },
                    {
                        "id": "ce303-u5t4",
                        "title": "GIS Basics"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce304",
        "semester": 3,
        "title": "Building Planning & Architecture",
        "code": "CE-304",
        "description": "Principles of planning, building bye-laws, functional design, orientation, architecture history and building services.",
        "generated": true,
        "references": [
            {
                "title": "Building Planning and Drawing",
                "author": "M. G. Shah, C. M. Kale & S. Y. Patki"
            },
            {
                "title": "National Building Code of India 2016",
                "author": "Bureau of Indian Standards"
            },
            {
                "title": "Building Construction",
                "author": "Sushil Kumar"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce304/notes/ce304-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce304/notes/ce304-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce304/mock-papers/ce304-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce304/mock-papers/ce304-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce304/mock-papers/ce304-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce304-u1",
                "unitNumber": 1,
                "title": "Principles of Planning",
                "topics": [
                    {
                        "id": "ce304-u1t1",
                        "title": "Planning Principles"
                    },
                    {
                        "id": "ce304-u1t2",
                        "title": "Grouping & Circulation"
                    },
                    {
                        "id": "ce304-u1t3",
                        "title": "Orientation"
                    },
                    {
                        "id": "ce304-u1t4",
                        "title": "Economy & Flexibility"
                    }
                ]
            },
            {
                "id": "ce304-u2",
                "unitNumber": 2,
                "title": "Building Bye-laws & Regulations",
                "topics": [
                    {
                        "id": "ce304-u2t1",
                        "title": "Building Bye-laws"
                    },
                    {
                        "id": "ce304-u2t2",
                        "title": "FAR & Ground Coverage"
                    },
                    {
                        "id": "ce304-u2t3",
                        "title": "Minimum Room Sizes"
                    },
                    {
                        "id": "ce304-u2t4",
                        "title": "Fire & Accessibility Norms"
                    }
                ]
            },
            {
                "id": "ce304-u3",
                "unitNumber": 3,
                "title": "Functional Planning of Buildings",
                "topics": [
                    {
                        "id": "ce304-u3t1",
                        "title": "Residential Buildings"
                    },
                    {
                        "id": "ce304-u3t2",
                        "title": "Public Buildings"
                    },
                    {
                        "id": "ce304-u3t3",
                        "title": "Industrial Buildings"
                    },
                    {
                        "id": "ce304-u3t4",
                        "title": "Building Drawing"
                    }
                ]
            },
            {
                "id": "ce304-u4",
                "unitNumber": 4,
                "title": "Architecture",
                "topics": [
                    {
                        "id": "ce304-u4t1",
                        "title": "Elements of Architecture"
                    },
                    {
                        "id": "ce304-u4t2",
                        "title": "History of Architecture"
                    },
                    {
                        "id": "ce304-u4t3",
                        "title": "Green Building Design"
                    },
                    {
                        "id": "ce304-u4t4",
                        "title": "Landscape & Interior"
                    }
                ]
            },
            {
                "id": "ce304-u5",
                "unitNumber": 5,
                "title": "Building Services",
                "topics": [
                    {
                        "id": "ce304-u5t1",
                        "title": "Water Supply & Drainage"
                    },
                    {
                        "id": "ce304-u5t2",
                        "title": "Electrical Services"
                    },
                    {
                        "id": "ce304-u5t3",
                        "title": "Acoustics"
                    },
                    {
                        "id": "ce304-u5t4",
                        "title": "HVAC & Lifts"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce402",
        "semester": 4,
        "title": "Construction Technology",
        "code": "CE-402",
        "description": "Foundations, masonry, floors, roofs, stairs, formwork, damp proofing, construction equipment and modern methods.",
        "generated": true,
        "references": [
            {
                "title": "Building Construction",
                "author": "B. C. Punmia"
            },
            {
                "title": "Construction Technology",
                "author": "Roy Chudley & Roger Greeno"
            },
            {
                "title": "Construction Planning, Equipment and Methods",
                "author": "Peurifoy & Schexnayder"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce402/notes/ce402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce402/notes/ce402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce402/mock-papers/ce402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce402/mock-papers/ce402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce402/mock-papers/ce402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce402-u1",
                "unitNumber": 1,
                "title": "Foundations & Masonry",
                "topics": [
                    {
                        "id": "ce402-u1t1",
                        "title": "Types of Foundations"
                    },
                    {
                        "id": "ce402-u1t2",
                        "title": "Brick Masonry"
                    },
                    {
                        "id": "ce402-u1t3",
                        "title": "Stone Masonry"
                    },
                    {
                        "id": "ce402-u1t4",
                        "title": "Composite & Hollow Block Masonry"
                    }
                ]
            },
            {
                "id": "ce402-u2",
                "unitNumber": 2,
                "title": "Floors, Roofs & Stairs",
                "topics": [
                    {
                        "id": "ce402-u2t1",
                        "title": "Floors"
                    },
                    {
                        "id": "ce402-u2t2",
                        "title": "Roofs"
                    },
                    {
                        "id": "ce402-u2t3",
                        "title": "Staircases"
                    },
                    {
                        "id": "ce402-u2t4",
                        "title": "Doors & Windows"
                    }
                ]
            },
            {
                "id": "ce402-u3",
                "unitNumber": 3,
                "title": "Damp Proofing & Finishes",
                "topics": [
                    {
                        "id": "ce402-u3t1",
                        "title": "Dampness in Buildings"
                    },
                    {
                        "id": "ce402-u3t2",
                        "title": "Waterproofing"
                    },
                    {
                        "id": "ce402-u3t3",
                        "title": "Plastering & Pointing"
                    },
                    {
                        "id": "ce402-u3t4",
                        "title": "Painting & Finishing"
                    }
                ]
            },
            {
                "id": "ce402-u4",
                "unitNumber": 4,
                "title": "Formwork & Scaffolding",
                "topics": [
                    {
                        "id": "ce402-u4t1",
                        "title": "Formwork"
                    },
                    {
                        "id": "ce402-u4t2",
                        "title": "Scaffolding & Shoring"
                    },
                    {
                        "id": "ce402-u4t3",
                        "title": "Slip & Modular Formwork"
                    },
                    {
                        "id": "ce402-u4t4",
                        "title": "Expansion & Construction Joints"
                    }
                ]
            },
            {
                "id": "ce402-u5",
                "unitNumber": 5,
                "title": "Construction Equipment & Methods",
                "topics": [
                    {
                        "id": "ce402-u5t1",
                        "title": "Earth Moving Equipment"
                    },
                    {
                        "id": "ce402-u5t2",
                        "title": "Concreting Equipment"
                    },
                    {
                        "id": "ce402-u5t3",
                        "title": "Hoisting Equipment"
                    },
                    {
                        "id": "ce402-u5t4",
                        "title": "Prefabrication & Fast-track Construction"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce403",
        "semester": 4,
        "title": "Structural Analysis-I",
        "code": "CE-403",
        "description": "Determinacy, deflection methods, energy principles, arches, cables, influence lines and indeterminate beams.",
        "generated": true,
        "references": [
            {
                "title": "Structural Analysis Vol. 1",
                "author": "S. S. Bhavikatti"
            },
            {
                "title": "Theory of Structures",
                "author": "S. Ramamrutham"
            },
            {
                "title": "Structural Analysis",
                "author": "R. C. Hibbeler"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce403/notes/ce403-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce403/notes/ce403-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce403/mock-papers/ce403-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce403/mock-papers/ce403-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce403/mock-papers/ce403-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce403-u1",
                "unitNumber": 1,
                "title": "Fundamentals of Structural Analysis",
                "topics": [
                    {
                        "id": "ce403-u1t1",
                        "title": "Structures & Supports"
                    },
                    {
                        "id": "ce403-u1t2",
                        "title": "Static & Kinematic Indeterminacy"
                    },
                    {
                        "id": "ce403-u1t3",
                        "title": "Analysis of Trusses"
                    },
                    {
                        "id": "ce403-u1t4",
                        "title": "Principle of Superposition"
                    }
                ]
            },
            {
                "id": "ce403-u2",
                "unitNumber": 2,
                "title": "Deflection of Beams",
                "topics": [
                    {
                        "id": "ce403-u2t1",
                        "title": "Double Integration Method"
                    },
                    {
                        "id": "ce403-u2t2",
                        "title": "Moment Area Method"
                    },
                    {
                        "id": "ce403-u2t3",
                        "title": "Conjugate Beam Method"
                    },
                    {
                        "id": "ce403-u2t4",
                        "title": "Standard Deflections"
                    }
                ]
            },
            {
                "id": "ce403-u3",
                "unitNumber": 3,
                "title": "Energy Methods",
                "topics": [
                    {
                        "id": "ce403-u3t1",
                        "title": "Strain Energy"
                    },
                    {
                        "id": "ce403-u3t2",
                        "title": "Castigliano's Theorems"
                    },
                    {
                        "id": "ce403-u3t3",
                        "title": "Unit Load Method"
                    },
                    {
                        "id": "ce403-u3t4",
                        "title": "Maxwell & Betti Theorems"
                    }
                ]
            },
            {
                "id": "ce403-u4",
                "unitNumber": 4,
                "title": "Arches & Cables",
                "topics": [
                    {
                        "id": "ce403-u4t1",
                        "title": "Three-hinged Arches"
                    },
                    {
                        "id": "ce403-u4t2",
                        "title": "Two-hinged Arches"
                    },
                    {
                        "id": "ce403-u4t3",
                        "title": "Cables"
                    },
                    {
                        "id": "ce403-u4t4",
                        "title": "Stiffening Girders"
                    }
                ]
            },
            {
                "id": "ce403-u5",
                "unitNumber": 5,
                "title": "Influence Lines & Rolling Loads",
                "topics": [
                    {
                        "id": "ce403-u5t1",
                        "title": "Influence Lines"
                    },
                    {
                        "id": "ce403-u5t2",
                        "title": "Rolling Loads"
                    },
                    {
                        "id": "ce403-u5t3",
                        "title": "Absolute Maximum Moment"
                    },
                    {
                        "id": "ce403-u5t4",
                        "title": "Indeterminate Beams"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce404",
        "semester": 4,
        "title": "Transportation Engineering-I",
        "code": "CE-404",
        "description": "Highway development, geometric design, materials, pavement design, construction, traffic engineering and railways basics.",
        "generated": true,
        "references": [
            {
                "title": "Highway Engineering",
                "author": "S. K. Khanna, C. E. G. Justo & A. Veeraragavan"
            },
            {
                "title": "Principles of Transportation Engineering",
                "author": "Partha Chakroborty & Animesh Das"
            },
            {
                "title": "IRC:37 and IRC:58 Guidelines",
                "author": "Indian Roads Congress"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce404/notes/ce404-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce404/notes/ce404-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce404/mock-papers/ce404-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce404/mock-papers/ce404-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce404/mock-papers/ce404-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce404-u1",
                "unitNumber": 1,
                "title": "Highway Development & Planning",
                "topics": [
                    {
                        "id": "ce404-u1t1",
                        "title": "History of Road Development"
                    },
                    {
                        "id": "ce404-u1t2",
                        "title": "Road Classification"
                    },
                    {
                        "id": "ce404-u1t3",
                        "title": "Highway Alignment"
                    },
                    {
                        "id": "ce404-u1t4",
                        "title": "Highway Financing & Agencies"
                    }
                ]
            },
            {
                "id": "ce404-u2",
                "unitNumber": 2,
                "title": "Geometric Design",
                "topics": [
                    {
                        "id": "ce404-u2t1",
                        "title": "Cross-section Elements"
                    },
                    {
                        "id": "ce404-u2t2",
                        "title": "Sight Distance"
                    },
                    {
                        "id": "ce404-u2t3",
                        "title": "Horizontal Alignment"
                    },
                    {
                        "id": "ce404-u2t4",
                        "title": "Vertical Alignment"
                    }
                ]
            },
            {
                "id": "ce404-u3",
                "unitNumber": 3,
                "title": "Highway Materials",
                "topics": [
                    {
                        "id": "ce404-u3t1",
                        "title": "Soil Subgrade"
                    },
                    {
                        "id": "ce404-u3t2",
                        "title": "Aggregates"
                    },
                    {
                        "id": "ce404-u3t3",
                        "title": "Bitumen"
                    },
                    {
                        "id": "ce404-u3t4",
                        "title": "Bituminous Mixes"
                    }
                ]
            },
            {
                "id": "ce404-u4",
                "unitNumber": 4,
                "title": "Pavement Design",
                "topics": [
                    {
                        "id": "ce404-u4t1",
                        "title": "Types of Pavements"
                    },
                    {
                        "id": "ce404-u4t2",
                        "title": "Flexible Pavement Design"
                    },
                    {
                        "id": "ce404-u4t3",
                        "title": "Rigid Pavement Design"
                    },
                    {
                        "id": "ce404-u4t4",
                        "title": "Pavement Failures"
                    }
                ]
            },
            {
                "id": "ce404-u5",
                "unitNumber": 5,
                "title": "Traffic Engineering & Railways",
                "topics": [
                    {
                        "id": "ce404-u5t1",
                        "title": "Traffic Characteristics"
                    },
                    {
                        "id": "ce404-u5t2",
                        "title": "Traffic Control"
                    },
                    {
                        "id": "ce404-u5t3",
                        "title": "Railway Track Components"
                    },
                    {
                        "id": "ce404-u5t4",
                        "title": "Railway Geometric Design"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce405",
        "semester": 4,
        "title": "Engineering Geology & Remote Sensing",
        "code": "CE-405",
        "description": "Earth processes, minerals, rocks, structural geology, geology for engineering projects and remote sensing applications.",
        "generated": true,
        "references": [
            {
                "title": "Engineering and General Geology",
                "author": "Parbin Singh"
            },
            {
                "title": "A Textbook of Engineering Geology",
                "author": "N. Chenna Kesavulu"
            },
            {
                "title": "Remote Sensing and Image Interpretation",
                "author": "Lillesand, Kiefer & Chipman"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce405/notes/ce405-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce405/notes/ce405-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce405/mock-papers/ce405-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce405/mock-papers/ce405-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce405/mock-papers/ce405-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce405-u1",
                "unitNumber": 1,
                "title": "General Geology",
                "topics": [
                    {
                        "id": "ce405-u1t1",
                        "title": "Scope of Engineering Geology"
                    },
                    {
                        "id": "ce405-u1t2",
                        "title": "Weathering & Erosion"
                    },
                    {
                        "id": "ce405-u1t3",
                        "title": "Geological Agents"
                    },
                    {
                        "id": "ce405-u1t4",
                        "title": "Earthquakes"
                    }
                ]
            },
            {
                "id": "ce405-u2",
                "unitNumber": 2,
                "title": "Mineralogy & Petrology",
                "topics": [
                    {
                        "id": "ce405-u2t1",
                        "title": "Minerals"
                    },
                    {
                        "id": "ce405-u2t2",
                        "title": "Rock-forming Minerals"
                    },
                    {
                        "id": "ce405-u2t3",
                        "title": "Igneous & Sedimentary Rocks"
                    },
                    {
                        "id": "ce405-u2t4",
                        "title": "Metamorphic Rocks"
                    }
                ]
            },
            {
                "id": "ce405-u3",
                "unitNumber": 3,
                "title": "Structural Geology",
                "topics": [
                    {
                        "id": "ce405-u3t1",
                        "title": "Dip & Strike"
                    },
                    {
                        "id": "ce405-u3t2",
                        "title": "Folds"
                    },
                    {
                        "id": "ce405-u3t3",
                        "title": "Faults"
                    },
                    {
                        "id": "ce405-u3t4",
                        "title": "Joints & Unconformities"
                    }
                ]
            },
            {
                "id": "ce405-u4",
                "unitNumber": 4,
                "title": "Geology for Civil Works",
                "topics": [
                    {
                        "id": "ce405-u4t1",
                        "title": "Geological Investigations"
                    },
                    {
                        "id": "ce405-u4t2",
                        "title": "Dams & Reservoirs"
                    },
                    {
                        "id": "ce405-u4t3",
                        "title": "Tunnels"
                    },
                    {
                        "id": "ce405-u4t4",
                        "title": "Landslides & Groundwater"
                    }
                ]
            },
            {
                "id": "ce405-u5",
                "unitNumber": 5,
                "title": "Remote Sensing",
                "topics": [
                    {
                        "id": "ce405-u5t1",
                        "title": "Principles of Remote Sensing"
                    },
                    {
                        "id": "ce405-u5t2",
                        "title": "Sensors & Platforms"
                    },
                    {
                        "id": "ce405-u5t3",
                        "title": "Image Interpretation"
                    },
                    {
                        "id": "ce405-u5t4",
                        "title": "Applications in Civil Engineering"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce502",
        "semester": 5,
        "title": "Transportation Engineering-II",
        "code": "CE-502",
        "description": "Railway engineering, airport engineering, tunnels, docks and harbours.",
        "generated": true,
        "references": [
            {
                "title": "Railway Engineering",
                "author": "Satish Chandra & M. M. Agarwal"
            },
            {
                "title": "Airport Planning and Design",
                "author": "S. K. Khanna, M. G. Arora & S. S. Jain"
            },
            {
                "title": "Docks and Harbour Engineering",
                "author": "Srinivasan"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce502/notes/ce502-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce502/notes/ce502-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce502/mock-papers/ce502-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce502/mock-papers/ce502-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce502/mock-papers/ce502-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce502-u1",
                "unitNumber": 1,
                "title": "Railway Engineering",
                "topics": [
                    {
                        "id": "ce502-u1t1",
                        "title": "Permanent Way"
                    },
                    {
                        "id": "ce502-u1t2",
                        "title": "Sleepers & Ballast"
                    },
                    {
                        "id": "ce502-u1t3",
                        "title": "Railway Curves"
                    },
                    {
                        "id": "ce502-u1t4",
                        "title": "Signalling & Interlocking"
                    }
                ]
            },
            {
                "id": "ce502-u2",
                "unitNumber": 2,
                "title": "Points, Crossings & Stations",
                "topics": [
                    {
                        "id": "ce502-u2t1",
                        "title": "Turnouts"
                    },
                    {
                        "id": "ce502-u2t2",
                        "title": "Stations & Yards"
                    },
                    {
                        "id": "ce502-u2t3",
                        "title": "High-speed & Metro Rail"
                    },
                    {
                        "id": "ce502-u2t4",
                        "title": "Track Maintenance"
                    }
                ]
            },
            {
                "id": "ce502-u3",
                "unitNumber": 3,
                "title": "Airport Engineering",
                "topics": [
                    {
                        "id": "ce502-u3t1",
                        "title": "Airport Planning"
                    },
                    {
                        "id": "ce502-u3t2",
                        "title": "Runway Design"
                    },
                    {
                        "id": "ce502-u3t3",
                        "title": "Taxiways & Aprons"
                    },
                    {
                        "id": "ce502-u3t4",
                        "title": "Airport Lighting & Navigation"
                    }
                ]
            },
            {
                "id": "ce502-u4",
                "unitNumber": 4,
                "title": "Tunnel Engineering",
                "topics": [
                    {
                        "id": "ce502-u4t1",
                        "title": "Tunnels & Classification"
                    },
                    {
                        "id": "ce502-u4t2",
                        "title": "Tunnelling Methods in Soft Ground"
                    },
                    {
                        "id": "ce502-u4t3",
                        "title": "Tunnelling in Rock"
                    },
                    {
                        "id": "ce502-u4t4",
                        "title": "Tunnel Services"
                    }
                ]
            },
            {
                "id": "ce502-u5",
                "unitNumber": 5,
                "title": "Docks & Harbours",
                "topics": [
                    {
                        "id": "ce502-u5t1",
                        "title": "Harbours"
                    },
                    {
                        "id": "ce502-u5t2",
                        "title": "Breakwaters"
                    },
                    {
                        "id": "ce502-u5t3",
                        "title": "Docks & Quays"
                    },
                    {
                        "id": "ce502-u5t4",
                        "title": "Dredging & Navigation Aids"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce503a",
        "semester": 5,
        "title": "Structural Analysis-II",
        "code": "CE-503(A)",
        "description": "Slope deflection, moment distribution, Kani's method, column analogy, matrix methods and plastic analysis.",
        "generated": true,
        "references": [
            {
                "title": "Structural Analysis Vol. 2",
                "author": "S. S. Bhavikatti"
            },
            {
                "title": "Indeterminate Structural Analysis",
                "author": "C. K. Wang"
            },
            {
                "title": "Matrix Analysis of Framed Structures",
                "author": "Weaver & Gere"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce503a/notes/ce503a-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce503a/notes/ce503a-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce503a/mock-papers/ce503a-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce503a/mock-papers/ce503a-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce503a/mock-papers/ce503a-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce503a-u1",
                "unitNumber": 1,
                "title": "Slope Deflection Method",
                "topics": [
                    {
                        "id": "ce503a-u1t1",
                        "title": "Basics of Slope Deflection"
                    },
                    {
                        "id": "ce503a-u1t2",
                        "title": "Continuous Beams"
                    },
                    {
                        "id": "ce503a-u1t3",
                        "title": "Portal Frames without Sway"
                    },
                    {
                        "id": "ce503a-u1t4",
                        "title": "Frames with Sway"
                    }
                ]
            },
            {
                "id": "ce503a-u2",
                "unitNumber": 2,
                "title": "Moment Distribution Method",
                "topics": [
                    {
                        "id": "ce503a-u2t1",
                        "title": "Concepts of Moment Distribution"
                    },
                    {
                        "id": "ce503a-u2t2",
                        "title": "Continuous Beams by MDM"
                    },
                    {
                        "id": "ce503a-u2t3",
                        "title": "Frames by MDM"
                    },
                    {
                        "id": "ce503a-u2t4",
                        "title": "Kani's Method"
                    }
                ]
            },
            {
                "id": "ce503a-u3",
                "unitNumber": 3,
                "title": "Column Analogy & Approximate Methods",
                "topics": [
                    {
                        "id": "ce503a-u3t1",
                        "title": "Column Analogy"
                    },
                    {
                        "id": "ce503a-u3t2",
                        "title": "Approximate Methods for Frames"
                    },
                    {
                        "id": "ce503a-u3t3",
                        "title": "Analysis for Vertical Loads"
                    },
                    {
                        "id": "ce503a-u3t4",
                        "title": "Influence Lines for Indeterminate Beams"
                    }
                ]
            },
            {
                "id": "ce503a-u4",
                "unitNumber": 4,
                "title": "Matrix Methods",
                "topics": [
                    {
                        "id": "ce503a-u4t1",
                        "title": "Flexibility Method"
                    },
                    {
                        "id": "ce503a-u4t2",
                        "title": "Stiffness Method"
                    },
                    {
                        "id": "ce503a-u4t3",
                        "title": "Member Stiffness Matrices"
                    },
                    {
                        "id": "ce503a-u4t4",
                        "title": "Computer Analysis"
                    }
                ]
            },
            {
                "id": "ce503a-u5",
                "unitNumber": 5,
                "title": "Plastic Analysis",
                "topics": [
                    {
                        "id": "ce503a-u5t1",
                        "title": "Plastic Theory"
                    },
                    {
                        "id": "ce503a-u5t2",
                        "title": "Collapse Mechanisms"
                    },
                    {
                        "id": "ce503a-u5t3",
                        "title": "Methods of Plastic Analysis"
                    },
                    {
                        "id": "ce503a-u5t4",
                        "title": "Load Factor"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce504b",
        "semester": 5,
        "title": "Remote Sensing & GIS",
        "code": "CE-504(B)",
        "description": "Remote sensing physics, sensors, image processing, GIS data models, spatial analysis and civil engineering applications.",
        "generated": true,
        "references": [
            {
                "title": "Remote Sensing and GIS",
                "author": "Basudeb Bhatta"
            },
            {
                "title": "Remote Sensing and Image Interpretation",
                "author": "Lillesand, Kiefer & Chipman"
            },
            {
                "title": "Concepts and Techniques of GIS",
                "author": "C. P. Lo & Albert Yeung"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce504b/notes/ce504b-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce504b/notes/ce504b-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce504b/mock-papers/ce504b-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce504b/mock-papers/ce504b-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce504b/mock-papers/ce504b-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce504b-u1",
                "unitNumber": 1,
                "title": "Remote Sensing Physics",
                "topics": [
                    {
                        "id": "ce504b-u1t1",
                        "title": "Electromagnetic Radiation"
                    },
                    {
                        "id": "ce504b-u1t2",
                        "title": "Energy Interaction with Surface"
                    },
                    {
                        "id": "ce504b-u1t3",
                        "title": "Resolutions"
                    },
                    {
                        "id": "ce504b-u1t4",
                        "title": "Orbits & Platforms"
                    }
                ]
            },
            {
                "id": "ce504b-u2",
                "unitNumber": 2,
                "title": "Sensors & Data Products",
                "topics": [
                    {
                        "id": "ce504b-u2t1",
                        "title": "Optical Sensors"
                    },
                    {
                        "id": "ce504b-u2t2",
                        "title": "Microwave Sensors"
                    },
                    {
                        "id": "ce504b-u2t3",
                        "title": "Indian Satellites"
                    },
                    {
                        "id": "ce504b-u2t4",
                        "title": "Thermal Remote Sensing"
                    }
                ]
            },
            {
                "id": "ce504b-u3",
                "unitNumber": 3,
                "title": "Digital Image Processing",
                "topics": [
                    {
                        "id": "ce504b-u3t1",
                        "title": "Preprocessing"
                    },
                    {
                        "id": "ce504b-u3t2",
                        "title": "Image Enhancement"
                    },
                    {
                        "id": "ce504b-u3t3",
                        "title": "Image Classification"
                    },
                    {
                        "id": "ce504b-u3t4",
                        "title": "Accuracy Assessment"
                    }
                ]
            },
            {
                "id": "ce504b-u4",
                "unitNumber": 4,
                "title": "Geographic Information System",
                "topics": [
                    {
                        "id": "ce504b-u4t1",
                        "title": "GIS Components"
                    },
                    {
                        "id": "ce504b-u4t2",
                        "title": "Data Models"
                    },
                    {
                        "id": "ce504b-u4t3",
                        "title": "Map Projections & Coordinates"
                    },
                    {
                        "id": "ce504b-u4t4",
                        "title": "Data Input & Management"
                    }
                ]
            },
            {
                "id": "ce504b-u5",
                "unitNumber": 5,
                "title": "Spatial Analysis & Applications",
                "topics": [
                    {
                        "id": "ce504b-u5t1",
                        "title": "Spatial Analysis"
                    },
                    {
                        "id": "ce504b-u5t2",
                        "title": "Terrain Analysis"
                    },
                    {
                        "id": "ce504b-u5t3",
                        "title": "Applications in Infrastructure"
                    },
                    {
                        "id": "ce504b-u5t4",
                        "title": "Applications in Water & Disaster"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce601",
        "semester": 6,
        "title": "Structural Design & Drawing (RCC-I)",
        "code": "CE-601",
        "description": "Limit state design of RCC beams, slabs, columns, footings and staircases as per IS 456.",
        "generated": true,
        "references": [
            {
                "title": "Limit State Design of Reinforced Concrete",
                "author": "P. C. Varghese"
            },
            {
                "title": "Reinforced Concrete Design",
                "author": "S. Unnikrishna Pillai & Devdas Menon"
            },
            {
                "title": "IS 456:2000",
                "author": "Bureau of Indian Standards"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce601/notes/ce601-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce601/notes/ce601-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce601/mock-papers/ce601-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce601/mock-papers/ce601-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce601/mock-papers/ce601-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce601-u1",
                "unitNumber": 1,
                "title": "Design Philosophies",
                "topics": [
                    {
                        "id": "ce601-u1t1",
                        "title": "Working Stress vs Limit State"
                    },
                    {
                        "id": "ce601-u1t2",
                        "title": "Limit States"
                    },
                    {
                        "id": "ce601-u1t3",
                        "title": "Characteristic Values"
                    },
                    {
                        "id": "ce601-u1t4",
                        "title": "Stress-Strain Behaviour"
                    }
                ]
            },
            {
                "id": "ce601-u2",
                "unitNumber": 2,
                "title": "Design of Beams",
                "topics": [
                    {
                        "id": "ce601-u2t1",
                        "title": "Singly Reinforced Beams"
                    },
                    {
                        "id": "ce601-u2t2",
                        "title": "Doubly Reinforced Beams"
                    },
                    {
                        "id": "ce601-u2t3",
                        "title": "Flanged Beams"
                    },
                    {
                        "id": "ce601-u2t4",
                        "title": "Shear & Bond"
                    }
                ]
            },
            {
                "id": "ce601-u3",
                "unitNumber": 3,
                "title": "Design of Slabs",
                "topics": [
                    {
                        "id": "ce601-u3t1",
                        "title": "One-way Slabs"
                    },
                    {
                        "id": "ce601-u3t2",
                        "title": "Two-way Slabs"
                    },
                    {
                        "id": "ce601-u3t3",
                        "title": "Continuous Slabs"
                    },
                    {
                        "id": "ce601-u3t4",
                        "title": "Deflection Control"
                    }
                ]
            },
            {
                "id": "ce601-u4",
                "unitNumber": 4,
                "title": "Columns & Footings",
                "topics": [
                    {
                        "id": "ce601-u4t1",
                        "title": "Short Columns"
                    },
                    {
                        "id": "ce601-u4t2",
                        "title": "Columns with Bending"
                    },
                    {
                        "id": "ce601-u4t3",
                        "title": "Isolated Footings"
                    },
                    {
                        "id": "ce601-u4t4",
                        "title": "Combined Footings"
                    }
                ]
            },
            {
                "id": "ce601-u5",
                "unitNumber": 5,
                "title": "Staircases & Detailing",
                "topics": [
                    {
                        "id": "ce601-u5t1",
                        "title": "Staircase Design"
                    },
                    {
                        "id": "ce601-u5t2",
                        "title": "Reinforcement Detailing"
                    },
                    {
                        "id": "ce601-u5t3",
                        "title": "Durability Requirements"
                    },
                    {
                        "id": "ce601-u5t4",
                        "title": "Structural Drawing"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce602",
        "semester": 6,
        "title": "Environmental Engineering-I",
        "code": "CE-602",
        "description": "Water demand, sources, conveyance, quality, treatment and distribution systems.",
        "generated": true,
        "references": [
            {
                "title": "Water Supply Engineering",
                "author": "S. K. Garg"
            },
            {
                "title": "Environmental Engineering",
                "author": "Peavy, Rowe & Tchobanoglous"
            },
            {
                "title": "CPHEEO Manual on Water Supply",
                "author": "Government of India"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce602/notes/ce602-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce602/notes/ce602-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce602/mock-papers/ce602-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce602/mock-papers/ce602-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce602/mock-papers/ce602-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce602-u1",
                "unitNumber": 1,
                "title": "Water Demand & Sources",
                "topics": [
                    {
                        "id": "ce602-u1t1",
                        "title": "Water Demand"
                    },
                    {
                        "id": "ce602-u1t2",
                        "title": "Population Forecasting"
                    },
                    {
                        "id": "ce602-u1t3",
                        "title": "Surface Sources"
                    },
                    {
                        "id": "ce602-u1t4",
                        "title": "Groundwater Sources"
                    }
                ]
            },
            {
                "id": "ce602-u2",
                "unitNumber": 2,
                "title": "Water Quality",
                "topics": [
                    {
                        "id": "ce602-u2t1",
                        "title": "Physical Parameters"
                    },
                    {
                        "id": "ce602-u2t2",
                        "title": "Chemical Parameters"
                    },
                    {
                        "id": "ce602-u2t3",
                        "title": "Biological Parameters"
                    },
                    {
                        "id": "ce602-u2t4",
                        "title": "Drinking Water Standards"
                    }
                ]
            },
            {
                "id": "ce602-u3",
                "unitNumber": 3,
                "title": "Water Treatment",
                "topics": [
                    {
                        "id": "ce602-u3t1",
                        "title": "Screening & Plain Sedimentation"
                    },
                    {
                        "id": "ce602-u3t2",
                        "title": "Coagulation & Flocculation"
                    },
                    {
                        "id": "ce602-u3t3",
                        "title": "Filtration"
                    },
                    {
                        "id": "ce602-u3t4",
                        "title": "Disinfection & Softening"
                    }
                ]
            },
            {
                "id": "ce602-u4",
                "unitNumber": 4,
                "title": "Conveyance & Distribution",
                "topics": [
                    {
                        "id": "ce602-u4t1",
                        "title": "Pipes & Conveyance"
                    },
                    {
                        "id": "ce602-u4t2",
                        "title": "Distribution Systems"
                    },
                    {
                        "id": "ce602-u4t3",
                        "title": "Storage & Pumping"
                    },
                    {
                        "id": "ce602-u4t4",
                        "title": "Network Analysis"
                    }
                ]
            },
            {
                "id": "ce602-u5",
                "unitNumber": 5,
                "title": "Rural & Advanced Water Supply",
                "topics": [
                    {
                        "id": "ce602-u5t1",
                        "title": "Rural Water Supply"
                    },
                    {
                        "id": "ce602-u5t2",
                        "title": "Advanced Treatment"
                    },
                    {
                        "id": "ce602-u5t3",
                        "title": "Water Conservation"
                    },
                    {
                        "id": "ce602-u5t4",
                        "title": "Plumbing in Buildings"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce603a",
        "semester": 6,
        "title": "Water Resource Engineering",
        "code": "CE-603(A)",
        "description": "Hydrology, irrigation, canals, dams, spillways, hydraulic structures and water management.",
        "generated": true,
        "references": [
            {
                "title": "Irrigation Engineering and Hydraulic Structures",
                "author": "S. K. Garg"
            },
            {
                "title": "Engineering Hydrology",
                "author": "K. Subramanya"
            },
            {
                "title": "Irrigation and Water Power Engineering",
                "author": "B. C. Punmia"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce603a/notes/ce603a-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce603a/notes/ce603a-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce603a/mock-papers/ce603a-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce603a/mock-papers/ce603a-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce603a/mock-papers/ce603a-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce603a-u1",
                "unitNumber": 1,
                "title": "Hydrology",
                "topics": [
                    {
                        "id": "ce603a-u1t1",
                        "title": "Hydrological Cycle"
                    },
                    {
                        "id": "ce603a-u1t2",
                        "title": "Rainfall Measurement"
                    },
                    {
                        "id": "ce603a-u1t3",
                        "title": "Runoff & Hydrographs"
                    },
                    {
                        "id": "ce603a-u1t4",
                        "title": "Floods"
                    }
                ]
            },
            {
                "id": "ce603a-u2",
                "unitNumber": 2,
                "title": "Irrigation Engineering",
                "topics": [
                    {
                        "id": "ce603a-u2t1",
                        "title": "Irrigation & Its Types"
                    },
                    {
                        "id": "ce603a-u2t2",
                        "title": "Water Requirement of Crops"
                    },
                    {
                        "id": "ce603a-u2t3",
                        "title": "Soil-Water Relations"
                    },
                    {
                        "id": "ce603a-u2t4",
                        "title": "Irrigation Efficiencies"
                    }
                ]
            },
            {
                "id": "ce603a-u3",
                "unitNumber": 3,
                "title": "Canals",
                "topics": [
                    {
                        "id": "ce603a-u3t1",
                        "title": "Canal Classification"
                    },
                    {
                        "id": "ce603a-u3t2",
                        "title": "Canal Design"
                    },
                    {
                        "id": "ce603a-u3t3",
                        "title": "Canal Lining"
                    },
                    {
                        "id": "ce603a-u3t4",
                        "title": "Waterlogging & Drainage"
                    }
                ]
            },
            {
                "id": "ce603a-u4",
                "unitNumber": 4,
                "title": "Dams & Spillways",
                "topics": [
                    {
                        "id": "ce603a-u4t1",
                        "title": "Types of Dams"
                    },
                    {
                        "id": "ce603a-u4t2",
                        "title": "Gravity Dam Design"
                    },
                    {
                        "id": "ce603a-u4t3",
                        "title": "Earth Dams"
                    },
                    {
                        "id": "ce603a-u4t4",
                        "title": "Spillways & Energy Dissipation"
                    }
                ]
            },
            {
                "id": "ce603a-u5",
                "unitNumber": 5,
                "title": "Hydraulic Structures & Management",
                "topics": [
                    {
                        "id": "ce603a-u5t1",
                        "title": "Diversion Headworks"
                    },
                    {
                        "id": "ce603a-u5t2",
                        "title": "Canal Structures"
                    },
                    {
                        "id": "ce603a-u5t3",
                        "title": "Watershed Management"
                    },
                    {
                        "id": "ce603a-u5t4",
                        "title": "Integrated Water Management"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce701",
        "semester": 7,
        "title": "Geotechnical Engineering",
        "code": "CE-701",
        "description": "Soil properties, classification, permeability, compaction, consolidation, shear strength, earth pressure and slope stability.",
        "generated": true,
        "references": [
            {
                "title": "Soil Mechanics and Foundations",
                "author": "B. C. Punmia"
            },
            {
                "title": "Geotechnical Engineering",
                "author": "C. Venkatramaiah"
            },
            {
                "title": "Principles of Geotechnical Engineering",
                "author": "Braja M. Das"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce701/notes/ce701-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce701/notes/ce701-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce701/mock-papers/ce701-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce701/mock-papers/ce701-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce701/mock-papers/ce701-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce701-u1",
                "unitNumber": 1,
                "title": "Soil Properties & Classification",
                "topics": [
                    {
                        "id": "ce701-u1t1",
                        "title": "Soil Formation & Phase Relations"
                    },
                    {
                        "id": "ce701-u1t2",
                        "title": "Index Properties"
                    },
                    {
                        "id": "ce701-u1t3",
                        "title": "Particle Size Analysis"
                    },
                    {
                        "id": "ce701-u1t4",
                        "title": "Soil Classification"
                    }
                ]
            },
            {
                "id": "ce701-u2",
                "unitNumber": 2,
                "title": "Permeability & Seepage",
                "topics": [
                    {
                        "id": "ce701-u2t1",
                        "title": "Darcy's Law"
                    },
                    {
                        "id": "ce701-u2t2",
                        "title": "Factors & Tests"
                    },
                    {
                        "id": "ce701-u2t3",
                        "title": "Seepage & Flow Nets"
                    },
                    {
                        "id": "ce701-u2t4",
                        "title": "Effective Stress & Quicksand"
                    }
                ]
            },
            {
                "id": "ce701-u3",
                "unitNumber": 3,
                "title": "Compaction & Consolidation",
                "topics": [
                    {
                        "id": "ce701-u3t1",
                        "title": "Compaction"
                    },
                    {
                        "id": "ce701-u3t2",
                        "title": "Field Compaction"
                    },
                    {
                        "id": "ce701-u3t3",
                        "title": "Consolidation"
                    },
                    {
                        "id": "ce701-u3t4",
                        "title": "Settlement"
                    }
                ]
            },
            {
                "id": "ce701-u4",
                "unitNumber": 4,
                "title": "Shear Strength",
                "topics": [
                    {
                        "id": "ce701-u4t1",
                        "title": "Mohr-Coulomb Criterion"
                    },
                    {
                        "id": "ce701-u4t2",
                        "title": "Shear Tests"
                    },
                    {
                        "id": "ce701-u4t3",
                        "title": "Drainage Conditions"
                    },
                    {
                        "id": "ce701-u4t4",
                        "title": "Sensitivity & Liquefaction"
                    }
                ]
            },
            {
                "id": "ce701-u5",
                "unitNumber": 5,
                "title": "Earth Pressure & Slopes",
                "topics": [
                    {
                        "id": "ce701-u5t1",
                        "title": "Earth Pressure Theories"
                    },
                    {
                        "id": "ce701-u5t2",
                        "title": "Rankine & Coulomb Theories"
                    },
                    {
                        "id": "ce701-u5t3",
                        "title": "Retaining Walls"
                    },
                    {
                        "id": "ce701-u5t4",
                        "title": "Slope Stability"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce702a",
        "semester": 7,
        "title": "Prestressed Concrete Structures",
        "code": "CE-702(A)",
        "description": "Prestressing principles, systems, losses, flexural and shear design and anchorage zones as per IS 1343.",
        "generated": true,
        "references": [
            {
                "title": "Prestressed Concrete",
                "author": "N. Krishna Raju"
            },
            {
                "title": "Design of Prestressed Concrete Structures",
                "author": "T. Y. Lin & Ned Burns"
            },
            {
                "title": "IS 1343:2012",
                "author": "Bureau of Indian Standards"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce702a/notes/ce702a-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce702a/notes/ce702a-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce702a/mock-papers/ce702a-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce702a/mock-papers/ce702a-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce702a/mock-papers/ce702a-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce702a-u1",
                "unitNumber": 1,
                "title": "Introduction to Prestressing",
                "topics": [
                    {
                        "id": "ce702a-u1t1",
                        "title": "Concept of Prestressing"
                    },
                    {
                        "id": "ce702a-u1t2",
                        "title": "Pre-tensioning"
                    },
                    {
                        "id": "ce702a-u1t3",
                        "title": "Post-tensioning"
                    },
                    {
                        "id": "ce702a-u1t4",
                        "title": "Prestressing Systems"
                    }
                ]
            },
            {
                "id": "ce702a-u2",
                "unitNumber": 2,
                "title": "Materials & Analysis",
                "topics": [
                    {
                        "id": "ce702a-u2t1",
                        "title": "High-strength Materials"
                    },
                    {
                        "id": "ce702a-u2t2",
                        "title": "Stress Concept"
                    },
                    {
                        "id": "ce702a-u2t3",
                        "title": "Load Balancing"
                    },
                    {
                        "id": "ce702a-u2t4",
                        "title": "Strength Concept"
                    }
                ]
            },
            {
                "id": "ce702a-u3",
                "unitNumber": 3,
                "title": "Losses of Prestress",
                "topics": [
                    {
                        "id": "ce702a-u3t1",
                        "title": "Immediate Losses"
                    },
                    {
                        "id": "ce702a-u3t2",
                        "title": "Time-dependent Losses"
                    },
                    {
                        "id": "ce702a-u3t3",
                        "title": "Total Loss Estimation"
                    },
                    {
                        "id": "ce702a-u3t4",
                        "title": "Control of Losses"
                    }
                ]
            },
            {
                "id": "ce702a-u4",
                "unitNumber": 4,
                "title": "Design of Members",
                "topics": [
                    {
                        "id": "ce702a-u4t1",
                        "title": "Flexural Design"
                    },
                    {
                        "id": "ce702a-u4t2",
                        "title": "Shear Design"
                    },
                    {
                        "id": "ce702a-u4t3",
                        "title": "Deflection"
                    },
                    {
                        "id": "ce702a-u4t4",
                        "title": "Composite Construction"
                    }
                ]
            },
            {
                "id": "ce702a-u5",
                "unitNumber": 5,
                "title": "Anchorage Zones & Applications",
                "topics": [
                    {
                        "id": "ce702a-u5t1",
                        "title": "End Block Design"
                    },
                    {
                        "id": "ce702a-u5t2",
                        "title": "Transmission Length"
                    },
                    {
                        "id": "ce702a-u5t3",
                        "title": "Continuous Members"
                    },
                    {
                        "id": "ce702a-u5t4",
                        "title": "Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce702b",
        "semester": 7,
        "title": "Environmental Engineering-II",
        "code": "CE-702(B)",
        "description": "Wastewater characteristics, sewer design, primary, secondary and tertiary treatment, sludge, air and solid waste management.",
        "generated": true,
        "references": [
            {
                "title": "Wastewater Engineering",
                "author": "Metcalf & Eddy"
            },
            {
                "title": "Sewage Disposal and Air Pollution Engineering",
                "author": "S. K. Garg"
            },
            {
                "title": "Environmental Engineering",
                "author": "Peavy, Rowe & Tchobanoglous"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce702b/notes/ce702b-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce702b/notes/ce702b-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce702b/mock-papers/ce702b-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce702b/mock-papers/ce702b-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce702b/mock-papers/ce702b-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce702b-u1",
                "unitNumber": 1,
                "title": "Wastewater Characteristics & Collection",
                "topics": [
                    {
                        "id": "ce702b-u1t1",
                        "title": "Sewage Characteristics"
                    },
                    {
                        "id": "ce702b-u1t2",
                        "title": "Sewerage Systems"
                    },
                    {
                        "id": "ce702b-u1t3",
                        "title": "Sewer Design"
                    },
                    {
                        "id": "ce702b-u1t4",
                        "title": "Sewer Appurtenances"
                    }
                ]
            },
            {
                "id": "ce702b-u2",
                "unitNumber": 2,
                "title": "Primary Treatment",
                "topics": [
                    {
                        "id": "ce702b-u2t1",
                        "title": "Preliminary Treatment"
                    },
                    {
                        "id": "ce702b-u2t2",
                        "title": "Primary Sedimentation"
                    },
                    {
                        "id": "ce702b-u2t3",
                        "title": "Equalisation & Neutralisation"
                    },
                    {
                        "id": "ce702b-u2t4",
                        "title": "Chemical Treatment"
                    }
                ]
            },
            {
                "id": "ce702b-u3",
                "unitNumber": 3,
                "title": "Secondary Treatment",
                "topics": [
                    {
                        "id": "ce702b-u3t1",
                        "title": "Biological Treatment Principles"
                    },
                    {
                        "id": "ce702b-u3t2",
                        "title": "Activated Sludge Process"
                    },
                    {
                        "id": "ce702b-u3t3",
                        "title": "Trickling Filters"
                    },
                    {
                        "id": "ce702b-u3t4",
                        "title": "Stabilisation Ponds & Anaerobic Treatment"
                    }
                ]
            },
            {
                "id": "ce702b-u4",
                "unitNumber": 4,
                "title": "Sludge & Tertiary Treatment",
                "topics": [
                    {
                        "id": "ce702b-u4t1",
                        "title": "Sludge Treatment"
                    },
                    {
                        "id": "ce702b-u4t2",
                        "title": "Tertiary Treatment"
                    },
                    {
                        "id": "ce702b-u4t3",
                        "title": "Disposal of Effluent"
                    },
                    {
                        "id": "ce702b-u4t4",
                        "title": "Wastewater Reuse"
                    }
                ]
            },
            {
                "id": "ce702b-u5",
                "unitNumber": 5,
                "title": "Air & Solid Waste Management",
                "topics": [
                    {
                        "id": "ce702b-u5t1",
                        "title": "Air Pollution Sources & Effects"
                    },
                    {
                        "id": "ce702b-u5t2",
                        "title": "Air Pollution Control"
                    },
                    {
                        "id": "ce702b-u5t3",
                        "title": "Solid Waste Management"
                    },
                    {
                        "id": "ce702b-u5t4",
                        "title": "Waste Processing & Disposal"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce801",
        "semester": 8,
        "title": "Design of Steel Structures",
        "code": "CE-801",
        "description": "Limit state design of steel tension, compression, flexural members, connections, plate girders and roof trusses as per IS 800.",
        "generated": true,
        "references": [
            {
                "title": "Design of Steel Structures",
                "author": "N. Subramanian"
            },
            {
                "title": "Limit State Design of Steel Structures",
                "author": "S. K. Duggal"
            },
            {
                "title": "IS 800:2007",
                "author": "Bureau of Indian Standards"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce801/notes/ce801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce801/notes/ce801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce801/mock-papers/ce801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce801/mock-papers/ce801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce801/mock-papers/ce801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce801-u1",
                "unitNumber": 1,
                "title": "Introduction & Connections",
                "topics": [
                    {
                        "id": "ce801-u1t1",
                        "title": "Steel as Structural Material"
                    },
                    {
                        "id": "ce801-u1t2",
                        "title": "Limit State Design of Steel"
                    },
                    {
                        "id": "ce801-u1t3",
                        "title": "Bolted Connections"
                    },
                    {
                        "id": "ce801-u1t4",
                        "title": "Welded Connections"
                    }
                ]
            },
            {
                "id": "ce801-u2",
                "unitNumber": 2,
                "title": "Tension & Compression Members",
                "topics": [
                    {
                        "id": "ce801-u2t1",
                        "title": "Tension Members"
                    },
                    {
                        "id": "ce801-u2t2",
                        "title": "Compression Members"
                    },
                    {
                        "id": "ce801-u2t3",
                        "title": "Built-up Columns"
                    },
                    {
                        "id": "ce801-u2t4",
                        "title": "Column Bases"
                    }
                ]
            },
            {
                "id": "ce801-u3",
                "unitNumber": 3,
                "title": "Flexural Members",
                "topics": [
                    {
                        "id": "ce801-u3t1",
                        "title": "Laterally Supported Beams"
                    },
                    {
                        "id": "ce801-u3t2",
                        "title": "Laterally Unsupported Beams"
                    },
                    {
                        "id": "ce801-u3t3",
                        "title": "Web Buckling & Crippling"
                    },
                    {
                        "id": "ce801-u3t4",
                        "title": "Purlins"
                    }
                ]
            },
            {
                "id": "ce801-u4",
                "unitNumber": 4,
                "title": "Plate Girders",
                "topics": [
                    {
                        "id": "ce801-u4t1",
                        "title": "Plate Girder Components"
                    },
                    {
                        "id": "ce801-u4t2",
                        "title": "Design of Plate Girder"
                    },
                    {
                        "id": "ce801-u4t3",
                        "title": "Stiffeners"
                    },
                    {
                        "id": "ce801-u4t4",
                        "title": "Gantry Girders"
                    }
                ]
            },
            {
                "id": "ce801-u5",
                "unitNumber": 5,
                "title": "Roof Trusses & Industrial Buildings",
                "topics": [
                    {
                        "id": "ce801-u5t1",
                        "title": "Roof Trusses"
                    },
                    {
                        "id": "ce801-u5t2",
                        "title": "Loads on Trusses"
                    },
                    {
                        "id": "ce801-u5t3",
                        "title": "Design of Truss Members"
                    },
                    {
                        "id": "ce801-u5t4",
                        "title": "Industrial Building Frames"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce802b",
        "semester": 8,
        "title": "Foundation Engineering",
        "code": "CE-802(B)",
        "description": "Soil exploration, bearing capacity, shallow and pile foundations, well foundations and ground improvement.",
        "generated": true,
        "references": [
            {
                "title": "Foundation Analysis and Design",
                "author": "Joseph E. Bowles"
            },
            {
                "title": "Principles of Foundation Engineering",
                "author": "Braja M. Das"
            },
            {
                "title": "Soil Mechanics and Foundation Engineering",
                "author": "K. R. Arora"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce802b/notes/ce802b-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce802b/notes/ce802b-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce802b/mock-papers/ce802b-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce802b/mock-papers/ce802b-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce802b/mock-papers/ce802b-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce802b-u1",
                "unitNumber": 1,
                "title": "Soil Exploration",
                "topics": [
                    {
                        "id": "ce802b-u1t1",
                        "title": "Site Investigation"
                    },
                    {
                        "id": "ce802b-u1t2",
                        "title": "Sampling"
                    },
                    {
                        "id": "ce802b-u1t3",
                        "title": "In-situ Tests"
                    },
                    {
                        "id": "ce802b-u1t4",
                        "title": "Geophysical Methods"
                    }
                ]
            },
            {
                "id": "ce802b-u2",
                "unitNumber": 2,
                "title": "Bearing Capacity",
                "topics": [
                    {
                        "id": "ce802b-u2t1",
                        "title": "Bearing Capacity Concepts"
                    },
                    {
                        "id": "ce802b-u2t2",
                        "title": "Terzaghi's Theory"
                    },
                    {
                        "id": "ce802b-u2t3",
                        "title": "IS Code Method"
                    },
                    {
                        "id": "ce802b-u2t4",
                        "title": "Effect of Water Table"
                    }
                ]
            },
            {
                "id": "ce802b-u3",
                "unitNumber": 3,
                "title": "Shallow Foundations",
                "topics": [
                    {
                        "id": "ce802b-u3t1",
                        "title": "Types of Shallow Foundations"
                    },
                    {
                        "id": "ce802b-u3t2",
                        "title": "Settlement Analysis"
                    },
                    {
                        "id": "ce802b-u3t3",
                        "title": "Floating Foundation"
                    },
                    {
                        "id": "ce802b-u3t4",
                        "title": "Foundations on Expansive Soils"
                    }
                ]
            },
            {
                "id": "ce802b-u4",
                "unitNumber": 4,
                "title": "Pile Foundations",
                "topics": [
                    {
                        "id": "ce802b-u4t1",
                        "title": "Types of Piles"
                    },
                    {
                        "id": "ce802b-u4t2",
                        "title": "Load Capacity of Piles"
                    },
                    {
                        "id": "ce802b-u4t3",
                        "title": "Pile Groups"
                    },
                    {
                        "id": "ce802b-u4t4",
                        "title": "Lateral Load & Pile Caps"
                    }
                ]
            },
            {
                "id": "ce802b-u5",
                "unitNumber": 5,
                "title": "Well Foundations & Ground Improvement",
                "topics": [
                    {
                        "id": "ce802b-u5t1",
                        "title": "Well Foundations"
                    },
                    {
                        "id": "ce802b-u5t2",
                        "title": "Caissons & Cofferdams"
                    },
                    {
                        "id": "ce802b-u5t3",
                        "title": "Ground Improvement"
                    },
                    {
                        "id": "ce802b-u5t4",
                        "title": "Soil Stabilisation"
                    }
                ]
            }
        ]
    },
    {
        "id": "ce802d",
        "semester": 2,
        "title": "Earthquake Resistant Design of Structures",
        "code": "CE-802(D)",
        "description": "Seismology, structural dynamics, IS 1893 seismic analysis, ductile detailing and seismic design of buildings.",
        "generated": true,
        "references": [
            {
                "title": "Earthquake Resistant Design of Structures",
                "author": "Pankaj Agarwal & Manish Shrikhande"
            },
            {
                "title": "Dynamics of Structures",
                "author": "Anil K. Chopra"
            },
            {
                "title": "IS 1893 and IS 13920",
                "author": "Bureau of Indian Standards"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ce802d/notes/ce802d-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ce802d/notes/ce802d-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ce802d/mock-papers/ce802d-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ce802d/mock-papers/ce802d-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ce802d/mock-papers/ce802d-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ce802d-u1",
                "unitNumber": 1,
                "title": "Engineering Seismology",
                "topics": [
                    {
                        "id": "ce802d-u1t1",
                        "title": "Earthquake Basics"
                    },
                    {
                        "id": "ce802d-u1t2",
                        "title": "Seismic Waves"
                    },
                    {
                        "id": "ce802d-u1t3",
                        "title": "Magnitude & Intensity"
                    },
                    {
                        "id": "ce802d-u1t4",
                        "title": "Seismic Zoning of India"
                    }
                ]
            },
            {
                "id": "ce802d-u2",
                "unitNumber": 2,
                "title": "Structural Dynamics",
                "topics": [
                    {
                        "id": "ce802d-u2t1",
                        "title": "SDOF Systems"
                    },
                    {
                        "id": "ce802d-u2t2",
                        "title": "Response to Ground Motion"
                    },
                    {
                        "id": "ce802d-u2t3",
                        "title": "Response Spectrum"
                    },
                    {
                        "id": "ce802d-u2t4",
                        "title": "MDOF Systems"
                    }
                ]
            },
            {
                "id": "ce802d-u3",
                "unitNumber": 3,
                "title": "Seismic Analysis as per IS 1893",
                "topics": [
                    {
                        "id": "ce802d-u3t1",
                        "title": "Design Lateral Force"
                    },
                    {
                        "id": "ce802d-u3t2",
                        "title": "Response Reduction Factor"
                    },
                    {
                        "id": "ce802d-u3t3",
                        "title": "Equivalent Static Method"
                    },
                    {
                        "id": "ce802d-u3t4",
                        "title": "Irregularities"
                    }
                ]
            },
            {
                "id": "ce802d-u4",
                "unitNumber": 4,
                "title": "Ductile Detailing",
                "topics": [
                    {
                        "id": "ce802d-u4t1",
                        "title": "Ductility Concepts"
                    },
                    {
                        "id": "ce802d-u4t2",
                        "title": "IS 13920 Beam Detailing"
                    },
                    {
                        "id": "ce802d-u4t3",
                        "title": "IS 13920 Column Detailing"
                    },
                    {
                        "id": "ce802d-u4t4",
                        "title": "Beam-Column Joints"
                    }
                ]
            },
            {
                "id": "ce802d-u5",
                "unitNumber": 5,
                "title": "Seismic Design of Buildings",
                "topics": [
                    {
                        "id": "ce802d-u5t1",
                        "title": "Shear Walls"
                    },
                    {
                        "id": "ce802d-u5t2",
                        "title": "Masonry Buildings"
                    },
                    {
                        "id": "ce802d-u5t3",
                        "title": "Base Isolation & Dampers"
                    },
                    {
                        "id": "ce802d-u5t4",
                        "title": "Retrofitting"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex303",
        "semester": 3,
        "title": "Electrical Measurements & Measuring Instruments",
        "code": "EX-303",
        "description": "Galvanometers, indicating instruments, wattmeters, energy meters, bridges, instrument transformers and potentiometers.",
        "generated": true,
        "references": [
            {
                "title": "A Course in Electrical and Electronic Measurements and Instrumentation",
                "author": "A. K. Sawhney"
            },
            {
                "title": "Electrical Measurements and Measuring Instruments",
                "author": "E. W. Golding"
            },
            {
                "title": "Electronic Instrumentation",
                "author": "H. S. Kalsi"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex303/notes/ex303-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex303/notes/ex303-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex303/mock-papers/ex303-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex303/mock-papers/ex303-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex303/mock-papers/ex303-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex303-u1",
                "unitNumber": 1,
                "title": "Measurement Fundamentals & Galvanometers",
                "topics": [
                    {
                        "id": "ex303-u1t1",
                        "title": "Measurement Basics"
                    },
                    {
                        "id": "ex303-u1t2",
                        "title": "Torques in Instruments"
                    },
                    {
                        "id": "ex303-u1t3",
                        "title": "D'Arsonval Galvanometer"
                    },
                    {
                        "id": "ex303-u1t4",
                        "title": "Ballistic Galvanometer"
                    }
                ]
            },
            {
                "id": "ex303-u2",
                "unitNumber": 2,
                "title": "Indicating Instruments",
                "topics": [
                    {
                        "id": "ex303-u2t1",
                        "title": "PMMC Instrument"
                    },
                    {
                        "id": "ex303-u2t2",
                        "title": "Moving Iron Instruments"
                    },
                    {
                        "id": "ex303-u2t3",
                        "title": "Electrodynamometer Instruments"
                    },
                    {
                        "id": "ex303-u2t4",
                        "title": "Extending Ranges"
                    }
                ]
            },
            {
                "id": "ex303-u3",
                "unitNumber": 3,
                "title": "Power & Energy Measurement",
                "topics": [
                    {
                        "id": "ex303-u3t1",
                        "title": "Wattmeters"
                    },
                    {
                        "id": "ex303-u3t2",
                        "title": "Three-phase Power Measurement"
                    },
                    {
                        "id": "ex303-u3t3",
                        "title": "Energy Meters"
                    },
                    {
                        "id": "ex303-u3t4",
                        "title": "Electronic Energy Meters"
                    }
                ]
            },
            {
                "id": "ex303-u4",
                "unitNumber": 4,
                "title": "Bridges & Potentiometers",
                "topics": [
                    {
                        "id": "ex303-u4t1",
                        "title": "Measurement of Resistance"
                    },
                    {
                        "id": "ex303-u4t2",
                        "title": "AC Bridges"
                    },
                    {
                        "id": "ex303-u4t3",
                        "title": "DC Potentiometer"
                    },
                    {
                        "id": "ex303-u4t4",
                        "title": "AC Potentiometer"
                    }
                ]
            },
            {
                "id": "ex303-u5",
                "unitNumber": 5,
                "title": "Instrument Transformers & Digital Instruments",
                "topics": [
                    {
                        "id": "ex303-u5t1",
                        "title": "Current Transformers"
                    },
                    {
                        "id": "ex303-u5t2",
                        "title": "Potential Transformers"
                    },
                    {
                        "id": "ex303-u5t3",
                        "title": "Digital Instruments"
                    },
                    {
                        "id": "ex303-u5t4",
                        "title": "Oscilloscope & Recorders"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex402",
        "semester": 4,
        "title": "Electrical Machine-I",
        "code": "EX-402",
        "description": "Magnetic circuits, single-phase and three-phase transformers, autotransformers and three-phase induction motors.",
        "generated": true,
        "references": [
            {
                "title": "Electrical Machinery",
                "author": "P. S. Bimbhra"
            },
            {
                "title": "Electric Machines",
                "author": "I. J. Nagrath & D. P. Kothari"
            },
            {
                "title": "Electric Machinery",
                "author": "Fitzgerald & Kingsley"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex402/notes/ex402-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex402/notes/ex402-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex402/mock-papers/ex402-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex402/mock-papers/ex402-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex402/mock-papers/ex402-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex402-u1",
                "unitNumber": 1,
                "title": "Magnetic Circuits & Transformer Basics",
                "topics": [
                    {
                        "id": "ex402-u1t1",
                        "title": "Magnetic Circuits"
                    },
                    {
                        "id": "ex402-u1t2",
                        "title": "Transformer Principle"
                    },
                    {
                        "id": "ex402-u1t3",
                        "title": "Ideal & Practical Transformer"
                    },
                    {
                        "id": "ex402-u1t4",
                        "title": "Construction"
                    }
                ]
            },
            {
                "id": "ex402-u2",
                "unitNumber": 2,
                "title": "Transformer Performance",
                "topics": [
                    {
                        "id": "ex402-u2t1",
                        "title": "Equivalent Circuit"
                    },
                    {
                        "id": "ex402-u2t2",
                        "title": "Open & Short Circuit Tests"
                    },
                    {
                        "id": "ex402-u2t3",
                        "title": "Voltage Regulation"
                    },
                    {
                        "id": "ex402-u2t4",
                        "title": "Efficiency"
                    }
                ]
            },
            {
                "id": "ex402-u3",
                "unitNumber": 3,
                "title": "Three-phase Transformers & Autotransformers",
                "topics": [
                    {
                        "id": "ex402-u3t1",
                        "title": "Three-phase Connections"
                    },
                    {
                        "id": "ex402-u3t2",
                        "title": "Parallel Operation"
                    },
                    {
                        "id": "ex402-u3t3",
                        "title": "Autotransformer"
                    },
                    {
                        "id": "ex402-u3t4",
                        "title": "Special Transformers"
                    }
                ]
            },
            {
                "id": "ex402-u4",
                "unitNumber": 4,
                "title": "Three-phase Induction Motor",
                "topics": [
                    {
                        "id": "ex402-u4t1",
                        "title": "Construction & Principle"
                    },
                    {
                        "id": "ex402-u4t2",
                        "title": "Slip & Rotor Quantities"
                    },
                    {
                        "id": "ex402-u4t3",
                        "title": "Torque Equation"
                    },
                    {
                        "id": "ex402-u4t4",
                        "title": "Power Flow"
                    }
                ]
            },
            {
                "id": "ex402-u5",
                "unitNumber": 5,
                "title": "Induction Motor Performance & Control",
                "topics": [
                    {
                        "id": "ex402-u5t1",
                        "title": "Equivalent Circuit & Tests"
                    },
                    {
                        "id": "ex402-u5t2",
                        "title": "Starting Methods"
                    },
                    {
                        "id": "ex402-u5t3",
                        "title": "Speed Control"
                    },
                    {
                        "id": "ex402-u5t4",
                        "title": "Induction Generator & Braking"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex404",
        "semester": 4,
        "title": "Power System-I",
        "code": "EX-404",
        "description": "Power generation, transmission line parameters, performance, insulators, cables, corona and distribution.",
        "generated": true,
        "references": [
            {
                "title": "Principles of Power System",
                "author": "V. K. Mehta"
            },
            {
                "title": "Electrical Power Systems",
                "author": "C. L. Wadhwa"
            },
            {
                "title": "Power System Engineering",
                "author": "Nagrath & Kothari"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex404/notes/ex404-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex404/notes/ex404-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex404/mock-papers/ex404-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex404/mock-papers/ex404-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex404/mock-papers/ex404-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex404-u1",
                "unitNumber": 1,
                "title": "Power Generation",
                "topics": [
                    {
                        "id": "ex404-u1t1",
                        "title": "Structure of Power System"
                    },
                    {
                        "id": "ex404-u1t2",
                        "title": "Thermal & Hydro Plants"
                    },
                    {
                        "id": "ex404-u1t3",
                        "title": "Nuclear & Renewable Generation"
                    },
                    {
                        "id": "ex404-u1t4",
                        "title": "Load Factors & Tariffs"
                    }
                ]
            },
            {
                "id": "ex404-u2",
                "unitNumber": 2,
                "title": "Transmission Line Parameters",
                "topics": [
                    {
                        "id": "ex404-u2t1",
                        "title": "Resistance & Skin Effect"
                    },
                    {
                        "id": "ex404-u2t2",
                        "title": "Inductance"
                    },
                    {
                        "id": "ex404-u2t3",
                        "title": "Capacitance"
                    },
                    {
                        "id": "ex404-u2t4",
                        "title": "GMD & Composite Conductors"
                    }
                ]
            },
            {
                "id": "ex404-u3",
                "unitNumber": 3,
                "title": "Transmission Line Performance",
                "topics": [
                    {
                        "id": "ex404-u3t1",
                        "title": "Short Transmission Lines"
                    },
                    {
                        "id": "ex404-u3t2",
                        "title": "Medium Transmission Lines"
                    },
                    {
                        "id": "ex404-u3t3",
                        "title": "Long Transmission Lines"
                    },
                    {
                        "id": "ex404-u3t4",
                        "title": "Ferranti Effect & Compensation"
                    }
                ]
            },
            {
                "id": "ex404-u4",
                "unitNumber": 4,
                "title": "Insulators, Cables & Corona",
                "topics": [
                    {
                        "id": "ex404-u4t1",
                        "title": "Overhead Line Insulators"
                    },
                    {
                        "id": "ex404-u4t2",
                        "title": "Grading & Sag"
                    },
                    {
                        "id": "ex404-u4t3",
                        "title": "Underground Cables"
                    },
                    {
                        "id": "ex404-u4t4",
                        "title": "Corona"
                    }
                ]
            },
            {
                "id": "ex404-u5",
                "unitNumber": 5,
                "title": "Distribution Systems",
                "topics": [
                    {
                        "id": "ex404-u5t1",
                        "title": "Distribution Classification"
                    },
                    {
                        "id": "ex404-u5t2",
                        "title": "Radial & Ring Systems"
                    },
                    {
                        "id": "ex404-u5t3",
                        "title": "DC & AC Distributors"
                    },
                    {
                        "id": "ex404-u5t4",
                        "title": "Substations"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex501",
        "semester": 5,
        "title": "Electrical Machine-II",
        "code": "EX-501",
        "description": "DC machines, synchronous generators and motors, and single-phase induction motors.",
        "generated": true,
        "references": [
            {
                "title": "Electrical Machinery",
                "author": "P. S. Bimbhra"
            },
            {
                "title": "Electric Machines",
                "author": "I. J. Nagrath & D. P. Kothari"
            },
            {
                "title": "Performance and Design of AC Machines",
                "author": "M. G. Say"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex501/notes/ex501-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex501/notes/ex501-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex501/mock-papers/ex501-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex501/mock-papers/ex501-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex501/mock-papers/ex501-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex501-u1",
                "unitNumber": 1,
                "title": "DC Machines",
                "topics": [
                    {
                        "id": "ex501-u1t1",
                        "title": "DC Generator Construction & EMF"
                    },
                    {
                        "id": "ex501-u1t2",
                        "title": "Armature Reaction & Commutation"
                    },
                    {
                        "id": "ex501-u1t3",
                        "title": "DC Generator Characteristics"
                    },
                    {
                        "id": "ex501-u1t4",
                        "title": "DC Motor Principles"
                    }
                ]
            },
            {
                "id": "ex501-u2",
                "unitNumber": 2,
                "title": "DC Motor Control & Testing",
                "topics": [
                    {
                        "id": "ex501-u2t1",
                        "title": "Speed Control of DC Motors"
                    },
                    {
                        "id": "ex501-u2t2",
                        "title": "Starting of DC Motors"
                    },
                    {
                        "id": "ex501-u2t3",
                        "title": "Losses & Efficiency"
                    },
                    {
                        "id": "ex501-u2t4",
                        "title": "Testing of DC Machines"
                    }
                ]
            },
            {
                "id": "ex501-u3",
                "unitNumber": 3,
                "title": "Synchronous Generators",
                "topics": [
                    {
                        "id": "ex501-u3t1",
                        "title": "Alternator Construction"
                    },
                    {
                        "id": "ex501-u3t2",
                        "title": "EMF Equation & Winding Factors"
                    },
                    {
                        "id": "ex501-u3t3",
                        "title": "Voltage Regulation Methods"
                    },
                    {
                        "id": "ex501-u3t4",
                        "title": "Two-reaction Theory"
                    }
                ]
            },
            {
                "id": "ex501-u4",
                "unitNumber": 4,
                "title": "Synchronous Machine Operation",
                "topics": [
                    {
                        "id": "ex501-u4t1",
                        "title": "Parallel Operation"
                    },
                    {
                        "id": "ex501-u4t2",
                        "title": "Synchronous Motor"
                    },
                    {
                        "id": "ex501-u4t3",
                        "title": "Power Factor Control"
                    },
                    {
                        "id": "ex501-u4t4",
                        "title": "Power-Angle Characteristics"
                    }
                ]
            },
            {
                "id": "ex501-u5",
                "unitNumber": 5,
                "title": "Single-phase Induction Motors",
                "topics": [
                    {
                        "id": "ex501-u5t1",
                        "title": "Double Field Revolving Theory"
                    },
                    {
                        "id": "ex501-u5t2",
                        "title": "Split-phase & Capacitor Motors"
                    },
                    {
                        "id": "ex501-u5t3",
                        "title": "Shaded Pole & Universal Motors"
                    },
                    {
                        "id": "ex501-u5t4",
                        "title": "Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex502",
        "semester": 5,
        "title": "Power Electronics",
        "code": "EX-502",
        "description": "Power semiconductor devices, controlled rectifiers, choppers, inverters, AC voltage controllers and cycloconverters.",
        "generated": true,
        "references": [
            {
                "title": "Power Electronics",
                "author": "P. S. Bimbhra"
            },
            {
                "title": "Power Electronics: Circuits, Devices and Applications",
                "author": "Muhammad H. Rashid"
            },
            {
                "title": "Power Electronics",
                "author": "Mohan, Undeland & Robbins"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex502/notes/ex502-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex502/notes/ex502-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex502/mock-papers/ex502-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex502/mock-papers/ex502-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex502/mock-papers/ex502-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex502-u1",
                "unitNumber": 1,
                "title": "Power Semiconductor Devices",
                "topics": [
                    {
                        "id": "ex502-u1t1",
                        "title": "Power Diodes & Thyristors"
                    },
                    {
                        "id": "ex502-u1t2",
                        "title": "SCR Characteristics & Turn-on"
                    },
                    {
                        "id": "ex502-u1t3",
                        "title": "Commutation of SCR"
                    },
                    {
                        "id": "ex502-u1t4",
                        "title": "Modern Power Devices"
                    }
                ]
            },
            {
                "id": "ex502-u2",
                "unitNumber": 2,
                "title": "Controlled Rectifiers",
                "topics": [
                    {
                        "id": "ex502-u2t1",
                        "title": "Single-phase Half-wave Converter"
                    },
                    {
                        "id": "ex502-u2t2",
                        "title": "Single-phase Full Converters"
                    },
                    {
                        "id": "ex502-u2t3",
                        "title": "Three-phase Converters"
                    },
                    {
                        "id": "ex502-u2t4",
                        "title": "Converter Performance"
                    }
                ]
            },
            {
                "id": "ex502-u3",
                "unitNumber": 3,
                "title": "DC-DC Converters (Choppers)",
                "topics": [
                    {
                        "id": "ex502-u3t1",
                        "title": "Chopper Principle"
                    },
                    {
                        "id": "ex502-u3t2",
                        "title": "Chopper Control Strategies"
                    },
                    {
                        "id": "ex502-u3t3",
                        "title": "Chopper Configurations"
                    },
                    {
                        "id": "ex502-u3t4",
                        "title": "Switched-mode Supplies"
                    }
                ]
            },
            {
                "id": "ex502-u4",
                "unitNumber": 4,
                "title": "Inverters",
                "topics": [
                    {
                        "id": "ex502-u4t1",
                        "title": "Single-phase Inverters"
                    },
                    {
                        "id": "ex502-u4t2",
                        "title": "Three-phase Inverters"
                    },
                    {
                        "id": "ex502-u4t3",
                        "title": "PWM Techniques"
                    },
                    {
                        "id": "ex502-u4t4",
                        "title": "Current Source & Resonant Inverters"
                    }
                ]
            },
            {
                "id": "ex502-u5",
                "unitNumber": 5,
                "title": "AC Voltage Controllers & Cycloconverters",
                "topics": [
                    {
                        "id": "ex502-u5t1",
                        "title": "AC Voltage Controllers"
                    },
                    {
                        "id": "ex502-u5t2",
                        "title": "Applications of AC Controllers"
                    },
                    {
                        "id": "ex502-u5t3",
                        "title": "Cycloconverters"
                    },
                    {
                        "id": "ex502-u5t4",
                        "title": "Protection of Devices"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex503c",
        "semester": 5,
        "title": "Renewable Power Generation",
        "code": "EX-503(C)",
        "description": "Solar thermal and PV, wind energy, small hydro, biomass, fuel cells, storage and grid integration.",
        "generated": true,
        "references": [
            {
                "title": "Non-Conventional Energy Sources",
                "author": "G. D. Rai"
            },
            {
                "title": "Renewable Energy Sources and Emerging Technologies",
                "author": "Kothari, Singal & Ranjan"
            },
            {
                "title": "Wind and Solar Power Systems",
                "author": "Mukund R. Patel"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex503c/notes/ex503c-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex503c/notes/ex503c-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex503c/mock-papers/ex503c-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex503c/mock-papers/ex503c-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex503c/mock-papers/ex503c-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex503c-u1",
                "unitNumber": 1,
                "title": "Energy Scenario",
                "topics": [
                    {
                        "id": "ex503c-u1t1",
                        "title": "Renewable Energy Overview"
                    },
                    {
                        "id": "ex503c-u1t2",
                        "title": "Solar Radiation"
                    },
                    {
                        "id": "ex503c-u1t3",
                        "title": "Energy Policy"
                    },
                    {
                        "id": "ex503c-u1t4",
                        "title": "Environmental Benefits"
                    }
                ]
            },
            {
                "id": "ex503c-u2",
                "unitNumber": 2,
                "title": "Solar Energy",
                "topics": [
                    {
                        "id": "ex503c-u2t1",
                        "title": "Solar Thermal Systems"
                    },
                    {
                        "id": "ex503c-u2t2",
                        "title": "Photovoltaic Cell"
                    },
                    {
                        "id": "ex503c-u2t3",
                        "title": "PV Modules & Arrays"
                    },
                    {
                        "id": "ex503c-u2t4",
                        "title": "MPPT & PV Systems"
                    }
                ]
            },
            {
                "id": "ex503c-u3",
                "unitNumber": 3,
                "title": "Wind Energy",
                "topics": [
                    {
                        "id": "ex503c-u3t1",
                        "title": "Wind Power Basics"
                    },
                    {
                        "id": "ex503c-u3t2",
                        "title": "Wind Turbines"
                    },
                    {
                        "id": "ex503c-u3t3",
                        "title": "Wind Generators"
                    },
                    {
                        "id": "ex503c-u3t4",
                        "title": "Wind Farm Planning"
                    }
                ]
            },
            {
                "id": "ex503c-u4",
                "unitNumber": 4,
                "title": "Other Renewable Sources",
                "topics": [
                    {
                        "id": "ex503c-u4t1",
                        "title": "Small Hydro"
                    },
                    {
                        "id": "ex503c-u4t2",
                        "title": "Biomass & Biogas"
                    },
                    {
                        "id": "ex503c-u4t3",
                        "title": "Geothermal & Ocean"
                    },
                    {
                        "id": "ex503c-u4t4",
                        "title": "Fuel Cells"
                    }
                ]
            },
            {
                "id": "ex503c-u5",
                "unitNumber": 5,
                "title": "Storage & Grid Integration",
                "topics": [
                    {
                        "id": "ex503c-u5t1",
                        "title": "Energy Storage"
                    },
                    {
                        "id": "ex503c-u5t2",
                        "title": "Grid Integration Issues"
                    },
                    {
                        "id": "ex503c-u5t3",
                        "title": "Power Electronic Interfaces"
                    },
                    {
                        "id": "ex503c-u5t4",
                        "title": "Hybrid & Microgrids"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex504a",
        "semester": 5,
        "title": "Industrial Electronics",
        "code": "EX-504(A)",
        "description": "Power devices in industry, timers, heating, welding, motor control, PLCs and industrial instrumentation.",
        "generated": true,
        "references": [
            {
                "title": "Industrial Electronics and Control",
                "author": "S. K. Bhattacharya & S. Chatterjee"
            },
            {
                "title": "Power Electronics",
                "author": "P. S. Bimbhra"
            },
            {
                "title": "Programmable Logic Controllers",
                "author": "W. Bolton"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex504a/notes/ex504a-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex504a/notes/ex504a-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex504a/mock-papers/ex504a-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex504a/mock-papers/ex504a-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex504a/mock-papers/ex504a-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex504a-u1",
                "unitNumber": 1,
                "title": "Industrial Power Devices",
                "topics": [
                    {
                        "id": "ex504a-u1t1",
                        "title": "Thyristor Family"
                    },
                    {
                        "id": "ex504a-u1t2",
                        "title": "Triggering Circuits"
                    },
                    {
                        "id": "ex504a-u1t3",
                        "title": "Protection Circuits"
                    },
                    {
                        "id": "ex504a-u1t4",
                        "title": "Power Supplies"
                    }
                ]
            },
            {
                "id": "ex504a-u2",
                "unitNumber": 2,
                "title": "Timers & Control Circuits",
                "topics": [
                    {
                        "id": "ex504a-u2t1",
                        "title": "Timers"
                    },
                    {
                        "id": "ex504a-u2t2",
                        "title": "Time Delay Relays"
                    },
                    {
                        "id": "ex504a-u2t3",
                        "title": "Counters & Sequencers"
                    },
                    {
                        "id": "ex504a-u2t4",
                        "title": "Photoelectric Controls"
                    }
                ]
            },
            {
                "id": "ex504a-u3",
                "unitNumber": 3,
                "title": "Heating & Welding",
                "topics": [
                    {
                        "id": "ex504a-u3t1",
                        "title": "Induction Heating"
                    },
                    {
                        "id": "ex504a-u3t2",
                        "title": "Dielectric Heating"
                    },
                    {
                        "id": "ex504a-u3t3",
                        "title": "Resistance Welding Control"
                    },
                    {
                        "id": "ex504a-u3t4",
                        "title": "Electric Arc Furnace"
                    }
                ]
            },
            {
                "id": "ex504a-u4",
                "unitNumber": 4,
                "title": "Motor Control",
                "topics": [
                    {
                        "id": "ex504a-u4t1",
                        "title": "DC Motor Control"
                    },
                    {
                        "id": "ex504a-u4t2",
                        "title": "AC Motor Control"
                    },
                    {
                        "id": "ex504a-u4t3",
                        "title": "Stepper & Servo Control"
                    },
                    {
                        "id": "ex504a-u4t4",
                        "title": "Motor Protection"
                    }
                ]
            },
            {
                "id": "ex504a-u5",
                "unitNumber": 5,
                "title": "PLC & Industrial Automation",
                "topics": [
                    {
                        "id": "ex504a-u5t1",
                        "title": "PLC Basics"
                    },
                    {
                        "id": "ex504a-u5t2",
                        "title": "Ladder Programming"
                    },
                    {
                        "id": "ex504a-u5t3",
                        "title": "SCADA & DCS"
                    },
                    {
                        "id": "ex504a-u5t4",
                        "title": "Industrial Communication"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex601",
        "semester": 6,
        "title": "Power System-II",
        "code": "EX-601",
        "description": "Per-unit system, load flow studies, economic dispatch, fault analysis, stability and power system control.",
        "generated": true,
        "references": [
            {
                "title": "Modern Power System Analysis",
                "author": "D. P. Kothari & I. J. Nagrath"
            },
            {
                "title": "Power System Analysis",
                "author": "Hadi Saadat"
            },
            {
                "title": "Power System Analysis",
                "author": "Grainger & Stevenson"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex601/notes/ex601-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex601/notes/ex601-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex601/mock-papers/ex601-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex601/mock-papers/ex601-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex601/mock-papers/ex601-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex601-u1",
                "unitNumber": 1,
                "title": "Per-unit System & Network Matrices",
                "topics": [
                    {
                        "id": "ex601-u1t1",
                        "title": "Per-unit System"
                    },
                    {
                        "id": "ex601-u1t2",
                        "title": "Single Line Diagram"
                    },
                    {
                        "id": "ex601-u1t3",
                        "title": "Bus Admittance Matrix"
                    },
                    {
                        "id": "ex601-u1t4",
                        "title": "Bus Impedance Matrix"
                    }
                ]
            },
            {
                "id": "ex601-u2",
                "unitNumber": 2,
                "title": "Load Flow Studies",
                "topics": [
                    {
                        "id": "ex601-u2t1",
                        "title": "Load Flow Problem"
                    },
                    {
                        "id": "ex601-u2t2",
                        "title": "Gauss-Seidel Method"
                    },
                    {
                        "id": "ex601-u2t3",
                        "title": "Newton-Raphson Method"
                    },
                    {
                        "id": "ex601-u2t4",
                        "title": "Fast Decoupled Load Flow"
                    }
                ]
            },
            {
                "id": "ex601-u3",
                "unitNumber": 3,
                "title": "Economic Operation",
                "topics": [
                    {
                        "id": "ex601-u3t1",
                        "title": "Economic Dispatch"
                    },
                    {
                        "id": "ex601-u3t2",
                        "title": "Transmission Losses"
                    },
                    {
                        "id": "ex601-u3t3",
                        "title": "Unit Commitment"
                    },
                    {
                        "id": "ex601-u3t4",
                        "title": "Hydro-thermal Coordination"
                    }
                ]
            },
            {
                "id": "ex601-u4",
                "unitNumber": 4,
                "title": "Fault Analysis",
                "topics": [
                    {
                        "id": "ex601-u4t1",
                        "title": "Symmetrical Faults"
                    },
                    {
                        "id": "ex601-u4t2",
                        "title": "Symmetrical Components"
                    },
                    {
                        "id": "ex601-u4t3",
                        "title": "Unsymmetrical Faults"
                    },
                    {
                        "id": "ex601-u4t4",
                        "title": "Fault Analysis Using Zbus"
                    }
                ]
            },
            {
                "id": "ex601-u5",
                "unitNumber": 5,
                "title": "Power System Stability & Control",
                "topics": [
                    {
                        "id": "ex601-u5t1",
                        "title": "Stability Concepts"
                    },
                    {
                        "id": "ex601-u5t2",
                        "title": "Equal Area Criterion"
                    },
                    {
                        "id": "ex601-u5t3",
                        "title": "Load Frequency Control"
                    },
                    {
                        "id": "ex601-u5t4",
                        "title": "Voltage Control"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex603a",
        "semester": 6,
        "title": "Utilization of Electrical Energy",
        "code": "EX-603(A)",
        "description": "Electric heating, welding, illumination, electric traction, electrolysis and energy-efficient utilisation.",
        "generated": true,
        "references": [
            {
                "title": "Utilization of Electric Energy",
                "author": "E. Openshaw Taylor"
            },
            {
                "title": "Art and Science of Utilization of Electrical Energy",
                "author": "H. Partab"
            },
            {
                "title": "Generation, Distribution and Utilization of Electrical Energy",
                "author": "C. L. Wadhwa"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex603a/notes/ex603a-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex603a/notes/ex603a-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex603a/mock-papers/ex603a-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex603a/mock-papers/ex603a-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex603a/mock-papers/ex603a-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex603a-u1",
                "unitNumber": 1,
                "title": "Electric Heating",
                "topics": [
                    {
                        "id": "ex603a-u1t1",
                        "title": "Methods of Heating"
                    },
                    {
                        "id": "ex603a-u1t2",
                        "title": "Resistance Ovens"
                    },
                    {
                        "id": "ex603a-u1t3",
                        "title": "Induction Furnaces"
                    },
                    {
                        "id": "ex603a-u1t4",
                        "title": "Dielectric Heating"
                    }
                ]
            },
            {
                "id": "ex603a-u2",
                "unitNumber": 2,
                "title": "Electric Welding",
                "topics": [
                    {
                        "id": "ex603a-u2t1",
                        "title": "Welding Fundamentals"
                    },
                    {
                        "id": "ex603a-u2t2",
                        "title": "Resistance Welding Types"
                    },
                    {
                        "id": "ex603a-u2t3",
                        "title": "Arc Welding Equipment"
                    },
                    {
                        "id": "ex603a-u2t4",
                        "title": "Modern Welding"
                    }
                ]
            },
            {
                "id": "ex603a-u3",
                "unitNumber": 3,
                "title": "Illumination",
                "topics": [
                    {
                        "id": "ex603a-u3t1",
                        "title": "Laws of Illumination"
                    },
                    {
                        "id": "ex603a-u3t2",
                        "title": "Lamps"
                    },
                    {
                        "id": "ex603a-u3t3",
                        "title": "Lighting Design"
                    },
                    {
                        "id": "ex603a-u3t4",
                        "title": "Street & Flood Lighting"
                    }
                ]
            },
            {
                "id": "ex603a-u4",
                "unitNumber": 4,
                "title": "Electric Traction",
                "topics": [
                    {
                        "id": "ex603a-u4t1",
                        "title": "Traction Systems"
                    },
                    {
                        "id": "ex603a-u4t2",
                        "title": "Speed-Time Curves"
                    },
                    {
                        "id": "ex603a-u4t3",
                        "title": "Tractive Effort"
                    },
                    {
                        "id": "ex603a-u4t4",
                        "title": "Traction Motors & Braking"
                    }
                ]
            },
            {
                "id": "ex603a-u5",
                "unitNumber": 5,
                "title": "Electrolysis & Energy Efficiency",
                "topics": [
                    {
                        "id": "ex603a-u5t1",
                        "title": "Electrolytic Processes"
                    },
                    {
                        "id": "ex603a-u5t2",
                        "title": "Battery Charging"
                    },
                    {
                        "id": "ex603a-u5t3",
                        "title": "Energy-efficient Motors & Drives"
                    },
                    {
                        "id": "ex603a-u5t4",
                        "title": "Domestic Utilisation"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex701",
        "semester": 7,
        "title": "Power System Protection",
        "code": "EX-701",
        "description": "Fault analysis, relays, protection schemes for generators, transformers, lines, circuit breakers and numerical relaying.",
        "generated": true,
        "references": [
            {
                "title": "Switchgear and Protection",
                "author": "Sunil S. Rao"
            },
            {
                "title": "Power System Protection and Switchgear",
                "author": "B. Ram & D. N. Vishwakarma"
            },
            {
                "title": "Protective Relaying",
                "author": "Blackburn & Domin"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex701/notes/ex701-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex701/notes/ex701-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex701/mock-papers/ex701-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex701/mock-papers/ex701-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex701/mock-papers/ex701-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex701-u1",
                "unitNumber": 1,
                "title": "Protection Fundamentals",
                "topics": [
                    {
                        "id": "ex701-u1t1",
                        "title": "Need for Protection"
                    },
                    {
                        "id": "ex701-u1t2",
                        "title": "Relay Characteristics"
                    },
                    {
                        "id": "ex701-u1t3",
                        "title": "Instrument Transformers for Protection"
                    },
                    {
                        "id": "ex701-u1t4",
                        "title": "Earthing in Power Systems"
                    }
                ]
            },
            {
                "id": "ex701-u2",
                "unitNumber": 2,
                "title": "Relays",
                "topics": [
                    {
                        "id": "ex701-u2t1",
                        "title": "Electromagnetic Relays"
                    },
                    {
                        "id": "ex701-u2t2",
                        "title": "Overcurrent Relays"
                    },
                    {
                        "id": "ex701-u2t3",
                        "title": "Directional & Differential Relays"
                    },
                    {
                        "id": "ex701-u2t4",
                        "title": "Distance Relays"
                    }
                ]
            },
            {
                "id": "ex701-u3",
                "unitNumber": 3,
                "title": "Apparatus Protection",
                "topics": [
                    {
                        "id": "ex701-u3t1",
                        "title": "Generator Protection"
                    },
                    {
                        "id": "ex701-u3t2",
                        "title": "Transformer Protection"
                    },
                    {
                        "id": "ex701-u3t3",
                        "title": "Busbar Protection"
                    },
                    {
                        "id": "ex701-u3t4",
                        "title": "Motor Protection"
                    }
                ]
            },
            {
                "id": "ex701-u4",
                "unitNumber": 4,
                "title": "Line Protection & Circuit Breakers",
                "topics": [
                    {
                        "id": "ex701-u4t1",
                        "title": "Transmission Line Protection"
                    },
                    {
                        "id": "ex701-u4t2",
                        "title": "Circuit Breaker Principles"
                    },
                    {
                        "id": "ex701-u4t3",
                        "title": "Types of Circuit Breakers"
                    },
                    {
                        "id": "ex701-u4t4",
                        "title": "Breaker Ratings & Testing"
                    }
                ]
            },
            {
                "id": "ex701-u5",
                "unitNumber": 5,
                "title": "Modern Protection",
                "topics": [
                    {
                        "id": "ex701-u5t1",
                        "title": "Static Relays"
                    },
                    {
                        "id": "ex701-u5t2",
                        "title": "Numerical Relays"
                    },
                    {
                        "id": "ex701-u5t3",
                        "title": "Substation Automation"
                    },
                    {
                        "id": "ex701-u5t4",
                        "title": "Protection Against Overvoltages"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex702b",
        "semester": 2,
        "title": "HVDC & FACTS",
        "code": "EX-702(B)",
        "description": "HVDC transmission, converters, control, and flexible AC transmission devices such as SVC, STATCOM, TCSC and UPFC.",
        "generated": true,
        "references": [
            {
                "title": "HVDC Power Transmission Systems",
                "author": "K. R. Padiyar"
            },
            {
                "title": "Understanding FACTS",
                "author": "N. G. Hingorani & L. Gyugyi"
            },
            {
                "title": "FACTS Controllers in Power Transmission and Distribution",
                "author": "K. R. Padiyar"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex702b/notes/ex702b-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex702b/notes/ex702b-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex702b/mock-papers/ex702b-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex702b/mock-papers/ex702b-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex702b/mock-papers/ex702b-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex702b-u1",
                "unitNumber": 1,
                "title": "HVDC Fundamentals",
                "topics": [
                    {
                        "id": "ex702b-u1t1",
                        "title": "HVDC vs HVAC"
                    },
                    {
                        "id": "ex702b-u1t2",
                        "title": "HVDC Link Types"
                    },
                    {
                        "id": "ex702b-u1t3",
                        "title": "HVDC Components"
                    },
                    {
                        "id": "ex702b-u1t4",
                        "title": "HVDC in India"
                    }
                ]
            },
            {
                "id": "ex702b-u2",
                "unitNumber": 2,
                "title": "HVDC Converters & Control",
                "topics": [
                    {
                        "id": "ex702b-u2t1",
                        "title": "Line Commutated Converters"
                    },
                    {
                        "id": "ex702b-u2t2",
                        "title": "Rectifier & Inverter Operation"
                    },
                    {
                        "id": "ex702b-u2t3",
                        "title": "HVDC Control"
                    },
                    {
                        "id": "ex702b-u2t4",
                        "title": "VSC-HVDC"
                    }
                ]
            },
            {
                "id": "ex702b-u3",
                "unitNumber": 3,
                "title": "Reactive Power & FACTS Concepts",
                "topics": [
                    {
                        "id": "ex702b-u3t1",
                        "title": "Reactive Power Control"
                    },
                    {
                        "id": "ex702b-u3t2",
                        "title": "FACTS Concept"
                    },
                    {
                        "id": "ex702b-u3t3",
                        "title": "Shunt Devices"
                    },
                    {
                        "id": "ex702b-u3t4",
                        "title": "Series Devices"
                    }
                ]
            },
            {
                "id": "ex702b-u4",
                "unitNumber": 4,
                "title": "Advanced FACTS",
                "topics": [
                    {
                        "id": "ex702b-u4t1",
                        "title": "UPFC"
                    },
                    {
                        "id": "ex702b-u4t2",
                        "title": "IPFC & Phase Shifters"
                    },
                    {
                        "id": "ex702b-u4t3",
                        "title": "Stability Enhancement"
                    },
                    {
                        "id": "ex702b-u4t4",
                        "title": "Harmonics & Filters"
                    }
                ]
            },
            {
                "id": "ex702b-u5",
                "unitNumber": 5,
                "title": "Applications & Grid Integration",
                "topics": [
                    {
                        "id": "ex702b-u5t1",
                        "title": "Renewable Integration"
                    },
                    {
                        "id": "ex702b-u5t2",
                        "title": "Multi-terminal HVDC"
                    },
                    {
                        "id": "ex702b-u5t3",
                        "title": "Power Quality Applications"
                    },
                    {
                        "id": "ex702b-u5t4",
                        "title": "Economics & Planning"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex702c",
        "semester": 7,
        "title": "High Voltage Engineering",
        "code": "EX-702(C)",
        "description": "Breakdown in gases, liquids and solids, generation and measurement of high voltages, overvoltages and HV testing.",
        "generated": true,
        "references": [
            {
                "title": "High Voltage Engineering",
                "author": "M. S. Naidu & V. Kamaraju"
            },
            {
                "title": "High Voltage Engineering Fundamentals",
                "author": "Kuffel, Zaengl & Kuffel"
            },
            {
                "title": "High Voltage Engineering",
                "author": "C. L. Wadhwa"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex702c/notes/ex702c-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex702c/notes/ex702c-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex702c/mock-papers/ex702c-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex702c/mock-papers/ex702c-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex702c/mock-papers/ex702c-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex702c-u1",
                "unitNumber": 1,
                "title": "Breakdown in Gases",
                "topics": [
                    {
                        "id": "ex702c-u1t1",
                        "title": "Ionisation Processes"
                    },
                    {
                        "id": "ex702c-u1t2",
                        "title": "Paschen's Law"
                    },
                    {
                        "id": "ex702c-u1t3",
                        "title": "Corona Discharge"
                    },
                    {
                        "id": "ex702c-u1t4",
                        "title": "SF6 & Vacuum Insulation"
                    }
                ]
            },
            {
                "id": "ex702c-u2",
                "unitNumber": 2,
                "title": "Breakdown in Liquids & Solids",
                "topics": [
                    {
                        "id": "ex702c-u2t1",
                        "title": "Liquid Dielectrics"
                    },
                    {
                        "id": "ex702c-u2t2",
                        "title": "Solid Dielectrics"
                    },
                    {
                        "id": "ex702c-u2t3",
                        "title": "Treeing & Tracking"
                    },
                    {
                        "id": "ex702c-u2t4",
                        "title": "Composite Insulation"
                    }
                ]
            },
            {
                "id": "ex702c-u3",
                "unitNumber": 3,
                "title": "Generation of High Voltages",
                "topics": [
                    {
                        "id": "ex702c-u3t1",
                        "title": "HV AC Generation"
                    },
                    {
                        "id": "ex702c-u3t2",
                        "title": "HV DC Generation"
                    },
                    {
                        "id": "ex702c-u3t3",
                        "title": "Impulse Voltage Generation"
                    },
                    {
                        "id": "ex702c-u3t4",
                        "title": "Impulse Current Generation"
                    }
                ]
            },
            {
                "id": "ex702c-u4",
                "unitNumber": 4,
                "title": "Measurement of High Voltages",
                "topics": [
                    {
                        "id": "ex702c-u4t1",
                        "title": "Sphere Gaps"
                    },
                    {
                        "id": "ex702c-u4t2",
                        "title": "Voltage Dividers"
                    },
                    {
                        "id": "ex702c-u4t3",
                        "title": "Electrostatic Voltmeter"
                    },
                    {
                        "id": "ex702c-u4t4",
                        "title": "Current & PD Measurement"
                    }
                ]
            },
            {
                "id": "ex702c-u5",
                "unitNumber": 5,
                "title": "Overvoltages & HV Testing",
                "topics": [
                    {
                        "id": "ex702c-u5t1",
                        "title": "Lightning Overvoltages"
                    },
                    {
                        "id": "ex702c-u5t2",
                        "title": "Switching Overvoltages"
                    },
                    {
                        "id": "ex702c-u5t3",
                        "title": "Insulation Coordination"
                    },
                    {
                        "id": "ex702c-u5t4",
                        "title": "HV Testing"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex801",
        "semester": 8,
        "title": "Electrical Drives",
        "code": "EX-801",
        "description": "Drive dynamics, DC drives, induction motor drives, synchronous motor drives, braking and digital control.",
        "generated": true,
        "references": [
            {
                "title": "Fundamentals of Electrical Drives",
                "author": "G. K. Dubey"
            },
            {
                "title": "Electric Motor Drives",
                "author": "R. Krishnan"
            },
            {
                "title": "Modern Power Electronics and AC Drives",
                "author": "B. K. Bose"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex801/notes/ex801-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex801/notes/ex801-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex801/mock-papers/ex801-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex801/mock-papers/ex801-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex801/mock-papers/ex801-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex801-u1",
                "unitNumber": 1,
                "title": "Electric Drive Fundamentals",
                "topics": [
                    {
                        "id": "ex801-u1t1",
                        "title": "Elements of Electric Drive"
                    },
                    {
                        "id": "ex801-u1t2",
                        "title": "Dynamics of Drives"
                    },
                    {
                        "id": "ex801-u1t3",
                        "title": "Load Characteristics"
                    },
                    {
                        "id": "ex801-u1t4",
                        "title": "Motor Rating"
                    }
                ]
            },
            {
                "id": "ex801-u2",
                "unitNumber": 2,
                "title": "DC Drives",
                "topics": [
                    {
                        "id": "ex801-u2t1",
                        "title": "Single-phase Converter Drives"
                    },
                    {
                        "id": "ex801-u2t2",
                        "title": "Three-phase Converter Drives"
                    },
                    {
                        "id": "ex801-u2t3",
                        "title": "Chopper-fed DC Drives"
                    },
                    {
                        "id": "ex801-u2t4",
                        "title": "Closed-loop DC Drives"
                    }
                ]
            },
            {
                "id": "ex801-u3",
                "unitNumber": 3,
                "title": "Induction Motor Drives",
                "topics": [
                    {
                        "id": "ex801-u3t1",
                        "title": "Stator Voltage Control"
                    },
                    {
                        "id": "ex801-u3t2",
                        "title": "V/f Control"
                    },
                    {
                        "id": "ex801-u3t3",
                        "title": "Rotor Resistance & Slip Power Recovery"
                    },
                    {
                        "id": "ex801-u3t4",
                        "title": "Vector Control"
                    }
                ]
            },
            {
                "id": "ex801-u4",
                "unitNumber": 4,
                "title": "Synchronous & Special Motor Drives",
                "topics": [
                    {
                        "id": "ex801-u4t1",
                        "title": "Synchronous Motor Drives"
                    },
                    {
                        "id": "ex801-u4t2",
                        "title": "BLDC & PMSM Drives"
                    },
                    {
                        "id": "ex801-u4t3",
                        "title": "Stepper Motor Drives"
                    },
                    {
                        "id": "ex801-u4t4",
                        "title": "Switched Reluctance Drives"
                    }
                ]
            },
            {
                "id": "ex801-u5",
                "unitNumber": 5,
                "title": "Braking & Digital Control",
                "topics": [
                    {
                        "id": "ex801-u5t1",
                        "title": "Electric Braking"
                    },
                    {
                        "id": "ex801-u5t2",
                        "title": "Energy Recovery"
                    },
                    {
                        "id": "ex801-u5t3",
                        "title": "Digital Control of Drives"
                    },
                    {
                        "id": "ex801-u5t4",
                        "title": "Drive Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "ex802b",
        "semester": 8,
        "title": "Special Electrical Machines",
        "code": "EX-802(B)",
        "description": "Stepper, switched reluctance, BLDC, PMSM, linear induction and other special purpose machines.",
        "generated": true,
        "references": [
            {
                "title": "Special Electrical Machines",
                "author": "E. G. Janardanan"
            },
            {
                "title": "Brushless Permanent Magnet and Reluctance Motor Drives",
                "author": "T. J. E. Miller"
            },
            {
                "title": "Switched Reluctance Motor Drives",
                "author": "R. Krishnan"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/ex802b/notes/ex802b-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/ex802b/notes/ex802b-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/ex802b/mock-papers/ex802b-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/ex802b/mock-papers/ex802b-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/ex802b/mock-papers/ex802b-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "ex802b-u1",
                "unitNumber": 1,
                "title": "Stepper Motors",
                "topics": [
                    {
                        "id": "ex802b-u1t1",
                        "title": "Stepper Motor Principle"
                    },
                    {
                        "id": "ex802b-u1t2",
                        "title": "Types of Stepper Motors"
                    },
                    {
                        "id": "ex802b-u1t3",
                        "title": "Drive Modes"
                    },
                    {
                        "id": "ex802b-u1t4",
                        "title": "Characteristics"
                    }
                ]
            },
            {
                "id": "ex802b-u2",
                "unitNumber": 2,
                "title": "Switched Reluctance Motors",
                "topics": [
                    {
                        "id": "ex802b-u2t1",
                        "title": "SRM Construction"
                    },
                    {
                        "id": "ex802b-u2t2",
                        "title": "Torque Production"
                    },
                    {
                        "id": "ex802b-u2t3",
                        "title": "SRM Converters"
                    },
                    {
                        "id": "ex802b-u2t4",
                        "title": "SRM Applications"
                    }
                ]
            },
            {
                "id": "ex802b-u3",
                "unitNumber": 3,
                "title": "Permanent Magnet Machines",
                "topics": [
                    {
                        "id": "ex802b-u3t1",
                        "title": "Permanent Magnet Materials"
                    },
                    {
                        "id": "ex802b-u3t2",
                        "title": "BLDC Motor"
                    },
                    {
                        "id": "ex802b-u3t3",
                        "title": "PMSM"
                    },
                    {
                        "id": "ex802b-u3t4",
                        "title": "PM Generators"
                    }
                ]
            },
            {
                "id": "ex802b-u4",
                "unitNumber": 4,
                "title": "Linear & Other Machines",
                "topics": [
                    {
                        "id": "ex802b-u4t1",
                        "title": "Linear Induction Motor"
                    },
                    {
                        "id": "ex802b-u4t2",
                        "title": "Synchronous Reluctance Motor"
                    },
                    {
                        "id": "ex802b-u4t3",
                        "title": "Hysteresis & Universal Motors"
                    },
                    {
                        "id": "ex802b-u4t4",
                        "title": "Servo Motors & Tachogenerators"
                    }
                ]
            },
            {
                "id": "ex802b-u5",
                "unitNumber": 5,
                "title": "Control & Applications",
                "topics": [
                    {
                        "id": "ex802b-u5t1",
                        "title": "Sensorless Control"
                    },
                    {
                        "id": "ex802b-u5t2",
                        "title": "Electric Vehicle Motors"
                    },
                    {
                        "id": "ex802b-u5t3",
                        "title": "Aerospace & Medical Machines"
                    },
                    {
                        "id": "ex802b-u5t4",
                        "title": "Machine Design Considerations"
                    }
                ]
            }
        ]
    },
    {
        "id": "mt-rm",
        "semester": 2,
        "title": "Research Methodology & IPR",
        "code": "MT-RM",
        "description": "Research design, literature review, data analysis, technical writing, ethics and intellectual property rights for M.Tech students.",
        "generated": true,
        "references": [
            {
                "title": "Research Methodology: Methods and Techniques",
                "author": "C. R. Kothari"
            },
            {
                "title": "Research Methodology: A Step-by-Step Guide",
                "author": "Ranjit Kumar"
            },
            {
                "title": "Intellectual Property Rights",
                "author": "N. K. Acharya"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mt-rm/notes/mt-rm-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mt-rm/notes/mt-rm-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mt-rm/mock-papers/mt-rm-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mt-rm/mock-papers/mt-rm-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mt-rm/mock-papers/mt-rm-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mt-rm-u1",
                "unitNumber": 1,
                "title": "Research Fundamentals",
                "topics": [
                    {
                        "id": "mt-rm-u1t1",
                        "title": "Meaning & Types of Research"
                    },
                    {
                        "id": "mt-rm-u1t2",
                        "title": "Research Process"
                    },
                    {
                        "id": "mt-rm-u1t3",
                        "title": "Literature Review"
                    },
                    {
                        "id": "mt-rm-u1t4",
                        "title": "Problem Formulation"
                    }
                ]
            },
            {
                "id": "mt-rm-u2",
                "unitNumber": 2,
                "title": "Data Collection & Analysis",
                "topics": [
                    {
                        "id": "mt-rm-u2t1",
                        "title": "Data Collection Methods"
                    },
                    {
                        "id": "mt-rm-u2t2",
                        "title": "Statistical Analysis"
                    },
                    {
                        "id": "mt-rm-u2t3",
                        "title": "Design of Experiments"
                    },
                    {
                        "id": "mt-rm-u2t4",
                        "title": "Modelling & Simulation"
                    }
                ]
            },
            {
                "id": "mt-rm-u3",
                "unitNumber": 3,
                "title": "Technical Writing",
                "topics": [
                    {
                        "id": "mt-rm-u3t1",
                        "title": "Structure of a Research Paper"
                    },
                    {
                        "id": "mt-rm-u3t2",
                        "title": "Thesis Writing"
                    },
                    {
                        "id": "mt-rm-u3t3",
                        "title": "Referencing Styles"
                    },
                    {
                        "id": "mt-rm-u3t4",
                        "title": "Publishing"
                    }
                ]
            },
            {
                "id": "mt-rm-u4",
                "unitNumber": 4,
                "title": "Research Ethics",
                "topics": [
                    {
                        "id": "mt-rm-u4t1",
                        "title": "Ethics in Research"
                    },
                    {
                        "id": "mt-rm-u4t2",
                        "title": "Plagiarism"
                    },
                    {
                        "id": "mt-rm-u4t3",
                        "title": "Research Misconduct"
                    },
                    {
                        "id": "mt-rm-u4t4",
                        "title": "Reproducibility"
                    }
                ]
            },
            {
                "id": "mt-rm-u5",
                "unitNumber": 5,
                "title": "Intellectual Property Rights",
                "topics": [
                    {
                        "id": "mt-rm-u5t1",
                        "title": "Types of IPR"
                    },
                    {
                        "id": "mt-rm-u5t2",
                        "title": "Patents"
                    },
                    {
                        "id": "mt-rm-u5t3",
                        "title": "Patent Process in India"
                    },
                    {
                        "id": "mt-rm-u5t4",
                        "title": "Other IPR & Technology Transfer"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse101",
        "semester": 1,
        "title": "Advanced Computational Mathematics",
        "code": "MCSE-101",
        "description": "Linear algebra, probability, random processes, optimisation, graph theory and queueing for computer science research.",
        "generated": true,
        "references": [
            {
                "title": "Linear Algebra and Learning from Data",
                "author": "Gilbert Strang"
            },
            {
                "title": "Probability and Statistics for Computer Scientists",
                "author": "Michael Baron"
            },
            {
                "title": "Convex Optimization",
                "author": "Boyd & Vandenberghe"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse101/notes/mcse101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse101/notes/mcse101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse101/mock-papers/mcse101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse101/mock-papers/mcse101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse101/mock-papers/mcse101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse101-u1",
                "unitNumber": 1,
                "title": "Linear Algebra for Computing",
                "topics": [
                    {
                        "id": "mcse101-u1t1",
                        "title": "Vector Spaces & Linear Maps"
                    },
                    {
                        "id": "mcse101-u1t2",
                        "title": "Eigen Decomposition"
                    },
                    {
                        "id": "mcse101-u1t3",
                        "title": "Singular Value Decomposition"
                    },
                    {
                        "id": "mcse101-u1t4",
                        "title": "Matrix Norms & Conditioning"
                    }
                ]
            },
            {
                "id": "mcse101-u2",
                "unitNumber": 2,
                "title": "Probability & Statistics",
                "topics": [
                    {
                        "id": "mcse101-u2t1",
                        "title": "Random Variables & Distributions"
                    },
                    {
                        "id": "mcse101-u2t2",
                        "title": "Joint Distributions & Bayes"
                    },
                    {
                        "id": "mcse101-u2t3",
                        "title": "Estimation"
                    },
                    {
                        "id": "mcse101-u2t4",
                        "title": "Limit Theorems & Inequalities"
                    }
                ]
            },
            {
                "id": "mcse101-u3",
                "unitNumber": 3,
                "title": "Random Processes & Queueing",
                "topics": [
                    {
                        "id": "mcse101-u3t1",
                        "title": "Random Processes"
                    },
                    {
                        "id": "mcse101-u3t2",
                        "title": "Markov Chains"
                    },
                    {
                        "id": "mcse101-u3t3",
                        "title": "Queueing Models"
                    },
                    {
                        "id": "mcse101-u3t4",
                        "title": "Hidden Markov Models"
                    }
                ]
            },
            {
                "id": "mcse101-u4",
                "unitNumber": 4,
                "title": "Optimisation",
                "topics": [
                    {
                        "id": "mcse101-u4t1",
                        "title": "Convex Optimisation"
                    },
                    {
                        "id": "mcse101-u4t2",
                        "title": "Gradient Methods"
                    },
                    {
                        "id": "mcse101-u4t3",
                        "title": "Constrained Optimisation"
                    },
                    {
                        "id": "mcse101-u4t4",
                        "title": "Linear & Integer Programming"
                    }
                ]
            },
            {
                "id": "mcse101-u5",
                "unitNumber": 5,
                "title": "Graph Theory & Combinatorics",
                "topics": [
                    {
                        "id": "mcse101-u5t1",
                        "title": "Graph Algorithms"
                    },
                    {
                        "id": "mcse101-u5t2",
                        "title": "Spectral Graph Theory"
                    },
                    {
                        "id": "mcse101-u5t3",
                        "title": "Combinatorial Counting"
                    },
                    {
                        "id": "mcse101-u5t4",
                        "title": "Information Theory Basics"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse102",
        "semester": 1,
        "title": "Advanced Data Structures & Algorithms",
        "code": "MCSE-102",
        "description": "Amortised analysis, advanced trees and heaps, graph algorithms, randomised, approximation and parameterised algorithms.",
        "generated": true,
        "references": [
            {
                "title": "Introduction to Algorithms",
                "author": "Cormen, Leiserson, Rivest & Stein"
            },
            {
                "title": "Randomized Algorithms",
                "author": "Motwani & Raghavan"
            },
            {
                "title": "The Design of Approximation Algorithms",
                "author": "Williamson & Shmoys"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse102/notes/mcse102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse102/notes/mcse102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse102/mock-papers/mcse102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse102/mock-papers/mcse102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse102/mock-papers/mcse102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse102-u1",
                "unitNumber": 1,
                "title": "Analysis Techniques",
                "topics": [
                    {
                        "id": "mcse102-u1t1",
                        "title": "Amortised Analysis"
                    },
                    {
                        "id": "mcse102-u1t2",
                        "title": "Advanced Recurrences"
                    },
                    {
                        "id": "mcse102-u1t3",
                        "title": "Competitive Analysis"
                    },
                    {
                        "id": "mcse102-u1t4",
                        "title": "External Memory Model"
                    }
                ]
            },
            {
                "id": "mcse102-u2",
                "unitNumber": 2,
                "title": "Advanced Trees & Heaps",
                "topics": [
                    {
                        "id": "mcse102-u2t1",
                        "title": "Balanced Search Trees"
                    },
                    {
                        "id": "mcse102-u2t2",
                        "title": "Advanced Heaps"
                    },
                    {
                        "id": "mcse102-u2t3",
                        "title": "Range Query Structures"
                    },
                    {
                        "id": "mcse102-u2t4",
                        "title": "String Data Structures"
                    }
                ]
            },
            {
                "id": "mcse102-u3",
                "unitNumber": 3,
                "title": "Graph Algorithms",
                "topics": [
                    {
                        "id": "mcse102-u3t1",
                        "title": "Shortest Paths"
                    },
                    {
                        "id": "mcse102-u3t2",
                        "title": "Network Flow"
                    },
                    {
                        "id": "mcse102-u3t3",
                        "title": "Matching"
                    },
                    {
                        "id": "mcse102-u3t4",
                        "title": "Connectivity & Decomposition"
                    }
                ]
            },
            {
                "id": "mcse102-u4",
                "unitNumber": 4,
                "title": "Randomised Algorithms",
                "topics": [
                    {
                        "id": "mcse102-u4t1",
                        "title": "Randomisation Basics"
                    },
                    {
                        "id": "mcse102-u4t2",
                        "title": "Randomised Data Structures"
                    },
                    {
                        "id": "mcse102-u4t3",
                        "title": "Randomised Graph Algorithms"
                    },
                    {
                        "id": "mcse102-u4t4",
                        "title": "Streaming & Sketching"
                    }
                ]
            },
            {
                "id": "mcse102-u5",
                "unitNumber": 5,
                "title": "Approximation & Parameterised Algorithms",
                "topics": [
                    {
                        "id": "mcse102-u5t1",
                        "title": "NP-hardness & Reductions"
                    },
                    {
                        "id": "mcse102-u5t2",
                        "title": "Approximation Algorithms"
                    },
                    {
                        "id": "mcse102-u5t3",
                        "title": "PTAS & FPTAS"
                    },
                    {
                        "id": "mcse102-u5t4",
                        "title": "Parameterised Complexity"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse103",
        "semester": 1,
        "title": "Advanced Computer Architecture",
        "code": "MCSE-103",
        "description": "Performance, instruction-level parallelism, memory hierarchy, multiprocessors, GPUs and domain-specific architectures.",
        "generated": true,
        "references": [
            {
                "title": "Computer Architecture: A Quantitative Approach",
                "author": "Hennessy & Patterson"
            },
            {
                "title": "Advanced Computer Architecture",
                "author": "Kai Hwang"
            },
            {
                "title": "Parallel Computer Architecture",
                "author": "Culler & Singh"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse103/notes/mcse103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse103/notes/mcse103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse103/mock-papers/mcse103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse103/mock-papers/mcse103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse103/mock-papers/mcse103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse103-u1",
                "unitNumber": 1,
                "title": "Fundamentals & Performance",
                "topics": [
                    {
                        "id": "mcse103-u1t1",
                        "title": "Performance Metrics"
                    },
                    {
                        "id": "mcse103-u1t2",
                        "title": "Instruction Set Design"
                    },
                    {
                        "id": "mcse103-u1t3",
                        "title": "Power & Energy"
                    },
                    {
                        "id": "mcse103-u1t4",
                        "title": "Benchmarks"
                    }
                ]
            },
            {
                "id": "mcse103-u2",
                "unitNumber": 2,
                "title": "Instruction-level Parallelism",
                "topics": [
                    {
                        "id": "mcse103-u2t1",
                        "title": "Pipelining & Hazards"
                    },
                    {
                        "id": "mcse103-u2t2",
                        "title": "Branch Prediction"
                    },
                    {
                        "id": "mcse103-u2t3",
                        "title": "Dynamic Scheduling"
                    },
                    {
                        "id": "mcse103-u2t4",
                        "title": "Superscalar & VLIW"
                    }
                ]
            },
            {
                "id": "mcse103-u3",
                "unitNumber": 3,
                "title": "Memory Hierarchy",
                "topics": [
                    {
                        "id": "mcse103-u3t1",
                        "title": "Cache Design"
                    },
                    {
                        "id": "mcse103-u3t2",
                        "title": "Advanced Cache Optimisations"
                    },
                    {
                        "id": "mcse103-u3t3",
                        "title": "Virtual Memory & TLB"
                    },
                    {
                        "id": "mcse103-u3t4",
                        "title": "Memory Technologies"
                    }
                ]
            },
            {
                "id": "mcse103-u4",
                "unitNumber": 4,
                "title": "Multiprocessors",
                "topics": [
                    {
                        "id": "mcse103-u4t1",
                        "title": "Thread-level Parallelism"
                    },
                    {
                        "id": "mcse103-u4t2",
                        "title": "Cache Coherence"
                    },
                    {
                        "id": "mcse103-u4t3",
                        "title": "Memory Consistency"
                    },
                    {
                        "id": "mcse103-u4t4",
                        "title": "Interconnection Networks"
                    }
                ]
            },
            {
                "id": "mcse103-u5",
                "unitNumber": 5,
                "title": "Data-level Parallelism & Accelerators",
                "topics": [
                    {
                        "id": "mcse103-u5t1",
                        "title": "Vector & SIMD"
                    },
                    {
                        "id": "mcse103-u5t2",
                        "title": "GPU Architecture"
                    },
                    {
                        "id": "mcse103-u5t3",
                        "title": "Domain-specific Architectures"
                    },
                    {
                        "id": "mcse103-u5t4",
                        "title": "Warehouse-scale Computers"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse104",
        "semester": 1,
        "title": "Advanced Computer Networks",
        "code": "MCSE-104",
        "description": "Network architecture, routing, transport, QoS, software-defined networking, wireless and network security.",
        "generated": true,
        "references": [
            {
                "title": "Computer Networks: A Systems Approach",
                "author": "Peterson & Davie"
            },
            {
                "title": "Computer Networking: A Top-Down Approach",
                "author": "Kurose & Ross"
            },
            {
                "title": "Software Defined Networks",
                "author": "Nadeau & Gray"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse104/notes/mcse104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse104/notes/mcse104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse104/mock-papers/mcse104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse104/mock-papers/mcse104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse104/mock-papers/mcse104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse104-u1",
                "unitNumber": 1,
                "title": "Network Architecture",
                "topics": [
                    {
                        "id": "mcse104-u1t1",
                        "title": "Layered Architecture"
                    },
                    {
                        "id": "mcse104-u1t2",
                        "title": "Switching Techniques"
                    },
                    {
                        "id": "mcse104-u1t3",
                        "title": "Network Performance"
                    },
                    {
                        "id": "mcse104-u1t4",
                        "title": "Internet Architecture"
                    }
                ]
            },
            {
                "id": "mcse104-u2",
                "unitNumber": 2,
                "title": "Routing",
                "topics": [
                    {
                        "id": "mcse104-u2t1",
                        "title": "Intra-domain Routing"
                    },
                    {
                        "id": "mcse104-u2t2",
                        "title": "Inter-domain Routing"
                    },
                    {
                        "id": "mcse104-u2t3",
                        "title": "Multicast Routing"
                    },
                    {
                        "id": "mcse104-u2t4",
                        "title": "IPv6 & Addressing"
                    }
                ]
            },
            {
                "id": "mcse104-u3",
                "unitNumber": 3,
                "title": "Transport & QoS",
                "topics": [
                    {
                        "id": "mcse104-u3t1",
                        "title": "TCP Congestion Control"
                    },
                    {
                        "id": "mcse104-u3t2",
                        "title": "Advanced Transport"
                    },
                    {
                        "id": "mcse104-u3t3",
                        "title": "Quality of Service"
                    },
                    {
                        "id": "mcse104-u3t4",
                        "title": "Queue Management"
                    }
                ]
            },
            {
                "id": "mcse104-u4",
                "unitNumber": 4,
                "title": "Software-defined & Virtual Networks",
                "topics": [
                    {
                        "id": "mcse104-u4t1",
                        "title": "SDN"
                    },
                    {
                        "id": "mcse104-u4t2",
                        "title": "NFV"
                    },
                    {
                        "id": "mcse104-u4t3",
                        "title": "Data Centre Networks"
                    },
                    {
                        "id": "mcse104-u4t4",
                        "title": "Programmable Data Planes"
                    }
                ]
            },
            {
                "id": "mcse104-u5",
                "unitNumber": 5,
                "title": "Wireless & Secure Networks",
                "topics": [
                    {
                        "id": "mcse104-u5t1",
                        "title": "Wireless LANs"
                    },
                    {
                        "id": "mcse104-u5t2",
                        "title": "Mobile & Ad Hoc Networks"
                    },
                    {
                        "id": "mcse104-u5t3",
                        "title": "Network Security Protocols"
                    },
                    {
                        "id": "mcse104-u5t4",
                        "title": "Network Attacks & Defence"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse201",
        "semester": 2,
        "title": "Advanced Machine Learning",
        "code": "MCSE-201",
        "description": "Learning theory, kernel methods, probabilistic models, deep learning, generative models and reinforcement learning.",
        "generated": true,
        "references": [
            {
                "title": "Pattern Recognition and Machine Learning",
                "author": "Christopher Bishop"
            },
            {
                "title": "Deep Learning",
                "author": "Goodfellow, Bengio & Courville"
            },
            {
                "title": "Reinforcement Learning: An Introduction",
                "author": "Sutton & Barto"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse201/notes/mcse201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse201/notes/mcse201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse201/mock-papers/mcse201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse201/mock-papers/mcse201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse201/mock-papers/mcse201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse201-u1",
                "unitNumber": 1,
                "title": "Learning Theory",
                "topics": [
                    {
                        "id": "mcse201-u1t1",
                        "title": "PAC Learning"
                    },
                    {
                        "id": "mcse201-u1t2",
                        "title": "VC Dimension"
                    },
                    {
                        "id": "mcse201-u1t3",
                        "title": "Bias-Variance & Regularisation"
                    },
                    {
                        "id": "mcse201-u1t4",
                        "title": "Model Selection"
                    }
                ]
            },
            {
                "id": "mcse201-u2",
                "unitNumber": 2,
                "title": "Kernel & Ensemble Methods",
                "topics": [
                    {
                        "id": "mcse201-u2t1",
                        "title": "Support Vector Machines"
                    },
                    {
                        "id": "mcse201-u2t2",
                        "title": "Kernel Methods"
                    },
                    {
                        "id": "mcse201-u2t3",
                        "title": "Ensemble Learning"
                    },
                    {
                        "id": "mcse201-u2t4",
                        "title": "Dimensionality Reduction"
                    }
                ]
            },
            {
                "id": "mcse201-u3",
                "unitNumber": 3,
                "title": "Probabilistic Models",
                "topics": [
                    {
                        "id": "mcse201-u3t1",
                        "title": "Bayesian Learning"
                    },
                    {
                        "id": "mcse201-u3t2",
                        "title": "Graphical Models"
                    },
                    {
                        "id": "mcse201-u3t3",
                        "title": "Latent Variable Models"
                    },
                    {
                        "id": "mcse201-u3t4",
                        "title": "Gaussian Processes"
                    }
                ]
            },
            {
                "id": "mcse201-u4",
                "unitNumber": 4,
                "title": "Deep Learning",
                "topics": [
                    {
                        "id": "mcse201-u4t1",
                        "title": "Optimisation for Deep Networks"
                    },
                    {
                        "id": "mcse201-u4t2",
                        "title": "CNNs & Sequence Models"
                    },
                    {
                        "id": "mcse201-u4t3",
                        "title": "Transformers"
                    },
                    {
                        "id": "mcse201-u4t4",
                        "title": "Regularising Deep Networks"
                    }
                ]
            },
            {
                "id": "mcse201-u5",
                "unitNumber": 5,
                "title": "Generative Models & Reinforcement Learning",
                "topics": [
                    {
                        "id": "mcse201-u5t1",
                        "title": "Generative Models"
                    },
                    {
                        "id": "mcse201-u5t2",
                        "title": "Reinforcement Learning Basics"
                    },
                    {
                        "id": "mcse201-u5t3",
                        "title": "Deep Reinforcement Learning"
                    },
                    {
                        "id": "mcse201-u5t4",
                        "title": "Responsible ML"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse202",
        "semester": 2,
        "title": "Distributed Systems & Cloud Computing",
        "code": "MCSE-202",
        "description": "Distributed system models, time, consensus, replication, distributed storage, big data frameworks and cloud-native systems.",
        "generated": true,
        "references": [
            {
                "title": "Distributed Systems",
                "author": "van Steen & Tanenbaum"
            },
            {
                "title": "Designing Data-Intensive Applications",
                "author": "Martin Kleppmann"
            },
            {
                "title": "Cloud Computing: Concepts, Technology & Architecture",
                "author": "Thomas Erl"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse202/notes/mcse202-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse202/notes/mcse202-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse202/mock-papers/mcse202-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse202/mock-papers/mcse202-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse202/mock-papers/mcse202-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse202-u1",
                "unitNumber": 1,
                "title": "Distributed System Models",
                "topics": [
                    {
                        "id": "mcse202-u1t1",
                        "title": "Characteristics of Distributed Systems"
                    },
                    {
                        "id": "mcse202-u1t2",
                        "title": "System Models"
                    },
                    {
                        "id": "mcse202-u1t3",
                        "title": "Communication"
                    },
                    {
                        "id": "mcse202-u1t4",
                        "title": "CAP Theorem"
                    }
                ]
            },
            {
                "id": "mcse202-u2",
                "unitNumber": 2,
                "title": "Time & Coordination",
                "topics": [
                    {
                        "id": "mcse202-u2t1",
                        "title": "Logical Clocks"
                    },
                    {
                        "id": "mcse202-u2t2",
                        "title": "Clock Synchronisation"
                    },
                    {
                        "id": "mcse202-u2t3",
                        "title": "Mutual Exclusion & Election"
                    },
                    {
                        "id": "mcse202-u2t4",
                        "title": "Global State & Snapshots"
                    }
                ]
            },
            {
                "id": "mcse202-u3",
                "unitNumber": 3,
                "title": "Consensus & Replication",
                "topics": [
                    {
                        "id": "mcse202-u3t1",
                        "title": "Consensus Problem"
                    },
                    {
                        "id": "mcse202-u3t2",
                        "title": "Raft"
                    },
                    {
                        "id": "mcse202-u3t3",
                        "title": "Replication Strategies"
                    },
                    {
                        "id": "mcse202-u3t4",
                        "title": "Byzantine Fault Tolerance"
                    }
                ]
            },
            {
                "id": "mcse202-u4",
                "unitNumber": 4,
                "title": "Distributed Storage & Big Data",
                "topics": [
                    {
                        "id": "mcse202-u4t1",
                        "title": "Distributed File Systems"
                    },
                    {
                        "id": "mcse202-u4t2",
                        "title": "Distributed Databases"
                    },
                    {
                        "id": "mcse202-u4t3",
                        "title": "NoSQL Systems"
                    },
                    {
                        "id": "mcse202-u4t4",
                        "title": "Big Data Frameworks"
                    }
                ]
            },
            {
                "id": "mcse202-u5",
                "unitNumber": 5,
                "title": "Cloud-native Systems",
                "topics": [
                    {
                        "id": "mcse202-u5t1",
                        "title": "Virtualisation & Containers"
                    },
                    {
                        "id": "mcse202-u5t2",
                        "title": "Microservices"
                    },
                    {
                        "id": "mcse202-u5t3",
                        "title": "Serverless Computing"
                    },
                    {
                        "id": "mcse202-u5t4",
                        "title": "Reliability Engineering"
                    }
                ]
            }
        ]
    },
    {
        "id": "mcse203",
        "semester": 2,
        "title": "Advanced Information Security",
        "code": "MCSE-203",
        "description": "Cryptography, protocols, system and network security, web security, privacy and security of AI systems.",
        "generated": true,
        "references": [
            {
                "title": "Cryptography and Network Security",
                "author": "William Stallings"
            },
            {
                "title": "Security Engineering",
                "author": "Ross Anderson"
            },
            {
                "title": "Introduction to Modern Cryptography",
                "author": "Katz & Lindell"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mcse203/notes/mcse203-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mcse203/notes/mcse203-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mcse203/mock-papers/mcse203-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mcse203/mock-papers/mcse203-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mcse203/mock-papers/mcse203-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mcse203-u1",
                "unitNumber": 1,
                "title": "Cryptographic Foundations",
                "topics": [
                    {
                        "id": "mcse203-u1t1",
                        "title": "Symmetric Cryptography"
                    },
                    {
                        "id": "mcse203-u1t2",
                        "title": "Public-key Cryptography"
                    },
                    {
                        "id": "mcse203-u1t3",
                        "title": "Hash Functions & MACs"
                    },
                    {
                        "id": "mcse203-u1t4",
                        "title": "Digital Signatures & PKI"
                    }
                ]
            },
            {
                "id": "mcse203-u2",
                "unitNumber": 2,
                "title": "Security Protocols",
                "topics": [
                    {
                        "id": "mcse203-u2t1",
                        "title": "Authentication Protocols"
                    },
                    {
                        "id": "mcse203-u2t2",
                        "title": "TLS 1.3"
                    },
                    {
                        "id": "mcse203-u2t3",
                        "title": "Protocol Attacks"
                    },
                    {
                        "id": "mcse203-u2t4",
                        "title": "Formal Verification"
                    }
                ]
            },
            {
                "id": "mcse203-u3",
                "unitNumber": 3,
                "title": "System & Software Security",
                "topics": [
                    {
                        "id": "mcse203-u3t1",
                        "title": "Memory Safety Vulnerabilities"
                    },
                    {
                        "id": "mcse203-u3t2",
                        "title": "Exploit Mitigations"
                    },
                    {
                        "id": "mcse203-u3t3",
                        "title": "Access Control"
                    },
                    {
                        "id": "mcse203-u3t4",
                        "title": "Trusted Computing & Sandboxing"
                    }
                ]
            },
            {
                "id": "mcse203-u4",
                "unitNumber": 4,
                "title": "Network & Web Security",
                "topics": [
                    {
                        "id": "mcse203-u4t1",
                        "title": "Network Security"
                    },
                    {
                        "id": "mcse203-u4t2",
                        "title": "Web Application Security"
                    },
                    {
                        "id": "mcse203-u4t3",
                        "title": "Malware Analysis"
                    },
                    {
                        "id": "mcse203-u4t4",
                        "title": "Security Operations"
                    }
                ]
            },
            {
                "id": "mcse203-u5",
                "unitNumber": 5,
                "title": "Privacy & AI Security",
                "topics": [
                    {
                        "id": "mcse203-u5t1",
                        "title": "Privacy Technologies"
                    },
                    {
                        "id": "mcse203-u5t2",
                        "title": "Privacy Regulation"
                    },
                    {
                        "id": "mcse203-u5t3",
                        "title": "Adversarial Machine Learning"
                    },
                    {
                        "id": "mcse203-u5t4",
                        "title": "LLM & Agent Security"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl101",
        "semester": 1,
        "title": "Digital IC Design",
        "code": "MVL-101",
        "description": "MOS devices, CMOS inverter, combinational and sequential logic, interconnect, timing and arithmetic circuits.",
        "generated": true,
        "references": [
            {
                "title": "Digital Integrated Circuits",
                "author": "Rabaey, Chandrakasan & Nikolic"
            },
            {
                "title": "CMOS VLSI Design",
                "author": "Weste & Harris"
            },
            {
                "title": "CMOS Digital Integrated Circuits",
                "author": "Kang & Leblebici"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl101/notes/mvl101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl101/notes/mvl101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl101/mock-papers/mvl101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl101/mock-papers/mvl101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl101/mock-papers/mvl101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl101-u1",
                "unitNumber": 1,
                "title": "MOS Device Models",
                "topics": [
                    {
                        "id": "mvl101-u1t1",
                        "title": "MOSFET Operation"
                    },
                    {
                        "id": "mvl101-u1t2",
                        "title": "Short-channel Effects"
                    },
                    {
                        "id": "mvl101-u1t3",
                        "title": "FinFET & Advanced Devices"
                    },
                    {
                        "id": "mvl101-u1t4",
                        "title": "Device Capacitances"
                    }
                ]
            },
            {
                "id": "mvl101-u2",
                "unitNumber": 2,
                "title": "CMOS Inverter",
                "topics": [
                    {
                        "id": "mvl101-u2t1",
                        "title": "Static Characteristics"
                    },
                    {
                        "id": "mvl101-u2t2",
                        "title": "Dynamic Behaviour"
                    },
                    {
                        "id": "mvl101-u2t3",
                        "title": "Power Consumption"
                    },
                    {
                        "id": "mvl101-u2t4",
                        "title": "Inverter Chains & Sizing"
                    }
                ]
            },
            {
                "id": "mvl101-u3",
                "unitNumber": 3,
                "title": "Combinational Logic",
                "topics": [
                    {
                        "id": "mvl101-u3t1",
                        "title": "Static CMOS Gates"
                    },
                    {
                        "id": "mvl101-u3t2",
                        "title": "Logical Effort"
                    },
                    {
                        "id": "mvl101-u3t3",
                        "title": "Ratioed & Pass-transistor Logic"
                    },
                    {
                        "id": "mvl101-u3t4",
                        "title": "Dynamic Logic"
                    }
                ]
            },
            {
                "id": "mvl101-u4",
                "unitNumber": 4,
                "title": "Sequential Circuits & Timing",
                "topics": [
                    {
                        "id": "mvl101-u4t1",
                        "title": "Latches & Flip-flops"
                    },
                    {
                        "id": "mvl101-u4t2",
                        "title": "Timing Constraints"
                    },
                    {
                        "id": "mvl101-u4t3",
                        "title": "Clock Distribution"
                    },
                    {
                        "id": "mvl101-u4t4",
                        "title": "Metastability & Synchronisers"
                    }
                ]
            },
            {
                "id": "mvl101-u5",
                "unitNumber": 5,
                "title": "Interconnect & Arithmetic",
                "topics": [
                    {
                        "id": "mvl101-u5t1",
                        "title": "Interconnect Modelling"
                    },
                    {
                        "id": "mvl101-u5t2",
                        "title": "Crosstalk & Signal Integrity"
                    },
                    {
                        "id": "mvl101-u5t3",
                        "title": "Adders"
                    },
                    {
                        "id": "mvl101-u5t4",
                        "title": "Multipliers"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl102",
        "semester": 1,
        "title": "Analog IC Design",
        "code": "MVL-102",
        "description": "Single-stage and differential amplifiers, current mirrors, op-amps, frequency response, noise, comparators and data converters.",
        "generated": true,
        "references": [
            {
                "title": "Design of Analog CMOS Integrated Circuits",
                "author": "Behzad Razavi"
            },
            {
                "title": "CMOS Analog Circuit Design",
                "author": "Allen & Holberg"
            },
            {
                "title": "Analysis and Design of Analog Integrated Circuits",
                "author": "Gray, Hurst, Lewis & Meyer"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl102/notes/mvl102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl102/notes/mvl102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl102/mock-papers/mvl102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl102/mock-papers/mvl102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl102/mock-papers/mvl102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl102-u1",
                "unitNumber": 1,
                "title": "Single-stage Amplifiers",
                "topics": [
                    {
                        "id": "mvl102-u1t1",
                        "title": "Small-signal Models"
                    },
                    {
                        "id": "mvl102-u1t2",
                        "title": "Common-source Amplifier"
                    },
                    {
                        "id": "mvl102-u1t3",
                        "title": "Common-gate & Source Follower"
                    },
                    {
                        "id": "mvl102-u1t4",
                        "title": "Biasing"
                    }
                ]
            },
            {
                "id": "mvl102-u2",
                "unitNumber": 2,
                "title": "Current Mirrors & Differential Pairs",
                "topics": [
                    {
                        "id": "mvl102-u2t1",
                        "title": "Current Mirrors"
                    },
                    {
                        "id": "mvl102-u2t2",
                        "title": "Differential Pair"
                    },
                    {
                        "id": "mvl102-u2t3",
                        "title": "Active Load"
                    },
                    {
                        "id": "mvl102-u2t4",
                        "title": "Mismatch"
                    }
                ]
            },
            {
                "id": "mvl102-u3",
                "unitNumber": 3,
                "title": "Operational Amplifiers",
                "topics": [
                    {
                        "id": "mvl102-u3t1",
                        "title": "Two-stage Op-amp"
                    },
                    {
                        "id": "mvl102-u3t2",
                        "title": "Folded Cascode Op-amp"
                    },
                    {
                        "id": "mvl102-u3t3",
                        "title": "Stability & Compensation"
                    },
                    {
                        "id": "mvl102-u3t4",
                        "title": "Common-mode Feedback"
                    }
                ]
            },
            {
                "id": "mvl102-u4",
                "unitNumber": 4,
                "title": "Noise & Frequency Response",
                "topics": [
                    {
                        "id": "mvl102-u4t1",
                        "title": "Frequency Response"
                    },
                    {
                        "id": "mvl102-u4t2",
                        "title": "Noise Sources"
                    },
                    {
                        "id": "mvl102-u4t3",
                        "title": "Noise Optimisation"
                    },
                    {
                        "id": "mvl102-u4t4",
                        "title": "Switched-capacitor Circuits"
                    }
                ]
            },
            {
                "id": "mvl102-u5",
                "unitNumber": 5,
                "title": "Comparators & Data Converters",
                "topics": [
                    {
                        "id": "mvl102-u5t1",
                        "title": "Comparators"
                    },
                    {
                        "id": "mvl102-u5t2",
                        "title": "DAC Architectures"
                    },
                    {
                        "id": "mvl102-u5t3",
                        "title": "ADC Architectures"
                    },
                    {
                        "id": "mvl102-u5t4",
                        "title": "Sigma-Delta Converters"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl103",
        "semester": 1,
        "title": "VLSI Technology & Fabrication",
        "code": "MVL-103",
        "description": "Crystal growth, oxidation, lithography, etching, diffusion, implantation, deposition, metallisation and CMOS process integration.",
        "generated": true,
        "references": [
            {
                "title": "VLSI Technology",
                "author": "S. M. Sze"
            },
            {
                "title": "Silicon VLSI Technology",
                "author": "Plummer, Deal & Griffin"
            },
            {
                "title": "Fundamentals of Microfabrication",
                "author": "Marc Madou"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl103/notes/mvl103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl103/notes/mvl103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl103/mock-papers/mvl103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl103/mock-papers/mvl103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl103/mock-papers/mvl103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl103-u1",
                "unitNumber": 1,
                "title": "Wafer Preparation",
                "topics": [
                    {
                        "id": "mvl103-u1t1",
                        "title": "Crystal Growth"
                    },
                    {
                        "id": "mvl103-u1t2",
                        "title": "Wafer Processing"
                    },
                    {
                        "id": "mvl103-u1t3",
                        "title": "Cleanroom Technology"
                    },
                    {
                        "id": "mvl103-u1t4",
                        "title": "Defects"
                    }
                ]
            },
            {
                "id": "mvl103-u2",
                "unitNumber": 2,
                "title": "Oxidation & Lithography",
                "topics": [
                    {
                        "id": "mvl103-u2t1",
                        "title": "Thermal Oxidation"
                    },
                    {
                        "id": "mvl103-u2t2",
                        "title": "Photolithography"
                    },
                    {
                        "id": "mvl103-u2t3",
                        "title": "Advanced Lithography"
                    },
                    {
                        "id": "mvl103-u2t4",
                        "title": "High-k Dielectrics"
                    }
                ]
            },
            {
                "id": "mvl103-u3",
                "unitNumber": 3,
                "title": "Etching & Doping",
                "topics": [
                    {
                        "id": "mvl103-u3t1",
                        "title": "Wet & Dry Etching"
                    },
                    {
                        "id": "mvl103-u3t2",
                        "title": "Diffusion"
                    },
                    {
                        "id": "mvl103-u3t3",
                        "title": "Ion Implantation"
                    },
                    {
                        "id": "mvl103-u3t4",
                        "title": "Rapid Thermal Processing"
                    }
                ]
            },
            {
                "id": "mvl103-u4",
                "unitNumber": 4,
                "title": "Deposition & Metallisation",
                "topics": [
                    {
                        "id": "mvl103-u4t1",
                        "title": "CVD"
                    },
                    {
                        "id": "mvl103-u4t2",
                        "title": "PVD"
                    },
                    {
                        "id": "mvl103-u4t3",
                        "title": "Metallisation"
                    },
                    {
                        "id": "mvl103-u4t4",
                        "title": "Low-k Dielectrics"
                    }
                ]
            },
            {
                "id": "mvl103-u5",
                "unitNumber": 5,
                "title": "Process Integration & Packaging",
                "topics": [
                    {
                        "id": "mvl103-u5t1",
                        "title": "CMOS Process Flow"
                    },
                    {
                        "id": "mvl103-u5t2",
                        "title": "Process Monitoring"
                    },
                    {
                        "id": "mvl103-u5t3",
                        "title": "Packaging"
                    },
                    {
                        "id": "mvl103-u5t4",
                        "title": "Yield & Reliability"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl104",
        "semester": 1,
        "title": "Advanced Digital System Design & Verification",
        "code": "MVL-104",
        "description": "RTL design with Verilog/SystemVerilog, FSMs, datapaths, synthesis, static timing analysis and functional verification.",
        "generated": true,
        "references": [
            {
                "title": "Verilog HDL",
                "author": "Samir Palnitkar"
            },
            {
                "title": "SystemVerilog for Verification",
                "author": "Chris Spear"
            },
            {
                "title": "Static Timing Analysis for Nanometer Designs",
                "author": "Bhasker & Chadha"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl104/notes/mvl104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl104/notes/mvl104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl104/mock-papers/mvl104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl104/mock-papers/mvl104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl104/mock-papers/mvl104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl104-u1",
                "unitNumber": 1,
                "title": "HDL-based Design",
                "topics": [
                    {
                        "id": "mvl104-u1t1",
                        "title": "Verilog Constructs"
                    },
                    {
                        "id": "mvl104-u1t2",
                        "title": "Blocking vs Non-blocking"
                    },
                    {
                        "id": "mvl104-u1t3",
                        "title": "SystemVerilog for Design"
                    },
                    {
                        "id": "mvl104-u1t4",
                        "title": "Parameterised Design"
                    }
                ]
            },
            {
                "id": "mvl104-u2",
                "unitNumber": 2,
                "title": "FSMs & Datapaths",
                "topics": [
                    {
                        "id": "mvl104-u2t1",
                        "title": "FSM Design"
                    },
                    {
                        "id": "mvl104-u2t2",
                        "title": "Datapath & Controller"
                    },
                    {
                        "id": "mvl104-u2t3",
                        "title": "Pipelining in RTL"
                    },
                    {
                        "id": "mvl104-u2t4",
                        "title": "Memories & FIFOs"
                    }
                ]
            },
            {
                "id": "mvl104-u3",
                "unitNumber": 3,
                "title": "Synthesis & Timing",
                "topics": [
                    {
                        "id": "mvl104-u3t1",
                        "title": "Logic Synthesis"
                    },
                    {
                        "id": "mvl104-u3t2",
                        "title": "Static Timing Analysis"
                    },
                    {
                        "id": "mvl104-u3t3",
                        "title": "Timing Closure"
                    },
                    {
                        "id": "mvl104-u3t4",
                        "title": "Clock Domain Crossing"
                    }
                ]
            },
            {
                "id": "mvl104-u4",
                "unitNumber": 4,
                "title": "Functional Verification",
                "topics": [
                    {
                        "id": "mvl104-u4t1",
                        "title": "Verification Planning"
                    },
                    {
                        "id": "mvl104-u4t2",
                        "title": "Constrained Random Verification"
                    },
                    {
                        "id": "mvl104-u4t3",
                        "title": "UVM"
                    },
                    {
                        "id": "mvl104-u4t4",
                        "title": "Assertions"
                    }
                ]
            },
            {
                "id": "mvl104-u5",
                "unitNumber": 5,
                "title": "FPGA & Formal Methods",
                "topics": [
                    {
                        "id": "mvl104-u5t1",
                        "title": "FPGA Architecture"
                    },
                    {
                        "id": "mvl104-u5t2",
                        "title": "FPGA Design Flow"
                    },
                    {
                        "id": "mvl104-u5t3",
                        "title": "Formal Verification"
                    },
                    {
                        "id": "mvl104-u5t4",
                        "title": "Emulation & Prototyping"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl201",
        "semester": 2,
        "title": "Low Power VLSI Design",
        "code": "MVL-201",
        "description": "Sources of power, device and circuit techniques, architecture-level methods, power management and low-power memories.",
        "generated": true,
        "references": [
            {
                "title": "Low-Power CMOS VLSI Circuit Design",
                "author": "Kaushik Roy & Sharat Prasad"
            },
            {
                "title": "Low Power Methodology Manual",
                "author": "Keating et al."
            },
            {
                "title": "Practical Low Power Digital VLSI Design",
                "author": "Gary Yeap"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl201/notes/mvl201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl201/notes/mvl201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl201/mock-papers/mvl201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl201/mock-papers/mvl201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl201/mock-papers/mvl201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl201-u1",
                "unitNumber": 1,
                "title": "Power Fundamentals",
                "topics": [
                    {
                        "id": "mvl201-u1t1",
                        "title": "Sources of Power Dissipation"
                    },
                    {
                        "id": "mvl201-u1t2",
                        "title": "Need for Low Power"
                    },
                    {
                        "id": "mvl201-u1t3",
                        "title": "Leakage Mechanisms"
                    },
                    {
                        "id": "mvl201-u1t4",
                        "title": "Power Estimation"
                    }
                ]
            },
            {
                "id": "mvl201-u2",
                "unitNumber": 2,
                "title": "Circuit-level Techniques",
                "topics": [
                    {
                        "id": "mvl201-u2t1",
                        "title": "Voltage Scaling"
                    },
                    {
                        "id": "mvl201-u2t2",
                        "title": "Multi-threshold CMOS"
                    },
                    {
                        "id": "mvl201-u2t3",
                        "title": "Body Biasing"
                    },
                    {
                        "id": "mvl201-u2t4",
                        "title": "Low-power Logic Styles"
                    }
                ]
            },
            {
                "id": "mvl201-u3",
                "unitNumber": 3,
                "title": "Architecture & System Techniques",
                "topics": [
                    {
                        "id": "mvl201-u3t1",
                        "title": "Clock Gating"
                    },
                    {
                        "id": "mvl201-u3t2",
                        "title": "Power Gating"
                    },
                    {
                        "id": "mvl201-u3t3",
                        "title": "Multi-voltage Design"
                    },
                    {
                        "id": "mvl201-u3t4",
                        "title": "DVFS"
                    }
                ]
            },
            {
                "id": "mvl201-u4",
                "unitNumber": 4,
                "title": "Low-power Memory & Arithmetic",
                "topics": [
                    {
                        "id": "mvl201-u4t1",
                        "title": "SRAM Power"
                    },
                    {
                        "id": "mvl201-u4t2",
                        "title": "Low-power Caches"
                    },
                    {
                        "id": "mvl201-u4t3",
                        "title": "Low-power Arithmetic"
                    },
                    {
                        "id": "mvl201-u4t4",
                        "title": "Bus Encoding"
                    }
                ]
            },
            {
                "id": "mvl201-u5",
                "unitNumber": 5,
                "title": "Power Analysis & Management",
                "topics": [
                    {
                        "id": "mvl201-u5t1",
                        "title": "Power-aware Design Flow"
                    },
                    {
                        "id": "mvl201-u5t2",
                        "title": "IR Drop & Electromigration"
                    },
                    {
                        "id": "mvl201-u5t3",
                        "title": "Thermal Management"
                    },
                    {
                        "id": "mvl201-u5t4",
                        "title": "Energy Harvesting & IoT Chips"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl202",
        "semester": 2,
        "title": "VLSI Testing & Testability",
        "code": "MVL-202",
        "description": "Fault models, test generation, fault simulation, design for testability, BIST and memory testing.",
        "generated": true,
        "references": [
            {
                "title": "Essentials of Electronic Testing",
                "author": "Bushnell & Agrawal"
            },
            {
                "title": "VLSI Test Principles and Architectures",
                "author": "Wang, Wu & Wen"
            },
            {
                "title": "Digital Systems Testing and Testable Design",
                "author": "Abramovici, Breuer & Friedman"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl202/notes/mvl202-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl202/notes/mvl202-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl202/mock-papers/mvl202-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl202/mock-papers/mvl202-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl202/mock-papers/mvl202-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl202-u1",
                "unitNumber": 1,
                "title": "Testing Fundamentals",
                "topics": [
                    {
                        "id": "mvl202-u1t1",
                        "title": "Need for Testing"
                    },
                    {
                        "id": "mvl202-u1t2",
                        "title": "Defects & Fault Models"
                    },
                    {
                        "id": "mvl202-u1t3",
                        "title": "Fault Equivalence & Collapsing"
                    },
                    {
                        "id": "mvl202-u1t4",
                        "title": "Yield & Quality"
                    }
                ]
            },
            {
                "id": "mvl202-u2",
                "unitNumber": 2,
                "title": "Test Generation",
                "topics": [
                    {
                        "id": "mvl202-u2t1",
                        "title": "Combinational ATPG"
                    },
                    {
                        "id": "mvl202-u2t2",
                        "title": "Fault Activation & Propagation"
                    },
                    {
                        "id": "mvl202-u2t3",
                        "title": "Sequential ATPG"
                    },
                    {
                        "id": "mvl202-u2t4",
                        "title": "Delay Testing"
                    }
                ]
            },
            {
                "id": "mvl202-u3",
                "unitNumber": 3,
                "title": "Fault Simulation",
                "topics": [
                    {
                        "id": "mvl202-u3t1",
                        "title": "Fault Simulation Purpose"
                    },
                    {
                        "id": "mvl202-u3t2",
                        "title": "Parallel & Deductive Simulation"
                    },
                    {
                        "id": "mvl202-u3t3",
                        "title": "Test Compaction"
                    },
                    {
                        "id": "mvl202-u3t4",
                        "title": "Diagnosis"
                    }
                ]
            },
            {
                "id": "mvl202-u4",
                "unitNumber": 4,
                "title": "Design for Testability",
                "topics": [
                    {
                        "id": "mvl202-u4t1",
                        "title": "Testability Measures"
                    },
                    {
                        "id": "mvl202-u4t2",
                        "title": "Scan Design"
                    },
                    {
                        "id": "mvl202-u4t3",
                        "title": "Boundary Scan"
                    },
                    {
                        "id": "mvl202-u4t4",
                        "title": "Test Compression"
                    }
                ]
            },
            {
                "id": "mvl202-u5",
                "unitNumber": 5,
                "title": "BIST & Memory Testing",
                "topics": [
                    {
                        "id": "mvl202-u5t1",
                        "title": "Built-in Self-Test"
                    },
                    {
                        "id": "mvl202-u5t2",
                        "title": "Logic BIST"
                    },
                    {
                        "id": "mvl202-u5t3",
                        "title": "Memory Fault Models"
                    },
                    {
                        "id": "mvl202-u5t4",
                        "title": "Memory BIST & Repair"
                    }
                ]
            }
        ]
    },
    {
        "id": "mvl203",
        "semester": 2,
        "title": "System-on-Chip & Embedded System Design",
        "code": "MVL-203",
        "description": "SoC architecture, processor cores, on-chip buses, hardware-software co-design, IP integration and embedded software.",
        "generated": true,
        "references": [
            {
                "title": "On-Chip Communication Architectures",
                "author": "Pasricha & Dutt"
            },
            {
                "title": "Embedded System Design",
                "author": "Frank Vahid & Tony Givargis"
            },
            {
                "title": "ARM System-on-Chip Architecture",
                "author": "Steve Furber"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mvl203/notes/mvl203-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mvl203/notes/mvl203-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mvl203/mock-papers/mvl203-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mvl203/mock-papers/mvl203-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mvl203/mock-papers/mvl203-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mvl203-u1",
                "unitNumber": 1,
                "title": "SoC Fundamentals",
                "topics": [
                    {
                        "id": "mvl203-u1t1",
                        "title": "SoC Concept"
                    },
                    {
                        "id": "mvl203-u1t2",
                        "title": "SoC Design Flow"
                    },
                    {
                        "id": "mvl203-u1t3",
                        "title": "Processor Cores"
                    },
                    {
                        "id": "mvl203-u1t4",
                        "title": "Accelerators"
                    }
                ]
            },
            {
                "id": "mvl203-u2",
                "unitNumber": 2,
                "title": "On-chip Communication",
                "topics": [
                    {
                        "id": "mvl203-u2t1",
                        "title": "On-chip Buses"
                    },
                    {
                        "id": "mvl203-u2t2",
                        "title": "Network on Chip"
                    },
                    {
                        "id": "mvl203-u2t3",
                        "title": "Memory Subsystem"
                    },
                    {
                        "id": "mvl203-u2t4",
                        "title": "Interrupts & Peripherals"
                    }
                ]
            },
            {
                "id": "mvl203-u3",
                "unitNumber": 3,
                "title": "Hardware-Software Co-design",
                "topics": [
                    {
                        "id": "mvl203-u3t1",
                        "title": "Partitioning"
                    },
                    {
                        "id": "mvl203-u3t2",
                        "title": "High-level Synthesis"
                    },
                    {
                        "id": "mvl203-u3t3",
                        "title": "Virtual Prototyping"
                    },
                    {
                        "id": "mvl203-u3t4",
                        "title": "Design Space Exploration"
                    }
                ]
            },
            {
                "id": "mvl203-u4",
                "unitNumber": 4,
                "title": "Embedded Software",
                "topics": [
                    {
                        "id": "mvl203-u4t1",
                        "title": "Embedded Programming"
                    },
                    {
                        "id": "mvl203-u4t2",
                        "title": "RTOS"
                    },
                    {
                        "id": "mvl203-u4t3",
                        "title": "Embedded Linux"
                    },
                    {
                        "id": "mvl203-u4t4",
                        "title": "Firmware Updates & Security"
                    }
                ]
            },
            {
                "id": "mvl203-u5",
                "unitNumber": 5,
                "title": "Verification & Applications",
                "topics": [
                    {
                        "id": "mvl203-u5t1",
                        "title": "SoC Verification"
                    },
                    {
                        "id": "mvl203-u5t2",
                        "title": "Low-power SoC"
                    },
                    {
                        "id": "mvl203-u5t3",
                        "title": "Automotive & IoT SoCs"
                    },
                    {
                        "id": "mvl203-u5t4",
                        "title": "Chiplets & Advanced Packaging"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth101",
        "semester": 1,
        "title": "Advanced Thermodynamics",
        "code": "MTH-101",
        "description": "Exergy analysis, thermodynamic relations, real gases, mixtures, chemical equilibrium and irreversible thermodynamics.",
        "generated": true,
        "references": [
            {
                "title": "Advanced Engineering Thermodynamics",
                "author": "Adrian Bejan"
            },
            {
                "title": "Engineering Thermodynamics",
                "author": "P. K. Nag"
            },
            {
                "title": "Thermodynamics: An Engineering Approach",
                "author": "Cengel & Boles"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth101/notes/mth101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth101/notes/mth101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth101/mock-papers/mth101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth101/mock-papers/mth101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth101/mock-papers/mth101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth101-u1",
                "unitNumber": 1,
                "title": "Exergy Analysis",
                "topics": [
                    {
                        "id": "mth101-u1t1",
                        "title": "Exergy Concept"
                    },
                    {
                        "id": "mth101-u1t2",
                        "title": "Exergy Balance"
                    },
                    {
                        "id": "mth101-u1t3",
                        "title": "Exergy of Power Cycles"
                    },
                    {
                        "id": "mth101-u1t4",
                        "title": "Entropy Generation Minimisation"
                    }
                ]
            },
            {
                "id": "mth101-u2",
                "unitNumber": 2,
                "title": "Thermodynamic Relations",
                "topics": [
                    {
                        "id": "mth101-u2t1",
                        "title": "Maxwell Relations"
                    },
                    {
                        "id": "mth101-u2t2",
                        "title": "General Property Relations"
                    },
                    {
                        "id": "mth101-u2t3",
                        "title": "Real Gases"
                    },
                    {
                        "id": "mth101-u2t4",
                        "title": "Generalised Charts"
                    }
                ]
            },
            {
                "id": "mth101-u3",
                "unitNumber": 3,
                "title": "Mixtures & Psychrometry",
                "topics": [
                    {
                        "id": "mth101-u3t1",
                        "title": "Ideal Gas Mixtures"
                    },
                    {
                        "id": "mth101-u3t2",
                        "title": "Real Mixtures"
                    },
                    {
                        "id": "mth101-u3t3",
                        "title": "Psychrometry Advanced"
                    },
                    {
                        "id": "mth101-u3t4",
                        "title": "Phase Equilibrium"
                    }
                ]
            },
            {
                "id": "mth101-u4",
                "unitNumber": 4,
                "title": "Combustion & Chemical Equilibrium",
                "topics": [
                    {
                        "id": "mth101-u4t1",
                        "title": "Combustion Thermodynamics"
                    },
                    {
                        "id": "mth101-u4t2",
                        "title": "Chemical Equilibrium"
                    },
                    {
                        "id": "mth101-u4t3",
                        "title": "Second-law Analysis of Combustion"
                    },
                    {
                        "id": "mth101-u4t4",
                        "title": "Fuel Cells Thermodynamics"
                    }
                ]
            },
            {
                "id": "mth101-u5",
                "unitNumber": 5,
                "title": "Irreversible & Statistical Thermodynamics",
                "topics": [
                    {
                        "id": "mth101-u5t1",
                        "title": "Irreversible Thermodynamics"
                    },
                    {
                        "id": "mth101-u5t2",
                        "title": "Statistical Thermodynamics Basics"
                    },
                    {
                        "id": "mth101-u5t3",
                        "title": "Kinetic Theory"
                    },
                    {
                        "id": "mth101-u5t4",
                        "title": "Advanced Cycles"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth102",
        "semester": 1,
        "title": "Advanced Fluid Mechanics",
        "code": "MTH-102",
        "description": "Kinematics, Navier-Stokes equations, exact solutions, boundary layers, turbulence and compressible flow.",
        "generated": true,
        "references": [
            {
                "title": "Viscous Fluid Flow",
                "author": "Frank M. White"
            },
            {
                "title": "Boundary Layer Theory",
                "author": "Schlichting & Gersten"
            },
            {
                "title": "Turbulent Flows",
                "author": "Stephen B. Pope"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth102/notes/mth102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth102/notes/mth102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth102/mock-papers/mth102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth102/mock-papers/mth102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth102/mock-papers/mth102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth102-u1",
                "unitNumber": 1,
                "title": "Fluid Kinematics & Conservation Laws",
                "topics": [
                    {
                        "id": "mth102-u1t1",
                        "title": "Description of Flow"
                    },
                    {
                        "id": "mth102-u1t2",
                        "title": "Strain Rate & Vorticity"
                    },
                    {
                        "id": "mth102-u1t3",
                        "title": "Reynolds Transport Theorem"
                    },
                    {
                        "id": "mth102-u1t4",
                        "title": "Energy Equation"
                    }
                ]
            },
            {
                "id": "mth102-u2",
                "unitNumber": 2,
                "title": "Navier-Stokes Equations & Exact Solutions",
                "topics": [
                    {
                        "id": "mth102-u2t1",
                        "title": "Navier-Stokes Equations"
                    },
                    {
                        "id": "mth102-u2t2",
                        "title": "Couette & Poiseuille Flow"
                    },
                    {
                        "id": "mth102-u2t3",
                        "title": "Unsteady Exact Solutions"
                    },
                    {
                        "id": "mth102-u2t4",
                        "title": "Creeping Flow"
                    }
                ]
            },
            {
                "id": "mth102-u3",
                "unitNumber": 3,
                "title": "Boundary Layer Theory",
                "topics": [
                    {
                        "id": "mth102-u3t1",
                        "title": "Boundary Layer Equations"
                    },
                    {
                        "id": "mth102-u3t2",
                        "title": "Integral Methods"
                    },
                    {
                        "id": "mth102-u3t3",
                        "title": "Separation"
                    },
                    {
                        "id": "mth102-u3t4",
                        "title": "Thermal Boundary Layer"
                    }
                ]
            },
            {
                "id": "mth102-u4",
                "unitNumber": 4,
                "title": "Turbulence",
                "topics": [
                    {
                        "id": "mth102-u4t1",
                        "title": "Nature of Turbulence"
                    },
                    {
                        "id": "mth102-u4t2",
                        "title": "Reynolds Averaging"
                    },
                    {
                        "id": "mth102-u4t3",
                        "title": "Turbulence Models"
                    },
                    {
                        "id": "mth102-u4t4",
                        "title": "Wall Turbulence"
                    }
                ]
            },
            {
                "id": "mth102-u5",
                "unitNumber": 5,
                "title": "Compressible & Potential Flow",
                "topics": [
                    {
                        "id": "mth102-u5t1",
                        "title": "Potential Flow"
                    },
                    {
                        "id": "mth102-u5t2",
                        "title": "Elementary Potential Flows"
                    },
                    {
                        "id": "mth102-u5t3",
                        "title": "Compressible Flow"
                    },
                    {
                        "id": "mth102-u5t4",
                        "title": "Oblique Shocks & Expansion"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth103",
        "semester": 1,
        "title": "Advanced Heat & Mass Transfer",
        "code": "MTH-103",
        "description": "Multidimensional and transient conduction, convection analysis, boiling and condensation, radiation exchange and mass transfer.",
        "generated": true,
        "references": [
            {
                "title": "Fundamentals of Heat and Mass Transfer",
                "author": "Incropera & DeWitt"
            },
            {
                "title": "Heat Transfer",
                "author": "Adrian Bejan"
            },
            {
                "title": "Radiative Heat Transfer",
                "author": "Michael F. Modest"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth103/notes/mth103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth103/notes/mth103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth103/mock-papers/mth103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth103/mock-papers/mth103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth103/mock-papers/mth103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth103-u1",
                "unitNumber": 1,
                "title": "Advanced Conduction",
                "topics": [
                    {
                        "id": "mth103-u1t1",
                        "title": "Multidimensional Steady Conduction"
                    },
                    {
                        "id": "mth103-u1t2",
                        "title": "Transient Conduction"
                    },
                    {
                        "id": "mth103-u1t3",
                        "title": "Numerical Conduction"
                    },
                    {
                        "id": "mth103-u1t4",
                        "title": "Extended Surfaces Advanced"
                    }
                ]
            },
            {
                "id": "mth103-u2",
                "unitNumber": 2,
                "title": "Convection",
                "topics": [
                    {
                        "id": "mth103-u2t1",
                        "title": "Convection Equations"
                    },
                    {
                        "id": "mth103-u2t2",
                        "title": "Internal Forced Convection"
                    },
                    {
                        "id": "mth103-u2t3",
                        "title": "Natural Convection"
                    },
                    {
                        "id": "mth103-u2t4",
                        "title": "Convection Enhancement"
                    }
                ]
            },
            {
                "id": "mth103-u3",
                "unitNumber": 3,
                "title": "Boiling & Condensation",
                "topics": [
                    {
                        "id": "mth103-u3t1",
                        "title": "Pool Boiling"
                    },
                    {
                        "id": "mth103-u3t2",
                        "title": "Flow Boiling"
                    },
                    {
                        "id": "mth103-u3t3",
                        "title": "Film Condensation"
                    },
                    {
                        "id": "mth103-u3t4",
                        "title": "Heat Pipes"
                    }
                ]
            },
            {
                "id": "mth103-u4",
                "unitNumber": 4,
                "title": "Radiation",
                "topics": [
                    {
                        "id": "mth103-u4t1",
                        "title": "Radiation Properties"
                    },
                    {
                        "id": "mth103-u4t2",
                        "title": "Radiation Exchange"
                    },
                    {
                        "id": "mth103-u4t3",
                        "title": "Gas Radiation"
                    },
                    {
                        "id": "mth103-u4t4",
                        "title": "Solar Radiation"
                    }
                ]
            },
            {
                "id": "mth103-u5",
                "unitNumber": 5,
                "title": "Mass Transfer & Heat Exchangers",
                "topics": [
                    {
                        "id": "mth103-u5t1",
                        "title": "Diffusion Mass Transfer"
                    },
                    {
                        "id": "mth103-u5t2",
                        "title": "Convective Mass Transfer"
                    },
                    {
                        "id": "mth103-u5t3",
                        "title": "Heat Exchanger Design"
                    },
                    {
                        "id": "mth103-u5t4",
                        "title": "Compact Heat Exchangers"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth104",
        "semester": 1,
        "title": "Computational Fluid Dynamics",
        "code": "MTH-104",
        "description": "Governing equations, discretisation, finite difference and finite volume methods, pressure-velocity coupling, turbulence modelling and CFD practice.",
        "generated": true,
        "references": [
            {
                "title": "Computational Fluid Dynamics",
                "author": "John D. Anderson"
            },
            {
                "title": "An Introduction to Computational Fluid Dynamics: The Finite Volume Method",
                "author": "Versteeg & Malalasekera"
            },
            {
                "title": "Numerical Heat Transfer and Fluid Flow",
                "author": "Suhas V. Patankar"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth104/notes/mth104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth104/notes/mth104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth104/mock-papers/mth104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth104/mock-papers/mth104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth104/mock-papers/mth104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth104-u1",
                "unitNumber": 1,
                "title": "Governing Equations",
                "topics": [
                    {
                        "id": "mth104-u1t1",
                        "title": "Conservation Equations"
                    },
                    {
                        "id": "mth104-u1t2",
                        "title": "Classification of PDEs"
                    },
                    {
                        "id": "mth104-u1t3",
                        "title": "Boundary Conditions"
                    },
                    {
                        "id": "mth104-u1t4",
                        "title": "Non-dimensionalisation"
                    }
                ]
            },
            {
                "id": "mth104-u2",
                "unitNumber": 2,
                "title": "Finite Difference Method",
                "topics": [
                    {
                        "id": "mth104-u2t1",
                        "title": "Discretisation"
                    },
                    {
                        "id": "mth104-u2t2",
                        "title": "Consistency, Stability, Convergence"
                    },
                    {
                        "id": "mth104-u2t3",
                        "title": "Explicit & Implicit Schemes"
                    },
                    {
                        "id": "mth104-u2t4",
                        "title": "Solving Linear Systems"
                    }
                ]
            },
            {
                "id": "mth104-u3",
                "unitNumber": 3,
                "title": "Finite Volume Method",
                "topics": [
                    {
                        "id": "mth104-u3t1",
                        "title": "FVM Fundamentals"
                    },
                    {
                        "id": "mth104-u3t2",
                        "title": "Convection Schemes"
                    },
                    {
                        "id": "mth104-u3t3",
                        "title": "Unstructured Meshes"
                    },
                    {
                        "id": "mth104-u3t4",
                        "title": "Unsteady FVM"
                    }
                ]
            },
            {
                "id": "mth104-u4",
                "unitNumber": 4,
                "title": "Pressure-Velocity Coupling",
                "topics": [
                    {
                        "id": "mth104-u4t1",
                        "title": "Incompressible Flow Challenge"
                    },
                    {
                        "id": "mth104-u4t2",
                        "title": "SIMPLE Algorithm"
                    },
                    {
                        "id": "mth104-u4t3",
                        "title": "SIMPLER, SIMPLEC & PISO"
                    },
                    {
                        "id": "mth104-u4t4",
                        "title": "Compressible Solvers"
                    }
                ]
            },
            {
                "id": "mth104-u5",
                "unitNumber": 5,
                "title": "Turbulence & CFD Practice",
                "topics": [
                    {
                        "id": "mth104-u5t1",
                        "title": "RANS Models in CFD"
                    },
                    {
                        "id": "mth104-u5t2",
                        "title": "LES & DNS"
                    },
                    {
                        "id": "mth104-u5t3",
                        "title": "Verification & Validation"
                    },
                    {
                        "id": "mth104-u5t4",
                        "title": "CFD Tools & Workflow"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth201",
        "semester": 2,
        "title": "Design of Thermal Systems",
        "code": "MTH-201",
        "description": "Modelling, simulation and optimisation of thermal systems, economics, and design of heat exchangers, piping and energy systems.",
        "generated": true,
        "references": [
            {
                "title": "Design of Thermal Systems",
                "author": "W. F. Stoecker"
            },
            {
                "title": "Design and Optimization of Thermal Systems",
                "author": "Yogesh Jaluria"
            },
            {
                "title": "Thermal Design and Optimization",
                "author": "Bejan, Tsatsaronis & Moran"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth201/notes/mth201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth201/notes/mth201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth201/mock-papers/mth201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth201/mock-papers/mth201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth201/mock-papers/mth201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth201-u1",
                "unitNumber": 1,
                "title": "Design Fundamentals",
                "topics": [
                    {
                        "id": "mth201-u1t1",
                        "title": "Engineering Design Process"
                    },
                    {
                        "id": "mth201-u1t2",
                        "title": "Problem Formulation"
                    },
                    {
                        "id": "mth201-u1t3",
                        "title": "Modelling of Thermal Systems"
                    },
                    {
                        "id": "mth201-u1t4",
                        "title": "Component Models"
                    }
                ]
            },
            {
                "id": "mth201-u2",
                "unitNumber": 2,
                "title": "System Simulation",
                "topics": [
                    {
                        "id": "mth201-u2t1",
                        "title": "Steady-state Simulation"
                    },
                    {
                        "id": "mth201-u2t2",
                        "title": "Dynamic Simulation"
                    },
                    {
                        "id": "mth201-u2t3",
                        "title": "Information Flow Diagrams"
                    },
                    {
                        "id": "mth201-u2t4",
                        "title": "Simulation Tools"
                    }
                ]
            },
            {
                "id": "mth201-u3",
                "unitNumber": 3,
                "title": "Economics",
                "topics": [
                    {
                        "id": "mth201-u3t1",
                        "title": "Time Value of Money"
                    },
                    {
                        "id": "mth201-u3t2",
                        "title": "Economic Evaluation"
                    },
                    {
                        "id": "mth201-u3t3",
                        "title": "Cost Estimation"
                    },
                    {
                        "id": "mth201-u3t4",
                        "title": "Thermoeconomics"
                    }
                ]
            },
            {
                "id": "mth201-u4",
                "unitNumber": 4,
                "title": "Optimisation",
                "topics": [
                    {
                        "id": "mth201-u4t1",
                        "title": "Optimisation Basics"
                    },
                    {
                        "id": "mth201-u4t2",
                        "title": "Search Methods"
                    },
                    {
                        "id": "mth201-u4t3",
                        "title": "Linear & Dynamic Programming"
                    },
                    {
                        "id": "mth201-u4t4",
                        "title": "Evolutionary Optimisation"
                    }
                ]
            },
            {
                "id": "mth201-u5",
                "unitNumber": 5,
                "title": "Design Applications",
                "topics": [
                    {
                        "id": "mth201-u5t1",
                        "title": "Heat Exchanger Design"
                    },
                    {
                        "id": "mth201-u5t2",
                        "title": "Piping & Pumping Systems"
                    },
                    {
                        "id": "mth201-u5t3",
                        "title": "Energy Systems Design"
                    },
                    {
                        "id": "mth201-u5t4",
                        "title": "Renewable Thermal Systems"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth202",
        "semester": 2,
        "title": "Advanced IC Engines & Emissions",
        "code": "MTH-202",
        "description": "Engine thermodynamics, combustion modelling, advanced combustion modes, emissions formation and aftertreatment, alternative fuels.",
        "generated": true,
        "references": [
            {
                "title": "Internal Combustion Engine Fundamentals",
                "author": "John B. Heywood"
            },
            {
                "title": "Introduction to Internal Combustion Engines",
                "author": "Richard Stone"
            },
            {
                "title": "Internal Combustion Engines",
                "author": "V. Ganesan"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth202/notes/mth202-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth202/notes/mth202-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth202/mock-papers/mth202-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth202/mock-papers/mth202-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth202/mock-papers/mth202-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth202-u1",
                "unitNumber": 1,
                "title": "Engine Thermodynamics",
                "topics": [
                    {
                        "id": "mth202-u1t1",
                        "title": "Fuel-air Cycle Analysis"
                    },
                    {
                        "id": "mth202-u1t2",
                        "title": "Thermodynamic Engine Models"
                    },
                    {
                        "id": "mth202-u1t3",
                        "title": "Gas Exchange"
                    },
                    {
                        "id": "mth202-u1t4",
                        "title": "Heat Transfer in Engines"
                    }
                ]
            },
            {
                "id": "mth202-u2",
                "unitNumber": 2,
                "title": "Combustion",
                "topics": [
                    {
                        "id": "mth202-u2t1",
                        "title": "SI Combustion"
                    },
                    {
                        "id": "mth202-u2t2",
                        "title": "CI Combustion"
                    },
                    {
                        "id": "mth202-u2t3",
                        "title": "Spray & Mixing"
                    },
                    {
                        "id": "mth202-u2t4",
                        "title": "Combustion Diagnostics"
                    }
                ]
            },
            {
                "id": "mth202-u3",
                "unitNumber": 3,
                "title": "Advanced Combustion Modes",
                "topics": [
                    {
                        "id": "mth202-u3t1",
                        "title": "HCCI"
                    },
                    {
                        "id": "mth202-u3t2",
                        "title": "PCCI & RCCI"
                    },
                    {
                        "id": "mth202-u3t3",
                        "title": "GDI & Lean Burn"
                    },
                    {
                        "id": "mth202-u3t4",
                        "title": "Downsizing & Boosting"
                    }
                ]
            },
            {
                "id": "mth202-u4",
                "unitNumber": 4,
                "title": "Emissions Formation & Control",
                "topics": [
                    {
                        "id": "mth202-u4t1",
                        "title": "Pollutant Formation"
                    },
                    {
                        "id": "mth202-u4t2",
                        "title": "In-cylinder Control"
                    },
                    {
                        "id": "mth202-u4t3",
                        "title": "Aftertreatment"
                    },
                    {
                        "id": "mth202-u4t4",
                        "title": "Emission Regulations & Testing"
                    }
                ]
            },
            {
                "id": "mth202-u5",
                "unitNumber": 5,
                "title": "Alternative Fuels & Electrification",
                "topics": [
                    {
                        "id": "mth202-u5t1",
                        "title": "Biofuels"
                    },
                    {
                        "id": "mth202-u5t2",
                        "title": "Gaseous Fuels"
                    },
                    {
                        "id": "mth202-u5t3",
                        "title": "Hybrid Powertrains"
                    },
                    {
                        "id": "mth202-u5t4",
                        "title": "Engine Calibration"
                    }
                ]
            }
        ]
    },
    {
        "id": "mth203",
        "semester": 2,
        "title": "Advanced Refrigeration & Cryogenics",
        "code": "MTH-203",
        "description": "Advanced vapour compression and absorption systems, refrigerants, cryogenic liquefaction, separation and storage.",
        "generated": true,
        "references": [
            {
                "title": "Refrigeration and Air Conditioning",
                "author": "C. P. Arora"
            },
            {
                "title": "Cryogenic Systems",
                "author": "Randall F. Barron"
            },
            {
                "title": "Cryogenic Engineering",
                "author": "Thomas M. Flynn"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mth203/notes/mth203-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mth203/notes/mth203-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mth203/mock-papers/mth203-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mth203/mock-papers/mth203-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mth203/mock-papers/mth203-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mth203-u1",
                "unitNumber": 1,
                "title": "Advanced Vapour Compression",
                "topics": [
                    {
                        "id": "mth203-u1t1",
                        "title": "Multistage Systems"
                    },
                    {
                        "id": "mth203-u1t2",
                        "title": "Cascade Refrigeration"
                    },
                    {
                        "id": "mth203-u1t3",
                        "title": "Component Matching"
                    },
                    {
                        "id": "mth203-u1t4",
                        "title": "Transcritical CO2 Cycles"
                    }
                ]
            },
            {
                "id": "mth203-u2",
                "unitNumber": 2,
                "title": "Absorption & Alternative Refrigeration",
                "topics": [
                    {
                        "id": "mth203-u2t1",
                        "title": "Vapour Absorption Advanced"
                    },
                    {
                        "id": "mth203-u2t2",
                        "title": "Adsorption Refrigeration"
                    },
                    {
                        "id": "mth203-u2t3",
                        "title": "Ejector & Thermoelectric"
                    },
                    {
                        "id": "mth203-u2t4",
                        "title": "Magnetic & Vortex Cooling"
                    }
                ]
            },
            {
                "id": "mth203-u3",
                "unitNumber": 3,
                "title": "Refrigerants & Environment",
                "topics": [
                    {
                        "id": "mth203-u3t1",
                        "title": "Refrigerant Properties"
                    },
                    {
                        "id": "mth203-u3t2",
                        "title": "Refrigerant Phase-out"
                    },
                    {
                        "id": "mth203-u3t3",
                        "title": "Natural Refrigerants"
                    },
                    {
                        "id": "mth203-u3t4",
                        "title": "Refrigerant Safety"
                    }
                ]
            },
            {
                "id": "mth203-u4",
                "unitNumber": 4,
                "title": "Cryogenics",
                "topics": [
                    {
                        "id": "mth203-u4t1",
                        "title": "Cryogenic Fundamentals"
                    },
                    {
                        "id": "mth203-u4t2",
                        "title": "Gas Liquefaction"
                    },
                    {
                        "id": "mth203-u4t3",
                        "title": "Gas Separation"
                    },
                    {
                        "id": "mth203-u4t4",
                        "title": "Cryocoolers"
                    }
                ]
            },
            {
                "id": "mth203-u5",
                "unitNumber": 5,
                "title": "Cryogenic Systems & Applications",
                "topics": [
                    {
                        "id": "mth203-u5t1",
                        "title": "Cryogenic Insulation"
                    },
                    {
                        "id": "mth203-u5t2",
                        "title": "Storage & Transfer"
                    },
                    {
                        "id": "mth203-u5t3",
                        "title": "Material Properties at Low Temperature"
                    },
                    {
                        "id": "mth203-u5t4",
                        "title": "Applications"
                    }
                ]
            }
        ]
    },
    {
        "id": "mst101",
        "semester": 1,
        "title": "Advanced Structural Analysis",
        "code": "MST-101",
        "description": "Matrix methods, direct stiffness method for trusses, beams, frames and grids, non-linear and stability analysis.",
        "generated": true,
        "references": [
            {
                "title": "Matrix Analysis of Framed Structures",
                "author": "Weaver & Gere"
            },
            {
                "title": "Matrix Methods of Structural Analysis",
                "author": "P. N. Godbole et al."
            },
            {
                "title": "Advanced Structural Analysis",
                "author": "Devdas Menon"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mst101/notes/mst101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mst101/notes/mst101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mst101/mock-papers/mst101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mst101/mock-papers/mst101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mst101/mock-papers/mst101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mst101-u1",
                "unitNumber": 1,
                "title": "Matrix Methods Fundamentals",
                "topics": [
                    {
                        "id": "mst101-u1t1",
                        "title": "Flexibility & Stiffness Concepts"
                    },
                    {
                        "id": "mst101-u1t2",
                        "title": "Degrees of Freedom"
                    },
                    {
                        "id": "mst101-u1t3",
                        "title": "Coordinate Systems"
                    },
                    {
                        "id": "mst101-u1t4",
                        "title": "Energy Principles"
                    }
                ]
            },
            {
                "id": "mst101-u2",
                "unitNumber": 2,
                "title": "Direct Stiffness Method",
                "topics": [
                    {
                        "id": "mst101-u2t1",
                        "title": "Truss Element"
                    },
                    {
                        "id": "mst101-u2t2",
                        "title": "Beam Element"
                    },
                    {
                        "id": "mst101-u2t3",
                        "title": "Assembly & Boundary Conditions"
                    },
                    {
                        "id": "mst101-u2t4",
                        "title": "Solution & Post-processing"
                    }
                ]
            },
            {
                "id": "mst101-u3",
                "unitNumber": 3,
                "title": "Frames & Grids",
                "topics": [
                    {
                        "id": "mst101-u3t1",
                        "title": "Plane Frames"
                    },
                    {
                        "id": "mst101-u3t2",
                        "title": "Space Frames"
                    },
                    {
                        "id": "mst101-u3t3",
                        "title": "Grids"
                    },
                    {
                        "id": "mst101-u3t4",
                        "title": "Special Effects"
                    }
                ]
            },
            {
                "id": "mst101-u4",
                "unitNumber": 4,
                "title": "Non-linear Analysis",
                "topics": [
                    {
                        "id": "mst101-u4t1",
                        "title": "Sources of Non-linearity"
                    },
                    {
                        "id": "mst101-u4t2",
                        "title": "Geometric Stiffness"
                    },
                    {
                        "id": "mst101-u4t3",
                        "title": "Material Non-linearity"
                    },
                    {
                        "id": "mst101-u4t4",
                        "title": "Collapse Analysis"
                    }
                ]
            },
            {
                "id": "mst101-u5",
                "unitNumber": 5,
                "title": "Stability & Dynamic Analysis",
                "topics": [
                    {
                        "id": "mst101-u5t1",
                        "title": "Elastic Stability"
                    },
                    {
                        "id": "mst101-u5t2",
                        "title": "Frame Stability"
                    },
                    {
                        "id": "mst101-u5t3",
                        "title": "Structural Dynamics Matrices"
                    },
                    {
                        "id": "mst101-u5t4",
                        "title": "Computer Implementation"
                    }
                ]
            }
        ]
    },
    {
        "id": "mst102",
        "semester": 1,
        "title": "Theory of Elasticity & Plasticity",
        "code": "MST-102",
        "description": "Stress and strain analysis, compatibility, 2D elasticity, torsion, plasticity theories and yield criteria.",
        "generated": true,
        "references": [
            {
                "title": "Theory of Elasticity",
                "author": "Timoshenko & Goodier"
            },
            {
                "title": "Advanced Mechanics of Solids",
                "author": "L. S. Srinath"
            },
            {
                "title": "Theory of Plasticity",
                "author": "J. Chakrabarty"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mst102/notes/mst102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mst102/notes/mst102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mst102/mock-papers/mst102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mst102/mock-papers/mst102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mst102/mock-papers/mst102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mst102-u1",
                "unitNumber": 1,
                "title": "Analysis of Stress",
                "topics": [
                    {
                        "id": "mst102-u1t1",
                        "title": "Stress at a Point"
                    },
                    {
                        "id": "mst102-u1t2",
                        "title": "Principal Stresses"
                    },
                    {
                        "id": "mst102-u1t3",
                        "title": "Equilibrium Equations"
                    },
                    {
                        "id": "mst102-u1t4",
                        "title": "Octahedral & Deviatoric Stress"
                    }
                ]
            },
            {
                "id": "mst102-u2",
                "unitNumber": 2,
                "title": "Analysis of Strain & Constitutive Relations",
                "topics": [
                    {
                        "id": "mst102-u2t1",
                        "title": "Strain at a Point"
                    },
                    {
                        "id": "mst102-u2t2",
                        "title": "Compatibility Equations"
                    },
                    {
                        "id": "mst102-u2t3",
                        "title": "Generalised Hooke's Law"
                    },
                    {
                        "id": "mst102-u2t4",
                        "title": "Strain Energy"
                    }
                ]
            },
            {
                "id": "mst102-u3",
                "unitNumber": 3,
                "title": "Two-dimensional Elasticity",
                "topics": [
                    {
                        "id": "mst102-u3t1",
                        "title": "Plane Stress & Plane Strain"
                    },
                    {
                        "id": "mst102-u3t2",
                        "title": "Airy Stress Function"
                    },
                    {
                        "id": "mst102-u3t3",
                        "title": "Polar Coordinates"
                    },
                    {
                        "id": "mst102-u3t4",
                        "title": "Saint-Venant's Principle"
                    }
                ]
            },
            {
                "id": "mst102-u4",
                "unitNumber": 4,
                "title": "Torsion of Non-circular Sections",
                "topics": [
                    {
                        "id": "mst102-u4t1",
                        "title": "Torsion Fundamentals"
                    },
                    {
                        "id": "mst102-u4t2",
                        "title": "Membrane Analogy"
                    },
                    {
                        "id": "mst102-u4t3",
                        "title": "Torsion of Thin Sections"
                    },
                    {
                        "id": "mst102-u4t4",
                        "title": "Torsion of Standard Shapes"
                    }
                ]
            },
            {
                "id": "mst102-u5",
                "unitNumber": 5,
                "title": "Plasticity",
                "topics": [
                    {
                        "id": "mst102-u5t1",
                        "title": "Plastic Behaviour"
                    },
                    {
                        "id": "mst102-u5t2",
                        "title": "Yield Criteria"
                    },
                    {
                        "id": "mst102-u5t3",
                        "title": "Flow Rules"
                    },
                    {
                        "id": "mst102-u5t4",
                        "title": "Limit Analysis"
                    }
                ]
            }
        ]
    },
    {
        "id": "mst103",
        "semester": 1,
        "title": "Advanced Concrete Technology",
        "code": "MST-103",
        "description": "Cement chemistry, admixtures, mix design, special concretes, durability, testing and sustainable concrete.",
        "generated": true,
        "references": [
            {
                "title": "Concrete Technology",
                "author": "M. S. Shetty"
            },
            {
                "title": "Concrete: Microstructure, Properties and Materials",
                "author": "Mehta & Monteiro"
            },
            {
                "title": "Properties of Concrete",
                "author": "A. M. Neville"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mst103/notes/mst103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mst103/notes/mst103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mst103/mock-papers/mst103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mst103/mock-papers/mst103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mst103/mock-papers/mst103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mst103-u1",
                "unitNumber": 1,
                "title": "Cement Chemistry & Hydration",
                "topics": [
                    {
                        "id": "mst103-u1t1",
                        "title": "Cement Composition"
                    },
                    {
                        "id": "mst103-u1t2",
                        "title": "Hydration Process"
                    },
                    {
                        "id": "mst103-u1t3",
                        "title": "Supplementary Cementitious Materials"
                    },
                    {
                        "id": "mst103-u1t4",
                        "title": "Microstructure"
                    }
                ]
            },
            {
                "id": "mst103-u2",
                "unitNumber": 2,
                "title": "Admixtures & Aggregates",
                "topics": [
                    {
                        "id": "mst103-u2t1",
                        "title": "Chemical Admixtures"
                    },
                    {
                        "id": "mst103-u2t2",
                        "title": "Mineral Admixtures"
                    },
                    {
                        "id": "mst103-u2t3",
                        "title": "Aggregate Properties"
                    },
                    {
                        "id": "mst103-u2t4",
                        "title": "Rheology of Fresh Concrete"
                    }
                ]
            },
            {
                "id": "mst103-u3",
                "unitNumber": 3,
                "title": "Mix Design",
                "topics": [
                    {
                        "id": "mst103-u3t1",
                        "title": "IS Method of Mix Design"
                    },
                    {
                        "id": "mst103-u3t2",
                        "title": "ACI Method"
                    },
                    {
                        "id": "mst103-u3t3",
                        "title": "High-strength Concrete Design"
                    },
                    {
                        "id": "mst103-u3t4",
                        "title": "Statistical Quality Control"
                    }
                ]
            },
            {
                "id": "mst103-u4",
                "unitNumber": 4,
                "title": "Special Concretes",
                "topics": [
                    {
                        "id": "mst103-u4t1",
                        "title": "Self-compacting Concrete"
                    },
                    {
                        "id": "mst103-u4t2",
                        "title": "Fibre Reinforced Concrete"
                    },
                    {
                        "id": "mst103-u4t3",
                        "title": "Ultra-high Performance Concrete"
                    },
                    {
                        "id": "mst103-u4t4",
                        "title": "Other Special Concretes"
                    }
                ]
            },
            {
                "id": "mst103-u5",
                "unitNumber": 5,
                "title": "Durability & Testing",
                "topics": [
                    {
                        "id": "mst103-u5t1",
                        "title": "Durability Mechanisms"
                    },
                    {
                        "id": "mst103-u5t2",
                        "title": "Durability Design"
                    },
                    {
                        "id": "mst103-u5t3",
                        "title": "Non-destructive Testing"
                    },
                    {
                        "id": "mst103-u5t4",
                        "title": "Sustainable Concrete"
                    }
                ]
            }
        ]
    },
    {
        "id": "mst104",
        "semester": 1,
        "title": "Structural Dynamics",
        "code": "MST-104",
        "description": "SDOF and MDOF vibration, modal analysis, response spectrum, continuous systems and numerical methods for dynamic response.",
        "generated": true,
        "references": [
            {
                "title": "Dynamics of Structures",
                "author": "Anil K. Chopra"
            },
            {
                "title": "Dynamics of Structures",
                "author": "Clough & Penzien"
            },
            {
                "title": "Structural Dynamics",
                "author": "Mario Paz"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mst104/notes/mst104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mst104/notes/mst104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mst104/mock-papers/mst104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mst104/mock-papers/mst104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mst104/mock-papers/mst104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mst104-u1",
                "unitNumber": 1,
                "title": "SDOF Free Vibration",
                "topics": [
                    {
                        "id": "mst104-u1t1",
                        "title": "Equation of Motion"
                    },
                    {
                        "id": "mst104-u1t2",
                        "title": "Undamped Free Vibration"
                    },
                    {
                        "id": "mst104-u1t3",
                        "title": "Damped Free Vibration"
                    },
                    {
                        "id": "mst104-u1t4",
                        "title": "Damping Mechanisms"
                    }
                ]
            },
            {
                "id": "mst104-u2",
                "unitNumber": 2,
                "title": "SDOF Forced Vibration",
                "topics": [
                    {
                        "id": "mst104-u2t1",
                        "title": "Harmonic Excitation"
                    },
                    {
                        "id": "mst104-u2t2",
                        "title": "Transmissibility & Isolation"
                    },
                    {
                        "id": "mst104-u2t3",
                        "title": "Arbitrary Excitation"
                    },
                    {
                        "id": "mst104-u2t4",
                        "title": "Earthquake Response"
                    }
                ]
            },
            {
                "id": "mst104-u3",
                "unitNumber": 3,
                "title": "MDOF Systems",
                "topics": [
                    {
                        "id": "mst104-u3t1",
                        "title": "Equations of Motion"
                    },
                    {
                        "id": "mst104-u3t2",
                        "title": "Natural Frequencies & Modes"
                    },
                    {
                        "id": "mst104-u3t3",
                        "title": "Modal Analysis"
                    },
                    {
                        "id": "mst104-u3t4",
                        "title": "Damping in MDOF"
                    }
                ]
            },
            {
                "id": "mst104-u4",
                "unitNumber": 4,
                "title": "Earthquake Analysis of MDOF",
                "topics": [
                    {
                        "id": "mst104-u4t1",
                        "title": "Response Spectrum Analysis"
                    },
                    {
                        "id": "mst104-u4t2",
                        "title": "Time History Analysis"
                    },
                    {
                        "id": "mst104-u4t3",
                        "title": "Torsional Response"
                    },
                    {
                        "id": "mst104-u4t4",
                        "title": "Soil-Structure Interaction"
                    }
                ]
            },
            {
                "id": "mst104-u5",
                "unitNumber": 5,
                "title": "Continuous Systems & Numerical Methods",
                "topics": [
                    {
                        "id": "mst104-u5t1",
                        "title": "Vibration of Beams"
                    },
                    {
                        "id": "mst104-u5t2",
                        "title": "Approximate Methods"
                    },
                    {
                        "id": "mst104-u5t3",
                        "title": "Numerical Integration"
                    },
                    {
                        "id": "mst104-u5t4",
                        "title": "Machine Foundations & Wind"
                    }
                ]
            }
        ]
    },
    {
        "id": "mst201",
        "semester": 2,
        "title": "Advanced Design of Steel Structures",
        "code": "MST-201",
        "description": "Plastic design, connections, light-gauge, industrial buildings, multistorey frames, towers and bridges in steel.",
        "generated": true,
        "references": [
            {
                "title": "Design of Steel Structures",
                "author": "N. Subramanian"
            },
            {
                "title": "Steel Structures: Design and Behavior",
                "author": "Salmon & Johnson"
            },
            {
                "title": "IS 800:2007",
                "author": "Bureau of Indian Standards"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mst201/notes/mst201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mst201/notes/mst201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mst201/mock-papers/mst201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mst201/mock-papers/mst201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mst201/mock-papers/mst201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mst201-u1",
                "unitNumber": 1,
                "title": "Plastic & Limit State Design",
                "topics": [
                    {
                        "id": "mst201-u1t1",
                        "title": "Plastic Analysis Review"
                    },
                    {
                        "id": "mst201-u1t2",
                        "title": "Limit State Design per IS 800"
                    },
                    {
                        "id": "mst201-u1t3",
                        "title": "Local Buckling"
                    },
                    {
                        "id": "mst201-u1t4",
                        "title": "Combined Forces"
                    }
                ]
            },
            {
                "id": "mst201-u2",
                "unitNumber": 2,
                "title": "Connections",
                "topics": [
                    {
                        "id": "mst201-u2t1",
                        "title": "Bolted Connections Advanced"
                    },
                    {
                        "id": "mst201-u2t2",
                        "title": "Welded Connections Advanced"
                    },
                    {
                        "id": "mst201-u2t3",
                        "title": "Moment Connections"
                    },
                    {
                        "id": "mst201-u2t4",
                        "title": "Base Plates & Splices"
                    }
                ]
            },
            {
                "id": "mst201-u3",
                "unitNumber": 3,
                "title": "Light-gauge & Industrial Structures",
                "topics": [
                    {
                        "id": "mst201-u3t1",
                        "title": "Cold-formed Steel"
                    },
                    {
                        "id": "mst201-u3t2",
                        "title": "Industrial Buildings"
                    },
                    {
                        "id": "mst201-u3t3",
                        "title": "Pre-engineered Buildings"
                    },
                    {
                        "id": "mst201-u3t4",
                        "title": "Space Structures"
                    }
                ]
            },
            {
                "id": "mst201-u4",
                "unitNumber": 4,
                "title": "Multistorey & Tall Steel Buildings",
                "topics": [
                    {
                        "id": "mst201-u4t1",
                        "title": "Lateral Load Systems"
                    },
                    {
                        "id": "mst201-u4t2",
                        "title": "Composite Construction"
                    },
                    {
                        "id": "mst201-u4t3",
                        "title": "Seismic Design of Steel"
                    },
                    {
                        "id": "mst201-u4t4",
                        "title": "Fire Resistance"
                    }
                ]
            },
            {
                "id": "mst201-u5",
                "unitNumber": 5,
                "title": "Towers & Bridges",
                "topics": [
                    {
                        "id": "mst201-u5t1",
                        "title": "Transmission Towers"
                    },
                    {
                        "id": "mst201-u5t2",
                        "title": "Chimneys & Tanks"
                    },
                    {
                        "id": "mst201-u5t3",
                        "title": "Steel Bridges"
                    },
                    {
                        "id": "mst201-u5t4",
                        "title": "Fatigue & Inspection"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps101",
        "semester": 1,
        "title": "Advanced Power System Analysis",
        "code": "MPS-101",
        "description": "Network modelling, sparse techniques, load flow, contingency analysis, fault analysis and state estimation.",
        "generated": true,
        "references": [
            {
                "title": "Computer Methods in Power System Analysis",
                "author": "Stagg & El-Abiad"
            },
            {
                "title": "Power System Analysis",
                "author": "Hadi Saadat"
            },
            {
                "title": "Power Generation, Operation and Control",
                "author": "Wood & Wollenberg"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps101/notes/mps101-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps101/notes/mps101-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps101/mock-papers/mps101-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps101/mock-papers/mps101-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps101/mock-papers/mps101-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps101-u1",
                "unitNumber": 1,
                "title": "Network Modelling",
                "topics": [
                    {
                        "id": "mps101-u1t1",
                        "title": "Primitive Network"
                    },
                    {
                        "id": "mps101-u1t2",
                        "title": "Ybus & Zbus"
                    },
                    {
                        "id": "mps101-u1t3",
                        "title": "Sparse Matrix Techniques"
                    },
                    {
                        "id": "mps101-u1t4",
                        "title": "Component Modelling"
                    }
                ]
            },
            {
                "id": "mps101-u2",
                "unitNumber": 2,
                "title": "Load Flow Analysis",
                "topics": [
                    {
                        "id": "mps101-u2t1",
                        "title": "Newton-Raphson Load Flow"
                    },
                    {
                        "id": "mps101-u2t2",
                        "title": "Fast Decoupled Load Flow"
                    },
                    {
                        "id": "mps101-u2t3",
                        "title": "DC Load Flow"
                    },
                    {
                        "id": "mps101-u2t4",
                        "title": "Control in Load Flow"
                    }
                ]
            },
            {
                "id": "mps101-u3",
                "unitNumber": 3,
                "title": "Contingency Analysis & Security",
                "topics": [
                    {
                        "id": "mps101-u3t1",
                        "title": "Security Concepts"
                    },
                    {
                        "id": "mps101-u3t2",
                        "title": "Sensitivity Factors"
                    },
                    {
                        "id": "mps101-u3t3",
                        "title": "Contingency Ranking"
                    },
                    {
                        "id": "mps101-u3t4",
                        "title": "Security-constrained Dispatch"
                    }
                ]
            },
            {
                "id": "mps101-u4",
                "unitNumber": 4,
                "title": "Fault Analysis",
                "topics": [
                    {
                        "id": "mps101-u4t1",
                        "title": "Symmetrical Components"
                    },
                    {
                        "id": "mps101-u4t2",
                        "title": "Unsymmetrical Faults"
                    },
                    {
                        "id": "mps101-u4t3",
                        "title": "Zbus Fault Analysis"
                    },
                    {
                        "id": "mps101-u4t4",
                        "title": "Short-circuit Studies"
                    }
                ]
            },
            {
                "id": "mps101-u5",
                "unitNumber": 5,
                "title": "State Estimation",
                "topics": [
                    {
                        "id": "mps101-u5t1",
                        "title": "State Estimation Concept"
                    },
                    {
                        "id": "mps101-u5t2",
                        "title": "Weighted Least Squares"
                    },
                    {
                        "id": "mps101-u5t3",
                        "title": "Bad Data Detection"
                    },
                    {
                        "id": "mps101-u5t4",
                        "title": "PMU-based Estimation"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps102",
        "semester": 1,
        "title": "Power System Dynamics & Stability",
        "code": "MPS-102",
        "description": "Synchronous machine modelling, excitation and governor systems, small-signal, transient and voltage stability.",
        "generated": true,
        "references": [
            {
                "title": "Power System Stability and Control",
                "author": "Prabha Kundur"
            },
            {
                "title": "Power System Dynamics: Stability and Control",
                "author": "K. R. Padiyar"
            },
            {
                "title": "Power System Control and Stability",
                "author": "Anderson & Fouad"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps102/notes/mps102-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps102/notes/mps102-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps102/mock-papers/mps102-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps102/mock-papers/mps102-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps102/mock-papers/mps102-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps102-u1",
                "unitNumber": 1,
                "title": "Synchronous Machine Modelling",
                "topics": [
                    {
                        "id": "mps102-u1t1",
                        "title": "Park's Transformation"
                    },
                    {
                        "id": "mps102-u1t2",
                        "title": "Machine Reactances"
                    },
                    {
                        "id": "mps102-u1t3",
                        "title": "Time Constants"
                    },
                    {
                        "id": "mps102-u1t4",
                        "title": "Simplified Models"
                    }
                ]
            },
            {
                "id": "mps102-u2",
                "unitNumber": 2,
                "title": "Excitation & Governor Systems",
                "topics": [
                    {
                        "id": "mps102-u2t1",
                        "title": "Excitation Systems"
                    },
                    {
                        "id": "mps102-u2t2",
                        "title": "Excitation System Models"
                    },
                    {
                        "id": "mps102-u2t3",
                        "title": "Power System Stabiliser"
                    },
                    {
                        "id": "mps102-u2t4",
                        "title": "Prime Mover & Governor"
                    }
                ]
            },
            {
                "id": "mps102-u3",
                "unitNumber": 3,
                "title": "Small-signal Stability",
                "topics": [
                    {
                        "id": "mps102-u3t1",
                        "title": "Linearisation"
                    },
                    {
                        "id": "mps102-u3t2",
                        "title": "Heffron-Phillips Model"
                    },
                    {
                        "id": "mps102-u3t3",
                        "title": "Modes of Oscillation"
                    },
                    {
                        "id": "mps102-u3t4",
                        "title": "Damping Control"
                    }
                ]
            },
            {
                "id": "mps102-u4",
                "unitNumber": 4,
                "title": "Transient Stability",
                "topics": [
                    {
                        "id": "mps102-u4t1",
                        "title": "Transient Stability Concepts"
                    },
                    {
                        "id": "mps102-u4t2",
                        "title": "Equal Area Criterion"
                    },
                    {
                        "id": "mps102-u4t3",
                        "title": "Numerical Methods"
                    },
                    {
                        "id": "mps102-u4t4",
                        "title": "Enhancement Methods"
                    }
                ]
            },
            {
                "id": "mps102-u5",
                "unitNumber": 5,
                "title": "Voltage Stability",
                "topics": [
                    {
                        "id": "mps102-u5t1",
                        "title": "Voltage Stability Concepts"
                    },
                    {
                        "id": "mps102-u5t2",
                        "title": "PV & QV Curves"
                    },
                    {
                        "id": "mps102-u5t3",
                        "title": "Analysis Methods"
                    },
                    {
                        "id": "mps102-u5t4",
                        "title": "Prevention of Collapse"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps103",
        "semester": 1,
        "title": "Advanced Power Electronic Converters",
        "code": "MPS-103",
        "description": "Switching devices, DC-DC converter design, multilevel inverters, PWM, grid-connected converters and control.",
        "generated": true,
        "references": [
            {
                "title": "Power Electronics",
                "author": "Mohan, Undeland & Robbins"
            },
            {
                "title": "Fundamentals of Power Electronics",
                "author": "Erickson & Maksimovic"
            },
            {
                "title": "Grid Converters for Photovoltaic and Wind Power Systems",
                "author": "Teodorescu, Liserre & Rodriguez"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps103/notes/mps103-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps103/notes/mps103-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps103/mock-papers/mps103-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps103/mock-papers/mps103-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps103/mock-papers/mps103-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps103-u1",
                "unitNumber": 1,
                "title": "Power Semiconductor Devices",
                "topics": [
                    {
                        "id": "mps103-u1t1",
                        "title": "Silicon Devices"
                    },
                    {
                        "id": "mps103-u1t2",
                        "title": "Wide Bandgap Devices"
                    },
                    {
                        "id": "mps103-u1t3",
                        "title": "Gate Drivers"
                    },
                    {
                        "id": "mps103-u1t4",
                        "title": "Thermal Management"
                    }
                ]
            },
            {
                "id": "mps103-u2",
                "unitNumber": 2,
                "title": "DC-DC Converters",
                "topics": [
                    {
                        "id": "mps103-u2t1",
                        "title": "Non-isolated Converters"
                    },
                    {
                        "id": "mps103-u2t2",
                        "title": "Isolated Converters"
                    },
                    {
                        "id": "mps103-u2t3",
                        "title": "Resonant Converters"
                    },
                    {
                        "id": "mps103-u2t4",
                        "title": "Converter Design"
                    }
                ]
            },
            {
                "id": "mps103-u3",
                "unitNumber": 3,
                "title": "Inverters & Multilevel Converters",
                "topics": [
                    {
                        "id": "mps103-u3t1",
                        "title": "Voltage Source Inverters"
                    },
                    {
                        "id": "mps103-u3t2",
                        "title": "Space Vector PWM"
                    },
                    {
                        "id": "mps103-u3t3",
                        "title": "Multilevel Inverters"
                    },
                    {
                        "id": "mps103-u3t4",
                        "title": "MMC"
                    }
                ]
            },
            {
                "id": "mps103-u4",
                "unitNumber": 4,
                "title": "Grid-connected Converters",
                "topics": [
                    {
                        "id": "mps103-u4t1",
                        "title": "Grid Synchronisation"
                    },
                    {
                        "id": "mps103-u4t2",
                        "title": "Current Control"
                    },
                    {
                        "id": "mps103-u4t3",
                        "title": "Filters"
                    },
                    {
                        "id": "mps103-u4t4",
                        "title": "Grid-forming Converters"
                    }
                ]
            },
            {
                "id": "mps103-u5",
                "unitNumber": 5,
                "title": "Applications & Control",
                "topics": [
                    {
                        "id": "mps103-u5t1",
                        "title": "Renewable Converters"
                    },
                    {
                        "id": "mps103-u5t2",
                        "title": "Motor Drive Converters"
                    },
                    {
                        "id": "mps103-u5t3",
                        "title": "EV Chargers"
                    },
                    {
                        "id": "mps103-u5t4",
                        "title": "Modelling & Simulation"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps104",
        "semester": 1,
        "title": "Optimisation Techniques in Power Systems",
        "code": "MPS-104",
        "description": "Linear, non-linear, dynamic and evolutionary optimisation applied to economic dispatch, OPF and unit commitment.",
        "generated": true,
        "references": [
            {
                "title": "Engineering Optimization: Theory and Practice",
                "author": "S. S. Rao"
            },
            {
                "title": "Optimization of Power System Operation",
                "author": "Jizhong Zhu"
            },
            {
                "title": "Power Generation, Operation and Control",
                "author": "Wood & Wollenberg"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps104/notes/mps104-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps104/notes/mps104-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps104/mock-papers/mps104-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps104/mock-papers/mps104-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps104/mock-papers/mps104-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps104-u1",
                "unitNumber": 1,
                "title": "Optimisation Fundamentals",
                "topics": [
                    {
                        "id": "mps104-u1t1",
                        "title": "Problem Formulation"
                    },
                    {
                        "id": "mps104-u1t2",
                        "title": "Classification"
                    },
                    {
                        "id": "mps104-u1t3",
                        "title": "Convexity"
                    },
                    {
                        "id": "mps104-u1t4",
                        "title": "Optimality Conditions"
                    }
                ]
            },
            {
                "id": "mps104-u2",
                "unitNumber": 2,
                "title": "Classical Methods",
                "topics": [
                    {
                        "id": "mps104-u2t1",
                        "title": "Linear Programming Methods"
                    },
                    {
                        "id": "mps104-u2t2",
                        "title": "Non-linear Programming Methods"
                    },
                    {
                        "id": "mps104-u2t3",
                        "title": "Dynamic Programming"
                    },
                    {
                        "id": "mps104-u2t4",
                        "title": "Integer Programming"
                    }
                ]
            },
            {
                "id": "mps104-u3",
                "unitNumber": 3,
                "title": "Evolutionary & Metaheuristic Methods",
                "topics": [
                    {
                        "id": "mps104-u3t1",
                        "title": "Genetic Algorithm"
                    },
                    {
                        "id": "mps104-u3t2",
                        "title": "Particle Swarm Optimisation"
                    },
                    {
                        "id": "mps104-u3t3",
                        "title": "Other Metaheuristics"
                    },
                    {
                        "id": "mps104-u3t4",
                        "title": "Multi-objective Optimisation"
                    }
                ]
            },
            {
                "id": "mps104-u4",
                "unitNumber": 4,
                "title": "Economic Dispatch & OPF",
                "topics": [
                    {
                        "id": "mps104-u4t1",
                        "title": "Economic Load Dispatch"
                    },
                    {
                        "id": "mps104-u4t2",
                        "title": "Optimal Power Flow"
                    },
                    {
                        "id": "mps104-u4t3",
                        "title": "Environmental Dispatch"
                    },
                    {
                        "id": "mps104-u4t4",
                        "title": "Reactive Power Optimisation"
                    }
                ]
            },
            {
                "id": "mps104-u5",
                "unitNumber": 5,
                "title": "Unit Commitment & Planning",
                "topics": [
                    {
                        "id": "mps104-u5t1",
                        "title": "Unit Commitment"
                    },
                    {
                        "id": "mps104-u5t2",
                        "title": "UC Solution Methods"
                    },
                    {
                        "id": "mps104-u5t3",
                        "title": "Hydro-thermal Scheduling"
                    },
                    {
                        "id": "mps104-u5t4",
                        "title": "Expansion Planning"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps201",
        "semester": 2,
        "title": "Power System Operation & Control",
        "code": "MPS-201",
        "description": "Load frequency control, AGC, voltage and reactive power control, energy management systems and electricity markets.",
        "generated": true,
        "references": [
            {
                "title": "Power Generation, Operation and Control",
                "author": "Wood & Wollenberg"
            },
            {
                "title": "Power System Operation and Control",
                "author": "S. Sivanagaraju"
            },
            {
                "title": "Operation of Restructured Power Systems",
                "author": "Bhattacharya, Bollen & Daalder"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps201/notes/mps201-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps201/notes/mps201-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps201/mock-papers/mps201-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps201/mock-papers/mps201-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps201/mock-papers/mps201-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps201-u1",
                "unitNumber": 1,
                "title": "Load Frequency Control",
                "topics": [
                    {
                        "id": "mps201-u1t1",
                        "title": "Frequency Control Basics"
                    },
                    {
                        "id": "mps201-u1t2",
                        "title": "Single-area LFC"
                    },
                    {
                        "id": "mps201-u1t3",
                        "title": "Two-area LFC"
                    },
                    {
                        "id": "mps201-u1t4",
                        "title": "AGC & Modern Control"
                    }
                ]
            },
            {
                "id": "mps201-u2",
                "unitNumber": 2,
                "title": "Voltage & Reactive Power Control",
                "topics": [
                    {
                        "id": "mps201-u2t1",
                        "title": "Reactive Power Sources"
                    },
                    {
                        "id": "mps201-u2t2",
                        "title": "Voltage Control Methods"
                    },
                    {
                        "id": "mps201-u2t3",
                        "title": "Hierarchical Voltage Control"
                    },
                    {
                        "id": "mps201-u2t4",
                        "title": "Reactive Power Management"
                    }
                ]
            },
            {
                "id": "mps201-u3",
                "unitNumber": 3,
                "title": "Energy Management Systems",
                "topics": [
                    {
                        "id": "mps201-u3t1",
                        "title": "Control Centres"
                    },
                    {
                        "id": "mps201-u3t2",
                        "title": "EMS Functions"
                    },
                    {
                        "id": "mps201-u3t3",
                        "title": "Load Forecasting"
                    },
                    {
                        "id": "mps201-u3t4",
                        "title": "WAMS"
                    }
                ]
            },
            {
                "id": "mps201-u4",
                "unitNumber": 4,
                "title": "Electricity Markets",
                "topics": [
                    {
                        "id": "mps201-u4t1",
                        "title": "Power Sector Restructuring"
                    },
                    {
                        "id": "mps201-u4t2",
                        "title": "Market Structures"
                    },
                    {
                        "id": "mps201-u4t3",
                        "title": "Pricing"
                    },
                    {
                        "id": "mps201-u4t4",
                        "title": "Ancillary Services"
                    }
                ]
            },
            {
                "id": "mps201-u5",
                "unitNumber": 5,
                "title": "Grid Operation with Renewables",
                "topics": [
                    {
                        "id": "mps201-u5t1",
                        "title": "Variability & Forecasting"
                    },
                    {
                        "id": "mps201-u5t2",
                        "title": "Flexibility"
                    },
                    {
                        "id": "mps201-u5t3",
                        "title": "Inertia & Frequency Stability"
                    },
                    {
                        "id": "mps201-u5t4",
                        "title": "Grid Codes for RE"
                    }
                ]
            }
        ]
    },
    {
        "id": "mps202",
        "semester": 2,
        "title": "Smart Grid Technologies",
        "code": "MPS-202",
        "description": "Smart grid architecture, AMI, distribution automation, microgrids, communication, cyber security and EV integration.",
        "generated": true,
        "references": [
            {
                "title": "Smart Grid: Fundamentals of Design and Analysis",
                "author": "James Momoh"
            },
            {
                "title": "Smart Grid: Technology and Applications",
                "author": "Ekanayake et al."
            },
            {
                "title": "Microgrids: Architectures and Control",
                "author": "Nikos Hatziargyriou"
            }
        ],
        "resources": {
            "notesPdf": "assets/resources/mps202/notes/mps202-unit-wise-study-notes.pdf",
            "notesMd": "assets/resources/mps202/notes/mps202-unit-wise-study-notes.md",
            "paperPdf": "assets/resources/mps202/mock-papers/mps202-rgpv-model-question-paper.pdf",
            "paperMd": "assets/resources/mps202/mock-papers/mps202-rgpv-model-question-paper.md",
            "bankMd": "assets/resources/mps202/mock-papers/mps202-question-bank-with-answers.md"
        },
        "units": [
            {
                "id": "mps202-u1",
                "unitNumber": 1,
                "title": "Smart Grid Fundamentals",
                "topics": [
                    {
                        "id": "mps202-u1t1",
                        "title": "Smart Grid Concept"
                    },
                    {
                        "id": "mps202-u1t2",
                        "title": "Smart Grid Architecture"
                    },
                    {
                        "id": "mps202-u1t3",
                        "title": "Smart Grid in India"
                    },
                    {
                        "id": "mps202-u1t4",
                        "title": "Drivers & Benefits"
                    }
                ]
            },
            {
                "id": "mps202-u2",
                "unitNumber": 2,
                "title": "Advanced Metering & Demand Response",
                "topics": [
                    {
                        "id": "mps202-u2t1",
                        "title": "AMI"
                    },
                    {
                        "id": "mps202-u2t2",
                        "title": "Demand Response"
                    },
                    {
                        "id": "mps202-u2t3",
                        "title": "Home Energy Management"
                    },
                    {
                        "id": "mps202-u2t4",
                        "title": "Data Analytics"
                    }
                ]
            },
            {
                "id": "mps202-u3",
                "unitNumber": 3,
                "title": "Distribution Automation & Microgrids",
                "topics": [
                    {
                        "id": "mps202-u3t1",
                        "title": "Distribution Automation"
                    },
                    {
                        "id": "mps202-u3t2",
                        "title": "Distributed Energy Resources"
                    },
                    {
                        "id": "mps202-u3t3",
                        "title": "Microgrids"
                    },
                    {
                        "id": "mps202-u3t4",
                        "title": "Microgrid Control"
                    }
                ]
            },
            {
                "id": "mps202-u4",
                "unitNumber": 4,
                "title": "Communication & Cyber Security",
                "topics": [
                    {
                        "id": "mps202-u4t1",
                        "title": "Communication Technologies"
                    },
                    {
                        "id": "mps202-u4t2",
                        "title": "Communication Standards"
                    },
                    {
                        "id": "mps202-u4t3",
                        "title": "Cyber Security Threats"
                    },
                    {
                        "id": "mps202-u4t4",
                        "title": "Cyber Security Measures"
                    }
                ]
            },
            {
                "id": "mps202-u5",
                "unitNumber": 5,
                "title": "EVs, Storage & Future Grids",
                "topics": [
                    {
                        "id": "mps202-u5t1",
                        "title": "EV Integration"
                    },
                    {
                        "id": "mps202-u5t2",
                        "title": "Energy Storage in Smart Grids"
                    },
                    {
                        "id": "mps202-u5t3",
                        "title": "Virtual Power Plants"
                    },
                    {
                        "id": "mps202-u5t4",
                        "title": "Digital Twins & AI"
                    }
                ]
            }
        ]
    }
]);
window.BRANCHES = {
    "CSE": {
        "degree": "B.Tech",
        "name": "Computer Science & Engineering",
        "short": "CSE",
        "icon": "💻"
    },
    "IT": {
        "degree": "B.Tech",
        "name": "Information Technology (CSIT)",
        "short": "IT",
        "icon": "🌐"
    },
    "EC": {
        "degree": "B.Tech",
        "name": "Electronics & Communication",
        "short": "ECE",
        "icon": "📡"
    },
    "EX": {
        "degree": "B.Tech",
        "name": "Electrical & Electronics",
        "short": "EX",
        "icon": "⚡"
    },
    "ME": {
        "degree": "B.Tech",
        "name": "Mechanical Engineering",
        "short": "ME",
        "icon": "⚙️"
    },
    "CE": {
        "degree": "B.Tech",
        "name": "Civil Engineering",
        "short": "CE",
        "icon": "🏗️"
    },
    "AU": {
        "degree": "B.Tech",
        "name": "Automobile Engineering",
        "short": "AU",
        "icon": "🚗",
        "note": "RGPV does not publish the current AU semester 6-8 scheme online; these are the commonly offered papers. Confirm codes with your department."
    },
    "MT-CSE": {
        "degree": "M.Tech",
        "name": "Computer Science & Engineering",
        "short": "M.Tech CSE",
        "icon": "🧠",
        "note": "M.Tech semesters 3-4 are electives and dissertation; theory papers are in semesters 1-2. Paper codes vary slightly between RGPV institutes."
    },
    "MT-VLSI": {
        "degree": "M.Tech",
        "name": "VLSI Design",
        "short": "M.Tech VLSI",
        "icon": "🔬",
        "note": "M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes."
    },
    "MT-TH": {
        "degree": "M.Tech",
        "name": "Thermal Engineering",
        "short": "M.Tech Thermal",
        "icon": "🔥",
        "note": "M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes."
    },
    "MT-ST": {
        "degree": "M.Tech",
        "name": "Structural Engineering",
        "short": "M.Tech Structural",
        "icon": "🏛️",
        "note": "M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes."
    },
    "MT-PS": {
        "degree": "M.Tech",
        "name": "Power Systems",
        "short": "M.Tech Power",
        "icon": "🔌",
        "note": "M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes."
    }
};
window.branchPlan = {
    "CSE": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "es301",
                "code": "ES-301"
            },
            {
                "id": "cs302",
                "code": "CS-302"
            },
            {
                "id": "cs303",
                "code": "CS-303"
            },
            {
                "id": "cs304",
                "code": "CS-304"
            },
            {
                "id": "cs305",
                "code": "CS-305"
            }
        ],
        "4": [
            {
                "id": "bt301",
                "code": "BT-401"
            },
            {
                "id": "cs402",
                "code": "CS-402"
            },
            {
                "id": "cs403",
                "code": "CS-403"
            },
            {
                "id": "cs404",
                "code": "CS-404"
            },
            {
                "id": "cs405",
                "code": "CS-405"
            }
        ],
        "5": [
            {
                "id": "cs501",
                "code": "CS-501"
            },
            {
                "id": "cs502",
                "code": "CS-502"
            },
            {
                "id": "cs503",
                "code": "CS-503"
            },
            {
                "id": "cs503-cs",
                "code": "CS-503-CS"
            },
            {
                "id": "cs504",
                "code": "CS-504"
            }
        ],
        "6": [
            {
                "id": "cs601",
                "code": "CS-601"
            },
            {
                "id": "cs602",
                "code": "CS-602"
            },
            {
                "id": "cs603",
                "code": "CS-603"
            },
            {
                "id": "cs603-cg",
                "code": "CS-603-CG"
            },
            {
                "id": "cs604",
                "code": "CS-604"
            }
        ],
        "7": [
            {
                "id": "cs701",
                "code": "CS-701"
            },
            {
                "id": "cs702-bd",
                "code": "CS-702-BD"
            },
            {
                "id": "cs702-wmc",
                "code": "CS-702-WMC"
            },
            {
                "id": "cs703-cis",
                "code": "CS-703-CIS"
            },
            {
                "id": "cs703-dm",
                "code": "CS-703-DM"
            }
        ],
        "8": [
            {
                "id": "cs801",
                "code": "CS-801"
            },
            {
                "id": "cs802-bc",
                "code": "CS-802(A)"
            },
            {
                "id": "cs802-cc",
                "code": "CS-802(B)"
            },
            {
                "id": "cs803-ip",
                "code": "CS-803(A)"
            }
        ]
    },
    "IT": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "es301",
                "code": "ES-301"
            },
            {
                "id": "cs302",
                "code": "CSIT-302"
            },
            {
                "id": "cs303",
                "code": "CSIT-303"
            },
            {
                "id": "cs304",
                "code": "CSIT-304"
            },
            {
                "id": "cs305",
                "code": "CSIT-305"
            }
        ],
        "4": [
            {
                "id": "bt301",
                "code": "BT-401"
            },
            {
                "id": "it402",
                "code": "CSIT-402"
            },
            {
                "id": "cs402",
                "code": "CSIT-403"
            },
            {
                "id": "cs404",
                "code": "CSIT-404"
            },
            {
                "id": "cs502",
                "code": "CSIT-405"
            }
        ],
        "5": [
            {
                "id": "cs602",
                "code": "CSIT-501"
            },
            {
                "id": "cs405",
                "code": "CSIT-502"
            },
            {
                "id": "cs501",
                "code": "CSIT-503(A)"
            },
            {
                "id": "cs503-cs",
                "code": "CSIT-504(A)"
            },
            {
                "id": "it504-ai",
                "code": "CSIT-504(B)"
            },
            {
                "id": "cs504",
                "code": "CSIT-504(C)"
            }
        ],
        "6": [
            {
                "id": "cs403",
                "code": "CSIT-601"
            },
            {
                "id": "cs601",
                "code": "CSIT-602"
            },
            {
                "id": "cs702-wmc",
                "code": "CSIT-603(A)"
            },
            {
                "id": "cs603-cg",
                "code": "CSIT-603(B)"
            },
            {
                "id": "cs703-cis",
                "code": "CSIT-604(A)"
            }
        ],
        "7": [
            {
                "id": "cs801",
                "code": "CSIT-701"
            },
            {
                "id": "cs603",
                "code": "CSIT-702(B)"
            },
            {
                "id": "it702-nlp",
                "code": "CSIT-702(D)"
            },
            {
                "id": "cs802-cc",
                "code": "CSIT-703(C)"
            }
        ],
        "8": [
            {
                "id": "it801",
                "code": "CSIT-801"
            },
            {
                "id": "it802-dwm",
                "code": "CSIT-802(A)"
            },
            {
                "id": "cs802-bc",
                "code": "CSIT-802(D)"
            }
        ]
    },
    "EC": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "bt301",
                "code": "BT-301"
            },
            {
                "id": "ec302",
                "code": "EC-302"
            },
            {
                "id": "ec303",
                "code": "EC-303"
            },
            {
                "id": "ec304",
                "code": "EC-304"
            },
            {
                "id": "ec305",
                "code": "EC-305"
            }
        ],
        "4": [
            {
                "id": "es301",
                "code": "ES-401"
            },
            {
                "id": "ec402",
                "code": "EC-402"
            },
            {
                "id": "ec403",
                "code": "EC-403"
            },
            {
                "id": "ec404",
                "code": "EC-404"
            },
            {
                "id": "ec405",
                "code": "EC-405"
            }
        ],
        "5": [
            {
                "id": "ec501",
                "code": "EC-501"
            },
            {
                "id": "ec502",
                "code": "EC-502"
            },
            {
                "id": "ec503-mc",
                "code": "EC-503(B)"
            },
            {
                "id": "ec504-emt",
                "code": "EC-504(A)"
            }
        ],
        "6": [
            {
                "id": "ec601",
                "code": "EC-601"
            },
            {
                "id": "ec602",
                "code": "EC-602"
            },
            {
                "id": "ec603-sat",
                "code": "EC-603(C)"
            },
            {
                "id": "ec604-mes",
                "code": "EC-604(A)"
            }
        ],
        "7": [
            {
                "id": "ec701",
                "code": "EC-701"
            },
            {
                "id": "ec702-mw",
                "code": "EC-702(A)"
            },
            {
                "id": "ec702-itc",
                "code": "EC-702(B)"
            },
            {
                "id": "cs801",
                "code": "EC-703(B)"
            }
        ],
        "8": [
            {
                "id": "ec801",
                "code": "EC-801"
            },
            {
                "id": "ec802-wc",
                "code": "EC-802(B)"
            },
            {
                "id": "cs803-ip",
                "code": "EC-803(B)"
            }
        ]
    },
    "EX": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "es301",
                "code": "ES-301"
            },
            {
                "id": "ec402",
                "code": "EX-302"
            },
            {
                "id": "ex303",
                "code": "EX-303"
            },
            {
                "id": "ec305",
                "code": "EX-304"
            },
            {
                "id": "ec405",
                "code": "EX-305"
            }
        ],
        "4": [
            {
                "id": "bt301",
                "code": "BT-401"
            },
            {
                "id": "ex402",
                "code": "EX-402"
            },
            {
                "id": "ec303",
                "code": "EX-403"
            },
            {
                "id": "ex404",
                "code": "EX-404"
            },
            {
                "id": "ec404",
                "code": "EX-405"
            }
        ],
        "5": [
            {
                "id": "ex501",
                "code": "EX-501"
            },
            {
                "id": "ex502",
                "code": "EX-502"
            },
            {
                "id": "ex503c",
                "code": "EX-503(C)"
            },
            {
                "id": "ex504a",
                "code": "EX-504(A)"
            }
        ],
        "6": [
            {
                "id": "ex601",
                "code": "EX-601"
            },
            {
                "id": "ec501",
                "code": "EX-602"
            },
            {
                "id": "ex603a",
                "code": "EX-603(A)"
            },
            {
                "id": "cs801",
                "code": "EX-604(B)"
            }
        ],
        "7": [
            {
                "id": "ex701",
                "code": "EX-701"
            },
            {
                "id": "ex702b",
                "code": "EX-702(B)"
            },
            {
                "id": "ex702c",
                "code": "EX-702(C)"
            },
            {
                "id": "au703",
                "code": "EX-703(A)"
            }
        ],
        "8": [
            {
                "id": "ex801",
                "code": "EX-801"
            },
            {
                "id": "ex802b",
                "code": "EX-802(B)"
            },
            {
                "id": "it504-ai",
                "code": "EX-802(D)"
            }
        ]
    },
    "CE": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "bt301",
                "code": "BT-301"
            },
            {
                "id": "ce302",
                "code": "CE-302"
            },
            {
                "id": "ce303",
                "code": "CE-303"
            },
            {
                "id": "ce304",
                "code": "CE-304"
            },
            {
                "id": "me304",
                "code": "CE-305"
            }
        ],
        "4": [
            {
                "id": "es301",
                "code": "ES-401"
            },
            {
                "id": "ce402",
                "code": "CE-402"
            },
            {
                "id": "ce403",
                "code": "CE-403"
            },
            {
                "id": "ce404",
                "code": "CE-404"
            },
            {
                "id": "ce405",
                "code": "CE-405"
            }
        ],
        "5": [
            {
                "id": "me404",
                "code": "CE-501"
            },
            {
                "id": "ce502",
                "code": "CE-502"
            },
            {
                "id": "ce503a",
                "code": "CE-503(A)"
            },
            {
                "id": "ce504b",
                "code": "CE-504(B)"
            }
        ],
        "6": [
            {
                "id": "ce601",
                "code": "CE-601"
            },
            {
                "id": "ce602",
                "code": "CE-602"
            },
            {
                "id": "ce603a",
                "code": "CE-603(A)"
            },
            {
                "id": "me703-or",
                "code": "CE-604(D)"
            }
        ],
        "7": [
            {
                "id": "ce701",
                "code": "CE-701"
            },
            {
                "id": "ce702a",
                "code": "CE-702(A)"
            },
            {
                "id": "ce702b",
                "code": "CE-702(B)"
            },
            {
                "id": "cs801",
                "code": "CE-703(A)"
            }
        ],
        "8": [
            {
                "id": "ce801",
                "code": "CE-801"
            },
            {
                "id": "ce802b",
                "code": "CE-802(B)"
            },
            {
                "id": "ce802d",
                "code": "CE-802(D)"
            },
            {
                "id": "cs503",
                "code": "CE-803(B)"
            }
        ]
    },
    "ME": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "bt301",
                "code": "BT-301"
            },
            {
                "id": "me302",
                "code": "ME-302"
            },
            {
                "id": "me303",
                "code": "ME-303"
            },
            {
                "id": "me304",
                "code": "ME-304"
            },
            {
                "id": "me305",
                "code": "ME-305"
            }
        ],
        "4": [
            {
                "id": "es301",
                "code": "ES-401"
            },
            {
                "id": "me402",
                "code": "ME-402"
            },
            {
                "id": "me403",
                "code": "ME-403"
            },
            {
                "id": "me404",
                "code": "ME-404"
            },
            {
                "id": "me405",
                "code": "ME-405"
            }
        ],
        "5": [
            {
                "id": "me501",
                "code": "ME-501"
            },
            {
                "id": "me502",
                "code": "ME-502"
            },
            {
                "id": "me503-mt",
                "code": "ME-503(A)"
            },
            {
                "id": "au503-aaf",
                "code": "ME-503(C)"
            },
            {
                "id": "me504-fem",
                "code": "ME-504(C)"
            }
        ],
        "6": [
            {
                "id": "me601",
                "code": "ME-601"
            },
            {
                "id": "me602",
                "code": "ME-602"
            },
            {
                "id": "me603-tm",
                "code": "ME-603(A)"
            },
            {
                "id": "me604-rob",
                "code": "ME-604(A)"
            }
        ],
        "7": [
            {
                "id": "me701",
                "code": "ME-701"
            },
            {
                "id": "me702-ppe",
                "code": "ME-702(C)"
            },
            {
                "id": "cs801",
                "code": "ME-702(B)"
            },
            {
                "id": "me703-or",
                "code": "ME-703(A)"
            }
        ],
        "8": [
            {
                "id": "me801",
                "code": "ME-801"
            },
            {
                "id": "me802-ae",
                "code": "ME-802(A)"
            },
            {
                "id": "me803-eca",
                "code": "ME-803(B)"
            }
        ]
    },
    "AU": {
        "1": [
            {
                "id": "bt101",
                "code": "BT-101"
            },
            {
                "id": "bt102",
                "code": "BT-102"
            },
            {
                "id": "bt103",
                "code": "BT-103"
            },
            {
                "id": "bt104",
                "code": "BT-104"
            },
            {
                "id": "bt105",
                "code": "BT-105"
            }
        ],
        "2": [
            {
                "id": "bt201",
                "code": "BT-201"
            },
            {
                "id": "bt202",
                "code": "BT-202"
            },
            {
                "id": "bt203",
                "code": "BT-203"
            },
            {
                "id": "bt204",
                "code": "BT-204"
            },
            {
                "id": "bt205",
                "code": "BT-205"
            }
        ],
        "3": [
            {
                "id": "bt301",
                "code": "BT-301"
            },
            {
                "id": "me302",
                "code": "AU-302"
            },
            {
                "id": "me303",
                "code": "AU-303"
            },
            {
                "id": "me304",
                "code": "AU-304"
            },
            {
                "id": "me305",
                "code": "AU-305"
            }
        ],
        "4": [
            {
                "id": "es301",
                "code": "ES-401"
            },
            {
                "id": "me402",
                "code": "AU-402"
            },
            {
                "id": "me403",
                "code": "AU-403"
            },
            {
                "id": "me404",
                "code": "AU-404"
            },
            {
                "id": "me405",
                "code": "AU-405"
            }
        ],
        "5": [
            {
                "id": "au501",
                "code": "AU-501"
            },
            {
                "id": "au502",
                "code": "AU-502"
            },
            {
                "id": "au503-ats",
                "code": "AU-503(A)"
            },
            {
                "id": "au503-aaf",
                "code": "AU-503(C)"
            },
            {
                "id": "me503-mt",
                "code": "AU-504(C)"
            }
        ],
        "6": [
            {
                "id": "au601",
                "code": "AU-601"
            },
            {
                "id": "me602",
                "code": "AU-602"
            },
            {
                "id": "au603",
                "code": "AU-603"
            },
            {
                "id": "me604-rob",
                "code": "AU-604"
            }
        ],
        "7": [
            {
                "id": "me502",
                "code": "AU-701"
            },
            {
                "id": "me701",
                "code": "AU-702"
            },
            {
                "id": "au702",
                "code": "AU-703"
            },
            {
                "id": "au703",
                "code": "AU-704"
            }
        ],
        "8": [
            {
                "id": "au801",
                "code": "AU-801"
            },
            {
                "id": "au802",
                "code": "AU-802"
            },
            {
                "id": "me801",
                "code": "AU-803"
            }
        ]
    },
    "MT-CSE": {
        "1": [
            {
                "id": "mcse101",
                "code": "MCSE-101"
            },
            {
                "id": "mcse102",
                "code": "MCSE-102"
            },
            {
                "id": "mcse103",
                "code": "MCSE-103"
            },
            {
                "id": "mcse104",
                "code": "MCSE-104"
            }
        ],
        "2": [
            {
                "id": "mcse201",
                "code": "MCSE-201"
            },
            {
                "id": "mcse202",
                "code": "MCSE-202"
            },
            {
                "id": "mcse203",
                "code": "MCSE-203"
            },
            {
                "id": "mt-rm",
                "code": "MCSE-204"
            }
        ]
    },
    "MT-VLSI": {
        "1": [
            {
                "id": "mvl101",
                "code": "MVL-101"
            },
            {
                "id": "mvl102",
                "code": "MVL-102"
            },
            {
                "id": "mvl103",
                "code": "MVL-103"
            },
            {
                "id": "mvl104",
                "code": "MVL-104"
            }
        ],
        "2": [
            {
                "id": "mvl201",
                "code": "MVL-201"
            },
            {
                "id": "mvl202",
                "code": "MVL-202"
            },
            {
                "id": "mvl203",
                "code": "MVL-203"
            },
            {
                "id": "mt-rm",
                "code": "MVL-204"
            }
        ]
    },
    "MT-TH": {
        "1": [
            {
                "id": "mth101",
                "code": "MTH-101"
            },
            {
                "id": "mth102",
                "code": "MTH-102"
            },
            {
                "id": "mth103",
                "code": "MTH-103"
            },
            {
                "id": "mth104",
                "code": "MTH-104"
            }
        ],
        "2": [
            {
                "id": "mth201",
                "code": "MTH-201"
            },
            {
                "id": "mth202",
                "code": "MTH-202"
            },
            {
                "id": "mth203",
                "code": "MTH-203"
            },
            {
                "id": "mt-rm",
                "code": "MTH-204"
            }
        ]
    },
    "MT-ST": {
        "1": [
            {
                "id": "mst101",
                "code": "MST-101"
            },
            {
                "id": "mst102",
                "code": "MST-102"
            },
            {
                "id": "mst103",
                "code": "MST-103"
            },
            {
                "id": "mst104",
                "code": "MST-104"
            }
        ],
        "2": [
            {
                "id": "mst201",
                "code": "MST-201"
            },
            {
                "id": "me504-fem",
                "code": "MST-202"
            },
            {
                "id": "ce802d",
                "code": "MST-203"
            },
            {
                "id": "mt-rm",
                "code": "MST-204"
            }
        ]
    },
    "MT-PS": {
        "1": [
            {
                "id": "mps101",
                "code": "MPS-101"
            },
            {
                "id": "mps102",
                "code": "MPS-102"
            },
            {
                "id": "mps103",
                "code": "MPS-103"
            },
            {
                "id": "mps104",
                "code": "MPS-104"
            }
        ],
        "2": [
            {
                "id": "mps201",
                "code": "MPS-201"
            },
            {
                "id": "mps202",
                "code": "MPS-202"
            },
            {
                "id": "ex702b",
                "code": "MPS-203"
            },
            {
                "id": "mt-rm",
                "code": "MPS-204"
            }
        ]
    }
};
// <<MULTIBRANCH:END>>
