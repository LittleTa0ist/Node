let arr = [[[1, 2, 2], 4], 5, 5, [7, 8]]

let arr_flat = (arr) => {
    let res = []
    function flat(item) {
        if (item instanceof Array) {
            for (let i of item) {
                flat(i)
            }
        } else {
            res.push(item)
        }
    }
    flat(arr)
    return [...new Set(res)]
}


let newFlat = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? newFlat(cur) : cur)
    }, [])
}
console.log(newFlat(arr));