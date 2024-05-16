# YOLO object detection
import cv2 as cv
import numpy as np
import time
import os

# Get the current working directory
currentFolder = os.getcwd()
projectFolder = os.path.dirname(currentFolder)
image_path = os.path.join(projectFolder, 'images', 'horse.jpg')

print("Image path:", image_path)

# Read and display the image
img = cv.imread(image_path)
cv.imshow('window',  img)
cv.waitKey(1)

# OWN TEST Just showing the loaded image
# # Check if the image is loaded successfully
# if img is not None:
#     # Display the image
#     cv.imshow('window', img)
#     # Wait indefinitely for a key event, until any key is pressed
#     cv.waitKey(0)
#     # Close all OpenCV windows
#     cv.destroyAllWindows()
# else:
#     print("Error: Image not loaded.")



# Give the configuration and weight files for the model and load the network.
yoloConfigPath = os.path.join(projectFolder, 'config', 'yolov3.cfg')
yoloWeightsPath = os.path.join(projectFolder, 'weights', 'yolov3.weights')
net = cv.dnn.readNetFromDarknet(yoloConfigPath, yoloWeightsPath)
net.setPreferableBackend(cv.dnn.DNN_BACKEND_OPENCV)
# net.setPreferableTarget(cv.dnn.DNN_TARGET_CPU)

ln = net.getLayerNames()
print(len(ln), ln)

# construct a blob from the image
blob = cv.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)
r = blob[0, 0, :, :]

cv.imshow('blob', r)
text = f'Blob shape={blob.shape}'
cv.displayOverlay('blob', text)
cv.waitKey(1)

net.setInput(blob)
t0 = time.time()
outputs = net.forward(ln)
t = time.time()

cv.displayOverlay('window', f'forward propagation time={t-t0}')
cv.imshow('window',  img)
cv.waitKey(0)
cv.destroyAllWindows()