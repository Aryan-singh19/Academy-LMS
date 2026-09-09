# CS-502: Database Management Systems — University Exam Solved Question Bank

## Question 1: Find All Candidate Keys of Relation $R(A, B, C, D, E)$
**Given Relation:** $R(A, B, C, D, E)$
**Set of Functional Dependencies $F$:**
1. $A \to BC$
2. $CD \to E$
3. $B \to D$
4. $E \to A$

### Solution:
**Step 1: Identify attributes that never appear on the right side of any FD:**
- Right-hand side attributes: $B, C, E, D, A$.
- All attributes appear on the right side. So we must test single attributes.

**Step 2: Compute Attribute Closures:**
- $(A)^+ = \{A\} \to \{A, B, C\}$ (by $A \to BC$)
  - Adding $D$ from $B \to D$: $\{A, B, C, D\}$
  - Adding $E$ from $CD \to E$: $\{A, B, C, D, E\}$
  - Since $(A)^+ = R$, **$A$ is a Candidate Key**.

- Check if other single attributes determine $A$:
  - $E \to A$: Therefore $(E)^+ \supseteq (A)^+ = R$.
  - Thus, **$E$ is also a Candidate Key**.

- Check $CD$:
  - $(CD)^+ = \{C, D, E, A, B\} = R$.
  - Since $B \to D$, replace $D$ with $B$: $(BC)^+ = \{B, C, D, E, A\} = R$.
  - Thus, **$BC$ is a Candidate Key**, and **$CD$ is a Candidate Key**.

**Final Answer:**
The Candidate Keys of $R$ are: **$\{A\}, \{E\}, \{BC\}, \{CD\}$**.
- Prime attributes (part of any candidate key): $\{A, B, C, D, E\}$ (All attributes are prime!).
- Since all attributes are prime, the relation is immediately in **3NF**!

---

## Question 2: Precedence Graph Test for Conflict Serializability
**Given Schedule $S$ with Transactions $T_1, T_2, T_3$:**
$$S: R_1(X), R_2(Z), R_1(Z), R_3(X), R_3(Y), W_1(X), W_3(Y), R_2(Y), W_2(Z), W_2(Y)$$

### Solution:
A conflict occurs between two operations on the same data item by different transactions where at least one operation is a write ($W$).

**Conflict Pairs:**
1. On Item $X$:
   - $R_3(X)$ is followed by $W_1(X) \implies$ Edge: $T_3 \to T_1$.
2. On Item $Y$:
   - $W_3(Y)$ is followed by $R_2(Y) \implies$ Edge: $T_3 \to T_2$.
   - $W_3(Y)$ is followed by $W_2(Y) \implies$ Edge: $T_3 \to T_2$.
3. On Item $Z$:
   - $R_1(Z)$ is followed by $W_2(Z) \implies$ Edge: $T_1 \to T_2$.

**Construct Precedence Graph:**
- Nodes: $\{T_1, T_2, T_3\}$
- Directed Edges:
  - $T_3 \to T_1$
  - $T_1 \to T_2$
  - $T_3 \to T_2$

**Cycle Check:**
- Edges: $T_3 \to T_1 \to T_2$.
- The graph is a Directed Acyclic Graph (DAG) with **NO cycles**.

**Conclusion:**
- Schedule $S$ is **Conflict Serializable**.
- Equivalent Serial Schedule: **$T_3 \to T_1 \to T_2$**.

---

## Question 3: B+ Tree Node Insertion & Splitting (Order $p = 4$)
**Given:** B+ Tree with maximum child pointers per node $p = 4$ (maximum keys per node = $p - 1 = 3$).
Insert keys sequentially: $10, 20, 30, 40, 50$.

### Solution Steps:
1. **Insert 10, 20, 30:**
   - Single leaf node: `[10 | 20 | 30]` (Capacity is full: 3 keys).
2. **Insert 40:**
   - Node overflows with keys `[10, 20, 30, 40]` (4 keys, max is 3).
   - In B+ tree leaf split, left gets $\lceil (p-1)/2 \rceil = 2$ keys: `[10, 20]`.
   - Right leaf gets remaining: `[30, 40]`.
   - The smallest key in the right leaf ($30$) is **copied up** to become the parent index key.
   - **Root:** `[30]`
     - Left pointer $\to$ `[10, 20]`
     - Right pointer $\to$ `[30, 40]`
3. **Insert 50:**
   - Insert into right leaf: `[30, 40, 50]`. (Valid, 3 keys).
   - Final Root: `[30]`
   - Leaves: `[10, 20] <-> [30, 40, 50]` connected via linked list pointers.
