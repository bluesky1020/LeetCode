/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let str = x.toString();
    let length = str.length;
    let halfway = Math.floor(length / 2);

    for (let i = 0; i < halfway; i++) {
        if (str.charAt(i) !== str.charAt(length - i - 1)) {
            return false;
        }
    }
    return true;
};