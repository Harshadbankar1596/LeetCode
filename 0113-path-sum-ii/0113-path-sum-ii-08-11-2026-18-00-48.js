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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];

    function AddNums(a, b) {
        return (a + b)
    }

    let ans = []

    function traverse(root, sum, temp) {
        if (!root) return 0;

        let currentSum = AddNums(root.val, sum)
        temp.push(root.val)

        if (!root.left && !root.right) {
            if (currentSum === targetSum) {
                ans.push([...temp])
            }
        }

        traverse(root.left, currentSum, temp)
        traverse(root.right, currentSum, temp)
        temp.pop()
    }

    traverse(root, 0, [])

    return ans
};