/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let res = [];
    for(let i = 0 ; i < nums.length ; i ++){
        let flag = 0;
        for(let j = 0 ; j < res.length ; j ++){
            if(res[j].includes(nums[i])) continue ;
            res[j].push(nums[i]);
            flag = 1;
            break ;
        }
        if(flag) continue ;
        res.push([]);
        res[res.length-1].push(nums[i]);
    }
    return res;
};