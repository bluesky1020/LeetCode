/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function(nums, k, x) {
    let res = [];
    let result = [];
    for(let i = 0 ; i < nums.length; i ++){
        if(nums[i] < 0){
            let a = nums[i]*-1;
            if(res[a] == undefined) res[a] = 0;
            res[a] ++;
        }
        if(i >= k && nums[i-k] < 0){
            let a = nums[i-k]*-1;
            res[a] --;
        }
        if(i >= k-1){
            let count = 0;
            for(let a = 50 ; a > 0 ; a --){
                if(res[a] == undefined)
                    res[a] = 0;
                count += res[a];
                if(count >= x){
                    result.push(a*-1);
                    break;
                }
            }
            if( count < x)
                result.push(0);
        }
    }
    return result;
};