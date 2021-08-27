/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 贪心算法，每两天的利润值，取所有正值
    // let result = 0;
    // for (let i = 1; i < prices.length; i++) {
    //     result += (prices[i] - prices[i-1]) > 0 ? prices[i] - prices[i-1] : 0;
    // }
    // return result;

    // 动态规划

    const dp = new Array(prices.length).fill().map(() => new Array(2));
    dp[0][0] = -prices[0];
    dp[0][1] = 0;

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][1] - prices[i], dp[i-1][0]); // 与121题买卖一次不同的地方，第i天买入前一天必须卖出
        dp[i][1] = Math.max(dp[i-1][1], prices[i] + dp[i-1][0]);
    }
    return dp[prices.length-1][1];
};