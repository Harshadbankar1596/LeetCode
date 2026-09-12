/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(arr) {
    let temp = []

    function track(root){
        if(root.length === arr.length){
            temp.push([...root]);
            return
        }

        for(let i = 0 ; i < arr.length ; i++){
            if(!root.includes(arr[i])){
                root.push(arr[i])
                track(root)
                root.pop()
            }
        }
    }

    track([])

    return temp
};