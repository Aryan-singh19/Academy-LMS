# CS-701: Software Architecture & Design Master Notes
**Course Code:** CS-701 | **Semester:** 7th Semester B.Tech CSE  
**University Examination Core Reference**

---

## Unit 1: Introduction to Software Architecture & Styles
### 1. What is Software Architecture?
Software architecture represents the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both.
- **Architecture vs Design:** Architecture is the high-level macro-organization (components, connectors, subsystems, constraints, global trade-offs). Design includes the micro-organization (class hierarchies, algorithm selections, data structures, implementation patterns).
- **Kruchten's 4+1 View Model:**
  1. **Logical View:** Captures functional requirements, class diagrams, state machines (End-users, developers).
  2. **Process View:** Addresses non-functional runtime requirements: concurrency, threading, latency, synchronization (System integrators).
  3. **Development / Implementation View:** Module organizations, package hierarchies, build systems (Programmers).
  4. **Physical / Deployment View:** Hardware topology, server nodes, networks, cloud VMs (System engineers, DevOps).
  5. **Scenarios (+1 View):** Use cases that validate and bind the other four views together.

### 2. Architectural Styles Matrix
| Style | Components | Connectors | Primary Strengths | Primary Weaknesses |
|---|---|---|---|---|
| **Data-Centered (Blackboard)** | Central shared store + independent knowledge sources | Direct memory read/write | Dynamic problem solving, AI inference | Data store is single point of failure |
| **Data-Flow (Pipe & Filter)** | Filter processing nodes | Unidirectional FIFO pipes | High reusability, concurrent pipelines | High latency overhead for interactive UI |
| **Call-and-Return (Layered / MVC)** | Subsystems organized in layers | Function calls / RPC | Modifiability, separation of concerns | Performance overhead through layered hops |
| **Event-Driven (Pub/Sub)** | Event publishers & event consumers | Event bus / message broker | Loose coupling, horizontal scale | Non-deterministic ordering, complex debugging |

---

## Unit 2: Quality Attributes & Tactical Design
### 1. Quality Attribute Scenarios (SEI Model)
Each scenario specifies 6 essential parts:
1. **Source of Stimulus:** The entity generating the request (user, external API, attacker).
2. **Stimulus:** The condition arriving at the system (burst of 10,000 req/sec, hardware fault).
3. **Artifact:** The component impacted (database cluster, API gateway).
4. **Environment:** State of system (normal operation, degraded mode, peak holiday traffic).
5. **Response:** Observable activity (queue requests, failover to replica, log alert).
6. **Response Measure:** Quantifiable metric (latency < 200ms for 99% requests; MTTR < 30 seconds).

### 2. Architectural Tactics Summary
- **Availability:** Heartbeat pinging, dual-modular redundancy, failover clustering, transaction rollback.
- **Modifiability:** Encapsulate change, introduce intermediaries (Broker/Adapter), defer binding time (plug-ins, config files).
- **Performance:** Increase concurrency (worker pools), cache hot data, reduce computational overhead, bound queue sizes.
- **Security:** Authenticate users, authorize privileges (RBAC), encrypt in-transit and at-rest, non-repudiation audit trails.

---

## Unit 3: Design, ADLs & Architectural Evaluation
### 1. Architecture Tradeoff Analysis Method (ATAM)
ATAM is a structured evaluation method developed by the Software Engineering Institute (SEI):
1. **Phase 1: Presentation** (Present ATAM, business drivers, and proposed architecture).
2. **Phase 2: Investigation & Analysis** (Catalog architectural approaches, generate **Utility Tree**, analyze quality attribute scenarios).
3. **Phase 3: Testing** (Brainstorm and prioritize external scenarios, test edge scenarios against architecture).
4. **Phase 4: Reporting** (Summarize risks, non-risks, sensitivity points, and tradeoff points).
   - **Sensitivity Point:** A property of one or more components critical for achieving a particular quality response (e.g., encryption algorithm strength affects security).
   - **Tradeoff Point:** A property that affects more than one quality attribute with conflicting outcomes (e.g., cryptographic hashing increases security but degrades latency/performance).

---

## Unit 4: Distributed & Cloud-Native Architectures
### 1. Monolith vs SOA vs Microservices
- **Monolith:** Single deployable artifact, in-memory function calls, unified database. Simple at start, unmanageable at scale.
- **SOA (Service-Oriented Architecture):** Enterprise-wide services integrated via Enterprise Service Bus (ESB), heavy XML/SOAP protocols.
- **Microservices:** Independently deployable small services built around business capabilities, lightweight communication (REST/gRPC/Kafka), database-per-service pattern.

### 2. Microservice Resiliency Patterns
- **API Gateway:** Reverse proxy providing routing, authentication, SSL termination, and rate-limiting.
- **Circuit Breaker Pattern (Netflix Hystrix / Resilience4j):**
  - *Closed:* Requests pass through normally.
  - *Open:* Failure threshold breached; requests fail fast immediately without hitting downstream service.
  - *Half-Open:* Trial requests sent to determine if downstream service has recovered.
- **CQRS (Command Query Responsibility Segregation):** Segregates write models (Commands) from read models (Queries) for independent scaling.
