/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 动态规划（内存溢出）
// var hammingDistance = function(x, y) {
//   let z = x ^ y
//   let dp = [0]
//   for (let i = 1; i <= z; i++) {
//     if (i % 2 === 0) {
//       dp[i] = dp[i / 2]
//     } else {
//       dp[i] = dp[i - 1] + 1
//     }
//   }

//   return dp[z]
// };

// 右移 + 换位
// var hammingDistance = function (x, y) {
//   let z = x ^ y
//   let res = 0
//   while (z !== 0) {
//     res += z & 1
//     z >>= 1
//   }

//   return res
// }

// Brain Kernighan 算法
// let y = x & (x - 1)，则 y 恰为 x 删去其二进制表示中最右侧的 1 的结果
var hammingDistance = function (x, y) {
  let z = x ^ y
  let res = 0
  while (z !== 0) {
    z &= z - 1
    res++
  }

  return res
}
// @lc code=end

