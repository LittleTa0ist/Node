Function.prototype.myCall = function (ctx, ...args) {
    ctx = (ctx === null || ctx === undefined) ? window : ctx
    let fn = Symbol()
    ctx[fn] = this
    let result = ctx[fn](...args)
    delete ctx[fn]
    return result
}

function sum(a, b, c) {
    return a + b + c
}

let result = sum.myCall({}, 1, 2, 3)

console.log(result);