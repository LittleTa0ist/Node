

Promise.myAll = (proms) => {
    let res, rej
    const p = new Promise((resolve, reject) => {
        res = resolve
        rej = reject
    })
    let result = []
    let count = 0
    let fullFillcount = 0
    for (let item of proms) {
        let i = count
        count++
        Promise.resolve(item).then(data => {
            fullFillcount++
            result[i] = data
            if (fullFillcount === count) {
                res(result)
            }
        }, rej)
    }
    if (count === 0) resolve([])

    return p
}

Promise.prototype.catch=function(rej){
    this.then(res=>{

    },rej)
}

Promise.myAll([1, 2, 3, Promise.reject('err')]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

