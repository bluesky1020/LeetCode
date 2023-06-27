/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    let n = nums.length ;
    let tp = [], totalCost = 0;
    for(let i = 0 ; i < n ; i ++){
        tp[i] = {
            value: nums[i],
            index: i
        }
        totalCost += cost[i];
    }
    tp.sort((a,b)=> a.value-b.value);
    let res = [], cnt = 0;
    for(let i = 0 ; i < n ; i ++){
        if(cnt > 0 && res[cnt-1].value === tp[i].value)
            res[cnt-1].cost += cost[tp[i].index]
        else
            res[cnt++]={
                value: tp[i].value,
                cost: cost[tp[i].index]
            }
    }
    let currentCost = 0, standard;
    for(let i = 0 ; i < cnt ; i ++){
        currentCost += res[i].cost;
        if(currentCost * 2 >= totalCost){
            standard = res[i].value;
            break ;
        }
    }
    let result = 0;
    for(let i = 0 ; i < n ; i ++){
        result += cost[i]*Math.abs(nums[i]-standard);
    }
    return result;
};