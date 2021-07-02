/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// Fibonacci 数列
// var climbStairs = function(n) {
//   let [a, b] = [1, 2]
//   for(let i = 1; i < n; i++) {
//       [a, b] = [b, a + b]
//   }
//   return a
// };

// 动态规划
var climbStairs = function (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};

// @lc code=end

