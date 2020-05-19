/**
 * 使用前后栈实现浏览器的前进后退。
 *
 */
const stack = require('./linkedlistStack')

class SampleBrowser {
    constructor() {
        this.normalStack = new stack.CreatedStack()
        this.backStack = new stack.CreatedStack()
    }

    // 正常浏览页面
    pushNormal(name) {
        this.normalStack.push(name)
        this.backStack.clear()
    }

    // 后退
    back() {
        const name = this.normalStack.pop()
        if(name !== -1)
            this.backStack.push(name)
        else
            console.log('can not back')
    }

    //前进
    front() {
        const name = this.backStack.pop()
        if(name !== -1)
            this.normalStack.push(name)
        else
            console.log('can not front')

    }

    // 打印栈内数据
    display() {
        console.log('normalStack')
        this.normalStack.display()
        console.log('backStack')
        this.backStack.display()
    }
}

// Test
const browser = new SampleBrowser()
browser.pushNormal('www.google.com')
browser.pushNormal('www.baidu.com')
browser.pushNormal('www.github.com')
// 后退
browser.back()
browser.back()
// browser.front()
// browser.pushNormal('www.new.com')

browser.display()