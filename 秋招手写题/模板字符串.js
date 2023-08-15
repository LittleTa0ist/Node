function template(str, data) {
    if (typeof str !== 'string') throw '参数必须是字符串'
    let reg = /\$\{(\w+)\}/g
    if (reg.test(str)) {
        let name = reg.exec(str)[1]
        if (!isNaN(+name[0])) throw '变量命名错误,不能以数字开头'
        if (!data[name]) throw name + '未定义'
        str = str.replace(reg, (p, m) => data[m])
        // str = str.replace(reg, data[name])
        // return template(str, data)
    }
    return str
}

let str = '我叫${name}，来自${address}，今年${age}岁'
let person = {
    name: '小明',
    address: '北京',
    age: 20
}
console.log(template(str, person))