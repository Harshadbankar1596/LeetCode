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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0

    function traverse(root , max){
        if(!root) return;

        if(root.val >= max){
            count++
            max = root.val
        }

        traverse(root.left , max)
        traverse(root.right , max)
    }

    traverse(root , root.val)

    return count;
};