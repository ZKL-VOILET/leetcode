/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let res = 1;
    let count = 1;
    const originX = x;
    let abs = Math.abs(n);
    if (!abs) return 1.0;
    while ((count / 2) < abs) {
        res *= x;
        x = res;
        count *= 2;
    }
    let error = count / 2 - abs;
    for (let i = 0; i < error; i++) {
        res /= originX;
    }
    res = n >= 0 ? res : 1 / res;
    return res;
};