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
var isSymmetric = function (root) {

    if (!root) return true;

    function traverse(rootleft, rootright) {
        if (!rootleft && !rootright) {
            return true
        }
        if (!rootleft || !rootright) {
            return false
        }

        if (rootleft.val !== rootright.val) {
            return false
        }

        return (traverse(rootleft.left, rootright.right) && (traverse(rootleft.right, rootright.left)))
    }

    return traverse(root.left, root.right)
};