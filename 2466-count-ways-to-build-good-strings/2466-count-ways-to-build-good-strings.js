/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let res = [];
    const MOD = 1000000007
    res[0] = 1;
    let result = 0;
    for(let i = 1 ; i <= high ; i ++){
        res[i] = 0;
        if(i-zero >= 0 && res[i-zero]) res[i] += res[i-zero];
        if(i-one >= 0 && res[i-one]) res[i] += res[i-one];
        res[i] %= MOD;
        if(i >= low) result += res[i];
        result %= MOD;
    }
    return result;
};