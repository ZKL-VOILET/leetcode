/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const result = [];

    const dfs = (ans, index) => {
        if (ans.length === k) {
            result.push([...ans]);
            return;
        }
        for (let i = index; i < n+1; i++) {
            ans.push(i);
            index += 1;
            dfs(ans, index);
            ans.pop();
        }
    }
    dfs([], 1);
    return result;

};