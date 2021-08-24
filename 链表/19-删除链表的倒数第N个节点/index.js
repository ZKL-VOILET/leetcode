/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // 添加一个哑节点
    const result = new ListNode(0, head);
    let ans = result;
    let length = 0;
    while (head) {
        length += 1;
        head = head.next;
    }

    const target = length - n;
    for (let i = 0; i < target; i++) {
        ans = ans.next;
    }
    ans.next = ans.next.next;
    return result.next;
};

// 方法2：双指针--快慢指针

var removeNthFromEnd = function(head, n) {
    const ln = new ListNode(0, head);
    let slow = ln;
    let fast = head;
    // 让fast超前slow指针n个节点，当fast到末尾时，slow恰好指向要删除的节点的前驱节点
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return ln.next;
}