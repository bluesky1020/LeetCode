/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let current = head;
    let count = 0;
    
    while (current && count < k) {
        current = current.next;
        count++;
    }
    
    if (count === k) {
        let reversedHead = reverseLinkedList(head, k);
        head.next = reverseKGroup(current, k);
        return reversedHead;
    }
    
    return head;
};

var reverseLinkedList = function(head, k) {
    let prev = null;
    let current = head;
    
    while (k > 0) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
        k--;
    }
    
    return prev;
};