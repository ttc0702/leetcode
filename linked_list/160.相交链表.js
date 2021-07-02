/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 先分别遍历两个链表，求出长度，再移动较长的链表的指针，使长链表的长度与短链表一致，再同时遍历两个链表
var getIntersectionNode = function(headA, headB) {
  let lengthA = lengthB = 0
  let A = headA,
    B = headB
  while (A) {
    lengthA++
    A = A.next
  }
  while (B) {
    lengthB++
    B = B.next
  }
  let diff = Math.abs(lengthA - lengthB)

  if (lengthA > lengthB) {
    while (diff) {
      headA = headA.next
      diff--
    }
  } else if (lengthB > lengthA) {
    while (diff) {
      headB = headB.next
      diff--
    }
  }
  while (headA) {
    if (headA === headB) {
      return headA
    }
    headA = headA.next
    headB = headB.next
  }

  return null
};
// @lc code=end

