# CS-803(A) Image Processing & Computer Vision — Unit-wise Study Notes

> Digital image fundamentals, enhancement, filtering, restoration, segmentation, morphology, features and recognition.

## Unit 1: Digital Image Fundamentals

### Image Formation & Representation

A digital image is a 2D array of intensity values.

- **Pixel:** smallest element of a digital image
- **Sampling:** digitising spatial coordinates
- **Quantisation:** digitising intensity into discrete levels

### Resolution & Colour Models

Images vary in detail and colour encoding.

- **Spatial Resolution:** number of pixels per unit length
- **RGB Model:** additive colour model using red, green and blue
- **HSI Model:** hue, saturation and intensity, closer to human perception

### Pixel Relationships

Neighbourhoods and connectivity define regions.

- **4-Neighbourhood:** horizontal and vertical neighbours of a pixel
- **8-Connectivity:** pixels connected through any of their 8 neighbours
- **Euclidean Distance:** straight-line distance between two pixels

### Image Processing Pipeline

Vision systems move from acquisition to understanding.

- **Image Acquisition:** capturing an image with a sensor
- **Preprocessing:** noise removal and enhancement before analysis
- **Recognition:** assigning a label to an object based on its features

## Unit 2: Image Enhancement

### Intensity Transformations

Point operations change pixel values independently.

- **Image Negative:** s = L − 1 − r
- **Log Transformation:** expands dark values and compresses bright ones
- **Gamma Correction:** power-law transform s = c·r^γ

### Histogram Processing

Histograms describe the intensity distribution.

- **Histogram:** count of pixels at each intensity level
- **Histogram Equalisation:** spreads intensities to improve global contrast
- **Histogram Matching:** transforms an image to a specified histogram

### Spatial Filtering

Masks convolve with the image to smooth or sharpen.

- **Mean Filter:** averaging mask that smooths noise and blurs edges
- **Median Filter:** replaces pixel by neighbourhood median; removes salt-and-pepper noise
- **Laplacian Filter:** second-derivative mask used for sharpening

### Frequency Domain Filtering

Fourier transforms enable filtering by frequency.

- **2D DFT:** transforms an image into frequency components
- **Low-pass Filter:** passes low frequencies, smoothing the image
- **Butterworth Filter:** smooth-transition frequency filter avoiding ringing

## Unit 3: Restoration & Compression

### Noise Models

Restoration starts by modelling the degradation.

- **Gaussian Noise:** noise with normally distributed intensity
- **Salt-and-Pepper Noise:** random white and black pixels
- **Degradation Model:** g(x,y) = h(x,y) * f(x,y) + η(x,y)

### Restoration Filters

Filters estimate the original image from a degraded one.

- **Inverse Filtering:** divides by the degradation function in frequency domain
- **Wiener Filter:** minimum mean square error restoration
- **Adaptive Filter:** filter whose behaviour changes with local statistics

### Image Compression Fundamentals

Compression removes redundancy to save space.

- **Coding Redundancy:** using more bits than needed for symbols
- **Lossless Compression:** original image exactly recoverable, e.g. PNG
- **Lossy Compression:** some information discarded, e.g. JPEG

### JPEG & Transform Coding

Transform coding packs energy into few coefficients.

- **DCT:** discrete cosine transform used in JPEG
- **Run-length Encoding:** stores runs of identical values as value-count pairs
- **Compression Ratio:** original size divided by compressed size

## Unit 4: Segmentation & Morphology

### Edge Detection

Edges mark sharp intensity changes.

- **Sobel Operator:** gradient mask emphasising horizontal or vertical edges
- **Canny Edge Detector:** multi-stage detector with non-maximum suppression and hysteresis
- **Gradient Magnitude:** strength of intensity change at a pixel

### Thresholding & Region-based Segmentation

Segmentation divides an image into meaningful regions.

- **Global Thresholding:** single threshold separates object and background
- **Otsu's Method:** chooses threshold maximising between-class variance
- **Region Growing:** grows regions from seeds by adding similar neighbours

### Morphological Operations

Morphology processes shapes with structuring elements.

- **Dilation:** expands objects, filling small holes
- **Erosion:** shrinks objects, removing small specks
- **Opening:** erosion followed by dilation; removes small objects

### Hough Transform

Hough transform detects parametric shapes.

- **Hough Transform:** maps edge points to parameter space to find lines or circles
- **Accumulator Array:** votes in parameter space; peaks indicate shapes
- **Line Parameterisation:** ρ = x cos θ + y sin θ

## Unit 5: Features & Recognition

### Feature Extraction

Features describe image content compactly.

- **Corner Detection:** finding points with strong change in two directions, e.g. Harris
- **SIFT:** scale-invariant feature transform for keypoint description
- **HOG:** histogram of oriented gradients descriptor for object detection

### Pattern Recognition Basics

Classifiers assign classes to feature vectors.

- **Feature Vector:** list of numeric measurements describing an object
- **k-NN Classifier:** assigns the majority class of the k nearest neighbours
- **Template Matching:** compares image regions with a stored template

### CNNs for Vision

Deep networks learn features directly from pixels.

- **Convolutional Neural Network:** network with convolution and pooling layers for images
- **Transfer Learning:** reusing a pretrained network for a new task
- **Data Augmentation:** creating training variants by flipping, cropping or rotating

### Vision Applications

Vision powers many real-world systems.

- **Object Detection:** locating and classifying multiple objects, e.g. YOLO
- **Face Recognition:** identifying people from facial features
- **OCR:** optical character recognition converting text images to text

## Standard Textbooks

- *Digital Image Processing* — Gonzalez & Woods
- *Computer Vision: Algorithms and Applications* — Richard Szeliski
- *Fundamentals of Digital Image Processing* — Anil K. Jain

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
