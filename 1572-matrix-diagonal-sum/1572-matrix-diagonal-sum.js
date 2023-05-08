/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result = 0;
    for(let i = 0; i < mat.length; i ++){
        for(let j = 0; j < mat[0].length; j++){
            if(i == j || i+j === mat.length-1) result += mat[i][j];
        }
    }
    return result ;
};