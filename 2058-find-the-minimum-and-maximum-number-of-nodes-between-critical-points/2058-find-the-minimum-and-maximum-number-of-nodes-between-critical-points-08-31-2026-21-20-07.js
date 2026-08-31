/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let temp = []
    let pre = null;
    let current = head
    let index = 1

    while (current) {
        if (current.next && pre && current.val > pre.val && current.next.val < current.val) {
            temp.push(index)
        } else if (current.next && pre && current.val < pre.val && current.next.val > current.val) {
            temp.push(index)
        }
        index++
        pre = current
        current = current.next
    }
    if (!temp.length || temp.length === 1) return [-1, -1]

    let min = Infinity

    for (let i = 1; i < temp.length; i++) {
        min = Math.min(min, temp[i] - temp[i - 1])
    }

    let max = temp[temp.length - 1] - temp[0]

    return [min, max]
};