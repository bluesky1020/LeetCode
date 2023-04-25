/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let pattern = 'abc';
    let currentIndex = 0;
    let res = 0;
    while(currentIndex < word.length){
        for(i = 0; i < 3 ; i ++){
            if(currentIndex < word.length && word[currentIndex] == pattern[i]){
                currentIndex ++ ;
                continue ;
            }
            res ++ ;
        }
    }
    return res;
};