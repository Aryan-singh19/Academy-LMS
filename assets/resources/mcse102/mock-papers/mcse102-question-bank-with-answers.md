# MCSE-102 Advanced Data Structures & Algorithms — Question Bank with Answer Hints

## Unit 1: Analysis Techniques

### Short answer (2-3 marks)

- **Q.** Define *Aggregate Method*.  
  **Ans.** total cost divided by operations
- **Q.** Define *Accounting Method*.  
  **Ans.** assigns credits to cheap operations
- **Q.** Define *Potential Method*.  
  **Ans.** potential function stores prepaid work
- **Q.** Define *Akra-Bazzi Method*.  
  **Ans.** generalises master theorem
- **Q.** Define *Recursion Tree*.  
  **Ans.** sums cost per level
- **Q.** Define *Lower Bound for Comparison Sorting*.  
  **Ans.** Ω(n log n)
- **Q.** Define *Online Algorithm*.  
  **Ans.** processes input without future knowledge
- **Q.** Define *Competitive Ratio*.  
  **Ans.** worst-case ratio to offline optimum
- **Q.** Define *Paging Problem*.  
  **Ans.** LRU is k-competitive
- **Q.** Define *I/O Model*.  
  **Ans.** counts block transfers
- **Q.** Define *External Merge Sort*.  
  **Ans.** sorts data larger than memory
- **Q.** Define *Cache-oblivious Algorithm*.  
  **Ans.** optimal without knowing cache size

### Long answer (7 marks)

- **Q.** Explain *Amortised Analysis* in detail with a neat diagram.  
  **Key points:** Average cost over sequences of operations. Aggregate Method — total cost divided by operations; Accounting Method — assigns credits to cheap operations; Potential Method — potential function stores prepaid work.
- **Q.** Explain *Advanced Recurrences* in detail with a neat diagram.  
  **Key points:** Divide and conquer recurrences. Akra-Bazzi Method — generalises master theorem; Recursion Tree — sums cost per level; Lower Bound for Comparison Sorting — Ω(n log n).
- **Q.** Explain *Competitive Analysis* in detail with a neat diagram.  
  **Key points:** Online algorithms are compared with optimum. Online Algorithm — processes input without future knowledge; Competitive Ratio — worst-case ratio to offline optimum; Paging Problem — LRU is k-competitive.
- **Q.** Explain *External Memory Model* in detail with a neat diagram.  
  **Key points:** Disk access dominates cost. I/O Model — counts block transfers; External Merge Sort — sorts data larger than memory; Cache-oblivious Algorithm — optimal without knowing cache size.

## Unit 2: Advanced Trees & Heaps

### Short answer (2-3 marks)

- **Q.** Define *Red-Black Tree*.  
  **Ans.** colour rules keep height ≤ 2 log n
- **Q.** Define *Splay Tree*.  
  **Ans.** self-adjusting tree with amortised O(log n)
- **Q.** Define *Treap*.  
  **Ans.** BST with random heap priorities
- **Q.** Define *Binomial Heap*.  
  **Ans.** forest of binomial trees
- **Q.** Define *Fibonacci Heap*.  
  **Ans.** O(1) amortised decrease-key
- **Q.** Define *Pairing Heap*.  
  **Ans.** simple heap with good practical performance
- **Q.** Define *Segment Tree*.  
  **Ans.** range queries and updates in O(log n)
- **Q.** Define *Fenwick Tree*.  
  **Ans.** prefix sums with O(log n) updates
- **Q.** Define *Sparse Table*.  
  **Ans.** O(1) range minimum after O(n log n) preprocessing
- **Q.** Define *Trie*.  
  **Ans.** tree of characters for prefix search
- **Q.** Define *Suffix Array*.  
  **Ans.** sorted suffixes of a string
- **Q.** Define *Suffix Tree*.  
  **Ans.** compressed trie of all suffixes

### Long answer (7 marks)

- **Q.** Explain *Balanced Search Trees* in detail with a neat diagram.  
  **Key points:** Trees stay logarithmic in height. Red-Black Tree — colour rules keep height ≤ 2 log n; Splay Tree — self-adjusting tree with amortised O(log n); Treap — BST with random heap priorities.
