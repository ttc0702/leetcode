/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

// 遍历一次求出链表长度，再删除
var removeNthFromEnd = function (head, n) {
  // if(!head.next) return null
  let len = 1
  let curr = head
  while (curr.next) {
    len++
    curr = curr.next
  }
  if (n === len) {
    return head.next
  }

  let target = head
  for (let i = 1; i < len; i++) {
    if (i + n === len) {
      if (target.next.next) {
        target.next = target.next.next
      } else {
        target.next = null
      }
    } else {
      target = target.next
    }
  }

  return head
};

// 空间换时间
// var removeNthFromEnd = function (head, n) {
//   if(!head.next) return null
//   let arr = [head]
//   while (head.next) {
//     arr.push(head.next)
//     head = head.next
//   }

//   const len = arr.length
//   if (n === len) {
//     return arr[1]
//   }
//   if (arr[len - n - 1]) {
//     if (arr[len - n + 1]) {
//       arr[len - n - 1].next = arr[len - n + 1]
//     } else {
//       arr[len - n - 1].next = null
//     }
//   }
//   // arr[len - n].next = null
  
//   return arr[0]
// };
// @lc code=end

