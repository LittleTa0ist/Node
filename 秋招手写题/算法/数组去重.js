let arr = [1, 3, 5, 3, 6, 6, 2, 1, 10]
const handleRepeat = (arr) => {
    if (arr.length === 0) return arr
    arr = arr.sort((a, b) => a - b)
    let len = 1
    for (let i = 1, j = 1; j < arr.length; j++) {
        // 不相等则将其替换到应有的位置，相等在同时向后移动
        if (arr[j] !== arr[j - 1]) {
            arr[i] = arr[j]
            i++
            len++
        }
    }
    return arr.splice(0, len)
}
console.log(handleRepeat(arr));
