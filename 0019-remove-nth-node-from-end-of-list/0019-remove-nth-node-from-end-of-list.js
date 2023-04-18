/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0); // create a dummy node before the head
    dummy.next = head;
    let fast = dummy, slow = dummy;
    // move the fast pointer n steps ahead of the slow pointer
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    // move both pointers together
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    // remove the Nth node
    slow.next = slow.next.next;
    return dummy.next; // return the head of the resulting linked list
};