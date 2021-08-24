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
 var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let cur = new ListNode(-1, head);
    let result = cur;
    // 注意next节点为null的问题
    while (cur.next && cur.next.next) {
        if (cur.next.val != cur.next.next.val) {
            cur = cur.next;
        }else {
            let val = cur.next.val;
            while (cur.next && cur.next.val === val ) {
                cur.next = cur.next.next;
            }
        }
    }

    return result.next;
}