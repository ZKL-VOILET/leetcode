/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    // 排序，方便剪枝
    candidates.sort((a, b) => a - b);

    const bfs = (list, start, target) => {
        if (target == 0) {
            res.push(list.slice());
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 减枝：因为target小于candidates[i]，candidates升序，所以candidates从i+1后面的数肯定大于target，直接break 进行减枝
            if (target < candidates[i]) {
                break;
            }

            // 减枝：跳过重复的数字，重复的不选择 
            if (i > start && candidates[i] == candidates[i-1]) {
                continue;
            }

            list.push(candidates[i]);
            
            // i位置的选择的，所以从i+1开始选
            backtrack(list, i + 1, target - candidates[i]);

            list.pop();
        }
    }

    let res = [];
    let list = [];
    bfs(list, 0, target);
    return res;
};
