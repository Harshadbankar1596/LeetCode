/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (arr) {
    let m = arr.length
    let k = 0
    let sum = 0
    let set = new Set()
    for (let i = 0; i < m; i++) {
        set.add(`row${i}col${k}`)
        sum += arr[i][k++]
    }
    k = k - 1
    for (let i = 0; i < m; i++) {
        if (!set.has(`row${i}col${k}`)) {
            sum += arr[i][k]
        }
        k--
    }

    return sum
};