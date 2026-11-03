/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(arr) {
    const max = Math.max(...arr);

    let sum = 0

    for(let i = 0 ; i < arr.length ; i++){
        sum += max - arr[i]
    }

    return sum
};