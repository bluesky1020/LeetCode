/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    let n = s.length, res = [], vis = [], flag = 0;
    for(let i = 0 ; i < n ; i ++){
        if(vis[s[i]]) flag = 1;
        vis[s[i]] = 1;
        if(s[i] === goal[i]) continue ;
        res.push(i);
    }
    if(res.length == 0 && flag) return true;
    if(res.length == 2 && s[res[0]] === goal[res[1]] && s[res[1]] === goal[res[0]]) return true;
    return false;
};