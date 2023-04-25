
var SmallestInfiniteSet = function() {
    this.nums = [];
    return null
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    for(let i = 1 ; i <= 1000 ; i ++){
        if(this.nums[i]) continue ;
        this.nums[i] = 1;
        return i;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(this.nums[num])
        this.nums[num] = null;
    return null;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */