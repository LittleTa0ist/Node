function delay(duration = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(duration), duration)
    })
}

const handle = function* () {
    let value = yield delay(1000)
    console.log(value);
    value = yield delay(2000)
    console.log(value);
    value = yield delay(3000)
    console.log(value);
}


const AsyncFunction = function (generator, ...params) {
    let itor = generator(...params)
    const next = x => {
        let { done, value } = itor.next(x)
        if (done) return;
        if (!(value instanceof Promise)) value = Promise.resolve(value)
        value.then(res => {
            next(res)
        })
    }
    next()
}
// AsyncFunction(handle)
AsyncFunction(function* (x, y) {
    let value = yield x+y
    console.log(value);

    value=yield delay(1000)
    console.log(value);
}, 10, 20)