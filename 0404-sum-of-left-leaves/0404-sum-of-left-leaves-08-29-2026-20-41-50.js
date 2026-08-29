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
var sumOfLeftLeaves = function (root) {
    let sum = 0

    function traverse(root, isLeft){
        if (!root) return;

        if (isLeft && !root.left && !root.right) {
           sum += root.val
        }
        traverse(root.left, true)
        traverse(root.right, false)
    }

    traverse(root, false)

    return sum
};