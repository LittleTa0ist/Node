// 组合式继承
function Father(name, age) {
    this.addr = 'China'
    this.name = name
    this.age = age
}
Father.prototype.info = function () {
    console.log(this.addr, this.name, this.age);
}

function Son(name, age, sex) {
    Father.call(this, name, age)
    this.sex = sex
}
Son.prototype = new Father()
Son.prototype.constructor = Son
Son.prototype.newinfo=function(){
    console.log(this.sex);
}

let f = new Father('pzx', 18)
let s = new Son('ldh', 60, 'male')
f.info()
s.info()
s.newinfo()
// console.log(f.__proto__);
// console.log(s.__proto__);