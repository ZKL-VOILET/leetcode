/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeBitwiseAnd = function(left, right) {
    let count = 0;
    // 找到公共前缀，不同的后缀只有0或1，&后的值为0
    while (left < right) {
        left = left >> 1;
        right = right >> 1;
        count++;
    }
    return left << count;
};