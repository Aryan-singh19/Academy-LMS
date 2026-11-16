# CSIT-801 Data Science — Question Bank with Answer Hints

## Unit 1: Introduction & Data Science Lifecycle

### Short answer (2-3 marks)

- **Q.** Define *Data Science*.  
  **Ans.** interdisciplinary field extracting insight from data
- **Q.** Define *Data Scientist*.  
  **Ans.** practitioner combining statistics, programming and domain knowledge
- **Q.** Define *CRISP-DM*.  
  **Ans.** process model: business understanding, data understanding, preparation, modelling, evaluation, deployment
- **Q.** Define *Structured Data*.  
  **Ans.** data organised in rows and columns
- **Q.** Define *Unstructured Data*.  
  **Ans.** text, images or audio without a fixed schema
- **Q.** Define *Nominal vs Ordinal*.  
  **Ans.** categories without order versus ordered categories
- **Q.** Define *Web Scraping*.  
  **Ans.** extracting data from web pages programmatically
- **Q.** Define *API*.  
  **Ans.** interface for programmatic data access
- **Q.** Define *Sampling Bias*.  
  **Ans.** sample that does not represent the population
- **Q.** Define *NumPy*.  
  **Ans.** Python library for fast n-dimensional arrays
- **Q.** Define *Pandas*.  
  **Ans.** Python library with DataFrame for tabular data
- **Q.** Define *Jupyter Notebook*.  
  **Ans.** interactive environment mixing code, output and text

### Long answer (7 marks)

- **Q.** Explain *What is Data Science?* in detail with a neat diagram.  
  **Key points:** Data science extracts knowledge from data using statistics and computing. Data Science — interdisciplinary field extracting insight from data; Data Scientist — practitioner combining statistics, programming and domain knowledge; CRISP-DM — process model: business understanding, data understanding, preparation, modelling, evaluation, deployment.
- **Q.** Explain *Types of Data* in detail with a neat diagram.  
  **Key points:** Data is classified by structure and measurement level. Structured Data — data organised in rows and columns; Unstructured Data — text, images or audio without a fixed schema; Nominal vs Ordinal — categories without order versus ordered categories.
- **Q.** Explain *Data Collection & Sources* in detail with a neat diagram.  
  **Key points:** Data comes from databases, APIs and the web. Web Scraping — extracting data from web pages programmatically; API — interface for programmatic data access; Sampling Bias — sample that does not represent the population.
- **Q.** Explain *Tools of Data Science* in detail with a neat diagram.  
  **Key points:** Python and R ecosystems dominate. NumPy — Python library for fast n-dimensional arrays; Pandas — Python library with DataFrame for tabular data; Jupyter Notebook — interactive environment mixing code, output and text.

## Unit 2: Statistics for Data Science

### Short answer (2-3 marks)

- **Q.** Define *Mean*.  
  **Ans.** arithmetic average of values
- **Q.** Define *Standard Deviation*.  
  **Ans.** square root of the average squared deviation from the mean
- **Q.** Define *Skewness*.  
  **Ans.** measure of asymmetry of a distribution
- **Q.** Define *Normal Distribution*.  
  **Ans.** symmetric bell curve defined by mean and SD
- **Q.** Define *Central Limit Theorem*.  
  **Ans.** sample means approach a normal distribution as n grows
- **Q.** Define *Random Variable*.  
  **Ans.** numerical outcome of a random process
- **Q.** Define *Null Hypothesis*.  
  **Ans.** default claim of no effect
- **Q.** Define *p-value*.  
  **Ans.** probability of results at least as extreme if the null is true
- **Q.** Define *Type I Error*.  
  **Ans.** rejecting a true null hypothesis
- **Q.** Define *Correlation Coefficient*.  
  **Ans.** strength and direction of a linear relationship
- **Q.** Define *Linear Regression*.  
  **Ans.** models y as a linear function of predictors
- **Q.** Define *Correlation vs Causation*.  
  **Ans.** correlation alone does not prove cause

### Long answer (7 marks)

- **Q.** Explain *Descriptive Statistics* in detail with a neat diagram.  
  **Key points:** Summaries describe the centre and spread of data. Mean — arithmetic average of values; Standard Deviation — square root of the average squared deviation from the mean; Skewness — measure of asymmetry of a distribution.
