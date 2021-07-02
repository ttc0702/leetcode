/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// var findKthLargest = function(nums, k) {
//   nums.sort((a, b) => b - a)
//   return nums[k - 1]
// };

// 快速排序改进
// var findKthLargest = function (nums, k) {
//   let len = nums.length
//   let left = 0,
//     right = len - 1
  
//   return quicksort(nums, left, right, k)
// }

// function quicksort(nums, left, right, k) {
//   if (left === right) {
//     return nums[left]
//   } else if (left < right) {   
//     let pIndex = partition(nums, left, right)
//     if (pIndex === k - 1) {
//       return nums[pIndex]
//     } else if (pIndex > k - 1) {
//       return quicksort(nums, left, pIndex - 1, k)
//     } else {
//       return quicksort(nums, pIndex + 1, right, k)
//     }
//   }
// }

// function partition(nums, left, right) {
//   let pivot = left + Math.floor(Math.random() * (right - left + 1))
//   let index = left + 1
//   swap(nums, left, pivot)
//   for (let i = index; i <= right; i++) {
//     if (nums[i] > nums[left]) {
//       swap(nums, i, index)
//       index++
//     }
//   }

//   swap(nums, left, index - 1)
//   return index - 1
// }

// function swap(arr, a, b) {
//   [arr[a], arr[b]] = [arr[b], arr[a]]
// }

// 堆排序改进
var findKthLargest = function (nums, k) {
  let len = nums.length
  
  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapify(nums, i)
  }

  // 这里注意要先用 L 保存 len，否则因为每次循环中 i 和 len 都会 --，导致 i >= len - k 始终成立而进入死循环
  const L = len
  for (let i = len - 1; i >= L - k; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]]
    len--
    heapify(nums, 0)
  }
  return nums[L - k]
  function heapify(nums, i) {
    let left = i * 2 + 1,
      right = i * 2 + 2,
      max = i
    
    if (left < len && nums[left] > nums[max]) {
      max = left
    }
    if (right < len && nums[right] > nums[max]) {
      max = right
    }
  
    if (max !== i) {
      [nums[max], nums[i]] = [nums[i], nums[max]]
      heapify(nums, max)
    }
  }
}

// @lc code=end

