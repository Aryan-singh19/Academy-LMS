# CS-501: Theory of Computation — University Exam Solved Question Bank

## Question 1: Convert NFA with $\epsilon$-transitions to equivalent DFA
**Given:** An $\epsilon$-NFA with states $q_0, q_1, q_2$, alphabet $\Sigma = \{0, 1\}$.
- Transitions:
  - $\delta(q_0, \epsilon) = \{q_1\}$
  - $\delta(q_0, 0) = \{q_0\}$
  - $\delta(q_1, 1) = \{q_2\}$
  - $\delta(q_2, 0) = \{q_2\}, \delta(q_2, 1) = \{q_2\}$
- Start state: $q_0$, Final state: $q_2$.

### Solution:
**Step 1: Compute $\epsilon$-closures:**
- $\epsilon\text{-closure}(q_0) = \{q_0, q_1\}$
- $\epsilon\text{-closure}(q_1) = \{q_1\}$
- $\epsilon\text{-closure}(q_2) = \{q_2\}$

**Step 2: Determine Start state of DFA:**
- $A = \epsilon\text{-closure}(q_0) = \{q_0, q_1\}$.

**Step 3: Compute DFA Transitions:**
- $\delta_D(A, 0) = \epsilon\text{-closure}(\delta(\{q_0, q_1\}, 0)) = \epsilon\text{-closure}(\{q_0\}) = \{q_0, q_1\} = A$
- $\delta_D(A, 1) = \epsilon\text{-closure}(\delta(\{q_0, q_1\}, 1)) = \epsilon\text{-closure}(\{q_2\}) = \{q_2\} = B$
- For state $B = \{q_2\}$:
  - $\delta_D(B, 0) = \epsilon\text{-closure}(\delta(q_2, 0)) = \epsilon\text{-closure}(\{q_2\}) = \{q_2\} = B$
  - $\delta_D(B, 1) = \epsilon\text{-closure}(\delta(q_2, 1)) = \epsilon\text{-closure}(\{q_2\}) = \{q_2\} = B$

**Resulting DFA State Table:**
| DFA State | Input 0 | Input 1 | Final? |
| :--- | :---: | :---: | :---: |
| $\to [A] = \{q_0, q_1\}$ | $A$ | $B$ | No |
| $*[B] = \{q_2\}$ | $B$ | $B$ | **Yes** (contains $q_2$) |

---

## Question 2: Solve State Equations using Arden's Theorem
**Given System:**
1. $q_1 = q_1 0 + \epsilon$
2. $q_2 = q_1 1 + q_2 (0 + 1)$
Where $q_1$ is initial state, and $q_2$ is the accepting state. Find the regular expression.

### Solution:
- Apply Arden's Theorem to equation (1):
  $q_1 = \epsilon + q_1 0 \implies R = Q + RP$ where $Q = \epsilon, P = 0$.
  Since $P$ does not contain $\epsilon$, $q_1 = QP^* = \epsilon \cdot 0^* = 0^*$.
- Substitute $q_1 = 0^*$ into equation (2):
  $q_2 = 0^* 1 + q_2 (0 + 1)$
- Apply Arden's Theorem to $q_2$:
  Here $Q = 0^* 1$ and $P = (0 + 1)$.
  $q_2 = Q P^* = (0^* 1)(0 + 1)^*$
- **Final Answer:** The language accepted is $(0^* 1)(0 + 1)^*$, which represents all binary strings containing at least one `1`.

---

## Question 3: Prove by Pumping Lemma that $L = \{a^n b^n \mid n \ge 0\}$ is NOT regular
### Solution:
1. **Assumption:** Assume $L$ is a regular language. Then there exists a pumping length $p \ge 1$.
2. **String Choice:** Choose $w = a^p b^p \in L$. The length $|w| = 2p \ge p$.
3. **Decomposition:** By Pumping Lemma, $w = xyz$ where:
   - $|xy| \le p$
   - $|y| > 0$
   - $x y^i z \in L$ for all $i \ge 0$.
4. **Analysis of $y$:**
   - Since $|xy| \le p$, the string $xy$ consists strictly of symbol $a$'s from the initial prefix of $a^p$.
   - Thus, $y = a^k$ for some $k \ge 1$.
5. **Pumping Test ($i = 2$):**
   - $x y^2 z = x y y z = a^{p+k} b^p$.
   - For $x y^2 z$ to belong to $L$, the number of $a$'s must equal the number of $b$'s.
   - However, $p + k \neq p$ because $k \ge 1$.
   - Hence $x y^2 z \notin L$.
6. **Conclusion:** This contradicts the Pumping Lemma. Therefore, $L = \{a^n b^n \mid n \ge 0\}$ is **not regular**.

---

## Question 4: Convert CFG to Chomsky Normal Form (CNF)
**Given Grammar:**
- $S \to aAB \mid BA$
- $A \to bA \mid a$
- $B \to aB \mid b$

### Solution Steps:
**Step 1:** Elimination of Null ($\epsilon$) and Unit Productions:
- No $\epsilon$ productions exist.
- No unit productions ($A \to B$) exist in this CFG.

**Step 2:** Replace terminals in productions with length $\ge 2$:
- Introduce $T_a \to a$ and $T_b \to b$.
- The productions become:
  - $S \to T_a AB \mid BA$
  - $A \to T_b A \mid a$
  - $B \to T_a B \mid b$
  - $T_a \to a$
  - $T_b \to b$

**Step 3:** Restrict right-hand side to at most 2 non-terminals:
- For $S \to T_a AB$: introduce $X_1 \to AB$.
- Then $S \to T_a X_1$.

**Final CNF Grammar:**
1. $S \to T_a X_1 \mid BA$
2. $X_1 \to AB$
3. $A \to T_b A \mid a$
4. $B \to T_a B \mid b$
5. $T_a \to a$
6. $T_b \to b$
All productions are now in the valid form $A \to BC$ or $A \to a$.
