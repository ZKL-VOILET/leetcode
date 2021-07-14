/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 排序 + 双指针
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let ans = nums[0] + nums[1] + nums[nums.length-1];
    for (let i = 0; i < nums.length; i++) {
        let head = i + 1;
        let tail = nums.length - 1;
        while (head < tail) {
            let sum = nums[i] + nums[head] + nums[tail];
            let err = Math.abs(sum - target);
            if (err === 0) {
                return sum;
            }else if (sum < target) {
                head++;
            }else {
                tail--;
            }
            // 判断误差是否变小
            if (err < Math.abs(ans - target)) {
                ans = sum;
            }
        }
    }
    return ans;
};