# CS-601: Machine Learning — Core Formulas & Algorithms Cheat Sheet

## 1. Linear Regression
- **Hypothesis:** $h_\theta(x) = \theta^T x = \theta_0 + \theta_1 x_1 + \dots + \theta_n x_n$
- **Cost Function (Mean Squared Error):**
  $$J(\theta) = \frac{1}{2m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})^2$$
- **Gradient Descent Update:**
  $$\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)}$$
- **Normal Equation (Closed-form solution):**
  $$\theta = (X^T X)^{-1} X^T y$$

## 2. Logistic Regression & Classification
- **Sigmoid Function:** $g(z) = \frac{1}{1 + e^{-z}}$
- **Hypothesis:** $h_\theta(x) = g(\theta^T x) = P(y=1 \mid x; \theta)$
- **Cross-Entropy Loss (Log Loss):**
  $$J(\theta) = -\frac{1}{m} \sum_{i=1}^m \left[ y^{(i)} \log(h_\theta(x^{(i)})) + (1 - y^{(i)}) \log(1 - h_\theta(x^{(i)})) \right]$$

## 3. Evaluation Metrics
- **Accuracy:** $\frac{TP + TN}{TP + TN + FP + FN}$
- **Precision:** $\frac{TP}{TP + FP}$ (Quality of positive predictions)
- **Recall (Sensitivity):** $\frac{TP}{TP + FN}$ (Completeness of positive predictions)
- **F1-Score:** $2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$
