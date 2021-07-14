/**
 * @param {number[]} nums
 * @return {number[][]}
 * 排序 + 双指针
 */
 var threeSum = function(nums) {
    const ans = [];

    if (nums.length < 3) {
        return ans;
    }
    nums.sort((a, b) => a-b);

    for (let i = 0; i < nums.length; i++) {
        // 去重
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let head = i + 1;
        let tail = nums.length - 1;
        while (head < tail) {
            let sum = nums[i] + nums[head] + nums[tail];
            if (sum === 0) {
                ans.push([nums[i], nums[head], nums[tail]]);
                // 去重
                while (nums[head] === nums[head+1]) head++;
                while (nums[tail] === nums[tail-1]) tail--;
                head++;
                tail--;
            }else if (sum < 0) {
                head++;
            }else {
                tail--;
            }
        }
    }
    return ans;
};