# MTH-201 Design of Thermal Systems — Unit-wise Study Notes

> Modelling, simulation and optimisation of thermal systems, economics, and design of heat exchangers, piping and energy systems.

## Unit 1: Design Fundamentals

### Engineering Design Process

Systematic approach to thermal design.

- **Thermal System:** interacting components transferring energy
- **Workable Design:** satisfies requirements
- **Optimal Design:** best design by chosen criterion

### Problem Formulation

Defining design variables.

- **Design Variables:** quantities the designer chooses
- **Constraints:** limits on variables
- **Objective Function:** quantity to minimise or maximise

### Modelling of Thermal Systems

Models predict behaviour.

- **Mathematical Model:** equations describing system
- **Lumped Model:** spatial variation neglected
- **Curve Fitting:** correlations from data

### Component Models

Each component is modelled.

- **Heat Exchanger Model:** effectiveness-NTU relation
- **Pump Model:** head-flow characteristic
- **Compressor Model:** performance map

## Unit 2: System Simulation

### Steady-state Simulation

Solving coupled component equations.

- **System Simulation:** predicting behaviour of interconnected components
- **Successive Substitution:** iterative solution method
- **Newton-Raphson Method:** solves nonlinear system equations

### Dynamic Simulation

Transient behaviour.

- **Dynamic Model:** differential equations in time
- **Thermal Capacitance:** energy storage term
- **Time Constant:** response speed of system

### Information Flow Diagrams

Organising simulation.

- **Information Flow Diagram:** shows variables passed between components
- **Sequential Modular Approach:** solve units in sequence
- **Equation-oriented Approach:** solve all equations together

### Simulation Tools

Software aids design.

- **EES:** engineering equation solver
- **Aspen Plus:** process simulator
- **TRNSYS:** transient system simulation tool

## Unit 3: Economics

### Time Value of Money

Money now differs from later.

- **Present Worth:** future amount discounted to today
- **Interest Rate:** cost of capital
- **Annuity:** series of equal payments

### Economic Evaluation

Comparing alternatives.

- **Life Cycle Cost:** total cost over lifetime
- **Payback Period:** time to recover investment
- **Internal Rate of Return:** discount rate giving zero NPV

### Cost Estimation

Estimating capital and operating costs.

- **Capital Cost:** equipment and installation
- **Operating Cost:** energy, labour, maintenance
- **Six-tenths Rule:** cost scales with capacity^0.6

### Thermoeconomics

Combining exergy and economics.

- **Exergy Cost:** cost per unit exergy
- **Specific Exergy Costing:** SPECO method
- **Cost of Exergy Destruction:** economic value of losses

## Unit 4: Optimisation

### Optimisation Basics

Finding the best design.

- **Calculus Method:** set derivatives to zero
- **Lagrange Multipliers:** constrained optimisation
- **Search Methods:** numerical search for optimum

### Search Methods

Numerical optimisation.

- **Golden Section Search:** one-dimensional search
- **Steepest Descent:** gradient-based multivariable search
- **Simplex Search:** derivative-free method

### Linear & Dynamic Programming

Structured optimisation.

- **Linear Programming:** linear objective and constraints
- **Dynamic Programming:** multistage decisions
- **Geometric Programming:** posynomial objective functions

### Evolutionary Optimisation

Global search methods.

- **Genetic Algorithm:** population-based evolutionary search
- **Particle Swarm Optimisation:** swarm-based search
- **Multi-objective Optimisation:** Pareto optimal designs

## Unit 5: Design Applications

### Heat Exchanger Design

Selecting and sizing exchangers.

- **Rating Problem:** performance of given exchanger
- **Sizing Problem:** area for given duty
- **Pressure Drop Constraint:** limits pumping power

### Piping & Pumping Systems

Fluid distribution design.

- **System Curve:** head versus flow of piping
- **Operating Point:** intersection of pump and system curves
- **Economic Pipe Diameter:** balances pipe and pumping cost

### Energy Systems Design

Integrated energy systems.

- **Pinch Analysis:** targets minimum utility use
- **Cogeneration Design:** combined heat and power
- **Waste Heat Recovery:** using exhaust heat

### Renewable Thermal Systems

Solar and storage design.

- **Solar Collector Field:** array of collectors
- **Thermal Energy Storage:** sensible or latent storage
- **f-Chart Method:** solar fraction estimation

## Standard Textbooks

- *Design of Thermal Systems* — W. F. Stoecker
- *Design and Optimization of Thermal Systems* — Yogesh Jaluria
- *Thermal Design and Optimization* — Bejan, Tsatsaronis & Moran

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
