/**
 * @param {number} columnNumber
 * @return {string}
 */
// 26进制
 var convertToTitle = function(columnNumber) {
    let result = [];
    while (columnNumber > 0) {
        columnNumber--;
        let temp = columnNumber % 26;
        // 数字与字母的转换
        result.push(String.fromCharCode(temp + 'A'.charCodeAt()));
        columnNumber = (columnNumber - temp) / 26
    }
    return result.reverse().join('');
};