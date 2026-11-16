# CS-802(B) Cloud Computing — Question Bank with Answer Hints

## Unit 1: SOA & Web Services

### Short answer (2-3 marks)

- **Q.** Define *SOA*.  
  **Ans.** architecture of interoperable services exposed over a network
- **Q.** Define *Loose Coupling*.  
  **Ans.** services depend minimally on each other's internals
- **Q.** Define *Service Contract*.  
  **Ans.** formal description of a service's interface
- **Q.** Define *SOAP*.  
  **Ans.** XML-based messaging protocol for web services
- **Q.** Define *WSDL*.  
  **Ans.** XML language describing a web service interface
- **Q.** Define *UDDI*.  
  **Ans.** registry for publishing and discovering services
- **Q.** Define *REST*.  
  **Ans.** architectural style using stateless HTTP operations on resources
- **Q.** Define *Idempotent Method*.  
  **Ans.** repeated calls give the same result, e.g. PUT and DELETE
- **Q.** Define *JSON*.  
  **Ans.** lightweight data format widely used by REST APIs
- **Q.** Define *NIST Cloud Definition*.  
  **Ans.** on-demand network access to a shared pool of configurable resources
- **Q.** Define *Rapid Elasticity*.  
  **Ans.** resources scale out and in automatically
- **Q.** Define *Measured Service*.  
  **Ans.** usage is metered and billed

### Long answer (7 marks)

- **Q.** Explain *Service Oriented Architecture* in detail with a neat diagram.  
  **Key points:** SOA builds systems from loosely coupled services. SOA — architecture of interoperable services exposed over a network; Loose Coupling — services depend minimally on each other's internals; Service Contract — formal description of a service's interface.
- **Q.** Explain *SOAP, WSDL & UDDI* in detail with a neat diagram.  
  **Key points:** Classic web-service standards describe and discover services. SOAP — XML-based messaging protocol for web services; WSDL — XML language describing a web service interface; UDDI — registry for publishing and discovering services.
- **Q.** Explain *RESTful Web Services* in detail with a neat diagram.  
  **Key points:** REST uses HTTP verbs on resources. REST — architectural style using stateless HTTP operations on resources; Idempotent Method — repeated calls give the same result, e.g. PUT and DELETE; JSON — lightweight data format widely used by REST APIs.
- **Q.** Explain *Cloud Computing Definition & Characteristics* in detail with a neat diagram.  
  **Key points:** Cloud provides on-demand resources over the network. NIST Cloud Definition — on-demand network access to a shared pool of configurable resources; Rapid Elasticity — resources scale out and in automatically; Measured Service — usage is metered and billed.

## Unit 2: Virtualisation

### Short answer (2-3 marks)

- **Q.** Define *Virtual Machine*.  
  **Ans.** software emulation of a complete computer
- **Q.** Define *Hypervisor*.  
  **Ans.** layer that creates and runs virtual machines
- **Q.** Define *Server Consolidation*.  
  **Ans.** running many VMs on fewer physical servers
- **Q.** Define *Type 1 Hypervisor*.  
  **Ans.** bare-metal, e.g. VMware ESXi, Xen
- **Q.** Define *Type 2 Hypervisor*.  
  **Ans.** runs on a host OS, e.g. VirtualBox
- **Q.** Define *Paravirtualisation*.  
  **Ans.** guest OS modified to cooperate with the hypervisor
- **Q.** Define *Container*.  
  **Ans.** isolated user-space instance sharing the host OS kernel
- **Q.** Define *Docker*.  
  **Ans.** platform for building and running containers
- **Q.** Define *Kubernetes*.  
  **Ans.** system for orchestrating containers across clusters
- **Q.** Define *Live Migration*.  
  **Ans.** moving a running VM to another host
- **Q.** Define *Load Balancing*.  
  **Ans.** distributing workload across resources
- **Q.** Define *Autoscaling*.  
  **Ans.** automatically adjusting instance count to demand

### Long answer (7 marks)

- **Q.** Explain *Virtualisation Concepts* in detail with a neat diagram.  
  **Key points:** Virtualisation abstracts physical hardware. Virtual Machine — software emulation of a complete computer; Hypervisor — layer that creates and runs virtual machines; Server Consolidation — running many VMs on fewer physical servers.
