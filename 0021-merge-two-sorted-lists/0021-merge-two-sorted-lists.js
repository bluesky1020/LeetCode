/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = null, tail = null;
    while (list1 && list2) {
        let smallerNode = null;
        if (list1.val < list2.val) {
            smallerNode = list1;
            list1 = list1.next;
        } else {
            smallerNode = list2;
            list2 = list2.next;
        }
        if (!head) {
            head = smallerNode;
            tail = smallerNode;
        } else {
            tail.next = smallerNode;
            tail = tail.next;
        }
    }
    if (list1) tail.next = list1;
    if (list2) tail.next = list2;
    return head;
};