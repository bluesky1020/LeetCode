/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = "";
    for (let i = 0; i < symbols.length && num > 0; i++) {
        while (num >= values[i]) {
            num -= values[i];
            roman += symbols[i];
        }
    }
    return roman;
};