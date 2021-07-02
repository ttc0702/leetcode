/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  
  let dummyNode = curr = new ListNode()
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  if (l1) curr.next = l1
  if (l2) curr.next = l2

  // 等价写法
  // while (l1) {
  //   while (l2) {
  //     if (l1.val <= l2.val) {
  //       curr.next = l1
  //       l1 = l1.next
  //       curr = curr.next
  //       break
  //     } else {
  //       curr.next = l2
  //       l2 = l2.next
  //       curr = curr.next
  //     }
  //   }
  // }
  // if (l2) curr.next = l2

  return dummyNode.next
};
// @lc code=end

