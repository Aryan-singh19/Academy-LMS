# CSIT-504(B) Artificial Intelligence — Unit-wise Study Notes

> Intelligent agents, search, knowledge representation, reasoning under uncertainty, learning and expert systems.

## Unit 1: Introduction & Intelligent Agents

### Foundations of AI

AI builds systems that perceive, reason and act.

- **Artificial Intelligence:** study of agents that act rationally
- **Turing Test:** test of whether a machine's behaviour is indistinguishable from a human's
- **Strong vs Weak AI:** general human-level intelligence versus task-specific intelligence

### Intelligent Agents

Agents perceive environments and act on them.

- **Agent:** entity perceiving through sensors and acting through actuators
- **Rational Agent:** selects actions maximising expected performance
- **PEAS:** performance, environment, actuators and sensors description

### Environment Types

Task environments vary in observability and determinism.

- **Fully Observable:** agent sensors give the complete state
- **Stochastic Environment:** next state not fully determined by the action
- **Episodic Environment:** each episode is independent of previous ones

### Agent Architectures

Agent programs range from reflex to learning.

- **Simple Reflex Agent:** acts on current percept using condition-action rules
- **Goal-based Agent:** chooses actions to achieve goals
- **Utility-based Agent:** maximises a utility measure of desirability

## Unit 2: Search Strategies

### Problem Formulation & Uninformed Search

Problems are searched as state spaces.

- **State Space:** all states reachable from the initial state
- **BFS:** expands shallowest node; complete and optimal for equal costs
- **Uniform Cost Search:** expands node with lowest path cost

### Heuristic Search

Heuristics guide search towards goals.

- **Heuristic Function:** estimate h(n) of cost from n to goal
- **A* Search:** expands node with smallest f(n) = g(n) + h(n)
- **Admissible Heuristic:** never overestimates the true cost

### Local Search

Local methods improve a single current state.

- **Hill Climbing:** moves to the best neighbour; may stick at local maxima
- **Simulated Annealing:** allows worse moves with decreasing probability
- **Genetic Algorithm:** evolves a population by selection, crossover and mutation

### Adversarial Search

Game search handles opponents.

- **Minimax:** chooses moves assuming the opponent plays optimally
- **Alpha-Beta Pruning:** skips branches that cannot affect the minimax decision
- **Constraint Satisfaction Problem:** variables with domains and constraints, e.g. map colouring

## Unit 3: Knowledge Representation & Reasoning

### Propositional & First-Order Logic

Logic represents facts and infers new ones.

- **First-Order Logic:** logic with objects, predicates and quantifiers
- **Unification:** finding substitutions making expressions identical
- **Resolution:** inference rule deriving a contradiction to prove a goal

### Forward & Backward Chaining

Rule-based inference proceeds from data or goals.

- **Forward Chaining:** data-driven reasoning from facts to conclusions
- **Backward Chaining:** goal-driven reasoning from the query back to facts
- **Horn Clause:** clause with at most one positive literal

### Semantic Networks & Frames

Structured representations organise knowledge.

- **Semantic Network:** graph of concepts linked by relations
- **Frame:** structure with slots and fillers for a stereotyped object
- **Ontology:** formal specification of concepts and relationships in a domain

### Planning

Planning finds action sequences to reach goals.

- **STRIPS:** planning language with preconditions and effects
- **Partial-order Planning:** commits only to necessary action orderings
- **Goal Stack Planning:** solves goals by pushing subgoals on a stack

## Unit 4: Uncertainty & Learning

### Probabilistic Reasoning

Probability handles uncertain knowledge.

- **Bayes' Theorem:** P(A given B) = P(B given A)·P(A)/P(B)
- **Conditional Independence:** two variables independent given a third
- **Prior Probability:** belief before observing evidence

### Bayesian Networks

Graphical models encode dependencies compactly.

- **Bayesian Network:** directed acyclic graph with conditional probability tables
- **Inference:** computing posterior probabilities from evidence
- **Markov Blanket:** parents, children and children's parents of a node

### Fuzzy Logic

Fuzzy logic reasons with degrees of truth.

- **Fuzzy Set:** set with membership values between 0 and 1
- **Membership Function:** maps elements to their degree of membership
- **Defuzzification:** converting a fuzzy output to a crisp value

### Machine Learning Overview

Learning improves performance from data.

- **Supervised Learning:** learning a mapping from labelled examples
- **Decision Tree:** tree of attribute tests leading to a class
- **Reinforcement Learning:** learning by rewards from interaction

## Unit 5: Expert Systems & Applications

### Expert Systems

Expert systems capture specialist knowledge.

- **Expert System:** program emulating a human expert's decisions
- **Knowledge Base:** facts and rules of the domain
- **Inference Engine:** component applying rules to the knowledge base

### Natural Language Processing Basics

NLP lets machines handle human language.

- **Tokenisation:** splitting text into words or subwords
- **Parsing:** analysing grammatical structure of a sentence
- **Sentiment Analysis:** detecting opinion polarity in text

### Neural Networks & Deep Learning

Neural nets learn layered representations.

- **Perceptron:** single-layer linear classifier
- **Backpropagation:** gradient computation through layers by the chain rule
- **Deep Learning:** neural networks with many hidden layers

### AI Ethics & Applications

AI must be safe, fair and accountable.

- **Algorithmic Bias:** systematic unfairness from data or design
- **Explainable AI:** methods making model decisions understandable
- **Robotics:** AI applied to perception and control of physical machines

## Standard Textbooks

- *Artificial Intelligence: A Modern Approach* — Russell & Norvig
- *Artificial Intelligence* — Elaine Rich & Kevin Knight
- *Introduction to Artificial Intelligence and Expert Systems* — Dan W. Patterson

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
