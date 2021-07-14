/**
 * @param {number} x
 * @return {boolean}
 * 中心扩散法
 */
 var isPalindrome = function(x) {
    let temp = x.toString();
    let center = Math.floor(temp.length / 2);
    if (temp.length % 2 === 0) {
        return helper(center-1, center, temp);
    } else {
        return helper(center, center, temp);
    }
};

function helper(m, n, s) {
    while (m >= 0 && n < s.length) {
        if (s[m] === s[n]) {
            m--;
            n++;
        } else {
            return false;
        }
    }
    return true;
}