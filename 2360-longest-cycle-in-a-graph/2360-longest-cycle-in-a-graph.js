/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    let n = edges.length;
    let vis = [];
    let result = -1;
    for(let i = 0 ; i < n ; i ++){
        if(vis[i] !== undefined) continue ;
        let dis = [];
        let d = 0;
        for(let j = i ; ; j = edges[j]){
            if(j === -1) break ;
            if(dis[j] !== undefined){
                d -= dis[j];
                if(result === -1 || result  < d) result = d;
                break ;
            }
            if(vis[j] !== undefined) break ;
            vis[j] = 1;
            dis[j] = d++;
        }
    }
    return result;
};