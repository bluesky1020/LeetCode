
var UndergroundSystem = function() {
    this.list = [];
    this.averageTime = {};
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.list[id] = {
        stationName: stationName,
        time : t
    };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let key = this.list[id].stationName+' '+stationName;
    let dt = t-this.list[id].time;
    if(this.averageTime[key] === undefined) this.averageTime[key] = {
        time: 0,
        round: 0
    };
    this.averageTime[key].time += dt;
    this.averageTime[key].round ++;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = startStation+' '+endStation;
    return (this.averageTime[key].time / this.averageTime[key].round).toFixed(5) 
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */