/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 暴力递归
  // if (n === 0) return 0
  // if (n === 1) return 1
  // return fib(n - 1) + fib(n - 2)

  // 带备忘录的递归
  // let memo = [0, 1]
  // return helper(memo, n)
  // function helper(memo, n) {
  //   if (typeof memo[n] === 'number') return memo[n]
  //   memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
  //   return memo[n]
  // }

  // 数组迭代
  // let dp = [0, 1]
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  // }
  
  // return dp[n]

  // 数组迭代(优化空间复杂度)
  if (n === 0) return 0
  if (n === 1) return 1
  let prev = 0
    curr = 1
  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
  }

  return curr
};
// @lc code=end

