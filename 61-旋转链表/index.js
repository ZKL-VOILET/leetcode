/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let len = 1;
    let linkedlist = head
    while (linkedlist.next) {
        linkedlist = linkedlist.next;
        len++;
    }
    // 链表连接成环,再断开
    linkedlist.next = head;
    let mod = k % len;
    let index = len - mod;
    while (index) {
        linkedlist = linkedlist.next;
        index--;
    }
    const result = linkedlist.next;
    linkedlist.next = null;
    return result;
};