/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let hash = {}
  for (let task of tasks) {
    if (!hash[task]) {
      hash[task] = 1
    } else {
      hash[task]++
    }
  }

  let arr = Object.values(hash)
  const max = Math.max(...arr)
  let maxCount = 0
  let sum = 0
  arr.forEach(num => {
    if (num === max) maxCount++
    sum += num
  })
  const count = Math.ceil(sum / (n + 1))

  let res
  if (max >= count) {
    res = Math.max(sum, (max - 1) * (n + 1) + maxCount)
  } else {
    res = sum
  }

  return res
};
// @lc code=end

