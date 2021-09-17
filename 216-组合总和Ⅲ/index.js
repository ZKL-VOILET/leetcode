/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const result = [];

    const dfs = (combine, index) => {
        if (combine.length === k) {
            if (combine.reduce((pre, cur) => pre + cur) === n) {
                result.push([...combine]);
            }
            return;
        }

        for (let i = index; i < 10; i++) {
            combine.push(i);
            dfs(combine, i+1);
            combine.pop();
        }
    }
    dfs([], 1);
    return result;
};