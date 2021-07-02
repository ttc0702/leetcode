/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

// 翻转后一半链表
var isPalindrome = function(head) {
  let length = 0
  let L = head
  while (L) {
    length++
    L = L.next
  }

  if (length === 1) {
    return true
  } else if (length === 2) {
    return head.val === head.next.val
  }

  let prev = head
  for (let i = 0; i < Math.floor(length / 2); i++) {
    prev = prev.next
  }

  let curr = prev.next
  prev.next = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (head.val !== prev.val) return false
    head = head.next
    prev = prev.next
  }

  return true
};

// 快慢指针一次遍历
// var isPalindrome = function (head) {

// }
// @lc code=end

