/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    const sum = new Array(nums.length).fill(0);
    sum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 动态规划，始终保持最大
        sum[i] = Math.max(sum[i-1] + nums[i], nums[i]);
    }
    return Math.max(...sum);
};