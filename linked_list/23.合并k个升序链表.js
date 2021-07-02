/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter(item => item)
  if (lists.length === 0) return null
  
  let dummyNode = curr = new ListNode()

  while (lists.length) {
    let min = [lists[0], 0]
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < min[0].val) {
        min = [lists[i], i]
      }
    }

    curr.next = min[0]
    curr = curr.next
    const minIndex = min[1]
    if (lists[minIndex].next) {
      lists[minIndex] = lists[minIndex].next
    } else {
      lists.splice(minIndex, 1)
    }

  }

  return dummyNode.next
};
// @lc code=end

