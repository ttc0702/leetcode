/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  let appeared = new Map()
  while (head) {
    if (appeared.has(head)) {
      return true
    }
    appeared.set(head, true)
    head = head.next
  }

  return false
};

// 快慢指针
// var hasCycle = function(head) {
//   let fast = slow = head
//   while (fast) {
//     if (!fast.next || !fast.next.next) break
    
//     fast = fast.next.next
//     slow = slow.next
//     if (fast === slow) {
//       return true
//     }
//   }

//   return false
// };

// @lc code=end

