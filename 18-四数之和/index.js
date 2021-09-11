/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    // 排序+双指针。确定前两个数字，双指针找后两个
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;
            let head = j + 1;
            let tail = nums.length - 1;
            while (head < tail) {
                if (nums[i] + nums[j] + nums[head] + nums[tail] === target) {
                    result.push([nums[i], nums[j], nums[head], nums[tail]]);
                    while (head < tail && nums[head] === nums[head+1]) {
                        head++;
                    }
                    head++;
                    while (tail > head && nums[tail] === nums[tail-1]) {
                        tail--;
                    }
                    tail--;
                }else if (nums[i] + nums[j] + nums[head] + nums[tail] > target) {
                    tail--;
                }else {
                    head++;
                }
            }
        }
    }
    return result;
};