Promise.myAll = function (tasks) {
    if (!(tasks instanceof Array)) {
        throw new Error('参数必须是数组')
    }
    if (tasks.length === 0) return Promise.resolve([])
    tasks = tasks.map(item => {
        if (!(item instanceof Promise)) return Promise.resolve(item)
        else return item
    })
    let result = [],
        fullCount = 0,
        index = 0
    return new Promise((resolve, reject) => {
        tasks.forEach(task => {
            let count = index
            index++
            task.then(res => {
                result[count] = res
                fullCount++
                if (fullCount === tasks.length) resolve(result)
            }).catch(err => {
                reject(err)
            })
        });
    })
}


// 延时函数
const delay = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}
const delay1 = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(time)
        }, time)
    })
}
const tasks = [

    delay(1000),

    delay(1001)
    ,

    delay1(1003)
    ,

    delay(1002)
    ,

    delay(1005)

]

Promise.myAll(tasks).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})