/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (nums.length <= 1) return nums.length;
    // 哈希表，O(1)直接查找某个元素是否存在
    const set = new Set(nums);
    let maxlen = 1;
    for (let num of set) {
        // 从每个可能的序列的最小值开始
        if (set.has(num-1)) {
            continue;
        }
        let length = 1;
        while (set.has(num+1)) {
            length += 1;
            num += 1;
        }
        maxlen = Math.max(length, maxlen);
    }
    return maxlen;
};