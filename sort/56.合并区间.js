/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 1.先找到最大值和最小值，新建一个数组，包括从最小值到最大值的所有数。
// 2.再依次从该数组中减去 intervals 中的每个片段，端点值设为 -1，重合端点设为 -2。
// 3.最后遍历该数组，得出结果
// 实际上第 2 部及其复杂，根本无法讨论
// var merge = function (intervals) {
//   let all = []
//   intervals.forEach(item => all.push(...item))
//   const min = Math.min(...all)
//   const max = Math.max(...all)

//   let arr = []
//   for (let i = min; i <= max; i++) {
//     arr[i] = i
//   }

//   intervals.forEach(item => {
//     const left = item[0],
//       right = item[1]
      
//     // 这里注意 null >= 0 是 true
//     if (arr[left] >= 0 && arr[left] !== null) {
//       if (left === right) {
//         arr[left] = -2
//       } else {
//         arr[left] = -1
//       }
//     } else if(arr[left] === -1){
//       arr[left] = null
//     }

//     if (left !== right) {
//       if (arr[right] >= 0 && arr[right] !== null) {
//         arr[right] = -1
//       } else {
//         arr[right] = null
//       }
//     }

//     for (let i = left + 1; i <= right - 1; i++) {
//       arr[i] = null
//     }
//   })

//   let res = []
//   for (let i = min; i <= max; i++) {
//     if (arr[i] === -2) {
//       res.push([i, i])
//     } else if (arr[i] === -1) {
//       if (res.length === 0 || res[res.length - 1].length === 2) {
//         res.push([i])
//       } else {
//         res[res.length - 1].push(i)
//       }
//     }
//   }

//   return res
// };

// 排序
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  
  let res = []
  intervals.forEach(item => {
    if (res.length === 0 || item[0] > res[res.length - 1][1]) {
      res.push(item)
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], item[1])
    }
  })

  return res
}
// @lc code=end

