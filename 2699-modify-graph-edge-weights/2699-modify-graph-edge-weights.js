/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function(n, edges, source, destination, target) {
    let cnt  = [], con = [], cost= [], real = [];
    for(let i = 0 ; i < n ; i ++){
        cnt[i] = 0;
        con[i] = [];
        cost[i] = [];
        real[i] = [];
    }
    for(let i = 0 ; i < edges.length ; i ++){
        let a = edges[i][0], b = edges[i][1], c = edges[i][2];
        con[a][cnt[a]++] = b;
        con[b][cnt[b]++] = a;
        cost[a][b] = Math.abs(c);
        cost[b][a] = Math.abs(c);
        real[a][b] = c;
        real[b][a] = c;
    }
    while(1){
        let qu = [], parent = [], dis = [];
        qu.push(source);
        dis[source] = 0;
        while(qu.length > 0){
            let v = qu.shift();
            if(v === destination) continue ;
            for(let i = 0 ; i < cnt[v] ; i ++){
                let w = con[v][i];
                if(dis[w] === undefined || dis[w] > dis[v] + cost[v][w] ){
                    dis[w] = dis[v] + cost[v][w];
                    qu.push(w);
                    parent[w] = v;
                }
            }
        }
        if(dis[destination] !== undefined && dis[destination] > target) return []; 
        if(dis[destination] === target) break ;
        let flag = 0;
        for(let i = destination ; parent[i]!==undefined ; i = parent[i]){
            if(real[i][parent[i]] === -1){
               flag = 1;
               cost[i][parent[i]] += target-dis[destination];
               cost[parent[i]][i] += target-dis[destination];
               break ;
            }
        }
        if(flag === 0) return [];
    }
    for(let i = 0 ; i < edges.length ; i ++){
        let a = edges[i][0], b = edges[i][1];
        edges[i][2] = cost[a][b];
    }
    return edges
};