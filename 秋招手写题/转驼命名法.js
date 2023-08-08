const camel = (obj) => {
    if (typeof obj !== 'object') return obj
    if (obj === null) return null

    if (obj instanceof Array) {
        return obj.map(item => camel(item))
    }
    let result = {}
    for (let key in obj) {
        let newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
        result[newKey] = camel(obj[key])
    }
    return result
}

let arr = [1, 2, { class_name: 1, arr_name: [1, 2, { user_name: 'pzx', a_b: null }] }]
console.log(camel(arr));