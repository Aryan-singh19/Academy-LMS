# CS-803(A) Image Processing & Computer Vision — Question Bank with Answer Hints

## Unit 1: Digital Image Fundamentals

### Short answer (2-3 marks)

- **Q.** Define *Pixel*.  
  **Ans.** smallest element of a digital image
- **Q.** Define *Sampling*.  
  **Ans.** digitising spatial coordinates
- **Q.** Define *Quantisation*.  
  **Ans.** digitising intensity into discrete levels
- **Q.** Define *Spatial Resolution*.  
  **Ans.** number of pixels per unit length
- **Q.** Define *RGB Model*.  
  **Ans.** additive colour model using red, green and blue
- **Q.** Define *HSI Model*.  
  **Ans.** hue, saturation and intensity, closer to human perception
- **Q.** Define *4-Neighbourhood*.  
  **Ans.** horizontal and vertical neighbours of a pixel
- **Q.** Define *8-Connectivity*.  
  **Ans.** pixels connected through any of their 8 neighbours
- **Q.** Define *Euclidean Distance*.  
  **Ans.** straight-line distance between two pixels
- **Q.** Define *Image Acquisition*.  
  **Ans.** capturing an image with a sensor
- **Q.** Define *Preprocessing*.  
  **Ans.** noise removal and enhancement before analysis
- **Q.** Define *Recognition*.  
  **Ans.** assigning a label to an object based on its features

### Long answer (7 marks)

- **Q.** Explain *Image Formation & Representation* in detail with a neat diagram.  
  **Key points:** A digital image is a 2D array of intensity values. Pixel — smallest element of a digital image; Sampling — digitising spatial coordinates; Quantisation — digitising intensity into discrete levels.
- **Q.** Explain *Resolution & Colour Models* in detail with a neat diagram.  
  **Key points:** Images vary in detail and colour encoding. Spatial Resolution — number of pixels per unit length; RGB Model — additive colour model using red, green and blue; HSI Model — hue, saturation and intensity, closer to human perception.
- **Q.** Explain *Pixel Relationships* in detail with a neat diagram.  
  **Key points:** Neighbourhoods and connectivity define regions. 4-Neighbourhood — horizontal and vertical neighbours of a pixel; 8-Connectivity — pixels connected through any of their 8 neighbours; Euclidean Distance — straight-line distance between two pixels.
- **Q.** Explain *Image Processing Pipeline* in detail with a neat diagram.  
  **Key points:** Vision systems move from acquisition to understanding. Image Acquisition — capturing an image with a sensor; Preprocessing — noise removal and enhancement before analysis; Recognition — assigning a label to an object based on its features.

## Unit 2: Image Enhancement

### Short answer (2-3 marks)

- **Q.** Define *Image Negative*.  
  **Ans.** s = L − 1 − r
- **Q.** Define *Log Transformation*.  
  **Ans.** expands dark values and compresses bright ones
- **Q.** Define *Gamma Correction*.  
  **Ans.** power-law transform s = c·r^γ
- **Q.** Define *Histogram*.  
  **Ans.** count of pixels at each intensity level
- **Q.** Define *Histogram Equalisation*.  
  **Ans.** spreads intensities to improve global contrast
- **Q.** Define *Histogram Matching*.  
  **Ans.** transforms an image to a specified histogram
- **Q.** Define *Mean Filter*.  
  **Ans.** averaging mask that smooths noise and blurs edges
- **Q.** Define *Median Filter*.  
  **Ans.** replaces pixel by neighbourhood median; removes salt-and-pepper noise
- **Q.** Define *Laplacian Filter*.  
  **Ans.** second-derivative mask used for sharpening
- **Q.** Define *2D DFT*.  
  **Ans.** transforms an image into frequency components
- **Q.** Define *Low-pass Filter*.  
  **Ans.** passes low frequencies, smoothing the image
- **Q.** Define *Butterworth Filter*.  
  **Ans.** smooth-transition frequency filter avoiding ringing

### Long answer (7 marks)

- **Q.** Explain *Intensity Transformations* in detail with a neat diagram.  
  **Key points:** Point operations change pixel values independently. Image Negative — s = L − 1 − r; Log Transformation — expands dark values and compresses bright ones; Gamma Correction — power-law transform s = c·r^γ.
