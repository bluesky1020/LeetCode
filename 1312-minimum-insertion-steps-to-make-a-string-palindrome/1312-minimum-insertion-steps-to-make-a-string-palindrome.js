/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let len = s.length;
    let res = [];
    let result = len;
    for(let i = 0 ; i < len ; i ++) res[i] = [];
    res[0][0] = 0;
    for(let i = 0 ; i < len ; i ++){
        for(let j = 0 ; i+j <= len ; j ++){
            if(res[i][j] === undefined) continue ;
            if(i+j >= len-1){
                if(res[i][j] < result)
                    result = res[i][j];
                continue ;
            }
            if(s[i] == s[len-1-j]){
                if(res[i+1][j+1] === undefined || res[i+1][j+1] > res[i][j])
                    res[i+1][j+1] = res[i][j];
            }
            else{
                if(res[i+1][j] === undefined || res[i+1][j] > res[i][j]+1)
                    res[i+1][j] = res[i][j]+1;
                if(res[i][j+1] === undefined || res[i][j+1] > res[i][j]+1)
                    res[i][j+1] = res[i][j]+1;
            }
        }
    }
    return result ;
};