function instance_of(example, classFunc) {
    let classFuncPrototype = classFunc.prototype,
        proto = Object.getPrototypeOf(example)//相当于proto.__proto__(不兼容IE)
    while (proto) {
        if (proto === classFuncPrototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

let arr = []
console.log(instance_of(arr, Array));
console.log(instance_of(arr, Object));
console.log(instance_of(arr, RegExp));