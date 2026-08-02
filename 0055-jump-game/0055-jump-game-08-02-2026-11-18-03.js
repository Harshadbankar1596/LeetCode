/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (arr) {
    let max = 0

    for (let i = 0; i < arr.length; i++) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i + arr[i])
    }

    return true
};