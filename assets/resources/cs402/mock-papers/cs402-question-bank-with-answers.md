# CS-402 Analysis & Design of Algorithms — Question Bank with Answer Hints

## Unit 1: Algorithm Analysis & Divide and Conquer

### Short answer (2-3 marks)

- **Q.** Define *Big-O*.  
  **Ans.** asymptotic upper bound, f(n) ≤ c·g(n) for large n
- **Q.** Define *Big-Omega*.  
  **Ans.** asymptotic lower bound on growth
- **Q.** Define *Big-Theta*.  
  **Ans.** tight bound when both upper and lower bounds hold
- **Q.** Define *Master Theorem*.  
  **Ans.** solves T(n) = aT(n/b) + f(n) by comparing f(n) with n^(log_b a)
- **Q.** Define *Recursion Tree*.  
  **Ans.** expands a recurrence level by level to sum the cost
- **Q.** Define *Substitution Method*.  
  **Ans.** guess a bound and prove it by induction
- **Q.** Define *Divide and Conquer*.  
  **Ans.** break into subproblems, solve recursively, combine results
- **Q.** Define *Merge Sort Recurrence*.  
  **Ans.** T(n) = 2T(n/2) + n, giving O(n log n)
- **Q.** Define *Randomised Quick Sort*.  
  **Ans.** random pivot gives expected O(n log n)
- **Q.** Define *Strassen's Algorithm*.  
  **Ans.** multiplies 2×2 blocks using 7 multiplications instead of 8
- **Q.** Define *Strassen Complexity*.  
  **Ans.** O(n^2.81) versus O(n³) for the naive method
- **Q.** Define *Max-Min Problem*.  
  **Ans.** finds maximum and minimum with about 3n/2 − 2 comparisons

### Long answer (7 marks)

- **Q.** Explain *Asymptotic Notations* in detail with a neat diagram.  
  **Key points:** Notations compare growth rates independent of machines. Big-O — asymptotic upper bound, f(n) ≤ c·g(n) for large n; Big-Omega — asymptotic lower bound on growth; Big-Theta — tight bound when both upper and lower bounds hold.
- **Q.** Explain *Recurrences & Master Theorem* in detail with a neat diagram.  
  **Key points:** Recursive algorithms are analysed through recurrence relations. Master Theorem — solves T(n) = aT(n/b) + f(n) by comparing f(n) with n^(log_b a); Recursion Tree — expands a recurrence level by level to sum the cost; Substitution Method — guess a bound and prove it by induction.
- **Q.** Explain *Binary Search, Merge Sort & Quick Sort* in detail with a neat diagram.  
  **Key points:** Divide and conquer splits, solves and combines subproblems. Divide and Conquer — break into subproblems, solve recursively, combine results; Merge Sort Recurrence — T(n) = 2T(n/2) + n, giving O(n log n); Randomised Quick Sort — random pivot gives expected O(n log n).
- **Q.** Explain *Strassen's Matrix Multiplication* in detail with a neat diagram.  
  **Key points:** Clever splitting reduces the number of multiplications. Strassen's Algorithm — multiplies 2×2 blocks using 7 multiplications instead of 8; Strassen Complexity — O(n^2.81) versus O(n³) for the naive method; Max-Min Problem — finds maximum and minimum with about 3n/2 − 2 comparisons.

## Unit 2: Greedy Method

### Short answer (2-3 marks)

- **Q.** Define *Greedy Choice Property*.  
  **Ans.** a global optimum can be reached by local optimal choices
- **Q.** Define *Optimal Substructure*.  
  **Ans.** optimal solution contains optimal solutions to subproblems
- **Q.** Define *Feasible Solution*.  
  **Ans.** solution that satisfies all problem constraints
- **Q.** Define *Fractional Knapsack*.  
  **Ans.** take items in decreasing profit/weight ratio; fractions allowed
- **Q.** Define *Job Sequencing with Deadlines*.  
  **Ans.** schedule highest-profit jobs in latest free slot before deadline
- **Q.** Define *Optimal Merge Pattern*.  
  **Ans.** repeatedly merge the two smallest files
- **Q.** Define *Huffman Coding*.  
  **Ans.** builds a binary tree by merging two least frequent symbols
- **Q.** Define *Prefix Code*.  
  **Ans.** no codeword is a prefix of another
- **Q.** Define *Average Code Length*.  
  **Ans.** Σ frequency × codeword length
- **Q.** Define *Kruskal's Algorithm*.  
  **Ans.** sorts edges and adds those not forming a cycle; O(E log E)
- **Q.** Define *Prim's Algorithm*.  
  **Ans.** grows the tree by the cheapest edge leaving it
- **Q.** Define *Dijkstra's Algorithm*.  
  **Ans.** greedy shortest paths for non-negative edge weights

### Long answer (7 marks)

