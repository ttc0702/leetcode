/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// PASSED
// 双向哈希映射
// 如果不成环，必然有 1 门课不需要先修课程
var canFinish = function (numCourses, prerequisites) {
  // if (numCourses <= prerequisites.length) return false
  
  let keys = [],
    locks = {},
    locksNum = {}
  for (let i = 0; i < numCourses; i++) {
    keys[i] = i
  }
  for (let pre of prerequisites) {
    const lock = pre[0],
      key = pre[1]
    const index = keys.indexOf(lock)
    if (index !== -1) {
      keys.splice(index, 1)
    }
    
    if (!locks[key]) {
      locks[key] = [lock]
    } else {
      locks[key].push(lock)
    }
    if (!locksNum[lock]) {
      locksNum[lock] = 1
    } else {
      locksNum[lock]++
    }
  }
  while (keys.length) {
    const key = keys.shift()
    if (locks[key]) {
      locks[key].forEach(lock => {
        locksNum[lock]--
        if (!locksNum[lock]) {
          keys.push(lock)
        }
      })
      delete locks[key]
    }
  }

  return Object.keys(locks).length === 0
};
// @lc code=end

