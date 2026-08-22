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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    let temp = []
    function traverse(root, level) {
        if (!root) {
            return;
        }
        if (!temp[level]) {
            temp[level] = []
        }
        if (level % 2 === 0) {
            temp[level].unshift(root.val)
        } else {
            temp[level].push(root.val)
        }
        traverse(root.left, level + 1)
        traverse(root.right, level + 1)
    }
    traverse(root, 0)

    function fix(root, level) {
        if (!root) return;
        root.val = temp[level].pop()
        fix(root.left , level + 1)
        fix(root.right , level + 1)
    }

    fix(root , 0)
    return root
};