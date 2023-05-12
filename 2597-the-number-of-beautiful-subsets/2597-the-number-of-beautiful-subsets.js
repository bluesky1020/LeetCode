/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let n = nums.length;
    let vis = [];
    for(let i = 0 ; i < n ; i ++) vis[i] = 0;
    for(let i = 0 ; i < n ; i ++){
        for(let j = i+1 ; j < n ; j ++){
            let d = Math.abs(nums[i]-nums[j]);
            if(d !== k) continue ;
            vis[i] += (1 << j);
            vis[j] += (1 << i);
        }
    }
    let limit = 1<<n, result = 0;
    for(let i = 1 ; i < limit ; i ++){
        let j = 0;
        for(; j < n ; j ++){
            if(i&(1<<j) && i&vis[j]) break ;
        }
        if(j === n) result ++;
    }
    return result;
};