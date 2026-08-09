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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return [];
    let temp = []
    function traverse(root) {
        if (!root) return;
        temp.push(root)
        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)
    let current = root
    for (let i = 0; i < temp.length - 1; i++) {
        temp[i].left = null;
        temp[i].right = temp[i + 1];
    }
    temp[temp.length - 1].left = null;
    temp[temp.length - 1].right = null;
};