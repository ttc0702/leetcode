/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力解法
var twoSum = function (nums, target) {
  // let len = nums.length
  // for (let i = 0; i < len - 1; i++) {
  //   for (let j = 1; j < len - i; j++) {
  //     if (nums[i] + nums[i + j] === target) return [i, i + j]
  //   }
  // }
};

// 暴力解法
var twoSum = function (nums, target) {
  // let len = nums.length
  // for (let i = 0; i < len - 1; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[i] + nums[j] === target) return [i, j]
  //   }
  // }
};

// 建立哈希表
var twoSum = function (nums, target) {
  let len = nums.length,
    hash = {}
  for (let i = 0; i < len; i++) {
    if (typeof hash[nums[i]] === 'number') {
      return [hash[nums[i]], i]
    } else {
      hash[target - nums[i]] = i
    }
  }
};

// @lc code=end