- **Q.** Explain *Greedy Strategy* in detail with a neat diagram.  
  **Key points:** Greedy algorithms make the locally best choice at each step. Greedy Choice Property — a global optimum can be reached by local optimal choices; Optimal Substructure — optimal solution contains optimal solutions to subproblems; Feasible Solution — solution that satisfies all problem constraints.
- **Q.** Explain *Fractional Knapsack & Job Sequencing* in detail with a neat diagram.  
  **Key points:** Classic greedy problems sort by a ratio or profit. Fractional Knapsack — take items in decreasing profit/weight ratio; fractions allowed; Job Sequencing with Deadlines — schedule highest-profit jobs in latest free slot before deadline; Optimal Merge Pattern — repeatedly merge the two smallest files.
- **Q.** Explain *Huffman Coding* in detail with a neat diagram.  
  **Key points:** Variable-length prefix codes compress data optimally. Huffman Coding — builds a binary tree by merging two least frequent symbols; Prefix Code — no codeword is a prefix of another; Average Code Length — Σ frequency × codeword length.
- **Q.** Explain *Minimum Spanning Trees & Dijkstra* in detail with a neat diagram.  
  **Key points:** Greedy graph algorithms connect or route at minimum cost. Kruskal's Algorithm — sorts edges and adds those not forming a cycle; O(E log E); Prim's Algorithm — grows the tree by the cheapest edge leaving it; Dijkstra's Algorithm — greedy shortest paths for non-negative edge weights.

## Unit 3: Dynamic Programming

### Short answer (2-3 marks)

- **Q.** Define *Overlapping Subproblems*.  
  **Ans.** the same subproblems recur many times
- **Q.** Define *Memoization*.  
  **Ans.** top-down DP storing results of recursive calls
- **Q.** Define *Tabulation*.  
  **Ans.** bottom-up DP filling a table iteratively
- **Q.** Define *0/1 Knapsack*.  
  **Ans.** items taken whole or not at all; solved with a profit table
- **Q.** Define *Multistage Graph*.  
  **Ans.** shortest path through stages solved backward or forward
- **Q.** Define *Reliability Design*.  
  **Ans.** maximise system reliability under a cost constraint
- **Q.** Define *LCS*.  
  **Ans.** longest subsequence common to two strings, O(mn) table
- **Q.** Define *Matrix Chain Multiplication*.  
  **Ans.** finds parenthesisation minimising scalar multiplications
- **Q.** Define *Optimal BST*.  
  **Ans.** BST minimising expected search cost from key probabilities
- **Q.** Define *Floyd-Warshall*.  
  **Ans.** all-pairs shortest paths in O(n³)
- **Q.** Define *Bellman-Ford*.  
  **Ans.** single-source shortest paths allowing negative edges
- **Q.** Define *Travelling Salesman by DP*.  
  **Ans.** Held-Karp algorithm in O(n² 2^n)

### Long answer (7 marks)

- **Q.** Explain *Principles of Dynamic Programming* in detail with a neat diagram.  
  **Key points:** DP solves overlapping subproblems once and reuses answers. Overlapping Subproblems — the same subproblems recur many times; Memoization — top-down DP storing results of recursive calls; Tabulation — bottom-up DP filling a table iteratively.
- **Q.** Explain *0/1 Knapsack & Multistage Graphs* in detail with a neat diagram.  
  **Key points:** DP handles problems where greedy fails. 0/1 Knapsack — items taken whole or not at all; solved with a profit table; Multistage Graph — shortest path through stages solved backward or forward; Reliability Design — maximise system reliability under a cost constraint.
- **Q.** Explain *Longest Common Subsequence & Matrix Chain* in detail with a neat diagram.  
  **Key points:** Sequence and ordering problems are classic DP examples. LCS — longest subsequence common to two strings, O(mn) table; Matrix Chain Multiplication — finds parenthesisation minimising scalar multiplications; Optimal BST — BST minimising expected search cost from key probabilities.
- **Q.** Explain *All-Pairs Shortest Paths & TSP* in detail with a neat diagram.  
  **Key points:** DP solves graph problems across all vertex pairs. Floyd-Warshall — all-pairs shortest paths in O(n³); Bellman-Ford — single-source shortest paths allowing negative edges; Travelling Salesman by DP — Held-Karp algorithm in O(n² 2^n).

## Unit 4: Backtracking & Branch and Bound

### Short answer (2-3 marks)

- **Q.** Define *State Space Tree*.  
  **Ans.** tree of all partial solutions explored by the algorithm
- **Q.** Define *Bounding Function*.  
  **Ans.** test that prunes nodes that cannot lead to a solution
- **Q.** Define *Backtracking*.  
  **Ans.** depth-first search with pruning of infeasible branches
- **Q.** Define *N-Queens Problem*.  
  **Ans.** place N queens so none attack each other
- **Q.** Define *m-Colouring Problem*.  
  **Ans.** colour a graph with m colours so adjacent vertices differ
