# MCSE-104 Advanced Computer Networks — Question Bank with Answer Hints

## Unit 1: Network Architecture

### Short answer (2-3 marks)

- **Q.** Define *OSI Model*.  
  **Ans.** seven-layer reference model
- **Q.** Define *TCP/IP Model*.  
  **Ans.** four-layer Internet model
- **Q.** Define *End-to-end Principle*.  
  **Ans.** intelligence at end hosts
- **Q.** Define *Circuit Switching*.  
  **Ans.** dedicated path for session
- **Q.** Define *Packet Switching*.  
  **Ans.** packets routed independently
- **Q.** Define *Virtual Circuit*.  
  **Ans.** connection-oriented packet switching
- **Q.** Define *Bandwidth-Delay Product*.  
  **Ans.** data in flight on a link
- **Q.** Define *Throughput*.  
  **Ans.** actual data delivered per unit time
- **Q.** Define *Jitter*.  
  **Ans.** variation in packet delay
- **Q.** Define *Autonomous System*.  
  **Ans.** network under single routing policy
- **Q.** Define *IXP*.  
  **Ans.** Internet exchange point
- **Q.** Define *CDN*.  
  **Ans.** content delivery network caching near users

### Long answer (7 marks)

- **Q.** Explain *Layered Architecture* in detail with a neat diagram.  
  **Key points:** Layers modularise networking. OSI Model — seven-layer reference model; TCP/IP Model — four-layer Internet model; End-to-end Principle — intelligence at end hosts.
- **Q.** Explain *Switching Techniques* in detail with a neat diagram.  
  **Key points:** Data moves by circuits or packets. Circuit Switching — dedicated path for session; Packet Switching — packets routed independently; Virtual Circuit — connection-oriented packet switching.
- **Q.** Explain *Network Performance* in detail with a neat diagram.  
  **Key points:** Metrics measure networks. Bandwidth-Delay Product — data in flight on a link; Throughput — actual data delivered per unit time; Jitter — variation in packet delay.
- **Q.** Explain *Internet Architecture* in detail with a neat diagram.  
  **Key points:** The Internet is a network of networks. Autonomous System — network under single routing policy; IXP — Internet exchange point; CDN — content delivery network caching near users.

## Unit 2: Routing

### Short answer (2-3 marks)

- **Q.** Define *OSPF*.  
  **Ans.** link-state routing protocol
- **Q.** Define *RIP*.  
  **Ans.** distance-vector protocol with hop count
- **Q.** Define *Dijkstra in OSPF*.  
  **Ans.** computes shortest path tree
- **Q.** Define *BGP*.  
  **Ans.** path-vector inter-domain routing protocol
- **Q.** Define *AS Path*.  
  **Ans.** list of ASes a route traverses
- **Q.** Define *Route Policy*.  
  **Ans.** business relationships decide routes
- **Q.** Define *IP Multicast*.  
  **Ans.** group communication
- **Q.** Define *PIM*.  
  **Ans.** protocol independent multicast
- **Q.** Define *IGMP*.  
  **Ans.** hosts join multicast groups
- **Q.** Define *IPv6*.  
  **Ans.** 128-bit addressing
- **Q.** Define *CIDR*.  
  **Ans.** classless inter-domain routing
- **Q.** Define *NAT*.  
  **Ans.** translates private to public addresses

### Long answer (7 marks)

- **Q.** Explain *Intra-domain Routing* in detail with a neat diagram.  
  **Key points:** Routing within an AS. OSPF — link-state routing protocol; RIP — distance-vector protocol with hop count; Dijkstra in OSPF — computes shortest path tree.
- **Q.** Explain *Inter-domain Routing* in detail with a neat diagram.  
  **Key points:** BGP connects autonomous systems. BGP — path-vector inter-domain routing protocol; AS Path — list of ASes a route traverses; Route Policy — business relationships decide routes.
- **Q.** Explain *Multicast Routing* in detail with a neat diagram.  
  **Key points:** One-to-many delivery. IP Multicast — group communication; PIM — protocol independent multicast; IGMP — hosts join multicast groups.
- **Q.** Explain *IPv6 & Addressing* in detail with a neat diagram.  
  **Key points:** IPv6 expands address space. IPv6 — 128-bit addressing; CIDR — classless inter-domain routing; NAT — translates private to public addresses.

## Unit 3: Transport & QoS

### Short answer (2-3 marks)

- **Q.** Define *AIMD*.  
  **Ans.** additive increase multiplicative decrease
- **Q.** Define *Slow Start*.  
  **Ans.** exponential window growth
- **Q.** Define *TCP CUBIC*.  
  **Ans.** default congestion control in Linux
- **Q.** Define *QUIC*.  
  **Ans.** UDP-based transport with built-in TLS
- **Q.** Define *BBR*.  
  **Ans.** congestion control based on bandwidth and RTT
- **Q.** Define *Multipath TCP*.  
  **Ans.** uses several paths simultaneously
- **Q.** Define *IntServ*.  
  **Ans.** per-flow reservations with RSVP
- **Q.** Define *DiffServ*.  
  **Ans.** class-based traffic handling
- **Q.** Define *Token Bucket*.  
  **Ans.** traffic shaping mechanism
- **Q.** Define *RED*.  
  **Ans.** random early detection
- **Q.** Define *Bufferbloat*.  
  **Ans.** excessive buffering causing latency
