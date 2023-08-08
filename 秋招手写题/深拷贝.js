function deepCopy(obj, map = new Map()) {
    let result = {};
    if (typeof obj !== 'object') return obj
    if (obj === null) return null

    let reg = /^\[object ([a-zA-Z]+)\]$/
    let type = Object.prototype.toString.call(obj)
    if (["Date", "RegExp", "Error"].includes(reg.exec(type)[1])) return obj

    if (obj instanceof Array) result = []
    if (map.has(obj)) return map.get(obj)
    map.set(obj, result)

    let keys = [
        ...Object.keys(obj),
        ...Object.getOwnPropertySymbols(obj)
    ]
    for (let key of keys) {
        result[key] = deepCopy(obj[key], map)
    }
    return result
}
// const person = {
//     name: 'zyj',
//     age: 20,
//     sister: {
//         name: 'duoduo',
//         age: 13,
//         mother: {
//             name: 'lili',
//             age: 45
//         }
//     },
//     date: new Date()
// }
// person.person = person
// console.log(person);
let obj = {
    0: 'math',
    1: 'chinese',
    2: 'elglish',
    score: {
        math: 98,
        chinese: 100,
        elglish: 19,
    },
    reg: /\d+/img,
    time: new Date,
    friends: ['tom', 'jerry'],
    say: function () {
        console.log('good good study!');
    },
    tag: Symbol('TAG'),
    [Symbol.toStringTag]: 'object'
};
obj.xxx = {
    0: obj
};
console.log(deepCopy(obj));