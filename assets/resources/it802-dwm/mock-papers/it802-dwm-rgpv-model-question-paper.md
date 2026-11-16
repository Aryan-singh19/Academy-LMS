# CSIT-802(A) Data Warehousing & Mining — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: IT Sem 8: CSIT-802(A).

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Data Warehouse. Explain its role in Data Warehouse Fundamentals with a suitable example or diagram. **[7]**

(b) Explain Warehouse Architecture in detail. Differentiate between Three-tier Architecture and ETL. **[7]**

**Q2.** *(Unit 2)*

(a) Define MOLAP. Explain its role in OLAP Servers with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Data Preprocessing. Bring out the significance of Data Cleaning and Data Integration. **[7]**

**Q3.** *(Unit 3)*

(a) Define FP-Growth. Explain its role in FP-Growth with a suitable example or diagram. **[7]**

(b) Explain Interestingness Measures in detail. Differentiate between Lift and Lift Greater Than 1. **[7]**

**Q4.** *(Unit 4)*

(a) Define Precision. Explain its role in Classifier Evaluation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Decision Tree Induction. Bring out the significance of Information Gain and Gain Ratio. **[7]**

**Q5.** *(Unit 5)*

(a) Define K-Medoids. Explain its role in Partitioning Methods with a suitable example or diagram. **[7]**

(b) Explain Hierarchical & Density-based Methods in detail. Differentiate between Agglomerative Clustering and DBSCAN. **[7]**

**Q6.** *(Unit 1)*

(a) Define Fact Constellation. Explain its role in Schemas for Warehouses with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Data Warehouse Fundamentals. Bring out the significance of Data Warehouse and OLTP vs OLAP. **[7]**

**Q7.** *(Unit 3)*

(a) Define Support. Explain its role in Frequent Itemsets with a suitable example or diagram. **[7]**

(b) Explain Apriori Algorithm in detail. Differentiate between Apriori Property and Candidate Generation. **[7]**

**Q8.** *(Unit 5)*

(a) Define DBSCAN. Explain its role in Hierarchical & Density-based Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Outlier Analysis. Bring out the significance of Outlier and Statistical Outlier Detection. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define ETL. Explain its role in Warehouse Architecture with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Multidimensional Data Model. Bring out the significance of Fact Table and Dimension Table. **[7]**

**Q2.** *(Unit 2)*

(a) Define Binning. Explain its role in Data Preprocessing with a suitable example or diagram. **[7]**

(b) Explain Data Reduction & Discretisation in detail. Differentiate between Dimensionality Reduction and Numerosity Reduction. **[7]**

**Q3.** *(Unit 3)*

(a) Define Lift. Explain its role in Interestingness Measures with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Frequent Itemsets. Bring out the significance of Support and Confidence. **[7]**

**Q4.** *(Unit 4)*

(a) Define Gain Ratio. Explain its role in Decision Tree Induction with a suitable example or diagram. **[7]**

(b) Explain Bayesian Classification in detail. Differentiate between Naive Bayes and Posterior Probability. **[7]**

**Q5.** *(Unit 5)*

(a) Define Dendrogram. Explain its role in Hierarchical & Density-based Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Outlier Analysis. Bring out the significance of Outlier and Statistical Outlier Detection. **[7]**

**Q6.** *(Unit 2)*

(a) Define Roll-up. Explain its role in OLAP Operations with a suitable example or diagram. **[7]**

(b) Explain OLAP Servers in detail. Differentiate between ROLAP and MOLAP. **[7]**

**Q7.** *(Unit 4)*

(a) Define Posterior Probability. Explain its role in Bayesian Classification with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Rule-based & Lazy Learners. Bring out the significance of Rule-based Classifier and k-Nearest Neighbour. **[7]**

**Q8.** *(Unit 1)*

(a) Define Data Cube. Explain its role in Multidimensional Data Model with a suitable example or diagram. **[7]**

(b) Explain Schemas for Warehouses in detail. Differentiate between Star Schema and Snowflake Schema. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Data Warehouse: subject-oriented, integrated, time-variant, non-volatile data collection
- **Q1(b):** Three-tier Architecture: bottom warehouse server, middle OLAP server, top client tools | ETL: extract, transform and load process | Metadata Repository: data about warehouse data and processes
- **Q2(a):** MOLAP: multidimensional OLAP using array-based storage
- **Q2(b):** Data Cleaning: filling missing values and smoothing noise | Data Integration: combining data from multiple sources | Binning: smoothing by grouping values into bins
- **Q3(a):** FP-Growth: recursive mining of conditional FP-trees
- **Q3(b):** Lift: confidence divided by support of the consequent | Lift Greater Than 1: positive correlation between antecedent and consequent | Closed Itemset: no superset has the same support
- **Q4(a):** Precision: TP divided by (TP + FP)
- **Q4(b):** Information Gain: reduction in entropy after a split, used by ID3 | Gain Ratio: normalised information gain used by C4.5 | Gini Index: impurity measure used by CART
- **Q5(a):** K-Medoids: uses actual data points as cluster centres; robust to outliers
- **Q5(b):** Agglomerative Clustering: bottom-up merging of closest clusters | DBSCAN: density-based clustering finding arbitrary shapes and noise | Dendrogram: tree diagram of hierarchical clustering
- **Q6(a):** Fact Constellation: multiple fact tables sharing dimensions
- **Q6(b):** Data Warehouse: subject-oriented, integrated, time-variant, non-volatile data collection | OLTP vs OLAP: transaction processing versus analytical processing | Data Mart: subset of a warehouse for one department
- **Q7(a):** Support: fraction of transactions containing an itemset
- **Q7(b):** Apriori Property: every subset of a frequent itemset is frequent | Candidate Generation: joining frequent k-itemsets to form (k+1)-itemsets | Pruning Step: discarding candidates with an infrequent subset
- **Q8(a):** DBSCAN: density-based clustering finding arbitrary shapes and noise
- **Q8(b):** Outlier: object deviating significantly from the rest | Statistical Outlier Detection: flags points in low-probability regions | Distance-based Outlier: point with few neighbours within a radius

## Recommended Books

- *Data Mining: Concepts and Techniques* — Han, Kamber & Pei
- *Introduction to Data Mining* — Tan, Steinbach & Kumar
- *Building the Data Warehouse* — W. H. Inmon
