/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    // 动态规划
    if (s.charAt(0) === '0') {
        return 0;
    }
    const dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < s.length+1; i++) {
        // 两种情况
        // 1.当前字符单独编码
        if (s.charAt(i-1) != '0') {
            dp[i] += dp[i-1];
        }
        // 2.与前一个字符组合编码
        if (i > 1 && s.charAt(i-2) != '0' && parseInt(s.charAt(i-2) + s.charAt(i-1)) <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[s.length];
};

var numDecodings = function(s) {
    // 回溯超时
    if (s.charAt(0) === '0') {
        return 0;
    }

    let count = 0;
    const dfs = (index) => {
        if (index > s.length - 1) {
            count += 1;
            return;
        }
// for循环是每次选取一个或两个数字。而不是遍历数组
        for (let i = 1; i < 3; i++) {
            if (index + i > s.length) return;
            let str = s.substr(index, i);
            if (str.charAt(0) === '0' || +str > 26) return;
            dfs(index + i);
        }
    }

    dfs(0);
    return count;
}