/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
var maximumSegmentSum = function (nums, removeQueries) {
    let n = nums.length;
    let start = [];
    let end = [];
    let result = [0];
    let max = 0;
    for (let i = n - 1; i >= 1; i--) {
        let id = removeQueries[i];
        let new_value = nums[id];
        start[id] = {
            en: id,
            value: new_value
        };
        end[id] = {
            st: id,
            value: new_value
        }
        let left = 0;
        let right = 0;
        if (id && end[id - 1])
            left = end[id - 1].value;
        if (id < n - 1 && start[id + 1])
            right = start[id + 1].value;
        if (left && right) {
            new_value = left + right + nums[id];
            start[end[id - 1].st].en = start[id + 1].en;
            end[start[id + 1].en].st = end[id - 1].st;
            start[end[id - 1].st].value = new_value;
            end[start[id + 1].en].value = new_value;
        }
        else if (left) {
            new_value = left + nums[id];
            start[end[id - 1].st].en = id;
            end[id].st = end[id - 1].st;
            start[end[id - 1].st].value = new_value;
            end[id].value = new_value;
        }
        else if (right) {
            new_value = left + right + nums[id];
            start[id].en = start[id + 1].en;
            end[start[id + 1].en].st = id;
            start[id].value = new_value;
            end[start[id + 1].en].value = new_value;
        }
        if (new_value > max) {
            max = new_value;
        }
        result.unshift(max);
    }
    return result;
};