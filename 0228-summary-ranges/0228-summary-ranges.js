/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let n = nums.length, j, res = [];
    for(let i = 0 ; i < n ; i = j ){
        j = i+1;
        for( ; j < n ; j++){
            if(nums[j]-nums[j-1] !== 1) break;
        }
        if(j-i === 1){
            res.push(nums[i].toString());
        }
        else{
            res.push(nums[i]+'->'+nums[j-1]);
        }
    }
    return res;
};