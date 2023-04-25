/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function(n, p, banned, k) {
    let ban = [];
    for(let i = 0 ; i < banned.length ; i ++){
        ban[banned[i]] = 1;
    }
    let root = [];
    function find_root( a ){
        if(root[a] === undefined || root[a] === a) return root[a] =a;
        return root[a] = find_root(root[a]);
    }
    let qu = [], res = [], qs = 0;
    qu.push(p);
    qu.push(0);
    res[p] = 0;
    while(qu.length > qs){
        let a = qu[qs++];
        let d = qu[qs++];
        let st = a-k+1;
        if(st < 0)
            st = k-1-a ;
        let en = a+k-1 ;
        if(en >= n)
            en = 2*n-k-a-1;
        for(let i = st ; i <= en ; i += 2){
            let j = find_root(i);
            if(j > en) break ;
            if(ban[j] || res[j] !== undefined) {
                root[j] = find_root(en+2);
                i = j;
                continue ;
            }
            res[j] = d+1;
            qu.push(j);
            qu.push(d+1);
            root[j] = find_root(en+2);
            i = j;
        }
    }
    for(let i = 0 ; i < n ; i ++){
        if(res[i] === undefined) res[i] = -1;
    }
    return res;
};