/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    let color = [];
    let res = 0;
    let result = [];
    for(let i = 0 ; i < queries.length ; i ++){
        let id = queries[i][0];
        let c = queries[i][1];
        if(id > 0){
            if(color[id] !== undefined && color[id] === color[id-1]) res --;
            if(c === color[id-1]) res ++;
        }
        if(id < n-1){
            if(color[id] !== undefined && color[id] === color[id+1]) res --;
            if(c === color[id+1]) res ++;
        }
        color[id] = c;
        result.push(res);
    }
    return result;
};