# MCSE-102 Advanced Data Structures & Algorithms — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech CSE Sem 1: MCSE-102.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Aggregate Method. Explain its role in Amortised Analysis with a suitable example or diagram. **[7]**

(b) Explain Advanced Recurrences in detail. Differentiate between Akra-Bazzi Method and Recursion Tree. **[7]**

**Q2.** *(Unit 2)*

(a) Define Fibonacci Heap. Explain its role in Advanced Heaps with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Range Query Structures. Bring out the significance of Segment Tree and Fenwick Tree. **[7]**

**Q3.** *(Unit 3)*

(a) Define Blossom Algorithm. Explain its role in Matching with a suitable example or diagram. **[7]**

(b) Explain Connectivity & Decomposition in detail. Differentiate between Strongly Connected Components and Bridges and Articulation Points. **[7]**

**Q4.** *(Unit 4)*

(a) Define Count-Min Sketch. Explain its role in Streaming & Sketching with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Randomisation Basics. Bring out the significance of Las Vegas Algorithm and Monte Carlo Algorithm. **[7]**

**Q5.** *(Unit 5)*

(a) Define Polynomial Reduction. Explain its role in NP-hardness & Reductions with a suitable example or diagram. **[7]**

(b) Explain Approximation Algorithms in detail. Differentiate between Approximation Ratio and Vertex Cover 2-approximation. **[7]**

**Q6.** *(Unit 1)*

(a) Define Cache-oblivious Algorithm. Explain its role in External Memory Model with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Amortised Analysis. Bring out the significance of Aggregate Method and Accounting Method. **[7]**

**Q7.** *(Unit 3)*

(a) Define Dijkstra with Fibonacci Heap. Explain its role in Shortest Paths with a suitable example or diagram. **[7]**

(b) Explain Network Flow in detail. Differentiate between Edmonds-Karp and Push-Relabel. **[7]**

**Q8.** *(Unit 5)*

(a) Define Vertex Cover 2-approximation. Explain its role in Approximation Algorithms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss PTAS & FPTAS. Bring out the significance of PTAS and FPTAS. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Recursion Tree. Explain its role in Advanced Recurrences with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Competitive Analysis. Bring out the significance of Online Algorithm and Competitive Ratio. **[7]**

**Q2.** *(Unit 2)*

(a) Define Sparse Table. Explain its role in Range Query Structures with a suitable example or diagram. **[7]**

(b) Explain String Data Structures in detail. Differentiate between Trie and Suffix Array. **[7]**

**Q3.** *(Unit 3)*

(a) Define Strongly Connected Components. Explain its role in Connectivity & Decomposition with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Shortest Paths. Bring out the significance of Dijkstra with Fibonacci Heap and Johnson's Algorithm. **[7]**

**Q4.** *(Unit 4)*

(a) Define Monte Carlo Algorithm. Explain its role in Randomisation Basics with a suitable example or diagram. **[7]**

(b) Explain Randomised Data Structures in detail. Differentiate between Skip List and Universal Hashing. **[7]**

**Q5.** *(Unit 5)*

(a) Define Set Cover Greedy. Explain its role in Approximation Algorithms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss PTAS & FPTAS. Bring out the significance of PTAS and FPTAS. **[7]**

**Q6.** *(Unit 2)*

(a) Define Red-Black Tree. Explain its role in Balanced Search Trees with a suitable example or diagram. **[7]**

(b) Explain Advanced Heaps in detail. Differentiate between Binomial Heap and Fibonacci Heap. **[7]**

**Q7.** *(Unit 4)*

(a) Define Universal Hashing. Explain its role in Randomised Data Structures with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Randomised Graph Algorithms. Bring out the significance of Karger's Min-cut and Random Walk. **[7]**

**Q8.** *(Unit 1)*

(a) Define Paging Problem. Explain its role in Competitive Analysis with a suitable example or diagram. **[7]**

(b) Explain External Memory Model in detail. Differentiate between I/O Model and External Merge Sort. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Aggregate Method: total cost divided by operations
- **Q1(b):** Akra-Bazzi Method: generalises master theorem | Recursion Tree: sums cost per level | Lower Bound for Comparison Sorting: Ω(n log n)
- **Q2(a):** Fibonacci Heap: O(1) amortised decrease-key
- **Q2(b):** Segment Tree: range queries and updates in O(log n) | Fenwick Tree: prefix sums with O(log n) updates | Sparse Table: O(1) range minimum after O(n log n) preprocessing
- **Q3(a):** Blossom Algorithm: matching in general graphs
- **Q3(b):** Strongly Connected Components: Tarjan's or Kosaraju's algorithm | Bridges and Articulation Points: found with DFS low values | Minimum Spanning Tree: Kruskal and Prim
- **Q4(a):** Count-Min Sketch: approximate frequency counts
- **Q4(b):** Las Vegas Algorithm: always correct, random running time | Monte Carlo Algorithm: bounded time, may err | Expected Running Time: average over random choices
- **Q5(a):** Polynomial Reduction: transforms one problem into another
- **Q5(b):** Approximation Ratio: solution cost relative to optimum | Vertex Cover 2-approximation: via maximal matching | Set Cover Greedy: ln n approximation
- **Q6(a):** Cache-oblivious Algorithm: optimal without knowing cache size
- **Q6(b):** Aggregate Method: total cost divided by operations | Accounting Method: assigns credits to cheap operations | Potential Method: potential function stores prepaid work
- **Q7(a):** Dijkstra with Fibonacci Heap: O(E + V log V)
- **Q7(b):** Edmonds-Karp: BFS augmenting paths, O(VE²) | Push-Relabel: preflow-based max-flow algorithm | Min-cost Flow: flow with minimum total cost
- **Q8(a):** Vertex Cover 2-approximation: via maximal matching
- **Q8(b):** PTAS: (1 + ε)-approximation in polynomial time for fixed ε | FPTAS: polynomial in input size and 1/ε | Knapsack FPTAS: scaling and rounding profits

## Recommended Books

- *Introduction to Algorithms* — Cormen, Leiserson, Rivest & Stein
- *Randomized Algorithms* — Motwani & Raghavan
- *The Design of Approximation Algorithms* — Williamson & Shmoys
