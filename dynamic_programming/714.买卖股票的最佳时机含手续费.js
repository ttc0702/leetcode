/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let buy = -prices[0],
    sell = 0
  
  for (let i = 1; i < prices.length; i++) {
    buy = Math.max(buy, sell - prices[i])
    sell = Math.max(sell, buy + prices[i] - fee)
  }

  return sell
};
// @lc code=end

