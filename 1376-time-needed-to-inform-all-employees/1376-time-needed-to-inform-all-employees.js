/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let qu = [], con = [], cnt = [];
    for(let i = 0 ; i < n ; i ++){
        let a = manager[i];
        if(a >= 0){
            if(cnt[a] === undefined){
                cnt[a] = 0;
                con[a] = [];
            }
            con[a][cnt[a]++] = i;
        }
    }
    qu.push(headID);
    qu.push(0);
    let result = 0;
    while(qu.length > 0){
        let v = qu.shift();
        let t = qu.shift();
        if(cnt[v] === undefined){
            if(t > result) result = t;
            continue ;
        }
        for(let i = 0 ; i < cnt[v] ; i++){
            let w = con[v][i];
            qu.push(w);
            qu.push(t+informTime[v]);
        }
    }
    return result ;
};