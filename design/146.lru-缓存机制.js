/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

// hashmap + 双向链表
// hashmap 保证了 get()、put() 方法的时间复杂度为 O(1)
// 双向链表保证了删除队尾元素的时间复杂度为 O(1)
// 构造函数
var ListNode = function (key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

var LRUCache = function(capacity) {
  this.capacity = capacity
  this.count = 0
  this.hash = {}
  this.dummyHead = new ListNode()
  this.dummyTail = new ListNode()
  this.dummyHead.next = this.dummyTail
  this.dummyTail.prev = this.dummyHead
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.hash[key]
  if (!node) return -1
  this.moveToHead(node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.hash[key]
  if (!node) {
    if (this.count === this.capacity) {
      this.removeItem()
    }
    const newNode = new ListNode(key, value)
    this.hash[key] = newNode
    this.addToHead(newNode)
    this.count++
  } else {
    node.value = value
    this.moveToHead(node)
  }
};

LRUCache.prototype.moveToHead = function(node) {
  this.removeFromList(node)
  this.addToHead(node)
};

LRUCache.prototype.removeFromList = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
};

LRUCache.prototype.addToHead = function(node) {
  node.prev = this.dummyHead
  node.next = this.dummyHead.next
  this.dummyHead.next.prev = node
  this.dummyHead.next = node

};

LRUCache.prototype.removeItem = function() {
  const tail = this.dummyTail.prev
  this.removeFromList(tail)
  delete this.hash[tail.key]
  this.count--
};

// 类
// class ListNode {
//   constructor(key, value) {
//     this.key = key
//     this.value = value
//     this.next = null
//     this.prev = null
//   }
// }

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity
//     this.hash = {}
//     this.count = 0
//     this.dummyHead = new ListNode()
//     this.dummyTail = new ListNode()
//     this.dummyHead.next = this.dummyTail
//     this.dummyTail.prev = this.dummyHead
//   }

//   get(key) {
//     let node = this.hash[key]
//     if (node == null) return -1
//     this.moveToHead(node)
//     return node.value
//   }

//   put(key, value) {
//     let node = this.hash[key]
//     if (!node) {
//       if (this.count == this.capacity) {
//         this.removeLRUItem()
//       }
//       let newNode = new ListNode(key, value)
//       this.hash[key] = newNode
//       this.addToHead(newNode)
//       this.count++
//     } else {
//       node.value = value
//       this.moveToHead(node)
//     }
//   }

//   moveToHead(node) {
//     this.removeFromList(node)
//     this.addToHead(node)
//   }
  
//   removeFromList(node) {
//     node.prev.next = node.next
//     node.next.prev = node.prev
//   }

//   addToHead(node) {
//     node.prev = this.dummyHead
//     node.next = this.dummyHead.next
//     this.dummyHead.next.prev = node
//     this.dummyHead.next = node
//   }

//   removeLRUItem() {
//     let tail = this.dummyTail.prev
//     this.removeFromList(tail)
//     delete this.hash[tail.key]
//     this.count--
//   }
// }

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

