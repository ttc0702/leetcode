/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
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
var reverseKGroup = function(head, k) {
  let a = b = head
  for (let i = 0; i < k; i++) {
    if (!b) return head
    b = b.next
  }
  const newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)

  function reverse(a, b) {
    let pre = null,
      curr = a
    while (curr !== b) {
      const next = curr.next
      curr.next = pre
      pre = curr
      curr = next
    }

    return pre
  }

  return newHead
};
// @lc code=end

