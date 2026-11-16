# CSIT-802(A) Data Warehousing & Mining — Question Bank with Answer Hints

## Unit 1: Data Warehousing Concepts

### Short answer (2-3 marks)

- **Q.** Define *Data Warehouse*.  
  **Ans.** subject-oriented, integrated, time-variant, non-volatile data collection
- **Q.** Define *OLTP vs OLAP*.  
  **Ans.** transaction processing versus analytical processing
- **Q.** Define *Data Mart*.  
  **Ans.** subset of a warehouse for one department
- **Q.** Define *Three-tier Architecture*.  
  **Ans.** bottom warehouse server, middle OLAP server, top client tools
- **Q.** Define *ETL*.  
  **Ans.** extract, transform and load process
- **Q.** Define *Metadata Repository*.  
  **Ans.** data about warehouse data and processes
- **Q.** Define *Fact Table*.  
  **Ans.** table of measures with foreign keys to dimensions
- **Q.** Define *Dimension Table*.  
  **Ans.** descriptive attributes such as time, product, location
- **Q.** Define *Data Cube*.  
  **Ans.** multidimensional view of measures
- **Q.** Define *Star Schema*.  
  **Ans.** central fact table joined to denormalised dimensions
- **Q.** Define *Snowflake Schema*.  
  **Ans.** dimensions normalised into sub-tables
- **Q.** Define *Fact Constellation*.  
  **Ans.** multiple fact tables sharing dimensions

### Long answer (7 marks)

- **Q.** Explain *Data Warehouse Fundamentals* in detail with a neat diagram.  
  **Key points:** A warehouse integrates historical data for decision support. Data Warehouse — subject-oriented, integrated, time-variant, non-volatile data collection; OLTP vs OLAP — transaction processing versus analytical processing; Data Mart — subset of a warehouse for one department.
- **Q.** Explain *Warehouse Architecture* in detail with a neat diagram.  
  **Key points:** Data flows from sources through ETL into the warehouse. Three-tier Architecture — bottom warehouse server, middle OLAP server, top client tools; ETL — extract, transform and load process; Metadata Repository — data about warehouse data and processes.
- **Q.** Explain *Multidimensional Data Model* in detail with a neat diagram.  
  **Key points:** Data is viewed as cubes of facts and dimensions. Fact Table — table of measures with foreign keys to dimensions; Dimension Table — descriptive attributes such as time, product, location; Data Cube — multidimensional view of measures.
- **Q.** Explain *Schemas for Warehouses* in detail with a neat diagram.  
  **Key points:** Schemas arrange fact and dimension tables. Star Schema — central fact table joined to denormalised dimensions; Snowflake Schema — dimensions normalised into sub-tables; Fact Constellation — multiple fact tables sharing dimensions.

## Unit 2: OLAP & Preprocessing

### Short answer (2-3 marks)

- **Q.** Define *Roll-up*.  
  **Ans.** aggregating to a higher level of a hierarchy
- **Q.** Define *Drill-down*.  
  **Ans.** moving to more detailed data
- **Q.** Define *Slice and Dice*.  
  **Ans.** selecting one dimension value or a sub-cube
- **Q.** Define *ROLAP*.  
  **Ans.** relational OLAP storing data in relational tables
- **Q.** Define *MOLAP*.  
  **Ans.** multidimensional OLAP using array-based storage
- **Q.** Define *HOLAP*.  
  **Ans.** hybrid combining ROLAP and MOLAP
- **Q.** Define *Data Cleaning*.  
  **Ans.** filling missing values and smoothing noise
- **Q.** Define *Data Integration*.  
  **Ans.** combining data from multiple sources
- **Q.** Define *Binning*.  
  **Ans.** smoothing by grouping values into bins
- **Q.** Define *Dimensionality Reduction*.  
  **Ans.** reducing attributes, e.g. PCA
- **Q.** Define *Numerosity Reduction*.  
  **Ans.** replacing data with models or samples
- **Q.** Define *Concept Hierarchy*.  
  **Ans.** mapping low-level values to higher-level concepts

### Long answer (7 marks)

- **Q.** Explain *OLAP Operations* in detail with a neat diagram.  
  **Key points:** OLAP lets analysts navigate cubes. Roll-up — aggregating to a higher level of a hierarchy; Drill-down — moving to more detailed data; Slice and Dice — selecting one dimension value or a sub-cube.
