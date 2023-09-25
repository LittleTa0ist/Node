const arr = [1, 2, [1, 2, 3], [1, [1, [1, [1]]]]]
const maxDeepth = (arr) => {
    if (!(arr instanceof Array)) return 0
    let max = 1
    arr.forEach(item => {
        if (item instanceof Array) {
            let maxDeep = maxDeepth(item) + 1
            if (maxDeep > max) max = maxDeep
        }
    })
    return max
}

console.log(maxDeepth(arr));