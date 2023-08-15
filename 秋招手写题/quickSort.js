let arr = [7, 9, 8, 5, 3, 2, 1, 4, 6, 5, 4]

const quickSort = (arr, l, r) => {
    let left = l
    let right = r
    if (left >= right) return;
    let pivot = arr[l]
    while (left < right) {
        while (arr[right] >= pivot && left < right) {
            right--
        }
        if (left < right) {
            arr[left] = arr[right]
            left++
        }

        while (arr[left] <= pivot && left < right) {
            left++
        }
        if (left < right) {
            arr[right] = arr[left]
            right--
        }

    }
    arr[left] = pivot
    quickSort(arr, l, left - 1)
    quickSort(arr, left + 1, r)
    return arr
}
console.log(quickSort(arr, 0, arr.length - 1));