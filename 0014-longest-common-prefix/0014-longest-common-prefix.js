/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let firstString = strs[0];
    for (let i = 0; i < firstString.length; i++) {
        let currentChar = firstString.charAt(i);

        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) !== currentChar) {
                return firstString.substring(0, i);
            }
        }
    }
    return firstString;
};