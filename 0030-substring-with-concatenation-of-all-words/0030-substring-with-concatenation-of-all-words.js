/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let result = [];
    let wordFreq = {};
    let wordLen = words[0].length;
    let strLen = wordLen * words.length;
    
    // Store the frequency of each word in the words array
    for (let word of words) {
        if (word in wordFreq) {
            wordFreq[word]++;
        } else {
            wordFreq[word] = 1;
        }
    }
    
    // Check each substring of length strLen in s
    for (let i = 0; i <= s.length - strLen; i++) {
        let substr = s.substring(i, i + strLen);
        let substrFreq = {};
        
        // Store the frequency of each word in the substring
        for (let j = 0; j < substr.length; j += wordLen) {
            let word = substr.substring(j, j + wordLen);
            if (word in substrFreq) {
                substrFreq[word]++;
            } else {
                substrFreq[word] = 1;
            }
        }
        
        // Check if the substring is a concatenated substring
        let isConcatenated = true;
        for (let word in wordFreq) {
            if (!(word in substrFreq) || substrFreq[word] !== wordFreq[word]) {
                isConcatenated = false;
                break;
            }
        }
        
        // Append the starting index of the substring to the result list if it is a concatenated substring
        if (isConcatenated) {
            result.push(i);
        }
    }
    
    return result;
};