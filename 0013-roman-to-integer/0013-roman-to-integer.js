/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let RomanToIntMapping = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    let previousValue = 0;
    for (let i = 0; i < s.length; i++) {
        let currentValue = RomanToIntMapping.get(s.charAt(i));
        result += currentValue;
        if (previousValue < currentValue) {
            result -= 2 * previousValue;
        }
        previousValue = currentValue;
    }
    return result;
};