Function.prototype.myBind = function (ctx) {
    let fn = this
    return function (...args) {
        return fn.call(ctx, ...args)
    }
}

function fn(a,b) {
    console.log(this,a,b);
}

myFn=fn.myBind({})
myFn(1,2)