- **Q.** Explain *Advanced Heaps* in detail with a neat diagram.  
  **Key points:** Heaps support fast priority operations. Binomial Heap — forest of binomial trees; Fibonacci Heap — O(1) amortised decrease-key; Pairing Heap — simple heap with good practical performance.
- **Q.** Explain *Range Query Structures* in detail with a neat diagram.  
  **Key points:** Structures answer range queries fast. Segment Tree — range queries and updates in O(log n); Fenwick Tree — prefix sums with O(log n) updates; Sparse Table — O(1) range minimum after O(n log n) preprocessing.
- **Q.** Explain *String Data Structures* in detail with a neat diagram.  
  **Key points:** Structures index text efficiently. Trie — tree of characters for prefix search; Suffix Array — sorted suffixes of a string; Suffix Tree — compressed trie of all suffixes.

## Unit 3: Graph Algorithms

### Short answer (2-3 marks)

- **Q.** Define *Dijkstra with Fibonacci Heap*.  
  **Ans.** O(E + V log V)
- **Q.** Define *Johnson's Algorithm*.  
  **Ans.** all pairs using reweighting
- **Q.** Define *A* Search*.  
  **Ans.** heuristic-guided shortest path
- **Q.** Define *Edmonds-Karp*.  
  **Ans.** BFS augmenting paths, O(VE²)
- **Q.** Define *Push-Relabel*.  
  **Ans.** preflow-based max-flow algorithm
- **Q.** Define *Min-cost Flow*.  
  **Ans.** flow with minimum total cost
- **Q.** Define *Hopcroft-Karp*.  
  **Ans.** bipartite matching in O(E√V)
- **Q.** Define *Hungarian Algorithm*.  
  **Ans.** minimum cost assignment
- **Q.** Define *Blossom Algorithm*.  
  **Ans.** matching in general graphs
- **Q.** Define *Strongly Connected Components*.  
  **Ans.** Tarjan's or Kosaraju's algorithm
- **Q.** Define *Bridges and Articulation Points*.  
  **Ans.** found with DFS low values
- **Q.** Define *Minimum Spanning Tree*.  
  **Ans.** Kruskal and Prim

### Long answer (7 marks)

- **Q.** Explain *Shortest Paths* in detail with a neat diagram.  
  **Key points:** Algorithms for weighted graphs. Dijkstra with Fibonacci Heap — O(E + V log V); Johnson's Algorithm — all pairs using reweighting; A* Search — heuristic-guided shortest path.
- **Q.** Explain *Network Flow* in detail with a neat diagram.  
  **Key points:** Flow algorithms solve matching and cuts. Edmonds-Karp — BFS augmenting paths, O(VE²); Push-Relabel — preflow-based max-flow algorithm; Min-cost Flow — flow with minimum total cost.
- **Q.** Explain *Matching* in detail with a neat diagram.  
  **Key points:** Matchings pair vertices. Hopcroft-Karp — bipartite matching in O(E√V); Hungarian Algorithm — minimum cost assignment; Blossom Algorithm — matching in general graphs.
- **Q.** Explain *Connectivity & Decomposition* in detail with a neat diagram.  
  **Key points:** Structural graph properties. Strongly Connected Components — Tarjan's or Kosaraju's algorithm; Bridges and Articulation Points — found with DFS low values; Minimum Spanning Tree — Kruskal and Prim.

## Unit 4: Randomised Algorithms

### Short answer (2-3 marks)

- **Q.** Define *Las Vegas Algorithm*.  
  **Ans.** always correct, random running time
- **Q.** Define *Monte Carlo Algorithm*.  
  **Ans.** bounded time, may err
- **Q.** Define *Expected Running Time*.  
  **Ans.** average over random choices
- **Q.** Define *Skip List*.  
  **Ans.** probabilistic balanced list
- **Q.** Define *Universal Hashing*.  
  **Ans.** random hash family limits collisions
- **Q.** Define *Bloom Filter*.  
  **Ans.** space-efficient set membership with false positives
