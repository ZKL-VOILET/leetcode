/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const ans = [];
    for (let i = 0; i < strs[0].length; i++) {
        let str = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (str != strs[j][i]) {
                str = '';
                break;
            }
        }
        if (str) {
            ans.push(str);
        }else{
            break;
        }
    }
    return ans.join('');
};