/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    const dp = new Array(prices.length).fill().map(() => new Array(2));
    // 初始化
    dp[0][0] = -prices[0];
    dp[0][1] = 0; // 不是 -fee，一次买卖过后盈利为负，则不如不卖
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], prices[i] + dp[i-1][0] - fee);
    }
    return dp[prices.length-1][1];
};