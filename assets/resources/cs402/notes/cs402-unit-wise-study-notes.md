# CS-402 Analysis & Design of Algorithms — Unit-wise Study Notes

> Asymptotic analysis, divide and conquer, greedy, dynamic programming, backtracking, branch and bound and NP-completeness.

## Unit 1: Algorithm Analysis & Divide and Conquer

### Asymptotic Notations

Notations compare growth rates independent of machines.

- **Big-O:** asymptotic upper bound, f(n) ≤ c·g(n) for large n
- **Big-Omega:** asymptotic lower bound on growth
- **Big-Theta:** tight bound when both upper and lower bounds hold

### Recurrences & Master Theorem

Recursive algorithms are analysed through recurrence relations.

- **Master Theorem:** solves T(n) = aT(n/b) + f(n) by comparing f(n) with n^(log_b a)
- **Recursion Tree:** expands a recurrence level by level to sum the cost
- **Substitution Method:** guess a bound and prove it by induction

### Binary Search, Merge Sort & Quick Sort

Divide and conquer splits, solves and combines subproblems.

- **Divide and Conquer:** break into subproblems, solve recursively, combine results
- **Merge Sort Recurrence:** T(n) = 2T(n/2) + n, giving O(n log n)
- **Randomised Quick Sort:** random pivot gives expected O(n log n)

### Strassen's Matrix Multiplication

Clever splitting reduces the number of multiplications.

- **Strassen's Algorithm:** multiplies 2×2 blocks using 7 multiplications instead of 8
- **Strassen Complexity:** O(n^2.81) versus O(n³) for the naive method
- **Max-Min Problem:** finds maximum and minimum with about 3n/2 − 2 comparisons

## Unit 2: Greedy Method

### Greedy Strategy

Greedy algorithms make the locally best choice at each step.

- **Greedy Choice Property:** a global optimum can be reached by local optimal choices
- **Optimal Substructure:** optimal solution contains optimal solutions to subproblems
- **Feasible Solution:** solution that satisfies all problem constraints

### Fractional Knapsack & Job Sequencing

Classic greedy problems sort by a ratio or profit.

- **Fractional Knapsack:** take items in decreasing profit/weight ratio; fractions allowed
- **Job Sequencing with Deadlines:** schedule highest-profit jobs in latest free slot before deadline
- **Optimal Merge Pattern:** repeatedly merge the two smallest files

### Huffman Coding

Variable-length prefix codes compress data optimally.

- **Huffman Coding:** builds a binary tree by merging two least frequent symbols
- **Prefix Code:** no codeword is a prefix of another
- **Average Code Length:** Σ frequency × codeword length

### Minimum Spanning Trees & Dijkstra

Greedy graph algorithms connect or route at minimum cost.

- **Kruskal's Algorithm:** sorts edges and adds those not forming a cycle; O(E log E)
- **Prim's Algorithm:** grows the tree by the cheapest edge leaving it
- **Dijkstra's Algorithm:** greedy shortest paths for non-negative edge weights

## Unit 3: Dynamic Programming

### Principles of Dynamic Programming

DP solves overlapping subproblems once and reuses answers.

- **Overlapping Subproblems:** the same subproblems recur many times
- **Memoization:** top-down DP storing results of recursive calls
- **Tabulation:** bottom-up DP filling a table iteratively

### 0/1 Knapsack & Multistage Graphs

DP handles problems where greedy fails.

- **0/1 Knapsack:** items taken whole or not at all; solved with a profit table
- **Multistage Graph:** shortest path through stages solved backward or forward
- **Reliability Design:** maximise system reliability under a cost constraint

### Longest Common Subsequence & Matrix Chain

Sequence and ordering problems are classic DP examples.

- **LCS:** longest subsequence common to two strings, O(mn) table
- **Matrix Chain Multiplication:** finds parenthesisation minimising scalar multiplications
- **Optimal BST:** BST minimising expected search cost from key probabilities

### All-Pairs Shortest Paths & TSP

DP solves graph problems across all vertex pairs.

- **Floyd-Warshall:** all-pairs shortest paths in O(n³)
- **Bellman-Ford:** single-source shortest paths allowing negative edges
- **Travelling Salesman by DP:** Held-Karp algorithm in O(n² 2^n)

## Unit 4: Backtracking & Branch and Bound

### Backtracking Method

Backtracking builds solutions incrementally and abandons dead ends.

- **State Space Tree:** tree of all partial solutions explored by the algorithm
- **Bounding Function:** test that prunes nodes that cannot lead to a solution
- **Backtracking:** depth-first search with pruning of infeasible branches

### N-Queens & Graph Colouring

Constraint problems are classic backtracking examples.

- **N-Queens Problem:** place N queens so none attack each other
- **m-Colouring Problem:** colour a graph with m colours so adjacent vertices differ
- **Hamiltonian Cycle Search:** backtracking over vertex orders

### Sum of Subsets

Find subsets of numbers adding to a target.

- **Sum of Subsets:** choose elements whose sum equals a given value M
- **Promising Node:** node whose partial sum can still reach M
- **Pruning Condition:** stop when partial sum exceeds M or remaining sum is too small

### Branch and Bound

B&B explores the state space using bounds and a live-node list.

- **Branch and Bound:** breadth-like search using cost bounds to prune
- **LC Search:** least-cost search selecting the live node with smallest estimated cost
- **FIFO Branch and Bound:** live nodes explored in queue order

## Unit 5: Advanced Topics & Complexity Classes

### Tree & Graph Traversal Techniques

Traversals underpin many advanced algorithms.

- **Articulation Point:** vertex whose removal disconnects the graph
- **Biconnected Component:** maximal subgraph with no articulation point
- **DFS Tree:** tree formed by edges used during depth-first search

### String Matching Algorithms

Efficient algorithms locate patterns in text.

- **KMP Algorithm:** uses a prefix function to avoid rechecking; O(n + m)
- **Rabin-Karp:** rolling hash compares pattern and text windows
- **Naive Matching:** checks every shift; O(nm)

### P, NP & NP-Complete

Complexity classes separate tractable from likely intractable problems.

- **Class P:** problems solvable in polynomial time
- **Class NP:** problems whose solutions are verifiable in polynomial time
- **NP-Complete:** problems in NP to which every NP problem reduces

### NP-Hard Problems & Approximation

Hard problems are tackled by reductions and approximations.

- **NP-Hard:** at least as hard as every NP problem, not necessarily in NP
- **Cook's Theorem:** SAT is NP-complete
- **Approximation Algorithm:** gives a near-optimal solution with a proven ratio

## Standard Textbooks

- *Introduction to Algorithms* — Cormen, Leiserson, Rivest & Stein
- *Fundamentals of Computer Algorithms* — Horowitz, Sahni & Rajasekaran
- *Algorithm Design* — Kleinberg & Tardos

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
