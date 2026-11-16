# CS-402 Analysis & Design of Algorithms — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 4: CS-402 · IT Sem 4: CSIT-403.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Big-O. Explain its role in Asymptotic Notations with a suitable example or diagram. **[7]**

(b) Explain Recurrences & Master Theorem in detail. Differentiate between Master Theorem and Recursion Tree. **[7]**

**Q2.** *(Unit 2)*

(a) Define Job Sequencing with Deadlines. Explain its role in Fractional Knapsack & Job Sequencing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Huffman Coding. Bring out the significance of Huffman Coding and Prefix Code. **[7]**

**Q3.** *(Unit 3)*

(a) Define Optimal BST. Explain its role in Longest Common Subsequence & Matrix Chain with a suitable example or diagram. **[7]**

(b) Explain All-Pairs Shortest Paths & TSP in detail. Differentiate between Floyd-Warshall and Bellman-Ford. **[7]**

**Q4.** *(Unit 4)*

(a) Define Branch and Bound. Explain its role in Branch and Bound with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Backtracking Method. Bring out the significance of State Space Tree and Bounding Function. **[7]**

**Q5.** *(Unit 5)*

(a) Define Biconnected Component. Explain its role in Tree & Graph Traversal Techniques with a suitable example or diagram. **[7]**

(b) Explain String Matching Algorithms in detail. Differentiate between KMP Algorithm and Rabin-Karp. **[7]**

**Q6.** *(Unit 1)*

(a) Define Max-Min Problem. Explain its role in Strassen's Matrix Multiplication with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Asymptotic Notations. Bring out the significance of Big-O and Big-Omega. **[7]**

**Q7.** *(Unit 3)*

(a) Define Overlapping Subproblems. Explain its role in Principles of Dynamic Programming with a suitable example or diagram. **[7]**

(b) Explain 0/1 Knapsack & Multistage Graphs in detail. Differentiate between 0/1 Knapsack and Multistage Graph. **[7]**

**Q8.** *(Unit 5)*

(a) Define Rabin-Karp. Explain its role in String Matching Algorithms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss P, NP & NP-Complete. Bring out the significance of Class P and Class NP. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Recursion Tree. Explain its role in Recurrences & Master Theorem with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Binary Search, Merge Sort & Quick Sort. Bring out the significance of Divide and Conquer and Merge Sort Recurrence. **[7]**

**Q2.** *(Unit 2)*

(a) Define Average Code Length. Explain its role in Huffman Coding with a suitable example or diagram. **[7]**

(b) Explain Minimum Spanning Trees & Dijkstra in detail. Differentiate between Kruskal's Algorithm and Prim's Algorithm. **[7]**

**Q3.** *(Unit 3)*

(a) Define Floyd-Warshall. Explain its role in All-Pairs Shortest Paths & TSP with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Principles of Dynamic Programming. Bring out the significance of Overlapping Subproblems and Memoization. **[7]**

**Q4.** *(Unit 4)*

(a) Define Bounding Function. Explain its role in Backtracking Method with a suitable example or diagram. **[7]**

(b) Explain N-Queens & Graph Colouring in detail. Differentiate between N-Queens Problem and m-Colouring Problem. **[7]**

**Q5.** *(Unit 5)*

(a) Define Naive Matching. Explain its role in String Matching Algorithms with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss P, NP & NP-Complete. Bring out the significance of Class P and Class NP. **[7]**

**Q6.** *(Unit 2)*

(a) Define Greedy Choice Property. Explain its role in Greedy Strategy with a suitable example or diagram. **[7]**

(b) Explain Fractional Knapsack & Job Sequencing in detail. Differentiate between Fractional Knapsack and Job Sequencing with Deadlines. **[7]**

**Q7.** *(Unit 4)*

(a) Define m-Colouring Problem. Explain its role in N-Queens & Graph Colouring with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sum of Subsets. Bring out the significance of Sum of Subsets and Promising Node. **[7]**

**Q8.** *(Unit 1)*

(a) Define Randomised Quick Sort. Explain its role in Binary Search, Merge Sort & Quick Sort with a suitable example or diagram. **[7]**

(b) Explain Strassen's Matrix Multiplication in detail. Differentiate between Strassen's Algorithm and Strassen Complexity. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Big-O: asymptotic upper bound, f(n) ≤ c·g(n) for large n
- **Q1(b):** Master Theorem: solves T(n) = aT(n/b) + f(n) by comparing f(n) with n^(log_b a) | Recursion Tree: expands a recurrence level by level to sum the cost | Substitution Method: guess a bound and prove it by induction
- **Q2(a):** Job Sequencing with Deadlines: schedule highest-profit jobs in latest free slot before deadline
- **Q2(b):** Huffman Coding: builds a binary tree by merging two least frequent symbols | Prefix Code: no codeword is a prefix of another | Average Code Length: Σ frequency × codeword length
- **Q3(a):** Optimal BST: BST minimising expected search cost from key probabilities
- **Q3(b):** Floyd-Warshall: all-pairs shortest paths in O(n³) | Bellman-Ford: single-source shortest paths allowing negative edges | Travelling Salesman by DP: Held-Karp algorithm in O(n² 2^n)
- **Q4(a):** Branch and Bound: breadth-like search using cost bounds to prune
- **Q4(b):** State Space Tree: tree of all partial solutions explored by the algorithm | Bounding Function: test that prunes nodes that cannot lead to a solution | Backtracking: depth-first search with pruning of infeasible branches
- **Q5(a):** Biconnected Component: maximal subgraph with no articulation point
- **Q5(b):** KMP Algorithm: uses a prefix function to avoid rechecking; O(n + m) | Rabin-Karp: rolling hash compares pattern and text windows | Naive Matching: checks every shift; O(nm)
- **Q6(a):** Max-Min Problem: finds maximum and minimum with about 3n/2 − 2 comparisons
- **Q6(b):** Big-O: asymptotic upper bound, f(n) ≤ c·g(n) for large n | Big-Omega: asymptotic lower bound on growth | Big-Theta: tight bound when both upper and lower bounds hold
- **Q7(a):** Overlapping Subproblems: the same subproblems recur many times
- **Q7(b):** 0/1 Knapsack: items taken whole or not at all; solved with a profit table | Multistage Graph: shortest path through stages solved backward or forward | Reliability Design: maximise system reliability under a cost constraint
- **Q8(a):** Rabin-Karp: rolling hash compares pattern and text windows
- **Q8(b):** Class P: problems solvable in polynomial time | Class NP: problems whose solutions are verifiable in polynomial time | NP-Complete: problems in NP to which every NP problem reduces

## Recommended Books

- *Introduction to Algorithms* — Cormen, Leiserson, Rivest & Stein
- *Fundamentals of Computer Algorithms* — Horowitz, Sahni & Rajasekaran
- *Algorithm Design* — Kleinberg & Tardos
