# CS-303 Data Structure — Question Bank with Answer Hints

## Unit 1: Introduction, Arrays & Complexity

### Short answer (2-3 marks)

- **Q.** Define *Abstract Data Type*.  
  **Ans.** model defined by its operations, not its implementation
- **Q.** Define *Big-O Notation*.  
  **Ans.** asymptotic upper bound on growth rate of running time
- **Q.** Define *Space Complexity*.  
  **Ans.** memory an algorithm needs as a function of input size
- **Q.** Define *Row-major Order*.  
  **Ans.** elements of a row stored together; address = base + ((i·n) + j)·w
- **Q.** Define *Column-major Order*.  
  **Ans.** elements of a column stored together
- **Q.** Define *Sparse Matrix*.  
  **Ans.** matrix with mostly zero entries, stored as triplets
- **Q.** Define *String*.  
  **Ans.** sequence of characters terminated by a null in C
- **Q.** Define *Naive Pattern Matching*.  
  **Ans.** compares pattern at every shift; O(nm) worst case
- **Q.** Define *Concatenation*.  
  **Ans.** joining two strings end to end
- **Q.** Define *Base Case*.  
  **Ans.** condition that stops further recursive calls
- **Q.** Define *Tail Recursion*.  
  **Ans.** recursive call is the last action of the function
- **Q.** Define *Tower of Hanoi*.  
  **Ans.** classic recursion needing 2^n − 1 moves

### Long answer (7 marks)

- **Q.** Explain *Abstract Data Types & Complexity* in detail with a neat diagram.  
  **Key points:** Data structures organise data so operations are efficient. Abstract Data Type — model defined by its operations, not its implementation; Big-O Notation — asymptotic upper bound on growth rate of running time; Space Complexity — memory an algorithm needs as a function of input size.
- **Q.** Explain *Arrays & Address Calculation* in detail with a neat diagram.  
  **Key points:** Arrays store elements in contiguous memory with constant-time indexing. Row-major Order — elements of a row stored together; address = base + ((i·n) + j)·w; Column-major Order — elements of a column stored together; Sparse Matrix — matrix with mostly zero entries, stored as triplets.
- **Q.** Explain *Strings & Pattern Operations* in detail with a neat diagram.  
  **Key points:** Strings are character arrays with special operations. String — sequence of characters terminated by a null in C; Naive Pattern Matching — compares pattern at every shift; O(nm) worst case; Concatenation — joining two strings end to end.
- **Q.** Explain *Recursion* in detail with a neat diagram.  
  **Key points:** A function that calls itself solves problems by smaller instances. Base Case — condition that stops further recursive calls; Tail Recursion — recursive call is the last action of the function; Tower of Hanoi — classic recursion needing 2^n − 1 moves.

## Unit 2: Stacks & Queues

### Short answer (2-3 marks)

- **Q.** Define *LIFO*.  
  **Ans.** last in, first out access order
- **Q.** Define *Push and Pop*.  
  **Ans.** insert and remove at the top of the stack
- **Q.** Define *Stack Overflow*.  
  **Ans.** push attempted on a full stack
- **Q.** Define *Infix Expression*.  
  **Ans.** operator between operands, e.g. A + B
- **Q.** Define *Postfix Expression*.  
  **Ans.** operator after operands, e.g. AB+; needs no parentheses
- **Q.** Define *Operator Precedence*.  
  **Ans.** rule deciding which operator is applied first
- **Q.** Define *FIFO*.  
  **Ans.** first in, first out access order
- **Q.** Define *Circular Queue*.  
  **Ans.** queue where rear wraps to the front to reuse space
- **Q.** Define *Queue Full Condition*.  
  **Ans.** (rear + 1) mod size == front in a circular queue
- **Q.** Define *Deque*.  
  **Ans.** double-ended queue allowing insert and delete at both ends
- **Q.** Define *Priority Queue*.  
  **Ans.** elements served by priority rather than arrival order
- **Q.** Define *Input-restricted Deque*.  
  **Ans.** insertion allowed at only one end

### Long answer (7 marks)

- **Q.** Explain *Stack Operations* in detail with a neat diagram.  
  **Key points:** A stack is a LIFO structure used for calls and expression evaluation. LIFO — last in, first out access order; Push and Pop — insert and remove at the top of the stack; Stack Overflow — push attempted on a full stack.
