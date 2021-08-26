/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {
    // 方法一：链表转换为数组(108.有序数组转换二叉搜索树)
    // 方法二：快慢指针寻找链表的中点

    const build = (head) => {
        if (!head) {
            return null;
        }
        let fast = head;
        let slow = head;
        // 记录slow的前一个结点
        let preSlow;

        // 找到链表中点,快指针走两步慢指针走一步
        while (fast && fast.next) {
            preSlow = slow;
            fast = fast.next.next;
            slow = slow.next;
        }

        let root = new TreeNode(slow.val);
        // 是否需要构建左子树
        if (preSlow) {
            preSlow.next = null;
            root.left = build(head);
        }
        
        root.right = build(slow.next);
        return root;
    }

    return build(head);
};