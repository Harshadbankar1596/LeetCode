/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(arr) {
    let temp = []

    function track(root , start){
        temp.push([...root])

        for(let i = start ; i < arr.length ; i++){
            root.push(arr[i])
            track(root , i + 1)
            root.pop()
        }
    }

    track([] , 0)

    return temp
};