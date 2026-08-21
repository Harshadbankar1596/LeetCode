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
            temp[level].push(root.val)
        } else {
            temp[level].unshift(root.val)
        }
        traverse(root.left, level + 1)
        traverse(root.right, level + 1)
    }
    traverse(root, 0)
    let arr = []
    for (let i = 0; i < temp.length; i++) {
        arr.push(...temp[i])
    }
    let sentinal = new TreeNode(arr.shift())
    let stack = [sentinal]
    while (stack.length) {
        let newLeft = arr.length ? new TreeNode(arr.shift()) : null
        let newRight = arr.length ? new TreeNode(arr.shift()) : null

        let cur = stack.shift()
        cur.left = newLeft
        cur.right = newRight

        newLeft && stack.push(newLeft)
        newRight && stack.push(newRight)
    }
    return sentinal
};