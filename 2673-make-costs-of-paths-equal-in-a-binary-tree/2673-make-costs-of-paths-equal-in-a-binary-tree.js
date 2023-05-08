/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
    let result = 0;
    function DFS(v){
        let l = v*2+1;
        let r = l+1;
        if(l >= n ) return cost[v];
        let l_value = DFS(l);
        let r_value = DFS(r);
        result += Math.abs(l_value-r_value);
        return cost[v]+Math.max(l_value,r_value);
    }
    DFS(0);
    return result ;
};