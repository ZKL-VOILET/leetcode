/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 动态规划
    // 一天有五个状态：1.无操作；2.第一次买入；3.第一次卖出；4.第二次买入；5.第二次卖出
    const dp = new Array(prices.length).fill().map(() => new Array(5));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[0][2] = 0
    dp[0][3] = -prices[0];
    dp[0][4] = 0;
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i-1][0];
        // 第一次买入
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i-1][4], prices[i] + dp[i-1][3]);
    }
    return dp[prices.length-1][4];
};