/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    let head = 0;
    let tail = 1;
    let result = 0;

    while (head < s.length && tail <= s.length) {
        let set = new Set(s.slice(head, tail));
        if (set.size <= 2) {
            result = Math.max(result, tail - head); 
            tail++;
        }else {
            while (new Set(s.slice(head, tail)).size > 2) head++;
            tail = head + 1;
        }
    }
    return result;
};