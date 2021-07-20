/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if (matrix.length <= 0 || matrix[0].length <= 0) {
        return [];
    }

    const order = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            order.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            order.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                order.push(matrix[bottom][i]);
            }
            for (let i = bottom - 1; i > top; i--) {
                order.push(matrix[i][left]);
            }
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return order;
};