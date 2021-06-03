/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 超出时间限制
// var checkSubarraySum = function (nums, k) {
//     let sum = new Array(nums.length).fill(0);
//     sum[0] = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         sum[i] = sum[i - 1] + nums[i];
//     }
//     sum.shift();
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < sum.length; j++) {
//             if ((sum[j] % k) === 0) {
//                 return true;
//             }
//         }
//         sum.shift();
//         sum = sum.map((element) => {
//             return element - nums[i]
//         })
//     }
//     return false;
// };

// 前缀和+哈希表。sum[i]代表从下标0到i的数组和，sum[j] - sum[i]代表从下标i+1到j的子数组和。如果sum[j] - sum[i]是k的倍数，则sum[i]和sum[j]除以k的余数相同。利用这一性质去判断是否存在
var checkSubarraySum = function (nums, k) {
    const m = nums.length;
    if (m < 2) {
        return false;
    }
    const map = new Map();
    map.set(0, -1);
    let remainder = 0;
    for (let i = 0; i < m; i++) {
        remainder = (remainder + nums[i]) % k;
        if (map.has(remainder)) {
            const prevIndex = map.get(remainder);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 13));