- **Q.** Define *Fair Queuing*.  
  **Ans.** equal share among flows

### Long answer (7 marks)

- **Q.** Explain *TCP Congestion Control* in detail with a neat diagram.  
  **Key points:** TCP adapts sending rate. AIMD — additive increase multiplicative decrease; Slow Start — exponential window growth; TCP CUBIC — default congestion control in Linux.
- **Q.** Explain *Advanced Transport* in detail with a neat diagram.  
  **Key points:** New protocols improve performance. QUIC — UDP-based transport with built-in TLS; BBR — congestion control based on bandwidth and RTT; Multipath TCP — uses several paths simultaneously.
- **Q.** Explain *Quality of Service* in detail with a neat diagram.  
  **Key points:** QoS guarantees performance. IntServ — per-flow reservations with RSVP; DiffServ — class-based traffic handling; Token Bucket — traffic shaping mechanism.
- **Q.** Explain *Queue Management* in detail with a neat diagram.  
  **Key points:** Routers manage buffers. RED — random early detection; Bufferbloat — excessive buffering causing latency; Fair Queuing — equal share among flows.

## Unit 4: Software-defined & Virtual Networks

### Short answer (2-3 marks)

- **Q.** Define *SDN*.  
  **Ans.** centralised programmable network control
- **Q.** Define *OpenFlow*.  
  **Ans.** protocol between controller and switches
- **Q.** Define *Flow Table*.  
  **Ans.** match-action rules in switch
- **Q.** Define *NFV*.  
  **Ans.** network function virtualisation
- **Q.** Define *VNF*.  
  **Ans.** virtualised network function
- **Q.** Define *Service Function Chaining*.  
  **Ans.** ordered set of VNFs
- **Q.** Define *Fat-tree Topology*.  
  **Ans.** Clos network with high bisection bandwidth
- **Q.** Define *ECMP*.  
  **Ans.** equal-cost multipath routing
- **Q.** Define *Overlay Network*.  
  **Ans.** VXLAN tunnels over physical network
- **Q.** Define *P4*.  
  **Ans.** language for programming packet processing
- **Q.** Define *Network Telemetry*.  
  **Ans.** fine-grained monitoring
- **Q.** Define *Intent-based Networking*.  
  **Ans.** high-level policy translated to configuration

### Long answer (7 marks)

- **Q.** Explain *SDN* in detail with a neat diagram.  
  **Key points:** Control plane is separated from data plane. SDN — centralised programmable network control; OpenFlow — protocol between controller and switches; Flow Table — match-action rules in switch.
- **Q.** Explain *NFV* in detail with a neat diagram.  
  **Key points:** Network functions run as software. NFV — network function virtualisation; VNF — virtualised network function; Service Function Chaining — ordered set of VNFs.
- **Q.** Explain *Data Centre Networks* in detail with a neat diagram.  
  **Key points:** Data centres use special topologies. Fat-tree Topology — Clos network with high bisection bandwidth; ECMP — equal-cost multipath routing; Overlay Network — VXLAN tunnels over physical network.
- **Q.** Explain *Programmable Data Planes* in detail with a neat diagram.  
  **Key points:** Switches become programmable. P4 — language for programming packet processing; Network Telemetry — fine-grained monitoring; Intent-based Networking — high-level policy translated to configuration.

## Unit 5: Wireless & Secure Networks

### Short answer (2-3 marks)

- **Q.** Define *CSMA/CA*.  
  **Ans.** collision avoidance in Wi-Fi
- **Q.** Define *Hidden Terminal Problem*.  
  **Ans.** stations not hearing each other
- **Q.** Define *RTS/CTS*.  
  **Ans.** handshake mitigating hidden terminals
- **Q.** Define *MANET*.  
  **Ans.** mobile ad hoc network
- **Q.** Define *AODV*.  
  **Ans.** on-demand routing protocol
- **Q.** Define *DTN*.  
  **Ans.** delay tolerant networking
- **Q.** Define *TLS*.  
  **Ans.** transport layer security
- **Q.** Define *IPsec*.  
  **Ans.** network-layer security
- **Q.** Define *VPN*.  
  **Ans.** secure tunnel over public network
- **Q.** Define *DDoS*.  
  **Ans.** distributed denial of service
- **Q.** Define *IDS*.  
  **Ans.** intrusion detection system
- **Q.** Define *Zero Trust*.  
  **Ans.** never trust, always verify

### Long answer (7 marks)

- **Q.** Explain *Wireless LANs* in detail with a neat diagram.  
  **Key points:** Wi-Fi uses CSMA/CA. CSMA/CA — collision avoidance in Wi-Fi; Hidden Terminal Problem — stations not hearing each other; RTS/CTS — handshake mitigating hidden terminals.
- **Q.** Explain *Mobile & Ad Hoc Networks* in detail with a neat diagram.  
  **Key points:** Networks without fixed infrastructure. MANET — mobile ad hoc network; AODV — on-demand routing protocol; DTN — delay tolerant networking.
- **Q.** Explain *Network Security Protocols* in detail with a neat diagram.  
  **Key points:** Security protects communications. TLS — transport layer security; IPsec — network-layer security; VPN — secure tunnel over public network.
- **Q.** Explain *Network Attacks & Defence* in detail with a neat diagram.  
  **Key points:** Networks face attacks. DDoS — distributed denial of service; IDS — intrusion detection system; Zero Trust — never trust, always verify.

