/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 动态规划
var maxProfit = function (prices) {
  const len = prices.length
  let dp = []
  for (let price of prices) {
    dp.push([])
  }

  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
  }

  return dp[len - 1][0]
};

// 贪心
// var maxProfit = function (prices) {
//   let res = 0
//   for (let i = 1; i < prices.length; i++) {
//     const diff = prices[i] - prices[i - 1]
//     if (diff > 0) {
//       res += diff
//     }
//   }

//   return res
// }
// @lc code=end

