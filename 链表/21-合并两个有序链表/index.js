/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let result = new ListNode();
    let pre = result;

    while(l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1;
            l1 = l1.next;
        }else {
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 ? l1 : l2;
    return result.next;
};