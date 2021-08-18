/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if ((s.length % 2) !== 0) {
        return false;
    }

    // 右括号为key，左括号为value
    const map = new Map([[')', '('], [']', '['], ['}', '{']]);
    // 栈保存左括号，且后出现的左括号先出栈
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) === stack[stack.length-1]) {
                stack.pop();
            }else {
                return false;
            }
        }else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
};

