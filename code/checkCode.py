# brew install imagemagick
# brew install tesseract
# pip3 install tesserocr pillow

import pytesseract
from PIL import Image, ImageOps
import os

image = Image.open(os.path.dirname(__file__)+'/'+'randomCode.jpeg')
image = image.convert('L')
threshold = 80
table = []
for i in range(256):
    if i < threshold:
        table.append(0)
    else:
        table.append(1)
image = image.point(table, '1')
# image.show()
result = pytesseract.image_to_string(image, config="--psm 1 --oem 3")
str1 = result.replace(' ', '')
print(str1)
