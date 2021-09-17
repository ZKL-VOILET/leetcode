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
 var rob = function(root) {
    // 后序遍历

    const map = new Map();
    const postOrder = (root) => {
        if (!root) return;

        postOrder(root.left);
        postOrder(root.right);
        // 不偷当前父节点
        let notRob = (map.get(root.left) || 0) + (map.get(root.right) || 0);

        // 偷当前节点，孩子节点不能偷
        let doRob = root.val;
        if (root.left) doRob += (map.get(root.left.left) || 0) + (map.get(root.left.right) || 0);
        if (root.right) doRob += (map.get(root.right.left) || 0) + (map.get(root.right.right) || 0);
        map.set(root, Math.max(notRob, doRob));
    }

    postOrder(root);
    return map.get(root);
};