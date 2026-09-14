/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    let temp = []

    function track(sum , root , start){
        if(sum === 0) temp.push([...root])
        if(sum < 0) return;

        for(let i = start ; i < arr.length ; i++){
            root.push(arr[i])
            track(sum - arr[i] , root , i)
            root.pop()
        }
    }

    track(target , [] , 0)

    return temp
};