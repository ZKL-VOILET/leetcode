/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    const set = new Set();
    const result = new Set();

    let head = 0;
    let tail = 9;

    while (tail < s.length) {
        let temp = s.substring(head, tail+1);
        if (set.has(temp)) {
            result.add(temp);
        }else {
            set.add(temp);
        }
        head++;
        tail++;
    }
    return [...result];
};