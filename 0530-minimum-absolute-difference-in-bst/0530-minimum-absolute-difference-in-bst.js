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
var getMinimumDifference = function(root) {
    let res = [];
    function DFS(v){
        if(v === null) return ;
        res.push(v.val);
        DFS(v.left);
        DFS(v.right);
    }
    DFS(root);
    res.sort((a,b)=>a-b);
    let result ;
    for(let i = 1 ; i < res.length ; i ++){
        let d = Math.abs(res[i]-res[i-1]);
        if(result === undefined || d < result ) result = d;
    }
    return result ;
};