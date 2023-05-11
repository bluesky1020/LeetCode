/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    let vis  = [];
    vis[1] = 1;
    for(let i = 2 ; i * i <= 1000 ; i ++){
        if(vis[i]) continue ;
        for(let j = i*i ; j <= 1000 ; j += i)
            vis[j] = 1;
    }
    let prev = 0;
    for(let i = 0 ; i < nums.length ; i ++){
        if(prev >= nums[i]) return false;
        for(let j = prev+1 ; j <= nums[i] ; j ++){
            if(vis[nums[i]-j]) continue;
            prev = j;
            break ;
        }
    }
    return true;
};