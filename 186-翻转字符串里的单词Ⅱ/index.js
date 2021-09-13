/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseWords = function(s) {
    // 先翻转整个数组，再反转单个单词

    s.reverse();
    let left = 0;
    let right = s.indexOf(' ');
    while (right != -1) {
        s.splice(left, right-left, ...s.slice(left, right).reverse());
        left = right + 1;
        right = s.indexOf(' ', right+1);
    }
    s.splice(left, s.length-left, ...s.slice(left).reverse());
};