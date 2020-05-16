/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    // 根据value查找节点
    findByValue(item) {
        let currentNode = this.head
        while(currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode === null ? -1 : currentNode
    }

    // 根据index查找节点
    findByIndex(index) {
        let currentNode = this.head
        let pos = 0

        while(currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }

        return currentNode === null ? -1 : currentNode
    }

    // 查找前一个
    findPrev(item) {
        let currentNode = this.head
        while(currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if(currentNode === -1)
            return -1
        return currentNode
    }

    // 向链表末尾追加节点
    append(newElement) {
        const newNode = new Node(newElement)
        let currentNode = this.head
        while(currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }

    // 指定元素向后插入
    insert(newElement, element) {
        const currentNode = this.findByValue(element)
        if(currentNode === -1) {
            console.log('未找到插入位置')
            return
        }
        const newNode = new Node(newElement)
        newNode.next = currentNode.next
        currentNode.next = newNode

    }

    // 根据值删除
    remove(item) {
        let prevNode = this.findPrev(item)
        if(prevNode === -1) {
            console.log('未找到元素')
            return
        }
        prevNode.next = prevNode.next.next
    }

    // 遍历所有节点
    display() {
        let currentNode = this.head.next // 忽略头指针的值
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
    // 尾插法 反转单链表
    reverseList() {
        const root = new Node('head')
        let currentNode = this.head.next
        while (currentNode !== null) {
            const next = currentNode.next
            currentNode.next = root.next
            root.next = currentNode
            currentNode = next
        }
        this.head = root
    }

    // 尾插法 反转单链表 （理解）
    reserseList1() {
        // head节点即哨兵，作用就是使所有链表，
        // 包括空链表的头节点不为null,并使对单链表的插入、删除操作不需要区分是否为空表或是否在第一个位置进行，
        // 从而与其他位置的插入、删除操作一致
        // 所以反转链表的时候不需要带上head节点
        let currentNode = this.head.next
        // 第一个节点指向null
        let prevNode = null
        while(currentNode !== null) {
            // 记录一下 下一节点
            let nextNode = currentNode.next
            // 当前节点指向上一节点（第一次为null）
            currentNode.next = prevNode
            // 上一节点变成当前（当前节点已经指向好了），那么下次循环的时候，方便下次的currentNode指向prevNodeNode
            prevNode = currentNode
            // 再次循环
            currnetNode = nextNode
        }
        //最后将反转好的链表加上头节点
        this.head.next = prevNode

    }

    // 环验证
    checkCircle() {
        let fast = this.head.next
        let slow = this.head

        while(fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
            if(slow === fast)
                return true
        }
        return false
    }

    // 删除倒数第n个节点
    removeByIndexFromEnd(n) {
        // 必须先判断是不是环链表
        if(this.checkCircle())
            return false
        let pos = 1
        this.reverseList()
        let currentNode = this.head.next
        while(currentNode !== null && pos < n) {
            currentNode = currentNode.next
            pos++
        }
        if(currentNode === null) 
            return false
        this.remove(currentNode.element)
        this.reverseList()
    }

    // 求中间节点（快慢指针）
    findMiddleNode() {
        let fast = this.head
        let slow = this.head

        while(fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }

}

const mergeSortedLists = (listA, listB) => {
    if(!listA)
        return listB
    if(!listB)
        return listA
    let a = listA
    let b = listB
    let resultList
    if(a.element < b.element) {
        resultList = a
        a = a.next
    } else {
        resultList = b
        b = b.next
    }
    let currentNode = resultList

    while(a !== null && b !== null) {
        if(a.element < b.element){
            currentNode.next = a
            a = a.next
        } else {
            currentNode.next = b
            b = b.next
        }
        currentNode = currentNode.next
    }

    if(a !== null) {
        currentNode.next = a
    } else {
        currentNode.next = b
    }

    return resultList

}


// Test
// const LList = new LinkedList()
// LList.insert('chen', 'head')
// LList.insert('curry', 'chen')
// LList.insert('sang', 'head')
// LList.insert('zhao', 'head')
// console.log('-------------start reverse------------')
// LList.reverseList()
// LList.display()
// console.log('-------------check circle------------')
// console.log(LList.checkCircle())
// console.log('-------------remove the one before last ------------')
// LList.removeByIndexFromEnd(2)
// LList.display()

const sortedList1 = new LinkedList()
sortedList1.insert(9, 'head')
sortedList1.insert(8, 'head')
sortedList1.insert(7, 'head')
sortedList1.insert(6, 'head')
const sortedList2 = new LinkedList()
sortedList2.insert(21, 'head')
sortedList2.insert(20, 'head')
sortedList2.insert(19, 'head')
sortedList2.insert(18, 'head')
console.log('-------------sort two list ------------')
let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
while (sortedList !== null) {
    console.log(sortedList.element)
    sortedList = sortedList.next
}