- **Q.** Explain *Expression Conversion & Evaluation* in detail with a neat diagram.  
  **Key points:** Stacks convert infix expressions to postfix and evaluate them. Infix Expression — operator between operands, e.g. A + B; Postfix Expression — operator after operands, e.g. AB+; needs no parentheses; Operator Precedence — rule deciding which operator is applied first.
- **Q.** Explain *Queues & Circular Queues* in detail with a neat diagram.  
  **Key points:** A queue is a FIFO structure used for scheduling and buffering. FIFO — first in, first out access order; Circular Queue — queue where rear wraps to the front to reuse space; Queue Full Condition — (rear + 1) mod size == front in a circular queue.
- **Q.** Explain *Deque & Priority Queue* in detail with a neat diagram.  
  **Key points:** Variants of queues relax the FIFO rule. Deque — double-ended queue allowing insert and delete at both ends; Priority Queue — elements served by priority rather than arrival order; Input-restricted Deque — insertion allowed at only one end.

## Unit 3: Linked Lists

### Short answer (2-3 marks)

- **Q.** Define *Node*.  
  **Ans.** structure holding data and a link field
- **Q.** Define *Head Pointer*.  
  **Ans.** pointer to the first node of the list
- **Q.** Define *Traversal*.  
  **Ans.** visiting each node from head until NULL
- **Q.** Define *Doubly Linked List*.  
  **Ans.** each node has next and previous pointers
- **Q.** Define *Circular Linked List*.  
  **Ans.** last node points back to the first
- **Q.** Define *Sentinel Node*.  
  **Ans.** dummy header node that simplifies edge cases
- **Q.** Define *Linked Stack*.  
  **Ans.** push and pop at the head in O(1)
- **Q.** Define *Linked Queue*.  
  **Ans.** insert at rear and delete at front pointers
- **Q.** Define *Dynamic Allocation*.  
  **Ans.** memory obtained at run time with malloc or new
- **Q.** Define *Polynomial Node*.  
  **Ans.** stores coefficient, exponent and next pointer
- **Q.** Define *Polynomial Addition*.  
  **Ans.** merge two lists by comparing exponents
- **Q.** Define *Garbage Collection*.  
  **Ans.** reclaiming memory of nodes no longer referenced

### Long answer (7 marks)

- **Q.** Explain *Singly Linked List* in detail with a neat diagram.  
  **Key points:** Nodes hold data and a pointer to the next node. Node — structure holding data and a link field; Head Pointer — pointer to the first node of the list; Traversal — visiting each node from head until NULL.
- **Q.** Explain *Doubly & Circular Linked Lists* in detail with a neat diagram.  
  **Key points:** Extra links allow two-way traversal or cyclic access. Doubly Linked List — each node has next and previous pointers; Circular Linked List — last node points back to the first; Sentinel Node — dummy header node that simplifies edge cases.
- **Q.** Explain *Linked Implementation of Stack & Queue* in detail with a neat diagram.  
  **Key points:** Dynamic memory removes fixed-size limits. Linked Stack — push and pop at the head in O(1); Linked Queue — insert at rear and delete at front pointers; Dynamic Allocation — memory obtained at run time with malloc or new.
- **Q.** Explain *Polynomial Representation* in detail with a neat diagram.  
  **Key points:** Linked lists store sparse polynomials term by term. Polynomial Node — stores coefficient, exponent and next pointer; Polynomial Addition — merge two lists by comparing exponents; Garbage Collection — reclaiming memory of nodes no longer referenced.

## Unit 4: Trees

### Short answer (2-3 marks)

- **Q.** Define *Full Binary Tree*.  
  **Ans.** every node has 0 or 2 children
- **Q.** Define *Inorder Traversal*.  
  **Ans.** left subtree, root, right subtree
- **Q.** Define *Level-order Traversal*.  
  **Ans.** visits nodes level by level using a queue
- **Q.** Define *BST Property*.  
  **Ans.** left subtree keys < node key < right subtree keys
- **Q.** Define *BST Deletion*.  
  **Ans.** node with two children is replaced by its inorder successor
- **Q.** Define *Skewed Tree*.  
  **Ans.** degenerate BST that behaves like a linked list
- **Q.** Define *Balance Factor*.  
  **Ans.** height(left) − height(right), kept in {−1, 0, 1}
- **Q.** Define *LL Rotation*.  
  **Ans.** single right rotation fixing left-left imbalance
- **Q.** Define *AVL Height*.  
  **Ans.** O(log n), guaranteeing logarithmic operations
- **Q.** Define *B-Tree*.  
  **Ans.** balanced multi-way search tree used in databases and file systems
