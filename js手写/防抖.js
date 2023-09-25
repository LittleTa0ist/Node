function debounce(fn, duration, immediate = false) {
    let timer = null
    let result;
    // let isfirst = true
    return function (...args) {
        let now = immediate && !timer
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            if (!immediate) result = fn.call(this, ...args)
            clearTimeout(timer)
        }, duration)

        if (now) {
            result = fn.call(this, ...args)
        }
        return result
    }
}
