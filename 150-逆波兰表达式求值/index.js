/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            let num1 = stack.pop();
            let num2 = stack.pop();
            if (tokens[i] === '+') {
                stack.push(num2 + num1);
            }else if (tokens[i] === '-') {
                stack.push(num2 - num1);
            }else if (tokens[i] === '*') {
                stack.push(num2 * num1);
            }else {
                stack.push(num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1));
            }
        }else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};