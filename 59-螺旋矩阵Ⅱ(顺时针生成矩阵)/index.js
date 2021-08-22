/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let arr = new Array(n*n).fill(0).map((value, index) => index+1);
    const result = new Array(n).fill(0).map(() => new Array(n));
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result[top][i] = arr.shift();
        }
        for (let j = top + 1; j <= bottom; j++) {
            result[j][right] = arr.shift();
        }
        for (let k = right - 1; k >= left; k--){
            result[bottom][k] = arr.shift();
        }
        for (let l = bottom - 1; l > top; l--) {
            result[l][left] = arr.shift();
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return result;
};