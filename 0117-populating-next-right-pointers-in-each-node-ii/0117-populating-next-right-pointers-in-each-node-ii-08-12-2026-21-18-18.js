/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root

    let pre = {
        node : null,
        level : 0
    }

    let sentinal = new _Node(0)
    sentinal.next = root;

    let stack = [sentinal.next]

    function traverse(nums , pre){
        let node = nums[0]
        let level = nums[1]
        if(!node) return;

        let current = node;
        if(pre.node && pre.level === level){
            pre.node.next = current
        }
        pre.node = current
        pre.level = level

        stack.push([node.left , level + 1])
        stack.push([node.right , level + 1])

        traverse(stack.shift() , pre)
        traverse(stack.shift() , pre)
    }


    traverse([stack.shift() , 0] , pre)

    return sentinal.next
};