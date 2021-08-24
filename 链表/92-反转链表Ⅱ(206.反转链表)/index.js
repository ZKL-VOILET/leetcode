/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (left === right) {
        return head;
    }
    let dummy = new ListNode(-1, head);
    let front = dummy;
    // 1、left的前一个节点
    for (let i = 0; i < left - 1; i++) {
        front = front.next;
    }

    // 2. right节点
    let rightNode = front;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    // 3. 分割链表
    let leftNode = front.next;
    let behind = rightNode.next;
    front.next = null;
    rightNode.next = null;

    // 4.反转链表（206.反转链表）
    const reverseListNode = (head) => {
        let cur = head;
        let pre = null;
        while (cur) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
    }
    reverseListNode(leftNode);

    // 5.拼接
    front.next = rightNode;
    leftNode.next = behind;

    return dummy.next;
};