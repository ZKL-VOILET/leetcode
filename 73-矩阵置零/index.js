/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const rows = new Set();
    const cols = new Set();
    // 找出0所在行列
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    // 置零
    for (let row of rows.values()) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
    }
    for (let col of cols.values()) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }
};