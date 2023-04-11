/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let opposite = [];
    opposite[')'] = '(';
    opposite[']'] = '[';
    opposite['}'] = '{';
    let res = [];
    for(let i = 0 ; i < s.length; i ++){
        if(opposite[s[i]]){
            if(res.length == 0 || res[res.length-1] != opposite[s[i]])
                return false
            res.pop();
        }
        else res.push(s[i]);
    }
    return res.length == 0;
};