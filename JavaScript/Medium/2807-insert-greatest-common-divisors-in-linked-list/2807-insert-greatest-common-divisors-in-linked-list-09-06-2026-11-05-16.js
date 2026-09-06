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
var insertGreatestCommonDivisors = function (head) {
    function gcd(a, b) {
        a = Math.abs(a)
        b = Math.abs(b)
        while (b !== 0) {
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }

    let temp = new ListNode()
    let current = temp

    function traverse(root) {
        if (!root) return;
        let currentNode = new ListNode(root.val)
        current.next = currentNode
        current = current.next
        if (root.next) {
            let newNode = new ListNode(gcd(root.val, root.next.val));
            current.next = newNode
            current = current.next
        }
        traverse(root.next)
    }

    traverse(head)
    return temp.next
};