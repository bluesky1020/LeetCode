/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    for(let i = 0 ; i < 100 ; i ++){
        let ten = Math.floor(i/10);
        let one = i%10;
        if(!nums1.includes(ten) && !nums1.includes(one)) continue ;
        if(!nums2.includes(ten) && !nums2.includes(one)) continue ;
        return i;
    }
};