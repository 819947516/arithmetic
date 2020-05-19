/**
 * 基于链表实现的栈
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class StackBaseLinkedlist {
    constructor() {
        this.top = null
    }

    // 新push进来的node放链式栈前端
    push(value) {
        const node = new Node(value)
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }

    // pop掉链式栈前端一个 （后进先出）
    pop() {
        if(this.top === null) return -1
        const value = this.top.element
        this.top = this.top.next
        return value
    }

    clear() {
        this.top = null
    }

    display() {
        if (this.top !== null) {
            let temp = this.top
            while (temp !== null) {
                console.log(temp.element)
                temp = temp.next
            }
        }
    }

}

// Test
const newStack = new StackBaseLinkedlist()
newStack.push(1)
newStack.push(2)
newStack.push(3)
// 获取元素
let res = 0
console.log('-------获取pop元素------')
while (res !== -1) {
    res = newStack.pop()
    console.log(res)
}

exports.CreatedStack = StackBaseLinkedlist