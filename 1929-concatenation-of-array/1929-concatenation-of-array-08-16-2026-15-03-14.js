/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length
    let arr = new Array(n*2)

    for(let i = 0 ; i < n ; i++){
        arr[i] = nums[i]
        arr[i+n] = nums[i]
    }

    return arr
};