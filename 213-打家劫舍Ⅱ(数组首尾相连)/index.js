/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // 分两种情况动态规划:1、选首不选尾；2、选尾不选首

    const length = nums.length;
    if (length < 4) {
        return Math.max(...nums);
    }
    const dp = new Array(length-1);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < length-1; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }

    const dp2 = new Array(length-1);
    dp2[0] = nums[1];
    dp2[1] = Math.max(nums[1], nums[2]);
    for (let i = 2; i < length-1; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + nums[i+1]);
    }

    return Math.max(dp[length-2], dp2[length-2]);
};