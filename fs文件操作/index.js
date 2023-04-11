// 基于promise的异步文件操作
const fs = require('fs').promises

// 文件读取
// fs.readFile('./data.txt',"utf-8").then(res=>{
//     console.log(res);
// })


fs.readdir('./wait')
    .then(async (data) => {
        await Promise.all(data.map(item => {
            return fs.unlink(`./wait/${item}`)
        }))
        await fs.rmdir("./wait")
    })
    .catch(err => {
        console.log(err);
    })