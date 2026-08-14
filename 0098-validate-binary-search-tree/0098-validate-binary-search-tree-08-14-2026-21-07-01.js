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
    let temp = [-Infinity]
    let ans = true
    function traverse(root){
        if(!root) return;
        traverse(root.left)
        if(temp[temp.length-1] >= root.val){
            ans = false
        }else{
            temp.push(root.val)
        }
        traverse(root.right)
    }
    traverse(root)
    return ans
};