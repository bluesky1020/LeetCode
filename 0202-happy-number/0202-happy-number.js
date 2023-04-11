/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let vis = [];
    n = n.toString();
    while(1){
        if(n == '1') return true;
        if(vis[n]) return false;
        vis[n] = 1;
        let sum = 0;
        for(let i = 0 ; i < n.length; i ++){
            let number = Number(n[i]);
            sum += number*number;
        }
        n = sum.toString();
    }
};