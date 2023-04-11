/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    let strs = String.fromCharCode(...nums).split('');
    let flag = [];
    let len = nums.length;
    let result = 0;
    for(let i = 0 ; i < len ; i ++){
        let str = '';
        let count = 0;
        for(let j = i; j < len ; j ++){
            if(nums[j] % p == 0) count ++;
            if(count > k) break ;
            str += strs[j];
            if(flag[str] == undefined){
                result ++;
                flag[str] = 1;
            }       
        }
    }
    return result;
};