let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

let toTree = arr => {
    let target = JSON.parse(JSON.stringify(arr))
    return target.filter(item => {
        let children = target.filter(child => child.pid == item.id)
        children.length && (item.children = children)
        return item.pid == 0
    })
}
console.log(JSON.stringify(toTree(arr)));