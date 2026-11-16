# MCSE-201 Advanced Machine Learning — Unit-wise Study Notes

> Learning theory, kernel methods, probabilistic models, deep learning, generative models and reinforcement learning.

## Unit 1: Learning Theory

### PAC Learning

Formal guarantees on learning.

- **PAC Learning:** probably approximately correct learning
- **Sample Complexity:** examples needed to learn
- **Hypothesis Class:** set of candidate models

### VC Dimension

Capacity of hypothesis classes.

- **VC Dimension:** largest set the class can shatter
- **Shattering:** classifying all labelings of a set
- **Generalisation Bound:** test error bounded by training error plus complexity

### Bias-Variance & Regularisation

Trade-offs in model complexity.

- **Bias-Variance Decomposition:** error = bias² + variance + noise
- **L2 Regularisation:** penalises squared weights
- **Early Stopping:** stops training before overfitting

### Model Selection

Choosing models fairly.

- **Cross-validation:** estimates generalisation error
- **Hyperparameter Tuning:** grid, random or Bayesian search
- **Information Criteria:** AIC and BIC penalise complexity

## Unit 2: Kernel & Ensemble Methods

### Support Vector Machines

Maximum-margin classifiers.

- **Margin:** distance from hyperplane to nearest points
- **Soft Margin SVM:** allows misclassification with slack
- **Hinge Loss:** max(0, 1 − y f(x))

### Kernel Methods

Kernels compute similarity in feature space.

- **Kernel Trick:** inner products in high-dimensional space implicitly
- **RBF Kernel:** exp(−γ‖x − y‖²)
- **Mercer's Condition:** kernel matrix positive semidefinite

### Ensemble Learning

Combining models improves accuracy.

- **Bagging:** trains models on bootstrap samples
- **Boosting:** sequentially focuses on errors
- **Gradient Boosting:** fits residuals with trees, e.g. XGBoost

### Dimensionality Reduction

Reduce features while keeping structure.

- **PCA:** projects onto directions of maximum variance
- **t-SNE:** non-linear embedding for visualisation
- **Autoencoder:** neural network learning compact codes

## Unit 3: Probabilistic Models

### Bayesian Learning

Uncertainty over parameters.

- **Posterior:** P(θ given data)
- **Conjugate Prior:** prior giving posterior of same family
- **Bayesian Model Averaging:** averages over models

### Graphical Models

Graphs encode dependencies.

- **Bayesian Network:** directed acyclic probabilistic model
- **Markov Random Field:** undirected graphical model
- **Belief Propagation:** message passing for inference

### Latent Variable Models

Hidden variables explain data.

- **EM Algorithm:** alternates expectation and maximisation
- **Gaussian Mixture Model:** mixture of Gaussians
- **Variational Inference:** approximates posterior by optimisation

### Gaussian Processes

Distributions over functions.

- **Gaussian Process:** any finite set of values is jointly Gaussian
- **Covariance Function:** kernel defining smoothness
- **Predictive Uncertainty:** variance of GP prediction

## Unit 4: Deep Learning

### Optimisation for Deep Networks

Training large networks.

- **Adam:** adaptive moment estimation optimiser
- **Batch Normalisation:** normalises layer activations
- **Learning Rate Schedule:** varies learning rate during training

### CNNs & Sequence Models

Architectures for images and sequences.

- **CNN:** convolution and pooling layers
- **LSTM:** gated recurrent network
- **Residual Connection:** skip connection easing training

### Transformers

Attention-based architectures.

- **Self-attention:** softmax(QKᵀ/√d)V
- **Multi-head Attention:** several attention heads in parallel
- **Pretraining and Fine-tuning:** learn general then adapt

### Regularising Deep Networks

Preventing overfitting in deep models.

- **Dropout:** randomly drops units during training
- **Data Augmentation:** synthetic training variations
- **Weight Decay:** L2 penalty on weights

## Unit 5: Generative Models & Reinforcement Learning

### Generative Models

Models that create data.

- **VAE:** variational autoencoder with latent sampling
- **GAN:** generator and discriminator in adversarial game
- **Diffusion Model:** learns to reverse a noising process

### Reinforcement Learning Basics

Agents learn from rewards.

- **MDP:** states, actions, transitions and rewards
- **Bellman Equation:** value = reward + discounted future value
- **Q-learning:** off-policy temporal difference control

### Deep Reinforcement Learning

Neural networks approximate value and policy.

- **DQN:** deep Q-network with replay buffer
- **Policy Gradient:** optimises policy directly
- **PPO:** proximal policy optimisation with clipped objective

### Responsible ML

ML must be fair and explainable.

- **Fairness Metric:** e.g. demographic parity
- **SHAP:** explains predictions using Shapley values
- **Model Card:** documentation of model use and limits

## Standard Textbooks

- *Pattern Recognition and Machine Learning* — Christopher Bishop
- *Deep Learning* — Goodfellow, Bengio & Courville
- *Reinforcement Learning: An Introduction* — Sutton & Barto

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
