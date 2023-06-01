/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let qu = [], n = grid.length;
    if(grid[0][0]) return -1;
    qu.push(0);
    qu.push(0);
    qu.push(0);
    grid[0][0] = 1;
    let dx = [-1,-1,-1,0,1,1,1,0];
    let dy = [-1,0,1,1,1,0,-1,-1];
    while(qu.length > 0){
        let x = qu.shift();
        let y = qu.shift();
        let d = qu.shift();
        if(x === n-1 && y === n-1) return d+1;
        for(let i = 0 ; i < 8 ; i ++){
            let wx = x + dx[i];
            let wy = y + dy[i];
            if(wx<0||wy<0||wx>=n||wy>=n||grid[wx][wy]) continue ;
            grid[wx][wy] = 1;
            qu.push(wx);
            qu.push(wy);
            qu.push(d+1);
        }
    }
    return -1;
};