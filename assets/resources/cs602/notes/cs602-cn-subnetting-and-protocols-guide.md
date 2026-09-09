# CS-602: Computer Networks — Subnetting, Routing & Protocols Master Guide

## 1. IPv4 Addressing & CIDR Subnetting
- **IPv4 Format:** 32-bit address represented in dotted-decimal notation (4 octets).
- **Subnet Mask & Usable Hosts Formula:**
  $$\text{Total IP Addresses} = 2^{(32 - \text{Prefix Length})}$$
  $$\text{Usable Hosts} = 2^{(32 - \text{Prefix Length})} - 2 \quad \text{(subtracting Network ID and Broadcast ID)}$$

### Subnet Reference Table
| CIDR Prefix | Subnet Mask | Total IPs | Usable Host IPs |
| :---: | :---: | :---: | :---: |
| `/24` | `255.255.255.0` | 256 | 254 |
| `/25` | `255.255.255.128` | 128 | 126 |
| `/26` | `255.255.255.192` | 64 | 62 |
| `/27` | `255.255.255.224` | 32 | 30 |
| `/28` | `255.255.255.240` | 16 | 14 |
| `/29` | `255.255.255.248` | 8 | 6 |
| `/30` | `255.255.255.252` | 4 | 2 (Point-to-point links) |

## 2. Sliding Window Protocols
- **Stop-and-Wait:** Sender window size = 1, Receiver window size = 1. Efficiency $\eta = \frac{1}{1 + 2a}$ where $a = \frac{T_p}{T_t}$.
- **Go-Back-N (GBN):** Sender window size = $N$, Receiver window size = 1. Window size $\le 2^m - 1$ where $m$ is the number of bits in sequence numbers.
- **Selective Repeat (SR):** Sender window size = $N$, Receiver window size = $N$. Window size $\le 2^{m-1}$.
