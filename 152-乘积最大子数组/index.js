/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    // 动态规划，乘法负负得正
    const max = new Array(nums.length);
    const min = new Array(nums.length);
    max[0] = nums[0];
    min[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max[i] = Math.max(max[i-1]*nums[i], nums[i], min[i-1]*nums[i]);
        min[i] = Math.min(min[i-1]*nums[i], nums[i], max[i-1]*nums[i]);
    }
    return Math.max(...max);
};