/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
    let vis = [];
    let len = s.length;
    let result = 0;
    let subsum = 0;
    for(let i = 0 ; i < len ; i ++){
        let flagId = vis[s[i]];
        if(flagId == undefined)
            flagId = -1;
        vis[s[i]] = i;
        subsum += i-flagId-1;
        subsum ++;
        result += subsum;
    }
    return result;
};