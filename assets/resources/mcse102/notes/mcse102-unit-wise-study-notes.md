# MCSE-102 Advanced Data Structures & Algorithms — Unit-wise Study Notes

> Amortised analysis, advanced trees and heaps, graph algorithms, randomised, approximation and parameterised algorithms.

## Unit 1: Analysis Techniques

### Amortised Analysis

Average cost over sequences of operations.

- **Aggregate Method:** total cost divided by operations
- **Accounting Method:** assigns credits to cheap operations
- **Potential Method:** potential function stores prepaid work

### Advanced Recurrences

Divide and conquer recurrences.

- **Akra-Bazzi Method:** generalises master theorem
- **Recursion Tree:** sums cost per level
- **Lower Bound for Comparison Sorting:** Ω(n log n)

### Competitive Analysis

Online algorithms are compared with optimum.

- **Online Algorithm:** processes input without future knowledge
- **Competitive Ratio:** worst-case ratio to offline optimum
- **Paging Problem:** LRU is k-competitive

### External Memory Model

Disk access dominates cost.

- **I/O Model:** counts block transfers
- **External Merge Sort:** sorts data larger than memory
- **Cache-oblivious Algorithm:** optimal without knowing cache size

## Unit 2: Advanced Trees & Heaps

### Balanced Search Trees

Trees stay logarithmic in height.

- **Red-Black Tree:** colour rules keep height ≤ 2 log n
- **Splay Tree:** self-adjusting tree with amortised O(log n)
- **Treap:** BST with random heap priorities

### Advanced Heaps

Heaps support fast priority operations.

- **Binomial Heap:** forest of binomial trees
- **Fibonacci Heap:** O(1) amortised decrease-key
- **Pairing Heap:** simple heap with good practical performance

### Range Query Structures

Structures answer range queries fast.

- **Segment Tree:** range queries and updates in O(log n)
- **Fenwick Tree:** prefix sums with O(log n) updates
- **Sparse Table:** O(1) range minimum after O(n log n) preprocessing

### String Data Structures

Structures index text efficiently.

- **Trie:** tree of characters for prefix search
- **Suffix Array:** sorted suffixes of a string
- **Suffix Tree:** compressed trie of all suffixes

## Unit 3: Graph Algorithms

### Shortest Paths

Algorithms for weighted graphs.

- **Dijkstra with Fibonacci Heap:** O(E + V log V)
- **Johnson's Algorithm:** all pairs using reweighting
- **A* Search:** heuristic-guided shortest path

### Network Flow

Flow algorithms solve matching and cuts.

- **Edmonds-Karp:** BFS augmenting paths, O(VE²)
- **Push-Relabel:** preflow-based max-flow algorithm
- **Min-cost Flow:** flow with minimum total cost

### Matching

Matchings pair vertices.

- **Hopcroft-Karp:** bipartite matching in O(E√V)
- **Hungarian Algorithm:** minimum cost assignment
- **Blossom Algorithm:** matching in general graphs

### Connectivity & Decomposition

Structural graph properties.

- **Strongly Connected Components:** Tarjan's or Kosaraju's algorithm
- **Bridges and Articulation Points:** found with DFS low values
- **Minimum Spanning Tree:** Kruskal and Prim

## Unit 4: Randomised Algorithms

### Randomisation Basics

Randomness simplifies algorithms.

- **Las Vegas Algorithm:** always correct, random running time
- **Monte Carlo Algorithm:** bounded time, may err
- **Expected Running Time:** average over random choices

### Randomised Data Structures

Randomness gives balanced structures.

- **Skip List:** probabilistic balanced list
- **Universal Hashing:** random hash family limits collisions
- **Bloom Filter:** space-efficient set membership with false positives

### Randomised Graph Algorithms

Random choices solve graph problems.

- **Karger's Min-cut:** random edge contraction
- **Random Walk:** probabilistic graph exploration
- **Randomised Quicksort:** expected O(n log n)

### Streaming & Sketching

Summaries of massive data streams.

- **Count-Min Sketch:** approximate frequency counts
- **HyperLogLog:** estimates distinct elements
- **Reservoir Sampling:** uniform sample from a stream

## Unit 5: Approximation & Parameterised Algorithms

### NP-hardness & Reductions

Hardness guides algorithm choice.

- **NP-hard:** at least as hard as every NP problem
- **Polynomial Reduction:** transforms one problem into another
- **3-SAT:** canonical NP-complete problem

### Approximation Algorithms

Near-optimal solutions with guarantees.

- **Approximation Ratio:** solution cost relative to optimum
- **Vertex Cover 2-approximation:** via maximal matching
- **Set Cover Greedy:** ln n approximation

### PTAS & FPTAS

Schemes approach optimum arbitrarily.

- **PTAS:** (1 + ε)-approximation in polynomial time for fixed ε
- **FPTAS:** polynomial in input size and 1/ε
- **Knapsack FPTAS:** scaling and rounding profits

### Parameterised Complexity

Fixed-parameter tractability.

- **FPT:** solvable in f(k)·poly(n) time
- **Kernelisation:** reduce instance to size depending on k
- **Bounded Search Tree:** branching with depth k

## Standard Textbooks

- *Introduction to Algorithms* — Cormen, Leiserson, Rivest & Stein
- *Randomized Algorithms* — Motwani & Raghavan
- *The Design of Approximation Algorithms* — Williamson & Shmoys

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
