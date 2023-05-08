
var FrequencyTracker = function() {
    this.count = [];
    this.frequency = [];
    for(let i = 0 ; i <= 100000 ; i ++){
        this.count[i] = 0;
        this.frequency[i] = 0;
    }
    return null;
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    this.frequency[this.count[number]] --;
    this.count[number] ++;
    this.frequency[this.count[number]] ++;        
    return null;
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if(this.count[number]){
        this.frequency[this.count[number]] --;
        this.count[number] --;
        this.frequency[this.count[number]] ++;
    }
    return null;
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return this.frequency[frequency] > 0 ;
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */