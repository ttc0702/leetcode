/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */

// 顺序读取，分类处理
// var simplifyPath = function(path) {
//   let res = '/'
//   for (let i = 1; i < path.length; i++) {
//     if (path[i] === '/' && path[i - 1] === '/') {
//       continue
//     } else if (path.slice(i - 1, i + 2) === '/./' || (path.slice(i - 1, i + 1) === '/.' && i === path.length - 1)) {
//       i++
//     } else if (path.slice(i - 1, i + 3) === '/../' || (path.slice(i - 1, i + 2) === '/..' && i === path.length - 2)) {
//       const p = res.slice(0, res.length - 1)
//       if (p === '') {
//         res = '/'
//       } else {
//         res = res.slice(0, p.lastIndexOf('/') + 1)
//       }
//       i += 2
//     } else {
//       res += path[i]
//     }
//   }

//   if (res.length > 1 && res[res.length - 1] === '/') {
//     res = res.slice(0, res.length - 1)
//   }

//   return res
// };

// 栈
var simplifyPath = function (path) {
  let stack = []
  path = path.split('/')
  for (let p of path) {
    if (p !== '' && p !== '.' && p !== '..') {
      stack.push(p)
    } else if (p === '..' && stack.length) {
      stack.pop()
    }
  }

  return '/' + stack.join('/')
}
// @lc code=end

