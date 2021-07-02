/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

// var minimumTotal = function(triangle) {
//   let dp = []
//   dp[0] = [triangle[0][0]]
//   for (let i = 1; i < triangle.length; i++) {
//     dp[i] = []
//     for (let j = 0; j < triangle[i].length; j++) {
//       if (j === 0) {
//         dp[i][j] = dp[i - 1][j] + triangle[i][j]
//       } else if (j === triangle[i].length - 1) {
//         dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
//       } else {
//         dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
//       }
//     }
//   }

//   return Math.min(...dp[triangle.length - 1])
// };

// 滚动数组
var minimumTotal = function (triangle) {
  let dp = [triangle[0][0]]
  for (let i = 1; i < triangle.length; i++) {
    // 若使用滚动数组，第二层需倒序遍历
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      if (j === triangle[i].length - 1) {
        dp[j] = dp[j - 1] + triangle[i][j]
      } else if (j === 0) {
        dp[j] = dp[j] + triangle[i][j]
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
      }
    }
  }

  return Math.min(...dp)
}
// @lc code=end

