/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let maxValue, res = [], result = 1;
    function DFS(v, d){
        if(v === null) return ;
        if(res[d] === undefined) res[d] = 0;
        res[d] += v.val;
        DFS(v.left, d+1);
        DFS(v.right, d+1);
    }
    DFS(root,1);
    for(let i = 1 ; i < res.length ; i ++){
        if(maxValue === undefined || res[i] > maxValue){
            maxValue = res[i];
            result = i;
        }
    }
    return result;
};