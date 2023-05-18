/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let cnt = [];
    for(let i = 0 ; i < edges.length ; i ++){
        let toNode = edges[i][1];
        if(cnt[toNode] === undefined) cnt[toNode] = 0;
        cnt[toNode] ++;
    }
    let res = [];
    for(let i = 0 ; i < n ; i ++){
        if(!cnt[i]) res.push(i);
    }
    return res;
};