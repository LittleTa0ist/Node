/* 
 * 两个对合并的意义:
 *   + 插件组件封装：参数处理
 *   + 业务需求
 *   + ...
 */

const options = {
    url: '',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    data: null,
    arr: [10, 20, 30],
    config: {
        xhr: {
            async: true,
            cache: false
        }
    }
};

const params = {
    url: 'http://www.zhufengpeixun.cn/api/',
    headers: {
        'X-Token': 'EF00F987DCFA6D31'
    },
    data: {
        lx: 1,
        from: 'weixin'
    },
    arr: [30, 40],
    config: {
        xhr: {
            cache: true
        }
    }
};

function toType(obj) {
    let reg = /^\[object ([a-zA-Z]+)\]$/
    let type = Object.prototype.toString.call(obj)
    return reg.exec(type)[1]
}

function merge(target, base = {}) {
    if (toType(base) !== 'Object') throw new Error('第二个参数必须是对象')
    let keys = [...Object.keys(base), ...Object.getOwnPropertySymbols(base)]
    for (let key of keys) {
        let isA = (toType(target[key]) === 'Object'),
            isB = (toType(base[key]) === 'Object')
        if (isA && !isB) throw new Error(`第二个参数的${key}必须是对象`)
        if (isA && isB) {
            target[key] = merge(target[key], base[key])
            continue;
        }
        target[key] = base[key]
    }
    return target
}
console.log(merge(options, params));