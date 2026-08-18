/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let map = new Map()
    let set = new Set()

    let f = 0
    let l = k - 1

    while(l < nums.length){

        for(let i = f ; i <= l ; i++){
            set.add(nums[i])
        }

        for(let val of set){
            map.set(val , (map.get(val) || 0) +1)
        }

        set.clear()

        f++
        l++
    }

    let max = -1

    for(let [key , val] of map){
        if(key > max && val === 1){
            max = key
        }
    }

    return max
};