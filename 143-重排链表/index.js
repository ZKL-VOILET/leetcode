/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const nodeArr = [];
    let node = head;
    while (node) {
        nodeArr.push(node);
        node = node.next;
    }
    let start = 0;
    let tail = nodeArr.length - 1;
    while (start < tail) {
        nodeArr[start].next = nodeArr[tail];
        start++;
        nodeArr[tail].next = nodeArr[start];
        tail--;
    }
    nodeArr[start].next = null;
};