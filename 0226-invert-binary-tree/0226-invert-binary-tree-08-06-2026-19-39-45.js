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
var invertTree = function(root) {
    // if(!root) return []

    function traverse(root){
        if(!root) return;

        let temp = root.left
        root.left = root.right
        root.right = temp

        traverse(root.left)
        traverse(root.right)
    }

    traverse(root)

    return root
};