/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;
    let res = [];
    for(let i = 0 ; i < n ; i ++) res[i] = [];
    function gcd(a, b) {
        let temp;
        while (b !== 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    for(let i = 1 ; i <= n ; i ++){
        let flag = 0;
        for(let j = 0 ; j+i-1 < n ; j ++){
            let a = j;
            let b = j+i-1;
            if(a == b) res[a][b] = nums[a];
            else res[a][b] = gcd(res[a][b-1], nums[b]);
            if(res[a][b] == 1) flag ++;
        }
        if(flag){
            if(i == 1){
                return n-flag;
            }
            else{
                return n+i-2;
            }
        }
        
    }
    return -1;
};