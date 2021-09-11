/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    const map = new Map();
    let cur = head;
    if (!head) return null;
    // 复制节点的值
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    // 复制节点的指向关系
    while (cur) {
        map.get(cur).next = map.get(cur.next) ? map.get(cur.next) : null;
        map.get(cur).random = map.get(cur.random) ? map.get(cur.random) : null;
        cur = cur.next;
    }
    return map.get(head);
};