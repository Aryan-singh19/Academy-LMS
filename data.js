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
        't3': { title: 'Math: Probability, Stats & Linear Algebra', content: 'Detailed content coming soon.', quizzes: [] },
        't4': { title: 'Convex Optimization', content: 'Detailed content coming soon.', quizzes: [] },
        't5': { title: 'Data Visualization', content: 'Detailed content coming soon.', quizzes: [] },
        't6': { title: 'Hypothesis Function & Testing', content: 'Detailed content coming soon.', quizzes: [] },
        't7': { title: 'Data Prep & Normalization', content: 'Detailed content coming soon.', quizzes: [] },
        't8': { title: 'Supervised vs Unsupervised Learning', content: 'Detailed content coming soon.', quizzes: [] }
    },
    'cs601-u2': {
        'u2t1': { title: 'Linearity vs Non-linearity, Weights & Bias', content: '<p>Unit 2 intro content.</p>', quizzes: [] },
        'u2t2': { title: 'Activation Functions (Sigmoid, ReLU)', content: '<p>Activation functions content.</p>', quizzes: [] },
        'u2t3': { title: 'Loss Function & Gradient Descent', content: '<p>Gradient descent content.</p>', quizzes: [] },
        'u2t4': { title: 'Multilayer Network & Backpropagation', content: '<p>Backprop content.</p>', quizzes: [] },
        'u2t5': { title: 'Unstable Gradients & Regularization', content: '<p>Regularization content.</p>', quizzes: [] },
        'u2t6': { title: 'Auto Encoders & Hyperparameters', content: '<p>Auto encoders content.</p>', quizzes: [] }
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
