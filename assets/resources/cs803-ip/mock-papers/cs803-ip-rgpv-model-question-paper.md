# CS-803(A) Image Processing & Computer Vision — RGPV Model Question Paper

> Practice paper generated from the RGPV syllabus by Academy LMS. Not an official RGPV paper. Applies to: CSE Sem 8: CS-803(A) · ECE Sem 8: EC-803(B).

**Time: 3 Hours | Maximum Marks: 70**

*Note: Attempt any five questions. All questions carry equal marks. Draw neat diagrams wherever necessary.*

## Set A

**Q1.** *(Unit 1)*

(a) Define Pixel. Explain its role in Image Formation & Representation with a suitable example or diagram. **[7]**

(b) Explain Resolution & Colour Models in detail. Differentiate between Spatial Resolution and RGB Model. **[7]**

**Q2.** *(Unit 2)*

(a) Define Histogram Equalisation. Explain its role in Histogram Processing with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Spatial Filtering. Bring out the significance of Mean Filter and Median Filter. **[7]**

**Q3.** *(Unit 3)*

(a) Define Lossy Compression. Explain its role in Image Compression Fundamentals with a suitable example or diagram. **[7]**

(b) Explain JPEG & Transform Coding in detail. Differentiate between DCT and Run-length Encoding. **[7]**

**Q4.** *(Unit 4)*

(a) Define Hough Transform. Explain its role in Hough Transform with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Edge Detection. Bring out the significance of Sobel Operator and Canny Edge Detector. **[7]**

**Q5.** *(Unit 5)*

(a) Define SIFT. Explain its role in Feature Extraction with a suitable example or diagram. **[7]**

(b) Explain Pattern Recognition Basics in detail. Differentiate between Feature Vector and k-NN Classifier. **[7]**

**Q6.** *(Unit 1)*

(a) Define Recognition. Explain its role in Image Processing Pipeline with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Image Formation & Representation. Bring out the significance of Pixel and Sampling. **[7]**

**Q7.** *(Unit 3)*

(a) Define Gaussian Noise. Explain its role in Noise Models with a suitable example or diagram. **[7]**

(b) Explain Restoration Filters in detail. Differentiate between Inverse Filtering and Wiener Filter. **[7]**

**Q8.** *(Unit 5)*

(a) Define k-NN Classifier. Explain its role in Pattern Recognition Basics with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss CNNs for Vision. Bring out the significance of Convolutional Neural Network and Transfer Learning. **[7]**

## Set B

**Q1.** *(Unit 1)*

(a) Define RGB Model. Explain its role in Resolution & Colour Models with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Pixel Relationships. Bring out the significance of 4-Neighbourhood and 8-Connectivity. **[7]**

**Q2.** *(Unit 2)*

(a) Define Laplacian Filter. Explain its role in Spatial Filtering with a suitable example or diagram. **[7]**

(b) Explain Frequency Domain Filtering in detail. Differentiate between 2D DFT and Low-pass Filter. **[7]**

**Q3.** *(Unit 3)*

(a) Define DCT. Explain its role in JPEG & Transform Coding with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Noise Models. Bring out the significance of Gaussian Noise and Salt-and-Pepper Noise. **[7]**

**Q4.** *(Unit 4)*

(a) Define Canny Edge Detector. Explain its role in Edge Detection with a suitable example or diagram. **[7]**

(b) Explain Thresholding & Region-based Segmentation in detail. Differentiate between Global Thresholding and Otsu's Method. **[7]**

**Q5.** *(Unit 5)*

(a) Define Template Matching. Explain its role in Pattern Recognition Basics with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss CNNs for Vision. Bring out the significance of Convolutional Neural Network and Transfer Learning. **[7]**

**Q6.** *(Unit 2)*

(a) Define Image Negative. Explain its role in Intensity Transformations with a suitable example or diagram. **[7]**

(b) Explain Histogram Processing in detail. Differentiate between Histogram and Histogram Equalisation. **[7]**

**Q7.** *(Unit 4)*

(a) Define Otsu's Method. Explain its role in Thresholding & Region-based Segmentation with a suitable example or diagram. **[7]**

(b) With a neat sketch, discuss Morphological Operations. Bring out the significance of Dilation and Erosion. **[7]**

**Q8.** *(Unit 1)*

(a) Define Euclidean Distance. Explain its role in Pixel Relationships with a suitable example or diagram. **[7]**

(b) Explain Image Processing Pipeline in detail. Differentiate between Image Acquisition and Preprocessing. **[7]**

## Answer Hints (Set A)

- **Q1(a):** Pixel: smallest element of a digital image
- **Q1(b):** Spatial Resolution: number of pixels per unit length | RGB Model: additive colour model using red, green and blue | HSI Model: hue, saturation and intensity, closer to human perception
- **Q2(a):** Histogram Equalisation: spreads intensities to improve global contrast
- **Q2(b):** Mean Filter: averaging mask that smooths noise and blurs edges | Median Filter: replaces pixel by neighbourhood median; removes salt-and-pepper noise | Laplacian Filter: second-derivative mask used for sharpening
- **Q3(a):** Lossy Compression: some information discarded, e.g. JPEG
- **Q3(b):** DCT: discrete cosine transform used in JPEG | Run-length Encoding: stores runs of identical values as value-count pairs | Compression Ratio: original size divided by compressed size
- **Q4(a):** Hough Transform: maps edge points to parameter space to find lines or circles
- **Q4(b):** Sobel Operator: gradient mask emphasising horizontal or vertical edges | Canny Edge Detector: multi-stage detector with non-maximum suppression and hysteresis | Gradient Magnitude: strength of intensity change at a pixel
- **Q5(a):** SIFT: scale-invariant feature transform for keypoint description
- **Q5(b):** Feature Vector: list of numeric measurements describing an object | k-NN Classifier: assigns the majority class of the k nearest neighbours | Template Matching: compares image regions with a stored template
- **Q6(a):** Recognition: assigning a label to an object based on its features
- **Q6(b):** Pixel: smallest element of a digital image | Sampling: digitising spatial coordinates | Quantisation: digitising intensity into discrete levels
- **Q7(a):** Gaussian Noise: noise with normally distributed intensity
- **Q7(b):** Inverse Filtering: divides by the degradation function in frequency domain | Wiener Filter: minimum mean square error restoration | Adaptive Filter: filter whose behaviour changes with local statistics
- **Q8(a):** k-NN Classifier: assigns the majority class of the k nearest neighbours
- **Q8(b):** Convolutional Neural Network: network with convolution and pooling layers for images | Transfer Learning: reusing a pretrained network for a new task | Data Augmentation: creating training variants by flipping, cropping or rotating

## Recommended Books

- *Digital Image Processing* — Gonzalez & Woods
- *Computer Vision: Algorithms and Applications* — Richard Szeliski
- *Fundamentals of Digital Image Processing* — Anil K. Jain
