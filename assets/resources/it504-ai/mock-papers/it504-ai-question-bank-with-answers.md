# CSIT-504(B) Artificial Intelligence — Question Bank with Answer Hints

## Unit 1: Introduction & Intelligent Agents

### Short answer (2-3 marks)

- **Q.** Define *Artificial Intelligence*.  
  **Ans.** study of agents that act rationally
- **Q.** Define *Turing Test*.  
  **Ans.** test of whether a machine's behaviour is indistinguishable from a human's
- **Q.** Define *Strong vs Weak AI*.  
  **Ans.** general human-level intelligence versus task-specific intelligence
- **Q.** Define *Agent*.  
  **Ans.** entity perceiving through sensors and acting through actuators
- **Q.** Define *Rational Agent*.  
  **Ans.** selects actions maximising expected performance
- **Q.** Define *PEAS*.  
  **Ans.** performance, environment, actuators and sensors description
- **Q.** Define *Fully Observable*.  
  **Ans.** agent sensors give the complete state
- **Q.** Define *Stochastic Environment*.  
  **Ans.** next state not fully determined by the action
- **Q.** Define *Episodic Environment*.  
  **Ans.** each episode is independent of previous ones
- **Q.** Define *Simple Reflex Agent*.  
  **Ans.** acts on current percept using condition-action rules
- **Q.** Define *Goal-based Agent*.  
  **Ans.** chooses actions to achieve goals
- **Q.** Define *Utility-based Agent*.  
  **Ans.** maximises a utility measure of desirability

### Long answer (7 marks)

- **Q.** Explain *Foundations of AI* in detail with a neat diagram.  
  **Key points:** AI builds systems that perceive, reason and act. Artificial Intelligence — study of agents that act rationally; Turing Test — test of whether a machine's behaviour is indistinguishable from a human's; Strong vs Weak AI — general human-level intelligence versus task-specific intelligence.
- **Q.** Explain *Intelligent Agents* in detail with a neat diagram.  
  **Key points:** Agents perceive environments and act on them. Agent — entity perceiving through sensors and acting through actuators; Rational Agent — selects actions maximising expected performance; PEAS — performance, environment, actuators and sensors description.
- **Q.** Explain *Environment Types* in detail with a neat diagram.  
  **Key points:** Task environments vary in observability and determinism. Fully Observable — agent sensors give the complete state; Stochastic Environment — next state not fully determined by the action; Episodic Environment — each episode is independent of previous ones.
- **Q.** Explain *Agent Architectures* in detail with a neat diagram.  
  **Key points:** Agent programs range from reflex to learning. Simple Reflex Agent — acts on current percept using condition-action rules; Goal-based Agent — chooses actions to achieve goals; Utility-based Agent — maximises a utility measure of desirability.

## Unit 2: Search Strategies

### Short answer (2-3 marks)

- **Q.** Define *State Space*.  
  **Ans.** all states reachable from the initial state
- **Q.** Define *BFS*.  
  **Ans.** expands shallowest node; complete and optimal for equal costs
- **Q.** Define *Uniform Cost Search*.  
  **Ans.** expands node with lowest path cost
- **Q.** Define *Heuristic Function*.  
  **Ans.** estimate h(n) of cost from n to goal
- **Q.** Define *A* Search*.  
  **Ans.** expands node with smallest f(n) = g(n) + h(n)
- **Q.** Define *Admissible Heuristic*.  
  **Ans.** never overestimates the true cost
- **Q.** Define *Hill Climbing*.  
  **Ans.** moves to the best neighbour; may stick at local maxima
- **Q.** Define *Simulated Annealing*.  
  **Ans.** allows worse moves with decreasing probability
- **Q.** Define *Genetic Algorithm*.  
  **Ans.** evolves a population by selection, crossover and mutation
- **Q.** Define *Minimax*.  
  **Ans.** chooses moves assuming the opponent plays optimally
- **Q.** Define *Alpha-Beta Pruning*.  
  **Ans.** skips branches that cannot affect the minimax decision
- **Q.** Define *Constraint Satisfaction Problem*.  
  **Ans.** variables with domains and constraints, e.g. map colouring

### Long answer (7 marks)

- **Q.** Explain *Problem Formulation & Uninformed Search* in detail with a neat diagram.  
  **Key points:** Problems are searched as state spaces. State Space — all states reachable from the initial state; BFS — expands shallowest node; complete and optimal for equal costs; Uniform Cost Search — expands node with lowest path cost.
