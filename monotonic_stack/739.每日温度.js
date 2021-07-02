/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// 单调栈
var dailyTemperatures = function (temperatures) {
  let stack = []

  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i]
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let index = stack[stack.length - 1]
      temperatures[index] = i - index
      stack.pop()
    }
    stack.push(i)
  }
  stack.forEach(index => temperatures[index] = 0)

  return temperatures
};
// @lc code=end

