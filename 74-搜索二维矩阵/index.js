/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let result = [];
    let m = matrix.length;
    let n = matrix[0].length - 1;
    for (let i = 0; i < m; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][n]) {
            result = matrix[i];
            break;
        }
    }

    let start = 0;
    let end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === result[mid]) {
            return true;
        }
        if (target < result[mid]) {
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return false;
};