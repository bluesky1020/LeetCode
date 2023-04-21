/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const MOD = 1000000007;
    let count = [];
    for(let i = 0 ; i <= n ; i ++){
        count.push([]);
    }
    count[0][0] = 1;
    for(let i = 0 ; i < group.length; i ++){
        for(let j = n-group[i] ; j >= 0 ; j --){
            for(let k = minProfit ; k >=0 ; k --){
                if(count[j][k] === undefined) continue ;
                let newProfit = k+profit[i];
                if(newProfit > minProfit)
                    newProfit = minProfit;
                if(count[j+group[i]][newProfit] === undefined)
                    count[j+group[i]][newProfit] = 0;
                count[j+group[i]][newProfit] += count[j][k];
                count[j+group[i]][newProfit] %= MOD;
            }
        }
    }
    let res = 0;
    for(let i = 0 ; i <= n ; i ++){
        if( count[i][minProfit] === undefined ) continue;
        res += count[i][minProfit];
        res %= MOD;
    }
    return res;
};