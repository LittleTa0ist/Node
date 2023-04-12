// 

Function.prototype.myCall = function (ctx, ...args) {
    let key = Symbol('temp')
    ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx)
    // ctx[key]=this
    Object.defineProperty(ctx, key, {
        enumerable: false,
        value: this
    })

    let result = ctx[key](...args)
    delete ctx[key]
    return result
}
function sum(a, b, c) {
    return a + b + c
}

let result = sum.myCall({}, 1, 2, 3)

console.log(result);