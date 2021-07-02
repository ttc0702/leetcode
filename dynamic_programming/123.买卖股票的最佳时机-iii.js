/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length
  let dp = []
  for (let price of prices) {
    dp.push([])
  }

  dp[0][0] = -prices[0]
  dp[0][1] = 0
  dp[0][2] = -prices[0]
  dp[0][3] = 0
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i])
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i])
  }

  return dp[len - 1][3]
};
// @lc code=end

