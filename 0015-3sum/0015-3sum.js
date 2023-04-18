/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i === 0 || nums[i] !== nums[i-1]) {
            let start = i + 1, end = nums.length - 1;
            while (start < end) {
                if (nums[start] + nums[end] === -nums[i]) {
                    result.push([nums[i], nums[start], nums[end]]);
                    while (start < end && nums[start] === nums[start+1]) start++;
                    while (start < end && nums[end] === nums[end-1]) end--;
                    start++;
                    end--;
                } else if (nums[start] + nums[end] > -nums[i]) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return result;
};