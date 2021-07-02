/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

// 双重循环
// var generateParenthesis = function (n) {
//   if (n === 1) return ['()']
  
//   let temp = [{str: '(', left: 1, right: 0}]
//   let res = []
  
//   for (let i = 1; i < n * 2; i++) {
//     res = []
//     for (let j of temp) {
//       const { str, left, right } = j
//       if (left < n) {
//         res.push({str: str.concat('('), left: left + 1, right})
//       }
//       if (right < left) {
//         res.push({str: str.concat(')'), left, right: right + 1})
//       }
//     }
//     temp = res
//   }

//   return res.map(item => item.str)
// };

// 回溯
var generateParenthesis = function (n) {
  if (n === 1) return ['()']

  let res = []
  
  function backtrack(str, left, right) {
    if (str.length === n * 2) {
      res.push(str)
      return
    }
    if (left < n) {
      str = str.concat('(')
      backtrack(str, left + 1, right)
      str = str.slice(0, str.length - 1)
    }
    if (right < left) {
      str = str.concat(')')
      backtrack(str, left, right + 1)
      // str = str.slice(0, str.length - 1)
    }
  }

  backtrack('', 0, 0)
  return res
};
// @lc code=end