- **Q.** Explain *Heuristic Search* in detail with a neat diagram.  
  **Key points:** Heuristics guide search towards goals. Heuristic Function — estimate h(n) of cost from n to goal; A* Search — expands node with smallest f(n) = g(n) + h(n); Admissible Heuristic — never overestimates the true cost.
- **Q.** Explain *Local Search* in detail with a neat diagram.  
  **Key points:** Local methods improve a single current state. Hill Climbing — moves to the best neighbour; may stick at local maxima; Simulated Annealing — allows worse moves with decreasing probability; Genetic Algorithm — evolves a population by selection, crossover and mutation.
- **Q.** Explain *Adversarial Search* in detail with a neat diagram.  
  **Key points:** Game search handles opponents. Minimax — chooses moves assuming the opponent plays optimally; Alpha-Beta Pruning — skips branches that cannot affect the minimax decision; Constraint Satisfaction Problem — variables with domains and constraints, e.g. map colouring.

## Unit 3: Knowledge Representation & Reasoning

### Short answer (2-3 marks)

- **Q.** Define *First-Order Logic*.  
  **Ans.** logic with objects, predicates and quantifiers
- **Q.** Define *Unification*.  
  **Ans.** finding substitutions making expressions identical
- **Q.** Define *Resolution*.  
  **Ans.** inference rule deriving a contradiction to prove a goal
- **Q.** Define *Forward Chaining*.  
  **Ans.** data-driven reasoning from facts to conclusions
- **Q.** Define *Backward Chaining*.  
  **Ans.** goal-driven reasoning from the query back to facts
- **Q.** Define *Horn Clause*.  
  **Ans.** clause with at most one positive literal
- **Q.** Define *Semantic Network*.  
  **Ans.** graph of concepts linked by relations
- **Q.** Define *Frame*.  
  **Ans.** structure with slots and fillers for a stereotyped object
- **Q.** Define *Ontology*.  
  **Ans.** formal specification of concepts and relationships in a domain
- **Q.** Define *STRIPS*.  
  **Ans.** planning language with preconditions and effects
- **Q.** Define *Partial-order Planning*.  
  **Ans.** commits only to necessary action orderings
- **Q.** Define *Goal Stack Planning*.  
  **Ans.** solves goals by pushing subgoals on a stack

### Long answer (7 marks)

- **Q.** Explain *Propositional & First-Order Logic* in detail with a neat diagram.  
  **Key points:** Logic represents facts and infers new ones. First-Order Logic — logic with objects, predicates and quantifiers; Unification — finding substitutions making expressions identical; Resolution — inference rule deriving a contradiction to prove a goal.
- **Q.** Explain *Forward & Backward Chaining* in detail with a neat diagram.  
  **Key points:** Rule-based inference proceeds from data or goals. Forward Chaining — data-driven reasoning from facts to conclusions; Backward Chaining — goal-driven reasoning from the query back to facts; Horn Clause — clause with at most one positive literal.
- **Q.** Explain *Semantic Networks & Frames* in detail with a neat diagram.  
  **Key points:** Structured representations organise knowledge. Semantic Network — graph of concepts linked by relations; Frame — structure with slots and fillers for a stereotyped object; Ontology — formal specification of concepts and relationships in a domain.
- **Q.** Explain *Planning* in detail with a neat diagram.  
  **Key points:** Planning finds action sequences to reach goals. STRIPS — planning language with preconditions and effects; Partial-order Planning — commits only to necessary action orderings; Goal Stack Planning — solves goals by pushing subgoals on a stack.

## Unit 4: Uncertainty & Learning

### Short answer (2-3 marks)

- **Q.** Define *Bayes' Theorem*.  
  **Ans.** P(A given B) = P(B given A)·P(A)/P(B)
- **Q.** Define *Conditional Independence*.  
  **Ans.** two variables independent given a third
- **Q.** Define *Prior Probability*.  
  **Ans.** belief before observing evidence
- **Q.** Define *Bayesian Network*.  
  **Ans.** directed acyclic graph with conditional probability tables
- **Q.** Define *Inference*.  
  **Ans.** computing posterior probabilities from evidence
