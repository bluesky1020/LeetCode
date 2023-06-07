/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let result = 0;
    while(a||b||c){
        let ra = a%2, rb = b%2 , rc = c%2;
        a = Math.floor(a/2);
        b = Math.floor(b/2);
        c = Math.floor(c/2);
        if((ra|rb) === rc) continue ;
        if(rc === 0){
            if(ra) result ++ ;
            if(rb) result ++ ;
        }
        else result ++;
    }
    return result;
};