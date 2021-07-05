/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }
    let res = '';
    // 中心扩散: 分为奇数和偶数两种情况
    for (let i = 0; i < s.length; i++) {
        res = findPalindrome(i, i, s, res);
        res = findPalindrome(i, i+1, s, res);
    }
    return res;
};

function findPalindrome(m, n, s, res) {
    while (m >= 0 && n < s.length && s.charAt(m) === s.charAt(n)) {
        m--;
        n++;
    }
    if (n-m-1 > res.length) {
        res = s.slice(m+1, n)
    }
    return res;
}