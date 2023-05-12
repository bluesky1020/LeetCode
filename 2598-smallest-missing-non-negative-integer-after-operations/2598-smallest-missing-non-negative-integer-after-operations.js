/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    let vis = [];
    for(let i = 0 ; i < nums.length ; i ++){
        let m = nums[i] % value;
        if(nums[i] < 0) m = (value+m)%value;
        if(vis[m] === undefined) vis[m] = 0;
        vis[m]++;
    }
    let multi = Infinity, id = 0;
    for(let i = 0 ; i < value ; i ++){
        if(vis[i] === undefined) vis[i] = 0;
        if(multi > vis[i]) {
            multi = vis[i];
            id = i;
        }
    }
    return value*multi+id;
};