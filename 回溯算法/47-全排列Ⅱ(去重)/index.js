/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let len = nums.length;
    // 回溯去重一定要先排序，相同的元素都在一起
    nums.sort((a, b) => a-b);
    let result = [];

    const dfs = (ans, used) => {
        if (ans.length === len) {
            result.push([...ans]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // used标记元素是否使用过
            // 去重，同层的相同元素：同一层相邻的两个元素相等且前一个还没使用过
            if (used[i] || (i > 0 && nums[i] === nums[i-1] && !used[i-1])) continue;
            ans.push(nums[i]);
            used[i] = true;
            dfs(ans, used);
            ans.pop();
            used[i] = false;
        }
    }

    dfs([], []);
    return result;
};