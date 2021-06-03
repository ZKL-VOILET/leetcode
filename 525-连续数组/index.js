/**
 * @param {number[]} nums
 * @return {number}
 */
// 前缀和+哈希表。思路同523
var findMaxLength = function (nums) {
    let result = 0;
    let count = 0;
    const map = new Map();
    map.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count--;
        } else {
            count++;
        }
        if (map.has(count)) {
            let preIndex = map.get(count);
            result = Math.max(result, i - preIndex);
        } else {
            map.set(count, i);
        }
    }

    return result;
};