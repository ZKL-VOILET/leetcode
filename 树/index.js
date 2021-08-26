// 书的遍历，迭代法。统一模板，只需改变两行代码的顺序
function inorder(root) {
    let result = [];
    // 栈存放节点
    let stack = [];
    if (root) stack.push(root);
    while (stack.length != 0) {
        let node = stack[stack.length-1];
        if (node) {
            stack.pop();  // 将该节点弹出，避免重复操作，下面再将右中左节点添加到栈中
            if (node.right) stack.push(node.right);  // 添加右节点（空节点不入栈）
            stack.push(node);  // 添加中节点
            stack.push(null);   // 中节点访问过，但是还没有处理，加入空节点做为标记。
            if (node.left) stack.push(node.left);  // 添加左节点（空节点不入栈）
        }else { // 只有遇到空节点的时候，才将下一个节点放进结果集
            stack.pop();
            node = stack[stack.length-1];
            stack.pop();
            result.push(node.val);
        }
    }
    return result;
}