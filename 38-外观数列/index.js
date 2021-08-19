/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let result = '1';
    for (let i = 1; i < n; i++) {
        // 遍历前一项，统计相同数字的个数
        let next = '';
        let count = 1;
        let head = 0;
        let tail = 1;
        while (tail <= result.length) {
            if (result[head] !== result[tail]) {
                next += count + result[head]; 
                head = tail;
                count = 1;
                tail++;
            }else {
                tail++;
                count += 1;
            }

        }
        result = next;
    }
    return result;
};