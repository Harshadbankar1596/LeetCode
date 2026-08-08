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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let temp = []

    function traverse(root , level){
        if(!root) return;

        if(!temp[level]) temp[level] = [];

        if(level%2 === 0){
            temp[level].push(root.val)
        }else{
            temp[level].unshift(root.val)
        }

        root.left && traverse(root.left , level + 1)
        root.right && traverse(root.right , level + 1)
    }

    traverse(root , 0)
    return temp;
};