- **Q.** Explain *Hypervisor Types* in detail with a neat diagram.  
  **Key points:** Hypervisors run directly on hardware or on a host OS. Type 1 Hypervisor — bare-metal, e.g. VMware ESXi, Xen; Type 2 Hypervisor — runs on a host OS, e.g. VirtualBox; Paravirtualisation — guest OS modified to cooperate with the hypervisor.
- **Q.** Explain *Containers* in detail with a neat diagram.  
  **Key points:** Containers share the host kernel for lightweight isolation. Container — isolated user-space instance sharing the host OS kernel; Docker — platform for building and running containers; Kubernetes — system for orchestrating containers across clusters.
- **Q.** Explain *Live Migration & Resource Management* in detail with a neat diagram.  
  **Key points:** VMs move between hosts without downtime. Live Migration — moving a running VM to another host; Load Balancing — distributing workload across resources; Autoscaling — automatically adjusting instance count to demand.

## Unit 3: Service & Deployment Models

### Short answer (2-3 marks)

- **Q.** Define *IaaS*.  
  **Ans.** infrastructure as a service: VMs, storage and networks, e.g. AWS EC2
- **Q.** Define *PaaS*.  
  **Ans.** platform as a service for deploying code without managing servers
- **Q.** Define *SaaS*.  
  **Ans.** complete applications delivered over the web, e.g. Gmail
- **Q.** Define *Public Cloud*.  
  **Ans.** services offered to the general public by a provider
- **Q.** Define *Private Cloud*.  
  **Ans.** cloud operated for one organisation
- **Q.** Define *Hybrid Cloud*.  
  **Ans.** combination of public and private clouds
- **Q.** Define *FaaS*.  
  **Ans.** functions executed in response to events, e.g. AWS Lambda
- **Q.** Define *Cold Start*.  
  **Ans.** latency when a function instance is first created
- **Q.** Define *Pay-per-execution*.  
  **Ans.** billing only for actual function run time
- **Q.** Define *SLA*.  
  **Ans.** service level agreement defining guaranteed availability and performance
- **Q.** Define *Pay-as-you-go*.  
  **Ans.** paying only for resources consumed
- **Q.** Define *CapEx vs OpEx*.  
  **Ans.** cloud shifts capital expenditure to operating expenditure

### Long answer (7 marks)

- **Q.** Explain *IaaS, PaaS & SaaS* in detail with a neat diagram.  
  **Key points:** Service models differ in what the provider manages. IaaS — infrastructure as a service: VMs, storage and networks, e.g. AWS EC2; PaaS — platform as a service for deploying code without managing servers; SaaS — complete applications delivered over the web, e.g. Gmail.
- **Q.** Explain *Deployment Models* in detail with a neat diagram.  
  **Key points:** Clouds differ in ownership and access. Public Cloud — services offered to the general public by a provider; Private Cloud — cloud operated for one organisation; Hybrid Cloud — combination of public and private clouds.
- **Q.** Explain *Serverless & FaaS* in detail with a neat diagram.  
  **Key points:** Functions run on demand without server management. FaaS — functions executed in response to events, e.g. AWS Lambda; Cold Start — latency when a function instance is first created; Pay-per-execution — billing only for actual function run time.
- **Q.** Explain *SLA & Cloud Economics* in detail with a neat diagram.  
  **Key points:** Contracts and pricing govern cloud use. SLA — service level agreement defining guaranteed availability and performance; Pay-as-you-go — paying only for resources consumed; CapEx vs OpEx — cloud shifts capital expenditure to operating expenditure.

## Unit 4: Cloud Platforms & Storage

### Short answer (2-3 marks)

- **Q.** Define *AWS*.  
  **Ans.** Amazon Web Services, largest public cloud provider
- **Q.** Define *Microsoft Azure*.  
  **Ans.** Microsoft's cloud platform
- **Q.** Define *Google Cloud Platform*.  
  **Ans.** Google's cloud services such as Compute Engine and BigQuery
- **Q.** Define *Object Storage*.  
  **Ans.** data stored as objects with metadata, e.g. Amazon S3
- **Q.** Define *Block Storage*.  
  **Ans.** raw volumes attached to VMs
- **Q.** Define *Data Replication*.  
  **Ans.** copies stored across zones for durability
- **Q.** Define *MapReduce*.  
  **Ans.** programming model with map and reduce phases
