/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(arr) {
    let temp = []

    function tracking(root , start) {
        temp.push([...root])
        for(let i = start ; i < arr.length ; i++){
            root.push(arr[i])
            tracking(root , i + 1)
            root.pop()
        }
    }
    tracking([] , 0)

    return temp
};