- **Q.** Define *Max Heap*.  
  **Ans.** complete binary tree where each parent ≥ its children
- **Q.** Define *Threaded Binary Tree*.  
  **Ans.** null links replaced by pointers to inorder predecessor or successor

### Long answer (7 marks)

- **Q.** Explain *Binary Tree Basics & Traversals* in detail with a neat diagram.  
  **Key points:** Binary trees give hierarchical storage with at most two children per node. Full Binary Tree — every node has 0 or 2 children; Inorder Traversal — left subtree, root, right subtree; Level-order Traversal — visits nodes level by level using a queue.
- **Q.** Explain *Binary Search Tree* in detail with a neat diagram.  
  **Key points:** BST keeps keys ordered for fast search. BST Property — left subtree keys < node key < right subtree keys; BST Deletion — node with two children is replaced by its inorder successor; Skewed Tree — degenerate BST that behaves like a linked list.
- **Q.** Explain *AVL Trees & Balancing* in detail with a neat diagram.  
  **Key points:** Self-balancing trees keep height logarithmic. Balance Factor — height(left) − height(right), kept in {−1, 0, 1}; LL Rotation — single right rotation fixing left-left imbalance; AVL Height — O(log n), guaranteeing logarithmic operations.
- **Q.** Explain *B-Trees, Heaps & Threaded Trees* in detail with a neat diagram.  
  **Key points:** Multi-way and specialised trees serve disks and priority queues. B-Tree — balanced multi-way search tree used in databases and file systems; Max Heap — complete binary tree where each parent ≥ its children; Threaded Binary Tree — null links replaced by pointers to inorder predecessor or successor.

## Unit 5: Graphs, Sorting, Searching & Hashing

### Short answer (2-3 marks)

- **Q.** Define *Adjacency List*.  
  **Ans.** array of lists holding neighbours of each vertex
- **Q.** Define *BFS*.  
  **Ans.** breadth-first search using a queue; finds shortest paths in unweighted graphs
- **Q.** Define *DFS*.  
  **Ans.** depth-first search using a stack or recursion
- **Q.** Define *Dijkstra's Algorithm*.  
  **Ans.** single-source shortest paths with non-negative weights
- **Q.** Define *Prim's Algorithm*.  
  **Ans.** grows a minimum spanning tree from a start vertex
- **Q.** Define *Topological Sort*.  
  **Ans.** linear ordering of a DAG respecting edge directions
- **Q.** Define *Quick Sort*.  
  **Ans.** partition-based; average O(n log n), worst O(n²)
- **Q.** Define *Merge Sort*.  
  **Ans.** divide and conquer; O(n log n) always, needs extra space
- **Q.** Define *Heap Sort*.  
  **Ans.** builds a heap then repeatedly extracts the maximum; O(n log n)
- **Q.** Define *Binary Search*.  
  **Ans.** halves a sorted array each step; O(log n)
- **Q.** Define *Hash Function*.  
  **Ans.** maps a key to a table index, e.g. key mod table size
- **Q.** Define *Collision Resolution*.  
  **Ans.** handling equal hash indices by chaining or open addressing

### Long answer (7 marks)

- **Q.** Explain *Graph Representation & Traversal* in detail with a neat diagram.  
  **Key points:** Graphs are stored as matrices or lists and explored systematically. Adjacency List — array of lists holding neighbours of each vertex; BFS — breadth-first search using a queue; finds shortest paths in unweighted graphs; DFS — depth-first search using a stack or recursion.
- **Q.** Explain *Shortest Path & Spanning Trees* in detail with a neat diagram.  
  **Key points:** Graph algorithms find minimum-cost routes and connections. Dijkstra's Algorithm — single-source shortest paths with non-negative weights; Prim's Algorithm — grows a minimum spanning tree from a start vertex; Topological Sort — linear ordering of a DAG respecting edge directions.
- **Q.** Explain *Sorting Algorithms* in detail with a neat diagram.  
  **Key points:** Sorting arranges data to speed up searching and merging. Quick Sort — partition-based; average O(n log n), worst O(n²); Merge Sort — divide and conquer; O(n log n) always, needs extra space; Heap Sort — builds a heap then repeatedly extracts the maximum; O(n log n).
- **Q.** Explain *Searching & Hashing* in detail with a neat diagram.  
  **Key points:** Search structures trade memory for faster lookup. Binary Search — halves a sorted array each step; O(log n); Hash Function — maps a key to a table index, e.g. key mod table size; Collision Resolution — handling equal hash indices by chaining or open addressing.

