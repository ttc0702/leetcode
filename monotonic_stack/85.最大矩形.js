/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const yLen = matrix.length
  if (!yLen) return 0
  
  const xLen = matrix[0].length
  if (!xLen) return 0
  let arr = []
  for (let i = 0; i < yLen; i++) {
    arr[i] = new Array(xLen).fill(0)
    for (let j = 0; j < xLen; j++) {
      for (let k = 0; i - k >= 0; k++) {
        if (matrix[i - k][j] === '1') {
          arr[i][j]++
        } else {
          break
        }
      }
    }
  }
  return Math.max(...arr.map(item => largestRectangleArea(item)))
};

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

