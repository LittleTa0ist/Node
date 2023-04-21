const _ = require('loadsh')

a = { a: 1, b: 2, c: 3, d: { e: 1, f: 2 }, f: [1, 2, 3], g: [{}, {}] }
b = { a: 1, b: 2, c: 3, d: { e: 1, f: 2 }, f: [1, 2, 3], g: [{}, {}] }

console.log(_.isEqual(a, b));

function deepCompare(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') {
        return a === b
    }
    else if ((a instanceof Object) && (b instanceof Object)) {
        if (a === b) {
            return true
        }
        else if (Object.keys(a).length !== Object.keys(b).length) {
            return false
        }
        else {
            for (let key in a) {
                if (!deepCompare(a[key], b[key])) return false
            }
        }
    }
    else if (Array.isArray(a) && Array.isArray(b)) {
        if (a === b) {
            return true
        }
        else if (a.length !== b.length) {
            return false
        }
        else {
            for (let key in a) {
                if (!deepCompare(a[key], b[key])) return false
            }
        }
    }
    else {
        return false
    }
    return true

}
console.log(deepCompare(a, b));