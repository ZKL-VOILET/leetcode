/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
    const result = [];
    const wordSet = new Set(wordDict);
    const dfs = (start, combine) => {
        if (start === s.length) {
            result.push([...combine].join(' '));
            return;
        }
    
        for (let i = start + 1; i <= s.length; i++) {
            let str = s.substring(start, i);
            if (wordSet.has(str)) {
                dfs(i, [...combine, str]);
            }else {
                continue;
            }   
        }
    }

    dfs(0, []);
    return result;
};