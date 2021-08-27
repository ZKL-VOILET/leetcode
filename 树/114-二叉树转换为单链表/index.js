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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (!root) return root;

    let result = new TreeNode(-1, null, null);
    let cur = result;
    const preorder = (root) => {
        if (!root) {
            return null;
        }
        cur.right = new TreeNode(root.val, null, null);
        cur = cur.right;
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    root.left = null;
    root.right = result.right.right;
};