- **Q.** Explain *Probability & Distributions* in detail with a neat diagram.  
  **Key points:** Probability models randomness in data. Normal Distribution — symmetric bell curve defined by mean and SD; Central Limit Theorem — sample means approach a normal distribution as n grows; Random Variable — numerical outcome of a random process.
- **Q.** Explain *Hypothesis Testing* in detail with a neat diagram.  
  **Key points:** Tests decide whether evidence supports a claim. Null Hypothesis — default claim of no effect; p-value — probability of results at least as extreme if the null is true; Type I Error — rejecting a true null hypothesis.
- **Q.** Explain *Correlation & Regression* in detail with a neat diagram.  
  **Key points:** Relationships between variables are measured and modelled. Correlation Coefficient — strength and direction of a linear relationship; Linear Regression — models y as a linear function of predictors; Correlation vs Causation — correlation alone does not prove cause.

## Unit 3: Data Wrangling & Exploration

### Short answer (2-3 marks)

- **Q.** Define *Missing Value Imputation*.  
  **Ans.** filling gaps using mean, median or models
- **Q.** Define *Outlier*.  
  **Ans.** observation far from the rest of the data
- **Q.** Define *Data Deduplication*.  
  **Ans.** removing repeated records
- **Q.** Define *Normalisation*.  
  **Ans.** scaling values to a fixed range such as 0 to 1
- **Q.** Define *Standardisation*.  
  **Ans.** rescaling to zero mean and unit variance
- **Q.** Define *One-hot Encoding*.  
  **Ans.** converting categories into binary indicator columns
- **Q.** Define *EDA*.  
  **Ans.** exploring data with summaries and plots before modelling
- **Q.** Define *Box Plot*.  
  **Ans.** shows median, quartiles and outliers
- **Q.** Define *Correlation Matrix*.  
  **Ans.** table of pairwise correlation coefficients
- **Q.** Define *Feature Engineering*.  
  **Ans.** creating informative input variables from raw data
- **Q.** Define *Feature Selection*.  
  **Ans.** choosing a subset of relevant features
- **Q.** Define *Dimensionality Reduction*.  
  **Ans.** reducing variables, e.g. with PCA

### Long answer (7 marks)

- **Q.** Explain *Data Cleaning* in detail with a neat diagram.  
  **Key points:** Raw data must be cleaned before analysis. Missing Value Imputation — filling gaps using mean, median or models; Outlier — observation far from the rest of the data; Data Deduplication — removing repeated records.
- **Q.** Explain *Data Transformation* in detail with a neat diagram.  
  **Key points:** Features are rescaled and encoded for modelling. Normalisation — scaling values to a fixed range such as 0 to 1; Standardisation — rescaling to zero mean and unit variance; One-hot Encoding — converting categories into binary indicator columns.
- **Q.** Explain *Exploratory Data Analysis* in detail with a neat diagram.  
  **Key points:** EDA reveals patterns, anomalies and hypotheses. EDA — exploring data with summaries and plots before modelling; Box Plot — shows median, quartiles and outliers; Correlation Matrix — table of pairwise correlation coefficients.
- **Q.** Explain *Feature Engineering* in detail with a neat diagram.  
  **Key points:** Better features often beat better algorithms. Feature Engineering — creating informative input variables from raw data; Feature Selection — choosing a subset of relevant features; Dimensionality Reduction — reducing variables, e.g. with PCA.

## Unit 4: Machine Learning for Data Science

### Short answer (2-3 marks)

- **Q.** Define *Logistic Regression*.  
  **Ans.** models probability of a binary outcome
- **Q.** Define *Random Forest*.  
  **Ans.** ensemble of decision trees using bagging
- **Q.** Define *Support Vector Machine*.  
  **Ans.** finds the maximum-margin separating hyperplane
- **Q.** Define *K-Means Clustering*.  
  **Ans.** partitions data into k clusters around centroids
- **Q.** Define *Hierarchical Clustering*.  
  **Ans.** builds a dendrogram by merging or splitting clusters
- **Q.** Define *Association Rules*.  
  **Ans.** if-then patterns such as market-basket rules
- **Q.** Define *Confusion Matrix*.  
  **Ans.** table of true and false positives and negatives
