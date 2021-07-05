/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    str = x.toString().split('');
    const res = new Array(str.length).fill(0);
    for (let i = str.length; i >= 0; i--) {
        if (str[i] === '-') {
            res.unshift(str[i]);
        }
        res.push(str[i]);
    }
    let ans = parseInt(res.join(''));
    if (ans > 2147483647 || ans < -2147483648) {
        ans = 0;
    }
    return ans;
};