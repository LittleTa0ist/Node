function camel(target) {
    if (typeof target !== 'object') return target
    else if (Array.isArray(target)) {
        return Array.map(item => camel(item))
    }
    let obj = {}
    for (let key in target) {
        let newKey = key.replace(/_([a-z])/g, (p, m => m.toUpperCase()))
        obj[newKey]=camel(target[key])
    }
    return obj
}