- **Q.** Define *Karger's Min-cut*.  
  **Ans.** random edge contraction
- **Q.** Define *Random Walk*.  
  **Ans.** probabilistic graph exploration
- **Q.** Define *Randomised Quicksort*.  
  **Ans.** expected O(n log n)
- **Q.** Define *Count-Min Sketch*.  
  **Ans.** approximate frequency counts
- **Q.** Define *HyperLogLog*.  
  **Ans.** estimates distinct elements
- **Q.** Define *Reservoir Sampling*.  
  **Ans.** uniform sample from a stream

### Long answer (7 marks)

- **Q.** Explain *Randomisation Basics* in detail with a neat diagram.  
  **Key points:** Randomness simplifies algorithms. Las Vegas Algorithm — always correct, random running time; Monte Carlo Algorithm — bounded time, may err; Expected Running Time — average over random choices.
- **Q.** Explain *Randomised Data Structures* in detail with a neat diagram.  
  **Key points:** Randomness gives balanced structures. Skip List — probabilistic balanced list; Universal Hashing — random hash family limits collisions; Bloom Filter — space-efficient set membership with false positives.
- **Q.** Explain *Randomised Graph Algorithms* in detail with a neat diagram.  
  **Key points:** Random choices solve graph problems. Karger's Min-cut — random edge contraction; Random Walk — probabilistic graph exploration; Randomised Quicksort — expected O(n log n).
- **Q.** Explain *Streaming & Sketching* in detail with a neat diagram.  
  **Key points:** Summaries of massive data streams. Count-Min Sketch — approximate frequency counts; HyperLogLog — estimates distinct elements; Reservoir Sampling — uniform sample from a stream.

## Unit 5: Approximation & Parameterised Algorithms

### Short answer (2-3 marks)

- **Q.** Define *NP-hard*.  
  **Ans.** at least as hard as every NP problem
- **Q.** Define *Polynomial Reduction*.  
  **Ans.** transforms one problem into another
- **Q.** Define *3-SAT*.  
  **Ans.** canonical NP-complete problem
- **Q.** Define *Approximation Ratio*.  
  **Ans.** solution cost relative to optimum
- **Q.** Define *Vertex Cover 2-approximation*.  
  **Ans.** via maximal matching
- **Q.** Define *Set Cover Greedy*.  
  **Ans.** ln n approximation
- **Q.** Define *PTAS*.  
  **Ans.** (1 + ε)-approximation in polynomial time for fixed ε
- **Q.** Define *FPTAS*.  
  **Ans.** polynomial in input size and 1/ε
- **Q.** Define *Knapsack FPTAS*.  
  **Ans.** scaling and rounding profits
- **Q.** Define *FPT*.  
  **Ans.** solvable in f(k)·poly(n) time
- **Q.** Define *Kernelisation*.  
  **Ans.** reduce instance to size depending on k
- **Q.** Define *Bounded Search Tree*.  
  **Ans.** branching with depth k

### Long answer (7 marks)

- **Q.** Explain *NP-hardness & Reductions* in detail with a neat diagram.  
  **Key points:** Hardness guides algorithm choice. NP-hard — at least as hard as every NP problem; Polynomial Reduction — transforms one problem into another; 3-SAT — canonical NP-complete problem.
- **Q.** Explain *Approximation Algorithms* in detail with a neat diagram.  
  **Key points:** Near-optimal solutions with guarantees. Approximation Ratio — solution cost relative to optimum; Vertex Cover 2-approximation — via maximal matching; Set Cover Greedy — ln n approximation.
- **Q.** Explain *PTAS & FPTAS* in detail with a neat diagram.  
  **Key points:** Schemes approach optimum arbitrarily. PTAS — (1 + ε)-approximation in polynomial time for fixed ε; FPTAS — polynomial in input size and 1/ε; Knapsack FPTAS — scaling and rounding profits.
- **Q.** Explain *Parameterised Complexity* in detail with a neat diagram.  
  **Key points:** Fixed-parameter tractability. FPT — solvable in f(k)·poly(n) time; Kernelisation — reduce instance to size depending on k; Bounded Search Tree — branching with depth k.

