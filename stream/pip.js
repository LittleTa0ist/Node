const fs = require('fs')
const readStream = fs.createReadStream('./text.txt')
const writeStream = fs.createWriteStream('./1.txt')
readStream.pipe(writeStream)
