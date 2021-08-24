/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let used = new Array(nums.length).fill(false);

    const dfs = (combine, index, used) => {
        if (combine) {
            result.push([...combine]);
            if (combine.length === nums.length) {
                return;
            }
        }

        for (let i = index; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
            combine.push(nums[i]);
            used[i] = true;
            dfs(combine, i + 1, used);
            combine.pop();
            used[i] = false;
        }
    }

    dfs([], 0, used);
    return result;
};
