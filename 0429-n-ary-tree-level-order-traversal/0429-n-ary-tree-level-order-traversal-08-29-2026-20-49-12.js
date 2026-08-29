/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let temp = []

    function traverse(root , level){
        if(!root){
            return;
        }
        if(!temp[level]) temp[level] = [];
        temp[level].push(root.val)
        while(root.children.length){
            traverse(root.children.shift() , level + 1)
        }
    }

    traverse(root , 0)

    return temp
};