- **Q.** Explain *OLAP Servers* in detail with a neat diagram.  
  **Key points:** OLAP engines store cubes in different ways. ROLAP — relational OLAP storing data in relational tables; MOLAP — multidimensional OLAP using array-based storage; HOLAP — hybrid combining ROLAP and MOLAP.
- **Q.** Explain *Data Preprocessing* in detail with a neat diagram.  
  **Key points:** Mining needs clean, integrated, reduced data. Data Cleaning — filling missing values and smoothing noise; Data Integration — combining data from multiple sources; Binning — smoothing by grouping values into bins.
- **Q.** Explain *Data Reduction & Discretisation* in detail with a neat diagram.  
  **Key points:** Smaller representations speed mining. Dimensionality Reduction — reducing attributes, e.g. PCA; Numerosity Reduction — replacing data with models or samples; Concept Hierarchy — mapping low-level values to higher-level concepts.

## Unit 3: Association Rule Mining

### Short answer (2-3 marks)

- **Q.** Define *Support*.  
  **Ans.** fraction of transactions containing an itemset
- **Q.** Define *Confidence*.  
  **Ans.** support(A ∪ B) divided by support(A)
- **Q.** Define *Frequent Itemset*.  
  **Ans.** itemset meeting the minimum support
- **Q.** Define *Apriori Property*.  
  **Ans.** every subset of a frequent itemset is frequent
- **Q.** Define *Candidate Generation*.  
  **Ans.** joining frequent k-itemsets to form (k+1)-itemsets
- **Q.** Define *Pruning Step*.  
  **Ans.** discarding candidates with an infrequent subset
- **Q.** Define *FP-Tree*.  
  **Ans.** compressed prefix tree of transactions
- **Q.** Define *Conditional Pattern Base*.  
  **Ans.** prefix paths ending in an item
- **Q.** Define *FP-Growth*.  
  **Ans.** recursive mining of conditional FP-trees
- **Q.** Define *Lift*.  
  **Ans.** confidence divided by support of the consequent
- **Q.** Define *Lift Greater Than 1*.  
  **Ans.** positive correlation between antecedent and consequent
- **Q.** Define *Closed Itemset*.  
  **Ans.** no superset has the same support

### Long answer (7 marks)

- **Q.** Explain *Frequent Itemsets* in detail with a neat diagram.  
  **Key points:** Mining finds items that often occur together. Support — fraction of transactions containing an itemset; Confidence — support(A ∪ B) divided by support(A); Frequent Itemset — itemset meeting the minimum support.
- **Q.** Explain *Apriori Algorithm* in detail with a neat diagram.  
  **Key points:** Apriori generates candidates level by level. Apriori Property — every subset of a frequent itemset is frequent; Candidate Generation — joining frequent k-itemsets to form (k+1)-itemsets; Pruning Step — discarding candidates with an infrequent subset.
- **Q.** Explain *FP-Growth* in detail with a neat diagram.  
  **Key points:** FP-Growth mines without candidate generation. FP-Tree — compressed prefix tree of transactions; Conditional Pattern Base — prefix paths ending in an item; FP-Growth — recursive mining of conditional FP-trees.
- **Q.** Explain *Interestingness Measures* in detail with a neat diagram.  
  **Key points:** Strong rules are not always interesting. Lift — confidence divided by support of the consequent; Lift Greater Than 1 — positive correlation between antecedent and consequent; Closed Itemset — no superset has the same support.

## Unit 4: Classification

### Short answer (2-3 marks)

- **Q.** Define *Information Gain*.  
  **Ans.** reduction in entropy after a split, used by ID3
- **Q.** Define *Gain Ratio*.  
  **Ans.** normalised information gain used by C4.5
- **Q.** Define *Gini Index*.  
  **Ans.** impurity measure used by CART
- **Q.** Define *Naive Bayes*.  
  **Ans.** assumes attributes are conditionally independent given the class
- **Q.** Define *Posterior Probability*.  
  **Ans.** P(class given data)
- **Q.** Define *Laplace Correction*.  
  **Ans.** avoids zero probabilities by adding one to counts
- **Q.** Define *Rule-based Classifier*.  
  **Ans.** IF-THEN rules for classification
