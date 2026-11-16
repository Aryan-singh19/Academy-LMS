# CSIT-802(A) Data Warehousing & Mining — Unit-wise Study Notes

> Data warehouse architecture, OLAP, preprocessing, association rules, classification, clustering and web mining.

## Unit 1: Data Warehousing Concepts

### Data Warehouse Fundamentals

A warehouse integrates historical data for decision support.

- **Data Warehouse:** subject-oriented, integrated, time-variant, non-volatile data collection
- **OLTP vs OLAP:** transaction processing versus analytical processing
- **Data Mart:** subset of a warehouse for one department

### Warehouse Architecture

Data flows from sources through ETL into the warehouse.

- **Three-tier Architecture:** bottom warehouse server, middle OLAP server, top client tools
- **ETL:** extract, transform and load process
- **Metadata Repository:** data about warehouse data and processes

### Multidimensional Data Model

Data is viewed as cubes of facts and dimensions.

- **Fact Table:** table of measures with foreign keys to dimensions
- **Dimension Table:** descriptive attributes such as time, product, location
- **Data Cube:** multidimensional view of measures

### Schemas for Warehouses

Schemas arrange fact and dimension tables.

- **Star Schema:** central fact table joined to denormalised dimensions
- **Snowflake Schema:** dimensions normalised into sub-tables
- **Fact Constellation:** multiple fact tables sharing dimensions

## Unit 2: OLAP & Preprocessing

### OLAP Operations

OLAP lets analysts navigate cubes.

- **Roll-up:** aggregating to a higher level of a hierarchy
- **Drill-down:** moving to more detailed data
- **Slice and Dice:** selecting one dimension value or a sub-cube

### OLAP Servers

OLAP engines store cubes in different ways.

- **ROLAP:** relational OLAP storing data in relational tables
- **MOLAP:** multidimensional OLAP using array-based storage
- **HOLAP:** hybrid combining ROLAP and MOLAP

### Data Preprocessing

Mining needs clean, integrated, reduced data.

- **Data Cleaning:** filling missing values and smoothing noise
- **Data Integration:** combining data from multiple sources
- **Binning:** smoothing by grouping values into bins

### Data Reduction & Discretisation

Smaller representations speed mining.

- **Dimensionality Reduction:** reducing attributes, e.g. PCA
- **Numerosity Reduction:** replacing data with models or samples
- **Concept Hierarchy:** mapping low-level values to higher-level concepts

## Unit 3: Association Rule Mining

### Frequent Itemsets

Mining finds items that often occur together.

- **Support:** fraction of transactions containing an itemset
- **Confidence:** support(A ∪ B) divided by support(A)
- **Frequent Itemset:** itemset meeting the minimum support

### Apriori Algorithm

Apriori generates candidates level by level.

- **Apriori Property:** every subset of a frequent itemset is frequent
- **Candidate Generation:** joining frequent k-itemsets to form (k+1)-itemsets
- **Pruning Step:** discarding candidates with an infrequent subset

### FP-Growth

FP-Growth mines without candidate generation.

- **FP-Tree:** compressed prefix tree of transactions
- **Conditional Pattern Base:** prefix paths ending in an item
- **FP-Growth:** recursive mining of conditional FP-trees

### Interestingness Measures

Strong rules are not always interesting.

- **Lift:** confidence divided by support of the consequent
- **Lift Greater Than 1:** positive correlation between antecedent and consequent
- **Closed Itemset:** no superset has the same support

## Unit 4: Classification

### Decision Tree Induction

Trees split data on informative attributes.

- **Information Gain:** reduction in entropy after a split, used by ID3
- **Gain Ratio:** normalised information gain used by C4.5
- **Gini Index:** impurity measure used by CART

### Bayesian Classification

Probabilistic classifiers apply Bayes' theorem.

- **Naive Bayes:** assumes attributes are conditionally independent given the class
- **Posterior Probability:** P(class given data)
- **Laplace Correction:** avoids zero probabilities by adding one to counts

### Rule-based & Lazy Learners

Other classifiers use rules or nearest neighbours.

- **Rule-based Classifier:** IF-THEN rules for classification
- **k-Nearest Neighbour:** lazy learner using the majority of nearest training tuples
- **Eager Learner:** builds a model before seeing test data

### Classifier Evaluation

Accuracy alone can mislead.

- **Precision:** TP divided by (TP + FP)
- **Recall:** TP divided by (TP + FN)
- **ROC Curve:** true positive rate versus false positive rate

## Unit 5: Clustering & Advanced Mining

### Partitioning Methods

Partitioning divides data into k groups.

- **K-Means:** assigns points to nearest centroid and updates centroids
- **K-Medoids:** uses actual data points as cluster centres; robust to outliers
- **Sum of Squared Error:** clustering quality measure for K-Means

### Hierarchical & Density-based Methods

Other clustering methods need no fixed k or find odd shapes.

- **Agglomerative Clustering:** bottom-up merging of closest clusters
- **DBSCAN:** density-based clustering finding arbitrary shapes and noise
- **Dendrogram:** tree diagram of hierarchical clustering

### Outlier Analysis

Outlier detection finds rare, unusual objects.

- **Outlier:** object deviating significantly from the rest
- **Statistical Outlier Detection:** flags points in low-probability regions
- **Distance-based Outlier:** point with few neighbours within a radius

### Web, Text & Spatial Mining

Mining extends to complex data types.

- **Web Usage Mining:** discovering patterns from web logs
- **Text Mining:** extracting knowledge from unstructured text
- **PageRank:** link analysis ranking web pages by incoming links

## Standard Textbooks

- *Data Mining: Concepts and Techniques* — Han, Kamber & Pei
- *Introduction to Data Mining* — Tan, Steinbach & Kumar
- *Building the Data Warehouse* — W. H. Inmon

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
