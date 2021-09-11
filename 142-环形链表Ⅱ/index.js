/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    const map = new Map();
    while (head) {
        if (map.has(head)) {
            return map.get(head);
        }else {
            map.set(head, head);
            head = head.next;
        }
    }
    return null;
};