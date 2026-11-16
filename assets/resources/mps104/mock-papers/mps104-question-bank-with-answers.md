# MPS-104 Optimisation Techniques in Power Systems — Question Bank with Answer Hints

## Unit 1: Optimisation Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Objective Function*.  
  **Ans.** quantity to minimise or maximise
- **Q.** Define *Decision Variables*.  
  **Ans.** controllable quantities
- **Q.** Define *Constraints*.  
  **Ans.** equality and inequality limits
- **Q.** Define *Linear Programming*.  
  **Ans.** linear objective and constraints
- **Q.** Define *Non-linear Programming*.  
  **Ans.** non-linear functions
- **Q.** Define *Mixed-integer Programming*.  
  **Ans.** discrete and continuous variables
- **Q.** Define *Convex Problem*.  
  **Ans.** convex objective over convex set
- **Q.** Define *Local vs Global Optimum*.  
  **Ans.** coincide for convex problems
- **Q.** Define *Hessian*.  
  **Ans.** positive semidefinite for convex functions
- **Q.** Define *Lagrange Multipliers*.  
  **Ans.** for equality constraints
- **Q.** Define *KKT Conditions*.  
  **Ans.** for inequality constraints
- **Q.** Define *Shadow Price*.  
  **Ans.** sensitivity of objective to constraint

### Long answer (7 marks)

- **Q.** Explain *Problem Formulation* in detail with a neat diagram.  
  **Key points:** Defining optimisation problems. Objective Function — quantity to minimise or maximise; Decision Variables — controllable quantities; Constraints — equality and inequality limits.
- **Q.** Explain *Classification* in detail with a neat diagram.  
  **Key points:** Types of optimisation problems. Linear Programming — linear objective and constraints; Non-linear Programming — non-linear functions; Mixed-integer Programming — discrete and continuous variables.
- **Q.** Explain *Convexity* in detail with a neat diagram.  
  **Key points:** Convex problems are tractable. Convex Problem — convex objective over convex set; Local vs Global Optimum — coincide for convex problems; Hessian — positive semidefinite for convex functions.
- **Q.** Explain *Optimality Conditions* in detail with a neat diagram.  
  **Key points:** Conditions for optimum. Lagrange Multipliers — for equality constraints; KKT Conditions — for inequality constraints; Shadow Price — sensitivity of objective to constraint.

## Unit 2: Classical Methods

### Short answer (2-3 marks)

- **Q.** Define *Simplex Method*.  
  **Ans.** moves between vertices
- **Q.** Define *Interior Point Method*.  
  **Ans.** traverses interior of feasible region
- **Q.** Define *Duality*.  
  **Ans.** primal and dual problems
- **Q.** Define *Gradient Method*.  
  **Ans.** moves along negative gradient
- **Q.** Define *Newton's Method*.  
  **Ans.** uses second derivatives
- **Q.** Define *Penalty Function Method*.  
  **Ans.** converts constraints into penalties
- **Q.** Define *Bellman's Principle of Optimality*.  
  **Ans.** optimal policy has optimal sub-policies
- **Q.** Define *Stage and State*.  
  **Ans.** DP structure
- **Q.** Define *Curse of Dimensionality*.  
  **Ans.** state space growth
- **Q.** Define *Branch and Bound*.  
  **Ans.** solves integer programs
- **Q.** Define *Cutting Planes*.  
  **Ans.** tighten LP relaxation
- **Q.** Define *MILP Solvers*.  
  **Ans.** Gurobi, CPLEX

### Long answer (7 marks)

- **Q.** Explain *Linear Programming Methods* in detail with a neat diagram.  
  **Key points:** Solving LPs. Simplex Method — moves between vertices; Interior Point Method — traverses interior of feasible region; Duality — primal and dual problems.
- **Q.** Explain *Non-linear Programming Methods* in detail with a neat diagram.  
  **Key points:** Gradient-based methods. Gradient Method — moves along negative gradient; Newton's Method — uses second derivatives; Penalty Function Method — converts constraints into penalties.
- **Q.** Explain *Dynamic Programming* in detail with a neat diagram.  
  **Key points:** Multistage decisions. Bellman's Principle of Optimality — optimal policy has optimal sub-policies; Stage and State — DP structure; Curse of Dimensionality — state space growth.
- **Q.** Explain *Integer Programming* in detail with a neat diagram.  
  **Key points:** Discrete decisions. Branch and Bound — solves integer programs; Cutting Planes — tighten LP relaxation; MILP Solvers — Gurobi, CPLEX.

## Unit 3: Evolutionary & Metaheuristic Methods

### Short answer (2-3 marks)

- **Q.** Define *Genetic Algorithm*.  
  **Ans.** selection, crossover and mutation
- **Q.** Define *Fitness Function*.  
  **Ans.** evaluates solutions
- **Q.** Define *Chromosome Encoding*.  
  **Ans.** representation of solution
- **Q.** Define *PSO*.  
  **Ans.** particles move toward personal and global bests
- **Q.** Define *Inertia Weight*.  
  **Ans.** balances exploration and exploitation
- **Q.** Define *Velocity Update*.  
  **Ans.** drives particle movement
- **Q.** Define *Simulated Annealing*.  
  **Ans.** probabilistic acceptance of worse solutions
- **Q.** Define *Differential Evolution*.  
  **Ans.** vector differences for mutation
- **Q.** Define *Ant Colony Optimisation*.  
  **Ans.** pheromone-based search
- **Q.** Define *Pareto Front*.  
  **Ans.** set of non-dominated solutions
- **Q.** Define *NSGA-II*.  
  **Ans.** multi-objective genetic algorithm
