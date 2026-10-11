/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (arr) {
    let l = arr.length
    let sum = 0
    for (let i = 0; i < l; i++) {
        if (l%(i+1) === 0) {
            sum += arr[i] * arr[i]
        }
    }
    return sum
};