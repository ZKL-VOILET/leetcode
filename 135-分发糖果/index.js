/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    const nums = new Array(ratings.length).fill(1);

    // 两次遍历，分别考虑左邻点和右邻点的大小
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            nums[i] = nums[i-1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
            nums[i] = Math.max(nums[i+1] + 1, nums[i]);
        }
    }
    return nums.reduce((prev, cur) => prev + cur);
};