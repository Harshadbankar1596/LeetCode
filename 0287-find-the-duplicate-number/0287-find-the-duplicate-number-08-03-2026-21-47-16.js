/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(arr) {
    let map = new Map()
    for(let i = 0 ; i < arr.length ; i++){
        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }
    for(let [key , val] of map){
        if(val > 1) return key
    }
};