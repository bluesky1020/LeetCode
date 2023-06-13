/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n = grid.length, result = 0;;
    for(let i = 0 ; i < n ; i ++){
        for(let j = 0 ; j < n ; j ++){
            let flag = 0;
            for(let k = 0 ; k < n ; k ++){
               if(grid[i][k] !== grid[k][j] ) flag = 1;
            }
            if(flag === 0) result ++
        }
    }
    return result;
};