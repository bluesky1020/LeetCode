/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    let root = [];
    function find_root( a ){
        if(root[a] === undefined || root[a] === a) return root[a] = a;
        return root[a] = find_root(root[a]);
    }
    for(let i = 0 ; i < strs.length ; i ++){
        for(let j = i + 1 ; j < strs.length ; j ++){
            let dif = 0;
            for(let k = 0 ; k < strs[i].length ; k ++){
                if(strs[i][k] !== strs[j][k]) dif ++;
            }
            if(dif > 2) continue ;
            let root_0 = find_root(i);
            let root_1 = find_root(j);
            if(root_0 !== root_1) root[root_0] = root_1;
        }
    }
    let vis = [], result = 0;
    for(let i = 0 ; i < strs.length ; i ++){
        let a = find_root(i);
        if(vis[a]) continue ;
        vis[a] = 1;
        result ++ ;
    }
    return result;
};