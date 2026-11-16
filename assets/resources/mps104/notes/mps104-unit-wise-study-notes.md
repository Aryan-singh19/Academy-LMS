# MPS-104 Optimisation Techniques in Power Systems — Unit-wise Study Notes

> Linear, non-linear, dynamic and evolutionary optimisation applied to economic dispatch, OPF and unit commitment.

## Unit 1: Optimisation Fundamentals

### Problem Formulation

Defining optimisation problems.

- **Objective Function:** quantity to minimise or maximise
- **Decision Variables:** controllable quantities
- **Constraints:** equality and inequality limits

### Classification

Types of optimisation problems.

- **Linear Programming:** linear objective and constraints
- **Non-linear Programming:** non-linear functions
- **Mixed-integer Programming:** discrete and continuous variables

### Convexity

Convex problems are tractable.

- **Convex Problem:** convex objective over convex set
- **Local vs Global Optimum:** coincide for convex problems
- **Hessian:** positive semidefinite for convex functions

### Optimality Conditions

Conditions for optimum.

- **Lagrange Multipliers:** for equality constraints
- **KKT Conditions:** for inequality constraints
- **Shadow Price:** sensitivity of objective to constraint

## Unit 2: Classical Methods

### Linear Programming Methods

Solving LPs.

- **Simplex Method:** moves between vertices
- **Interior Point Method:** traverses interior of feasible region
- **Duality:** primal and dual problems

### Non-linear Programming Methods

Gradient-based methods.

- **Gradient Method:** moves along negative gradient
- **Newton's Method:** uses second derivatives
- **Penalty Function Method:** converts constraints into penalties

### Dynamic Programming

Multistage decisions.

- **Bellman's Principle of Optimality:** optimal policy has optimal sub-policies
- **Stage and State:** DP structure
- **Curse of Dimensionality:** state space growth

### Integer Programming

Discrete decisions.

- **Branch and Bound:** solves integer programs
- **Cutting Planes:** tighten LP relaxation
- **MILP Solvers:** Gurobi, CPLEX

## Unit 3: Evolutionary & Metaheuristic Methods

### Genetic Algorithm

Evolution-inspired search.

- **Genetic Algorithm:** selection, crossover and mutation
- **Fitness Function:** evaluates solutions
- **Chromosome Encoding:** representation of solution

### Particle Swarm Optimisation

Swarm intelligence.

- **PSO:** particles move toward personal and global bests
- **Inertia Weight:** balances exploration and exploitation
- **Velocity Update:** drives particle movement

### Other Metaheuristics

Nature-inspired methods.

- **Simulated Annealing:** probabilistic acceptance of worse solutions
- **Differential Evolution:** vector differences for mutation
- **Ant Colony Optimisation:** pheromone-based search

### Multi-objective Optimisation

Trade-offs between goals.

- **Pareto Front:** set of non-dominated solutions
- **NSGA-II:** multi-objective genetic algorithm
- **Weighted Sum Method:** combines objectives

## Unit 4: Economic Dispatch & OPF

### Economic Load Dispatch

Minimum fuel cost dispatch.

- **Equal Incremental Cost:** optimality criterion
- **Lambda Iteration:** solves dispatch
- **Valve-point Effect:** non-convex cost curve

### Optimal Power Flow

Dispatch with network constraints.

- **OPF:** minimises cost subject to power flow equations
- **AC-OPF:** full non-linear model
- **DC-OPF:** linearised approximation

### Environmental Dispatch

Considering emissions.

- **Emission Dispatch:** minimise emissions
- **Combined Economic Emission Dispatch:** multi-objective
- **Price Penalty Factor:** converts emissions to cost

### Reactive Power Optimisation

Minimising losses.

- **Reactive Power Dispatch:** optimises voltages and taps
- **Loss Minimisation:** objective in ORPD
- **Voltage Profile Improvement:** secondary objective

## Unit 5: Unit Commitment & Planning

### Unit Commitment

Scheduling generators.

- **Unit Commitment:** on/off decisions over horizon
- **Minimum Up/Down Time:** unit constraints
- **Start-up Cost:** cost to turn on a unit

### UC Solution Methods

Algorithms for UC.

- **Priority List:** simple heuristic
- **Lagrangian Relaxation:** decomposes problem
- **MILP Formulation:** modern standard approach

### Hydro-thermal Scheduling

Coordinating water and fuel.

- **Hydrothermal Coordination:** uses hydro to minimise thermal cost
- **Water Value:** marginal value of stored water
- **Reservoir Constraints:** storage limits

### Expansion Planning

Long-term investment decisions.

- **Generation Expansion Planning:** new capacity decisions
- **Transmission Expansion Planning:** new lines
- **Stochastic Programming:** handles uncertainty

## Standard Textbooks

- *Engineering Optimization: Theory and Practice* — S. S. Rao
- *Optimization of Power System Operation* — Jizhong Zhu
- *Power Generation, Operation and Control* — Wood & Wollenberg

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
