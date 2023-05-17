/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let n = 0;
  let vis = [];
  let result = 0;
  function DFS(v, step){
    if(v === null){
        n = step;
        return ;
    }
    vis[step] = v.val  
    DFS(v.next, step+1);
    let res = vis[step]+vis[n-1-step];
    if(res > result) result = res;
  }  
  DFS(head, 0);
    return result;
};