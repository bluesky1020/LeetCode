/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function(arr, k) {
    let vis = [];
    let n = arr.length;
    let result = 0;
    for(let i = 0 ; i < k ; i ++){
        if(vis[i] !== undefined) continue ;
        let sub = [];
        for(let j = i ; vis[j%n] === undefined ; j += k){
            j %= n;
            sub.push(arr[j]);
            vis[j] = 1;
        }
        sub.sort((a,b)=> a-b);
        let v = sub[Math.floor(sub.length/2)];
        for(let j = 0 ; j < sub.length ; j ++)
            result += Math.abs(sub[j]-v);
    }
    return result;
};