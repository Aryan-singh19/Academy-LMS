# CS-403 Software Engineering — Unit-wise Study Notes

> Process models, requirements, design, testing, project estimation, quality and maintenance.

## Unit 1: Software Process Models

### Software Engineering Fundamentals

Software engineering applies disciplined methods to build reliable software.

- **Software Crisis:** projects running late, over budget and unreliable
- **Software Process:** framework of activities for building software
- **Software Characteristics:** software is developed, not manufactured, and does not wear out

### Waterfall & V-Model

Linear models complete each phase before the next.

- **Waterfall Model:** sequential phases from requirements to maintenance
- **V-Model:** each development phase paired with a testing phase
- **Phase Containment:** catching errors in the phase that created them

### Prototyping, Spiral & Incremental Models

Iterative models reduce risk and gather feedback.

- **Prototyping Model:** build a quick prototype to clarify requirements
- **Spiral Model:** risk-driven iterations through four quadrants
- **Incremental Model:** deliver the product in usable increments

### Agile Methodology

Agile values working software and responding to change.

- **Agile Manifesto:** individuals, working software, collaboration and responding to change
- **Scrum Sprint:** fixed time-box, usually 2-4 weeks, producing a shippable increment
- **Extreme Programming:** practices such as pair programming and test-driven development

## Unit 2: Requirements Engineering

### Requirement Elicitation

Requirements are gathered from stakeholders.

- **Functional Requirement:** what the system must do
- **Non-functional Requirement:** quality constraints such as performance and security
- **Elicitation Techniques:** interviews, questionnaires, brainstorming and observation

### SRS Document

The SRS records agreed requirements precisely.

- **SRS:** software requirements specification document
- **Characteristics of SRS:** correct, unambiguous, complete, consistent and verifiable
- **IEEE 830:** standard template for SRS documents

### Analysis Modelling

Models describe data and behaviour of the system.

- **Data Flow Diagram:** shows processes, data stores and flows between them
- **Data Dictionary:** definitions of all data elements used in models
- **ER Diagram:** models entities, attributes and relationships

### Feasibility Study & Validation

Teams check whether the project is worth doing and requirements are right.

- **Feasibility Study:** technical, economic and operational viability check
- **Requirements Validation:** reviews and prototyping to confirm requirements
- **Requirements Traceability:** linking requirements to design, code and tests

## Unit 3: Software Design

### Design Concepts

Good design manages complexity through abstraction.

- **Abstraction:** hiding details to focus on essentials
- **Modularity:** dividing software into separately named modules
- **Information Hiding:** modules conceal internal details from others

### Coupling & Cohesion

Quality of modular design is measured by dependency and focus.

- **Cohesion:** how closely the functions within one module belong together
- **Coupling:** degree of interdependence between modules
- **Ideal Design:** high functional cohesion with low data coupling

### Architectural & Structured Design

Architecture fixes the overall structure of components.

- **Structure Chart:** hierarchy of modules and their calls
- **Transform Analysis:** maps a DFD with input, process and output flows to a structure chart
- **Architectural Style:** pattern such as layered, client-server or pipe-and-filter

### User Interface Design

UI design focuses on usability.

- **Golden Rules:** place user in control, reduce memory load, keep interface consistent
- **Usability:** ease with which users achieve goals
- **Heuristic Evaluation:** expert review against usability principles

## Unit 4: Software Testing

### Testing Fundamentals

Testing finds defects before users do.

- **Verification:** are we building the product right
- **Validation:** are we building the right product
- **Test Case:** inputs, steps and expected result for checking a feature

### White-box Testing

Tests derived from internal code structure.

- **Cyclomatic Complexity:** V(G) = E − N + 2; number of independent paths
- **Basis Path Testing:** tests covering each independent path
- **Statement Coverage:** every statement executed at least once

### Black-box Testing

Tests derived from specifications without seeing code.

- **Equivalence Partitioning:** divide inputs into classes expected to behave alike
- **Boundary Value Analysis:** test at and around the edges of input ranges
- **Cause-Effect Graphing:** derive tests from logical relationships of inputs and outputs

### Levels of Testing

Testing proceeds from units to the whole system.

- **Unit Testing:** testing individual modules in isolation
- **Integration Testing:** testing interfaces between combined modules
- **Regression Testing:** re-running tests after changes to catch new defects

## Unit 5: Project Management, Quality & Maintenance

### Software Metrics & Estimation

Size and effort are estimated to plan projects.

- **LOC:** lines of code size metric
- **Function Point:** size measure from inputs, outputs, inquiries, files and interfaces
- **Basic COCOMO:** Effort = a × (KLOC)^b person-months

### Scheduling & Risk Management

Plans track tasks and anticipate problems.

- **Gantt Chart:** bar chart showing task durations over time
- **Critical Path:** longest path in the activity network deciding project duration
- **RMMM:** risk mitigation, monitoring and management plan

### Software Quality Assurance

SQA ensures processes and products meet standards.

- **SQA:** planned activities ensuring software quality
- **ISO 9001:** quality management standard applied to software
- **CMM:** capability maturity model with five process maturity levels

### Maintenance & Re-engineering

Most lifetime cost is spent after delivery.

- **Corrective Maintenance:** fixing defects found after delivery
- **Adaptive Maintenance:** changing software for a new environment
- **Reverse Engineering:** recovering design from existing code

## Standard Textbooks

- *Software Engineering: A Practitioner's Approach* — Roger S. Pressman
- *Software Engineering* — Ian Sommerville
- *An Integrated Approach to Software Engineering* — Pankaj Jalote

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
