/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let coins = [1]
  for (let i = 2; coins[coins.length - 1] < n; i++) {
    coins.push(i ** 2)
  }

  let dp = new Array(n + 1).fill(n + 1)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[n]
};
// @lc code=end

