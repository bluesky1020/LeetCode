/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    nums.sort((a, b) => a - b);
    if (p == 0) return 0;
    let distances = [];
    for (let i = 1; i < nums.length; i++) {
        distances.push(nums[i] - nums[i - 1]);
    }
    distances.sort((a, b) => a - b);
    let st = 0;
    let en = distances.length;
    while (en > st) {
        let mid = Math.floor((st + en) / 2);
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] > distances[mid])
                continue;
            count++;
            i++;
        }
        if (count >= p)
            en = mid;
        else
            st = mid + 1;
    }
    return distances[en];
};