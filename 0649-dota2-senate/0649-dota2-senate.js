/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let vis = [];
    let p = 0, en = 0;
    let n = senate.length;
    while(1){
        p %= n;
        if(vis[p]){
            p ++ ;
            continue ;
        }
        let st = en ;
        en ++;
        while(1){
            en %= n;
            if(en === st){
                if(senate[p] === 'R') return "Radiant";
                else return "Dire";
            }
            if(vis[en] || senate[p] === senate[en]){
                en ++;
                continue ;
            }
            vis[en] = 1;
            break ;
        }
        p ++ ;
    }
};