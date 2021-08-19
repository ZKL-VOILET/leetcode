/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    // 一次遍历，判断每行、每列、每个小数独是否重复
    const row = [];
    const col = [];
    const smallBoard = [];
    for (let i = 0; i < board.length; i++) {
        row[i] = new Map();
        col[i] = new Map();
        smallBoard[i] = new Map();
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = board[i][j];
            if (num !== '.') {
                // 获取小数独的索引
                let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[j].has(num) || col[i].has(num) || smallBoard[index].has(num)) {
                    return false;
                } else {
                    row[j].set(num, 1);
                    col[i].set(num, 1);
                    smallBoard[index].set(num, 1);
                }
            }
        }
    }
    return true;
};