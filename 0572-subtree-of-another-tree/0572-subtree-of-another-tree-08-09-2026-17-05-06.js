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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(groot, subRoot) {

    function checkSame(root1 , root2){
        if(!root1 && !root2) return true;
        if(!root1 || !root2) return false;
        
        return (root1.val == root2.val && checkSame(root1.left , root2.left) && checkSame(root1.right , root2.right))
    }

    let ans = false;

    function traverse(root){
        if(!root) return;

        if(root.val === subRoot.val){
            ans = ans || checkSame(root , subRoot)
        }if(ans){
            return;
        }

        root.left && traverse(root.left)
        root.right && traverse(root.right)
    }

    traverse(groot)

    return ans
};