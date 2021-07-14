/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    let previous = map.get(s[0]);
    let ans = previous;
    for (let i = 1; i < s.length; i++) {
        let current = map.get(s[i]);
        if (previous < current) {
            ans += current - previous * 2;
        } else {
            ans += current;
        }
        previous = current;
    }
    return ans;
};