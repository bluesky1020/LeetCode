/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    const n = number.length;
    let maxString = "";
    for (let i = 0; i < n; i++) {
        if (number[i] === digit) {
            let newString;
            if (i === 0) {
                newString = number.substring(1, n);
            } else {
                newString = number.substring(0, i) + number.substring(i + 1, n);
            }
            if (newString > maxString) {
                maxString = newString;
            }
        }
    }
    return maxString;
};