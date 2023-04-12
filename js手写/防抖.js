function debounce(fn, duration, immediate = false) {
    let timer = null
    let isfirst = true
    return function (...args) {
        if (timer) clearTimeout(timer)
        if (immediate && isfirst) {
            fn.call(this, ...args)
            isfirst=false
        }
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, duration)
    }
}
