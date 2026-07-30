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
var maxDepth = function(root) {
    if(!root) return 0
    let level = 1
    let stack = [[root , level]]

    function traverse(arr){
        if(!arr[0]) return
        level = arr[1]
        let tree = arr[0]
        stack.push([tree.left , level + 1])
        stack.push([tree.right , level + 1])
        traverse(stack.shift())
        traverse(stack.shift())
    }

    traverse(stack.shift())

    return level
};