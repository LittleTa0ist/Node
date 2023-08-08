// 展开运算符
// {..obj}这种方法不能拷贝Symbol属性
// Object.assign({},obj)
// keys=[...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)] 可以获取对象的所有可迭代属性以及Symbol属性