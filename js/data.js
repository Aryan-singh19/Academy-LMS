const coursesData = [
    {
        id: 'cs601',
        title: 'Machine Learning',
        code: 'CS601',
        description: 'Teach machines to think, so you don\'t have to. Warning: Might lead to Skynet.',
        units: [
            { id: 'cs601-u1', unitNumber: 1, title: 'Introduction & Basics', topics: [{ id: 't1', title: 'Intro to ML, Scope & Limitations' }, { id: 't2', title: 'Regression Basics' }, { id: 't3', title: 'Math: Probability, Stats & Linear Algebra' }, { id: 't4', title: 'Convex Optimization' }, { id: 't5', title: 'Data Visualization' }, { id: 't6', title: 'Hypothesis Function & Testing' }, { id: 't7', title: 'Data Prep & Normalization' }, { id: 't8', title: 'Supervised vs Unsupervised Learning' }] },
            { id: 'cs601-u2', unitNumber: 2, title: 'Neural Networks Basics', topics: [{ id: 'u2t1', title: 'Linearity vs Non-linearity, Weights & Bias' }, { id: 'u2t2', title: 'Activation Functions (Sigmoid, ReLU)' }, { id: 'u2t3', title: 'Loss Function & Gradient Descent' }, { id: 'u2t4', title: 'Multilayer Network & Backpropagation' }, { id: 'u2t5', title: 'Unstable Gradients & Regularization' }, { id: 'u2t6', title: 'Auto Encoders & Hyperparameters' }] },
            { id: 'cs601-u3', unitNumber: 3, title: 'Convolutional Neural Networks', topics: [{id: 'u3t1', title: 'Intro to Computer Vision & Image Processing'}, {id: 'u3t2', title: 'Convolutional Layers & Filters'}, {id: 'u3t3', title: 'Pooling Layers & Strides'}, {id: 'u3t4', title: 'Famous Architectures (ResNet, VGG)'}] },
            { id: 'cs601-u4', unitNumber: 4, title: 'RNNs & Sequential Data', topics: [{id: 'u4t1', title: 'The Problem with Time & Sequential Data'}, {id: 'u4t2', title: 'Recurrent Neural Networks (RNNs)'}, {id: 'u4t3', title: 'LSTMs and Memory Cells'}] },
            { id: 'cs601-u5', unitNumber: 5, title: 'Advanced ML & Deployment', topics: [{id: 'u5t1', title: 'Generative Adversarial Networks (GANs)'}, {id: 'u5t2', title: 'Transformers & Large Language Models'}, {id: 'u5t3', title: 'Model Deployment (ONNX, Flask/FastAPI)'}] }
        ]
    },
    {
        id: 'cs602',
        title: 'Computer Networks',
        code: 'CS602',
        description: 'How to send memes globally in milliseconds without losing packets.',
        units: [
            { id: 'cs602-u1', unitNumber: 1, title: 'Network Basics & Architecture', topics: [{id: 'cn-u1t1', title: 'The OSI Model & TCP/IP Suite'}, {id: 'cn-u1t2', title: 'Physical Media & Data Link Layer'}] },
            { id: 'cs602-u2', unitNumber: 2, title: 'The Network Layer (Routing)', topics: [{id: 'cn-u2t1', title: 'IPv4 vs IPv6 Addressing'}, {id: 'cn-u2t2', title: 'Routing Algorithms (Dijkstra, Bellman-Ford)'}] },
            { id: 'cs602-u3', unitNumber: 3, title: 'Transport & Application Layers', topics: [{id: 'cn-u3t1', title: 'TCP vs UDP: The Delivery Drivers'}, {id: 'cn-u3t2', title: 'HTTP, DNS & The Web'}] },
            { id: 'cs602-u4', unitNumber: 4, title: 'Network Security & Cryptography', topics: [{id: 'cn-u4t1', title: 'Symmetric vs Asymmetric Encryption (RSA, AES)'}, {id: 'cn-u4t2', title: 'Firewalls, VPNs & IPSec'}] },
            { id: 'cs602-u5', unitNumber: 5, title: 'Wireless & Mobile Networks', topics: [{id: 'cn-u5t1', title: '802.11 Wi-Fi Standards'}, {id: 'cn-u5t2', title: 'Cellular Architecture (4G/5G) & Mobile IP'}] }
        ]
    },
    {
        id: 'cs603',
        title: 'Compiler Design',
        code: 'CS603',
        description: 'Translating human gibberish into machine gibberish.',
        units: [
            { id: 'cs603-u1', unitNumber: 1, title: 'Lexical Analysis', topics: [{id: 'c3-u1t1', title: 'Tokenization & Scanners'}, {id: 'c3-u1t2', title: 'Finite Automata (DFA/NFA)'}] },
            { id: 'cs603-u2', unitNumber: 2, title: 'Syntax Analysis', topics: [{id: 'c3-u2t1', title: 'Context-Free Grammars'}, {id: 'c3-u2t2', title: 'Top-Down vs Bottom-Up Parsing'}] },
            { id: 'cs603-u3', unitNumber: 3, title: 'Code Generation', topics: [{id: 'c3-u3t1', title: 'Intermediate Code & Optimization'}, {id: 'c3-u3t2', title: 'Target Machine Code'}] },
            { id: 'cs603-u4', unitNumber: 4, title: 'Symbol Tables & Error Handling', topics: [{id: 'c3-u4t1', title: 'Hash Table Implementations'}, {id: 'c3-u4t2', title: 'Panic-Mode Error Recovery'}] },
            { id: 'cs603-u5', unitNumber: 5, title: 'Advanced Optimization Techniques', topics: [{id: 'c3-u5t1', title: 'Data-Flow Analysis & Loop Unrolling'}, {id: 'c3-u5t2', title: 'Peephole Optimization & Dead Code Elimination'}] }
        ]
    },
    {
        id: 'cs604',
        title: 'Project Management',
        code: 'CS604',
        description: 'Herding cats, but with Gantt charts and deadlines.',
        units: [
            { id: 'cs604-u1', unitNumber: 1, title: 'Conventional Management', topics: [{id: 'c4-u1t1', title: 'Waterfall & SDLC'}, {id: 'c4-u1t2', title: 'Agile & Scrum Methodologies'}] },
            { id: 'cs604-u2', unitNumber: 2, title: 'Estimation & Scheduling', topics: [{id: 'c4-u2t1', title: 'COCOMO Model'}, {id: 'c4-u2t2', title: 'PERT & Gantt Charts'}] },
            { id: 'cs604-u3', unitNumber: 3, title: 'Risk Management', topics: [{id: 'c4-u3t1', title: 'Risk Identification & Assessment'}, {id: 'c4-u3t2', title: 'RMMM Plans (Mitigation)'}] },
            { id: 'cs604-u4', unitNumber: 4, title: 'Software Configuration Management', topics: [{id: 'c4-u4t1', title: 'Version Control (Git) & Baselines'}, {id: 'c4-u4t2', title: 'Change Control Boards (CCB)'}] },
            { id: 'cs604-u5', unitNumber: 5, title: 'Modern DevOps', topics: [{id: 'c4-u5t1', title: 'CI/CD Pipelines'}, {id: 'c4-u5t2', title: 'Docker & Microservices Architecture'}] }
        ]
    },
    {
        id: 'cs603-cg',
        title: 'Computer Graphics & Visualisation',
        code: 'CS603-CG',
        description: 'Making pretty pictures using a terrifying amount of math.',
        units: [
            { id: 'cs603-cg-u1', unitNumber: 1, title: '2D Graphics', topics: [{id: 'cg-u1t1', title: 'Raster Scan Displays & Bresenham Algorithm'}, {id: 'cg-u1t2', title: '2D Transformations (Translation, Rotation)'}] },
            { id: 'cs603-cg-u2', unitNumber: 2, title: '3D Graphics', topics: [{id: 'cg-u2t1', title: '3D Projections (Perspective vs Parallel)'}, {id: 'cg-u2t2', title: 'Hidden Surface Removal'}] },
            { id: 'cs603-cg-u3', unitNumber: 3, title: 'Illumination & Shading', topics: [{id: 'cg-u3t1', title: 'Light Sources (Ambient, Diffuse, Specular)'}, {id: 'cg-u3t2', title: 'Phong vs Gouraud Shading'}] },
            { id: 'cs603-cg-u4', unitNumber: 4, title: 'Curves & Surfaces', topics: [{id: 'cg-u4t1', title: 'Bezier Curves'}, {id: 'cg-u4t2', title: 'B-Spline & NURBS'}] },
            { id: 'cs603-cg-u5', unitNumber: 5, title: 'Animation & Rendering', topics: [{id: 'cg-u5t1', title: 'Keyframing & Kinematics'}, {id: 'cg-u5t2', title: 'Ray Tracing Fundamentals'}] }
        ]
    }
];

window.coursesData = coursesData;
// Ensure global object exists for dynamic data loaders
window.topicDetails = window.topicDetails || {};
