/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     // 回溯超时
//     let result = 0;
    
//     const dfs = (row, col) => {
//         if (row === n && col === m) {
//             result++;
//             return;
//         }
//         if (row < n) {
//             dfs(row + 1, col);
//         }
//         if (col < m) {
//             dfs(row, col + 1);
//         }
//     }
//     dfs(1, 1);
//     return result;
// };

var uniquePaths = function(m, n) {
    // 动态规划状态转移方程: f(i,j)=f(i−1,j)+f(i,j−1)
    const result = new Array(m).fill(1).map(() => new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            result[i][j] = result[i-1][j] + result[i][j-1];
        }
    }
    return result[m-1][n-1];

};