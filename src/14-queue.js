const ListNode = require('../extensions/list-node')
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = {}
  }

  get size() {
    return this.getSize(this.list)
  }

  getLastNode(list) {
    if (list.next) {
      return this.getLastNode(list.next)
    }
    return list
  }

  getSize(list, size = 1) {
    if (list.next) {
      return this.getSize(list.next, size + 1)
    }
    return size
  }

  enqueue(element) {
    const lastNode = this.getLastNode(this.list)
    const newNode = new ListNode(element)
    newNode.value = element
    newNode.next = null
    if (this.list.next === undefined) {
      this.list = newNode
    } else {
      lastNode.next = newNode
    }
  }

  dequeue() {
    const currentVal = this.list.value
    this.list = this.list.next
    return currentVal
  }
}

module.exports = Queue
