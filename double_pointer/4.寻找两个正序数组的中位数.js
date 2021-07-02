/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 双指针
var findMedianSortedArrays = function (nums1, nums2) {
  let middle1 = middle2 = 0
  let a = b = 0
  const len = nums1.length + nums2.length

  for (let i = 0; i < Math.ceil((len + 1) / 2); i++) {
    if (typeof nums2[b] !== 'number' || (typeof nums1[a] === 'number' && nums1[a] <= nums2[b])) {
      middle2 = middle1
      middle1 = nums1[a]
      a++
    } else {
      middle2 = middle1
      middle1 = nums2[b]
      b++
    }
  }

  return len % 2 === 0 ? (middle1 + middle2) / 2 : middle1
};
// @lc code=end

