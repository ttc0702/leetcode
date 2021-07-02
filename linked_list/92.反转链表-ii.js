/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// 迭代
// var reverseBetween = function(head, left, right) {
//   const dummyNode = new ListNode(0, head)
//   let pre = dummyNode
//   for (let i = 0; i < left - 1; i++) {
//     pre = pre.next
//   }

//   // 找到左右节点并切断
//   const leftNode = pre.next
//   let rightNode = leftNode
//   for (let i = left; i < right; i++) {
//     rightNode = rightNode.next
//   }
//   const succ = rightNode.next
//   pre.next = null
//   rightNode.next = null

//   reverseList(leftNode)

//   function reverseList(head) {
//     let prev = null
//     let curr = head
//     while (curr) {
//       const next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//     }
//   }

//   pre.next = rightNode
//   leftNode.next = succ
//   return dummyNode.next
// };

// 头插法
var reverseBetween = function(head, left, right) {
  const dummyNode = new ListNode(0, head)
  let pre = dummyNode
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let first = pre.next
  for (let i = left; i < right; i++) {
    const curr = first.next
    first.next = curr.next
    curr.next = pre.next
    pre.next = curr
  }

  return dummyNode.next
};

// 递归
// @lc code=end

