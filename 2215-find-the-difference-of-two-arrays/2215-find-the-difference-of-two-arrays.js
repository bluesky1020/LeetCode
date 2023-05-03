/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let vis1 = [];
    let vis2 = [];
    for(let i = 0 ; i < nums1.length ; i ++)
        vis1[nums1[i]] = 1;
    for(let i = 0 ; i < nums2.length ; i ++)
        vis2[nums2[i]] = 1;
    let ans1 = [], ans2 = [];
    for(let i = 0 ; i < nums1.length ; i ++){
        if(vis2[nums1[i]]) continue ;
        vis2[nums1[i]] = 1;
        ans1.push(nums1[i]);
    }
    for(let i = 0 ; i < nums2.length ; i ++){
        if(vis1[nums2[i]]) continue ;
        vis1[nums2[i]] = 1;
        ans2.push(nums2[i]);
    }
    return [ans1,ans2]
};