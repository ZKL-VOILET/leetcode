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
 var sortList = function(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    // 链表的归并排序
    // 快慢指针找中点断开
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const tail = slow.next;
    slow.next = null;
    const left = sortList(head);
    const right = sortList(tail);
    return merge(left, right);

};

// 合并链表
function merge(left, right) {
    let leftList = left;
    let rightList = right;
    let dummy = new ListNode(-1);
    let temp = dummy;

    while (leftList && rightList) {
        if (leftList.val <= rightList.val) {
            temp.next = leftList;
            leftList = leftList.next;
        }else {
            temp.next = rightList;
            rightList = rightList.next;
        }
        temp = temp.next;
    }
    if (leftList) {
        temp.next = leftList;
    }else {
        temp.next = rightList;
    }
    return dummy.next;
}