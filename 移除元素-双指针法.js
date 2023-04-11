let nums = [0, 1, 2, 2, 3, 0, 4, 2]

const removeElement = (nums, target) => {
    let slow = 0
    let fast = 0
    for (fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== target) {
            nums[slow++] = nums[fast]
        }
    }
    return slow
}

console.log(removeElement(nums, 2), nums.slice(0, 5));