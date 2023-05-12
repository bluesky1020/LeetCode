/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let odd = 0;
    let even = 0;
    let count = 0;
    while(n){
        if(n%2){
            if(count%2) odd++;
            else even++;
        }
        n = Math.floor(n/2);
        count ++;
    }
    return [even, odd];
};