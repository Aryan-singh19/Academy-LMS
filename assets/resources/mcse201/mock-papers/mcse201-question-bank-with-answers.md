# MCSE-201 Advanced Machine Learning — Question Bank with Answer Hints

## Unit 1: Learning Theory

### Short answer (2-3 marks)

- **Q.** Define *PAC Learning*.  
  **Ans.** probably approximately correct learning
- **Q.** Define *Sample Complexity*.  
  **Ans.** examples needed to learn
- **Q.** Define *Hypothesis Class*.  
  **Ans.** set of candidate models
- **Q.** Define *VC Dimension*.  
  **Ans.** largest set the class can shatter
- **Q.** Define *Shattering*.  
  **Ans.** classifying all labelings of a set
- **Q.** Define *Generalisation Bound*.  
  **Ans.** test error bounded by training error plus complexity
- **Q.** Define *Bias-Variance Decomposition*.  
  **Ans.** error = bias² + variance + noise
- **Q.** Define *L2 Regularisation*.  
  **Ans.** penalises squared weights
- **Q.** Define *Early Stopping*.  
  **Ans.** stops training before overfitting
- **Q.** Define *Cross-validation*.  
  **Ans.** estimates generalisation error
- **Q.** Define *Hyperparameter Tuning*.  
  **Ans.** grid, random or Bayesian search
- **Q.** Define *Information Criteria*.  
  **Ans.** AIC and BIC penalise complexity

### Long answer (7 marks)

- **Q.** Explain *PAC Learning* in detail with a neat diagram.  
  **Key points:** Formal guarantees on learning. PAC Learning — probably approximately correct learning; Sample Complexity — examples needed to learn; Hypothesis Class — set of candidate models.
- **Q.** Explain *VC Dimension* in detail with a neat diagram.  
  **Key points:** Capacity of hypothesis classes. VC Dimension — largest set the class can shatter; Shattering — classifying all labelings of a set; Generalisation Bound — test error bounded by training error plus complexity.
- **Q.** Explain *Bias-Variance & Regularisation* in detail with a neat diagram.  
  **Key points:** Trade-offs in model complexity. Bias-Variance Decomposition — error = bias² + variance + noise; L2 Regularisation — penalises squared weights; Early Stopping — stops training before overfitting.
- **Q.** Explain *Model Selection* in detail with a neat diagram.  
  **Key points:** Choosing models fairly. Cross-validation — estimates generalisation error; Hyperparameter Tuning — grid, random or Bayesian search; Information Criteria — AIC and BIC penalise complexity.

## Unit 2: Kernel & Ensemble Methods

### Short answer (2-3 marks)

- **Q.** Define *Margin*.  
  **Ans.** distance from hyperplane to nearest points
- **Q.** Define *Soft Margin SVM*.  
  **Ans.** allows misclassification with slack
- **Q.** Define *Hinge Loss*.  
  **Ans.** max(0, 1 − y f(x))
- **Q.** Define *Kernel Trick*.  
  **Ans.** inner products in high-dimensional space implicitly
- **Q.** Define *RBF Kernel*.  
  **Ans.** exp(−γ‖x − y‖²)
- **Q.** Define *Mercer's Condition*.  
  **Ans.** kernel matrix positive semidefinite
- **Q.** Define *Bagging*.  
  **Ans.** trains models on bootstrap samples
- **Q.** Define *Boosting*.  
  **Ans.** sequentially focuses on errors
- **Q.** Define *Gradient Boosting*.  
  **Ans.** fits residuals with trees, e.g. XGBoost
- **Q.** Define *PCA*.  
  **Ans.** projects onto directions of maximum variance
- **Q.** Define *t-SNE*.  
  **Ans.** non-linear embedding for visualisation
- **Q.** Define *Autoencoder*.  
  **Ans.** neural network learning compact codes

### Long answer (7 marks)

