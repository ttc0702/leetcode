/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */

// 暴力法
// var maximalSquare = function (matrix) {
//   const yLen = matrix.length,
//     xLen = matrix[0].length
//   let max = 0
//   for (let i = 0; i < yLen; i++) {
//     for (let j = 0; j < xLen; j++) {
//       if (matrix[i][j] === '1') {
//         let curr = 1
//         for (let k = 1; i + k <= yLen - 1 && j + k <= xLen - 1; k++) {
//           let flag = true
//           for (let l = 0; l <= k; l++) {
//             if (matrix[i + k][j + l] === '0' || matrix[i + l][j + k] === '0') {
//               flag = false
//               break
//             }
//           }
//           if (flag) {
//             curr = (k + 1) ** 2
//           } else {
//             break
//           }
//         }

//         if(curr > max) max = curr
//       }
//     }
//   }

//   return max
// };

// 动态规划（ dp(i,j) 表示以 (i,j) 为右下角，且只包含 1 的正方形的边长最大值）
var maximalSquare = function (matrix) {
    const yLen = matrix.length,
      xLen = matrix[0].length
  let dp = []
  let max = 0
  for (let i = 0; i < yLen; i++) {
    dp[i] = []
    for (let j = 0; j < xLen; j++) {
      if (matrix[i][j] === '0') {
        dp[i][j] = 0
      } else {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
        }
      }
      if(dp[i][j] > max) max = dp[i][j]
    }
  }

  return max ** 2
}
// @lc code=end

