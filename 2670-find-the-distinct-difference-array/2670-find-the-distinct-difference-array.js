/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let vis = [];
    let count = 0;
    let result = [];
    for(let i = 0 ; i < nums.length ; i ++){
        if(!vis[nums[i]]) count ++;
        vis[nums[i]] = 1;
        result.push(count);
    }
    count = 0;
    for(let i = nums.length-1 ; i > 0 ; i --){
        if(vis[nums[i]] !== 2) count ++;
        vis[nums[i]] = 2;
        result[i-1] -= count;
    }
    return result;
};