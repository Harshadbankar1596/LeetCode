/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let arr = []

    function traverse(root) {
        if (!root) return;

        arr.push(root.val)
        traverse(root.left)
        traverse(root.right)
    }

    traverse(root1)
    traverse(root2)

    function mearge(arr , f , l , mid){
        let i = f
        let j = mid + 1
        let temp = []

        while(i<=mid && j<=l){
            if(arr[i] < arr[j]){
                temp.push(arr[i++])
            }else{
                temp.push(arr[j++])
            }
        }

        while(i<=mid){
            temp.push(arr[i++])
        }
        while(j<=l){
            temp.push(arr[j++])
        }

        for(let c = 0 ; c < temp.length ;c++){
            arr[f++] = temp[c]
        }
    }

    function divide(arr , f , l){
        if(f>=l) return;
        let mid = Math.floor((f+l)/2)
        divide(arr , f , mid)
        divide(arr , mid+1 , l)
        mearge(arr , f , l , mid)
    }

    divide(arr , 0 , arr.length-1)

    return arr

};