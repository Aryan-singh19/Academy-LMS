# CS-701: University Solved Exam Question Bank
**Course Code:** CS-701 Software Architectures | **University Standard Model Solutions**

---

### Question 1: Describe the 4+1 View Model of Software Architecture with a Diagram. Explain why the +1 view is critical.
**Solution:**
Philippe Kruchten introduced the 4+1 View Model to separate architectural concerns for different stakeholders:
```
         +------------------------+
         |     Logical View       | (End User: Functional classes & objects)
         +-----------+------------+
                     |
+--------------------+--------------------+
|  Development View  |    Process View    | (Programmers: Packages & build)
+--------------------+--------------------+ (Integrators: Concurrency & threads)
                     |
         +-----------+------------+
         |     Physical View      | (DevOps/Hardware: Nodes & deployment)
         +-----------+------------+
                     ^
                     |
         +-----------+------------+
         |     Scenarios (+1)     | (Use Cases: Unifies & validates all 4)
         +------------------------+
```
**Why the "+1" (Scenarios) View is Critical:**
Without scenarios, the four views are disjoint diagrams. The scenarios view selects critical user stories and sequences through the four views step-by-step:
1. Identifying which class participates in the Logical View.
2. What thread/process executes it in the Process View.
3. What source package contains it in the Development View.
4. On what physical server node it runs in the Physical View.
This makes the architecture testable and complete.

---

### Question 2: What is ATAM (Architecture Tradeoff Analysis Method)? Explain the concepts of Sensitivity Points and Tradeoff Points with examples.
**Solution:**
ATAM is an evaluation technique by Carnegie Mellon's SEI to assess whether an architectural design satisfies its quality goals:
- **Sensitivity Point:** An architectural parameter that directly influences a specific quality attribute.
  - *Example:* The cache expiration TTL is a sensitivity point for **data freshness** (low TTL) and **database query latency** (high TTL).
- **Tradeoff Point:** An architectural parameter that affects two or more quality attributes in opposing directions.
  - *Example:* Enforcing mutual TLS (mTLS) with AES-256 between internal microservices significantly increases **Security** (positive), but introduces a 15% increase in CPU consumption and network latency, reducing **Performance** (negative).

---

### Question 3: Compare Monolithic Architecture vs Microservices Architecture on 5 distinct dimensions.
**Solution:**
| Dimension | Monolithic Architecture | Microservices Architecture |
|---|---|---|
| **Deployment** | Single unified binary / WAR / container | Independently deployable micro-containers |
| **Data Persistence** | Shared single relational database | Database-per-service (polyglot persistence) |
| **Fault Isolation** | Memory leaks or crashes take down entire system | Failures isolated via circuit breakers |
| **Scaling** | Vertical scaling or duplicate entire monolith | Horizontal granular scaling of hot services |
| **Organizational Alignment** | Layered teams (DBA team, backend, frontend) | Cross-functional autonomous two-pizza teams |
