const Url = require('url')
exports.returnContent = (url) => {
    const myUrl = Url.parse(url,true)
    console.log(myUrl);
    const { a, b, c } = myUrl.query
    if (c) {
        if (myUrl.pathname === '/list' && a === '1' && b === '1') {
            return JSON.stringify([1, 2, 3, 4, 5])
        }
    }
}
