/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let res = [], n = nums.length, result = 0;
    for(let i = 0 ; i < n ; i ++) res[i] = [];
    for(let i = 1 ; i < n ; i ++){
        for(let j = i-1 ; j >=0 ; j --){
            let d = nums[i]-nums[j];
            if(d<0) d = 500-d;
            if(res[j][d] === undefined) res[j][d] = 1;
            if(res[i][d] === undefined) res[i][d] = 1;
            if(res[j][d] + 1 > res[i][d]) res[i][d] = res[j][d]+1;
            if(res[i][d] > result) result = res[i][d];
        }
    }
    return result;
};