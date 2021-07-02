/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */

// 空间复杂度过高，内存溢出
// var largestRectangleArea = function (heights) {
//   let maxHeight = Math.max(...heights)
//   let minHeight = Math.min(...heights)
//   let arrs = []
//   let obj = {}
//   heights.forEach(height => obj[height] = true)
//   for (let i = 0; i <= maxHeight; i++) {
//     if(obj[i]) arrs[i] = []
//   }
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = minHeight; j <= heights[i]; j++) {
//       if(obj[j]) arrs[j].push(i)
//     }
//   }

//   let max = 0,
//     curr
//   for (let i = 0; i < arrs.length; i++) {
//     let arr = arrs[i]
//     if(!arr) continue
//     for (let j = 0; j < arr.length; j++) {
//       if (j === 0 || arr[j] - arr[j - 1] !== 1) {
//         curr = i
//       } else {
//         curr += i
//       }
//       if (curr > max) {
//         max = curr
//       }
//     }
//   }

//   return max
// };

// 单调栈
var largestRectangleArea = function (heights) {
  let maxArea = 0
  let stack = []
  heights = [0, ...heights, 0]

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const max = stack.pop()
      maxArea = Math.max(maxArea, heights[max] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }

  return maxArea
}
// @lc code=end

