/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    const seen = new Set();
    arr2 = arr2.filter(num => {
        if (seen.has(num)) {
            return false;
        } else {
            seen.add(num);
            return true;
        }
    });
    arr2.sort((a,b)=> a-b);
    let n = arr2.length, m = arr1.length;
    let res1 = [], res = [];
    for(let i = 0 ; i < m ; i ++){
        res[i] = [];
        res1[i] = Infinity;
        for(let j = 0 ; j < n ; j ++){
            res[i][j] = Infinity;
        }
    }
    res1[0] = 0;
    for(let i = 0 ; i < n ; i ++){
        if(arr2[i] < arr1[0]) res[0][i] = 1;
        else res[0][i] = 0;
    }
    for(let i = 1 ; i < m ; i ++){
        if(res1[i-1] !== Infinity && arr1[i-1]<arr1[i]) res1[i] = res1[i-1];
        for(let j = 0 ; j < n ; j ++){
            if(res[i-1][j]!== Infinity && arr1[i] > arr2[j] && res1[i] > res[i-1][j]) res1[i] = res[i-1][j];
            if(j > 0 && res[i-1][j-1] !== Infinity && res[i][j] > res[i-1][j-1]+1){
                res[i][j] = res[i-1][j-1]+1;
            }
            if(arr2[j] > arr1[i-1] && res1[i-1] !== Infinity && res[i][j] > res1[i-1]+1)
                res[i][j] = res1[i-1]+1;
            if(res1[i]!== Infinity &&arr2[j] >= arr1[i] && res[i][j] > res1[i]) res[i][j] = res1[i];
        }
    }
    let result = Math.min(res[m-1][n-1], res1[m-1]);
    if(result === Infinity) return -1;
    return result;
};