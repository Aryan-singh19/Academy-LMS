# MCSE-203 Advanced Information Security — Question Bank with Answer Hints

## Unit 1: Cryptographic Foundations

### Short answer (2-3 marks)

- **Q.** Define *AES*.  
  **Ans.** 128-bit block cipher with 10-14 rounds
- **Q.** Define *Block Cipher Modes*.  
  **Ans.** CBC, CTR and GCM
- **Q.** Define *Authenticated Encryption*.  
  **Ans.** confidentiality plus integrity, e.g. AES-GCM
- **Q.** Define *RSA*.  
  **Ans.** security from integer factorisation
- **Q.** Define *Diffie-Hellman*.  
  **Ans.** key exchange over insecure channel
- **Q.** Define *Elliptic Curve Cryptography*.  
  **Ans.** smaller keys for same security
- **Q.** Define *SHA-3*.  
  **Ans.** Keccak-based hash function
- **Q.** Define *HMAC*.  
  **Ans.** hash-based message authentication code
- **Q.** Define *Birthday Attack*.  
  **Ans.** collisions in about 2^(n/2) attempts
- **Q.** Define *Digital Signature*.  
  **Ans.** proves origin and integrity
- **Q.** Define *PKI*.  
  **Ans.** public key infrastructure with certificates
- **Q.** Define *Certificate Authority*.  
  **Ans.** issues and signs certificates

### Long answer (7 marks)

- **Q.** Explain *Symmetric Cryptography* in detail with a neat diagram.  
  **Key points:** Shared-key encryption. AES — 128-bit block cipher with 10-14 rounds; Block Cipher Modes — CBC, CTR and GCM; Authenticated Encryption — confidentiality plus integrity, e.g. AES-GCM.
- **Q.** Explain *Public-key Cryptography* in detail with a neat diagram.  
  **Key points:** Key pairs enable secure exchange. RSA — security from integer factorisation; Diffie-Hellman — key exchange over insecure channel; Elliptic Curve Cryptography — smaller keys for same security.
- **Q.** Explain *Hash Functions & MACs* in detail with a neat diagram.  
  **Key points:** Integrity and authentication. SHA-3 — Keccak-based hash function; HMAC — hash-based message authentication code; Birthday Attack — collisions in about 2^(n/2) attempts.
- **Q.** Explain *Digital Signatures & PKI* in detail with a neat diagram.  
  **Key points:** Authenticating identities. Digital Signature — proves origin and integrity; PKI — public key infrastructure with certificates; Certificate Authority — issues and signs certificates.

## Unit 2: Security Protocols

### Short answer (2-3 marks)

- **Q.** Define *Kerberos*.  
  **Ans.** ticket-based network authentication
- **Q.** Define *OAuth 2.0*.  
  **Ans.** delegated authorisation framework
- **Q.** Define *Multi-factor Authentication*.  
  **Ans.** combines several factors
- **Q.** Define *TLS Handshake*.  
  **Ans.** negotiates keys and authenticates server
- **Q.** Define *Forward Secrecy*.  
  **Ans.** past sessions safe if long-term key leaks
- **Q.** Define *0-RTT*.  
  **Ans.** resumption with early data
- **Q.** Define *Replay Attack*.  
  **Ans.** reusing captured messages
- **Q.** Define *Man-in-the-middle*.  
  **Ans.** intercepting and altering communication
- **Q.** Define *Downgrade Attack*.  
  **Ans.** forcing weaker protocol versions
- **Q.** Define *Dolev-Yao Model*.  
  **Ans.** attacker controls network
- **Q.** Define *ProVerif*.  
  **Ans.** automated protocol verifier
- **Q.** Define *Security Proof*.  
  **Ans.** reduction to hard problem

### Long answer (7 marks)

- **Q.** Explain *Authentication Protocols* in detail with a neat diagram.  
  **Key points:** Verifying identities. Kerberos — ticket-based network authentication; OAuth 2.0 — delegated authorisation framework; Multi-factor Authentication — combines several factors.
- **Q.** Explain *TLS 1.3* in detail with a neat diagram.  
  **Key points:** Securing web traffic. TLS Handshake — negotiates keys and authenticates server; Forward Secrecy — past sessions safe if long-term key leaks; 0-RTT — resumption with early data.
- **Q.** Explain *Protocol Attacks* in detail with a neat diagram.  
  **Key points:** Protocols can be attacked. Replay Attack — reusing captured messages; Man-in-the-middle — intercepting and altering communication; Downgrade Attack — forcing weaker protocol versions.
- **Q.** Explain *Formal Verification* in detail with a neat diagram.  
  **Key points:** Proving protocols secure. Dolev-Yao Model — attacker controls network; ProVerif — automated protocol verifier; Security Proof — reduction to hard problem.

## Unit 3: System & Software Security

### Short answer (2-3 marks)

- **Q.** Define *Buffer Overflow*.  
  **Ans.** writing beyond buffer bounds
- **Q.** Define *Use-after-free*.  
  **Ans.** accessing freed memory
- **Q.** Define *Return-oriented Programming*.  
  **Ans.** chaining code gadgets
- **Q.** Define *ASLR*.  
  **Ans.** randomises memory layout
- **Q.** Define *DEP/NX*.  
  **Ans.** non-executable memory regions
- **Q.** Define *Stack Canary*.  
  **Ans.** detects stack smashing
- **Q.** Define *DAC*.  
  **Ans.** owner-controlled access
- **Q.** Define *MAC*.  
  **Ans.** system-enforced labels
- **Q.** Define *RBAC*.  
  **Ans.** role-based access control