- **Q.** Define *Markov Blanket*.  
  **Ans.** parents, children and children's parents of a node
- **Q.** Define *Fuzzy Set*.  
  **Ans.** set with membership values between 0 and 1
- **Q.** Define *Membership Function*.  
  **Ans.** maps elements to their degree of membership
- **Q.** Define *Defuzzification*.  
  **Ans.** converting a fuzzy output to a crisp value
- **Q.** Define *Supervised Learning*.  
  **Ans.** learning a mapping from labelled examples
- **Q.** Define *Decision Tree*.  
  **Ans.** tree of attribute tests leading to a class
- **Q.** Define *Reinforcement Learning*.  
  **Ans.** learning by rewards from interaction

### Long answer (7 marks)

- **Q.** Explain *Probabilistic Reasoning* in detail with a neat diagram.  
  **Key points:** Probability handles uncertain knowledge. Bayes' Theorem — P(A given B) = P(B given A)·P(A)/P(B); Conditional Independence — two variables independent given a third; Prior Probability — belief before observing evidence.
- **Q.** Explain *Bayesian Networks* in detail with a neat diagram.  
  **Key points:** Graphical models encode dependencies compactly. Bayesian Network — directed acyclic graph with conditional probability tables; Inference — computing posterior probabilities from evidence; Markov Blanket — parents, children and children's parents of a node.
- **Q.** Explain *Fuzzy Logic* in detail with a neat diagram.  
  **Key points:** Fuzzy logic reasons with degrees of truth. Fuzzy Set — set with membership values between 0 and 1; Membership Function — maps elements to their degree of membership; Defuzzification — converting a fuzzy output to a crisp value.
- **Q.** Explain *Machine Learning Overview* in detail with a neat diagram.  
  **Key points:** Learning improves performance from data. Supervised Learning — learning a mapping from labelled examples; Decision Tree — tree of attribute tests leading to a class; Reinforcement Learning — learning by rewards from interaction.

## Unit 5: Expert Systems & Applications

### Short answer (2-3 marks)

- **Q.** Define *Expert System*.  
  **Ans.** program emulating a human expert's decisions
- **Q.** Define *Knowledge Base*.  
  **Ans.** facts and rules of the domain
- **Q.** Define *Inference Engine*.  
  **Ans.** component applying rules to the knowledge base
- **Q.** Define *Tokenisation*.  
  **Ans.** splitting text into words or subwords
- **Q.** Define *Parsing*.  
  **Ans.** analysing grammatical structure of a sentence
- **Q.** Define *Sentiment Analysis*.  
  **Ans.** detecting opinion polarity in text
- **Q.** Define *Perceptron*.  
  **Ans.** single-layer linear classifier
- **Q.** Define *Backpropagation*.  
  **Ans.** gradient computation through layers by the chain rule
- **Q.** Define *Deep Learning*.  
  **Ans.** neural networks with many hidden layers
- **Q.** Define *Algorithmic Bias*.  
  **Ans.** systematic unfairness from data or design
- **Q.** Define *Explainable AI*.  
  **Ans.** methods making model decisions understandable
- **Q.** Define *Robotics*.  
  **Ans.** AI applied to perception and control of physical machines

### Long answer (7 marks)

- **Q.** Explain *Expert Systems* in detail with a neat diagram.  
  **Key points:** Expert systems capture specialist knowledge. Expert System — program emulating a human expert's decisions; Knowledge Base — facts and rules of the domain; Inference Engine — component applying rules to the knowledge base.
- **Q.** Explain *Natural Language Processing Basics* in detail with a neat diagram.  
  **Key points:** NLP lets machines handle human language. Tokenisation — splitting text into words or subwords; Parsing — analysing grammatical structure of a sentence; Sentiment Analysis — detecting opinion polarity in text.
- **Q.** Explain *Neural Networks & Deep Learning* in detail with a neat diagram.  
  **Key points:** Neural nets learn layered representations. Perceptron — single-layer linear classifier; Backpropagation — gradient computation through layers by the chain rule; Deep Learning — neural networks with many hidden layers.
- **Q.** Explain *AI Ethics & Applications* in detail with a neat diagram.  
  **Key points:** AI must be safe, fair and accountable. Algorithmic Bias — systematic unfairness from data or design; Explainable AI — methods making model decisions understandable; Robotics — AI applied to perception and control of physical machines.

