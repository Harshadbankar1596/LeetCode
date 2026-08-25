/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums)
    let sum = k

    while(true){
        if(!set.has(sum)){
            return sum
        }else{
            sum += k 
        }
    }

    return k
};