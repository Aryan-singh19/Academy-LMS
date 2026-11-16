# CS-303 Data Structure — Unit-wise Study Notes

> Arrays, stacks, queues, linked lists, trees, graphs, sorting, searching and hashing.

## Unit 1: Introduction, Arrays & Complexity

### Abstract Data Types & Complexity

Data structures organise data so operations are efficient.

- **Abstract Data Type:** model defined by its operations, not its implementation
- **Big-O Notation:** asymptotic upper bound on growth rate of running time
- **Space Complexity:** memory an algorithm needs as a function of input size

### Arrays & Address Calculation

Arrays store elements in contiguous memory with constant-time indexing.

- **Row-major Order:** elements of a row stored together; address = base + ((i·n) + j)·w
- **Column-major Order:** elements of a column stored together
- **Sparse Matrix:** matrix with mostly zero entries, stored as triplets

### Strings & Pattern Operations

Strings are character arrays with special operations.

- **String:** sequence of characters terminated by a null in C
- **Naive Pattern Matching:** compares pattern at every shift; O(nm) worst case
- **Concatenation:** joining two strings end to end

### Recursion

A function that calls itself solves problems by smaller instances.

- **Base Case:** condition that stops further recursive calls
- **Tail Recursion:** recursive call is the last action of the function
- **Tower of Hanoi:** classic recursion needing 2^n − 1 moves

## Unit 2: Stacks & Queues

### Stack Operations

A stack is a LIFO structure used for calls and expression evaluation.

- **LIFO:** last in, first out access order
- **Push and Pop:** insert and remove at the top of the stack
- **Stack Overflow:** push attempted on a full stack

### Expression Conversion & Evaluation

Stacks convert infix expressions to postfix and evaluate them.

- **Infix Expression:** operator between operands, e.g. A + B
- **Postfix Expression:** operator after operands, e.g. AB+; needs no parentheses
- **Operator Precedence:** rule deciding which operator is applied first

### Queues & Circular Queues

A queue is a FIFO structure used for scheduling and buffering.

- **FIFO:** first in, first out access order
- **Circular Queue:** queue where rear wraps to the front to reuse space
- **Queue Full Condition:** (rear + 1) mod size == front in a circular queue

### Deque & Priority Queue

Variants of queues relax the FIFO rule.

- **Deque:** double-ended queue allowing insert and delete at both ends
- **Priority Queue:** elements served by priority rather than arrival order
- **Input-restricted Deque:** insertion allowed at only one end

## Unit 3: Linked Lists

### Singly Linked List

Nodes hold data and a pointer to the next node.

- **Node:** structure holding data and a link field
- **Head Pointer:** pointer to the first node of the list
- **Traversal:** visiting each node from head until NULL

### Doubly & Circular Linked Lists

Extra links allow two-way traversal or cyclic access.

- **Doubly Linked List:** each node has next and previous pointers
- **Circular Linked List:** last node points back to the first
- **Sentinel Node:** dummy header node that simplifies edge cases

### Linked Implementation of Stack & Queue

Dynamic memory removes fixed-size limits.

- **Linked Stack:** push and pop at the head in O(1)
- **Linked Queue:** insert at rear and delete at front pointers
- **Dynamic Allocation:** memory obtained at run time with malloc or new

### Polynomial Representation

Linked lists store sparse polynomials term by term.

- **Polynomial Node:** stores coefficient, exponent and next pointer
- **Polynomial Addition:** merge two lists by comparing exponents
- **Garbage Collection:** reclaiming memory of nodes no longer referenced

## Unit 4: Trees

### Binary Tree Basics & Traversals

Binary trees give hierarchical storage with at most two children per node.

- **Full Binary Tree:** every node has 0 or 2 children
- **Inorder Traversal:** left subtree, root, right subtree
- **Level-order Traversal:** visits nodes level by level using a queue

### Binary Search Tree

BST keeps keys ordered for fast search.

- **BST Property:** left subtree keys < node key < right subtree keys
- **BST Deletion:** node with two children is replaced by its inorder successor
- **Skewed Tree:** degenerate BST that behaves like a linked list

### AVL Trees & Balancing

Self-balancing trees keep height logarithmic.

- **Balance Factor:** height(left) − height(right), kept in {−1, 0, 1}
- **LL Rotation:** single right rotation fixing left-left imbalance
- **AVL Height:** O(log n), guaranteeing logarithmic operations

### B-Trees, Heaps & Threaded Trees

Multi-way and specialised trees serve disks and priority queues.

- **B-Tree:** balanced multi-way search tree used in databases and file systems
- **Max Heap:** complete binary tree where each parent ≥ its children
- **Threaded Binary Tree:** null links replaced by pointers to inorder predecessor or successor

## Unit 5: Graphs, Sorting, Searching & Hashing

### Graph Representation & Traversal

Graphs are stored as matrices or lists and explored systematically.

- **Adjacency List:** array of lists holding neighbours of each vertex
- **BFS:** breadth-first search using a queue; finds shortest paths in unweighted graphs
- **DFS:** depth-first search using a stack or recursion

### Shortest Path & Spanning Trees

Graph algorithms find minimum-cost routes and connections.

- **Dijkstra's Algorithm:** single-source shortest paths with non-negative weights
- **Prim's Algorithm:** grows a minimum spanning tree from a start vertex
- **Topological Sort:** linear ordering of a DAG respecting edge directions

### Sorting Algorithms

Sorting arranges data to speed up searching and merging.

- **Quick Sort:** partition-based; average O(n log n), worst O(n²)
- **Merge Sort:** divide and conquer; O(n log n) always, needs extra space
- **Heap Sort:** builds a heap then repeatedly extracts the maximum; O(n log n)

### Searching & Hashing

Search structures trade memory for faster lookup.

- **Binary Search:** halves a sorted array each step; O(log n)
- **Hash Function:** maps a key to a table index, e.g. key mod table size
- **Collision Resolution:** handling equal hash indices by chaining or open addressing

## Standard Textbooks

- *Fundamentals of Data Structures in C* — Horowitz, Sahni & Anderson-Freed
- *Data Structures Using C* — Reema Thareja
- *Data Structures and Algorithm Analysis in C* — Mark Allen Weiss

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
