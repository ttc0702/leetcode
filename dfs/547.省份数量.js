/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const len = isConnected.length
  let res = 0
  let citys = new Array(len).fill(0)
  let stack = []
  for (let i = 0; i < len; i++) {
    if (citys[i] === 0) {
      citys[i] = 1
      stack.push(i)
      res++
    }
    while (stack.length) {
      const curr = stack.pop()
      for (let j = 0; j < len; j++) {
        if (curr !== j && isConnected[curr][j] === 1 && citys[j] === 0) {
          citys[j] = 1
          stack.push(j)
        }
      }
    }
  }

  return res
};
// @lc code=end

