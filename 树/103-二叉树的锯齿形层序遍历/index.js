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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let result = [];
    if (!root) return result;
    let queue = [];
    let flag = true;

    queue.push(root);
    while (queue.length != 0) {
        let length = queue.length;
        let curVal = [];
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            if (flag) {
                curVal.push(node.val);
            }else {
                curVal.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        flag = !flag;
        result.push(curVal);
    }
    return result;
};