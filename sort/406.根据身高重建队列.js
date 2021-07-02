/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let res = []
  people.sort((a, b) => b[0] - a[0])
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return 0
  })
  people.forEach(item => {
    if (res.length <= item[1]) {
      res.push(item)
    } else {
      res.splice(item[1], 0, item)
    }
  })

  return res
};
// @lc code=end

