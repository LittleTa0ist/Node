// 数组
let arr = [1, 2, 3, 4, 5]
Array.prototype[Symbol.iterator] = function () {
    console.log('iterator start');
    let self = this,
        index = -1
    return {
        next() {
            index++
            if (index >= self.length) {
                return {
                    done: true,
                    value: undefined
                }
            }
            return {
                done: false,
                value: self[index]
            }
        }
    }
}

for (let item of arr) {
    console.log(item);
}

// 对象
Object.prototype[Symbol.iterator] = function () {
    console.log('iterator start');
    // let keys = [...Object.keys(this),...Object.getOwnPropertySymbols(this)],
    // Reflect.ownKeys(this) === Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)) 可迭代不可迭代都可以获得
    let keys = Reflect.ownKeys(this),
        self = this,
        index = -1
    return {
        next() {
            index++
            if (index >= keys.length) {
                return {
                    done: true,
                    value: undefined
                }
            }
            return {
                done: false,
                value: self[keys[index]]
            }
        }
    }
}
let obj = {
    x: 1,
    a: 2,
    ss: 'ss',
    [Symbol('AA')]: 2
}

for (let item of obj) {
    console.log(item);
}

