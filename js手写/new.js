function myNew(F, ...args) {
    let obj = {}
    obj.__proto__ = F.prototype
    let res = F.call(obj, ...args)
    return ((typeof res) === Object || Function) ? res : obj
}

function Student(name) {
    this.name = name
}
console.log(typeof Student('pzx'));
Student.prototype.getInfo = function () {
    console.log(this.name);
}
let a = new Student('pzx')
let b = new Student('ldh')
// console.log(a);
// console.log(b);
a.getInfo()
b.getInfo()