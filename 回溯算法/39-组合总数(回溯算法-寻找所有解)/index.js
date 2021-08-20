/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    // target待组合的值，combine已经组合的数组，index当前索引
    const dfs = (target, combine, index) => {
        if (target === 0) {
            result.push(combine);
            return;
        }
        if (index >= candidates.length) {
            return;
        }
        // 选择当前值
        if (target >= candidates[index]) {
            dfs(target-candidates[index], [...combine, candidates[index]], index);
        }
        // 跳过当前值
        dfs(target, combine, index+1);
    }
    dfs(target, [], 0);
    return result;
};


// 回溯算法，for循环遍历同层所有的情况，递归遍历分支上的所有可能
var combinationSum = function(candidates, target) {
    const result = [];
    const dfs = (target, combine, index) => {
        if (target <= 0) {
            if (target === 0) {
                result.push([...combine]);
            }
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            combine.push(candidates[i]);
            dfs(target-candidates[i], combine, i);
            combine.pop();
        }
    }
    let combine = [];
    dfs(target, combine, 0);
    return result;
};