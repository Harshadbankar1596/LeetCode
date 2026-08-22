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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    let temp = []

    function traverse(root, level) {
        if (!root) return;
        if (!temp[level]) temp[level] = 0;
        temp[level] += root.val
        traverse(root.left, level + 1)
        traverse(root.right, level + 1)
    }
    traverse(root, 0)
    temp = temp.sort((a,b) => b-a)
    console.log(temp)
    return temp[k-1] || -1
};