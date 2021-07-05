/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) {
        return 1;
    }
    const len = new Set();
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!len.has(s.charAt(j))) {
                len.add(s.charAt(j));
            } else {
                ans = ans > len.size ? ans : len.size;
                len.clear();
                break;
            }
        }
    }
    return ans;
};