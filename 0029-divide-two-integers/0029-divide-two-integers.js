/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    const isNegative = (dividend < 0) !== (divisor < 0);
    if(dividend < 0) dividend *= -1;
    if(divisor < 0) divisor *=-1;
    let res = Math.floor(dividend/divisor)*(isNegative?-1:1);
    // if(res > 2147483647)
    //     res = 2147483647;
    // if(res < -2147483647)
    //     res = -2147483647;
    return res;
};