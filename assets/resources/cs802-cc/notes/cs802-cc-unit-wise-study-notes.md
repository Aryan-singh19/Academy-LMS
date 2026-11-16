# CS-802(B) Cloud Computing — Unit-wise Study Notes

> SOA and web services, virtualisation, cloud service and deployment models, cloud platforms, storage and security.

## Unit 1: SOA & Web Services

### Service Oriented Architecture

SOA builds systems from loosely coupled services.

- **SOA:** architecture of interoperable services exposed over a network
- **Loose Coupling:** services depend minimally on each other's internals
- **Service Contract:** formal description of a service's interface

### SOAP, WSDL & UDDI

Classic web-service standards describe and discover services.

- **SOAP:** XML-based messaging protocol for web services
- **WSDL:** XML language describing a web service interface
- **UDDI:** registry for publishing and discovering services

### RESTful Web Services

REST uses HTTP verbs on resources.

- **REST:** architectural style using stateless HTTP operations on resources
- **Idempotent Method:** repeated calls give the same result, e.g. PUT and DELETE
- **JSON:** lightweight data format widely used by REST APIs

### Cloud Computing Definition & Characteristics

Cloud provides on-demand resources over the network.

- **NIST Cloud Definition:** on-demand network access to a shared pool of configurable resources
- **Rapid Elasticity:** resources scale out and in automatically
- **Measured Service:** usage is metered and billed

## Unit 2: Virtualisation

### Virtualisation Concepts

Virtualisation abstracts physical hardware.

- **Virtual Machine:** software emulation of a complete computer
- **Hypervisor:** layer that creates and runs virtual machines
- **Server Consolidation:** running many VMs on fewer physical servers

### Hypervisor Types

Hypervisors run directly on hardware or on a host OS.

- **Type 1 Hypervisor:** bare-metal, e.g. VMware ESXi, Xen
- **Type 2 Hypervisor:** runs on a host OS, e.g. VirtualBox
- **Paravirtualisation:** guest OS modified to cooperate with the hypervisor

### Containers

Containers share the host kernel for lightweight isolation.

- **Container:** isolated user-space instance sharing the host OS kernel
- **Docker:** platform for building and running containers
- **Kubernetes:** system for orchestrating containers across clusters

### Live Migration & Resource Management

VMs move between hosts without downtime.

- **Live Migration:** moving a running VM to another host
- **Load Balancing:** distributing workload across resources
- **Autoscaling:** automatically adjusting instance count to demand

## Unit 3: Service & Deployment Models

### IaaS, PaaS & SaaS

Service models differ in what the provider manages.

- **IaaS:** infrastructure as a service: VMs, storage and networks, e.g. AWS EC2
- **PaaS:** platform as a service for deploying code without managing servers
- **SaaS:** complete applications delivered over the web, e.g. Gmail

### Deployment Models

Clouds differ in ownership and access.

- **Public Cloud:** services offered to the general public by a provider
- **Private Cloud:** cloud operated for one organisation
- **Hybrid Cloud:** combination of public and private clouds

### Serverless & FaaS

Functions run on demand without server management.

- **FaaS:** functions executed in response to events, e.g. AWS Lambda
- **Cold Start:** latency when a function instance is first created
- **Pay-per-execution:** billing only for actual function run time

### SLA & Cloud Economics

Contracts and pricing govern cloud use.

- **SLA:** service level agreement defining guaranteed availability and performance
- **Pay-as-you-go:** paying only for resources consumed
- **CapEx vs OpEx:** cloud shifts capital expenditure to operating expenditure

## Unit 4: Cloud Platforms & Storage

### Major Cloud Platforms

Providers offer similar building blocks.

- **AWS:** Amazon Web Services, largest public cloud provider
- **Microsoft Azure:** Microsoft's cloud platform
- **Google Cloud Platform:** Google's cloud services such as Compute Engine and BigQuery

### Cloud Storage

Storage is offered as objects, blocks and files.

- **Object Storage:** data stored as objects with metadata, e.g. Amazon S3
- **Block Storage:** raw volumes attached to VMs
- **Data Replication:** copies stored across zones for durability

### MapReduce & Big Data in the Cloud

Clouds run distributed data processing.

- **MapReduce:** programming model with map and reduce phases
- **Hadoop:** open-source framework for distributed storage and processing
- **Data Lake:** central repository storing raw data at any scale

### Installing & Evaluating Cloud Platforms

Private clouds can be built with open-source stacks.

- **OpenStack:** open-source platform for building private clouds
- **Benchmarking:** measuring performance against a standard workload
- **Multi-tenancy:** multiple customers sharing the same infrastructure securely

## Unit 5: Cloud Security & Management

### Cloud Security Issues

Shared infrastructure raises new risks.

- **Shared Responsibility Model:** provider secures the cloud, customer secures what is in it
- **Data Breach:** unauthorised access to stored data
- **Insider Threat:** misuse by people with legitimate access

### Identity & Access Management

IAM controls who can do what.

- **IAM:** identity and access management service
- **Principle of Least Privilege:** grant only the permissions needed
- **Multi-factor Authentication:** login requiring two or more proofs of identity

### Disaster Recovery & Availability

Clouds design for failure.

- **Availability Zone:** isolated data-centre location within a region
- **RTO:** recovery time objective, maximum acceptable downtime
- **RPO:** recovery point objective, maximum acceptable data loss

### Cloud Monitoring & Governance

Operations teams monitor cost, compliance and performance.

- **Cloud Monitoring:** tracking metrics and logs of cloud resources
- **Vendor Lock-in:** difficulty moving workloads between providers
- **Compliance:** meeting legal and regulatory standards such as GDPR

## Standard Textbooks

- *Cloud Computing: Principles and Paradigms* — Buyya, Broberg & Goscinski
- *Mastering Cloud Computing* — Buyya, Vecchiola & Selvi
- *Cloud Computing: Concepts, Technology & Architecture* — Thomas Erl

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