- **Q.** Define *Hadoop*.  
  **Ans.** open-source framework for distributed storage and processing
- **Q.** Define *Data Lake*.  
  **Ans.** central repository storing raw data at any scale
- **Q.** Define *OpenStack*.  
  **Ans.** open-source platform for building private clouds
- **Q.** Define *Benchmarking*.  
  **Ans.** measuring performance against a standard workload
- **Q.** Define *Multi-tenancy*.  
  **Ans.** multiple customers sharing the same infrastructure securely

### Long answer (7 marks)

- **Q.** Explain *Major Cloud Platforms* in detail with a neat diagram.  
  **Key points:** Providers offer similar building blocks. AWS — Amazon Web Services, largest public cloud provider; Microsoft Azure — Microsoft's cloud platform; Google Cloud Platform — Google's cloud services such as Compute Engine and BigQuery.
- **Q.** Explain *Cloud Storage* in detail with a neat diagram.  
  **Key points:** Storage is offered as objects, blocks and files. Object Storage — data stored as objects with metadata, e.g. Amazon S3; Block Storage — raw volumes attached to VMs; Data Replication — copies stored across zones for durability.
- **Q.** Explain *MapReduce & Big Data in the Cloud* in detail with a neat diagram.  
  **Key points:** Clouds run distributed data processing. MapReduce — programming model with map and reduce phases; Hadoop — open-source framework for distributed storage and processing; Data Lake — central repository storing raw data at any scale.
- **Q.** Explain *Installing & Evaluating Cloud Platforms* in detail with a neat diagram.  
  **Key points:** Private clouds can be built with open-source stacks. OpenStack — open-source platform for building private clouds; Benchmarking — measuring performance against a standard workload; Multi-tenancy — multiple customers sharing the same infrastructure securely.

## Unit 5: Cloud Security & Management

### Short answer (2-3 marks)

- **Q.** Define *Shared Responsibility Model*.  
  **Ans.** provider secures the cloud, customer secures what is in it
- **Q.** Define *Data Breach*.  
  **Ans.** unauthorised access to stored data
- **Q.** Define *Insider Threat*.  
  **Ans.** misuse by people with legitimate access
- **Q.** Define *IAM*.  
  **Ans.** identity and access management service
- **Q.** Define *Principle of Least Privilege*.  
  **Ans.** grant only the permissions needed
- **Q.** Define *Multi-factor Authentication*.  
  **Ans.** login requiring two or more proofs of identity
- **Q.** Define *Availability Zone*.  
  **Ans.** isolated data-centre location within a region
- **Q.** Define *RTO*.  
  **Ans.** recovery time objective, maximum acceptable downtime
- **Q.** Define *RPO*.  
  **Ans.** recovery point objective, maximum acceptable data loss
- **Q.** Define *Cloud Monitoring*.  
  **Ans.** tracking metrics and logs of cloud resources
- **Q.** Define *Vendor Lock-in*.  
  **Ans.** difficulty moving workloads between providers
- **Q.** Define *Compliance*.  
  **Ans.** meeting legal and regulatory standards such as GDPR

### Long answer (7 marks)

- **Q.** Explain *Cloud Security Issues* in detail with a neat diagram.  
  **Key points:** Shared infrastructure raises new risks. Shared Responsibility Model — provider secures the cloud, customer secures what is in it; Data Breach — unauthorised access to stored data; Insider Threat — misuse by people with legitimate access.
- **Q.** Explain *Identity & Access Management* in detail with a neat diagram.  
  **Key points:** IAM controls who can do what. IAM — identity and access management service; Principle of Least Privilege — grant only the permissions needed; Multi-factor Authentication — login requiring two or more proofs of identity.
- **Q.** Explain *Disaster Recovery & Availability* in detail with a neat diagram.  
  **Key points:** Clouds design for failure. Availability Zone — isolated data-centre location within a region; RTO — recovery time objective, maximum acceptable downtime; RPO — recovery point objective, maximum acceptable data loss.
- **Q.** Explain *Cloud Monitoring & Governance* in detail with a neat diagram.  
  **Key points:** Operations teams monitor cost, compliance and performance. Cloud Monitoring — tracking metrics and logs of cloud resources; Vendor Lock-in — difficulty moving workloads between providers; Compliance — meeting legal and regulatory standards such as GDPR.

