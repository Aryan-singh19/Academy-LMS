# CS-604: Project Management — COCOMO, PERT & CPM Numerical Reference

## 1. Basic COCOMO Estimation Formulas
- **Effort ($E$):** $E = a_b \cdot (\text{KLOC})^{b_b}$ person-months
- **Development Time ($D$):** $D = c_b \cdot (E)^{d_b}$ months
- **Average Staff Size ($SS$):** $SS = \frac{E}{D}$ persons
- **Productivity ($P$):** $P = \frac{\text{KLOC}}{E}$ KLOC/PM

### COCOMO Coefficient Matrix
| Software Project Mode | $a_b$ | $b_b$ | $c_b$ | $d_b$ |
| :--- | :---: | :---: | :---: | :---: |
| **Organic** (Small teams, familiar environment) | 2.4 | 1.05 | 2.5 | 0.38 |
| **Semidetached** (Medium teams, mixed experience)| 3.0 | 1.12 | 2.5 | 0.35 |
| **Embedded** (Tight hardware & operational constraints) | 3.6 | 1.20 | 2.5 | 0.32 |

---

## 2. PERT (Program Evaluation and Review Technique)
For an activity with optimistic time $t_o$, most likely time $t_m$, and pessimistic time $t_p$:
- **Expected Duration ($t_e$):**
  $$t_e = \frac{t_o + 4t_m + t_p}{6}$$
- **Variance ($\sigma^2$):**
  $$\sigma^2 = \left( \frac{t_p - t_o}{6} \right)^2$$
- **Standard Deviation ($\sigma$):**
  $$\sigma = \frac{t_p - t_o}{6}$$
