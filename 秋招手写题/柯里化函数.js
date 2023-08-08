// 参数数量达到一定值时，输出结果
// const curring = function () {
//     let params = []
//     const add = (...args) => {
//         params = params.concat(args)
//         if (params.length >= 5) {
//             return params.reduce((pre, cur) => pre + cur, 0)
//         }
//         return add
//     }
//     return add
// }

// let add1 = curring()
// let add2 = curring()
// console.log(add1(1, 2)(3, 4));
// console.log(add2(1, 2)(3, 4)(5));



// 通过 + 输出结果
const curring = function () {
    let params = []
    const add = (...args) => {
        params = params.concat(args)
        return add
    }
    add[Symbol.toPrimitive] = () => params.reduce((pre, cur) => pre + cur, 0)
    return add
}

let add1 = curring()
let add2 = curring()
console.log(+add1(1, 2)(3, 4));
console.log(+add2(1, 2)(3, 4)(5));