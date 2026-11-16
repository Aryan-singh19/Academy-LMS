# MCSE-203 Advanced Information Security — Unit-wise Study Notes

> Cryptography, protocols, system and network security, web security, privacy and security of AI systems.

## Unit 1: Cryptographic Foundations

### Symmetric Cryptography

Shared-key encryption.

- **AES:** 128-bit block cipher with 10-14 rounds
- **Block Cipher Modes:** CBC, CTR and GCM
- **Authenticated Encryption:** confidentiality plus integrity, e.g. AES-GCM

### Public-key Cryptography

Key pairs enable secure exchange.

- **RSA:** security from integer factorisation
- **Diffie-Hellman:** key exchange over insecure channel
- **Elliptic Curve Cryptography:** smaller keys for same security

### Hash Functions & MACs

Integrity and authentication.

- **SHA-3:** Keccak-based hash function
- **HMAC:** hash-based message authentication code
- **Birthday Attack:** collisions in about 2^(n/2) attempts

### Digital Signatures & PKI

Authenticating identities.

- **Digital Signature:** proves origin and integrity
- **PKI:** public key infrastructure with certificates
- **Certificate Authority:** issues and signs certificates

## Unit 2: Security Protocols

### Authentication Protocols

Verifying identities.

- **Kerberos:** ticket-based network authentication
- **OAuth 2.0:** delegated authorisation framework
- **Multi-factor Authentication:** combines several factors

### TLS 1.3

Securing web traffic.

- **TLS Handshake:** negotiates keys and authenticates server
- **Forward Secrecy:** past sessions safe if long-term key leaks
- **0-RTT:** resumption with early data

### Protocol Attacks

Protocols can be attacked.

- **Replay Attack:** reusing captured messages
- **Man-in-the-middle:** intercepting and altering communication
- **Downgrade Attack:** forcing weaker protocol versions

### Formal Verification

Proving protocols secure.

- **Dolev-Yao Model:** attacker controls network
- **ProVerif:** automated protocol verifier
- **Security Proof:** reduction to hard problem

## Unit 3: System & Software Security

### Memory Safety Vulnerabilities

Low-level bugs enable exploits.

- **Buffer Overflow:** writing beyond buffer bounds
- **Use-after-free:** accessing freed memory
- **Return-oriented Programming:** chaining code gadgets

### Exploit Mitigations

Defences raise attack cost.

- **ASLR:** randomises memory layout
- **DEP/NX:** non-executable memory regions
- **Stack Canary:** detects stack smashing

### Access Control

Who can do what.

- **DAC:** owner-controlled access
- **MAC:** system-enforced labels
- **RBAC:** role-based access control

### Trusted Computing & Sandboxing

Isolation and attestation.

- **TEE:** trusted execution environment, e.g. Intel SGX
- **Remote Attestation:** proves software state
- **Sandbox:** restricts untrusted code

## Unit 4: Network & Web Security

### Network Security

Protecting networks.

- **Firewall:** filters traffic by rules
- **IDS/IPS:** detects and blocks intrusions
- **Network Segmentation:** limits lateral movement

### Web Application Security

Web apps face common attacks.

- **SQL Injection:** injecting SQL through input
- **XSS:** injecting scripts into web pages
- **CSRF:** forging requests from authenticated users

### Malware Analysis

Studying malicious software.

- **Static Analysis:** examining code without running
- **Dynamic Analysis:** observing behaviour in sandbox
- **Ransomware:** encrypts data for ransom

### Security Operations

Detect and respond.

- **SIEM:** security information and event management
- **Threat Intelligence:** information on attackers
- **Incident Response:** structured handling of breaches

## Unit 5: Privacy & AI Security

### Privacy Technologies

Protecting personal data.

- **Differential Privacy:** adds noise to protect individuals
- **k-Anonymity:** each record indistinguishable from k − 1 others
- **Homomorphic Encryption:** computation on encrypted data

### Privacy Regulation

Laws govern data use.

- **DPDP Act 2023:** India's digital personal data protection law
- **GDPR:** EU data protection regulation
- **Data Minimisation:** collect only what is needed

### Adversarial Machine Learning

ML models can be attacked.

- **Adversarial Example:** small perturbation causing misclassification
- **Data Poisoning:** corrupting training data
- **Model Extraction:** stealing model via queries

### LLM & Agent Security

AI systems add new risks.

- **Prompt Injection:** malicious instructions in model input
- **Sandbox Escape:** untrusted code breaking out of isolation
- **Red Teaming:** adversarial testing of systems

## Standard Textbooks

- *Cryptography and Network Security* — William Stallings
- *Security Engineering* — Ross Anderson
- *Introduction to Modern Cryptography* — Katz & Lindell

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
