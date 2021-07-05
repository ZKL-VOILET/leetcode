/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    res = new Array(numRows).fill(0).map(() => "");
    let row = 0;
    // 控制添加到哪行
    let down = false;
    for (const c of s) {
        res[row] += c;
        if (row === 0 || row === numRows - 1) {
            down = !down
        }
        row += down ? 1 : -1;
    }
    return res.join('');
};