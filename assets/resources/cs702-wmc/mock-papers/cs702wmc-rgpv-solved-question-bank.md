# CS-702 (WMC): University Solved Exam Question Bank
**Course Code:** CS-702 Wireless & Mobile Computing | **Standard University Exam Numerical Solutions**

---

### Question 1: A cellular system has a total of 395 voice channels. The cluster size is N = 7. If each cell covers an area of 5 sq km and the entire city area is 2100 sq km:
1. Find the number of channels per cell.
2. Find the total number of cells in the service area.
3. Calculate the total simultaneous call capacity of the cellular system.

**Solution:**
**Given Data:**
- Total duplex voice channels $S = 395$
- Cluster size $N = 7$
- Cell area $A_{\text{cell}} = 5 \text{ km}^2$
- Total service area $A_{\text{total}} = 2100 \text{ km}^2$

**Step 1: Channels Allocated per Cell ($k$)**
$$k = \frac{S}{N} = \frac{395}{7} \approx 56.42 \implies 56 \text{ channels/cell}$$
*(Exact allocation: 3 cells get 57 channels, 4 cells get 56 channels)*.

**Step 2: Total Number of Cells ($C$)**
$$C = \frac{A_{\text{total}}}{A_{\text{cell}}} = \frac{2100}{5} = 420 \text{ cells}$$

**Step 3: Total Number of Clusters ($M$)**
$$M = \frac{C}{N} = \frac{420}{7} = 60 \text{ clusters}$$

**Step 4: Total System Call Capacity ($C_{\text{system}}$)**
$$C_{\text{system}} = M \times S = 60 \times 395 = 23,700 \text{ simultaneous calls}$$
*(If no frequency reuse was used, the capacity would have been only 395 calls. Cellular reuse increases capacity by $60\times$!)*

---

### Question 2: Explain Mobile IP Registration Process with a sequence diagram. What is the role of Foreign Agent and Care-of-Address?
**Solution:**
```
Mobile Node (MN)       Foreign Agent (FA)       Home Agent (HA)
     |                         |                      |
     | 1. Agent Advertisement  |                      |
     |<------------------------|                      |
     |                         |                      |
     | 2. Registration Request |                      |
     |------------------------>|                      |
     |                         | 3. Forward Reg Req   |
     |                         |--------------------->|
     |                         |                      |
     |                         | 4. Registration Reply|
     |                         |<---------------------|
     | 5. Forward Reply        |                      |
     |<------------------------|                      |
```
1. **Agent Discovery:** FA periodically broadcasts ICMP Agent Advertisements. MN detects it has moved to a foreign network.
2. **Registration Request:** MN sends request with its Home Address, HA IP, and requested Care-of-Address (CoA).
3. **Relay to HA:** FA relays request to HA, creating a visitor list entry.
4. **Binding Cache Update:** HA validates authentication, creates a binding between Home Address and CoA, and sends Registration Reply.
5. **Tunnel Establishment:** Packets addressed to MN are now intercepted and tunneled by HA to FA.
