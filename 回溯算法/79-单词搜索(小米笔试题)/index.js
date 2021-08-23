/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) { 
    const m = board.length;
    const n = board[0].length;
    const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    const used = new Array(m).fill().map(() => new Array(n).fill(false));
    const dfs = (i, j, word, index) => {
        // 比较加入的每一个字符是否相等，不等直接剪枝
        if (board[i][j] != word[index]) {
            return false;
        }else if (index === word.length - 1) {
            return true;
        }

        used[i][j] = true;
        let result = false;
        for (let item of dir) {
            let newi = i + item[0];
            let newj = j + item[1];
            if (newi >= 0 && newi < m && newj >= 0 && newj < n && !used[newi][newj]) {
                let flag = dfs(newi, newj, word, index+1);
                if (flag) {
                    result = true;
                    break;
                }
            }
        }
        // 重置标记矩阵，后续继续使用
        used[i][j] = false;
        return result; // 递归函数的返回值
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let flag = dfs(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};