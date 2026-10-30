/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, t) {
    let map = new Map()

    for(let i = 0 ; i < arr.length ; i++){
        let sum = t - arr[i]
        if(map.has(sum)){
            return [i , map.get(sum)]
        }else{
            map.set(arr[i] , i)
        }
    }

    return [0 , 0]
};