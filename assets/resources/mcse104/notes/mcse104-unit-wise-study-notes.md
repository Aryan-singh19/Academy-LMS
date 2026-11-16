# MCSE-104 Advanced Computer Networks — Unit-wise Study Notes

> Network architecture, routing, transport, QoS, software-defined networking, wireless and network security.

## Unit 1: Network Architecture

### Layered Architecture

Layers modularise networking.

- **OSI Model:** seven-layer reference model
- **TCP/IP Model:** four-layer Internet model
- **End-to-end Principle:** intelligence at end hosts

### Switching Techniques

Data moves by circuits or packets.

- **Circuit Switching:** dedicated path for session
- **Packet Switching:** packets routed independently
- **Virtual Circuit:** connection-oriented packet switching

### Network Performance

Metrics measure networks.

- **Bandwidth-Delay Product:** data in flight on a link
- **Throughput:** actual data delivered per unit time
- **Jitter:** variation in packet delay

### Internet Architecture

The Internet is a network of networks.

- **Autonomous System:** network under single routing policy
- **IXP:** Internet exchange point
- **CDN:** content delivery network caching near users

## Unit 2: Routing

### Intra-domain Routing

Routing within an AS.

- **OSPF:** link-state routing protocol
- **RIP:** distance-vector protocol with hop count
- **Dijkstra in OSPF:** computes shortest path tree

### Inter-domain Routing

BGP connects autonomous systems.

- **BGP:** path-vector inter-domain routing protocol
- **AS Path:** list of ASes a route traverses
- **Route Policy:** business relationships decide routes

### Multicast Routing

One-to-many delivery.

- **IP Multicast:** group communication
- **PIM:** protocol independent multicast
- **IGMP:** hosts join multicast groups

### IPv6 & Addressing

IPv6 expands address space.

- **IPv6:** 128-bit addressing
- **CIDR:** classless inter-domain routing
- **NAT:** translates private to public addresses

## Unit 3: Transport & QoS

### TCP Congestion Control

TCP adapts sending rate.

- **AIMD:** additive increase multiplicative decrease
- **Slow Start:** exponential window growth
- **TCP CUBIC:** default congestion control in Linux

### Advanced Transport

New protocols improve performance.

- **QUIC:** UDP-based transport with built-in TLS
- **BBR:** congestion control based on bandwidth and RTT
- **Multipath TCP:** uses several paths simultaneously

### Quality of Service

QoS guarantees performance.

- **IntServ:** per-flow reservations with RSVP
- **DiffServ:** class-based traffic handling
- **Token Bucket:** traffic shaping mechanism

### Queue Management

Routers manage buffers.

- **RED:** random early detection
- **Bufferbloat:** excessive buffering causing latency
- **Fair Queuing:** equal share among flows

## Unit 4: Software-defined & Virtual Networks

### SDN

Control plane is separated from data plane.

- **SDN:** centralised programmable network control
- **OpenFlow:** protocol between controller and switches
- **Flow Table:** match-action rules in switch

### NFV

Network functions run as software.

- **NFV:** network function virtualisation
- **VNF:** virtualised network function
- **Service Function Chaining:** ordered set of VNFs

### Data Centre Networks

Data centres use special topologies.

- **Fat-tree Topology:** Clos network with high bisection bandwidth
- **ECMP:** equal-cost multipath routing
- **Overlay Network:** VXLAN tunnels over physical network

### Programmable Data Planes

Switches become programmable.

- **P4:** language for programming packet processing
- **Network Telemetry:** fine-grained monitoring
- **Intent-based Networking:** high-level policy translated to configuration

## Unit 5: Wireless & Secure Networks

### Wireless LANs

Wi-Fi uses CSMA/CA.

- **CSMA/CA:** collision avoidance in Wi-Fi
- **Hidden Terminal Problem:** stations not hearing each other
- **RTS/CTS:** handshake mitigating hidden terminals

### Mobile & Ad Hoc Networks

Networks without fixed infrastructure.

- **MANET:** mobile ad hoc network
- **AODV:** on-demand routing protocol
- **DTN:** delay tolerant networking

### Network Security Protocols

Security protects communications.

- **TLS:** transport layer security
- **IPsec:** network-layer security
- **VPN:** secure tunnel over public network

### Network Attacks & Defence

Networks face attacks.

- **DDoS:** distributed denial of service
- **IDS:** intrusion detection system
- **Zero Trust:** never trust, always verify

## Standard Textbooks

- *Computer Networks: A Systems Approach* — Peterson & Davie
- *Computer Networking: A Top-Down Approach* — Kurose & Ross
- *Software Defined Networks* — Nadeau & Gray

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
