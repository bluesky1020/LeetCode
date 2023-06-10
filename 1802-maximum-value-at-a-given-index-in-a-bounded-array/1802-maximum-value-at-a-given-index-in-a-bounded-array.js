/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let st = 1 , en = maxSum+1 ;
    
    function Calc( v , count){
        if(count < v)
            return (2*v-1-count)*count/2;
        else
            return (v-1+1)*(v-1)/2+count-v+1
    }
    
    while(en > st){
        let mid = Math.floor((st+en)/2);
        let v = Calc(mid, index)+Calc(mid, n-index-1)+mid;
        if(v <= maxSum) st = mid+1;
        else en = mid;
    }
    return en-1;
};