/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(!nums.length || nums.length===1) return 0;
    let arr = nums.sort((a,b) => a-b)

    let max = 0

    for(let  i = 0 ; i < arr.length-1 ; i++){
        let diff = Math.abs(arr[i] - arr[i+1])
        max = max > diff ? max : diff
    }


    return max
};