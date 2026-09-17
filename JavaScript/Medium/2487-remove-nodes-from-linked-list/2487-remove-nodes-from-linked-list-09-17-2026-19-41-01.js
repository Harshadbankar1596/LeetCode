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
var removeNodes = function(head) {
    let temp = []

    function traverse(root){
        if(!root) return;

        traverse(root.next)
        temp.push(root.val)
        let l = temp.length-1
        while(temp[l] < temp[l-1] && l > 0){
            temp.pop()
        }
    }

    traverse(head)

    let Newhead = new ListNode()
    let pre = Newhead

    while(temp.length){
        let newNode = new ListNode(temp.pop())
        pre.next = newNode
        pre = pre.next
    }

    return Newhead.next
};