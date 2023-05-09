/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    let result = []
    let vis = [];
    for(let i = 0 ; i < m ; i ++) vis[i] = [];
    function DFS(x, y, k){
        if(x<0||y<0||x>=m||y>=n||vis[x][y]) return 1;
        vis[x][y] = 1;
        result.push(matrix[x][y]);
        let wx = x+dx[k];
        let wy = y+dy[k];
        if(DFS(wx,wy,k)){
            k = (k+1)%4;
            wx = x+dx[k];
            wy = y+dy[k];
            DFS(wx,wy,k);
        }
        return 0;
    }
    DFS(0,0,0);
    return result;
};