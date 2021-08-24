/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let pre = new ListNode(-1);
    pre.next = head;
    let res = pre;
    while (head && head.next) {
        const next = head.next;
        // 注意交换顺序，别造成循环指向
        pre.next = next;
        head.next = next.next;
        next.next = head;

        pre = head;
        head = head.next;
    }
    return res.next;
};