- **Q.** Define *k-Nearest Neighbour*.  
  **Ans.** lazy learner using the majority of nearest training tuples
- **Q.** Define *Eager Learner*.  
  **Ans.** builds a model before seeing test data
- **Q.** Define *Precision*.  
  **Ans.** TP divided by (TP + FP)
- **Q.** Define *Recall*.  
  **Ans.** TP divided by (TP + FN)
- **Q.** Define *ROC Curve*.  
  **Ans.** true positive rate versus false positive rate

### Long answer (7 marks)

- **Q.** Explain *Decision Tree Induction* in detail with a neat diagram.  
  **Key points:** Trees split data on informative attributes. Information Gain — reduction in entropy after a split, used by ID3; Gain Ratio — normalised information gain used by C4.5; Gini Index — impurity measure used by CART.
- **Q.** Explain *Bayesian Classification* in detail with a neat diagram.  
  **Key points:** Probabilistic classifiers apply Bayes' theorem. Naive Bayes — assumes attributes are conditionally independent given the class; Posterior Probability — P(class given data); Laplace Correction — avoids zero probabilities by adding one to counts.
- **Q.** Explain *Rule-based & Lazy Learners* in detail with a neat diagram.  
  **Key points:** Other classifiers use rules or nearest neighbours. Rule-based Classifier — IF-THEN rules for classification; k-Nearest Neighbour — lazy learner using the majority of nearest training tuples; Eager Learner — builds a model before seeing test data.
- **Q.** Explain *Classifier Evaluation* in detail with a neat diagram.  
  **Key points:** Accuracy alone can mislead. Precision — TP divided by (TP + FP); Recall — TP divided by (TP + FN); ROC Curve — true positive rate versus false positive rate.

## Unit 5: Clustering & Advanced Mining

### Short answer (2-3 marks)

- **Q.** Define *K-Means*.  
  **Ans.** assigns points to nearest centroid and updates centroids
- **Q.** Define *K-Medoids*.  
  **Ans.** uses actual data points as cluster centres; robust to outliers
- **Q.** Define *Sum of Squared Error*.  
  **Ans.** clustering quality measure for K-Means
- **Q.** Define *Agglomerative Clustering*.  
  **Ans.** bottom-up merging of closest clusters
- **Q.** Define *DBSCAN*.  
  **Ans.** density-based clustering finding arbitrary shapes and noise
- **Q.** Define *Dendrogram*.  
  **Ans.** tree diagram of hierarchical clustering
- **Q.** Define *Outlier*.  
  **Ans.** object deviating significantly from the rest
- **Q.** Define *Statistical Outlier Detection*.  
  **Ans.** flags points in low-probability regions
- **Q.** Define *Distance-based Outlier*.  
  **Ans.** point with few neighbours within a radius
- **Q.** Define *Web Usage Mining*.  
  **Ans.** discovering patterns from web logs
- **Q.** Define *Text Mining*.  
  **Ans.** extracting knowledge from unstructured text
- **Q.** Define *PageRank*.  
  **Ans.** link analysis ranking web pages by incoming links

### Long answer (7 marks)

- **Q.** Explain *Partitioning Methods* in detail with a neat diagram.  
  **Key points:** Partitioning divides data into k groups. K-Means — assigns points to nearest centroid and updates centroids; K-Medoids — uses actual data points as cluster centres; robust to outliers; Sum of Squared Error — clustering quality measure for K-Means.
- **Q.** Explain *Hierarchical & Density-based Methods* in detail with a neat diagram.  
  **Key points:** Other clustering methods need no fixed k or find odd shapes. Agglomerative Clustering — bottom-up merging of closest clusters; DBSCAN — density-based clustering finding arbitrary shapes and noise; Dendrogram — tree diagram of hierarchical clustering.
- **Q.** Explain *Outlier Analysis* in detail with a neat diagram.  
  **Key points:** Outlier detection finds rare, unusual objects. Outlier — object deviating significantly from the rest; Statistical Outlier Detection — flags points in low-probability regions; Distance-based Outlier — point with few neighbours within a radius.
- **Q.** Explain *Web, Text & Spatial Mining* in detail with a neat diagram.  
  **Key points:** Mining extends to complex data types. Web Usage Mining — discovering patterns from web logs; Text Mining — extracting knowledge from unstructured text; PageRank — link analysis ranking web pages by incoming links.

