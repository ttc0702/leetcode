/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 与 215 类似
var topKFrequent = function(nums, k) {
  let hash = {}
  for (let num of nums) {
    if (!hash[num]) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }

  let arr = []
  for (let num in hash) {
    arr.push([num, hash[num]])
  }

  arr.sort((a, b) => b[1] - a[1])

  let res = []
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }

  return res
};
// @lc code=end

