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
var swapNodes = function(head, k) {
    let st = -1, en = -1, n;
    function DFS(v , step){
        if(v === null){
            n = step-1;
            return ;
        }
        if(step === k)
            st = v.val;
        DFS(v.next, step+1);
        if(step === n-k+1)
            en = v.val;
    }
    DFS(head, 1);
    function Replace(v, step){
        if(v === null) return ;
        if(step === k)
            v.val = en;
        if(step === n-k+1)
            v.val = st;
        Replace(v.next, step+1);
    }
    Replace(head, 1);
    return head;
};