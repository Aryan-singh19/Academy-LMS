# CS-603: Compiler Design — Parsing & Code Optimization Guide

## 1. FIRST and FOLLOW Sets
- **Rules for FIRST($X$):**
  1. If $X$ is a terminal, $\text{FIRST}(X) = \{X\}$.
  2. If $X \to \epsilon$ is a production, then $\epsilon \in \text{FIRST}(X)$.
  3. If $X \to Y_1 Y_2 \dots Y_k$, then add $\text{FIRST}(Y_1)$ to $\text{FIRST}(X)$. If $Y_1 \Rightarrow^* \epsilon$, add $\text{FIRST}(Y_2)$, and so on.
- **Rules for FOLLOW($A$):**
  1. For start symbol $S$, $\$$ is in $\text{FOLLOW}(S)$.
  2. If $A \to \alpha B \beta$, everything in $\text{FIRST}(\beta)$ (except $\epsilon$) is in $\text{FOLLOW}(B)$.
  3. If $A \to \alpha B$ or $A \to \alpha B \beta$ where $\beta \Rightarrow^* \epsilon$, then everything in $\text{FOLLOW}(A)$ is in $\text{FOLLOW}(B)$.

## 2. Parser Hierarchy & Power
$$\text{LL}(1) \subset \text{SLR}(1) \subset \text{LALR}(1) \subset \text{CLR}(1)$$
- **Number of states in LR items:**
  - $\text{SLR}(1)$ states = $\text{LALR}(1)$ states = $I_0, I_1, \dots, I_m$ (same canonical LR(0) states)
  - $\text{CLR}(1)$ has many more states because lookahead items $[A \to \alpha \cdot \beta, a]$ are not merged.
