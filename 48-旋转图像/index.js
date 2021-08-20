/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const n = matrix.length;
    let result = new Array(n).fill(0).map(() => new Array(n).fill(0));;
    let index = 0;
    // 第一行到最后一列，第二行到倒数第二列...
    for (let j = matrix.length-1; j >=0; j--) {
        let row = matrix[index];
        for (let k = 0; k < matrix.length; k++) {
            result[k][j] = row[k];
        }
        index++;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = result[i][j];
        }
    }
    return matrix;
};