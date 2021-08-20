/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let curIndex = 0;
    let nextIndex = 0;
    let count = 0;
    // 贪心算法，局部最优达到全局最优
    for (let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(i + nums[i], nextIndex);
        // i == curIndex 更新一步能达到的最远下标
        if (i == curIndex) {
            count += 1;
            curIndex = nextIndex;        
        }
    }
    return count;
};