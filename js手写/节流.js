function throttle(fn, duration) {
    let timer = 0
    return function () {
        if (Date.now() - timer > duration) {
            fn.call(this, ...arguments)
            timer = Date.now()
        }
    }
}