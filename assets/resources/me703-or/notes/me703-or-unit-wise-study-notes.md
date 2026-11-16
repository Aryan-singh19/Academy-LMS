# ME-703(A) Operations Research & Supply Chain — Unit-wise Study Notes

> Linear programming, transportation and assignment, queuing, inventory, project scheduling and supply chain management.

## Unit 1: Linear Programming

### LP Formulation

LP optimises a linear objective under constraints.

- **Linear Programming:** optimising linear objective subject to linear constraints
- **Decision Variables:** quantities to be determined
- **Feasible Region:** set of points satisfying all constraints

### Graphical Method

Two-variable LPs are solved graphically.

- **Corner Point Theorem:** optimum lies at a vertex of the feasible region
- **Unbounded Solution:** objective can increase indefinitely
- **Infeasible Problem:** no point satisfies all constraints

### Simplex Method

Simplex moves between vertices algebraically.

- **Slack Variable:** added to ≤ constraint to form equality
- **Pivot Element:** intersection of entering column and leaving row
- **Big-M Method:** handles artificial variables with large penalty

### Duality & Sensitivity

Every LP has a dual.

- **Dual Problem:** LP derived from primal with roles reversed
- **Shadow Price:** change in objective per unit change in resource
- **Sensitivity Analysis:** effect of parameter changes on optimum

## Unit 2: Transportation & Assignment

### Transportation Problem

Goods are shipped at minimum cost.

- **Transportation Problem:** minimise cost from sources to destinations
- **North-West Corner Method:** initial solution starting top-left
- **Vogel's Approximation Method:** initial solution using penalties

### Optimality Test

Initial solutions are improved.

- **MODI Method:** uses ui and vj to test optimality
- **Degeneracy:** fewer than m + n − 1 allocations
- **Unbalanced Problem:** supply not equal to demand; add dummy

### Assignment Problem

Assign jobs to workers at minimum cost.

- **Assignment Problem:** one-to-one allocation minimising cost
- **Hungarian Method:** row and column reduction to find optimum
- **Prohibited Assignment:** given very high cost

### Travelling Salesman Problem

Visit each city once at minimum cost.

- **TSP:** shortest route visiting each city exactly once
- **Branch and Bound:** solves TSP by pruning
- **Sequencing:** order of jobs on machines, e.g. Johnson's rule

## Unit 3: Queuing & Game Theory

### Queuing Fundamentals

Queuing models study waiting lines.

- **Arrival Rate:** λ customers per unit time
- **Service Rate:** μ customers per unit time
- **Kendall Notation:** A/B/c/K/N/D describes a queue

### M/M/1 Model

Single-server Poisson queue.

- **Utilisation:** ρ = λ/μ
- **Average Number in System:** Ls = λ/(μ − λ)
- **Average Waiting Time in Queue:** Wq = λ/(μ(μ − λ))

### Game Theory

Game theory analyses competitive decisions.

- **Two-person Zero-sum Game:** one's gain is the other's loss
- **Saddle Point:** maximin equals minimax
- **Mixed Strategy:** players randomise among strategies

### Decision Theory

Decisions under uncertainty use criteria.

- **Maximin Criterion:** choose best of worst outcomes
- **Hurwicz Criterion:** weighted optimism-pessimism
- **Expected Monetary Value:** probability-weighted payoff

## Unit 4: Inventory & Project Management

### Inventory Models

Inventory balances ordering and holding costs.

- **EOQ:** √(2DS/H)
- **Reorder Point:** demand during lead time
- **Safety Stock:** buffer against demand variation

### Inventory Control Systems

Classification focuses attention.

- **ABC Analysis:** classify items by annual value
- **VED Analysis:** vital, essential and desirable items
- **JIT:** just-in-time minimal inventory

### CPM

Critical path method schedules deterministic projects.

- **CPM:** finds critical path from activity durations
- **Float:** slack time an activity can be delayed
- **Critical Activity:** zero total float

### PERT & Crashing

PERT handles uncertain durations.

- **PERT Expected Time:** te = (to + 4tm + tp)/6
- **Variance of Activity:** ((tp − to)/6)²
- **Crashing:** reducing duration at extra cost

## Unit 5: Supply Chain Management

### Supply Chain Concepts

Supply chains move material from suppliers to customers.

- **Supply Chain:** network of suppliers, manufacturers, distributors and retailers
- **Supply Chain Management:** coordinating flows of material, information and money
- **Value Chain:** activities adding value to a product

### Bullwhip Effect

Demand variability amplifies upstream.

- **Bullwhip Effect:** demand fluctuations amplify up the supply chain
- **Information Sharing:** reduces bullwhip effect
- **Vendor Managed Inventory:** supplier manages customer stock

### Logistics & Distribution

Logistics moves goods efficiently.

- **Logistics:** planning transport and storage
- **Cross-docking:** direct transfer from inbound to outbound
- **Third-party Logistics:** outsourced logistics services

### Sourcing & Performance

Suppliers and metrics drive SCM.

- **Strategic Sourcing:** selecting suppliers for long-term value
- **Lead Time:** time from order to delivery
- **Supply Chain Metrics:** fill rate, inventory turns and cost

## Standard Textbooks

- *Operations Research: An Introduction* — Hamdy A. Taha
- *Operations Research* — Kanti Swarup, Gupta & Man Mohan
- *Supply Chain Management* — Chopra & Meindl

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
