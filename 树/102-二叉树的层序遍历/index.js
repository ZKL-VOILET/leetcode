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
 var levelOrder = function(root) {
    // 广度优先搜索
    let result = [];
    if (!root) {
        return result;
    }
    // 队列存放每层的节点
    let queue = [];
    queue.push(root);

    while (queue.length != 0) {
        // 存放每层的值
        let curVal = [];
        // 取出每层最初的节点个数，queue是变化的
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            curVal.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(curVal);
    }
    return result;
};