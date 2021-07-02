/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 回溯（超出时间限制）
// var canJump = function(nums) {
//   let flag = false
//   function dfs(index) {
//     if (index > nums.length - 1) {
//       return
//     } else if (index === nums.length - 1) {
//       flag = true
//     } else {
//       for (let i = 1; i <= nums[index]; i++) {
//         dfs(index + i)
//       }
//     }
    
//   }
//   dfs(0)

//   return flag
// };

// 贪心（维护最远可到达的位置）
var canJump = function(nums) {
  let max = 0
  let i = 0
  while (max >= i) {
    if (max >= nums.length - 1) return true
    
    max = Math.max(max, i + nums[i])
    i++
  }

  return false
};
// @lc code=end

