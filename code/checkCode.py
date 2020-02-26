# brew install imagemagick
# brew install tesseract
# pip3 install tesserocr pillow

import pytesseract

from PIL import Image,ImageOps

import os

print(os.getcwd())

image = Image.open(os.getcwd()+'/3.jpeg')

image = image.convert('L')

threshold = 128
table = []

for i in range(256):

    if i < threshold:

        table.append(0)

    else:

        table.append(1)

image = image.point(table, '1')
image.show()

# image = image.resize((500,100))
# image=image.crop((10,5,100,34))


image.show()

result = pytesseract.image_to_string(image,config="--psm 1 --oem 3")

str1 = result.replace(' ', '')
str2 = str1.replace('.', '').replace('i', '1').replace('t', '+').replace('G', '9').replace('Q', '0').replace('S','8').replace("<","=").replace("B","8")

print(str1)
print(str2)
