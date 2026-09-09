# CS-702 (WMC): Wireless & Mobile Computing Master Guide
**Course Code:** CS-702 (Wireless & Mobile Computing) | **B.Tech 7th Sem Revision Notes**

---

## Unit 1: Wireless Transmission & Medium Access Control
### 1. Cellular Geometry & Frequency Reuse
- **The Cellular Concept:** Replaces high-power single transmitters with low-power hexagonal cells, reusing allocated frequencies across non-interfering geographic distances.
- **Cluster Size ($N$):** Number of cells sharing the total available spectrum.
  $$N = i^2 + ij + j^2 \quad (i, j \in \mathbb{Z}_{\ge 0})$$
  Valid cluster sizes: $N \in \{1, 3, 4, 7, 9, 12, 19, \dots\}$.
- **Co-Channel Reuse Distance ($D$):**
  $$\frac{D}{R} = \sqrt{3N}$$
  Where $R$ is the cell radius. Higher $N$ increases reuse distance $D$, decreasing co-channel interference ($S/I$), but reducing overall system capacity.

### 2. MAC in Wireless: Hidden & Exposed Terminal Problems
- **Hidden Terminal Problem:** Node A and Node C both want to transmit to Node B. Node A cannot hear Node C (out of radio range). Both transmit simultaneously, resulting in a collision at Node B.
- **Exposed Terminal Problem:** Node B is transmitting to Node A. Node C wants to transmit to Node D (outside A's range). Hearing B transmit, C unnecessarily defers transmission, wasting wireless bandwidth.
- **MACA / 802.11 Solution (RTS/CTS Handshake):**
  1. Transmitter sends **RTS (Request to Send)** packet with duration field.
  2. Receiver responds with **CTS (Clear to Send)** packet.
  3. Neighboring nodes hearing CTS update their **Network Allocation Vector (NAV)** and remain quiet.

---

## Unit 2: Mobile Network Layer & Mobile IP
### 1. Mobile IP Entities & Packet Routing
- **Home Agent (HA):** Router on mobile node's home network that maintains current location directory.
- **Foreign Agent (FA):** Router on foreign network visited by mobile node; provides **Care-of-Address (CoA)**.
- **Care-of-Address (CoA):** Temporary IP address identifying mobile node's current point of attachment.
- **The Triangle Routing Bottleneck:**
  - Correspondent Node (CN) sends packet addressed to Mobile Node's permanent Home Address.
  - Home Agent intercepts packet, encapsulates it inside an outer IP header addressed to CoA (IP-in-IP tunneling).
  - Foreign Agent receives tunneled packet, decapsulates outer header, and delivers original packet to Mobile Node.
  - Return path from Mobile Node to CN goes directly via standard IP routing without touching Home Agent, forming an inefficient triangular path.
  - *Route Optimization:* HA informs CN of Mobile Node's CoA directly so subsequent packets bypass HA.

---

## Unit 3: Mobile Transport Protocols (TCP over Wireless)
### 1. The Core Wireless TCP Problem
Standard TCP assumes all packet loss is caused by network router congestion, triggering slow start and halving the congestion window (`cwnd`). In wireless environments, packet losses are primarily caused by radio fading, noise, and handoffs. Halving `cwnd` drastically degrades throughput.

### 2. Wireless TCP Variations
- **Indirect TCP (I-TCP):** Splits the TCP connection at the Base Station into two separate connections:
  - Standard TCP between Correspondent Node and Base Station (Fixed network).
  - Optimized wireless transport between Base Station and Mobile Host.
  - *Drawback:* Violates end-to-end TCP semantics (ACK sent before receiver actually has packet).
- **Snooping TCP:** Base Station transparently buffers unacknowledged packets and monitors ACKs. If duplicate ACKs arrive indicating wireless loss, Base Station retransmits from local cache without letting CN know.