- **Q.** Explain *Support Vector Machines* in detail with a neat diagram.  
  **Key points:** Maximum-margin classifiers. Margin — distance from hyperplane to nearest points; Soft Margin SVM — allows misclassification with slack; Hinge Loss — max(0, 1 − y f(x)).
- **Q.** Explain *Kernel Methods* in detail with a neat diagram.  
  **Key points:** Kernels compute similarity in feature space. Kernel Trick — inner products in high-dimensional space implicitly; RBF Kernel — exp(−γ‖x − y‖²); Mercer's Condition — kernel matrix positive semidefinite.
- **Q.** Explain *Ensemble Learning* in detail with a neat diagram.  
  **Key points:** Combining models improves accuracy. Bagging — trains models on bootstrap samples; Boosting — sequentially focuses on errors; Gradient Boosting — fits residuals with trees, e.g. XGBoost.
- **Q.** Explain *Dimensionality Reduction* in detail with a neat diagram.  
  **Key points:** Reduce features while keeping structure. PCA — projects onto directions of maximum variance; t-SNE — non-linear embedding for visualisation; Autoencoder — neural network learning compact codes.

## Unit 3: Probabilistic Models

### Short answer (2-3 marks)

- **Q.** Define *Posterior*.  
  **Ans.** P(θ given data)
- **Q.** Define *Conjugate Prior*.  
  **Ans.** prior giving posterior of same family
- **Q.** Define *Bayesian Model Averaging*.  
  **Ans.** averages over models
- **Q.** Define *Bayesian Network*.  
  **Ans.** directed acyclic probabilistic model
- **Q.** Define *Markov Random Field*.  
  **Ans.** undirected graphical model
- **Q.** Define *Belief Propagation*.  
  **Ans.** message passing for inference
- **Q.** Define *EM Algorithm*.  
  **Ans.** alternates expectation and maximisation
- **Q.** Define *Gaussian Mixture Model*.  
  **Ans.** mixture of Gaussians
- **Q.** Define *Variational Inference*.  
  **Ans.** approximates posterior by optimisation
- **Q.** Define *Gaussian Process*.  
  **Ans.** any finite set of values is jointly Gaussian
- **Q.** Define *Covariance Function*.  
  **Ans.** kernel defining smoothness
- **Q.** Define *Predictive Uncertainty*.  
  **Ans.** variance of GP prediction

### Long answer (7 marks)

- **Q.** Explain *Bayesian Learning* in detail with a neat diagram.  
  **Key points:** Uncertainty over parameters. Posterior — P(θ given data); Conjugate Prior — prior giving posterior of same family; Bayesian Model Averaging — averages over models.
- **Q.** Explain *Graphical Models* in detail with a neat diagram.  
  **Key points:** Graphs encode dependencies. Bayesian Network — directed acyclic probabilistic model; Markov Random Field — undirected graphical model; Belief Propagation — message passing for inference.
- **Q.** Explain *Latent Variable Models* in detail with a neat diagram.  
  **Key points:** Hidden variables explain data. EM Algorithm — alternates expectation and maximisation; Gaussian Mixture Model — mixture of Gaussians; Variational Inference — approximates posterior by optimisation.
- **Q.** Explain *Gaussian Processes* in detail with a neat diagram.  
  **Key points:** Distributions over functions. Gaussian Process — any finite set of values is jointly Gaussian; Covariance Function — kernel defining smoothness; Predictive Uncertainty — variance of GP prediction.

## Unit 4: Deep Learning

### Short answer (2-3 marks)

- **Q.** Define *Adam*.  
  **Ans.** adaptive moment estimation optimiser
- **Q.** Define *Batch Normalisation*.  
  **Ans.** normalises layer activations
- **Q.** Define *Learning Rate Schedule*.  
  **Ans.** varies learning rate during training
- **Q.** Define *CNN*.  
  **Ans.** convolution and pooling layers
- **Q.** Define *LSTM*.  
  **Ans.** gated recurrent network
- **Q.** Define *Residual Connection*.  
  **Ans.** skip connection easing training
