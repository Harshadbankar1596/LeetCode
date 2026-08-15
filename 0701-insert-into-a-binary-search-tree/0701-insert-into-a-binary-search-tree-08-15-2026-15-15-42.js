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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    if(!root){
        return new TreeNode(val)
    }
    
    function traverse(root){
        if(!root) return;

        if(root.left === null && root.val > val){
            root.left = new TreeNode(val);
            return;
        }else if(root.right === null && root.val < val){
            root.right = new TreeNode(val)
        }

        if(root.val > val){
            traverse(root.left)
        }else{
            traverse(root.right)
        }
    }

    traverse(root)
    return root
};