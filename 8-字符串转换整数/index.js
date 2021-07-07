/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    s = s.trimStart();
    const res = [];
    if (s[0] != '+' && s[0] != '-' && isNaN(s[0])) {
        return 0;
    }

    for (const c of s) {
        if (isNaN(c) && c != '-' && c != '+') {
            break;
        } else {
            res.push(c);
        }
    }

    let ans = parseInt(res.join('').trim());
    if (ans > 2147483647) {
        return 2147483647;
    }else if (ans < -2147483648) {
        return -2147483648;
    }else if (isNaN(ans)) {
        return 0;
    }else {
        return ans;
    }

};