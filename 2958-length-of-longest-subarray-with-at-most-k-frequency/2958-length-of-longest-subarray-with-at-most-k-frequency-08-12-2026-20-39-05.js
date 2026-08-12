/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (arr, k) {
    let map = new Map()
    let max = 0
    let f = 0
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
        while(map.get(arr[i]) > k){
            map.set(arr[f] , (map.get(arr[f]) || 0) - 1)
            f++
        }
        max = Math.max(max , Math.abs(i - f) + 1)
    }
    return max
};