function deepCompare(objA, objB) {
    if (typeof objA !== 'object' || typeof objB !== 'object') {
        return objA === objB
    }
    if (objA === null && objB === null) {
        return true
    }
    let keysA = Object.keys(objA), keysB = Object.keys(objB)
    if (keysA.length !== keysB.length) return false
    for (let i = 0; i < keysA.length; i++) {
        if (!deepCompare(objA[keysA[i]], objB[keysB[i]])) {
            return false
        }
    }
    return true
}

a = { a: 1, b: 2, c: 3, d: { e: 1, f: 2 }, f: [1, 2, 3], g: [{}, {}] }
b = { a: 1, b: 2, c: 3, d: { e: 1, f: 2 }, f: [1, 2, 3], g: [{}, {}] }
console.log(deepCompare(a, b));