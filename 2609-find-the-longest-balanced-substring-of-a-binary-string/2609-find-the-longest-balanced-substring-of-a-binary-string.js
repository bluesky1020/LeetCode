/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let count0 = 0;
    let count1 = 0;
    let result = 0;
    for(let i = 0 ; i < s.length ; i ++){
        if(s[i] === '0') {
            if(count1 > 0){
                count1 = 0;
                count0 = 0;
            }
            count0 ++ ;
        }
        if(s[i] === '1'){
            count1 ++ ;
            result = Math.max(result,Math.min(count0,count1));
        }
    }
    return result*2;
};