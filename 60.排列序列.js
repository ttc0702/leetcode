/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let res = ''

  let arr = []
  let factorial = 1
  for (let i = 1; i <= n; i++) {
    arr.push(i)
    factorial *= i
  }
  search()
  return res

  // 只是常规的循环，不是 dfs，故可以将 res, arr, factorial, k 均设计为全局变量
  function search() {
    const len = arr.length
    if (len === 1) {
      res += arr[0]
      return
    }
    if (k === 0) {
      res += arr.reverse().join('')
      return
    }
    
    factorial /= len

    const int = Math.ceil(k / factorial)
    k = k % factorial

    res += arr[int - 1]
    arr.splice(int - 1, 1)
    search()
  }
};
// @lc code=end

