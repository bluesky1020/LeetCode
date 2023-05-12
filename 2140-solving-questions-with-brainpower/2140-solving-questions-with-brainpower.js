/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let n = questions.length;
    let res = [];
    for(i = 0 ; i <= n ; i ++)
        res[i] = 0;
    for(let i = n-1 ; i >=0 ; i --){
        let en = i+questions[i][1]+1;
        if(en > n) en = n;
        res[i] = res[i+1];
        if(res[en]+questions[i][0] > res[i])
            res[i] = res[en]+questions[i][0];
    }
    return res[0];
};