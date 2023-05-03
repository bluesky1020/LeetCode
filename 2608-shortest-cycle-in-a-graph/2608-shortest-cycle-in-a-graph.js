/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
    let con = [];
    let cnt = [];
    let result = -1;
    for(let i = 0 ; i < n; i ++){
        con[i] = [];
        cnt[i] = 0;
    }
    for(let i = 0 ; i < edges.length ; i ++){
        let a = edges[i][0];
        let b = edges[i][1];
        con[a][cnt[a]++] = b;
        con[b][cnt[b]++] = a;
    }
    for(let i = 0 ; i < n ; i ++){
        let qu = [];
        let dis = [];
        qu.push(i);
        qu.push(-1);
        dis[i] = 0;
        let st = 0;
        while(qu.length > st){
            let v = qu[st++];
            let p = qu[st++];
            for(let j = 0 ; j < cnt[v] ; j ++){
                let w = con[v][j];
                if(w === p) continue ;
                if(dis[w] !== undefined){
                    if(result === -1 || result > dis[v]+dis[w]+1)
                        result = dis[v]+dis[w]+1;
                    continue ;
                }
                dis[w] = dis[v]+1;
                qu.push(w);
                qu.push(v);
            }
        }
    }
    return result ;
};