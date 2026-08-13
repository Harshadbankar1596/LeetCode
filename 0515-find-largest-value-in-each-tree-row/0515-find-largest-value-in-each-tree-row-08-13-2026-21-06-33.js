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
    let stack = [[root, 0]]

    function traverse(aap) {
        let [root, level] = aap

        if (!root) return;

        if (!ans[level]) {
            if (ans[level] !== 0) {
                ans[level] = -Infinity
            }
        }
        if (ans[level] < root.val) {
            console.log("ans => ", ans[level], level)
            ans[level] = root.val
        }

        stack.push([root.left, level + 1])
        stack.push([root.right, level + 1])

        traverse(stack.shift())
        traverse(stack.shift())
    }

    traverse(stack.shift())

    return ans
};