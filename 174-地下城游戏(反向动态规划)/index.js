/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function(dungeon) {
    const M = dungeon.length;
    const N = dungeon[0].length;
    const dp = new Array(M+1).fill().map(() => new Array(N+1).fill(Infinity));
    dp[M][N-1] = 1;
    dp[M-1][N] = 1;
    // 反向动态规划
    for (let i = M-1; i >= 0; i--) {
        for (let j = N-1; j >= 0; j--) {
            dp[i][j] = Math.max(Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j], 1);
        }
    }
    return dp[0][0];
};