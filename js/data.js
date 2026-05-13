const coursesData = [
    {
        id: 'cs601',
        title: 'Machine Learning',
        code: 'CS601',
        description: 'Teach machines to think, so you don\'t have to. Warning: Might lead to Skynet.',
        units: [
            { 
                id: 'cs601-u1', 
                unitNumber: 1, 
                title: 'Introduction & Basics', 
                topics: [
                    { id: 't1', title: 'Intro to ML, Scope & Limitations' },
                    { id: 't2', title: 'Regression Basics' },
                    { id: 't3', title: 'Math: Probability, Stats & Linear Algebra' },
                    { id: 't4', title: 'Convex Optimization' },
                    { id: 't5', title: 'Data Visualization' },
                    { id: 't6', title: 'Hypothesis Function & Testing' },
                    { id: 't7', title: 'Data Prep & Normalization' },
                    { id: 't8', title: 'Supervised vs Unsupervised Learning' }
                ] 
            },
            { 
                id: 'cs601-u2', 
                unitNumber: 2, 
                title: 'Neural Networks Basics', 
                topics: [
                    { id: 'u2t1', title: 'Linearity vs Non-linearity, Weights & Bias' },
                    { id: 'u2t2', title: 'Activation Functions (Sigmoid, ReLU)' },
                    { id: 'u2t3', title: 'Loss Function & Gradient Descent' },
                    { id: 'u2t4', title: 'Multilayer Network & Backpropagation' },
                    { id: 'u2t5', title: 'Unstable Gradients & Regularization' },
                    { id: 'u2t6', title: 'Auto Encoders & Hyperparameters' }
                ] 
            },
            { 
                id: 'cs601-u3', 
                unitNumber: 3, 
                title: 'Convolutional Neural Networks', 
                topics: [
                    {id: 'u3t1', title: 'Intro to Computer Vision & Image Processing'},
                    {id: 'u3t2', title: 'Convolutional Layers & Filters'},
                    {id: 'u3t3', title: 'Pooling Layers & Strides'},
                    {id: 'u3t4', title: 'Famous Architectures (ResNet, VGG)'}
                ] 
            },
            { 
                id: 'cs601-u4', 
                unitNumber: 4, 
                title: 'RNNs & Sequential Data', 
                topics: [
                    {id: 'u4t1', title: 'The Problem with Time & Sequential Data'},
                    {id: 'u4t2', title: 'Recurrent Neural Networks (RNNs)'},
                    {id: 'u4t3', title: 'LSTMs and Memory Cells'}
                ] 
            },
            { 
                id: 'cs601-u5', 
                unitNumber: 5, 
                title: 'Advanced ML & Deployment', 
                topics: [
                    {id: 'u5t1', title: 'Generative Adversarial Networks (GANs)'},
                    {id: 'u5t2', title: 'Transformers & Large Language Models'},
                    {id: 'u5t3', title: 'Model Deployment (ONNX, Flask/FastAPI)'}
                ] 
            }
        ]
    },
    {
        id: 'cs602',
        title: 'Computer Networks',
        code: 'CS602',
        description: 'How to send memes globally in milliseconds without losing packets.',
        units: [
            { 
                id: 'cs602-u1', 
                unitNumber: 1, 
                title: 'Network Basics & Architecture', 
                topics: [
                    {id: 'cn-u1t1', title: 'The OSI Model & TCP/IP Suite'},
                    {id: 'cn-u1t2', title: 'Physical Media & Data Link Layer'}
                ] 
            },
            { 
                id: 'cs602-u2', 
                unitNumber: 2, 
                title: 'The Network Layer (Routing)', 
                topics: [
                    {id: 'cn-u2t1', title: 'IPv4 vs IPv6 Addressing'},
                    {id: 'cn-u2t2', title: 'Routing Algorithms (Dijkstra, Bellman-Ford)'}
                ] 
            },
            { 
                id: 'cs602-u3', 
                unitNumber: 3, 
                title: 'Transport & Application Layers', 
                topics: [
                    {id: 'cn-u3t1', title: 'TCP vs UDP: The Delivery Drivers'},
                    {id: 'cn-u3t2', title: 'HTTP, DNS & The Web'}
                ] 
            }
        ]
    },
    {
        id: 'cs603',
        title: 'Compiler Design',
        code: 'CS603',
        description: 'Translating human gibberish into machine gibberish.',
        units: [{ id: 'cs603-u1', unitNumber: 1, title: 'Lexical Analysis', topics: [{id: 'c3t1', title: 'Coming Soon'}] }]
    },
    {
        id: 'cs604',
        title: 'Project Management',
        code: 'CS604',
        description: 'Herding cats, but with Gantt charts and deadlines.',
        units: [{ id: 'cs604-u1', unitNumber: 1, title: 'Conventional Management', topics: [{id: 'c4t1', title: 'Coming Soon'}] }]
    },
    {
        id: 'cs603-cg',
        title: 'Computer Graphics & Visualisation',
        code: 'CS603-CG',
        description: 'Making pretty pictures using a terrifying amount of math.',
        units: [{ id: 'cs603-cg-u1', unitNumber: 1, title: 'Raster Scan Displays', topics: [{id: 'c5t1', title: 'Coming Soon'}] }]
    }
];

