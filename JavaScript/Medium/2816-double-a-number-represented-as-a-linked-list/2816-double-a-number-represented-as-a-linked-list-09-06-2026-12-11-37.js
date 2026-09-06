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
var doubleIt = function(head) {
    let str = "";

    function traverse(root) {
        if (!root) return;

        str += root.val;
        traverse(root.next);
    }

    traverse(head);

    let num = (BigInt(str) * 2n).toString();

    let temp = new ListNode(0);
    let current = temp;

    for (let i = 0; i < num.length; i++) {
        let newNode = new ListNode(Number(num[i]));
        current.next = newNode;
        current = current.next;
    }

    return temp.next;
};