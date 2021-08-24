/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    const l = s3.length;

    if (m + n != l) {
        return false;
    }

    const dp = new Array(m + 1).fill().map(() => new Array(n + 1));
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j > 0) {
                dp[i][j] =  dp[i][j] || (dp[i][j-1] && s2.charAt(j-1) === s3.charAt(i+j-1));
            }
            if (i > 0) {
                dp[i][j] = dp[i][j] || (dp[i-1][j] && s1.charAt(i-1) === s3.charAt(i+j-1));
            }
            
        }
    }
    return dp[m][n];
};