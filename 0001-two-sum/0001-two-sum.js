/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let vis = [];
    let res = [];
    for(let i = 0 ; i < nums.length; i ++){
        let a = target - nums[i];
        if(vis[a.toString()] != undefined){
            res.push(vis[a.toString()]);
            res.push(i);
            break ;
        }
        vis[nums[i].toString()] = i;
    }
    return res;
};