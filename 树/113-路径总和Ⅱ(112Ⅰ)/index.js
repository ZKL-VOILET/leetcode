/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let result = [];
    if (!root) return result;
    // 回溯dfs
    const dfs = (root, combine) => {
        if (!root.left && !root.right) {
            if (combine.reduce((prev, cur) => prev + cur) === targetSum) {
                result.push([...combine]);
            }
            return;
        }
            
        if (root.left) {
            combine.push(root.left.val);
            dfs(root.left, combine);
            combine.pop();

        }
        if (root.right) {
            combine.push(root.right.val);
            dfs(root.right, combine);
            combine.pop();
        }

    }
    dfs(root, [root.val]);
    return result;
};