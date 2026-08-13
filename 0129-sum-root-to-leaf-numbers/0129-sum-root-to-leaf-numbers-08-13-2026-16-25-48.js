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
var sumNumbers = function (root) {
    let temp = ""
    let ans = 0
    function traverse(root) {
        if (!root) return 0;
        temp += root.val
        if (!root.left && !root.right) {
            ans += Number(temp)
        }
        traverse(root.left)
        traverse(root.right)
        temp = temp.slice(0, -1);
    }
    traverse(root)
    return ans
};