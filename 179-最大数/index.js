/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    // 自定义排序函数，b + a > a + b
    nums.sort((a, b) => (b.toString() + a.toString()) - (a.toString() + b.toString()));
    if (parseInt(nums.join('')) === 0) return '0';
    return nums.join('');
};