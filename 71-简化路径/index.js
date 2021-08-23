/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    const p = path.split('/');
    const result = [];
    for (let item of p) {
        if (item === '.' || item === '') {
            continue;
        }
        result.push(item);
        if (item === '..') {
            result.pop();
            result.pop();
        }
        
    }
    return '/' + result.join('/');
};