- **Q.** Define *Hamiltonian Cycle Search*.  
  **Ans.** backtracking over vertex orders
- **Q.** Define *Sum of Subsets*.  
  **Ans.** choose elements whose sum equals a given value M
- **Q.** Define *Promising Node*.  
  **Ans.** node whose partial sum can still reach M
- **Q.** Define *Pruning Condition*.  
  **Ans.** stop when partial sum exceeds M or remaining sum is too small
- **Q.** Define *Branch and Bound*.  
  **Ans.** breadth-like search using cost bounds to prune
- **Q.** Define *LC Search*.  
  **Ans.** least-cost search selecting the live node with smallest estimated cost
- **Q.** Define *FIFO Branch and Bound*.  
  **Ans.** live nodes explored in queue order

### Long answer (7 marks)

- **Q.** Explain *Backtracking Method* in detail with a neat diagram.  
  **Key points:** Backtracking builds solutions incrementally and abandons dead ends. State Space Tree — tree of all partial solutions explored by the algorithm; Bounding Function — test that prunes nodes that cannot lead to a solution; Backtracking — depth-first search with pruning of infeasible branches.
- **Q.** Explain *N-Queens & Graph Colouring* in detail with a neat diagram.  
  **Key points:** Constraint problems are classic backtracking examples. N-Queens Problem — place N queens so none attack each other; m-Colouring Problem — colour a graph with m colours so adjacent vertices differ; Hamiltonian Cycle Search — backtracking over vertex orders.
- **Q.** Explain *Sum of Subsets* in detail with a neat diagram.  
  **Key points:** Find subsets of numbers adding to a target. Sum of Subsets — choose elements whose sum equals a given value M; Promising Node — node whose partial sum can still reach M; Pruning Condition — stop when partial sum exceeds M or remaining sum is too small.
- **Q.** Explain *Branch and Bound* in detail with a neat diagram.  
  **Key points:** B&B explores the state space using bounds and a live-node list. Branch and Bound — breadth-like search using cost bounds to prune; LC Search — least-cost search selecting the live node with smallest estimated cost; FIFO Branch and Bound — live nodes explored in queue order.

## Unit 5: Advanced Topics & Complexity Classes

### Short answer (2-3 marks)

- **Q.** Define *Articulation Point*.  
  **Ans.** vertex whose removal disconnects the graph
- **Q.** Define *Biconnected Component*.  
  **Ans.** maximal subgraph with no articulation point
- **Q.** Define *DFS Tree*.  
  **Ans.** tree formed by edges used during depth-first search
- **Q.** Define *KMP Algorithm*.  
  **Ans.** uses a prefix function to avoid rechecking; O(n + m)
- **Q.** Define *Rabin-Karp*.  
  **Ans.** rolling hash compares pattern and text windows
- **Q.** Define *Naive Matching*.  
  **Ans.** checks every shift; O(nm)
- **Q.** Define *Class P*.  
  **Ans.** problems solvable in polynomial time
- **Q.** Define *Class NP*.  
  **Ans.** problems whose solutions are verifiable in polynomial time
- **Q.** Define *NP-Complete*.  
  **Ans.** problems in NP to which every NP problem reduces
- **Q.** Define *NP-Hard*.  
  **Ans.** at least as hard as every NP problem, not necessarily in NP
- **Q.** Define *Cook's Theorem*.  
  **Ans.** SAT is NP-complete
- **Q.** Define *Approximation Algorithm*.  
  **Ans.** gives a near-optimal solution with a proven ratio

### Long answer (7 marks)

- **Q.** Explain *Tree & Graph Traversal Techniques* in detail with a neat diagram.  
  **Key points:** Traversals underpin many advanced algorithms. Articulation Point — vertex whose removal disconnects the graph; Biconnected Component — maximal subgraph with no articulation point; DFS Tree — tree formed by edges used during depth-first search.
- **Q.** Explain *String Matching Algorithms* in detail with a neat diagram.  
  **Key points:** Efficient algorithms locate patterns in text. KMP Algorithm — uses a prefix function to avoid rechecking; O(n + m); Rabin-Karp — rolling hash compares pattern and text windows; Naive Matching — checks every shift; O(nm).
- **Q.** Explain *P, NP & NP-Complete* in detail with a neat diagram.  
  **Key points:** Complexity classes separate tractable from likely intractable problems. Class P — problems solvable in polynomial time; Class NP — problems whose solutions are verifiable in polynomial time; NP-Complete — problems in NP to which every NP problem reduces.
- **Q.** Explain *NP-Hard Problems & Approximation* in detail with a neat diagram.  
  **Key points:** Hard problems are tackled by reductions and approximations. NP-Hard — at least as hard as every NP problem, not necessarily in NP; Cook's Theorem — SAT is NP-complete; Approximation Algorithm — gives a near-optimal solution with a proven ratio.

