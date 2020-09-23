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

// 暴力解法
var climbStairs = function(n) {
  
  // Fibonacci 数列
  let [a, b] = [1, 2]
  for(let i = 1; i < n; i++) {
      [a, b] = [b, a + b]
  }
  return a
};

// @lc code=end

