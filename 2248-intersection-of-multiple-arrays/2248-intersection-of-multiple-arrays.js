/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let vis = [];
    for(let i = 0 ; i < nums.length; i ++){
        for(let k = 0 ; k < nums[i].length; k ++){
            if(vis[nums[i][k]] == undefined)
                vis[nums[i][k]] = 1;
            else
                vis[nums[i][k]] ++ ;
        }
    }
    let res = [];
    for(let i = 1 ; i <= 1000; i ++){
        if(vis[i] == nums.length)
            res.push(i);
    }
    return res;
};