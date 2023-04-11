const fs = require('fs')
const rs = fs.createReadStream("./text.txt")

let data=''
rs.on('data', chunk => {
    data+=chunk
    console.log("chunk-", chunk);
})

rs.on('end', () => {
    console.log(data);
})

rs.on('error',(err)=>{
    console.log(err);
})