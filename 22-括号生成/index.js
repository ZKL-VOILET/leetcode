/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    // 回溯 + 递归
    const dfs = (lRemain, rRemain, str) => {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }
        // 左括号还有时，总可以选择左括号
        if (lRemain > 0) {
            dfs(lRemain-1, rRemain, str + '(');
        }
        // 只有右括号比左括号多时，才能选择右括号
        if (rRemain > lRemain) {
            dfs(lRemain, rRemain-1, str + ')');
        }
    }
    str = '';
    dfs(n, n, str);
    return result;
};