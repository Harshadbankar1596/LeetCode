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
var isBalanced = function (root) {
    let ans = true

    function traverse(root) {
        if (!root) return 0;

        let first = traverse(root.left)
        let second = traverse(root.right)

        if (Math.abs(first - second) > 1) {
            ans = ans && false
        }

        return 1 + Math.max(first, second)
    }

    traverse(root)

    return ans
};