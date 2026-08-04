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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];
    let temp = []
    function traverse(root , level) {
        if (!root) return;
        if (!temp[level]) {
            temp[level] = []
        }
        let leftMax = traverse(root.left , level + 1)
        let right = traverse(root.right , level + 1)
        temp[level].push(root.val)
    }
    traverse(root , 0)
    return temp.reverse()
};