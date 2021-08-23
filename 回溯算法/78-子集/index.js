/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    // 类似77.组合，这题区别在于没有固定组合数k
    let result = [];
    const dfs = (combine, index) => {
        if (combine) {
            result.push([...combine]);
            if (combine.length === nums.length) {
                return;
            }
        }

        for (let i = index; i < nums.length; i++) {
            combine.push(nums[i]);
            index += 1;
            dfs(combine, index);
            combine.pop();
        }
    }
    dfs([], 0);
    return result;
};