# CS-502: Database Management Systems — Normalization & Functional Dependencies Masterclass

## 1. Functional Dependencies (FD)
A functional dependency $\alpha \to \beta$ between two sets of attributes holds on relation schema $R$ if, for any valid instance $r(R)$, whenever two tuples $t_1, t_2 \in r$ agree on attributes $\alpha$, they must also agree on attributes $\beta$:
$$t_1[\alpha] = t_2[\alpha] \implies t_1[\beta] = t_2[\beta]$$

### Armstrong's Axioms (Sound & Complete)
1. **Reflexivity:** If $\beta \subseteq \alpha$, then $\alpha \to \beta$.
2. **Augmentation:** If $\alpha \to \beta$, then $\alpha\gamma \to \beta\gamma$.
3. **Transitivity:** If $\alpha \to \beta$ and $\beta \to \gamma$, then $\alpha \to \gamma$.

### Secondary Derived Inference Rules:
- **Union:** If $\alpha \to \beta$ and $\alpha \to \gamma$, then $\alpha \to \beta\gamma$.
- **Decomposition:** If $\alpha \to \beta\gamma$, then $\alpha \to \beta$ and $\alpha \to \gamma$.
- **Pseudotransitivity:** If $\alpha \to \beta$ and $\gamma\beta \to \delta$, then $\alpha\gamma \to \delta$.

---

## 2. Attribute Closure Algorithm ($X^+$)
Used to find all attributes functionally determined by attribute set $X$:
1. Initialize $X^+ = X$.
2. Repeat until no new attributes can be added:
   - For each FD $Y \to Z$ in $F$:
   - If $Y \subseteq X^+$, then $X^+ = X^+ \cup Z$.
3. Return $X^+$.

**Determining Candidate Keys:**
An attribute set $K$ is a candidate key if:
1. $K^+ = R$ (contains all attributes of relation $R$).
2. No proper subset $K' \subset K$ has $(K')^+ = R$ (minimality condition).

---

## 3. Normal Forms Comparison
| Normal Form | Condition / Requirement | Primary Anomaly Addressed |
| :--- | :--- | :--- |
| **1NF (First Normal Form)** | Every attribute contains only **atomic (indivisible) values**; no multi-valued or composite attributes. | Multi-valued sets in columns |
| **2NF (Second Normal Form)** | Must be in 1NF AND **no partial dependency** exists (no non-prime attribute depends on a proper subset of a candidate key). | Partial functional dependencies |
| **3NF (Third Normal Form)** | Must be in 2NF AND for every non-trivial FD $X \to Y$, either: <br>1. $X$ is a **superkey**, OR <br>2. $Y$ is a **prime attribute** (member of some candidate key). | Transitive dependencies |
| **BCNF (Boyce-Codd Normal Form)** | For every non-trivial FD $X \to Y$, **$X$ MUST be a superkey**. | Overlapping candidate key anomalies |
| **4NF (Fourth Normal Form)** | Must be in BCNF AND contain no non-trivial **multi-valued dependencies** ($X \twoheadrightarrow Y$). | Independent multi-valued facts |
| **5NF (Project-Join Normal Form)** | Must be in 4NF AND contain no **join dependencies** not implied by candidate keys. | Lossless n-way cyclic joins |

---

## 4. Lossless-Join Decomposition & Dependency Preservation
When decomposing relation $R$ into $R_1$ and $R_2$:
### Lossless Join Test (Binary Decomposition)
A decomposition is **lossless** if and only if the common attributes functionally determine at least one of the relations:
$$(R_1 \cap R_2) \to R_1 \quad \text{OR} \quad (R_1 \cap R_2) \to R_2$$

### Dependency Preservation Test
A decomposition is dependency-preserving if:
$$(F_1 \cup F_2)^+ = F^+$$
Where $F_i$ is the projection of $F$ on $R_i$.
> **Key Note:** Every relation can be decomposed into **3NF** with both **Lossless Join AND Dependency Preservation**. However, BCNF decomposition always guarantees Lossless Join, but **may not preserve all dependencies**.
