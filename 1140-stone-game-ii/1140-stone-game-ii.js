/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    let res = [], n = piles.length, sum=[];
    sum[0] = 0;
    for(let i = 0 ; i < n ; i ++){
        res[i] = [];
        sum[i+1] = sum[i]+piles[i];
        for(let j = 0 ; j <= n ; j ++){
            res[i][j] = [];
        }
    }
    function DFS(step,M,t){
        if(res[step][M][t] !== undefined) return res[step][M][t];
        let result = [];
        if(step+2*M >= n){
            result[t] = sum[n]-sum[step];
            result[1-t] = 0;
            return res[step][M][t] = result;
        }
        let mx = 0;
        for(let x = 1 ; x <= 2*M ; x ++){
            if(step+x >= n) break ;
            let r = DFS(step+x, Math.max(M,x), 1-t);
            let v = sum[step+x]-sum[step]+r[t];
            if(v > mx){
                mx = v;
                result[t] = mx;
                result[1-t] = r[1-t];
            }
        }
        return res[step][M][t] = result;
    }
    let result = DFS(0,1,0);
    return result[0];
};