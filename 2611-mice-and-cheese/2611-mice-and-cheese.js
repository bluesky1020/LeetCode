/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    let dif = [];
    let result = 0
    for(let i = 0 ; i < reward1.length ; i ++){
        dif[i] = reward1[i]-reward2[i];
        result += reward2[i];
    }
    dif.sort((a,b)=> b-a);
    for(let i = 0 ; i < k ; i ++)
        result += dif[i];
    return result;
};