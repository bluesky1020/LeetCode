/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10){
        let sum = 0;
        while(num){
            sum += num%10;
            num = Math.floor(num/10);
        }
        num = sum;
    }
    return num;
};