- **Q.** Explain *Histogram Processing* in detail with a neat diagram.  
  **Key points:** Histograms describe the intensity distribution. Histogram — count of pixels at each intensity level; Histogram Equalisation — spreads intensities to improve global contrast; Histogram Matching — transforms an image to a specified histogram.
- **Q.** Explain *Spatial Filtering* in detail with a neat diagram.  
  **Key points:** Masks convolve with the image to smooth or sharpen. Mean Filter — averaging mask that smooths noise and blurs edges; Median Filter — replaces pixel by neighbourhood median; removes salt-and-pepper noise; Laplacian Filter — second-derivative mask used for sharpening.
- **Q.** Explain *Frequency Domain Filtering* in detail with a neat diagram.  
  **Key points:** Fourier transforms enable filtering by frequency. 2D DFT — transforms an image into frequency components; Low-pass Filter — passes low frequencies, smoothing the image; Butterworth Filter — smooth-transition frequency filter avoiding ringing.

## Unit 3: Restoration & Compression

### Short answer (2-3 marks)

- **Q.** Define *Gaussian Noise*.  
  **Ans.** noise with normally distributed intensity
- **Q.** Define *Salt-and-Pepper Noise*.  
  **Ans.** random white and black pixels
- **Q.** Define *Degradation Model*.  
  **Ans.** g(x,y) = h(x,y) * f(x,y) + η(x,y)
- **Q.** Define *Inverse Filtering*.  
  **Ans.** divides by the degradation function in frequency domain
- **Q.** Define *Wiener Filter*.  
  **Ans.** minimum mean square error restoration
- **Q.** Define *Adaptive Filter*.  
  **Ans.** filter whose behaviour changes with local statistics
- **Q.** Define *Coding Redundancy*.  
  **Ans.** using more bits than needed for symbols
- **Q.** Define *Lossless Compression*.  
  **Ans.** original image exactly recoverable, e.g. PNG
- **Q.** Define *Lossy Compression*.  
  **Ans.** some information discarded, e.g. JPEG
- **Q.** Define *DCT*.  
  **Ans.** discrete cosine transform used in JPEG
- **Q.** Define *Run-length Encoding*.  
  **Ans.** stores runs of identical values as value-count pairs
- **Q.** Define *Compression Ratio*.  
  **Ans.** original size divided by compressed size

### Long answer (7 marks)

- **Q.** Explain *Noise Models* in detail with a neat diagram.  
  **Key points:** Restoration starts by modelling the degradation. Gaussian Noise — noise with normally distributed intensity; Salt-and-Pepper Noise — random white and black pixels; Degradation Model — g(x,y) = h(x,y) * f(x,y) + η(x,y).
- **Q.** Explain *Restoration Filters* in detail with a neat diagram.  
  **Key points:** Filters estimate the original image from a degraded one. Inverse Filtering — divides by the degradation function in frequency domain; Wiener Filter — minimum mean square error restoration; Adaptive Filter — filter whose behaviour changes with local statistics.
- **Q.** Explain *Image Compression Fundamentals* in detail with a neat diagram.  
  **Key points:** Compression removes redundancy to save space. Coding Redundancy — using more bits than needed for symbols; Lossless Compression — original image exactly recoverable, e.g. PNG; Lossy Compression — some information discarded, e.g. JPEG.
- **Q.** Explain *JPEG & Transform Coding* in detail with a neat diagram.  
  **Key points:** Transform coding packs energy into few coefficients. DCT — discrete cosine transform used in JPEG; Run-length Encoding — stores runs of identical values as value-count pairs; Compression Ratio — original size divided by compressed size.

## Unit 4: Segmentation & Morphology

### Short answer (2-3 marks)

- **Q.** Define *Sobel Operator*.  
  **Ans.** gradient mask emphasising horizontal or vertical edges
- **Q.** Define *Canny Edge Detector*.  
  **Ans.** multi-stage detector with non-maximum suppression and hysteresis
- **Q.** Define *Gradient Magnitude*.  
  **Ans.** strength of intensity change at a pixel
- **Q.** Define *Global Thresholding*.  
  **Ans.** single threshold separates object and background
- **Q.** Define *Otsu's Method*.  
  **Ans.** chooses threshold maximising between-class variance
- **Q.** Define *Region Growing*.  
  **Ans.** grows regions from seeds by adding similar neighbours
- **Q.** Define *Dilation*.  
  **Ans.** expands objects, filling small holes
