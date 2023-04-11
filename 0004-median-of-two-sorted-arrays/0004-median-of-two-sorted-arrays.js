/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    while (i < m) {
        mergedArray.push(nums1[i]);
        i++;
    }
    while (j < n) {
        mergedArray.push(nums2[j]);
        j++;
    }
    let length = mergedArray.length;
    if (length % 2 === 0) {
        let middle = length / 2;
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        let middle = Math.floor(length / 2);
        return mergedArray[middle];
    }
};