/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if (prices.length === 0) {
        return 0;
    }
    // 动态规划，dp数组为2*k+1列.奇数为买，偶数为卖

    const dp = new Array(prices.length).fill().map(() => new Array(2*k+1).fill(0));

    // dp数组初始化
    for (let i = 1; i < 2 * k; i += 2) {
        dp[0][i] = -prices[0];
    }

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < 2 * k; j += 2) {
            dp[i][j+1] = Math.max(dp[i-1][j+1], dp[i-1][j] - prices[i]);
            dp[i][j+2] = Math.max(dp[i-1][j+2], prices[i] + dp[i-1][j+1]);
        }
    }
    return dp[prices.length-1][2*k];
};