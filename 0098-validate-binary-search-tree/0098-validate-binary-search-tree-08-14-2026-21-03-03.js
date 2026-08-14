/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    

    let ans = false

    function traverse(root , lo , hi){
        if(!root) return true;

        if((lo !== null && lo >= root.val) || (hi !== null && root.val >= hi)){
            return false;
        }

        let isLeft = traverse(root.left , lo , root.val)
        let isRight = traverse(root.right , root.val , hi)

        return isLeft && isRight
    }

    ans = traverse(root , null , null)
    return ans
};