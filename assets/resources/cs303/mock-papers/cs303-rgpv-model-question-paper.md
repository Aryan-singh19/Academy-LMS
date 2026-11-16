# CS-303 Data Structure — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 3: CS-303 · IT Sem 3: CSIT-303.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Abstract Data Type. Explain its role in Abstract Data Types & Complexity with a suitable example or diagram. **[7]**

(b) Explain Arrays & Address Calculation in detail. Differentiate between Row-major Order and Column-major Order. **[7]**

**Q2.** *(Unit 2)*

(a) Define Postfix Expression. Explain its role in Expression Conversion & Evaluation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Queues & Circular Queues. Bring out the significance of FIFO and Circular Queue. **[7]**

**Q3.** *(Unit 3)*

(a) Define Dynamic Allocation. Explain its role in Linked Implementation of Stack & Queue with a suitable example or diagram. **[7]**

(b) Explain Polynomial Representation in detail. Differentiate between Polynomial Node and Polynomial Addition. **[7]**

**Q4.** *(Unit 4)*

(a) Define B-Tree. Explain its role in B-Trees, Heaps & Threaded Trees with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Binary Tree Basics & Traversals. Bring out the significance of Full Binary Tree and Inorder Traversal. **[7]**

**Q5.** *(Unit 5)*

(a) Define BFS. Explain its role in Graph Representation & Traversal with a suitable example or diagram. **[7]**

(b) Explain Shortest Path & Spanning Trees in detail. Differentiate between Dijkstra's Algorithm and Prim's Algorithm. **[7]**

**Q6.** *(Unit 1)*

(a) Define Tower of Hanoi. Explain its role in Recursion with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Abstract Data Types & Complexity. Bring out the significance of Abstract Data Type and Big-O Notation. **[7]**

**Q7.** *(Unit 3)*

(a) Define Node. Explain its role in Singly Linked List with a suitable example or diagram. **[7]**

(b) Explain Doubly & Circular Linked Lists in detail. Differentiate between Doubly Linked List and Circular Linked List. **[7]**

**Q8.** *(Unit 5)*

(a) Define Prim's Algorithm. Explain its role in Shortest Path & Spanning Trees with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sorting Algorithms. Bring out the significance of Quick Sort and Merge Sort. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Column-major Order. Explain its role in Arrays & Address Calculation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Strings & Pattern Operations. Bring out the significance of String and Naive Pattern Matching. **[7]**

**Q2.** *(Unit 2)*

(a) Define Queue Full Condition. Explain its role in Queues & Circular Queues with a suitable example or diagram. **[7]**

(b) Explain Deque & Priority Queue in detail. Differentiate between Deque and Priority Queue. **[7]**

**Q3.** *(Unit 3)*

(a) Define Polynomial Node. Explain its role in Polynomial Representation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Singly Linked List. Bring out the significance of Node and Head Pointer. **[7]**

**Q4.** *(Unit 4)*

(a) Define Inorder Traversal. Explain its role in Binary Tree Basics & Traversals with a suitable example or diagram. **[7]**

(b) Explain Binary Search Tree in detail. Differentiate between BST Property and BST Deletion. **[7]**

**Q5.** *(Unit 5)*

(a) Define Topological Sort. Explain its role in Shortest Path & Spanning Trees with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Sorting Algorithms. Bring out the significance of Quick Sort and Merge Sort. **[7]**

**Q6.** *(Unit 2)*

(a) Define LIFO. Explain its role in Stack Operations with a suitable example or diagram. **[7]**

(b) Explain Expression Conversion & Evaluation in detail. Differentiate between Infix Expression and Postfix Expression. **[7]**

**Q7.** *(Unit 4)*

(a) Define BST Deletion. Explain its role in Binary Search Tree with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss AVL Trees & Balancing. Bring out the significance of Balance Factor and LL Rotation. **[7]**

**Q8.** *(Unit 1)*

(a) Define Concatenation. Explain its role in Strings & Pattern Operations with a suitable example or diagram. **[7]**

(b) Explain Recursion in detail. Differentiate between Base Case and Tail Recursion. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Abstract Data Type: model defined by its operations, not its implementation
- **Q1(b):** Row-major Order: elements of a row stored together; address = base + ((i·n) + j)·w | Column-major Order: elements of a column stored together | Sparse Matrix: matrix with mostly zero entries, stored as triplets
- **Q2(a):** Postfix Expression: operator after operands, e.g. AB+; needs no parentheses
- **Q2(b):** FIFO: first in, first out access order | Circular Queue: queue where rear wraps to the front to reuse space | Queue Full Condition: (rear + 1) mod size == front in a circular queue
- **Q3(a):** Dynamic Allocation: memory obtained at run time with malloc or new
- **Q3(b):** Polynomial Node: stores coefficient, exponent and next pointer | Polynomial Addition: merge two lists by comparing exponents | Garbage Collection: reclaiming memory of nodes no longer referenced
- **Q4(a):** B-Tree: balanced multi-way search tree used in databases and file systems
- **Q4(b):** Full Binary Tree: every node has 0 or 2 children | Inorder Traversal: left subtree, root, right subtree | Level-order Traversal: visits nodes level by level using a queue
- **Q5(a):** BFS: breadth-first search using a queue; finds shortest paths in unweighted graphs
- **Q5(b):** Dijkstra's Algorithm: single-source shortest paths with non-negative weights | Prim's Algorithm: grows a minimum spanning tree from a start vertex | Topological Sort: linear ordering of a DAG respecting edge directions
- **Q6(a):** Tower of Hanoi: classic recursion needing 2^n − 1 moves
- **Q6(b):** Abstract Data Type: model defined by its operations, not its implementation | Big-O Notation: asymptotic upper bound on growth rate of running time | Space Complexity: memory an algorithm needs as a function of input size
- **Q7(a):** Node: structure holding data and a link field
- **Q7(b):** Doubly Linked List: each node has next and previous pointers | Circular Linked List: last node points back to the first | Sentinel Node: dummy header node that simplifies edge cases
- **Q8(a):** Prim's Algorithm: grows a minimum spanning tree from a start vertex
- **Q8(b):** Quick Sort: partition-based; average O(n log n), worst O(n²) | Merge Sort: divide and conquer; O(n log n) always, needs extra space | Heap Sort: builds a heap then repeatedly extracts the maximum; O(n log n)

## Recommended Books

- *Fundamentals of Data Structures in C* — Horowitz, Sahni & Anderson-Freed
- *Data Structures Using C* — Reema Thareja
- *Data Structures and Algorithm Analysis in C* — Mark Allen Weiss
