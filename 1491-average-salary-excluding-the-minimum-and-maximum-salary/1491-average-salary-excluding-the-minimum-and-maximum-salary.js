/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b)=>a-b);
    let sum = 0;
    for(let i = 1 ; i < salary.length-1; i++){
        sum += salary[i];
    }
    return (sum / (salary.length - 2)).toFixed(5);
};