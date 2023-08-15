let obj = {
    x: 1
}
Object.defineProperty(obj, 'y', {
    value:10
})
Object.getOwnPropertyDescriptor(obj)
// Object.defineProperty(obj, 'y', {
//     value:10,
//     enumerable:false
// })
// delete obj.y
console.log(Object.getOwnPropertyDescriptors(obj));