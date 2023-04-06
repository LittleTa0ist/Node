const https = require('https')
const cheerio = require('cheerio')
// 发送网络请求
const getData = (fn) => {
    let data = ''
    https.get('https://i.maoyan.com', res => {
        res.on('data', chunk => {
            data += chunk
        })
        res.on('end', () => {
            fn(data)
        })
    })
}

// 解析html
function spider(data) {
    let $ = cheerio.load(data)
    let $movielist=$(".name.line-ellipsis")
    // console.log($movielist);
    // return data
    $movielist.each((index,value)=>{
        console.log($(value).text());
    })
}

getData(spider)