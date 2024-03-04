#!/bin/sh
for file in `find . -type f -name "*.jpeg"`;
do
cwebp $file -o "${file%.*}.webp" -resize 768 1024 >/dev/null 2>&1
mv -f "${file%.*}.webp" ../assets/"${file%.*}.webp"
done