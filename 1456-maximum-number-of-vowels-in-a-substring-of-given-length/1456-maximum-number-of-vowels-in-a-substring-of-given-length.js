/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowel = ['a','e','i','o','u'];
    let res = [];
    let result = 0;
    for(let i = 0 ; i < s.length ; i ++){
        if(!vowel.includes(s[i])) continue ;
        res.push(i);
        while(res.length > 0 && i-res[0]+1 > k){
            res.shift();
        }
        if(res.length > result) result = res.length;
    }
    return result ;
};