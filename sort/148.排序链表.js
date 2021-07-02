/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */

// 归并排序
var sortList = function(head) {
  if (!head || !head.next) return head
  let slow = fast = head
  let preSlow = null
  while (fast) {
    preSlow = slow
    slow = slow.next
    fast = fast.next ? fast.next.next : null
  }
  preSlow.next = null
  return merge(sortList(head), sortList(slow))
};

function merge(left, right) {
  let dummyNode = new ListNode()
  let prev = dummyNode;
  while (left && right) {
    if (left.val <= right.val) {
      prev.next = left
      left = left.next
    } else {
      prev.next = right
      right = right.next
    }
    prev = prev.next
  }
  if (left) {
    prev.next = left
    left = left.next
    prev = prev.next
  }
  if (right) {
    prev.next = right
    right = right.next
    prev = prev.next
  }

  return dummyNode.next
}
// @lc code=end

