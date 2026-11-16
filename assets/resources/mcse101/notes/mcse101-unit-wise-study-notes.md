# MCSE-101 Advanced Computational Mathematics — Unit-wise Study Notes

> Linear algebra, probability, random processes, optimisation, graph theory and queueing for computer science research.

## Unit 1: Linear Algebra for Computing

### Vector Spaces & Linear Maps

Vector spaces underlie ML and graphics.

- **Vector Space:** set closed under addition and scalar multiplication
- **Basis:** linearly independent spanning set
- **Rank-Nullity Theorem:** rank + nullity = number of columns

### Eigen Decomposition

Eigenvectors reveal structure of matrices.

- **Eigen Decomposition:** A = QΛQ⁻¹ for diagonalisable A
- **Spectral Theorem:** real symmetric matrices have orthogonal eigenvectors
- **Power Iteration:** finds dominant eigenvector

### Singular Value Decomposition

SVD factorises any matrix.

- **SVD:** A = UΣVᵀ
- **Low-rank Approximation:** truncated SVD gives best rank-k approximation
- **Pseudo-inverse:** A⁺ = VΣ⁺Uᵀ

### Matrix Norms & Conditioning

Norms measure sensitivity.

- **Frobenius Norm:** square root of sum of squared entries
- **Condition Number:** ratio of largest to smallest singular value
- **Ill-conditioned System:** small input changes give large output changes

## Unit 2: Probability & Statistics

### Random Variables & Distributions

Probability models uncertainty.

- **Expectation:** probability-weighted average
- **Variance:** E[(X − μ)²]
- **Gaussian Distribution:** bell-shaped density defined by mean and variance

### Joint Distributions & Bayes

Multiple variables and inference.

- **Joint Distribution:** probability of variables together
- **Bayes' Rule:** posterior ∝ likelihood × prior
- **Covariance Matrix:** pairwise covariances of a random vector

### Estimation

Parameters are estimated from data.

- **Maximum Likelihood Estimation:** parameter maximising likelihood
- **MAP Estimation:** maximises posterior
- **Unbiased Estimator:** expected value equals true parameter

### Limit Theorems & Inequalities

Bounds describe large samples.

- **Law of Large Numbers:** sample mean converges to expected value
- **Central Limit Theorem:** sum of many variables tends to Gaussian
- **Chernoff Bound:** exponential tail bound

## Unit 3: Random Processes & Queueing

### Random Processes

Processes evolve randomly in time.

- **Stationary Process:** statistics invariant to time shift
- **Poisson Process:** counts events with exponential inter-arrival times
- **Ergodicity:** time averages equal ensemble averages

### Markov Chains

Next state depends only on current state.

- **Markov Property:** memoryless state transitions
- **Transition Matrix:** probabilities between states
- **Stationary Distribution:** π = πP

### Queueing Models

Queues model networks and servers.

- **M/M/1 Queue:** Poisson arrivals, exponential service, one server
- **Little's Law:** L = λW
- **Utilisation:** ρ = λ/μ

### Hidden Markov Models

Hidden states produce observations.

- **HMM:** Markov chain with unobserved states
- **Forward Algorithm:** computes observation likelihood
- **Viterbi Decoding:** most likely hidden state sequence

## Unit 4: Optimisation

### Convex Optimisation

Convex problems have global optima.

- **Convex Function:** line between points lies above graph
- **Convex Set:** contains segment between any two points
- **Global Minimum:** every local minimum of a convex function

### Gradient Methods

Iterative descent finds minima.

- **Gradient Descent:** x ← x − η∇f(x)
- **Newton's Method:** uses Hessian for quadratic convergence
- **Stochastic Gradient Descent:** uses random mini-batches

### Constrained Optimisation

Constraints are handled with multipliers.

- **Lagrangian:** f(x) + λg(x)
- **KKT Conditions:** optimality conditions with inequality constraints
- **Duality Gap:** difference between primal and dual optima

### Linear & Integer Programming

LP and IP model resource allocation.

- **Simplex Method:** moves along vertices of feasible region
- **Interior Point Method:** polynomial-time LP solver
- **Integer Programming:** variables restricted to integers; NP-hard

## Unit 5: Graph Theory & Combinatorics

### Graph Algorithms

Graphs model networks.

- **Max-flow Min-cut Theorem:** maximum flow equals minimum cut capacity
- **Bipartite Matching:** pairs vertices across two sets
- **Network Flow:** Ford-Fulkerson augmenting paths

### Spectral Graph Theory

Matrices reveal graph structure.

- **Graph Laplacian:** L = D − A
- **Algebraic Connectivity:** second smallest Laplacian eigenvalue
- **Spectral Clustering:** clusters using Laplacian eigenvectors

### Combinatorial Counting

Counting supports algorithm analysis.

- **Generating Function:** power series encoding sequences
- **Catalan Numbers:** count binary trees and balanced parentheses
- **Inclusion-Exclusion:** counts union by alternating sums

### Information Theory Basics

Information measures underpin ML.

- **Entropy:** H(X) = −Σ p log p
- **KL Divergence:** difference between distributions
- **Mutual Information:** shared information between variables

## Standard Textbooks

- *Linear Algebra and Learning from Data* — Gilbert Strang
- *Probability and Statistics for Computer Scientists* — Michael Baron
- *Convex Optimization* — Boyd & Vandenberghe

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
