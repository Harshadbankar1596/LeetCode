/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i] , (map.get(nums[i]) || 0) + 1)
    }
    let temp = []

    let newMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))
    
    for(let [key , val] of newMap){
        if(temp.length >= k) return temp
        temp.push(key)
    }

    return temp

};