- **Q.** Define *Erosion*.  
  **Ans.** shrinks objects, removing small specks
- **Q.** Define *Opening*.  
  **Ans.** erosion followed by dilation; removes small objects
- **Q.** Define *Hough Transform*.  
  **Ans.** maps edge points to parameter space to find lines or circles
- **Q.** Define *Accumulator Array*.  
  **Ans.** votes in parameter space; peaks indicate shapes
- **Q.** Define *Line Parameterisation*.  
  **Ans.** ρ = x cos θ + y sin θ

### Long answer (7 marks)

- **Q.** Explain *Edge Detection* in detail with a neat diagram.  
  **Key points:** Edges mark sharp intensity changes. Sobel Operator — gradient mask emphasising horizontal or vertical edges; Canny Edge Detector — multi-stage detector with non-maximum suppression and hysteresis; Gradient Magnitude — strength of intensity change at a pixel.
- **Q.** Explain *Thresholding & Region-based Segmentation* in detail with a neat diagram.  
  **Key points:** Segmentation divides an image into meaningful regions. Global Thresholding — single threshold separates object and background; Otsu's Method — chooses threshold maximising between-class variance; Region Growing — grows regions from seeds by adding similar neighbours.
- **Q.** Explain *Morphological Operations* in detail with a neat diagram.  
  **Key points:** Morphology processes shapes with structuring elements. Dilation — expands objects, filling small holes; Erosion — shrinks objects, removing small specks; Opening — erosion followed by dilation; removes small objects.
- **Q.** Explain *Hough Transform* in detail with a neat diagram.  
  **Key points:** Hough transform detects parametric shapes. Hough Transform — maps edge points to parameter space to find lines or circles; Accumulator Array — votes in parameter space; peaks indicate shapes; Line Parameterisation — ρ = x cos θ + y sin θ.

## Unit 5: Features & Recognition

### Short answer (2-3 marks)

- **Q.** Define *Corner Detection*.  
  **Ans.** finding points with strong change in two directions, e.g. Harris
- **Q.** Define *SIFT*.  
  **Ans.** scale-invariant feature transform for keypoint description
- **Q.** Define *HOG*.  
  **Ans.** histogram of oriented gradients descriptor for object detection
- **Q.** Define *Feature Vector*.  
  **Ans.** list of numeric measurements describing an object
- **Q.** Define *k-NN Classifier*.  
  **Ans.** assigns the majority class of the k nearest neighbours
- **Q.** Define *Template Matching*.  
  **Ans.** compares image regions with a stored template
- **Q.** Define *Convolutional Neural Network*.  
  **Ans.** network with convolution and pooling layers for images
- **Q.** Define *Transfer Learning*.  
  **Ans.** reusing a pretrained network for a new task
- **Q.** Define *Data Augmentation*.  
  **Ans.** creating training variants by flipping, cropping or rotating
- **Q.** Define *Object Detection*.  
  **Ans.** locating and classifying multiple objects, e.g. YOLO
- **Q.** Define *Face Recognition*.  
  **Ans.** identifying people from facial features
- **Q.** Define *OCR*.  
  **Ans.** optical character recognition converting text images to text

### Long answer (7 marks)

- **Q.** Explain *Feature Extraction* in detail with a neat diagram.  
  **Key points:** Features describe image content compactly. Corner Detection — finding points with strong change in two directions, e.g. Harris; SIFT — scale-invariant feature transform for keypoint description; HOG — histogram of oriented gradients descriptor for object detection.
- **Q.** Explain *Pattern Recognition Basics* in detail with a neat diagram.  
  **Key points:** Classifiers assign classes to feature vectors. Feature Vector — list of numeric measurements describing an object; k-NN Classifier — assigns the majority class of the k nearest neighbours; Template Matching — compares image regions with a stored template.
- **Q.** Explain *CNNs for Vision* in detail with a neat diagram.  
  **Key points:** Deep networks learn features directly from pixels. Convolutional Neural Network — network with convolution and pooling layers for images; Transfer Learning — reusing a pretrained network for a new task; Data Augmentation — creating training variants by flipping, cropping or rotating.
- **Q.** Explain *Vision Applications* in detail with a neat diagram.  
  **Key points:** Vision powers many real-world systems. Object Detection — locating and classifying multiple objects, e.g. YOLO; Face Recognition — identifying people from facial features; OCR — optical character recognition converting text images to text.

