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
