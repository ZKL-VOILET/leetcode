/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // 创建两个链表，存放小、大两个部分的值
    let small = new ListNode(-1, head);
    const smallHead = small;
    let large = new ListNode(-1, head);
    const largeHead = large;

    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        }else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
};