/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let left = 0;
  let right = 0;
  let maxLen = 0;
  let charSet = new Set();

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      maxLen = Math.max(maxLen, charSet.size);
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLen;
};