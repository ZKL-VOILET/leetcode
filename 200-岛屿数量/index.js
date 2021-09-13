/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;
    const dfs = (i ,j) => {
        if (grid[i][j] === '1') {
            grid[i][j] = '0';
            if (i-1 >= 0) dfs(i-1, j);
            if (i+1 < m) dfs(i+1, j);
            if (j-1 >= 0) dfs(i, j-1);
            if (j+1 < n) dfs(i, j+1);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};