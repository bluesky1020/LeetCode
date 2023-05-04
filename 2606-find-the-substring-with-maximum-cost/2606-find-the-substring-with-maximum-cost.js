/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    let result = 0, res = 0;
    chars = chars.split('');
    for(let i = 0 ; i < s.length ; i ++){
        let v = s[i].charCodeAt(0)-96;
        let index = chars.findIndex(el=>el === s[i]);
        if(index >= 0)
            v = vals[index];
        res = Math.max(v, res+v);
        if(res > result) result = res;
    }
    return result ;
};