- **Q.** Define *Cross-validation*.  
  **Ans.** rotating train-test splits to estimate performance
- **Q.** Define *F1 Score*.  
  **Ans.** harmonic mean of precision and recall
- **Q.** Define *Overfitting*.  
  **Ans.** model fits noise in training data and fails on new data
- **Q.** Define *Bias-Variance Trade-off*.  
  **Ans.** balance between underfitting and overfitting
- **Q.** Define *Regularisation*.  
  **Ans.** penalising model complexity, e.g. L1 or L2

### Long answer (7 marks)

- **Q.** Explain *Supervised Learning Models* in detail with a neat diagram.  
  **Key points:** Models learn from labelled examples. Logistic Regression — models probability of a binary outcome; Random Forest — ensemble of decision trees using bagging; Support Vector Machine — finds the maximum-margin separating hyperplane.
- **Q.** Explain *Unsupervised Learning* in detail with a neat diagram.  
  **Key points:** Models find structure without labels. K-Means Clustering — partitions data into k clusters around centroids; Hierarchical Clustering — builds a dendrogram by merging or splitting clusters; Association Rules — if-then patterns such as market-basket rules.
- **Q.** Explain *Model Evaluation* in detail with a neat diagram.  
  **Key points:** Metrics and validation estimate real-world performance. Confusion Matrix — table of true and false positives and negatives; Cross-validation — rotating train-test splits to estimate performance; F1 Score — harmonic mean of precision and recall.
- **Q.** Explain *Overfitting & Regularisation* in detail with a neat diagram.  
  **Key points:** Models must generalise beyond training data. Overfitting — model fits noise in training data and fails on new data; Bias-Variance Trade-off — balance between underfitting and overfitting; Regularisation — penalising model complexity, e.g. L1 or L2.

## Unit 5: Visualisation, Big Data & Ethics

### Short answer (2-3 marks)

- **Q.** Define *Data Visualisation*.  
  **Ans.** graphical representation of data
- **Q.** Define *Histogram*.  
  **Ans.** bar chart of value frequencies in bins
- **Q.** Define *Scatter Plot*.  
  **Ans.** plot showing the relationship of two numeric variables
- **Q.** Define *Matplotlib*.  
  **Ans.** foundational Python plotting library
- **Q.** Define *Seaborn*.  
  **Ans.** statistical visualisation library built on Matplotlib
- **Q.** Define *Tableau*.  
  **Ans.** business intelligence tool for interactive dashboards
- **Q.** Define *Apache Spark*.  
  **Ans.** in-memory distributed data processing engine
- **Q.** Define *HDFS*.  
  **Ans.** Hadoop distributed file system
- **Q.** Define *NoSQL Database*.  
  **Ans.** non-relational store such as MongoDB or Cassandra
- **Q.** Define *Data Privacy*.  
  **Ans.** protecting personal data from misuse
- **Q.** Define *Anonymisation*.  
  **Ans.** removing identifiers from data
- **Q.** Define *Data Governance*.  
  **Ans.** policies for data quality, security and use

### Long answer (7 marks)

- **Q.** Explain *Data Visualisation Principles* in detail with a neat diagram.  
  **Key points:** Good charts communicate clearly. Data Visualisation — graphical representation of data; Histogram — bar chart of value frequencies in bins; Scatter Plot — plot showing the relationship of two numeric variables.
- **Q.** Explain *Visualisation Tools* in detail with a neat diagram.  
  **Key points:** Libraries and BI tools create charts and dashboards. Matplotlib — foundational Python plotting library; Seaborn — statistical visualisation library built on Matplotlib; Tableau — business intelligence tool for interactive dashboards.
- **Q.** Explain *Big Data Tools* in detail with a neat diagram.  
  **Key points:** Large datasets need distributed tools. Apache Spark — in-memory distributed data processing engine; HDFS — Hadoop distributed file system; NoSQL Database — non-relational store such as MongoDB or Cassandra.
- **Q.** Explain *Data Ethics & Privacy* in detail with a neat diagram.  
  **Key points:** Responsible data science protects people. Data Privacy — protecting personal data from misuse; Anonymisation — removing identifiers from data; Data Governance — policies for data quality, security and use.

