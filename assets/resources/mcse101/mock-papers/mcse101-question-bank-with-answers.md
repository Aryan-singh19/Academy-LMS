# MCSE-101 Advanced Computational Mathematics — Question Bank with Answer Hints

## Unit 1: Linear Algebra for Computing

### Short answer (2-3 marks)

- **Q.** Define *Vector Space*.  
  **Ans.** set closed under addition and scalar multiplication
- **Q.** Define *Basis*.  
  **Ans.** linearly independent spanning set
- **Q.** Define *Rank-Nullity Theorem*.  
  **Ans.** rank + nullity = number of columns
- **Q.** Define *Eigen Decomposition*.  
  **Ans.** A = QΛQ⁻¹ for diagonalisable A
- **Q.** Define *Spectral Theorem*.  
  **Ans.** real symmetric matrices have orthogonal eigenvectors
- **Q.** Define *Power Iteration*.  
  **Ans.** finds dominant eigenvector
- **Q.** Define *SVD*.  
  **Ans.** A = UΣVᵀ
- **Q.** Define *Low-rank Approximation*.  
  **Ans.** truncated SVD gives best rank-k approximation
- **Q.** Define *Pseudo-inverse*.  
  **Ans.** A⁺ = VΣ⁺Uᵀ
- **Q.** Define *Frobenius Norm*.  
  **Ans.** square root of sum of squared entries
- **Q.** Define *Condition Number*.  
  **Ans.** ratio of largest to smallest singular value
- **Q.** Define *Ill-conditioned System*.  
  **Ans.** small input changes give large output changes

### Long answer (7 marks)

- **Q.** Explain *Vector Spaces & Linear Maps* in detail with a neat diagram.  
  **Key points:** Vector spaces underlie ML and graphics. Vector Space — set closed under addition and scalar multiplication; Basis — linearly independent spanning set; Rank-Nullity Theorem — rank + nullity = number of columns.
- **Q.** Explain *Eigen Decomposition* in detail with a neat diagram.  
  **Key points:** Eigenvectors reveal structure of matrices. Eigen Decomposition — A = QΛQ⁻¹ for diagonalisable A; Spectral Theorem — real symmetric matrices have orthogonal eigenvectors; Power Iteration — finds dominant eigenvector.
- **Q.** Explain *Singular Value Decomposition* in detail with a neat diagram.  
  **Key points:** SVD factorises any matrix. SVD — A = UΣVᵀ; Low-rank Approximation — truncated SVD gives best rank-k approximation; Pseudo-inverse — A⁺ = VΣ⁺Uᵀ.
- **Q.** Explain *Matrix Norms & Conditioning* in detail with a neat diagram.  
  **Key points:** Norms measure sensitivity. Frobenius Norm — square root of sum of squared entries; Condition Number — ratio of largest to smallest singular value; Ill-conditioned System — small input changes give large output changes.

## Unit 2: Probability & Statistics

### Short answer (2-3 marks)

- **Q.** Define *Expectation*.  
  **Ans.** probability-weighted average
- **Q.** Define *Variance*.  
  **Ans.** E[(X − μ)²]
- **Q.** Define *Gaussian Distribution*.  
  **Ans.** bell-shaped density defined by mean and variance
- **Q.** Define *Joint Distribution*.  
  **Ans.** probability of variables together
- **Q.** Define *Bayes' Rule*.  
  **Ans.** posterior ∝ likelihood × prior
- **Q.** Define *Covariance Matrix*.  
  **Ans.** pairwise covariances of a random vector
- **Q.** Define *Maximum Likelihood Estimation*.  
  **Ans.** parameter maximising likelihood
- **Q.** Define *MAP Estimation*.  
  **Ans.** maximises posterior
- **Q.** Define *Unbiased Estimator*.  
  **Ans.** expected value equals true parameter
- **Q.** Define *Law of Large Numbers*.  
  **Ans.** sample mean converges to expected value
- **Q.** Define *Central Limit Theorem*.  
  **Ans.** sum of many variables tends to Gaussian
- **Q.** Define *Chernoff Bound*.  
  **Ans.** exponential tail bound

