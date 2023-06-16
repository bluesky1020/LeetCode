/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const mod = 1000000007n;
    let tree = [], prev = [], n = nums.length;
    for(let i = 0 ; i <= n+1 ; i ++){
        prev[i] = [];
        prev[0][i] = 0n;
        prev[i][0] = 1n;
    }
    prev[0][0] = 1n;
    
    function buildTree(v , w){
        if(v === w){
            tree[w] = {left: null , right : null, nCount: 1}
            return ;
        }
        if(w > v){
            if(tree[v].right === null) tree[v].right = w;
            buildTree(tree[v].right, w);
        }
        else{
            if(tree[v].left === null) tree[v].left = w;
            buildTree(tree[v].left, w);
        }
        tree[v].nCount ++;
    }
    
    for(let i = 0 ; i < n ; i ++){
        buildTree(nums[0], nums[i]);
    }
    
    function Calc(n,r){
        if(prev[n][r] !== undefined) return prev[n][r];
        return prev[n][r] = (Calc(n-1,r-1)+Calc(n-1,r)) % mod;
    }
    
    function DFS(v){
        if(v === null) return 1n;
        let dl = DFS(tree[v].left);
        let dr = DFS(tree[v].right);
        if(tree[v].left === null) return dr;
        if(tree[v].right === null) return dl;
        return (dl*dr%mod)*Calc(tree[tree[v].left].nCount+tree[tree[v].right].nCount, tree[tree[v].right].nCount)%mod
    }
    
    return Number(DFS(nums[0]))-1;
};