/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 对对角线上的元素使用二分搜索（未通过所有用例）
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length,
//     n = matrix[0].length
//   if (m <= 2 && n <= 2) {
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (target === matrix[i][j]) return true
//       }
//     }
//     return false
//   }

//   let L = [0, 0],
//     R = [m - 1, n - 1]

//   while ((L[0] !== R[0] && L[0] !== R[0] - 1) || (L[1] !== R[1] && L[1] !== R[1] - 1)) {
//     if (target === matrix[L[0]][L[1]] || target === matrix[R[0]][R[1]]) return true

//     const mid = [Math.floor((L[0] + R[0]) / 2), Math.floor((L[1] + R[1]) / 2)]

//     const middle = matrix[mid[0]][mid[1]]
//     if (middle === target) {
//       return true
//     } else if (middle < target) {
//       L = mid
//     } else {
//       R = mid
//     }
//   }

//   if (m === 1 || n === 1) return false

//   let down = R[0],
//     right = R[1]
//   let up = left = 0

//   while (up <= down) {
//     if (target === matrix[up][R[1]] || target === matrix[down][R[1]]) return true

//     const mid = Math.floor((up + down) / 2)
//     const middle = matrix[mid][R[1]]
//     if (middle === target) {
//       return true
//     } else if (middle < target) {
//       up = mid + 1
//     } else {
//       down = mid - 1
//     }
//   }

//   while (left <= right) {
//     if (target === matrix[R[0]][left] || target === matrix[R[0]][right]) return true

//     const mid = Math.floor((left + right) / 2)
//     const middle = matrix[R[0]][mid]
//     if (middle === target) {
//       return true
//     } else if (middle < target) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }

//   return false
// };

// 沿对角线进行二分搜索
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length,
//     n = matrix[0].length
//   let up, left
//   let down, right

//   for (let i = 0; i < Math.min(m, n); i++) {
//     if (matrix[i][i] > target) {
//       break
//     } else if (matrix[i][i] === target) {
//       return true
//     }

//     up = left = i
//     down = m - 1
//     right = n - 1

//     while (up < down) {
//       if (target === matrix[up][i] || target === matrix[down][i]) return true

//       const mid = Math.floor((up + down) / 2)
//       const middle = matrix[mid][i]
//       if (middle === target) {
//         return true
//       } else if (middle < target) {
//         up = mid + 1
//       } else {
//         down = mid - 1
//       }
//     }

//     while (left < right) {
//       if (target === matrix[i][left] || target === matrix[i][right]) return true

//       const mid = Math.floor((left + right) / 2)
//       const middle = matrix[i][mid]
//       if (middle === target) {
//         return true
//       } else if (middle < target) {
//         left = mid + 1
//       } else {
//         right = mid - 1
//       }
//     }
//   }

//   return false
// }

// 递归缩减搜索空间
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length,
//     n = matrix[0].length
  
//   return searchRec(0, 0, n - 1, m - 1)

//   function searchRec(left, up, right, down) {
//     if (left > right || up > down) return false
//     if (matrix[up][left] > target || matrix[down][right] < target) return false
//     if (matrix[up][left] === target || matrix[down][right] === target) return true
    
//     const mid = Math.floor(left + right)
//     let row = up
//     while (row <= down && matrix[row][mid] <= target) {
//       if (matrix[row][mid] === target) return true
      
//       row++
//     }

//     return searchRec(left, row, mid - 1, down) || searchRec(mid + 1, up, right, row - 1)
//   }
// }

// 以左下或右上为起点进行搜索
var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length
  
  let left = 0,
    down = m - 1
  
  while (left <= n - 1 && down >= 0) {
    if (target === matrix[down][left]) {
      return true
    } else if (target < matrix[down][left]) {
      down--
    } else {
      left++
    }
  }

  return false
}
// @lc code=end

