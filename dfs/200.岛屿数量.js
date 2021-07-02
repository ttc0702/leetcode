/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

// dfs
var numIslands = function(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        turnZero(i, j, grid)
      }
    }
  }

  function turnZero(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    turnZero(i, j + 1, grid)
    turnZero(i, j - 1, grid)
    turnZero(i + 1, j, grid)
    turnZero(i - 1, j, grid)
  }

  return count
};

// bfs
// var numIslands = function (grid) {
//   let count = 0
//   let queue = []
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === '1') {
//         count++
//         queue.push([i, j])
//         grid[i][j] = '0'
//         turnZero(queue, grid)
//       }
//     }
//   }

//   function turnZero(queue, grid) {
//     let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
//     while (queue.length) {
//       const curr = queue.shift()
//       for (let dir of dirs) {
//         const x = curr[0] + dir[0]
//         const y = curr[1] + dir[1]
//         if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === '0') continue
        
//         grid[x][y] = '0'
//         queue.push([x, y])
//       }
//     }
//   }

//   return count
// }
// @lc code=end

