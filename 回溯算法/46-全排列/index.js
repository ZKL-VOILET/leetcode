/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = [];
    len = nums.length;
    // used标记是否使用过
    const dfs = (ans, used) => {
        if (ans.length === len) {
            result.push([...ans]);
            return;
        }
        // for 循环横向遍历，同层上的所有可能
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            ans.push(nums[i]);
            used[i] = true;
            // 递归，纵向遍历，一个分支上的所有可能
            dfs(ans, used);
            used[i] = false;
            ans.pop();
        }
    }
    dfs([], []);
    return result;

};