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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    // 中序遍历为升序

    let nums = [];
    let flag = true;
    const inorder = (root) => {
        if (!root) {
            return;
        }

        inorder(root.left);        
        if (nums.length && nums[nums.length-1] >= root.val) {
            flag = false;
            return;
        }
        nums.push(root.val);

        inorder(root.right);
    }
    inorder(root);
    return flag;
};