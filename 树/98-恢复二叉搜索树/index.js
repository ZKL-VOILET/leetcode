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
 var recoverTree = function(root) {
    // 可能是相邻的点交换了，或者不相邻的点交换了
    let change1 = null;
    let change2 = null;
    let prev = null;
    // 中序遍历,找交换的节点
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        if (prev && root.val < prev.val) {
            change1 = root;
            if (!change2) {
                change2 = prev;
            }else{
                // 找到了，直接结束
                return;
            }
        }
        prev = root;
        inorder(root.right);
    }
    inorder(root);
    // 交换两个节点的值，结构不变
    let temp = change2.val;
    change2.val = change1.val;
    change1.val = temp;

    return root;
};