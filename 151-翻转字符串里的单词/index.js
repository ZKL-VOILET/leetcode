/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let temp = s.trim();
    temp = temp.split(' ');
    const res = [];
    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] !== '') {
            res.push(temp[i]);
        }
    }
    return res.join(' ');
};