### Long answer (7 marks)

- **Q.** Explain *Random Variables & Distributions* in detail with a neat diagram.  
  **Key points:** Probability models uncertainty. Expectation — probability-weighted average; Variance — E[(X − μ)²]; Gaussian Distribution — bell-shaped density defined by mean and variance.
- **Q.** Explain *Joint Distributions & Bayes* in detail with a neat diagram.  
  **Key points:** Multiple variables and inference. Joint Distribution — probability of variables together; Bayes' Rule — posterior ∝ likelihood × prior; Covariance Matrix — pairwise covariances of a random vector.
- **Q.** Explain *Estimation* in detail with a neat diagram.  
  **Key points:** Parameters are estimated from data. Maximum Likelihood Estimation — parameter maximising likelihood; MAP Estimation — maximises posterior; Unbiased Estimator — expected value equals true parameter.
- **Q.** Explain *Limit Theorems & Inequalities* in detail with a neat diagram.  
  **Key points:** Bounds describe large samples. Law of Large Numbers — sample mean converges to expected value; Central Limit Theorem — sum of many variables tends to Gaussian; Chernoff Bound — exponential tail bound.

## Unit 3: Random Processes & Queueing

### Short answer (2-3 marks)

- **Q.** Define *Stationary Process*.  
  **Ans.** statistics invariant to time shift
- **Q.** Define *Poisson Process*.  
  **Ans.** counts events with exponential inter-arrival times
- **Q.** Define *Ergodicity*.  
  **Ans.** time averages equal ensemble averages
- **Q.** Define *Markov Property*.  
  **Ans.** memoryless state transitions
- **Q.** Define *Transition Matrix*.  
  **Ans.** probabilities between states
- **Q.** Define *Stationary Distribution*.  
  **Ans.** π = πP
- **Q.** Define *M/M/1 Queue*.  
  **Ans.** Poisson arrivals, exponential service, one server
- **Q.** Define *Little's Law*.  
  **Ans.** L = λW
- **Q.** Define *Utilisation*.  
  **Ans.** ρ = λ/μ
- **Q.** Define *HMM*.  
  **Ans.** Markov chain with unobserved states
- **Q.** Define *Forward Algorithm*.  
  **Ans.** computes observation likelihood
- **Q.** Define *Viterbi Decoding*.  
  **Ans.** most likely hidden state sequence

### Long answer (7 marks)

- **Q.** Explain *Random Processes* in detail with a neat diagram.  
  **Key points:** Processes evolve randomly in time. Stationary Process — statistics invariant to time shift; Poisson Process — counts events with exponential inter-arrival times; Ergodicity — time averages equal ensemble averages.
- **Q.** Explain *Markov Chains* in detail with a neat diagram.  
  **Key points:** Next state depends only on current state. Markov Property — memoryless state transitions; Transition Matrix — probabilities between states; Stationary Distribution — π = πP.
- **Q.** Explain *Queueing Models* in detail with a neat diagram.  
  **Key points:** Queues model networks and servers. M/M/1 Queue — Poisson arrivals, exponential service, one server; Little's Law — L = λW; Utilisation — ρ = λ/μ.
- **Q.** Explain *Hidden Markov Models* in detail with a neat diagram.  
  **Key points:** Hidden states produce observations. HMM — Markov chain with unobserved states; Forward Algorithm — computes observation likelihood; Viterbi Decoding — most likely hidden state sequence.

## Unit 4: Optimisation

### Short answer (2-3 marks)

- **Q.** Define *Convex Function*.  
  **Ans.** line between points lies above graph
- **Q.** Define *Convex Set*.  
  **Ans.** contains segment between any two points
- **Q.** Define *Global Minimum*.  
  **Ans.** every local minimum of a convex function
- **Q.** Define *Gradient Descent*.  
  **Ans.** x ← x − η∇f(x)
- **Q.** Define *Newton's Method*.  
  **Ans.** uses Hessian for quadratic convergence
- **Q.** Define *Stochastic Gradient Descent*.  
  **Ans.** uses random mini-batches
- **Q.** Define *Lagrangian*.  
  **Ans.** f(x) + λg(x)
