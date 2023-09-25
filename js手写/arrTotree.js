const arr1 = [
    {
        menuId: 1,
        name: "系统管理1",
        parentMenu: null,
    },
    {
        menuId: 2,
        name: "系统管理2",
        parentMenu: null,
    },
    {
        menuId: 3,
        name: "系统管理1_0",
        parentMenu: 1,
    },
    {
        menuId: 4,
        name: "系统管理1_1",
        parentMenu: 1,
    },
    {
        menuId: 5,
        name: "系统管理2_0",
        parentMenu: 2,
    },
    {
        menuId: 6,
        name: "系统管理2_2_0",
        parentMenu: 5,
    },
    {
        menuId: 7,
        name: "系统管理3",
        parentMenu: null,
    },
    {
        menuId: 8,
        name: "系统管理1-1-2",
        parentMenu: 4,
    },
    {
        menuId: 9,
        name: "系统管理1-1-2",
        parentMenu: 8,
    },
];
// const arrTotree = (arr) => {
//     let newArr = JSON.parse(JSON.stringify(arr))
//     return newArr.filter(parent => {
//         let children = newArr.filter(item => parent.menuId === item.parentMenu)
//         children.length&& (parent.children = children)
//         return parent.parentMenu == null
//     })
// }

const arrTotree = (arr) => {
    arr = JSON.parse(JSON.stringify(arr))
    let newArr = []
    arr.forEach(element => {
        if (!element.parentMenu) newArr.push(element)
        else {
            arr.forEach(item => {
                if (item.menuId === element.parentMenu) {
                    item.children ? item.children.push(element) : item.children = [element]
                }
            })
        }
    });
    return newArr
}
let tree = arrTotree(arr1)

// 层序遍历
// const treeToarr = (arr) => {
//     if (!(arr instanceof Array)) throw 'err'
//     if (arr.length === 0) return arr
//     let newArr = JSON.parse(JSON.stringify(arr))
//     let res = []
//     while (newArr.length) {
//         let temp = newArr.shift()
//         res.push(temp)
//         if (temp.children) {
//             temp.children.forEach(item => {
//                 newArr.push(item)
//             })
//         }
//         delete temp.children
//     }
//     return res
// }


const treeToarr = (arr, res = []) => {
    let newArr = JSON.parse(JSON.stringify(arr))
    newArr.forEach(item => {
        if (!item.children) res.push(item)
        else {
            res.push(item)
            res.concat(treeToarr(item.children, res))
            delete item.children
        }

    })
    return res
}
console.log(treeToarr(tree));