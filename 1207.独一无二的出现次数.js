/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */

// 对象属性 + 数组去重
var uniqueOccurrences = function (arr) {
  var obj = {}
  arr.forEach(val => {
    obj[val] ? obj[val]++ : obj[val] = 1
  })

  var times = []
  for (var prop in obj) {
    times.push(obj[prop])
  }

  var removeDuplicatesTimes = Array.from(new Set(times))
  if (removeDuplicatesTimes.length === times.length) return true
  return false
};

// 对象属性 + 对象属性
// var uniqueOccurrences = function (arr) {
//   var obj = {}
//   arr.forEach(val => {
//     obj[val] ? obj[val]++ : obj[val] = 1
//   })

//   var obj2 = {}
//   for (var prop in obj) {
//     let val = obj[prop]
//     if (obj2[val]) {
//       return false
//     } else {
//       obj2[val] = true
//     }
//   }
//   return true
// };

// @lc code=end

