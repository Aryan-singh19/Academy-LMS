# CS-501: Theory of Computation — Complete Formula Sheet & Quick Reference

## 1. Foundational Mathematical Concepts
- **Alphabet ($\Sigma$):** Finite, non-empty set of symbols. E.g., $\Sigma = \{0, 1\}$.
- **String ($w$):** Finite sequence of symbols from $\Sigma$. Length is $|w|$. Empty string is $\epsilon$ ($|\epsilon| = 0$).
- **Powers of Alphabet ($\Sigma^k$):** Set of all strings of length $k$.
  - $\Sigma^0 = \{\epsilon\}$
  - $\Sigma^* = \Sigma^0 \cup \Sigma^1 \cup \Sigma^2 \cup \dots$ (Kleene Closure, contains $\epsilon$)
  - $\Sigma^+ = \Sigma^* \setminus \{\epsilon\}$ (Positive Closure, excludes $\epsilon$)
- **Number of Substrings:** For string of length $n$ with distinct symbols: $\frac{n(n+1)}{2} + 1$ (including $\epsilon$).

---

## 2. Finite Automata (FA)
### 5-Tuple Definition
$$M = (Q, \Sigma, \delta, q_0, F)$$
- $Q$: Finite non-empty set of states.
- $\Sigma$: Finite alphabet.
- $\delta$: Transition function.
  - **DFA:** $\delta: Q \times \Sigma \to Q$ (Deterministic, exactly 1 transition per symbol)
  - **NFA:** $\delta: Q \times \Sigma \to 2^Q$ (Non-deterministic, 0, 1, or multiple transitions)
  - **$\epsilon$-NFA:** $\delta: Q \times (\Sigma \cup \{\epsilon\}) \to 2^Q$
- $q_0 \in Q$: Initial/start state.
- $F \subseteq Q$: Set of final/accepting states.

### Equivalence & Powers
- Every NFA has an equivalent DFA (Subset Construction / Powerset construction).
- If NFA has $n$ states, the equivalent DFA has at most $2^n$ states.
- Language recognizing power: $\text{DFA} \equiv \text{NFA} \equiv \epsilon\text{-NFA}$.

---

## 3. Finite State Machines with Output
| Feature | Moore Machine | Mealy Machine |
| :--- | :--- | :--- |
| **Output Dependency** | Output depends **only on current state** | Output depends on **current state AND current input symbol** |
| **Output Length** | For input string length $n$, output length is $n + 1$ | For input string length $n$, output length is $n$ |
| **State Count** | Generally requires more states | Often requires fewer states for the same behavior |
| **Output Function** | $\lambda: Q \to \Delta$ | $\lambda: Q \times \Sigma \to \Delta$ |

---

## 4. Regular Expressions & Arden's Theorem
### Regular Expression Identities
1. $\phi + R = R$
2. $\phi \cdot R = R \cdot \phi = \phi$
3. $\epsilon \cdot R = R \cdot \epsilon = R$
4. $\epsilon + RR^* = \epsilon + R^*R = R^*$
5. $(R^*)^* = R^*$
6. $\epsilon^* = \epsilon$ and $\phi^* = \epsilon$
7. $(P + Q)^* = (P^*Q^*)^* = (P^* + Q^*)^*$
8. $(PQ)^*P = P(QP)^*$

### Arden's Theorem
> **Statement:** Let $P$ and $Q$ be two regular expressions over $\Sigma$. If $P$ does not contain $\epsilon$, then the equation:
> $$R = Q + RP$$
> has a **unique solution** given by:
> $$R = QP^*$$

---

## 5. Pumping Lemma for Regular Languages
To prove a language $L$ is **not regular**:
1. Assume $L$ is regular. Let $p$ be its pumping length.
2. Choose a specific string $w \in L$ such that $|w| \ge p$ (expressed in terms of $p$).
3. By the lemma, $w$ can be divided as $w = xyz$ satisfying:
   - $|y| > 0$ (i.e. $y \neq \epsilon$)
   - $|xy| \le p$
   - $\forall i \ge 0, \quad xy^iz \in L$
4. Find an integer $i$ (e.g. $i=0$ or $i=2$) such that $x y^i z \notin L$.
5. Contradiction reached; hence $L$ is not regular.

---

## 6. Chomsky Hierarchy of Languages
| Type | Language | Grammar Form | Automaton Machine | Example |
| :--- | :--- | :--- | :--- | :--- |
| **Type 3** | Regular Language | $A \to aB \text{ or } A \to a$ | Finite State Automaton (DFA / NFA) | $a^*b^*$ |
| **Type 2** | Context-Free (CFL) | $A \to \alpha \quad (A \in V_N, \alpha \in (V_N \cup V_T)^*)$ | Pushdown Automaton (PDA) | $a^n b^n \quad (n \ge 0)$ |
| **Type 1** | Context-Sensitive (CSL) | $\alpha \to \beta \quad (|\alpha| \le |\beta|)$ | Linear Bounded Automaton (LBA) | $a^n b^n c^n \quad (n \ge 1)$ |
| **Type 0** | Recursively Enumerable | $\alpha \to \beta \quad (\alpha \in (V \cup T)^+ \text{ has } \ge 1 \text{ non-terminal})$ | Turing Machine (TM) | Halting Problem |

---

## 7. Closure Properties Matrix
| Operation | Regular | CFL | DCFL | CSL | Recursive | Recursively Enumerable (RE) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Union** | Yes | Yes | No | Yes | Yes | Yes |
| **Intersection** | Yes | No | No | Yes | Yes | Yes |
| **Complement** | Yes | No | Yes | Yes | Yes | No |
| **Concatenation**| Yes | Yes | No | Yes | Yes | Yes |
| **Kleene Star** | Yes | Yes | No | Yes | Yes | Yes |
| **Intersection with Regular** | Yes | Yes | Yes | Yes | Yes | Yes |

---

## 8. Pushdown Automata (PDA)
7-tuple: $M = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)$
- $\Gamma$: Stack alphabet.
- $Z_0 \in \Gamma$: Initial stack start symbol.
- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \times \Gamma \to \mathcal{P}(Q \times \Gamma^*)$.
- **Acceptance Modes:**
  1. By Final State: $L(M) = \{w \mid (q_0, w, Z_0) \vdash^* (q_f, \epsilon, \gamma), q_f \in F\}$
  2. By Empty Stack: $N(M) = \{w \mid (q_0, w, Z_0) \vdash^* (q, \epsilon, \epsilon)\}$
  - **Theorem:** $L(\text{Final State}) \equiv N(\text{Empty Stack})$.

---

## 9. Turing Machines & Decidability
7-tuple: $M = (Q, \Sigma, \Gamma, \delta, q_0, B, F)$
- $\Gamma$: Tape alphabet ($\Sigma \subset \Gamma$).
- $B \in \Gamma \setminus \Sigma$: Blank symbol.
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$.
- **Halting Problem ($HALT_{TM}$):** Undecidable. No algorithm exists that can take an arbitrary Turing machine $M$ and input $w$ and always correctly determine whether $M$ will halt on $w$.
- **Post Correspondence Problem (PCP):** Undecidable for alphabet size $\ge 2$. Decidable for unary alphabet ($\Sigma = \{1\}$).
