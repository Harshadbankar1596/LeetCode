/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = new ListNode()
    let temp = current

    function traverse(root){
        if(!root) return;
        traverse(root.next)
        let newNode = new ListNode(root.val)
        temp.next = newNode
        temp = temp.next;
    }

    traverse(head)
    return current.next
};