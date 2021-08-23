/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    // nums.sort();
    // 插入排序
    let temp;
    for (let i = 1; i < nums.length; i++) {
        temp = nums[i];
        let j = i;
        while (j > 0 && nums[j-1] > temp) {
            nums[j] = nums[j-1];
            j--;
        }
        nums[j] = temp;
    }
};