- **Q.** Define *Self-attention*.  
  **Ans.** softmax(QKᵀ/√d)V
- **Q.** Define *Multi-head Attention*.  
  **Ans.** several attention heads in parallel
- **Q.** Define *Pretraining and Fine-tuning*.  
  **Ans.** learn general then adapt
- **Q.** Define *Dropout*.  
  **Ans.** randomly drops units during training
- **Q.** Define *Data Augmentation*.  
  **Ans.** synthetic training variations
- **Q.** Define *Weight Decay*.  
  **Ans.** L2 penalty on weights

### Long answer (7 marks)

- **Q.** Explain *Optimisation for Deep Networks* in detail with a neat diagram.  
  **Key points:** Training large networks. Adam — adaptive moment estimation optimiser; Batch Normalisation — normalises layer activations; Learning Rate Schedule — varies learning rate during training.
- **Q.** Explain *CNNs & Sequence Models* in detail with a neat diagram.  
  **Key points:** Architectures for images and sequences. CNN — convolution and pooling layers; LSTM — gated recurrent network; Residual Connection — skip connection easing training.
- **Q.** Explain *Transformers* in detail with a neat diagram.  
  **Key points:** Attention-based architectures. Self-attention — softmax(QKᵀ/√d)V; Multi-head Attention — several attention heads in parallel; Pretraining and Fine-tuning — learn general then adapt.
- **Q.** Explain *Regularising Deep Networks* in detail with a neat diagram.  
  **Key points:** Preventing overfitting in deep models. Dropout — randomly drops units during training; Data Augmentation — synthetic training variations; Weight Decay — L2 penalty on weights.

## Unit 5: Generative Models & Reinforcement Learning

### Short answer (2-3 marks)

- **Q.** Define *VAE*.  
  **Ans.** variational autoencoder with latent sampling
- **Q.** Define *GAN*.  
  **Ans.** generator and discriminator in adversarial game
- **Q.** Define *Diffusion Model*.  
  **Ans.** learns to reverse a noising process
- **Q.** Define *MDP*.  
  **Ans.** states, actions, transitions and rewards
- **Q.** Define *Bellman Equation*.  
  **Ans.** value = reward + discounted future value
- **Q.** Define *Q-learning*.  
  **Ans.** off-policy temporal difference control
- **Q.** Define *DQN*.  
  **Ans.** deep Q-network with replay buffer
- **Q.** Define *Policy Gradient*.  
  **Ans.** optimises policy directly
- **Q.** Define *PPO*.  
  **Ans.** proximal policy optimisation with clipped objective
- **Q.** Define *Fairness Metric*.  
  **Ans.** e.g. demographic parity
- **Q.** Define *SHAP*.  
  **Ans.** explains predictions using Shapley values
- **Q.** Define *Model Card*.  
  **Ans.** documentation of model use and limits

### Long answer (7 marks)

- **Q.** Explain *Generative Models* in detail with a neat diagram.  
  **Key points:** Models that create data. VAE — variational autoencoder with latent sampling; GAN — generator and discriminator in adversarial game; Diffusion Model — learns to reverse a noising process.
- **Q.** Explain *Reinforcement Learning Basics* in detail with a neat diagram.  
  **Key points:** Agents learn from rewards. MDP — states, actions, transitions and rewards; Bellman Equation — value = reward + discounted future value; Q-learning — off-policy temporal difference control.
- **Q.** Explain *Deep Reinforcement Learning* in detail with a neat diagram.  
  **Key points:** Neural networks approximate value and policy. DQN — deep Q-network with replay buffer; Policy Gradient — optimises policy directly; PPO — proximal policy optimisation with clipped objective.
- **Q.** Explain *Responsible ML* in detail with a neat diagram.  
  **Key points:** ML must be fair and explainable. Fairness Metric — e.g. demographic parity; SHAP — explains predictions using Shapley values; Model Card — documentation of model use and limits.

