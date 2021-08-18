/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找（半有序数组的二分查找）
 var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        // 取中间位置，[start, mid]有序或者[mid, end]有序
        let midIndex = Math.floor(start + (end-start) / 2);
        if (nums[midIndex] === target) return midIndex;
        if(nums[midIndex] >= nums[start]) {
            if (nums[start] <= target && target <= nums[midIndex]) {
                end = midIndex-1;
            }else {
                start = midIndex+1;
            }
        }else {
            if (nums[midIndex] <= target && target <= nums[end]) {
                start = midIndex+1;
            }else {
                end = midIndex-1;
            }
        }
    }
    return -1;

};
