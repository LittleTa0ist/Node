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
const arrTotree = (arr) => {
    let newArr = JSON.parse(JSON.stringify(arr))
    return newArr.filter(parent => {
        let children = newArr.filter(item => parent.menuId === item.parentMenu)
        children.length&& (parent.children = children)
        return parent.parentMenu == null
    })
}
console.log(arrTotree(arr1));