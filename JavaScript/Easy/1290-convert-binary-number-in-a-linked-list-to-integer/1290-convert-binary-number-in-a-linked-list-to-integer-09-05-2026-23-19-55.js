/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let int = ""

    function traverse(root){
        if(!root) return;

        int += root.val
        traverse(root.next)
    }

    traverse(head)
    return parseInt(int, 2)
};