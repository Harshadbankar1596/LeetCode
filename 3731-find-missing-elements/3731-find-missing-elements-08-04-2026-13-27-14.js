/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let min = +Infinity
    let max = -Infinity
    let set = new Set()
    let temp = []
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] < min) min = nums[i];
        if(nums[i] > max) max = nums[i];
        set.add(nums[i])
    }
    for(let i = min ; i <= max ; i++){
       if(!set.has(i)){
        temp.push(i)
       }
    }
    return temp
};