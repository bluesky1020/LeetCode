/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
    let result = 0;
    for(let i = 0 ; i <= 200 ; i ++)for(let j = 0 ; j <=200; j ++){
        let k = 0;
        for(; k < circles.length; k++){
            let dx = circles[k][0] - i;
            let dy = circles[k][1] - j;
            if(circles[k][2]*circles[k][2] >= dx*dx+dy*dy)
                break;
        }
        if(k != circles.length) result ++;
    }
    return result;
};