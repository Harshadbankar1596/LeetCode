/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let temp = []

    function track(root){
        if(root.length === nums.length){
            temp.push([...root])
            return
        }

        for(let i = 0 ; i < nums.length ; i++){
            if(!root.includes(nums[i])){
                root.push(nums[i])
                track(root)
                root.pop()
            }
        }
    }

    track([])

    return temp
};