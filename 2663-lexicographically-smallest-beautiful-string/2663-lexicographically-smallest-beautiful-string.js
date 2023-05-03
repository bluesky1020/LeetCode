/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function(s, k) {
    let n = s.length;
    s = s.split('');
    for(let i = n-1; i >=0 ; i --){
        let v = s[i].charCodeAt(0)+1;
        for(; v < 97+k ; v ++){
            let a = String.fromCharCode(v);
            if((i > 0 && s[i-1] === a)||(i > 1 && s[i-2] === a)) continue ;
            s[i] = a;
            for(let j = i+1 ; j < n ; j++){
                for(let m = 0 ; m < k ; m ++){
                    let b = String.fromCharCode(m+97);
                    if((j > 0 && s[j-1] === b)||(j > 1 && s[j-2] === b)) continue ;
                    s[j] = b;
                    break;
                }
            }
            break ;
        }
        if(v === 97+k) continue ;
        s = s.join('');
        return s;
    }
    return '';
};