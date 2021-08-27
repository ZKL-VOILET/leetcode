/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    const dp = new Array(triangle.length).fill().map((value, index) => new Array(triangle[index].length));
    dp[0][0] = triangle[0][0];

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            // 边界情况
            if (j === 0 || j === dp[i].length-1) {
                if (j === 0) {
                    dp[i][j] = triangle[i][j] + dp[i-1][j];
                }else {
                    dp[i][j] = triangle[i][j] + dp[i-1][j-1];
                }
            }else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
            }
        }
    }
    return Math.min(...dp[triangle.length-1]);
};