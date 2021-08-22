/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; ++i) {
        if (!obstacleGrid[i][0]) {
            result[i][0] = 1;
        }else {
            break;
        }
    }
    for (let j = 0; j < n; ++j) {
        if (!obstacleGrid[0][j]) {
            result[0][j] = 1;
        }else {
            break;
        }
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            result[i][j] = obstacleGrid[i][j] === 0 ? result[i-1][j] + result[i][j-1] : 0;
        }
    }
    return result[m-1][n-1];
}