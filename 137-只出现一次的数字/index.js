/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // 数字电路
    let a = 0, b = 0;
    for (const num of nums) {
        b = ~a & (b ^ num);
        a = ~b & (a ^ num);
    }
    return b;

};