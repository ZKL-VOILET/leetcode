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
 var insertionSortList = function(head) {
    let dummy = new ListNode(-1, head);
    // 已排序部分
    let sorted = head;
    // 待插入节点
    let cur = head.next;

    while (cur) {
        if (sorted.val <= cur.val) {
            sorted = sorted.next;
            cur = cur.next;
        }else {
            let pre = dummy;
            // 找到插入位置的前置节点
            while (pre.next.val <= cur.val) {
                pre = pre.next;
            }
            sorted.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = sorted.next;
        }
    }

    return dummy.next;
};