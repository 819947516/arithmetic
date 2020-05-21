/**
 * 基于链表实现的队列。
 *
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class QueueBasedOnLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // 入队
    enqueue(value) {
        if(this.head === null) {
            this.head = new Node(value)
            this.fail = this.head
        } else {
            this.fail.next = new Node(value)
            this.fail = this.fail.next
        }
    }

    // 出队
    dequeue() {
        if(this.head !== null) {
            const value = this.head
            this.head = this.head.next
            return value
        } else {
            return -1
        }
    }
}