/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let nextIndex = 0;
    if (nums.length === 1) {
        return true;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        // i <= nextIndex 保证i是可到达的位置。[0,1,2,4]
        if (i <= nextIndex) {
            nextIndex = Math.max(i + nums[i], nextIndex);
        }
        
        if (nextIndex >= nums.length - 1) {
            return true;
        }
    }
    return false;
};