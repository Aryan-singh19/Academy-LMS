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
            { id: 'cs601-u3', unitNumber: 3, title: 'Convolutional Neural Networks', topics: [{id: 'u3t1', title: 'Coming Soon'}] },
            { id: 'cs601-u4', unitNumber: 4, title: 'RNNs & Reinforcement Learning', topics: [{id: 'u4t1', title: 'Coming Soon'}] },
            { id: 'cs601-u5', unitNumber: 5, title: 'Advanced ML & Applications', topics: [{id: 'u5t1', title: 'Coming Soon'}] }
        ]
    },
    {
        id: 'cs602',
        title: 'Computer Networks',
        code: 'CS602',
        description: 'How to send memes globally in milliseconds without losing packets.',
        units: [{ id: 'cs602-u1', unitNumber: 1, title: 'Network Basics', topics: [{id: 'c2t1', title: 'Coming Soon'}] }]
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
        't5': { title: 'Data Visualization', content: 'Detailed content coming soon.', quizzes: [] },
        't6': { title: 'Hypothesis Function & Testing', content: 'Detailed content coming soon.', quizzes: [] },
        't7': { title: 'Data Prep & Normalization', content: 'Detailed content coming soon.', quizzes: [] },
        't8': { title: 'Supervised vs Unsupervised Learning', content: 'Detailed content coming soon.', quizzes: [] }
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
        'u2t3': { title: 'Loss Function & Gradient Descent', content: '<p>Content in progress.</p>', quizzes: [] },
        'u2t4': { title: 'Multilayer Network & Backpropagation', content: '<p>Content in progress.</p>', quizzes: [] },
        'u2t5': { title: 'Unstable Gradients & Regularization', content: '<p>Content in progress.</p>', quizzes: [] },
        'u2t6': { title: 'Auto Encoders & Hyperparameters', content: '<p>Content in progress.</p>', quizzes: [] }
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

window.coursesData = coursesData;
window.topicDetails = topicDetails;
