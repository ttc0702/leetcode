/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
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

// 快慢指针
// a + b = n(b + c) => a = (n - 1)(b + c) + c
var detectCycle = function(head) {
  let fast = slow = pos = head
  while (fast) {
    if (!fast.next || !fast.next.next) return null
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      while (pos !== slow) {
        pos = pos.next
        slow = slow.next
      }
      break
    }
  }

  return pos
};
// @lc code=end

