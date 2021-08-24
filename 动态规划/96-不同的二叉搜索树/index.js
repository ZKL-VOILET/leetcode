/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    // 动态规划，n个节点组成二叉搜索树，取k为根节点，则1~k-1构成左子树，k+1~n构成右子树，此时的二叉搜索树总数为左子树的个数*右子树的个数
    // f(n, i)求和，i从1~n。n个节点，i为根节点位置
    // f(n, i) = dp(i-1) * dp(n-i). dp(n)代表n个节点能构成的不同二叉搜索树的个数
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i < n + 1; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }
    return dp[n];
};