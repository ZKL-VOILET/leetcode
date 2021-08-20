/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        // 排序，字母异或词排序后相同
        let arr = Array.from(str);
        arr.sort();
        let key = arr.toString();

        let ans = map.has(key) ? map.get(key) : [];
        ans.push(str);
        map.set(key, ans);
    }
    return [...map.values()];
};