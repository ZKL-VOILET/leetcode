/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const result = [];
    // 判断是否回文串
    const isPalindrome = (s) => {
        let head = 0;
        let tail = s.length - 1;
        while (head < tail) {
            if (s[head] === s[tail]) {
                head++;
                tail--;
            }else {
                return false;
            }
        }
        return true;
    }
    // 回溯
    const dfs = (combine, index, length) => {
        if (length === s.length) {
            result.push([...combine]);
            return;
        }

        for (let i = 1; i <= s.length; i++) {
            // 判断截取子串是否越界
            if (index + i > s.length) {
                return;
            }
            let substr = s.substr(index, i);
            if (isPalindrome(substr)) {
                dfs([...combine, substr], index+i, length+i);
            }else {
                continue;
            }
        }
    }
    dfs([], 0, 0);
    return result;
};