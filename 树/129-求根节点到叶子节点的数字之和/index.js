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
 * @return {number}
 */
 var sumNumbers = function(root) {
    let sum = 0;

    const dfs = (root, combine) => {
        if (!root.left && !root.right) {
            sum += +combine.join('');
        }

        if (root.left) dfs(root.left, [...combine, root.left.val]);
        if (root.right) dfs(root.right, [...combine, root.right.val]);
    }

    dfs(root, [root.val]);
    return sum;
};