/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let head = 0;
    let tail = head + 1;
    while (tail < nums.length) {
        if (nums[head] === nums[tail]) {
            let j = tail + 1;
            while (nums[j] === nums[tail]) {
                j++;
            }
            nums.splice(tail, j-tail-1);
        }
        head += 1;
        tail += 1;
    }

    return nums.length;
};