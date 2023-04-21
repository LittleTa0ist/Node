// 保证length不被外部修改
class Stack {
    constructor() {
        this.content = []
        // this.length = 0
    }
    push(item) {
        this.content.push(item)
        // this.length++
    }
    top() {
        return this.content[this.length - 1]
    }
    pop() {
        // this.length--
        return this.content.pop()
    }
    isEmpty() {
        return this.content.length === 0
    }
    get size() {
        return this.content.length
    }
    set size(i = 0) {
        console.log("不允许修改length属性");
    }
}

let s = new Stack()
s.push(1)
s.pop()
s.push(1)
s.push(1)
s.push(1)
s.push(2)
// s.length = s.length + 1
console.log(s.length);