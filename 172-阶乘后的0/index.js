/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    // 直接计算阶乘会溢出
    // https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/xiang-xi-tong-su-de-si-lu-fen-xi-by-windliang-3/

    let count = 0;
    for (let i = 1; i <= n; i++) {
        let temp = i;
        while (temp > 1) {
            if (temp % 5 === 0) {
                count++;
                temp /= 5;
            }else {
                break;
            }
        }
    }
    return count;
};
