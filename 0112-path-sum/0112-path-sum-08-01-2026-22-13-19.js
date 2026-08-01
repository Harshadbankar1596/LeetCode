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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    function add(a,b){
        return a+b
    }

    let ans = false

    function traverse(root , sum){
        if(!root) return;
        let newSum = add(sum , root.val)
        if(!root.left && !root.right){
            if(newSum === targetSum){
                ans = ans || true
            }
        }
        root.left && traverse(root.left , newSum)
        root.right && traverse(root.right , newSum)
    }

    traverse(root , 0)
    return ans

};