/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i+1]) {
    i--;
  }
  if (i < 0) {
    nums.reverse();
    return;
  }
  let j = nums.length - 1;
  while (j > i && nums[j] <= nums[i]) {
    j--;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  let start = i + 1, end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};