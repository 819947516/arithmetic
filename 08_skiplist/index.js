/**
 * 跳表 skipList
 */

// 定义了跳表索引的最大级数
const MAX_LEVEL = 16

class Node {
    constructor({
        data = -1,
        maxLevel = 0,
        refer = []
    } = {}) {
        this.data = data  // 存放每个node本身的数据
        this.maxLevel = maxLevel // maxLevel属性表明了当node点处于整个跳表索引的级数

        // refer是一个有着MAX_LEVEL大小的数组，refer属性存放着很多个索引
        // 类似于链表的next
        // 当前节点为node  node.refer[maxLevel] 指向 同一层级的下一节点
        // node.refer[maxLevel - 1] 指向 下一层级的节点
        this.refer = refer 
    }
}

class SkipList {
    constructor() {
        this.head = new Node()
        this.levelCount = 1
    }

    randomLevel() {
        let level = 1
        for (let i = 1; i < MAX_LEVEL; i++) {
            if (Math.random() < 0.5) {
                level++
            }
        }
        return level
    }

    insert(value) {
        const level = this.randomLevel()
        const newNode = new Node()

        newNode.data = value
        newNode.maxLevel = level

        const update = new Array(level).fill(new Node())

        let p = this.head

        for(let i = level - 1; i >= 0; i--) {
            while(p.refer[i] !== undefined && p.refer[i].data < value) {
                p = p.refer[i]
            }
            update[i] = p
        }
        for(let i = 0; i < level; i++) {
            newNode.refer[i] = update[i].refer[i]
            update[i].refer[i] = newNode
        }
        if(this.levelCount < level) {
            this.levelCount = level
        }
    }

    find(value) {
        if(!value){
            return null
        }

        let p = this.head

        for(let i = this.levelCount - 1; i >= 0; i--) {
            while(p.refer[i] !== undefined && p.refer[i].data < value) {
                p = p.refer[i]
            }
        }

        if(p.refer[0] !== undefined && p.refer[0].data === value){
            return p.refer[0]
        }
        return null
    }

    remove(value) {
        let _node
        let p = this.head
        const update = new Array(new Node())
        for(let i = this.levelCount - 1; i >= 0; i--) {
            while(p.refer[i] !== undefined && p.refer[i].data < value){
                p = p.refer[i]
            }
            update[i] = p
        }

        if(p.refer[0] !== undefined && p.refer[0].data === value){
            _node = p.refer[0]
            for(let i = 0; i <= this.levelCount - 1; i++) {
                if(update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
                    update[i].refer[i] = update[i].refer[i].refer[i]
                }
            }
            return _node
        }

        return null
    }

    printAll() {
        let p = this.head
        while(p.refer[0] !== undefined) {
            console.log(p.refer[0].data)
            p = p.refer[0]
        }
    }

}

test()
function test() {
    let list = new SkipList()
    let length = 20000
    // list.insert(10)
    // list.insert(12)
    // list.insert(13)
    // list.insert(104)
    // list.insert(10123)
    // list.insert(10)
    // list.insert(105)
    // list.insert(10214)
    //顺序插入
    for (let i = 1; i <= 10; i++) {
        list.insert(i)
    }
    //输出一次
    list.printAll()
    console.time('create length-10')
    //插入剩下的
    for (let i = 11; i <= length - 10; i++) {
        list.insert(i)
    }
    console.timeEnd('create length-10')
    //搜索 10次
    for (let j = 0; j < 10; j++) {
        let key = Math.floor(Math.random() * length + 1)
        console.log(key, list.find(key))
    }
    //搜索不存在的值
    console.log('null:', list.find(length + 1))
    //搜索5000次统计时间
    console.time('search 5000')
    for (let j = 0; j < 5000; j++) {
        let key = Math.floor(Math.random() * length + 1)
    }
    console.timeEnd('search 5000')
}