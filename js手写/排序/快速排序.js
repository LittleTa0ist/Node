let arr = [5, 3, 1, 6, 9, 8, 7, 4, 2]
let getPovit = (arr, l, r) => {
    if (l >= r) return
    let i = l
    let j = r
    let x = arr[l]
    while (l < r) {
        while (l < r && arr[r] > x) {
            r--
        }
        if (l < r) {
            arr[l] = arr[r]
            l++
        }
        while (l < r && arr[l] < x) {
            l++
        }
        if (l < r) {
            arr[r] = arr[l]
            r--
        }
    }
    arr[r] = x
    getPovit(arr, i, r - 1)
    getPovit(arr, r + 1, j)
    return arr
}
// function quickSort(arr, l, r) {
//     if (l < r) {
//         let pivot = getPovit(arr, l, r)
//         quickSort(arr, l, pivot - 1)
//         quickSort(arr, pivot + 1, r)
//     }
// }
// getPovit(arr, 0, arr.length - 1)
// console.log(arr);


// 数组第k大元素
let getKthLarge = (arr, l, r, k) => {
    // if (l >= r) return
    let i = l
    let j = r
    let x = arr[l]
    while (l < r) {
        while (l < r && arr[r] > x) {
            r--
        }
        if (l < r) {
            arr[l] = arr[r]
            l++
        }
        while (l < r && arr[l] < x) {
            l++
        }
        if (l < r) {
            arr[r] = arr[l]
            r--
        }
    }
    arr[r] = x
    if (r === arr.length - k) return x
    if (r > arr.length - k) return getKthLarge(arr, i, r - 1, k)
    else return getKthLarge(arr, r + 1, j, k)
}
console.log(getKthLarge(arr, 0, arr.length, 2)); 