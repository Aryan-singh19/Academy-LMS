# MCSE-201 Advanced Machine Learning — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: M.Tech CSE Sem 2: MCSE-201.

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define PAC Learning. Explain its role in PAC Learning with a suitable example or diagram. **[7]**

(b) Explain VC Dimension in detail. Differentiate between VC Dimension and Shattering. **[7]**

**Q2.** *(Unit 2)*

(a) Define RBF Kernel. Explain its role in Kernel Methods with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Ensemble Learning. Bring out the significance of Bagging and Boosting. **[7]**

**Q3.** *(Unit 3)*

(a) Define Variational Inference. Explain its role in Latent Variable Models with a suitable example or diagram. **[7]**

(b) Explain Gaussian Processes in detail. Differentiate between Gaussian Process and Covariance Function. **[7]**

**Q4.** *(Unit 4)*

(a) Define Dropout. Explain its role in Regularising Deep Networks with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Optimisation for Deep Networks. Bring out the significance of Adam and Batch Normalisation. **[7]**

**Q5.** *(Unit 5)*

(a) Define GAN. Explain its role in Generative Models with a suitable example or diagram. **[7]**

(b) Explain Reinforcement Learning Basics in detail. Differentiate between MDP and Bellman Equation. **[7]**

**Q6.** *(Unit 1)*

(a) Define Information Criteria. Explain its role in Model Selection with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss PAC Learning. Bring out the significance of PAC Learning and Sample Complexity. **[7]**

**Q7.** *(Unit 3)*

(a) Define Posterior. Explain its role in Bayesian Learning with a suitable example or diagram. **[7]**

(b) Explain Graphical Models in detail. Differentiate between Bayesian Network and Markov Random Field. **[7]**

**Q8.** *(Unit 5)*

(a) Define Bellman Equation. Explain its role in Reinforcement Learning Basics with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Deep Reinforcement Learning. Bring out the significance of DQN and Policy Gradient. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define Shattering. Explain its role in VC Dimension with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Bias-Variance & Regularisation. Bring out the significance of Bias-Variance Decomposition and L2 Regularisation. **[7]**

**Q2.** *(Unit 2)*

(a) Define Gradient Boosting. Explain its role in Ensemble Learning with a suitable example or diagram. **[7]**

(b) Explain Dimensionality Reduction in detail. Differentiate between PCA and t-SNE. **[7]**

**Q3.** *(Unit 3)*

(a) Define Gaussian Process. Explain its role in Gaussian Processes with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Bayesian Learning. Bring out the significance of Posterior and Conjugate Prior. **[7]**

**Q4.** *(Unit 4)*

(a) Define Batch Normalisation. Explain its role in Optimisation for Deep Networks with a suitable example or diagram. **[7]**

(b) Explain CNNs & Sequence Models in detail. Differentiate between CNN and LSTM. **[7]**

**Q5.** *(Unit 5)*

(a) Define Q-learning. Explain its role in Reinforcement Learning Basics with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Deep Reinforcement Learning. Bring out the significance of DQN and Policy Gradient. **[7]**

**Q6.** *(Unit 2)*

(a) Define Margin. Explain its role in Support Vector Machines with a suitable example or diagram. **[7]**

(b) Explain Kernel Methods in detail. Differentiate between Kernel Trick and RBF Kernel. **[7]**

**Q7.** *(Unit 4)*

(a) Define LSTM. Explain its role in CNNs & Sequence Models with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Transformers. Bring out the significance of Self-attention and Multi-head Attention. **[7]**

**Q8.** *(Unit 1)*

(a) Define Early Stopping. Explain its role in Bias-Variance & Regularisation with a suitable example or diagram. **[7]**

(b) Explain Model Selection in detail. Differentiate between Cross-validation and Hyperparameter Tuning. **[7]**

## Answer Hints (Set A)

- **Q1(a):** PAC Learning: probably approximately correct learning
- **Q1(b):** VC Dimension: largest set the class can shatter | Shattering: classifying all labelings of a set | Generalisation Bound: test error bounded by training error plus complexity
- **Q2(a):** RBF Kernel: exp(−γ‖x − y‖²)
- **Q2(b):** Bagging: trains models on bootstrap samples | Boosting: sequentially focuses on errors | Gradient Boosting: fits residuals with trees, e.g. XGBoost
- **Q3(a):** Variational Inference: approximates posterior by optimisation
- **Q3(b):** Gaussian Process: any finite set of values is jointly Gaussian | Covariance Function: kernel defining smoothness | Predictive Uncertainty: variance of GP prediction
- **Q4(a):** Dropout: randomly drops units during training
- **Q4(b):** Adam: adaptive moment estimation optimiser | Batch Normalisation: normalises layer activations | Learning Rate Schedule: varies learning rate during training
- **Q5(a):** GAN: generator and discriminator in adversarial game
- **Q5(b):** MDP: states, actions, transitions and rewards | Bellman Equation: value = reward + discounted future value | Q-learning: off-policy temporal difference control
- **Q6(a):** Information Criteria: AIC and BIC penalise complexity
- **Q6(b):** PAC Learning: probably approximately correct learning | Sample Complexity: examples needed to learn | Hypothesis Class: set of candidate models
- **Q7(a):** Posterior: P(θ given data)
- **Q7(b):** Bayesian Network: directed acyclic probabilistic model | Markov Random Field: undirected graphical model | Belief Propagation: message passing for inference
- **Q8(a):** Bellman Equation: value = reward + discounted future value
- **Q8(b):** DQN: deep Q-network with replay buffer | Policy Gradient: optimises policy directly | PPO: proximal policy optimisation with clipped objective

## Recommended Books

- *Pattern Recognition and Machine Learning* — Christopher Bishop
- *Deep Learning* — Goodfellow, Bengio & Courville
- *Reinforcement Learning: An Introduction* — Sutton & Barto
