/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// hashmap
// var findDuplicate = function(nums) {
//   let hash = {}
//   for (let num of nums) {
//     if (!hash[num]) {
//       hash[num] = true
//     } else {
//       return num
//     }
//   }
// };

// 二分查找值域（因为题目中限定共有 n + 1 个整数，且整数的范围为 1 到 n，此方法才有效）
// var findDuplicate = function (nums) {
//   let L = 1,
//     R = nums.length - 1
  
//   while (L < R) {
//     const mid = Math.floor((L + R) / 2)
//     let count = 0
//     for (let num of nums) {
//       if (num <= mid) {
//         count++
//       }
//     }

//     if (count > mid) {
//       R = mid
//     } else {
//       L = mid + 1
//     }
//   }

//   return L
// }

// 快慢指针（因为题目中限定共有 n + 1 个整数，且整数的范围为 1 到 n，此方法才有效）
var findDuplicate = function (nums) {
  let fast = slow = pos = nums[0]
  while (fast) {
    fast = nums[nums[fast]]
    slow = nums[slow]
    if (fast === slow) {
      while (pos !== slow) {
        pos = nums[pos]
        slow = nums[slow]
      }
      break
    }
  }

  return pos
}
// @lc code=end