- **Q.** Define *TEE*.  
  **Ans.** trusted execution environment, e.g. Intel SGX
- **Q.** Define *Remote Attestation*.  
  **Ans.** proves software state
- **Q.** Define *Sandbox*.  
  **Ans.** restricts untrusted code

### Long answer (7 marks)

- **Q.** Explain *Memory Safety Vulnerabilities* in detail with a neat diagram.  
  **Key points:** Low-level bugs enable exploits. Buffer Overflow — writing beyond buffer bounds; Use-after-free — accessing freed memory; Return-oriented Programming — chaining code gadgets.
- **Q.** Explain *Exploit Mitigations* in detail with a neat diagram.  
  **Key points:** Defences raise attack cost. ASLR — randomises memory layout; DEP/NX — non-executable memory regions; Stack Canary — detects stack smashing.
- **Q.** Explain *Access Control* in detail with a neat diagram.  
  **Key points:** Who can do what. DAC — owner-controlled access; MAC — system-enforced labels; RBAC — role-based access control.
- **Q.** Explain *Trusted Computing & Sandboxing* in detail with a neat diagram.  
  **Key points:** Isolation and attestation. TEE — trusted execution environment, e.g. Intel SGX; Remote Attestation — proves software state; Sandbox — restricts untrusted code.

## Unit 4: Network & Web Security

### Short answer (2-3 marks)

- **Q.** Define *Firewall*.  
  **Ans.** filters traffic by rules
- **Q.** Define *IDS/IPS*.  
  **Ans.** detects and blocks intrusions
- **Q.** Define *Network Segmentation*.  
  **Ans.** limits lateral movement
- **Q.** Define *SQL Injection*.  
  **Ans.** injecting SQL through input
- **Q.** Define *XSS*.  
  **Ans.** injecting scripts into web pages
- **Q.** Define *CSRF*.  
  **Ans.** forging requests from authenticated users
- **Q.** Define *Static Analysis*.  
  **Ans.** examining code without running
- **Q.** Define *Dynamic Analysis*.  
  **Ans.** observing behaviour in sandbox
- **Q.** Define *Ransomware*.  
  **Ans.** encrypts data for ransom
- **Q.** Define *SIEM*.  
  **Ans.** security information and event management
- **Q.** Define *Threat Intelligence*.  
  **Ans.** information on attackers
- **Q.** Define *Incident Response*.  
  **Ans.** structured handling of breaches

### Long answer (7 marks)

- **Q.** Explain *Network Security* in detail with a neat diagram.  
  **Key points:** Protecting networks. Firewall — filters traffic by rules; IDS/IPS — detects and blocks intrusions; Network Segmentation — limits lateral movement.
- **Q.** Explain *Web Application Security* in detail with a neat diagram.  
  **Key points:** Web apps face common attacks. SQL Injection — injecting SQL through input; XSS — injecting scripts into web pages; CSRF — forging requests from authenticated users.
- **Q.** Explain *Malware Analysis* in detail with a neat diagram.  
  **Key points:** Studying malicious software. Static Analysis — examining code without running; Dynamic Analysis — observing behaviour in sandbox; Ransomware — encrypts data for ransom.
- **Q.** Explain *Security Operations* in detail with a neat diagram.  
  **Key points:** Detect and respond. SIEM — security information and event management; Threat Intelligence — information on attackers; Incident Response — structured handling of breaches.

## Unit 5: Privacy & AI Security

### Short answer (2-3 marks)

- **Q.** Define *Differential Privacy*.  
  **Ans.** adds noise to protect individuals
- **Q.** Define *k-Anonymity*.  
  **Ans.** each record indistinguishable from k − 1 others
- **Q.** Define *Homomorphic Encryption*.  
  **Ans.** computation on encrypted data
- **Q.** Define *DPDP Act 2023*.  
  **Ans.** India's digital personal data protection law
- **Q.** Define *GDPR*.  
  **Ans.** EU data protection regulation
- **Q.** Define *Data Minimisation*.  
  **Ans.** collect only what is needed
- **Q.** Define *Adversarial Example*.  
  **Ans.** small perturbation causing misclassification
- **Q.** Define *Data Poisoning*.  
  **Ans.** corrupting training data
- **Q.** Define *Model Extraction*.  
  **Ans.** stealing model via queries
- **Q.** Define *Prompt Injection*.  
  **Ans.** malicious instructions in model input
- **Q.** Define *Sandbox Escape*.  
  **Ans.** untrusted code breaking out of isolation
- **Q.** Define *Red Teaming*.  
  **Ans.** adversarial testing of systems

### Long answer (7 marks)

- **Q.** Explain *Privacy Technologies* in detail with a neat diagram.  
  **Key points:** Protecting personal data. Differential Privacy — adds noise to protect individuals; k-Anonymity — each record indistinguishable from k − 1 others; Homomorphic Encryption — computation on encrypted data.
- **Q.** Explain *Privacy Regulation* in detail with a neat diagram.  
  **Key points:** Laws govern data use. DPDP Act 2023 — India's digital personal data protection law; GDPR — EU data protection regulation; Data Minimisation — collect only what is needed.
- **Q.** Explain *Adversarial Machine Learning* in detail with a neat diagram.  
  **Key points:** ML models can be attacked. Adversarial Example — small perturbation causing misclassification; Data Poisoning — corrupting training data; Model Extraction — stealing model via queries.
- **Q.** Explain *LLM & Agent Security* in detail with a neat diagram.  
  **Key points:** AI systems add new risks. Prompt Injection — malicious instructions in model input; Sandbox Escape — untrusted code breaking out of isolation; Red Teaming — adversarial testing of systems.

