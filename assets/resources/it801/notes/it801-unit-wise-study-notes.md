# CSIT-801 Data Science — Unit-wise Study Notes

> Data science lifecycle, statistics, data wrangling, exploratory analysis, machine learning, visualisation and big data tools.

## Unit 1: Introduction & Data Science Lifecycle

### What is Data Science?

Data science extracts knowledge from data using statistics and computing.

- **Data Science:** interdisciplinary field extracting insight from data
- **Data Scientist:** practitioner combining statistics, programming and domain knowledge
- **CRISP-DM:** process model: business understanding, data understanding, preparation, modelling, evaluation, deployment

### Types of Data

Data is classified by structure and measurement level.

- **Structured Data:** data organised in rows and columns
- **Unstructured Data:** text, images or audio without a fixed schema
- **Nominal vs Ordinal:** categories without order versus ordered categories

### Data Collection & Sources

Data comes from databases, APIs and the web.

- **Web Scraping:** extracting data from web pages programmatically
- **API:** interface for programmatic data access
- **Sampling Bias:** sample that does not represent the population

### Tools of Data Science

Python and R ecosystems dominate.

- **NumPy:** Python library for fast n-dimensional arrays
- **Pandas:** Python library with DataFrame for tabular data
- **Jupyter Notebook:** interactive environment mixing code, output and text

## Unit 2: Statistics for Data Science

### Descriptive Statistics

Summaries describe the centre and spread of data.

- **Mean:** arithmetic average of values
- **Standard Deviation:** square root of the average squared deviation from the mean
- **Skewness:** measure of asymmetry of a distribution

### Probability & Distributions

Probability models randomness in data.

- **Normal Distribution:** symmetric bell curve defined by mean and SD
- **Central Limit Theorem:** sample means approach a normal distribution as n grows
- **Random Variable:** numerical outcome of a random process

### Hypothesis Testing

Tests decide whether evidence supports a claim.

- **Null Hypothesis:** default claim of no effect
- **p-value:** probability of results at least as extreme if the null is true
- **Type I Error:** rejecting a true null hypothesis

### Correlation & Regression

Relationships between variables are measured and modelled.

- **Correlation Coefficient:** strength and direction of a linear relationship
- **Linear Regression:** models y as a linear function of predictors
- **Correlation vs Causation:** correlation alone does not prove cause

## Unit 3: Data Wrangling & Exploration

### Data Cleaning

Raw data must be cleaned before analysis.

- **Missing Value Imputation:** filling gaps using mean, median or models
- **Outlier:** observation far from the rest of the data
- **Data Deduplication:** removing repeated records

### Data Transformation

Features are rescaled and encoded for modelling.

- **Normalisation:** scaling values to a fixed range such as 0 to 1
- **Standardisation:** rescaling to zero mean and unit variance
- **One-hot Encoding:** converting categories into binary indicator columns

### Exploratory Data Analysis

EDA reveals patterns, anomalies and hypotheses.

- **EDA:** exploring data with summaries and plots before modelling
- **Box Plot:** shows median, quartiles and outliers
- **Correlation Matrix:** table of pairwise correlation coefficients

### Feature Engineering

Better features often beat better algorithms.

- **Feature Engineering:** creating informative input variables from raw data
- **Feature Selection:** choosing a subset of relevant features
- **Dimensionality Reduction:** reducing variables, e.g. with PCA

## Unit 4: Machine Learning for Data Science

### Supervised Learning Models

Models learn from labelled examples.

- **Logistic Regression:** models probability of a binary outcome
- **Random Forest:** ensemble of decision trees using bagging
- **Support Vector Machine:** finds the maximum-margin separating hyperplane

### Unsupervised Learning

Models find structure without labels.

- **K-Means Clustering:** partitions data into k clusters around centroids
- **Hierarchical Clustering:** builds a dendrogram by merging or splitting clusters
- **Association Rules:** if-then patterns such as market-basket rules

### Model Evaluation

Metrics and validation estimate real-world performance.

- **Confusion Matrix:** table of true and false positives and negatives
- **Cross-validation:** rotating train-test splits to estimate performance
- **F1 Score:** harmonic mean of precision and recall

### Overfitting & Regularisation

Models must generalise beyond training data.

- **Overfitting:** model fits noise in training data and fails on new data
- **Bias-Variance Trade-off:** balance between underfitting and overfitting
- **Regularisation:** penalising model complexity, e.g. L1 or L2

## Unit 5: Visualisation, Big Data & Ethics

### Data Visualisation Principles

Good charts communicate clearly.

- **Data Visualisation:** graphical representation of data
- **Histogram:** bar chart of value frequencies in bins
- **Scatter Plot:** plot showing the relationship of two numeric variables

### Visualisation Tools

Libraries and BI tools create charts and dashboards.

- **Matplotlib:** foundational Python plotting library
- **Seaborn:** statistical visualisation library built on Matplotlib
- **Tableau:** business intelligence tool for interactive dashboards

### Big Data Tools

Large datasets need distributed tools.

- **Apache Spark:** in-memory distributed data processing engine
- **HDFS:** Hadoop distributed file system
- **NoSQL Database:** non-relational store such as MongoDB or Cassandra

### Data Ethics & Privacy

Responsible data science protects people.

- **Data Privacy:** protecting personal data from misuse
- **Anonymisation:** removing identifiers from data
- **Data Governance:** policies for data quality, security and use

## Standard Textbooks

- *Data Science from Scratch* — Joel Grus
- *Python for Data Analysis* — Wes McKinney
- *An Introduction to Statistical Learning* — James, Witten, Hastie & Tibshirani

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
