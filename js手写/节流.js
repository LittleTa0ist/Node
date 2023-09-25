function throttle(fn, duration, now = false) {
    let timer
    if (now) {
        timer = 0
    }
    else {
        timer = +new Date()
    }

    return function () {
        if (Date.now() - timer > duration) {
            fn.call(this, ...arguments)
            timer = Date.now()
        }
    }
}