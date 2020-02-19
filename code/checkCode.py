#brew install imagemagick 
#brew install tesseract
#pip3 install tesserocr pillow

import tesserocr

from PIL import Image,ImageDraw

import os

print(os.getcwd())

image = Image.open(os.getcwd()+'/randomCode.jpeg')

image = image.convert('L')


threshold = 90
table = []

for i in range(256):

    if i < threshold:

        table.append(0)

    else:

        table.append(1)

image = image.point(table, '1')


image.show()

result = tesserocr.image_to_text(image)

str1=result.replace(' ','')
str2=str1.replace('.','')

print(str2)