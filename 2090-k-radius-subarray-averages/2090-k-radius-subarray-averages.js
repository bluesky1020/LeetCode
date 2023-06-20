/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const n = nums.length;
  const avgs = new Array(n).fill(-1);
  const prefixSum = new Array(n+1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i-1];
  }
  for (let i = 0; i < n; i++) {
    const left = Math.max(0, i-k);
    const right = Math.min(n-1, i+k);
    if (right-left+1 < 2*k+1) {
      continue;
    }
    const sumSubarray = prefixSum[right+1] - prefixSum[left];
    avgs[i] = Math.floor(sumSubarray / (2*k+1));
  }
  return avgs;
};