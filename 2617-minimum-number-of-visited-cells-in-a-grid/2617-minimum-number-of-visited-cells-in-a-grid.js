/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let vis = [];
    let next = [];
    for(let i = 0 ; i < m ; i ++){
        vis.push([]);
        next.push([]);
        for(let j = 0 ; j < n ; j ++){
            vis[i].push(0);
            next[i].push([]);
            next[i][j].push(i);
            next[i][j].push(j);
        }
    }
    function find_next(x,y,axis){
        if(axis == 0){
            if(x >= m || next[x][y][axis] == x) return x;
            return next[x][y][axis] = find_next(next[x][y][axis],y,axis);
        }
        else{
            if(y >= n || next[x][y][axis] == y) return y;
            return next[x][y][axis] = find_next(x,next[x][y][axis],axis);
        }
    }
    let qu = [];
    let qs = 0;
    qu.push(0);
    qu.push(0);
    qu.push(1);
    vis[0][0] = 1;
    while(qs < qu.length){
        let x = qu[qs++];
        let y = qu[qs++];
        let distance = qu[qs++];
        if(x == m-1 && y == n-1)
            return distance;
        let d = grid[x][y];
        for(let wx = x+1 ; wx <= x + d && wx < m ; wx++ ){
            let tx = wx;
            wx = find_next(wx,y,0);
            if(wx > x + d || wx >= m) break;
            next[tx][y][0] = x+d+1;
            if(vis[wx][y] == 1) continue;
            vis[wx][y] = 1;
            qu.push(wx);
            qu.push(y);
            qu.push(distance+1);
        }
        for(let wy = y+1 ; wy <= y+d && wy < n ; wy ++){
            let ty = wy;
            wy = find_next(x,wy,1);
            if(wy > y + d || wy >= n) break;
            next[x][ty][1] = y+d+1;
            if(vis[x][wy] == 1) continue;
            vis[x][wy] = 1;
            qu.push(x);
            qu.push(wy);
            qu.push(distance+1);
        }
    }
    return -1;
};