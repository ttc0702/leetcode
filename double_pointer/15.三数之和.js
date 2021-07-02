/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 哈希表 + 排序 + 去重，超出时间限制
// var threeSum = function(nums) {
//   let len = nums.length,
//     arr = [],
//     hash = {}

//   for (let i = 0; i < len; i++) {
//     let mark = 0 - nums[i]
//     hash[mark] = [[nums[i]], i]
//   }

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let val = hash[nums[i] + nums[j]]
//       if (val !== undefined && i !== val[1] && j !== val[1]) {
//         arr.push(val[0].concat(nums[i], nums[j]))
//       }
//     }
//   }

//   arr.forEach(val => {
//     val.sort((a, b) => a - b)
//   })

//   function unique(arr) {
//     let map = new Map,
//       newArr = []
//     arr.forEach(val => {
//       if (!map.get(JSON.stringify(val))) {
//         map.set(JSON.stringify(val), 1)
//         newArr.push(val)
//       }
//     })
//     return newArr
//   }

//   return unique(arr)
// };

// 排序加双指针
var threeSum = function(nums) {
  let res = []
  const len = nums.length
  if (len < 3) return res
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] > 0) break
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = len - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        // 去重
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      } else if (sum < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return res;
};

// @lc code=end

