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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];

    let ans = []

    function traverse(root, level) {
        if (!root) return;

        if (!ans[level] && ans[level] !== 0) {
            ans[level] = -Infinity
        }
        if (ans[level] < root.val) {
            ans[level] = root.val
        }
        traverse(root.left, level + 1)
        traverse(root.right, level + 1)
    }

    traverse(root, 0)

    return ans
};