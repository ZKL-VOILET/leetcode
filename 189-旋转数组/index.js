/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let mod = k % nums.length;
    const temp = nums.splice(nums.length - mod, mod);
    nums.unshift(...temp);
};