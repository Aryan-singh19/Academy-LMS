window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs503-u1': {
        'cs503-u1t1': {
            title: 'Descriptive Statistics & Probability Distributions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Descriptive Statistics Foundations</h3>
<p class="mb-4"><strong>Descriptive Statistics</strong> quantitatively summarizes and describes features of a dataset without drawing conclusions beyond the observed data.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-emerald-500 shadow-md">
        <h4 class="text-emerald-400 font-bold mb-2">Measures of Central Tendency</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li><strong>Mean (&mu; or x̄):</strong> Arithmetic average: &Sigma;x / N. Sensitive to extreme outliers.</li>
            <li><strong>Median:</strong> Middle value of ordered dataset. Robust against outliers (ideal for income distributions).</li>
            <li><strong>Mode:</strong> Most frequently occurring value. Applicable to categorical data.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-indigo-500 shadow-md">
        <h4 class="text-indigo-400 font-bold mb-2">Measures of Dispersion & Shape</h4>
        <ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li><strong>Variance (&sigma;<sup>2</sup>):</strong> Average squared deviation from the mean: &Sigma;(x - &mu;)<sup>2</sup> / N.</li>
            <li><strong>Standard Deviation (&sigma;):</strong> Square root of variance; in the original measurement units.</li>
            <li><strong>Skewness:</strong> Asymmetry of the distribution (positive = long right tail; negative = long left tail).</li>
            <li><strong>Kurtosis:</strong> Heavy-tailedness / peakedness compared to normal distribution.</li>
        </ul>
    </div>
</div>

<h4 class="text-lg font-bold text-yellow-300 mb-2">Core Probability Distributions</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 bg-gray-900 p-4 rounded-lg border border-gray-700">
    <li><strong>Normal (Gaussian) Distribution:</strong> Bell-shaped, symmetric (&mu; = median = mode). Empirical Rule: 68% within &plusmn;1&sigma;, 95% within &plusmn;2&sigma;, 99.7% within &plusmn;3&sigma;.</li>
    <li><strong>Binomial Distribution:</strong> Discrete trials with binary outcomes (Success/Failure) with probability p across n independent trials.</li>
    <li><strong>Poisson Distribution:</strong> Probability of a given number of discrete events occurring in a fixed interval of time/space with known constant rate &lambda;.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which measure of central tendency is least affected by extreme high or low outlier values in a dataset?",
                    options: ["A) Mean", "B) Median", "C) Standard Deviation", "D) Variance"],
                    answer: 1,
                    explanation: "The median is positional and resistant to extreme outliers, unlike the mean."
                }
            ]
        },
        'cs503-u1t2': {
            title: 'Inferential Statistics through Hypothesis Tests',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    H[Formulate Null Hypothesis H0 & Alt H1] --> Sample[Collect Sample & Compute Test Statistic: z, t, or F]
    Sample --> PVal{Compare p-value to Significance Level &alpha;}
    PVal -- p-value &le; &alpha; --> Reject[Reject H0: Statistically Significant Effect]
    PVal -- p-value > &alpha; --> FailReject[Fail to Reject H0: Insufficient Evidence]
    style H fill:#1e293b,stroke:#3b82f6,color:#fff
    style Reject fill:#1e293b,stroke:#10b981,color:#fff
    style FailReject fill:#1e293b,stroke:#ef4444,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Hypothesis Testing & Statistical Inference</h3>
<p class="mb-4">Inferential statistics allows data scientists to draw conclusions and test hypotheses about an entire population based on sample data.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Null (H<sub>0</sub>) vs Alternative (H<sub>1</sub>) Hypotheses</h4>
        <p class="text-sm text-gray-300"><strong>H<sub>0</sub> (Null):</strong> Presumes no effect, no difference, or status quo.</p>
        <p class="text-sm text-gray-300"><strong>H<sub>1</sub> (Alternative):</strong> Claim or effect being tested.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
        <h4 class="font-bold text-red-400">Type I and Type II Errors</h4>
        <p class="text-sm text-gray-300"><strong>Type I Error (&alpha;):</strong> False Positive — Rejecting H<sub>0</sub> when it is actually true (Significance level, typically 0.05).</p>
        <p class="text-sm text-gray-300"><strong>Type II Error (&beta;):</strong> False Negative — Failing to reject H<sub>0</sub> when it is actually false. Statistical Power = 1 - &beta;.</p>
    </div>
</div>

<h4 class="text-lg font-bold text-cyan-300 mb-2">Common Statistical Tests</h4>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-1">
    <li><strong>Z-Test:</strong> Used when population variance &sigma; is known and sample size N &ge; 30.</li>
    <li><strong>Student's t-Test:</strong> Used when population variance is unknown and sample size is small (N &lt; 30). One-sample, Two-sample independent, and Paired t-tests.</li>
    <li><strong>Chi-Square (&chi;<sup>2</sup>) Test:</strong> Tests independence of categorical variables and goodness-of-fit.</li>
</ul>
            

<div class="bg-slate-900 p-5 rounded-xl border border-blue-500/30 mb-6">
    <h4 class="text-amber-400 font-bold mb-2 text-base">Hypothesis Testing: Type I vs Type II Errors (Viva Matrix)</h4>
    <div class="overflow-x-auto">
        <table class="w-full text-xs text-left border border-slate-700">
            <thead class="bg-slate-800 text-slate-200">
                <tr>
                    <th class="p-2 border border-slate-700">Decision  True Reality</th>
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
</div>
`,
            quizzes: [
                {
                    question: "What is a Type I error in statistical hypothesis testing?",
                    options: [
                        "A) Accepting the null hypothesis when false.",
                        "B) Rejecting the null hypothesis when it is actually true (False Positive).",
                        "C) Calculating the wrong sample mean.",
                        "D) Having an uneven sample size."
                    ],
                    answer: 1,
                    explanation: "A Type I error occurs when researchers reject the null hypothesis despite it being true (controlled by α)."
                }
            ]
        },
        'cs503-u1t3': {
            title: 'Regression Analysis (Linear & Multiple)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Linear & Multiple Regression</h3>
<p class="mb-4">Regression analysis models the relationship between a dependent continuous target variable (Y) and one or more independent predictor features (X).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500">
        <h4 class="text-blue-300 font-bold mb-2">Simple Linear Regression</h4>
        <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm mb-2">
            Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X + &epsilon;
        </div>
        <p class="text-xs text-gray-300">Estimates slope &beta;<sub>1</sub> and intercept &beta;<sub>0</sub> using <strong>Ordinary Least Squares (OLS)</strong>, minimizing the Sum of Squared Residuals (SSR): &Sigma;(y<sub>i</sub> - ŷ<sub>i</sub>)<sup>2</sup>.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500">
        <h4 class="text-purple-300 font-bold mb-2">Multiple Linear Regression</h4>
        <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm mb-2">
            Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X<sub>1</sub> + ... + &beta;<sub>p</sub>X<sub>p</sub> + &epsilon;
        </div>
        <p class="text-xs text-gray-300">Handles multicollinearity (checked via VIF), adjusted R<sup>2</sup> (penalizing non-informative features), and heteroscedasticity checks.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What objective function does Ordinary Least Squares (OLS) minimize in linear regression?",
                    options: [
                        "A) Sum of absolute errors",
                        "B) Sum of squared residuals (differences between actual and predicted values)",
                        "C) Maximum outlier value",
                        "D) Total number of data rows"
                    ],
                    answer: 1,
                    explanation: "OLS minimizes the sum of squared residuals: Σ(yi - ŷi)^2."
                }
            ]
        },
        'cs503-u1t4': {
            title: 'ANOVA (Analysis of Variance)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Analysis of Variance (ANOVA)</h3>
<p class="mb-4"><strong>ANOVA</strong> tests whether the means of three or more independent groups are statistically significantly different. It compares the variance between groups to the variance within groups using the <strong>F-statistic</strong>.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-teal-500 mb-6 shadow-md">
    <h4 class="text-teal-300 font-bold mb-2 text-lg">The F-Test Ratio</h4>
    <div class="bg-gray-900 p-3 rounded font-mono text-yellow-300 text-sm mb-3">
        F = MS<sub>between</sub> / MS<sub>within</sub> = (SS<sub>between</sub> / df<sub>between</sub>) / (SS<sub>within</sub> / df<sub>within</sub>)
    </div>
    <p class="text-xs text-gray-300">If F is significantly greater than 1 (p-value &lt; 0.05), we reject H<sub>0</sub>, concluding that at least one group mean is different. Post-hoc tests (e.g. Tukey HSD) determine specifically which pairs differ.</p>
</div>
            `,
            quizzes: [
                {
                    question: "Why is ANOVA preferred over running multiple pairwise t-tests when comparing three or more group means?",
                    options: [
                        "A) t-tests cannot run on computers.",
                        "B) Running multiple t-tests inflates the overall family-wise Type I error rate.",
                        "C) ANOVA requires only two observations.",
                        "D) ANOVA produces smaller matrices."
                    ],
                    answer: 1,
                    explanation: "Running multiple individual pairwise t-tests exponentially inflates the chance of a false positive (Type I error); ANOVA maintains the error rate at α."
                }
            ]
        }
    },
    'cs503-u2': {
        'cs503-u2t1': {
            title: 'Big Data & Its Importance, Four V’s & Drivers',
            content: `

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
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Big Data Phenomenon & The Four V's</h3>
<p class="mb-4"><strong>Big Data</strong> describes datasets whose size, complexity, and rate of growth exceed the processing capacity of conventional relational database software.</p>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-blue-500">
        <h5 class="text-blue-300 font-bold mb-1">1. Volume</h5>
        <p class="text-xs text-gray-300">Terabytes to Petabytes and Exabytes of data generated by social media, IoT sensors, transaction logs, and video feeds.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500">
        <h5 class="text-green-300 font-bold mb-1">2. Velocity</h5>
        <p class="text-xs text-gray-300">Real-time streaming generation speed (e.g. 500 million tweets/day, financial algorithmic trades requiring sub-millisecond reactions).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-purple-500">
        <h5 class="text-purple-300 font-bold mb-1">3. Variety</h5>
        <p class="text-xs text-gray-300">Structured (RDBMS tables), Semi-structured (JSON, XML), and Unstructured (raw text, video, audio, PDFs).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-t-4 border-yellow-500">
        <h5 class="text-yellow-300 font-bold mb-1">4. Veracity</h5>
        <p class="text-xs text-gray-300">Data quality, trustworthiness, bias, missing values, and noise in collected datasets.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which 'V' of Big Data refers to the diverse formats of incoming data such as JSON, video, audio, and SQL tables?",
                    options: ["A) Volume", "B) Velocity", "C) Variety", "D) Veracity"],
                    answer: 2,
                    explanation: "Variety encompasses structured, semi-structured, and unstructured data formats."
                }
            ]
        },
        'cs503-u2t2': {
            title: 'Introduction to Big Data Analytics & Applications',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Applications of Big Data Analytics</h3>
<p class="mb-4">Big data analytics transforms massive raw datasets into strategic intelligence across industries:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Healthcare & Genomics:</strong> Sequencing genomes to customize targeted cancer treatments and predicting epidemic outbreaks.</li>
    <li><strong>Banking & Financial Services:</strong> Real-time fraud detection on credit card swipes and automated algorithmic trading.</li>
    <li><strong>E-Commerce & Retail:</strong> Collaborative filtering recommender engines (Amazon, Netflix) and dynamic pricing algorithms.</li>
    <li><strong>Smart Cities & IoT:</strong> Traffic flow optimization, predictive maintenance on airline engines, and smart grid energy load distribution.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "How does real-time streaming analytics benefit financial institutions?",
                    options: [
                        "A) By printing bank statements faster.",
                        "B) By detecting fraudulent credit card transactions within milliseconds before authorization completes.",
                        "C) By reducing paper usage in offices.",
                        "D) By encrypting email."
                    ],
                    answer: 1,
                    explanation: "Real-time stream processing identifies anomalous transaction patterns and flags credit card fraud instantaneously."
                }
            ]
        },
        'cs503-u2t3': {
            title: 'Big Data Technologies: Hadoop Parallel World & Data Discovery',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Hadoop Parallel Ecosystem & Data Discovery</h3>
<p class="mb-4">Apache Hadoop revolutionised enterprise analytics by moving <strong>computation to the data</strong> rather than moving data over the network to the computation server.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">Commodity Hardware Clustering</h4>
        <p class="text-sm text-gray-300">Instead of buying an expensive supercomputer with 1,000 cores, Hadoop links thousands of cheap commodity x86 servers in parallel, handling hardware failures seamlessly at the software layer.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-300">Data Discovery Paradigm</h4>
        <p class="text-sm text-gray-300">Traditional BI loads clean data into predefined schemas (Schema-on-Write). Big Data discovery dumps raw data into a <strong>Data Lake</strong> in native format, applying structure dynamically when the data is queried (<strong>Schema-on-Read</strong>).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is 'Schema-on-Read' in modern Big Data lakes?",
                    options: [
                        "A) Data must be strictly normalized before storing on disk.",
                        "B) Raw data is stored as-is, and the schema is applied only when an analytical query parses the data.",
                        "C) Tables cannot have schemas.",
                        "D) Data is read from USB drives."
                    ],
                    answer: 1,
                    explanation: "Schema-on-Read allows dumping unstructured/raw data into storage without upfront schema design; schema is applied upon query execution."
                }
            ]
        },
        'cs503-u2t4': {
            title: 'Open Source Tech, Cloud Big Data & Predictive Analytics',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Cloud Big Data & Predictive Modeling</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-cyan-300 font-bold mb-2">Cloud-Native Big Data</h5>
        <p class="text-xs text-gray-300 mb-2">Decouples compute from storage. Services like AWS EMR, Google BigQuery, and Azure Synapse allow spinning up 500-node clusters on demand for 10 minutes and tearing them down, paying only for seconds used.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
        <h5 class="text-pink-300 font-bold mb-2">Predictive Analytics</h5>
        <p class="text-xs text-gray-300 mb-2">Combines historical big data mining with machine learning (decision trees, gradient boosting, neural networks) to forecast future trends (e.g. customer churn probability, machine breakdown prediction).</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is the primary architectural advantage of Cloud Big Data solutions like BigQuery or Snowflake over on-premise clusters?",
                    options: [
                        "A) They do not require internet access.",
                        "B) Separation of compute and storage, enabling independent elastic scaling and cost optimization.",
                        "C) They don't use disks.",
                        "D) They execute queries in reverse."
                    ],
                    answer: 1,
                    explanation: "Decoupling compute from storage enables scaling processing power dynamically without paying for idle compute nodes."
                }
            ]
        },
        'cs503-u2t5': {
            title: 'Mobile BI, Crowd Sourcing Analytics & Information Management',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Modern Information Management & Mobile BI</h3>
<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><strong>Mobile Business Intelligence (BI):</strong> Delivering responsive KPIs, real-time alerts, and interactive dashboards to executive mobile devices with offline caching.</li>
    <li><strong>Crowd-Sourced Analytics:</strong> Aggregating massive participatory user-generated signals (e.g. Waze navigation crowdsourcing traffic delays, citizen science sensor networks).</li>
    <li><strong>Enterprise Information Governance:</strong> Data cataloging, lineage tracking, metadata management, and compliance with GDPR, HIPAA, and CCPA.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What is Data Lineage in enterprise information management?",
                    options: [
                        "A) The genealogical tree of the company founder.",
                        "B) Tracking the entire lifecycle, origin, transformation steps, and destination of data assets.",
                        "C) The physical length of network cables.",
                        "D) The speed of disk writes."
                    ],
                    answer: 1,
                    explanation: "Data Lineage provides end-to-end visibility into how data originated, transformed, and flowed across systems."
                }
            ]
        }
    },
    'cs503-u3': {
        'cs503-u3t1': {
            title: 'Integrating Disparate Data Stores',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    S1[(MySQL)] & S2[(MongoDB)] & S3[Log Streams] --> Ingest[Data Ingestion: Apache Sqoop / Flume]
    Ingest --> Lake[(HDFS Data Lake / Staging)]
    Lake --> Process[MapReduce / Spark Transformation]
    Process --> Warehouse[(Hive Data Warehouse)]
    style Lake fill:#1e293b,stroke:#3b82f6,color:#fff
    style Process fill:#1e293b,stroke:#f59e0b,color:#fff
    style Warehouse fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Integrating Disparate Data Stores</h3>
<p class="mb-4">Modern enterprises store data across heterogeneous systems: legacy mainframes, SQL RDBMS, NoSQL document stores (MongoDB), key-value caches (Redis), and object stores (S3). Integrating them requires specialized pipelines:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h5 class="text-indigo-300 font-bold mb-1">ETL (Extract, Transform, Load)</h5>
        <p class="text-xs text-gray-300">Data is extracted from source stores, cleaned/transformed on a staging server to conform to target schema, then loaded into the Enterprise Data Warehouse (EDW).</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
        <h5 class="text-teal-300 font-bold mb-1">ELT (Extract, Load, Transform)</h5>
        <p class="text-xs text-gray-300">Raw data is extracted and loaded directly into a high-performance Big Data repository (Hadoop / Cloud Data Lake), and transformations are computed in-place using distributed parallel processing.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why has ELT largely superseded ETL in Big Data cloud architectures?",
                    options: [
                        "A) ELT does not transform data.",
                        "B) Modern distributed engines can load raw data immediately and leverage their massive parallel compute to execute transformations at query time.",
                        "C) Cloud databases cannot run SQL.",
                        "D) ELT is only for images."
                    ],
                    answer: 1,
                    explanation: "ELT takes advantage of scalable cloud compute power to transform raw data directly inside the lake/warehouse."
                }
            ]
        },
        'cs503-u3t2': {
            title: 'Mapping Data to the Programming Framework',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Mapping Data to Distributed Processing Frameworks</h3>
<p class="mb-4">To process data on distributed clusters, continuous streams and raw records must be mapped into structured key-value pairs <code>&lang;Key, Value&rang;</code>:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Serialization & Deserialization:</strong> Converting in-memory objects into byte streams for disk storage and network transmission (e.g. Apache Avro, Protocol Buffers, Writable interface in Hadoop).</li>
    <li><strong>Key Selection:</strong> Keys determine grouping and partition routing across worker nodes (e.g. using customer ID as Key to ensure all transactions for that customer reach the same reducer).</li>
    <li><strong>Values:</strong> Contain the payload attributes (e.g. transaction amount, timestamp).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In the Hadoop programming framework, what is the universal data representation format for MapReduce inputs and outputs?",
                    options: ["A) XML nodes", "B) <Key, Value> pairs", "C) CSV strings", "D) Binary Trees"],
                    answer: 1,
                    explanation: "MapReduce processes and emits data strictly as <Key, Value> pairs."
                }
            ]
        },
        'cs503-u3t3': {
            title: 'Connecting and Extracting Data from Storage',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Data Ingestion Tools: Sqoop & Flume</h3>
<p class="mb-4">Hadoop relies on specialized ingestion engines to extract data from external storage systems:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-yellow-500">
        <h4 class="text-yellow-300 font-bold mb-2">Apache Sqoop ("SQL to Hadoop")</h4>
        <p class="text-sm text-gray-300 mb-2">Designed for bulk data transfer between structured relational databases (Oracle, MySQL, Postgres) and HDFS / Hive.</p>
        <p class="text-xs text-gray-400">Uses Map-only jobs to parallelize data extraction directly from RDBMS tables over JDBC.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500">
        <h4 class="text-blue-300 font-bold mb-2">Apache Flume</h4>
        <p class="text-sm text-gray-300 mb-2">Designed for high-throughput, distributed streaming ingestion of log data from web servers into HDFS.</p>
        <p class="text-xs text-gray-400">Architecture: Source &rarr; Channel (buffer) &rarr; Sink.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Which Apache tool is specifically designed to import structured tables from relational databases (like Oracle or MySQL) into HDFS?",
                    options: ["A) Apache Flume", "B) Apache Sqoop", "C) Apache Pig", "D) Apache Mahout"],
                    answer: 1,
                    explanation: "Apache Sqoop (SQL-to-Hadoop) is the standard tool for bidirectional transfer between RDBMS and HDFS."
                }
            ]
        },
        'cs503-u3t4': {
            title: 'Transforming Data for Processing',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Data Cleansing & Transformation Pipelines</h3>
<p class="mb-4">Raw big data is noisy and unstructured. Pre-processing steps include:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl">
    <li><strong>Tokenization & Regex Parsing:</strong> Deconstructing raw log files (Apache access logs) into timestamp, IP, status code, and URL.</li>
    <li><strong>Type Casting & Validation:</strong> Converting string numbers to floats and dropping corrupted records.</li>
    <li><strong>Enrichment:</strong> Joining incoming transaction records with reference geolocation tables or customer master files.</li>
    <li><strong>Deduplication:</strong> Identifying and filtering duplicate event streams generated by network retries.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Why is data enrichment performed during the transformation stage?",
                    options: [
                        "A) To make the file size smaller.",
                        "B) To add supplementary context (such as joining IP addresses with geolocation) to make raw data actionable.",
                        "C) To format files into PDF.",
                        "D) To encrypt hard drives."
                    ],
                    answer: 1,
                    explanation: "Data enrichment augments raw events with contextual metadata (such as demographic or geographic details)."
                }
            ]
        },
        'cs503-u3t5': {
            title: 'Subdividing Data in Preparation for Hadoop MapReduce',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Input Splits & Data Partitioning</h3>
<p class="mb-4">Before Hadoop launches Map tasks, the input dataset is subdivided:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h5 class="text-indigo-300 font-bold mb-1">HDFS Physical Block</h5>
        <p class="text-xs text-gray-300">The physical unit of storage on disk (default 128 MB or 256 MB), replicated 3x across data nodes for fault tolerance.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h5 class="text-green-300 font-bold mb-1">InputSplit (Logical Chunk)</h5>
        <p class="text-xs text-gray-300">The logical representation of data assigned to an individual <strong>Mapper</strong> task. Handled by <code>InputFormat</code> (e.g. <code>TextInputFormat</code>).</p>
    </div>
</div>
<p class="text-sm text-gray-300">A <code>RecordReader</code> turns each logical InputSplit into discrete <code>&lang;Key, Value&rang;</code> pairs fed into the Map method line by line.</p>
            `,
            quizzes: [
                {
                    question: "What determines the number of Mapper tasks launched for a Hadoop MapReduce job?",
                    options: [
                        "A) The number of CPU cores on the master node.",
                        "B) The number of logical InputSplits generated for the input dataset.",
                        "C) Always exactly 10 mappers.",
                        "D) The user's screen resolution."
                    ],
                    answer: 1,
                    explanation: "Hadoop launches one Mapper task for each logical InputSplit."
                }
            ]
        }
    },
    'cs503-u4': {
        'cs503-u4t1': {
            title: 'Employing Hadoop MapReduce & Creating Job Components',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph LR
    Input[Input Splits in HDFS] --> Map[Mapper: Emit key, 1]
    Map --> Shuffle[Shuffle & Sort: Partition by Key]
    Shuffle --> Reduce[Reducer: Aggregate Values]
    Reduce --> Output[(HDFS Storage Output)]
    style Map fill:#1e293b,stroke:#3b82f6,color:#fff
    style Shuffle fill:#1e293b,stroke:#f59e0b,color:#fff
    style Reduce fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">The MapReduce Programming Model</h3>
<p class="mb-4">MapReduce divides computation into two primary distributed phases:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-blue-500 shadow-md">
        <h4 class="text-blue-300 font-bold mb-2">1. Map Phase</h4>
        <p class="text-sm text-gray-300 mb-2">Processes input pairs <code>&lang;K1, V1&rang;</code> and produces intermediate pairs <code>&lang;K2, V2&rang;</code>.</p>
        <p class="text-xs text-gray-400 font-mono bg-gray-900 p-2 rounded">
            map: (k1, v1) &rarr; list(k2, v2)
        </p>
        <p class="text-xs text-gray-400 mt-2">Example (Word Count): For each word in text, emit <code>&lang;word, 1&rang;</code>.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-md">
        <h4 class="text-purple-300 font-bold mb-2">2. Reduce Phase</h4>
        <p class="text-sm text-gray-300 mb-2">Iterates over all values associated with a specific intermediate key <code>K2</code> and aggregates them into output <code>&lang;K3, V3&rang;</code>.</p>
        <p class="text-xs text-gray-400 font-mono bg-gray-900 p-2 rounded">
            reduce: (k2, list(v2)) &rarr; list(k3, v3)
        </p>
        <p class="text-xs text-gray-400 mt-2">Example (Word Count): Sum all 1's for <code>&lang;"hadoop", [1, 1, 1]&rang; &rarr; &lang;"hadoop", 3&rang;</code>.</p>
    </div>
</div>
            

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
</div>
`,
            quizzes: [
                {
                    question: "In the classic Word Count MapReduce application, what does the Mapper emit for each encountered word?",
                    options: [
                        "A) <lineNumber, word>",
                        "B) <word, 1>",
                        "C) <totalWords, 0>",
                        "D) <fileName, wordCount>"
                    ],
                    answer: 1,
                    explanation: "For each word, the map function outputs <word, 1> as intermediate key-value pair."
                }
            ]
        },
        'cs503-u4t2': {
            title: 'Distributing Data Processing Across Server Farms',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Distributed Execution & Data Locality</h3>
<p class="mb-4">Hadoop achieves extreme throughput across massive server clusters by prioritizing <strong>Data Locality</strong>:</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
        <h4 class="font-bold text-emerald-300">Data Locality Levels</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Data-Local (Best):</strong> The map task runs on the exact same physical machine holding the data block in its local drive (zero network I/O).</li>
            <li><strong>Rack-Local:</strong> Runs on a different node within the same rack (fast top-of-rack switch transfer).</li>
            <li><strong>Off-Rack (Worst):</strong> Runs on a server in a different rack, consuming core inter-switch bandwidth.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
        <h4 class="font-bold text-amber-300">Shuffle and Sort Phase</h4>
        <p class="text-sm text-gray-300">The intermediate network transfer between Mapper outputs and Reducer inputs. Hadoop automatically sorts intermediate keys and partitions them (using HashPartitioner: <code>hash(key) % numReducers</code>) so that all identical keys land on the same reducer.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is 'Data-Local' execution in Hadoop scheduling?",
                    options: [
                        "A) Running the job on the user's laptop.",
                        "B) Scheduling the map task to execute on the physical server where the target data block resides on disk.",
                        "C) Writing data only to local memory.",
                        "D) Deleting remote replicas."
                    ],
                    answer: 1,
                    explanation: "Data locality avoids network overhead by running the map computation on the same machine holding the data block."
                }
            ]
        },
        'cs503-u4t3': {
            title: 'Executing Jobs & Monitoring the Progress of Job Flows',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">YARN & Job Lifecycle Execution</h3>
<p class="mb-4">In modern Hadoop 2.x/3.x, resource management is handled by <strong>YARN (Yet Another Resource Negotiator)</strong>:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>ResourceManager (RM):</strong> Central cluster authority allocating compute containers (CPU & RAM) to applications.</li>
    <li><strong>NodeManager (NM):</strong> Agent running on every worker node, monitoring container resource consumption.</li>
    <li><strong>ApplicationMaster (AM):</strong> Dedicated per-application master negotiating containers from the RM and coordinating tasks.</li>
    <li><strong>YARN Web UI (Port 8088):</strong> Allows administrators to track job progress, counter statistics (bytes read, map output records), and task logs.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which YARN daemon runs on every slave node to manage and report container resource usage?",
                    options: ["A) ResourceManager", "B) NodeManager", "C) NameNode", "D) JournalNode"],
                    answer: 1,
                    explanation: "NodeManager is the per-machine agent overseeing container execution on worker nodes."
                }
            ]
        },
        'cs503-u4t4': {
            title: 'Building Blocks of Hadoop MapReduce: Daemons & HDFS',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">HDFS Architecture & Core Daemons</h3>
<p class="mb-4"><strong>HDFS (Hadoop Distributed File System)</strong> is a master-slave distributed storage layer:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500">
        <h4 class="text-indigo-300 font-bold mb-2">NameNode (Master)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Maintains filesystem namespace, directory tree, and mapping of file blocks to DataNodes.</li>
            <li>Keeps metadata entirely in RAM for high-speed lookups.</li>
            <li>Persists metadata to disk via <code>fsimage</code> snapshot and <code>edits</code> log file.</li>
            <li>Single point of failure resolved via HDFS High Availability (HA) Active/Standby NameNodes.</li>
        </ul>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-emerald-500">
        <h4 class="text-emerald-300 font-bold mb-2">DataNode (Slave)</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li>Stores physical data blocks on local ext4/xfs hard drives.</li>
            <li>Performs block creation, deletion, and replication upon NameNode direction.</li>
            <li>Sends periodic Heartbeats (every 3 seconds) and Block Reports to the NameNode.</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "In HDFS, which component holds the file system metadata (such as directory structure and block locations) in RAM?",
                    options: ["A) DataNode", "B) NameNode", "C) NodeManager", "D) TaskTracker"],
                    answer: 1,
                    explanation: "The NameNode stores and manages all filesystem metadata in memory."
                }
            ]
        },
        'cs503-u4t5': {
            title: 'Execution Modes: Local, Pseudo-Distributed & Fully Distributed',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Hadoop Cluster Deployment Modes</h3>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 class="font-bold text-blue-300">1. Local (Standalone) Mode</h4>
        <p class="text-xs text-gray-300">Default mode with no daemons running. Runs in a single JVM process on the local filesystem (no HDFS). Used for rapid code debugging and unit testing.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">2. Pseudo-Distributed Mode</h4>
        <p class="text-xs text-gray-300">All Hadoop daemons (NameNode, DataNode, ResourceManager, NodeManager) run on a <strong>single machine</strong> as separate Java processes. Simulates a real cluster for development.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
        <h4 class="font-bold text-green-300">3. Fully Distributed Mode</h4>
        <p class="text-xs text-gray-300">Production setup spanning tens to thousands of dedicated physical/cloud servers connected via 10/100 Gbps network racks.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What is Pseudo-Distributed mode in Apache Hadoop?",
                    options: [
                        "A) Running across 500 servers.",
                        "B) Running all Hadoop daemons as separate Java processes on a single physical host.",
                        "C) Running without Java.",
                        "D) Running Hadoop on mobile phones."
                    ],
                    answer: 1,
                    explanation: "Pseudo-distributed mode runs all master and slave daemons independently on a single node."
                }
            ]
        }
    },
    'cs503-u5': {
        'cs503-u5t1': {
            title: 'Installing & Running Pig, Comparison with Databases',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Apache Pig Overview</h3>
<p class="mb-4">Writing hundreds of lines of Java boilerplate for simple MapReduce tasks was painful. Yahoo! developed <strong>Apache Pig</strong>, a high-level data-flow platform that translates human-readable scripts into physical MapReduce jobs.</p>

<div class="overflow-x-auto mb-6">
    <table class="w-full text-left bg-gray-900 border border-gray-700 rounded-lg text-sm">
        <thead class="bg-gray-800 text-blue-300">
            <tr>
                <th class="p-3">Feature</th>
                <th class="p-3">Apache Pig (Pig Latin)</th>
                <th class="p-3">Relational DBMS (SQL)</th>
            </tr>
        </thead>
        <tbody class="text-gray-300 divide-y divide-gray-800">
            <tr>
                <td class="p-3 font-semibold">Language Paradigm</td>
                <td class="p-3 text-emerald-400">Procedural Data-Flow (step-by-step pipeline)</td>
                <td class="p-3 text-yellow-400">Declarative (specifies what, not how)</td>
            </tr>
            <tr>
                <td class="p-3 font-semibold">Schema Requirement</td>
                <td class="p-3">Optional (Schema-on-Read; nested types like Bag, Tuple, Map)</td>
                <td class="p-3">Mandatory (Strict 1NF flat relational schema)</td>
            </tr>
            <tr>
                <td class="p-3 font-semibold">Target Workload</td>
                <td class="p-3">Batch analytics on multi-terabyte uncurated datasets</td>
                <td class="p-3">Low-latency OLTP transactions & indexed queries</td>
            </tr>
        </tbody>
    </table>
</div>
            `,
            quizzes: [
                {
                    question: "How does Pig Latin differ fundamentally from SQL?",
                    options: [
                        "A) SQL is procedural, Pig Latin is declarative.",
                        "B) Pig Latin is a procedural dataflow language that describes step-by-step transformations, whereas SQL is declarative.",
                        "C) Pig Latin only runs on iPhones.",
                        "D) Pig Latin does not support joins."
                    ],
                    answer: 1,
                    explanation: "Pig Latin describes a step-by-step sequence of transformations (data-flow), whereas SQL specifies the desired output declaratively."
                }
            ]
        },
        'cs503-u5t2': {
            title: 'Pig Latin, User-Defined Functions & Data Processing Operators',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Pig Latin Data Model & Operators</h3>
<p class="mb-4">Pig supports complex nested data structures: <strong>Atom</strong> (simple value), <strong>Tuple</strong> (ordered set of fields), <strong>Bag</strong> (collection of tuples), and <strong>Map</strong> (key-value lookup).</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-purple-400">-- Pig Latin Dataflow Script Example</span><br>
records = <span class="text-blue-400">LOAD</span> <span class="text-green-300">'hdfs://data/sales.csv'</span> <span class="text-blue-400">USING</span> PigStorage(<span class="text-green-300">','</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-400">AS</span> (id:int, user:chararray, amount:double, country:chararray);<br><br>
us_records = <span class="text-blue-400">FILTER</span> records <span class="text-blue-400">BY</span> country == <span class="text-green-300">'USA'</span>;<br>
grouped = <span class="text-blue-400">GROUP</span> us_records <span class="text-blue-400">BY</span> user;<br>
totals = <span class="text-blue-400">FOREACH</span> grouped <span class="text-blue-400">GENERATE</span> group <span class="text-blue-400">AS</span> user, <span class="text-yellow-300">SUM</span>(us_records.amount) <span class="text-blue-400">AS</span> total_spent;<br>
<span class="text-blue-400">DUMP</span> totals;
</div>
<p class="text-sm text-gray-300">Pig also supports <strong>User Defined Functions (UDFs)</strong> written in Java, Python, or JavaScript to extend custom transformation logic.</p>
            `,
            quizzes: [
                {
                    question: "In the Apache Pig data model, what is a 'Bag'?",
                    options: [
                        "A) A single integer.",
                        "B) An unordered collection of tuples.",
                        "C) An encrypted zip file.",
                        "D) A hardware storage rack."
                    ],
                    answer: 1,
                    explanation: "In Pig, a Bag is an unordered collection of tuples."
                }
            ]
        },
        'cs503-u5t3': {
            title: 'Installing & Running Hive, Hive Architecture & Metastore',
            content: `

<div class="mermaid bg-gray-900 p-6 rounded-lg mb-6 flex justify-center border border-gray-700 shadow-inner">
graph TD
    CLI[Hive Client: CLI, Web UI, JDBC/ODBC] --> Driver[Hive Driver: Compiler, Optimizer, Executor]
    Driver <--> Meta[(Metastore: MySQL/Postgres Schema DB)]
    Driver --> Engine[Execution Engine: MapReduce / Tez / Spark]
    Engine --> HDFS[(HDFS Storage: Raw Data Files)]
    style Driver fill:#1e293b,stroke:#3b82f6,color:#fff
    style Meta fill:#1e293b,stroke:#f59e0b,color:#fff
    style Engine fill:#1e293b,stroke:#10b981,color:#fff
</div>
<h3 class="text-2xl font-bold mb-4 text-blue-400">Apache Hive Architecture & Metastore</h3>
<p class="mb-4">Developed by Facebook, <strong>Apache Hive</strong> provides a data warehouse software infrastructure built on top of Apache Hadoop, enabling SQL-literate analysts to query data using <strong>HiveQL</strong>.</p>

<div class="space-y-4 mb-6">
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 class="font-bold text-yellow-300">Hive Metastore</h4>
        <p class="text-sm text-gray-300">The central repository storing all schema definitions, table mappings, partition locations, and column data types for HDFS files. Metastore metadata is typically stored in a high-speed relational database like MySQL or PostgreSQL.</p>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 class="font-bold text-indigo-300">Managed vs External Tables</h4>
        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1">
            <li><strong>Managed (Internal) Table:</strong> Hive owns both schema and data in <code>/user/hive/warehouse</code>. Dropping table deletes both metadata AND physical data.</li>
            <li><strong>External Table:</strong> Hive manages only the schema. Dropping the table drops metadata from Metastore, leaving underlying HDFS data files untouched!</li>
        </ul>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "What happens when you execute 'DROP TABLE' on an EXTERNAL table in Apache Hive?",
                    options: [
                        "A) Both metadata and underlying HDFS data are permanently deleted.",
                        "B) Only the schema metadata is deleted from the Metastore; underlying HDFS data files remain completely intact.",
                        "C) The cluster shuts down.",
                        "D) HDFS throws an error and prevents dropping."
                    ],
                    answer: 1,
                    explanation: "For external tables, Hive drops only metadata; physical data in HDFS is preserved."
                }
            ]
        },
        'cs503-u5t4': {
            title: 'HiveQL: Querying Data & User-Defined Functions',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">HiveQL Syntax & Optimization</h3>
<p class="mb-4">HiveQL compiles SQL queries into DAGs of MapReduce / Apache Tez jobs executed across the Hadoop cluster.</p>

<div class="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-200 mb-6 border border-gray-700">
<span class="text-blue-400">CREATE EXTERNAL TABLE</span> web_logs (<br>
&nbsp;&nbsp;ip_address <span class="text-yellow-300">STRING</span>,<br>
&nbsp;&nbsp;request_time <span class="text-yellow-300">STRING</span>,<br>
&nbsp;&nbsp;http_status <span class="text-yellow-300">INT</span><br>
)<br>
<span class="text-blue-400">PARTITIONED BY</span> (dt <span class="text-yellow-300">STRING</span>)<br>
<span class="text-blue-400">ROW FORMAT DELIMITED FIELDS TERMINATED BY</span> <span class="text-green-300">'\\t'</span><br>
<span class="text-blue-400">STORED AS</span> ORC;
</div>

<h4 class="text-lg font-bold text-teal-300 mb-2">Partitioning & Bucketing</h4>
<p class="text-sm text-gray-300 mb-2"><strong>Partitioning:</strong> Segregates data into separate HDFS subdirectories (e.g. <code>dt=2024-05-01</code>), pruning scans drastically.</p>
<p class="text-sm text-gray-300"><strong>Bucketing:</strong> Hashes data within partitions across fixed files for ultra-fast map-side joins.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary performance benefit of Partitioning tables in Hive?",
                    options: [
                        "A) It encrypts user passwords.",
                        "B) It enables Partition Pruning, scanning only relevant subdirectories on HDFS instead of full table scans.",
                        "C) It converts text to binary.",
                        "D) It increases cluster temperature."
                    ],
                    answer: 1,
                    explanation: "Partition pruning avoids scanning the entire HDFS directory, reading only the partitions requested in the WHERE clause."
                }
            ]
        },
        'cs503-u5t5': {
            title: 'Oracle Big Data Integration & Ecosystem Summary',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Enterprise Big Data Ecosystem & Oracle Integration</h3>
<p class="mb-4">Enterprise architectures bridge classical enterprise data warehouses (EDW) with Big Data clusters:</p>

<ul class="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-6 bg-gray-800 p-5 rounded-xl border border-gray-700">
    <li><strong>Oracle Big Data SQL:</strong> Allows standard Oracle SQL queries to query Oracle RDBMS, Hadoop HDFS, and NoSQL tables simultaneously in a single federated SQL statement.</li>
    <li><strong>Smart Scan Pushdown:</strong> Oracle SQL queries push filtering predicates directly down into Hadoop DataNodes, minimizing network transfer.</li>
    <li><strong>Modern Modernization:</strong> The transition from Hadoop MapReduce to in-memory <strong>Apache Spark</strong>, distributed columnar formats (Parquet / ORC), and Cloud Data Lakes (Delta Lake / Apache Iceberg).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "What does Oracle Big Data SQL enable enterprise organizations to do?",
                    options: [
                        "A) Run Android apps on Oracle servers.",
                        "B) Query data seamlessly across Oracle Database, Hadoop HDFS, and NoSQL stores using a single standard SQL statement.",
                        "C) Replace SQL with C++.",
                        "D) Mine cryptocurrency."
                    ],
                    answer: 1,
                    explanation: "Oracle Big Data SQL provides federated SQL query execution seamlessly bridging relational enterprise warehouses and Hadoop."
                }
            ]
        }
    }
});
