/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // 贪心算法
    // let min = prices[0];
    // let max = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     min = Math.min(min, prices[i]);
    //     max = Math.max(max, prices[i] - min);
    // }
    // return max;

    // 动态规划

    const dp = new Array(prices.length).fill().map(() => new Array(2));
    // dp[i][0]代表第i天买入的最小代价；dp[i][1]代表第i天卖出的最大盈利
    dp[0][0] = -prices[0];
    dp[0][1] = 0;

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(-prices[i], dp[i-1][0]);
        dp[i][1] = Math.max(prices[i] + dp[i][0], dp[i-1][1]);        
    }
    return dp[prices.length-1][1];
};