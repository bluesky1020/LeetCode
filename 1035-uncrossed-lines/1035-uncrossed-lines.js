/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let res = [];
    let n1 = nums1.length, n2 =nums2.length;
    for(let i = 0 ; i < n1 ; i ++){
        res[i] = [];
        for(let j = 0 ; j < n2 ; j ++){
            res[i][j] = 0;
            if(i > 0 && res[i-1][j] > res[i][j])
                res[i][j] = res[i-1][j];
            if(j > 0 && res[i][j-1] > res[i][j])
                res[i][j] = res[i][j-1];
            if(nums1[i] === nums2[j]){
                if( i === 0 || j === 0) res[i][j] = 1;
                else if( res[i-1][j-1]+1 > res[i][j])
                    res[i][j] = res[i-1][j-1]+1;
            }
        }
    }
    return res[n1-1][n2-1];
};