- **Q.** Define *Weighted Sum Method*.  
  **Ans.** combines objectives

### Long answer (7 marks)

- **Q.** Explain *Genetic Algorithm* in detail with a neat diagram.  
  **Key points:** Evolution-inspired search. Genetic Algorithm — selection, crossover and mutation; Fitness Function — evaluates solutions; Chromosome Encoding — representation of solution.
- **Q.** Explain *Particle Swarm Optimisation* in detail with a neat diagram.  
  **Key points:** Swarm intelligence. PSO — particles move toward personal and global bests; Inertia Weight — balances exploration and exploitation; Velocity Update — drives particle movement.
- **Q.** Explain *Other Metaheuristics* in detail with a neat diagram.  
  **Key points:** Nature-inspired methods. Simulated Annealing — probabilistic acceptance of worse solutions; Differential Evolution — vector differences for mutation; Ant Colony Optimisation — pheromone-based search.
- **Q.** Explain *Multi-objective Optimisation* in detail with a neat diagram.  
  **Key points:** Trade-offs between goals. Pareto Front — set of non-dominated solutions; NSGA-II — multi-objective genetic algorithm; Weighted Sum Method — combines objectives.

## Unit 4: Economic Dispatch & OPF

### Short answer (2-3 marks)

- **Q.** Define *Equal Incremental Cost*.  
  **Ans.** optimality criterion
- **Q.** Define *Lambda Iteration*.  
  **Ans.** solves dispatch
- **Q.** Define *Valve-point Effect*.  
  **Ans.** non-convex cost curve
- **Q.** Define *OPF*.  
  **Ans.** minimises cost subject to power flow equations
- **Q.** Define *AC-OPF*.  
  **Ans.** full non-linear model
- **Q.** Define *DC-OPF*.  
  **Ans.** linearised approximation
- **Q.** Define *Emission Dispatch*.  
  **Ans.** minimise emissions
- **Q.** Define *Combined Economic Emission Dispatch*.  
  **Ans.** multi-objective
- **Q.** Define *Price Penalty Factor*.  
  **Ans.** converts emissions to cost
- **Q.** Define *Reactive Power Dispatch*.  
  **Ans.** optimises voltages and taps
- **Q.** Define *Loss Minimisation*.  
  **Ans.** objective in ORPD
- **Q.** Define *Voltage Profile Improvement*.  
  **Ans.** secondary objective

### Long answer (7 marks)

- **Q.** Explain *Economic Load Dispatch* in detail with a neat diagram.  
  **Key points:** Minimum fuel cost dispatch. Equal Incremental Cost — optimality criterion; Lambda Iteration — solves dispatch; Valve-point Effect — non-convex cost curve.
- **Q.** Explain *Optimal Power Flow* in detail with a neat diagram.  
  **Key points:** Dispatch with network constraints. OPF — minimises cost subject to power flow equations; AC-OPF — full non-linear model; DC-OPF — linearised approximation.
- **Q.** Explain *Environmental Dispatch* in detail with a neat diagram.  
  **Key points:** Considering emissions. Emission Dispatch — minimise emissions; Combined Economic Emission Dispatch — multi-objective; Price Penalty Factor — converts emissions to cost.
- **Q.** Explain *Reactive Power Optimisation* in detail with a neat diagram.  
  **Key points:** Minimising losses. Reactive Power Dispatch — optimises voltages and taps; Loss Minimisation — objective in ORPD; Voltage Profile Improvement — secondary objective.

## Unit 5: Unit Commitment & Planning

### Short answer (2-3 marks)

- **Q.** Define *Unit Commitment*.  
  **Ans.** on/off decisions over horizon
- **Q.** Define *Minimum Up/Down Time*.  
  **Ans.** unit constraints
- **Q.** Define *Start-up Cost*.  
  **Ans.** cost to turn on a unit
- **Q.** Define *Priority List*.  
  **Ans.** simple heuristic
- **Q.** Define *Lagrangian Relaxation*.  
  **Ans.** decomposes problem
- **Q.** Define *MILP Formulation*.  
  **Ans.** modern standard approach
- **Q.** Define *Hydrothermal Coordination*.  
  **Ans.** uses hydro to minimise thermal cost
- **Q.** Define *Water Value*.  
  **Ans.** marginal value of stored water
- **Q.** Define *Reservoir Constraints*.  
  **Ans.** storage limits
- **Q.** Define *Generation Expansion Planning*.  
  **Ans.** new capacity decisions
- **Q.** Define *Transmission Expansion Planning*.  
  **Ans.** new lines
- **Q.** Define *Stochastic Programming*.  
  **Ans.** handles uncertainty

### Long answer (7 marks)

- **Q.** Explain *Unit Commitment* in detail with a neat diagram.  
  **Key points:** Scheduling generators. Unit Commitment — on/off decisions over horizon; Minimum Up/Down Time — unit constraints; Start-up Cost — cost to turn on a unit.
- **Q.** Explain *UC Solution Methods* in detail with a neat diagram.  
  **Key points:** Algorithms for UC. Priority List — simple heuristic; Lagrangian Relaxation — decomposes problem; MILP Formulation — modern standard approach.
- **Q.** Explain *Hydro-thermal Scheduling* in detail with a neat diagram.  
  **Key points:** Coordinating water and fuel. Hydrothermal Coordination — uses hydro to minimise thermal cost; Water Value — marginal value of stored water; Reservoir Constraints — storage limits.
- **Q.** Explain *Expansion Planning* in detail with a neat diagram.  
  **Key points:** Long-term investment decisions. Generation Expansion Planning — new capacity decisions; Transmission Expansion Planning — new lines; Stochastic Programming — handles uncertainty.

