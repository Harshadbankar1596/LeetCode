/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let str1 = ""
    let str2 = ""

    let current = l1
    while(current){
        str1 += current.val
        current = current.next
    }
    current = l2
    while(current){
        str2 += current.val
        current = current.next
    }

    let arr = (BigInt(str1) + BigInt(str2)).toString().split("");

    let temp = new ListNode()
    let pre = temp


    for(let i = 0 ; i<arr.length ; i++){
        let newNode = new ListNode(Number(arr[i]))
        pre.next = newNode
        pre = pre.next
    }


    return temp.next
    
};