/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let target = nums.length - 2;
    // 找到第一个比右邻居小的数，即为待交换位置
    while (nums[target] >= nums[target+1] && target >= 0) {
        target--;
    }
    // 如果target为-1，说明此时已经是降序，没有下一个排列了
    if (target >= 0) {
        // 找到第一个比待交换位置的数大的数
        let len = nums.length - 1;
        while (nums[len] <= nums[target]) {
            len--;
        }
        [nums[target], nums[len]] = [nums[len], nums[target]];
    }

    // 把交换位置后面的数升序排列即为‘下一个排列’
    let head = target + 1;
    let tail = nums.length - 1;
    while (head < tail) {
        [nums[head], nums[tail]] = [nums[tail], nums[head]];
        head++;
        tail--;
    }
    return nums;
};