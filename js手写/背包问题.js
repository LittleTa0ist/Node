const MaxWeight = 6
const value = [5, 10, 3, 6, 3]
const weight = [2, 5, 1, 4, 3]

const maxValue = (MaxWeight, value, weight) => {
    let len = value.length
    let dp = new Array(len).fill(0).map(() => new Array(MaxWeight + 1).fill(0))
    // let result = []
    for (let i = 0; i <= MaxWeight; i++) {
        if (i >= weight[0]) {
            dp[0][i] = value[0]
        } else {
            dp[0][i] = 0
        }
    }
    console.log(dp);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= MaxWeight; j++) {
            if (j < weight[i]) dp[i][j] = dp[i - 1][j]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
        }
    }
    return dp[len - 1][MaxWeight]
}
console.log(maxValue(MaxWeight, value, weight));