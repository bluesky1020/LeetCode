/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let vis = [];
    for(let i = 0 ; i < nums.length ; i ++){
        let s = nums[i].toString();
        if(vis[s] === undefined)
            vis[s] = 1;
        else vis[s] ++;
    }
    for(let i = 0 ; i < nums.length ; i ++){
        let s = nums[i].toString();
        if(vis[s] === 1) return nums[i];
    }
};