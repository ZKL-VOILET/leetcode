/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 题意本应使用二分查找，此处我是用双指针解决
 var searchRange = function(nums, target) {
    let head = 0;
    let tail = nums.length - 1;
    while (nums[head] < target || nums[tail] > target) {
        if (nums[head] < target) head++;
        if (nums[tail] > target) tail--;
    }
    if (head > tail) {
        return [-1, -1];
    }else {
        return [head, tail];
    }

};