- **Q.** Define *KKT Conditions*.  
  **Ans.** optimality conditions with inequality constraints
- **Q.** Define *Duality Gap*.  
  **Ans.** difference between primal and dual optima
- **Q.** Define *Simplex Method*.  
  **Ans.** moves along vertices of feasible region
- **Q.** Define *Interior Point Method*.  
  **Ans.** polynomial-time LP solver
- **Q.** Define *Integer Programming*.  
  **Ans.** variables restricted to integers; NP-hard

### Long answer (7 marks)

- **Q.** Explain *Convex Optimisation* in detail with a neat diagram.  
  **Key points:** Convex problems have global optima. Convex Function — line between points lies above graph; Convex Set — contains segment between any two points; Global Minimum — every local minimum of a convex function.
- **Q.** Explain *Gradient Methods* in detail with a neat diagram.  
  **Key points:** Iterative descent finds minima. Gradient Descent — x ← x − η∇f(x); Newton's Method — uses Hessian for quadratic convergence; Stochastic Gradient Descent — uses random mini-batches.
- **Q.** Explain *Constrained Optimisation* in detail with a neat diagram.  
  **Key points:** Constraints are handled with multipliers. Lagrangian — f(x) + λg(x); KKT Conditions — optimality conditions with inequality constraints; Duality Gap — difference between primal and dual optima.
- **Q.** Explain *Linear & Integer Programming* in detail with a neat diagram.  
  **Key points:** LP and IP model resource allocation. Simplex Method — moves along vertices of feasible region; Interior Point Method — polynomial-time LP solver; Integer Programming — variables restricted to integers; NP-hard.

## Unit 5: Graph Theory & Combinatorics

### Short answer (2-3 marks)

- **Q.** Define *Max-flow Min-cut Theorem*.  
  **Ans.** maximum flow equals minimum cut capacity
- **Q.** Define *Bipartite Matching*.  
  **Ans.** pairs vertices across two sets
- **Q.** Define *Network Flow*.  
  **Ans.** Ford-Fulkerson augmenting paths
- **Q.** Define *Graph Laplacian*.  
  **Ans.** L = D − A
- **Q.** Define *Algebraic Connectivity*.  
  **Ans.** second smallest Laplacian eigenvalue
- **Q.** Define *Spectral Clustering*.  
  **Ans.** clusters using Laplacian eigenvectors
- **Q.** Define *Generating Function*.  
  **Ans.** power series encoding sequences
- **Q.** Define *Catalan Numbers*.  
  **Ans.** count binary trees and balanced parentheses
- **Q.** Define *Inclusion-Exclusion*.  
  **Ans.** counts union by alternating sums
- **Q.** Define *Entropy*.  
  **Ans.** H(X) = −Σ p log p
- **Q.** Define *KL Divergence*.  
  **Ans.** difference between distributions
- **Q.** Define *Mutual Information*.  
  **Ans.** shared information between variables

### Long answer (7 marks)

- **Q.** Explain *Graph Algorithms* in detail with a neat diagram.  
  **Key points:** Graphs model networks. Max-flow Min-cut Theorem — maximum flow equals minimum cut capacity; Bipartite Matching — pairs vertices across two sets; Network Flow — Ford-Fulkerson augmenting paths.
- **Q.** Explain *Spectral Graph Theory* in detail with a neat diagram.  
  **Key points:** Matrices reveal graph structure. Graph Laplacian — L = D − A; Algebraic Connectivity — second smallest Laplacian eigenvalue; Spectral Clustering — clusters using Laplacian eigenvectors.
- **Q.** Explain *Combinatorial Counting* in detail with a neat diagram.  
  **Key points:** Counting supports algorithm analysis. Generating Function — power series encoding sequences; Catalan Numbers — count binary trees and balanced parentheses; Inclusion-Exclusion — counts union by alternating sums.
- **Q.** Explain *Information Theory Basics* in detail with a neat diagram.  
  **Key points:** Information measures underpin ML. Entropy — H(X) = −Σ p log p; KL Divergence — difference between distributions; Mutual Information — shared information between variables.

