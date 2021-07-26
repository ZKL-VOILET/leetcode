/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    // 除数倍增，直接做减法超时
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    const flag = (dividend < 0 ? -1 : 1) * (divisor < 0 ? -1 : 1);
    let res = 0;
    res = myDivide(absDividend, absDivisor, res);
    res = res * flag;
    if (res > 2147483647) {
        res = 2147483647;
    }
    if (res < -2147483648) {
        res = -2147483648;
    }
    return res;
}; 

function myDivide(absDividend, absDivisor, res) {
    if (absDividend < absDivisor) {
        return res;
    }
    let nextDivisor = absDivisor;
    let count = 1;
    while (absDividend >= nextDivisor) {
        absDividend -= nextDivisor;
        res += count;
        nextDivisor += absDivisor;
        count += 1;
    }
    return myDivide(absDividend, absDivisor, res);
}


