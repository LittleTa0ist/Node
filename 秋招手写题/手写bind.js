Function.prototype.myBind = function (ctx) {
    // let key = Symbol('temp')
    ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx)
    let that = this
    return function (...args) {
        that.call(ctx, ...args)
    }
}

function fn(a,b) {
    console.log(this,a,b);
}

myFn=fn.myBind({})
myFn(1,2)