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
var deepestLeavesSum = function(root) {
    
    let temp = []

    function traverse(root , level){
        if(!root) return;

        if(!temp[level]){
            temp[level] = 0
        }

        temp[level] = temp[level] + root.val

        traverse(root.left , level + 1)
        traverse(root.right , level + 1)
    }

    traverse(root, 0)

    return temp[temp.length-1]
};