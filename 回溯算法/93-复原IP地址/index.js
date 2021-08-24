/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    if (s.length > 12 || s.length < 4) {
        return [];
    }
    let result = [];
    const count = 4;
    // index代表此次开始选取的位置
    const dfs = (combine, index) => {
        if (combine.length === count && index === s.length) {
            result.push(combine.join('.'));
            return;
        }
        // 没有使用完
        if (combine.length === count && index < s.length) {
            return;
        }
        // for循环：每次截取的子串的长度
        for (let i = 1; i < 4; i++) {
            // 截取越界
            if (index + i > s.length) return;
            let str = s.substr(index, i);
            if (i > 1 && str.charAt(0) === '0') return;
            if (i > 1 && +str > 255) return; 
            combine.push(str);
            dfs(combine, index + i);
            combine.pop();
        }
    }
    dfs([], 0);
    return result;
};