const topicDetails = {
    'cs601-u1': {
        't1': {
            title: 'Intro to ML, Scope & Limitations',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">What is Machine Learning?</h3>
<p class="mb-4">Imagine you have a toddler. You don't hand them a 400-page manual on "How to Identify a Dog." Instead, you point at a Golden Retriever and say "Doggy!" Then you point at a fire hydrant, and they say "Doggy!" and you say "No, that's a fire hydrant." Eventually, through thousands of painful corrections, they learn the difference.</p>
<p class="mb-4"><strong>Machine Learning (ML)</strong> is exactly this. Instead of explicitly programming rules (if ears == floppy and tail == wagging then return DOG), we feed the computer massive amounts of data and let it figure out the statistical patterns. Traditional programming is feeding rules and data to get answers. Machine Learning is feeding data and answers to get rules.</p>
<p class="mb-4">Let's go deeper. At its core, ML is just an algorithm trying to minimize an error function. It is constantly asking itself: "How badly did I mess up on the last guess, and how can I tweak my internal dials so I mess up slightly less on the next one?"</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg">
        <h4 class="text-green-400 font-bold mb-3 text-lg">Scope (The Good Stuff)</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Finding Invisible Patterns:</strong> Humans are bad at looking at a million rows of Excel data and finding the one correlation that predicts a stock market crash. ML models do this before breakfast.</li>
            <li><strong>Dynamic Adaptation:</strong> Unlike traditional software that remains static until a developer pushes an update, ML models can adapt to new data. If user behavior changes, your Netflix recommendations change organically.</li>
            <li><strong>Automation of the "Unprogrammable":</strong> How do you write an 'if' statement for recognizing a human face? You can't. ML allows us to automate things that defy rigid logical definition.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-red-500 shadow-lg">
        <h4 class="text-red-400 font-bold mb-3 text-lg">Limitations (The Bad Stuff)</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Garbage In, Garbage Out:</strong> Feed a model biased hiring data from the 1950s, and it will learn to reject women's resumes. Models don't have morals; they reflect the data.</li>
            <li><strong>The "Black Box" Problem:</strong> Neural networks are notoriously opaque. A medical ML model might accurately diagnose cancer 99% of the time, but when asked *why* it made that diagnosis, it just spits out a matrix of millions of numbers.</li>
            <li><strong>Data Hunger & Compute Costs:</strong> You need an absurd amount of data to train modern models. OpenAI didn't train ChatGPT on a couple of books; they fed it the entire internet. This requires massive server farms and millions of dollars in electricity.</li>
        </ul>
    </div>
</div>

<h3 class="text-xl font-bold mb-2 text-blue-400">The Core ML Workflow Diagram</h3>
<p class="mb-4 text-gray-400">This is the lifecycle every single Machine Learning project goes through, from a basic spam filter to a multi-billion dollar language model.</p>
<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    A[Collect Raw Data] -->|Messy, unstructured| B[Clean & Preprocess Data]
    B -->|Normalized, structured| C[Split Data: Train/Test]
    C --> D[Train Model on Training Set]
    D -->|Adjust Weights| E{Evaluate on Test Set}
    E -- Bad Accuracy -->|Tweak Hyperparameters| D
    E -- Good Accuracy --> F[Deploy to Production]
    style A fill:#2d3748,stroke:#4a5568,color:#fff
    style F fill:#38a169,stroke:#2f855a,color:#fff
    style E fill:#d69e2e,stroke:#b7791f,color:#fff
</div>
            `,
            quizzes: [
                {
                    question: "How does Machine Learning differ fundamentally from Traditional Programming?",
                    options: [
                        "A) Traditional programming requires electricity, ML does not.",
                        "B) In traditional programming, you input rules and data to get answers. In ML, you input data and answers to get the rules.",
                        "C) ML is just an 'if-else' statement written in Python instead of Java.",
                        "D) Traditional programming is faster at rendering 3D graphics."
                    ],
                    answer: 1,
                    explanation: "This is the classic definition by Arthur Samuel. ML systems learn the logic (rules) by observing the inputs and the desired outputs."
                },
                {
                    question: "What is the primary danger of the 'Garbage In, Garbage Out' limitation?",
                    options: [
                        "A) The computer's fan will clog with dust.",
                        "B) The model will refuse to compile.",
                        "C) A model trained on biased or flawed data will confidently make biased or flawed predictions.",
                        "D) The model will delete the bad data permanently from your hard drive."
                    ],
                    answer: 2,
                    explanation: "Models blindly trust the data. If the historical data contains human biases, the model will codify and automate those biases."
                }
            ]
        },
        't2': {
            title: 'Regression Basics',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Regression: Predicting the Future (Sort of)</h3>
<p class="mb-4">Regression is the statistical equivalent of drawing a straight line through a messy scatter plot of dots and pretending it perfectly explains the universe. It’s used to predict continuous, numeric values. If your goal is to answer "How much?" or "How many?", you are doing regression.</p>
<p class="mb-4">Think of predicting a house's price based on its square footage. You plot 100 houses on a graph (X-axis = size, Y-axis = price). You'll notice an upward trend. <strong>Linear Regression</strong> is the mathematical process of drawing the absolute best possible straight line through the center of those dots. Once you have that line, you can predict the price of a house that hasn't even been built yet, just by seeing where its size lands on your line.</p>

<h3 class="text-xl font-bold mb-2 text-blue-400">The Equation of Life (y = mx + c)</h3>
<p class="mb-4 text-gray-300">In Machine Learning, we usually write this as <code>h(x) = θ₀ + θ₁x</code>, but it's the exact same math you learned in 8th-grade algebra.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500 shadow-md">
    <li><strong>y (Dependent Variable):</strong> The thing you are desperately trying to predict (e.g., The stock price of Apple tomorrow).</li>
    <li><strong>x (Independent Variable / Feature):</strong> The data point you already know (e.g., The stock price of Apple today).</li>
    <li><strong>m (Slope / Weight / θ₁):</strong> The multiplier. How much does 'y' change for every single unit increase in 'x'? If this number is highly positive, the feature is a strong driving force.</li>
    <li><strong>c (Intercept / Bias / θ₀):</strong> The baseline. If 'x' was completely zero, what would 'y' be? Even a 0-square-foot house costs money because the land it sits on has value.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-blue-400">Linear vs Logistic: The Grand Divide</h3>
<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-4">Algorithm</th>
            <th class="p-4">Output Type</th>
            <th class="p-4">Example Scenario</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700">
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-semibold text-blue-300">Linear Regression</td>
            <td class="p-4">Continuous Numeric (Infinite possibilities)</td>
            <td class="p-4">"Based on these symptoms, the patient's blood pressure will be 142.5 mmHg."</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-semibold text-purple-300">Logistic Regression</td>
            <td class="p-4">Binary / Categorical (Usually 0 or 1)</td>
            <td class="p-4">"Based on these symptoms, the patient has a 92% probability of having the flu (Output: YES)."</td>
        </tr>
    </tbody>
</table>
<p class="text-sm text-gray-400 italic">Note: Despite having "Regression" in its name, Logistic Regression is actually used for Classification tasks. It's confusing, blame the statisticians.</p>
            `,
            quizzes: [
                {
                    question: "In the context of predicting house prices based on square footage, what does the 'intercept' (bias) represent?",
                    options: [
                        "A) The cost of the roof.",
                        "B) The base value of the property when square footage is theoretically zero (e.g., land value).",
                        "C) The rate at which the price increases per square foot.",
                        "D) A random error generated by the computer."
                    ],
                    answer: 1,
                    explanation: "The intercept is where the line crosses the Y-axis (when X=0). It acts as the baseline starting value before the weights of the features are applied."
                },
                {
                    question: "If you want to predict whether an email is Spam or Not Spam, should you use Linear Regression?",
                    options: [
                        "A) Yes, because emails have a continuous length.",
                        "B) No, because Linear Regression predicts continuous numbers, not distinct categories. Logistic Regression or a classifier is better.",
                        "C) Yes, because spam is a linear problem.",
                        "D) No, because Linear Regression can only be used on numerical datasets, and emails are text."
                    ],
                    answer: 1,
                    explanation: "Linear Regression would try to output a number like '0.78', but a line can stretch to infinity (e.g., predicting an email is '4500' spam). We need a model that squishes outputs into probabilities between 0 and 1, like Logistic Regression."
                }
            ]
        },
        't3': {
            title: 'Math: Probability, Stats & Linear Algebra',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Holy Trinity of ML Math</h3>
<p class="mb-4">You can't just throw data at a wall and hope a neural network sticks. Underneath the slick Python libraries (like TensorFlow and PyTorch), Machine Learning is basically a terrifying amount of matrix multiplication wearing a trench coat. If you want to understand *how* ML learns, you need to understand the three pillars of its religion.</p>

<div class="space-y-6 mb-8">
    <div class="bg-gray-800 p-6 border-l-4 border-red-500 rounded-r-xl shadow-lg hover:shadow-red-500/20 transition-all">
        <h4 class="text-xl font-bold text-red-400 mb-2">1. Linear Algebra (The Heavy Lifter)</h4>
        <p class="text-gray-300 text-sm mb-3">Think of a single cell in an Excel spreadsheet. That's a scalar. A single row is a Vector (1D array). The whole spreadsheet is a Matrix (2D array). A spreadsheet of spreadsheets is a Tensor (n-Dimensional array).</p>
        <p class="text-gray-300 text-sm"><strong>Why ML needs it:</strong> When a Neural Network processes a 4K image, it doesn't look at one pixel at a time (that would take years). It loads all 8 million pixels into a giant Matrix, multiplies it by another giant Matrix of "weights", and processes the whole image in milliseconds. GPUs are physically designed to do this specific type of math blindingly fast.</p>
    </div>
    
    <div class="bg-gray-800 p-6 border-l-4 border-green-500 rounded-r-xl shadow-lg hover:shadow-green-500/20 transition-all">
        <h4 class="text-xl font-bold text-green-400 mb-2">2. Probability (The Fortune Teller)</h4>
        <p class="text-gray-300 text-sm mb-3">Machine Learning rarely gives a 100% "Yes" or "No". It gives probabilities. If you ask an ML model "Is this a picture of a dog?", it replies: "I am 87% confident it is a dog, and 13% confident it is a fluffy mop."</p>
        <p class="text-gray-300 text-sm"><strong>Bayes' Theorem:</strong> This is the core of probability in ML. It’s the mathematical equation for changing your mind when you get new evidence. "I thought it was going to rain (prior belief), but I just looked outside and it's sunny (new evidence), so I probably don't need an umbrella (updated belief)."</p>
    </div>
    
    <div class="bg-gray-800 p-6 border-l-4 border-blue-500 rounded-r-xl shadow-lg hover:shadow-blue-500/20 transition-all">
        <h4 class="text-xl font-bold text-blue-400 mb-2">3. Statistics (The Bullshit Detector)</h4>
        <p class="text-gray-300 text-sm mb-3">Statistics tells us if our model is actually smart, or if it just memorized the answers to the test. We use statistics to measure how spread out our data is (Variance) and to understand where the "average" lies (Mean).</p>
        <p class="text-gray-300 text-sm">Without statistics, you might build a model that predicts the stock market perfectly for the year 2020, but completely fails in 2021 because it didn't learn the *trend*, it just memorized the *noise*.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why is Linear Algebra, specifically Matrix Multiplication, so critical for modern Deep Learning?",
                    options: [
                        "A) Because it is the only math that Python understands natively.",
                        "B) Because neural networks process massive amounts of data (like pixels or text) simultaneously, which is mathematically represented as matrix operations that GPUs can execute in parallel.",
                        "C) Because drawing straight lines requires matrices.",
                        "D) It isn't critical. Calculus is the only math used in ML."
                    ],
                    answer: 1,
                    explanation: "Deep learning involves multiplying huge arrays of numbers (inputs and weights). Linear algebra provides the mathematical framework for this, and GPUs provide the hardware acceleration for it."
                },
                {
                    question: "What is the primary role of Probability in Machine Learning outputs?",
                    options: [
                        "A) It guarantees that the model is always correct.",
                        "B) It determines the physical memory required to run the model.",
                        "C) It allows the model to quantify uncertainty, outputting confidence scores rather than absolute, rigid certainties.",
                        "D) It randomly deletes data to keep the model guessing."
                    ],
                    answer: 2,
                    explanation: "Real-world data is messy and uncertain. Probability allows models to express their predictions as a spectrum of confidence (e.g., 99% sure it's a cat) rather than breaking when they aren't 100% sure."
                }
            ]
        },
        't4': {
            title: 'Convex Optimization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Optimization: Rolling Down the Right Hill</h3>
<p class="mb-4">Training a Machine Learning model is basically an endless game of trying to minimize a <strong>Loss Function</strong>. The Loss Function is a mathematical score of how terribly your model is currently performing. A high score means your model is hallucinating; a score near zero means it's a genius.</p>
<p class="mb-4"><strong>Optimization</strong> is the mathematical process of tweaking your model's internal dials (weights and biases) to force that Loss score down to zero.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">The Blindfolded Hiker Metaphor</h3>
<p class="mb-4">Imagine you are blindfolded and dropped by helicopter onto a mountainous landscape. Your goal is to hike to the absolute lowest valley (the Global Minimum, where the Loss is lowest). Because you are blindfolded, you can only feel the slope of the ground beneath your feet. If the ground slopes down to the left, you take a step left.</p>
<p class="mb-4">This "feeling the slope" is called <strong>Gradient Descent</strong>.</p>
<p class="mb-4 text-gray-300 bg-gray-800 p-4 rounded-lg border-l-4 border-red-500 shadow-md">
<strong>The Nightmare (Non-Convex):</strong> If the landscape is a jagged mountain range, you might step down into a small ditch, feel that the ground goes up in all directions, and think "I made it! I'm at the bottom!" But you are trapped in a <em>Local Minimum</em>, completely unaware of the Grand Canyon just a mile away. Neural Networks live in this jagged nightmare.
</p>

<h3 class="text-xl font-bold mb-2 text-green-400">The Dream: A Convex Bowl</h3>
<p class="mb-4">A <strong>Convex Function</strong> is a mathematical landscape shaped exactly like a smooth, perfectly round cereal bowl. It only has ONE bottom. Period.</p>
<p class="mb-6">If your ML algorithm's Loss Function is convex, it means it doesn't matter where you drop the blindfolded hiker. No matter which direction they step, as long as they go down, they are mathematically guaranteed to reach the absolute lowest point in the universe (the Global Minimum). Algorithms like Linear Regression are beautifully convex.</p>

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    A[Start: High Loss] -->|Gradient Descent| B(Take a step downhill)
    B --> C{Are we at the bottom?}
    C -- No --> B
    C -- Yes --> D[Global Minimum Reached!]
    style A fill:#9b2c2c,stroke:#fc8181,color:#fff
    style D fill:#276749,stroke:#68d391,color:#fff
</div>
            `,
            quizzes: [
                {
                    question: "What is the defining, highly desirable characteristic of a Convex Function in optimization?",
                    options: [
                        "A) It has multiple local minimums, allowing the model to choose the best one.",
                        "B) It is completely flat.",
                        "C) It has exactly one global minimum, meaning optimization algorithms cannot get trapped in 'fake' bottoms.",
                        "D) It can only be processed by quantum computers."
                    ],
                    answer: 2,
                    explanation: "A convex function's 'bowl' shape guarantees that any local minimum you find is, in fact, the one and only global minimum. You can't get stuck in a ditch."
                },
                {
                    question: "In the blindfolded hiker metaphor of Gradient Descent, what does the 'altitude' (height) of the landscape represent?",
                    options: [
                        "A) The speed of the processor.",
                        "B) The accuracy of the model.",
                        "C) The Loss Function (error rate) of the model.",
                        "D) The amount of training data."
                    ],
                    answer: 2,
                    explanation: "The goal is to get to the lowest altitude. Therefore, altitude represents the Loss (error). As you step downhill, your error decreases."
                }
            ]
        },
        't5': {
            title: 'Data Visualization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Making Spreadsheets Look Pretty</h3>
<p class="mb-4">You can have the most accurate Machine Learning model in the world, but if you hand a CEO a giant CSV file with 10,000 numbers in it, they will stare at you blankly. <strong>Data Visualization</strong> is the art of translating raw, unreadable data into intuitive visual patterns.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">The Core Charts</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-yellow-500 shadow-lg transition-all hover:scale-105">
        <h4 class="text-yellow-400 font-bold mb-3 text-lg flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> Bar Charts</h4>
        <p class="text-gray-300 text-sm">Used for comparing categorical data. Example: "Which programming language causes the most crying?" (Spoiler: It's C++).</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500 shadow-lg transition-all hover:scale-105">
        <h4 class="text-blue-400 font-bold mb-3 text-lg flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg> Line Charts</h4>
        <p class="text-gray-300 text-sm">Used to show trends over time. Example: Tracking your slowly fading hope throughout the semester.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg transition-all hover:scale-105">
        <h4 class="text-green-400 font-bold mb-3 text-lg flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg> Scatter Plots</h4>
        <p class="text-gray-300 text-sm">Used to find correlations between two continuous variables. Essential for Linear Regression analysis.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg transition-all hover:scale-105">
        <h4 class="text-purple-400 font-bold mb-3 text-lg flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> Histograms</h4>
        <p class="text-gray-300 text-sm">Used for displaying the distribution of a single variable. "How many students got between 40-50 marks?"</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "If you want to visualize the relationship between 'Hours Studied' and 'Exam Score' to see if a positive correlation exists, which chart is best?",
                    options: ["A) Pie Chart", "B) Scatter Plot", "C) Histogram", "D) Bar Chart"],
                    answer: 1,
                    explanation: "A Scatter Plot maps two continuous numerical variables against each other, allowing you to instantly see correlations (like a cluster of dots moving diagonally upwards)."
                }
            ]
        },
        't6': {
            title: 'Hypothesis Function & Testing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Educated Guess</h3>
<p class="mb-4">In Machine Learning, the <strong>Hypothesis Function</strong> (often denoted as <code>h(x)</code>) is simply the mathematical formula your model is currently using to make predictions. When a model is "learning", it is just tweaking the numbers inside this hypothesis function.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Hypothesis Testing (Null vs Alternate)</h3>
<p class="mb-4">This is how statisticians argue. You start with the boring assumption that nothing interesting is happening (The Null Hypothesis). Then you look at data. If the data is weird enough, you reject the boring assumption.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-red-500 shadow-md">
    <li><strong>Null Hypothesis (H₀):</strong> "This new experimental AI algorithm is NO BETTER than our old algorithm."</li>
    <li><strong>Alternate Hypothesis (H₁):</strong> "The new AI algorithm is ACTUALLY BETTER than the old one."</li>
    <li><strong>p-value:</strong> The probability that you'd get these results by pure dumb luck. If p &lt; 0.05 (5%), we say the results are statistically significant, we throw away H₀, and pop the champagne.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In statistics, what does the Null Hypothesis (H₀) typically state?",
                    options: [
                        "A) That your new model is the best in the world.",
                        "B) That there is NO relationship, NO effect, or NO difference.",
                        "C) That data is normally distributed.",
                        "D) That the p-value is greater than 1."
                    ],
                    answer: 1,
                    explanation: "The Null Hypothesis is the default, skeptical position. It assumes there is no relationship between variables until the data overwhelmingly proves otherwise."
                }
            ]
        },
        't7': {
            title: 'Data Prep & Normalization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Janitorial Work of ML</h3>
<p class="mb-4">Data scientists spend 80% of their time cleaning data and 20% of their time complaining about cleaning data. Algorithms only understand numbers. If your dataset is full of blank spaces, typos, and text (like "Male", "Female"), the algorithm will simply crash.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Step 1: Handling Missing Data</h3>
<p class="mb-4 text-gray-300">If a row is missing a value, you have a few options:</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-800 p-4 rounded-lg">
    <li><strong>Drop it:</strong> If you have 10 million rows, deleting 5 rows with missing data is fine.</li>
    <li><strong>Mean Imputation:</strong> Replace the missing value with the average of that column. Good for normally distributed data.</li>
    <li><strong>Median Imputation:</strong> Better if the column has extreme outliers (e.g., estimating income in a room full of average people and Elon Musk).</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">Step 2: Normalization (Scaling)</h3>
<p class="mb-4">Imagine a dataset predicting house prices based on "Number of Bedrooms" (1 to 5) and "Square Footage" (1,000 to 5,000). To an algorithm, 5,000 is a MASSIVELY more important number than 5. It will completely ignore the bedrooms. <strong>Normalization</strong> forces all columns to play on the same field.</p>
<table class="w-full text-left border-collapse mb-6 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-inner">
    <thead class="bg-gray-800 text-gray-300">
        <tr>
            <th class="p-3">Technique</th>
            <th class="p-3">What it does</th>
        </tr>
    </thead>
    <tbody class="text-gray-400 text-sm divide-y divide-gray-800">
        <tr>
            <td class="p-3 text-purple-300">Min-Max Scaling</td>
            <td class="p-3">Squishes all values into a strict range exactly between <strong>0 and 1</strong>. Great for neural networks.</td>
        </tr>
        <tr>
            <td class="p-3 text-blue-300">Standardization (Z-Score)</td>
            <td class="p-3">Shifts the data so the Mean is 0 and the Standard Deviation is 1. Better if the data has wild outliers.</td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "Why is feature scaling (Normalization) necessary before training models like Neural Networks or KNN?",
                    options: [
                        "A) It makes the file size of the CSV smaller.",
                        "B) It ensures that features with vastly larger numerical ranges don't artificially dominate the learning process.",
                        "C) It translates text data into numerical data.",
                        "D) It increases the RAM required to train the model."
                    ],
                    answer: 1,
                    explanation: "Without scaling, an algorithm might think a 'House Size' of 2000 is 1000x more important than 'Number of Bathrooms' of 2, simply because the number is bigger."
                }
            ]
        },
        't8': {
            title: 'Supervised vs Unsupervised Learning',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Three Paradigms of AI</h3>
<p class="mb-6">Machine Learning is generally divided into three major categories based on *how* the data is presented to the algorithm.</p>

<div class="space-y-6 mb-8">
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-l-4 border-blue-500 rounded-lg shadow-md transition-transform hover:-translate-y-1">
        <h4 class="text-xl font-bold text-blue-400 mb-2">1. Supervised Learning (The Teacher)</h4>
        <p class="text-gray-300 text-sm mb-3">You provide the algorithm with a massive dataset where the <strong>Answers are already known (Labeled Data)</strong>.</p>
        <p class="text-gray-300 text-sm"><em>Analogy:</em> Giving a student a math textbook that has all the answers in the back. They try a problem, check the back of the book, realize they are wrong, and try again.</p>
        <p class="text-gray-400 text-xs mt-2 italic">Examples: Image Classification (Is this a cat?), Price Prediction.</p>
    </div>
    
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-l-4 border-purple-500 rounded-lg shadow-md transition-transform hover:-translate-y-1">
        <h4 class="text-xl font-bold text-purple-400 mb-2">2. Unsupervised Learning (The Explorer)</h4>
        <p class="text-gray-300 text-sm mb-3">You hand the algorithm a massive pile of data with <strong>NO answers (Unlabeled Data)</strong> and tell it to find hidden structures.</p>
        <p class="text-gray-300 text-sm"><em>Analogy:</em> Handing a child a massive bucket of mixed Lego pieces without instructions. They naturally start grouping them by color and size.</p>
        <p class="text-gray-400 text-xs mt-2 italic">Examples: Customer Segmentation (Clustering), Anomaly Detection (Credit Card Fraud).</p>
    </div>
    
    <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-l-4 border-green-500 rounded-lg shadow-md transition-transform hover:-translate-y-1">
        <h4 class="text-xl font-bold text-green-400 mb-2">3. Reinforcement Learning (The Gamer)</h4>
        <p class="text-gray-300 text-sm mb-3">There is no dataset. An "Agent" is dropped into an environment and given a goal. It performs actions, and receives either a <strong>Reward</strong> or a <strong>Penalty</strong>.</p>
        <p class="text-gray-300 text-sm"><em>Analogy:</em> Training a dog. Give paw = treat. Pee on rug = bad dog. Over time, the dog figures out the optimal policy to maximize treats.</p>
        <p class="text-gray-400 text-xs mt-2 italic">Examples: AI playing Chess/Go, Self-driving cars.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "If you have a dataset containing thousands of emails, but NONE of them are labeled as 'Spam' or 'Not Spam', which approach must you use to find patterns?",
                    options: [
                        "A) Supervised Learning",
                        "B) Unsupervised Learning",
                        "C) Reinforcement Learning",
                        "D) Linear Regression"
                    ],
                    answer: 1,
                    explanation: "Because there are no 'labels' (answers) provided, you must use Unsupervised Learning (like clustering) to see if the algorithm can group the emails based on similarities in their text."
                }
            ]
        }
    },
    'cs601-u2': {
        'u2t1': {
            title: 'Linearity vs Non-linearity, Weights & Bias',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Limits of Straight Lines</h3>
<p class="mb-4">Imagine trying to separate red apples from green apples on a table. If all the red apples are on the left and green on the right, you can just draw a straight line down the middle with a ruler. That's a <strong>Linear Problem</strong>. Linear regression and basic perceptrons are great at this.</p>
<p class="mb-4">Now imagine the red apples are arranged in a tight circle in the center of the table, surrounded by a ring of green apples. Try drawing a single straight line to separate them. You can't. You need to draw a circle. This is a <strong>Non-linear Problem</strong>.</p>
<p class="mb-4">The real world is aggressively non-linear. Speech recognition, image classification, and self-driving cars cannot be solved with straight lines. This is why we need Neural Networks.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Weights and Biases: The Dials of the Brain</h3>
<p class="mb-4">Inside a neural network, every connection between two artificial neurons has a <strong>Weight</strong> and every neuron has a <strong>Bias</strong>.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500 shadow-md">
    <li><strong>Weight (w):</strong> Think of this as the "Volume Knob" for an incoming signal. If a neuron detects a horizontal edge in an image, and horizontal edges are REALLY important for identifying a car, the network will turn the "weight" knob way up for that connection.</li>
    <li><strong>Bias (b):</strong> Think of this as the "Activation Threshold". It shifts the entire function up or down. Even if all incoming signals are zero, the bias allows the neuron to still output a value. It asks: "How easy should it be for this neuron to fire?"</li>
</ul>
<p class="mb-4 font-mono text-sm bg-gray-900 p-3 rounded text-green-400 text-center shadow-inner">Output = (Input × Weight) + Bias</p>
            `,
            quizzes: [
                {
                    question: "Why do real-world ML applications (like facial recognition) require non-linear solutions?",
                    options: [
                        "A) Because human faces are round, not square.",
                        "B) Because the data points in complex tasks cannot be cleanly separated or modeled using a single straight line or flat plane.",
                        "C) Because computers cannot render straight lines efficiently.",
                        "D) Because non-linear algorithms use less electricity."
                    ],
                    answer: 1,
                    explanation: "Real-world data is highly complex. You cannot separate 'Cat' pixels from 'Dog' pixels with a single straight line through a graph. You need complex, curving, non-linear boundaries."
                },
                {
                    question: "What is the best analogy for a 'Weight' in a neural network connection?",
                    options: [
                        "A) A volume knob that determines how loudly (how importantly) one neuron speaks to the next.",
                        "B) The amount of physical memory the network uses.",
                        "C) The bias threshold.",
                        "D) The speed of the GPU."
                    ],
                    answer: 0,
                    explanation: "Weights determine the strength or importance of a connection. A high weight means the input has a massive influence on the output."
                }
            ]
        },
        'u2t2': {
            title: 'Activation Functions (Sigmoid, ReLU)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Spark of Life: Activation Functions</h3>
<p class="mb-4">If a Neural Network was just a bunch of Neurons doing <code>(Input × Weight) + Bias</code>, then mathematically, the entire 100-layer network collapses into one giant, boring Linear Regression model. No matter how many straight lines you add together, you just get another straight line.</p>
<p class="mb-4"><strong>Activation Functions</strong> are the magical mathematical gates at the end of a neuron that inject <strong>Non-linearity</strong> into the network. They decide whether the neuron should "fire" (pass the signal along) or stay quiet, based on the input it received.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-6">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-4">Function</th>
            <th class="p-4">What it does</th>
            <th class="p-4">Pros & Cons</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700">
        <tr>
            <td class="p-4 font-bold text-blue-300">Sigmoid</td>
            <td class="p-4">Squishes any number, no matter how big or small, into a tiny range between <strong>0 and 1</strong>. Looks like an 'S' curve.</td>
            <td class="p-4">
                <span class="text-green-400">Pro:</span> Great for probabilities (0% to 100%).<br>
                <span class="text-red-400">Con:</span> Causes the "Vanishing Gradient" problem. It squishes big numbers so hard that learning stops.
            </td>
        </tr>
        <tr>
            <td class="p-4 font-bold text-purple-300">ReLU (Rectified Linear Unit)</td>
            <td class="p-4">If the number is negative, it outputs 0. If it's positive, it outputs the number itself. <code>max(0, x)</code></td>
            <td class="p-4">
                <span class="text-green-400">Pro:</span> Ridiculously fast to compute. Solves the Vanishing Gradient problem.<br>
                <span class="text-red-400">Con:</span> "Dying ReLU" problem. If a neuron outputs negative numbers, it gets stuck at 0 forever and effectively "dies".
            </td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "What is the primary mathematical purpose of an Activation Function in a neural network?",
                    options: [
                        "A) To speed up the internet connection during training.",
                        "B) To introduce non-linearity, allowing the network to learn complex, curving patterns instead of just straight lines.",
                        "C) To increase the voltage to the GPU.",
                        "D) To reset the weights to zero."
                    ],
                    answer: 1,
                    explanation: "Without activation functions, a 50-layer deep neural network is mathematically identical to a 1-layer linear regression model. Activation functions bend the lines."
                },
                {
                    question: "If a neuron using the ReLU activation function receives an input of -45, what will it output?",
                    options: [
                        "A) -45",
                        "B) 1",
                        "C) 0",
                        "D) 45"
                    ],
                    answer: 2,
                    explanation: "ReLU stands for Rectified Linear Unit. Its logic is simple: if the input is less than 0, output 0. If it's greater than 0, output the input. Since -45 is less than 0, it outputs 0."
                }
            ]
        },
        'u2t3': {
            title: 'Loss Function & Gradient Descent',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Cost of Being Wrong</h3>
<p class="mb-4">A Neural Network learns by making terrible guesses, getting yelled at, and adjusting. The "yelling" is done mathematically by the <strong>Loss Function</strong> (also called Cost Function). It calculates exactly how far off the network's prediction was from the actual true answer.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6">
    <li><strong>Mean Squared Error (MSE):</strong> Used for Regression. You take the difference between the prediction and reality, square it (so negatives don't cancel out positives, and big errors are punished severely), and average it.</li>
    <li><strong>Cross-Entropy Loss:</strong> Used for Classification. It heavily penalizes the model if it is highly confident about the wrong answer.</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">Gradient Descent: The Downhill Skiing</h3>
<p class="mb-4">Once we have a Loss score, we need to reduce it. We calculate the <em>Gradient</em> (the mathematical derivative/slope of the Loss function with respect to the weights). The gradient tells us which way is "up". We then update the weights by taking a small step in the <strong>opposite direction</strong> (downhill). This "step size" is controlled by the <strong>Learning Rate</strong>.</p>
            `,
            quizzes: [
                {
                    question: "What happens if your Learning Rate in Gradient Descent is set too high?",
                    options: [
                        "A) The model learns perfectly and instantly.",
                        "B) The model might overshoot the minimum, bouncing back and forth across the 'valley' and never converging.",
                        "C) The model will take millions of years to train.",
                        "D) The GPU will overheat."
                    ],
                    answer: 1,
                    explanation: "A high learning rate means taking massive steps. You might step right over the lowest point of the valley and end up higher on the other side, diverging instead of converging."
                }
            ]
        },
        'u2t4': {
            title: 'Multilayer Network & Backpropagation',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Going Deep: Hidden Layers</h3>
<p class="mb-4">A single neuron is a perceptron. It's weak. But if you arrange thousands of neurons into columns, and have the outputs of one column feed into the inputs of the next, you get a <strong>Multi-Layer Perceptron (MLP)</strong> or a Deep Neural Network.</p>
<p class="mb-4 text-gray-300 text-sm">The layers between the Input and Output are called <strong>Hidden Layers</strong> because the programmer doesn't explicitly tell them what to look for. The first hidden layer might learn to detect lines. The second layer combines lines into shapes. The third layer combines shapes into faces. It learns this hierarchy autonomously.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Backpropagation: The Rumor Mill</h3>
<p class="mb-4">Gradient descent is easy when you only have one weight. But how do you adjust a weight in Layer 1 based on an error that occurred in Layer 50? Enter <strong>Backpropagation</strong>.</p>
<p class="mb-4">It is a brilliant application of the <strong>Chain Rule</strong> from calculus. When the network makes a prediction (Forward Pass), we calculate the total Loss. Backprop then works backwards from the output, calculating the gradient of the loss for every single weight, layer by layer, distributing the "blame" for the error to the neurons that caused it.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary calculus rule that makes Backpropagation possible in deep networks?",
                    options: ["A) The Power Rule", "B) The Quotient Rule", "C) The Chain Rule", "D) L'Hôpital's Rule"],
                    answer: 2,
                    explanation: "The Chain Rule allows us to calculate the derivative of nested functions. Since a deep network is just a function of a function of a function, the chain rule is used to propagate the gradients backward."
                }
            ]
        },
        'u2t5': {
            title: 'Unstable Gradients & Regularization',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">When Networks Forget How to Learn</h3>
<p class="mb-4">Training a 100-layer deep neural network sounds cool, until the math blows up. Because Backpropagation relies on the Chain Rule, gradients (the error signals) are multiplied together repeatedly as they travel backwards from the output layer to the first layer.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-md">
        <h4 class="text-red-400 font-bold mb-2">The Vanishing Gradient</h4>
        <p class="text-gray-300 text-sm">If you multiply a bunch of numbers smaller than 1 together (like <code>0.1 × 0.1 × 0.1</code>), the result approaches zero rapidly. By the time the error signal reaches the first layer, the gradient is 0.000000001. The first layer learns nothing. The network stagnates.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-orange-500 shadow-md">
        <h4 class="text-orange-400 font-bold mb-2">The Exploding Gradient</h4>
        <p class="text-gray-300 text-sm">If you multiply a bunch of numbers larger than 1 together, the result approaches infinity. The weights swing wildly out of control, resulting in mathematical errors (NaN - Not a Number) crashing your program.</p>
    </div>
</div>

<h3 class="text-xl font-bold mb-2 text-purple-400">Regularization: Stopping the Overthinkers</h3>
<p class="mb-4">If a neural network is too big, it will <strong>Overfit</strong>. It stops learning general patterns and just literally memorizes the exact answers to the training data. Regularization is a way to penalize the network for being "too complex".</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>L1 Regularization (Lasso):</strong> Forces less important weights to become exactly ZERO, effectively deleting neurons that aren't useful.</li>
    <li><strong>L2 Regularization (Ridge):</strong> Forces weights to become very small, but rarely zero. Promotes a smooth, distributed network where all neurons contribute a little bit.</li>
    <li><strong class="text-blue-300">Dropout:</strong> During training, you literally turn off a random 20% to 50% of the neurons on every pass. This forces the remaining neurons to step up and learn robust features, rather than relying on a few "smart" neurons to do all the work.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "How does the 'Dropout' technique help prevent Overfitting in Neural Networks?",
                    options: [
                        "A) It deletes the training data so the network has less to learn.",
                        "B) It randomly disables a percentage of neurons during training, forcing the network to learn redundant and robust representations instead of relying on a few highly-weighted paths.",
                        "C) It drops the learning rate to zero.",
                        "D) It prevents the GPU from overheating by dropping the voltage."
                    ],
                    answer: 1,
                    explanation: "Dropout acts like a harsh teacher who randomly kicks students out of a group project, forcing everyone else to actually learn the material instead of relying on the one smart kid."
                }
            ]
        },
        'u2t6': {
            title: 'Auto Encoders & Hyperparameters',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Autoencoders: The Art of Compression</h3>
<p class="mb-4">An <strong>Autoencoder</strong> is a fascinating type of Unsupervised Neural Network. Its only goal is to output the exact same thing it was given as input. Why is that useful? Because the network is shaped like an hourglass.</p>
<p class="mb-4 text-gray-300 bg-gray-800 p-4 rounded-lg shadow-inner">
To get a 4K image through the tiny "bottleneck" in the middle of the network, the <strong>Encoder</strong> half has to compress the image into a highly dense mathematical summary (called the Latent Space). The <strong>Decoder</strong> half then has to decompress that summary back into the original 4K image.
</p>
<p class="mb-6">Once trained, you can throw away the Decoder, and use the Encoder as an incredibly powerful data compression and feature extraction tool.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Hyperparameters: The Dials Outside the Brain</h3>
<p class="mb-4"><strong>Parameters</strong> (like Weights and Biases) are learned automatically by the model during training. <strong>Hyperparameters</strong> are the dials that YOU (the human) have to set manually *before* training begins.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-4">Hyperparameter</th>
            <th class="p-4">What it controls</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700">
        <tr>
            <td class="p-4 font-bold text-blue-300">Learning Rate</td>
            <td class="p-4">How big of a step the gradient descent algorithm takes. Too high = chaos. Too low = takes millions of years.</td>
        </tr>
        <tr>
            <td class="p-4 font-bold text-purple-300">Batch Size</td>
            <td class="p-4">How many images/records the network looks at before it updates its weights. (e.g., look at 32 images, calculate average error, take a step).</td>
        </tr>
        <tr>
            <td class="p-4 font-bold text-green-300">Epochs</td>
            <td class="p-4">How many times the network will look at the ENTIRE dataset. Doing 100 epochs means the network sees every image 100 times.</td>
        </tr>
        <tr>
            <td class="p-4 font-bold text-yellow-300">Network Architecture</td>
            <td class="p-4">The number of hidden layers, and the number of neurons per layer.</td>
        </tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "What is the difference between a Parameter and a Hyperparameter?",
                    options: [
                        "A) Parameters are for Linear Regression, Hyperparameters are for Neural Networks.",
                        "B) Parameters (like weights) are learned automatically by the model during training. Hyperparameters (like learning rate) must be set manually by the programmer before training starts.",
                        "C) Hyperparameters take up more RAM.",
                        "D) There is no difference."
                    ],
                    answer: 1,
                    explanation: "Hyperparameters are the architectural choices and training settings you decide on. Parameters are the internal math variables the machine tweaks itself."
                }
            ]
        }
    },
    'cs601-u3': {
        'u3t1': {
            title: 'Intro to Computer Vision & Image Processing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Teaching Computers to See</h3>
<p class="mb-4">For decades, humans tried to teach computers to recognize objects by writing explicit rules. "If you see two circles above a triangle, it's a face." This worked terribly because a face turned sideways broke the code. <strong>Computer Vision (CV)</strong> was revolutionized when we stopped writing rules and started using Neural Networks.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Images are just Tensors</h3>
<p class="mb-4 text-gray-300">To a computer, a picture is not a picture. It is a massive spreadsheet of numbers. A 1000x1000 pixel color image is mathematically represented as a <strong>Tensor of shape (1000, 1000, 3)</strong>. The '3' represents the Red, Green, Blue (RGB) color channels. Every single pixel is a number from 0 to 255.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-lg mb-6">
    <h4 class="text-yellow-400 font-bold mb-2">The Problem with Standard Neural Networks</h4>
    <p class="text-gray-300 text-sm">If you flatten a 1000x1000x3 image into a single 1D array to feed into a standard dense Neural Network, you get 3,000,000 inputs. If the first hidden layer has 1,000 neurons, you instantly have <strong>3 BILLION weights</strong> to train just in the first layer. The network will be too slow and will instantly overfit. We need something smarter: The Convolutional Neural Network (CNN).</p>
</div>
            `,
            quizzes: [
                {
                    question: "Why do traditional dense Neural Networks fail at processing high-resolution images?",
                    options: [
                        "A) They cannot process colors, only black and white.",
                        "B) Flattening an image destroys its spatial structure, and creates an absurdly high number of weights that require impossible amounts of compute power.",
                        "C) They learn too fast and skip over the details.",
                        "D) Images do not have a loss function."
                    ],
                    answer: 1,
                    explanation: "A standard neural network connects every pixel to every neuron. For large images, this causes a combinatorial explosion of weights, making training impossible."
                }
            ]
        },
        'u3t2': {
            title: 'Convolutional Layers & Filters',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Magic Flashlight (Filters)</h3>
<p class="mb-4">Instead of looking at the whole image at once, a <strong>Convolutional Layer</strong> looks at a tiny patch of the image (e.g., a 3x3 square). It slides a <strong>Filter</strong> (or Kernel) across the image from left to right, top to bottom. This sliding action is called a Convolution.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>What is a Filter?</strong> A filter is just a tiny 3x3 matrix of numbers. When it slides over the image, it multiplies its numbers with the pixel values underneath it.</li>
    <li><strong>Feature Extraction:</strong> Different filters detect different things. One filter might be mathematically tuned to detect horizontal edges. Another might detect vertical edges. As you go deeper into the network, filters start detecting complex shapes like eyes or wheels.</li>
    <li><strong>Weight Sharing:</strong> Instead of learning a separate weight for every single pixel, the network only learns the 9 weights inside the 3x3 filter. It then uses that SAME filter across the entire image. This reduces the number of parameters from billions to thousands!</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the primary advantage of 'Weight Sharing' in a Convolutional Layer?",
                    options: [
                        "A) It allows the network to share weights with other computers over the internet.",
                        "B) It drastically reduces the number of parameters the network needs to learn, making image processing computationally feasible.",
                        "C) It increases the file size of the image.",
                        "D) It converts the image into a 1D array."
                    ],
                    answer: 1,
                    explanation: "By sliding the exact same 3x3 filter across the entire image, the network only needs to learn 9 weights, instead of learning millions of weights for every single pixel position."
                }
            ]
        },
        'u3t3': {
            title: 'Pooling Layers & Strides',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Shrinking the Image Down</h3>
<p class="mb-4">As a Convolutional Neural Network processes an image, it creates dozens or hundreds of "Feature Maps" (one map for every filter used). If we don't shrink these maps down, the network will quickly run out of memory. This is where <strong>Pooling Layers</strong> and <strong>Strides</strong> come in.</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">Strides: Skipping Pixels</h3>
<p class="mb-4 text-gray-300">Normally, a filter slides over the image one pixel at a time (Stride = 1). If we set the Stride to 2, the filter skips every other pixel. This instantly cuts the size of the resulting feature map in half, forcing the network to focus on broader, more generalized patterns.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Pooling: Keeping Only the Best Stuff</h3>
<p class="mb-4">A Pooling layer looks at a small window (like a 2x2 grid) and summarizes it into a single number. It aggressively downsamples the image.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500 shadow-md">
    <li><strong>Max Pooling:</strong> Looks at the 4 pixels in a 2x2 grid and only keeps the HIGHEST value. It essentially asks: "Did any pixel in this area strongly detect a feature? If yes, keep that signal, throw away the rest." This is the most popular type of pooling.</li>
    <li><strong>Average Pooling:</strong> Takes the mathematical average of the 4 pixels. It's smoother, but sometimes dulls important, sharp signals.</li>
</ul>

<div class="bg-gray-900 p-4 border border-gray-700 rounded text-center mb-6 shadow-inner">
    <p class="text-gray-400 text-sm"><em>Why does this matter?</em> Pooling gives the network <strong>Translation Invariance</strong>. If a network learns to detect a cat's eye in the top left corner, Max Pooling ensures it will still recognize that eye even if the cat shifts slightly to the right in the next frame.</p>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary function of a Max Pooling layer in a CNN?",
                    options: [
                        "A) To increase the resolution of the image to 4K.",
                        "B) To drastically reduce the spatial dimensions of the data while keeping the most prominent features, thus reducing computation and preventing overfitting.",
                        "C) To convert the image into black and white.",
                        "D) To pool memory across multiple GPUs."
                    ],
                    answer: 1,
                    explanation: "Max Pooling shrinks the image by taking only the 'loudest' signals from small grids, throwing away unnecessary redundant pixels."
                }
            ]
        },
        'u3t4': {
            title: 'Famous Architectures (ResNet, VGG)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Standing on the Shoulders of Giants</h3>
<p class="mb-4">You rarely need to design a CNN architecture from scratch. In the 2010s, researchers competed in the <strong>ImageNet Challenge</strong> (trying to classify 1 million images into 1,000 categories). The winners of this competition open-sourced their network architectures, and we still use them today.</p>

<div class="space-y-6 mb-8">
    <div class="bg-gray-800 p-6 border-t-4 border-yellow-500 rounded-b-xl shadow-lg hover:shadow-yellow-500/20 transition-all">
        <h4 class="text-xl font-bold text-yellow-400 mb-2">VGG (Visual Geometry Group)</h4>
        <p class="text-gray-300 text-sm mb-3">Created in 2014 by Oxford. Before VGG, people used massive, clunky 11x11 filters. VGG proved that using a deep stack of very tiny <strong>3x3 filters</strong> is mathematically better and more efficient. VGG-16 (16 layers deep) became the industry standard because of its elegant simplicity.</p>
    </div>
    
    <div class="bg-gray-800 p-6 border-t-4 border-blue-500 rounded-b-xl shadow-lg hover:shadow-blue-500/20 transition-all">
        <h4 class="text-xl font-bold text-blue-400 mb-2">ResNet (Residual Networks)</h4>
        <p class="text-gray-300 text-sm mb-3">Created by Microsoft in 2015. They tried to build a 152-layer deep network, but hit the "Vanishing Gradient" problem hard—the network just forgot how to learn. Their genius solution was the <strong>Skip Connection</strong>.</p>
        <p class="text-gray-300 text-sm">Instead of forcing data to go through every single layer, ResNet allows data to "skip" over layers and jump further down the network. This gives the gradient a superhighway to flow backward during training, completely solving the vanishing gradient problem and allowing for insanely deep networks.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What specific problem did ResNet's 'Skip Connections' solve, allowing networks to be hundreds of layers deep?",
                    options: [
                        "A) It solved the issue of not having enough RAM.",
                        "B) It solved the Vanishing Gradient problem by giving error signals a direct path to flow backwards without being multiplied down to zero.",
                        "C) It allowed the network to skip over broken pixels in an image.",
                        "D) It skipped the compilation step in Python."
                    ],
                    answer: 1,
                    explanation: "Skip connections act like a bypass lane on a highway. If the main road (a layer) is useless, the data just skips it, preserving the signal strength."
                }
            ]
        }
    },
    'cs601-u4': {
        'u4t1': {
            title: 'The Problem with Time & Sequential Data',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Remembering the Past</h3>
<p class="mb-4">Standard Neural Networks and CNNs have a massive flaw: <strong>Amnesia</strong>. When you feed an image into a CNN, it processes it and forgets it instantly. If you feed it a second image, it treats it as a completely independent event.</p>
<p class="mb-4">This works fine for classifying static photos of dogs. But what if you are analyzing a video? Or reading a sentence? In the sentence <em>"I grew up in France, so I speak fluent ____,"</em> you only know the answer is "French" because you remember the word "France" from earlier in the sequence.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg mb-6">
    <h4 class="text-purple-400 font-bold mb-2 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Time-Series Data</h4>
    <p class="text-gray-300 text-sm">Any data where the order of events matters is sequential data. Examples include:</p>
    <ul class="list-disc pl-5 mt-2 text-sm text-gray-400 space-y-1">
        <li>Stock market prices (The price today depends on yesterday).</li>
        <li>Weather forecasting.</li>
        <li>Natural Language Processing (Text is just a sequence of words).</li>
        <li>DNA Sequences.</li>
    </ul>
</div>
            `,
            quizzes: [
                {
                    question: "Why can't a standard Convolutional Neural Network (CNN) easily translate a paragraph of text?",
                    options: [
                        "A) Because CNNs only understand numbers, not text.",
                        "B) Because CNNs have no internal memory state to remember words that came earlier in the paragraph; they treat every input independently.",
                        "C) Because text cannot be flattened into a 1D array.",
                        "D) Because CNNs are too fast."
                    ],
                    answer: 1,
                    explanation: "Without a mechanism to pass information from the 'past' (previous words) to the 'present' (current word), networks cannot understand context or grammar."
                }
            ]
        },
        'u4t2': {
            title: 'Recurrent Neural Networks (RNNs)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Loop of Memory</h3>
<p class="mb-4">A <strong>Recurrent Neural Network (RNN)</strong> solves the amnesia problem by adding a loop. When an RNN processes data at "Time Step 1", it generates an output, but it also generates a <strong>Hidden State</strong> (a memory vector). It then passes this Hidden State forward to itself for "Time Step 2".</p>

<p class="mb-4 text-gray-300">At Time Step 2, the network makes a decision based on TWO things:</p>
<ol class="list-decimal pl-5 space-y-2 text-gray-300 text-sm mb-6 font-mono bg-gray-900 p-4 rounded border border-gray-700">
    <li>The new data it just received.</li>
    <li>The Hidden State (memory) it received from Time Step 1.</li>
</ol>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-lg mb-6">
    <h4 class="text-red-400 font-bold mb-2">The Tragic Flaw of Standard RNNs</h4>
    <p class="text-gray-300 text-sm">RNNs sound perfect, but they suffer terribly from the <strong>Vanishing Gradient Problem</strong>. Because the network loops over and over, the math multiplies the gradient hundreds of times. Within just 5 or 6 time steps, the gradient vanishes. <br><br><strong>Translation:</strong> Standard RNNs have a terrible short-term memory. They can remember the beginning of a short sentence, but if you give them a whole paragraph, they completely forget what the first sentence was about.</p>
</div>
            `,
            quizzes: [
                {
                    question: "In an RNN, what is the 'Hidden State'?",
                    options: [
                        "A) A secret layer of neurons that the programmer cannot access.",
                        "B) A vector of information generated at time 't' that is passed forward to time 't+1', acting as the network's short-term memory.",
                        "C) The final output of the network.",
                        "D) The bias weight."
                    ],
                    answer: 1,
                    explanation: "The hidden state is the core mechanism of recurrence. It is the memo the network writes to its future self."
                }
            ]
        },
        'u4t3': {
            title: 'LSTMs and Memory Cells',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Long Short-Term Memory (LSTM)</h3>
<p class="mb-4">To fix the short-term amnesia of standard RNNs, researchers invented the <strong>LSTM</strong>. An LSTM is a highly complex RNN cell that acts like a computer's RAM. It explicitly decides what information to keep, and what to throw away.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">The Three Gates</h3>
<p class="mb-4 text-gray-300">An LSTM cell contains three distinct mathematical "gates" (usually powered by Sigmoid activation functions that output a number between 0 and 1, acting as a valve).</p>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-red-400">1. Forget Gate:</strong> Looks at the new data and the old memory. Decides what irrelevant past information to delete. (e.g., If the text suddenly shifts from talking about "Alice" to "Bob", it forgets Alice's gender pronoun).</li>
    <li><strong class="text-blue-400">2. Input Gate:</strong> Looks at the new data and decides what new information is important enough to write into the cell's long-term memory.</li>
    <li><strong class="text-green-400">3. Output Gate:</strong> Decides what part of the internal long-term memory should be output as the actual prediction for this current time step.</li>
</ul>

<div class="mermaid bg-gray-800 p-6 rounded-lg mb-6 flex justify-center shadow-inner">
graph LR
    A[Past Memory] --> B(Forget Gate)
    C[New Input] --> B
    C --> D(Input Gate)
    B --> E[Update Memory Core]
    D --> E
    E --> F(Output Gate)
    F --> G[New Output & Future Memory]
    style B fill:#742a2a,stroke:#fc8181
    style D fill:#2b6cb0,stroke:#63b3ed
    style F fill:#276749,stroke:#68d391
</div>
            `,
            quizzes: [
                {
                    question: "What is the specific role of the 'Forget Gate' in an LSTM cell?",
                    options: [
                        "A) It deletes the entire neural network to free up RAM.",
                        "B) It randomly drops out neurons to prevent overfitting.",
                        "C) It mathematically decides which pieces of historical information in the memory cell are no longer relevant and should be erased.",
                        "D) It prevents the network from learning."
                    ],
                    answer: 2,
                    explanation: "By using a sigmoid layer (outputting 0 to 1), the forget gate acts as a multiplier. If it outputs 0 for a specific memory feature, that feature is completely erased (multiplied by zero)."
                }
            ]
        }
    },
    'cs601-u5': {
        'u5t1': {
            title: 'Generative Adversarial Networks (GANs)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Counterfeiter and the Cop</h3>
<p class="mb-4">Most Neural Networks are designed to <em>classify</em> things (e.g., "This is a cat"). <strong>Generative Adversarial Networks (GANs)</strong> are designed to <em>create</em> things (e.g., "Draw a new picture of a cat that has never existed").</p>

<p class="mb-4">A GAN is actually TWO neural networks locked in a fight to the death:</p>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-red-400">The Generator (The Counterfeiter):</strong> Its job is to take random mathematical noise and generate fake data (like a fake image of a human face) that looks as realistic as possible.</li>
    <li><strong class="text-blue-400">The Discriminator (The Cop):</strong> Its job is to look at a mix of real images and the Generator's fake images, and guess which ones are fake.</li>
</ul>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-lg mb-6">
    <h4 class="text-yellow-400 font-bold mb-2">The Training Loop</h4>
    <p class="text-gray-300 text-sm">When training starts, the Generator is terrible. It just outputs TV static. The Discriminator easily catches it. But through backpropagation, the Generator learns *why* it was caught and improves. Eventually, the Generator becomes so incredibly good at creating fake images that the Discriminator's accuracy drops to 50% (meaning it is just purely guessing because the fakes are flawless).</p>
</div>
            `,
            quizzes: [
                {
                    question: "In a GAN, what is the ultimate goal of the Generator network?",
                    options: [
                        "A) To classify images with 100% accuracy.",
                        "B) To fool the Discriminator into classifying its fake data as real data.",
                        "C) To catch the Discriminator making mistakes.",
                        "D) To reduce the file size of an image."
                    ],
                    answer: 1,
                    explanation: "The Generator 'wins' the adversarial game when the Discriminator can no longer tell the difference between the Generator's output and reality."
                }
            ]
        },
        'u5t2': {
            title: 'Transformers & Large Language Models',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Attention is All You Need</h3>
<p class="mb-4">In 2017, Google researchers published a paper called "Attention is All You Need", introducing the <strong>Transformer</strong> architecture. This killed the RNN and birthed the modern AI era (including ChatGPT).</p>

<h3 class="text-xl font-bold mb-2 text-purple-400">The Problem with RNNs</h3>
<p class="mb-4 text-gray-300">RNNs read text sequentially (Word 1, then Word 2, then Word 3). This means they cannot be trained in parallel on GPUs, making them incredibly slow. Transformers process the ENTIRE sequence at once.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg mb-6">
    <h4 class="text-green-400 font-bold mb-2">Self-Attention</h4>
    <p class="text-gray-300 text-sm">How does a Transformer understand grammar if it reads everything at once? The <strong>Self-Attention Mechanism</strong>. When the network reads the word "bank", it mathematically queries every other word in the sentence to figure out the context. If it sees "river", it knows "bank" means land. If it sees "money", it knows "bank" means finance. It creates a massive matrix of relationships between every single word simultaneously.</p>
</div>
            `,
            quizzes: [
                {
                    question: "What is the massive computational advantage Transformers have over RNNs?",
                    options: [
                        "A) Transformers do not use mathematics.",
                        "B) Transformers process sequences sequentially, saving RAM.",
                        "C) Transformers process the entire sequence simultaneously, allowing for massive parallelization on modern GPUs.",
                        "D) Transformers only work on images."
                    ],
                    answer: 2,
                    explanation: "Because there is no sequential bottleneck (waiting for word 1 to finish before processing word 2), Transformers can be trained on massive clusters of GPUs simultaneously, leading to models trained on the entire internet."
                }
            ]
        },
        'u5t3': {
            title: 'Model Deployment (ONNX, Flask/FastAPI)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Getting Out of the Jupyter Notebook</h3>
<p class="mb-4">A model sitting in a Python notebook is useless to the real world. <strong>Deployment (MLOps)</strong> is the engineering process of taking your trained model and putting it on a server so other applications can use it.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-blue-400">ONNX (Open Neural Network Exchange):</strong> If you train a model in PyTorch (Python), but your company's high-speed servers run C++, you have a problem. ONNX is a universal file format. You convert your PyTorch model to an <code>.onnx</code> file, and you can run it in C++, Java, or even Javascript in a browser!</li>
    <li><strong class="text-green-400">FastAPI:</strong> The modern standard for deploying Python models. You wrap your model in an API endpoint. A user's mobile app sends a photo to your <code>/predict</code> URL via HTTP, your server runs the model, and returns a JSON response: <code>{"classification": "hotdog", "confidence": 0.99}</code>.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What problem does the ONNX format solve?",
                    options: [
                        "A) It prevents the model from overfitting.",
                        "B) It serves as an interoperable standard, allowing models trained in one framework (like PyTorch) to be run in completely different languages or hardware environments.",
                        "C) It makes the model train faster.",
                        "D) It generates training data automatically."
                    ],
                    answer: 1,
                    explanation: "ONNX breaks vendor lock-in. You can train in Python and deploy in Rust or C# seamlessly."
                }
            ]
        }
    },
    'cs602-u1': {
        'cn-u1t1': {
            title: 'The OSI Model & TCP/IP Suite',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The 7-Layer Dip of the Internet</h3>
<p class="mb-4">Imagine trying to send a letter, but instead of just dropping it in a mailbox, you have to translate it into binary, chop it into a million pieces, shoot it through a glass tube using lasers across the ocean, and then magically reassemble it in the correct order in a fraction of a second. This is Computer Networks.</p>

<p class="mb-4">To manage this insane complexity, the industry created the <strong>OSI Model</strong>—a conceptual framework that breaks networking down into 7 distinct layers. When you send an email, it starts at Layer 7 on your computer and travels *down* the layers, goes across the physical wire, and then travels *up* the 7 layers on the receiving computer.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Layer</th>
            <th class="p-3">Name</th>
            <th class="p-3">What it handles</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3 font-bold text-red-400">7</td><td class="p-3 font-bold text-red-400">Application</td><td class="p-3">HTTP, DNS, SMTP. The actual apps you use (Chrome, Outlook).</td></tr>
        <tr><td class="p-3 text-orange-400">6</td><td class="p-3 text-orange-400">Presentation</td><td class="p-3">Data formatting, Encryption (SSL/TLS), JPEG/ASCII.</td></tr>
        <tr><td class="p-3 text-yellow-400">5</td><td class="p-3 text-yellow-400">Session</td><td class="p-3">Establishing, maintaining, and terminating connections.</td></tr>
        <tr><td class="p-3 font-bold text-green-400">4</td><td class="p-3 font-bold text-green-400">Transport</td><td class="p-3">TCP/UDP. Port numbers. Ensures reliable delivery.</td></tr>
        <tr><td class="p-3 font-bold text-blue-400">3</td><td class="p-3 font-bold text-blue-400">Network</td><td class="p-3">IP Addresses. Routers. Finding the best path across the globe.</td></tr>
        <tr><td class="p-3 font-bold text-indigo-400">2</td><td class="p-3 font-bold text-indigo-400">Data Link</td><td class="p-3">MAC Addresses. Switches. Moving frames across a local network.</td></tr>
        <tr><td class="p-3 font-bold text-purple-400">1</td><td class="p-3 font-bold text-purple-400">Physical</td><td class="p-3">Cables, Fiber Optics, Radio waves (Wi-Fi). 1s and 0s.</td></tr>
    </tbody>
</table>

<div class="bg-gray-900 p-4 border border-gray-700 rounded text-sm text-gray-400 shadow-inner">
    <em>Mnemonic to remember the layers (bottom to top):</em> Please Do Not Throw Sausage Pizza Away.
</div>
            `,
            quizzes: [
                {
                    question: "Which layer of the OSI model is responsible for logical addressing (IP addresses) and routing packets across multiple networks?",
                    options: [
                        "A) Layer 2: Data Link",
                        "B) Layer 3: Network",
                        "C) Layer 4: Transport",
                        "D) Layer 7: Application"
                    ],
                    answer: 1,
                    explanation: "Layer 3 (Network) handles IP addresses and routers. Think of it as the postal service determining which highway the mail truck should take to get to another city."
                }
            ]
        },
        'cn-u1t2': {
            title: 'Physical Media & Data Link Layer',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Wires, Lasers, and MAC Addresses</h3>
<p class="mb-4">Before data can fly across the world, it must literally be converted into physical energy.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border-l-4 border-indigo-500 shadow-md">
    <li><strong>Layer 1 (Physical):</strong> This is the hardware. Ethernet cables convert 1s and 0s into electrical voltage pulses. Fiber optic cables convert them into flashes of laser light (which bounce inside glass tubes under the ocean). Wi-Fi converts them into radio waves.</li>
    <li><strong>Layer 2 (Data Link):</strong> Once you have a physical connection, how do you talk to the specific computer next to you without everyone else listening? <strong>MAC Addresses</strong>. Every network card on Earth has a unique, hardcoded serial number. Switches use these MAC addresses to direct traffic within a local network (LAN).</li>
</ul>

<h3 class="text-xl font-bold mb-2 text-green-400">CSMA/CD: How Computers Stop Yelling</h3>
<p class="mb-4 text-gray-300 text-sm">If two computers on the same physical wire try to talk at the exact same millisecond, their electrical signals crash into each other and become garbage. This is called a <strong>Collision</strong>.</p>
<p class="mb-4 text-gray-300 text-sm">Early Ethernet solved this using CSMA/CD. Think of it like a polite dinner party. You listen before you speak. If someone else is talking, you wait. If you accidentally start talking at the same time as someone else, you both immediately stop, wait a totally random amount of milliseconds, and try again.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary difference between an IP Address and a MAC Address?",
                    options: [
                        "A) IP Addresses are used for local Wi-Fi, MAC addresses are used for Ethernet.",
                        "B) A MAC address is a permanent, physical serial number on a network card used for local delivery (Layer 2). An IP address is a logical, changeable address used for global routing (Layer 3).",
                        "C) MAC Addresses are only used by Apple computers.",
                        "D) IP addresses are faster than MAC addresses."
                    ],
                    answer: 1,
                    explanation: "Think of a MAC address as your Social Security Number (permanent identifier) and an IP address as your home mailing address (changes if you move)."
                }
            ]
        }
    },
    'cs602-u2': {
        'cn-u2t1': {
            title: 'IPv4 vs IPv6 Addressing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Running Out of Houses</h3>
<p class="mb-4">Every device connected to the internet needs a unique IP Address. When the internet was invented, they created <strong>IPv4</strong>, which allows for about 4.3 billion unique addresses. In 1983, that seemed like plenty. Today, your smart fridge, your thermostat, and your dog's collar all need IP addresses. We ran out of IPv4 addresses in 2011.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg mt-4">
    <thead class="bg-gray-700 text-gray-200">
        <tr>
            <th class="p-3">Feature</th>
            <th class="p-3 text-blue-300">IPv4</th>
            <th class="p-3 text-purple-300">IPv6</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-700 text-sm">
        <tr><td class="p-3 font-bold">Format</td><td class="p-3">32-bit (e.g., 192.168.1.1)</td><td class="p-3">128-bit (e.g., 2001:0db8:85a3::8a2e:0370:7334)</td></tr>
        <tr><td class="p-3 font-bold">Total Addresses</td><td class="p-3">4.3 Billion</td><td class="p-3">340 Undecillion (Enough for every atom on Earth)</td></tr>
        <tr><td class="p-3 font-bold">Notation</td><td class="p-3">Dotted Decimal</td><td class="p-3">Hexadecimal</td></tr>
    </tbody>
</table>
            `,
            quizzes: [
                {
                    question: "Why was IPv6 created?",
                    options: [
                        "A) Because IPv4 was too slow.",
                        "B) Because the world literally ran out of available IPv4 addresses due to the explosion of internet-connected devices.",
                        "C) To make IP addresses easier for humans to memorize.",
                        "D) Because IPv4 was hacked."
                    ],
                    answer: 1,
                    explanation: "IPv6 expands the address space from 32-bit to 128-bit, providing so many addresses that we will never run out again."
                }
            ]
        },
        'cn-u2t2': {
            title: 'Routing Algorithms (Dijkstra, Bellman-Ford)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Finding the Shortest Path</h3>
<p class="mb-4">When you send a packet from New York to Tokyo, it doesn't travel on a single direct wire. It hops from router to router. <strong>Routing Algorithms</strong> are the math equations routers use to instantly calculate the fastest possible path across a web of millions of routers.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-yellow-400">Link-State (Dijkstra's Algorithm):</strong> Every router has a complete, God's-eye view map of the entire network. It calculates the absolute shortest path to the destination from scratch. Very fast, but requires massive memory to store the map. (Used in OSPF).</li>
    <li><strong class="text-green-400">Distance-Vector (Bellman-Ford):</strong> A router only knows about its immediate neighbors. It asks its neighbors, "Hey, how far are you from Tokyo?" and updates its own notebook based on their answers. Slower to adapt to broken wires, but requires very little memory. (Used in RIP and BGP).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In routing, how does a Distance-Vector algorithm (like Bellman-Ford) differ from a Link-State algorithm (like Dijkstra)?",
                    options: [
                        "A) Distance-Vector algorithms require the router to have a complete map of the entire internet.",
                        "B) Distance-Vector algorithms rely on routers sharing information only with their immediate neighbors, rather than having a global map.",
                        "C) Distance-Vector algorithms are only used for physical delivery trucks.",
                        "D) Distance-Vector algorithms cannot detect broken links."
                    ],
                    answer: 1,
                    explanation: "Distance-Vector is like navigating a maze by asking the person next to you for directions. Link-State is like navigating a maze while looking at a drone map from above."
                }
            ]
        }
    },
    'cs602-u3': {
        'cn-u3t1': {
            title: 'TCP vs UDP: The Delivery Drivers',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Layer 4: Transport</h3>
<p class="mb-4">Once Layer 3 (IP) gets the data to the correct computer, Layer 4 (Transport) gets the data to the correct <em>application</em> using <strong>Port Numbers</strong> (e.g., Port 80 for Web, Port 443 for Secure Web). It has two main drivers: TCP and UDP.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-green-500 shadow-lg">
        <h4 class="text-green-400 font-bold mb-2">TCP (Transmission Control Protocol)</h4>
        <p class="text-gray-300 text-sm mb-2">The reliable, paranoid delivery driver.</p>
        <ul class="list-disc pl-5 text-gray-400 text-xs space-y-1">
            <li>Requires a 3-way handshake before sending anything.</li>
            <li>Numbers every single packet.</li>
            <li>If a packet is lost, it stops everything and demands a re-transmission.</li>
            <li><strong>Use Case:</strong> Web browsing, Emails, File transfers (Where losing a single 0 or 1 ruins everything).</li>
        </ul>
    </div>
    
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-red-500 shadow-lg">
        <h4 class="text-red-400 font-bold mb-2">UDP (User Datagram Protocol)</h4>
        <p class="text-gray-300 text-sm mb-2">The reckless, lightning-fast delivery driver.</p>
        <ul class="list-disc pl-5 text-gray-400 text-xs space-y-1">
            <li>Just blasts packets at the destination.</li>
            <li>No handshake. No numbering. No error checking.</li>
            <li>If a packet is lost, it doesn't care. It keeps sending.</li>
            <li><strong>Use Case:</strong> Live Video Streaming, Multiplayer Gaming, VoIP calls (Where speed is more important than absolute perfection).</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why do live multiplayer games (like Call of Duty) use UDP instead of TCP?",
                    options: [
                        "A) Because UDP is more secure.",
                        "B) Because UDP guarantees that no packets will be lost.",
                        "C) Because if a packet containing a player's position is lost, it's better to just receive the *newest* position instantly rather than pausing the entire game to wait for the lost packet to be re-transmitted (TCP).",
                        "D) Because UDP uses fewer IP addresses."
                    ],
                    answer: 2,
                    explanation: "TCP favors reliability over speed. UDP favors speed over reliability. In live gaming, an old dropped packet is useless, so TCP's re-transmission feature would just cause unbearable lag."
                }
            ]
        },
        'cn-u3t2': {
            title: 'HTTP, DNS & The Web',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Application Layer</h3>
<p class="mb-4">This is the layer you actually interact with. It contains the protocols that allow your web browser to render memes.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">DNS (Domain Name System)</h3>
<p class="mb-4 text-gray-300 text-sm">Computers only understand IP addresses (like <code>142.250.190.46</code>). Humans only understand words (like <code>google.com</code>). <strong>DNS is the phonebook of the internet.</strong> When you type google.com, your computer silently asks a DNS server, "Hey, what is the IP address for google.com?" The server replies, and then your computer connects to that IP.</p>

<h3 class="text-xl font-bold mb-2 text-blue-400">HTTP (HyperText Transfer Protocol)</h3>
<p class="mb-4 text-gray-300 text-sm">The language of the World Wide Web. It is a simple Request/Response protocol.</p>
<ul class="list-disc pl-5 space-y-2 text-gray-300 text-sm mb-6 bg-gray-900 p-4 rounded border border-gray-700">
    <li><strong>GET:</strong> "Give me this webpage."</li>
    <li><strong>POST:</strong> "Here is some data I am submitting to you (like a login form)."</li>
    <li><strong>Status 200:</strong> "OK! Here is the data."</li>
    <li><strong>Status 404:</strong> "I have no idea what you are looking for."</li>
    <li><strong>Status 500:</strong> "My server just caught on fire."</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is the primary purpose of DNS?",
                    options: [
                        "A) To encrypt web traffic.",
                        "B) To translate human-readable domain names (like netflix.com) into machine-readable IP addresses.",
                        "C) To route packets across the physical ocean cables.",
                        "D) To format HTML pages."
                    ],
                    answer: 1,
                    explanation: "DNS acts exactly like a contacts list in your phone. You don't memorize your friend's 10-digit phone number, you just click their name. DNS does this for websites."
                }
            ]
        }
    }
};

topicDetails['cs601-u1'].unitExam = {
    title: "CS601 - Unit 1 Practical Assessment",
    description: "Submit a 500-word essay detailing how you would set up an ML pipeline to predict student dropout rates based on their cafeteria food choices. Upload your design architecture.",
    mediumQuestions: [
        "Explain the difference between Supervised and Unsupervised Learning using a real-world example not mentioned in the text.",
        "Why is data normalization crucial before feeding data into a machine learning model?"
    ],
    hardQuestions: [
        "Describe a scenario where a high p-value would lead you to reject an otherwise highly accurate Linear Regression model.",
        "Draw and explain the mathematical relationship between the Loss Function and Gradient Descent in a convex optimization problem."
    ]
};

topicDetails['cs601-u2'].unitExam = {
    title: "CS601 - Unit 2 Theoretical Assessment",
    description: "Answer the following questions regarding Neural Network architecture and backpropagation.",
    mediumQuestions: [
        "What is the vanishing gradient problem and why does the Sigmoid activation function contribute to it?",
        "Explain the purpose of dropout during neural network training."
    ],
    hardQuestions: [
        "Derive the chain rule application for a 3-layer backpropagation pass.",
        "Compare and contrast L1 vs L2 regularization. In what scenario would L1 be strictly preferred?"
    ]
};

topicDetails['cs601-u3'].unitExam = {
    title: "CS601 - Unit 3 Computer Vision Assessment",
    description: "Submit a diagram and explanation of how you would design a CNN to classify different species of birds from photographs.",
    mediumQuestions: [
        "Explain the mathematical process of a Convolution. How does a 3x3 filter interact with a 3x3 patch of an image?",
        "Why is Max Pooling generally preferred over Average Pooling in modern image classification networks?"
    ],
    hardQuestions: [
        "If you have a 128x128 image and you apply a 3x3 filter with a stride of 2, what is the spatial dimension of the resulting feature map?",
        "Explain the concept of 'Translation Invariance' and how Convolutional Layers combined with Pooling Layers achieve it."
    ]
};

topicDetails['cs601-u4'].unitExam = {
    title: "CS601 - Unit 4 RNN Assessment",
    description: "Submit a long-form answer analyzing the flow of sequential data.",
    mediumQuestions: [
        "Explain the primary architectural difference between a standard CNN and an RNN.",
        "Give two examples of tasks where an RNN would drastically outperform a CNN."
    ],
    hardQuestions: [
        "Explain the mathematical process of the 'Forget Gate' in an LSTM using the Sigmoid activation function.",
        "Why do standard RNNs suffer from the Vanishing Gradient problem more severely than shallow feed-forward networks?"
    ]
};

topicDetails['cs601-u5'].unitExam = {
    title: "CS601 - Unit 5 Advanced ML Assessment",
    description: "Submit a technical architectural proposal.",
    mediumQuestions: [
        "Explain the adversarial training loop of a GAN in detail. How do the Loss functions of the Generator and Discriminator interact?",
        "Why is Self-Attention a superior mechanism to Recurrence for understanding long paragraphs of text?"
    ],
    hardQuestions: [
        "Design a high-level system architecture using FastAPI, Docker, and an ONNX model to deploy a latency-sensitive computer vision system.",
        "What is 'Mode Collapse' in GANs and mathematically why does it happen?"
    ]
};

window.coursesData = coursesData;
window.topicDetails = topicDetails;
