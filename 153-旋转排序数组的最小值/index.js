/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    // 二分查找
    let head = 0;
    let tail = nums.length - 1;

    while (head < tail) {
        let mid = Math.floor((head+tail)/2);
        if (nums[mid] < nums[tail]) {
            tail = mid;
        }else {
            head = mid + 1;
        }
    }
    return nums[head];
};