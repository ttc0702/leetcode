/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0) return 0
  
  let buy = new Array(k).fill(-prices[0]),
    sell = new Array(k).fill(0)
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < k; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] ? sell[j - 1] - prices[i] : -prices[i])
      sell[j] = Math.max(sell[j], buy[j] + prices[i])
    }
  }

  return sell[k - 1]
};
// @lc code=end

