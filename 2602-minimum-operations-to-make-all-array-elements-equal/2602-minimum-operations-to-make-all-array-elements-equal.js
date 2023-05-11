/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let sum = [];
    sum[0] = 0;
    for(let i = 1 ; i <= n ; i ++) sum[i] = sum[i-1]+nums[i-1];
    function findPosition(v){
        let st = 0 , en = n;
        while(en > st){
            let mid = Math.floor((en+st)/2);
            if(v >= nums[mid]) st = mid+1;
            else en = mid;
        }
        return en;
    }
    let res = [];
    for(let i = 0 ; i < queries.length ; i ++){
        let p = findPosition(queries[i]);
        let result = (2*p-n)*queries[i]-2*sum[p]+sum[n];
        res.push(result);
    }
    return res;
};