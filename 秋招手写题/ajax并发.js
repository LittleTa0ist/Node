
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
            resolve(time)
        }, time)
    })
}

// 任务列表
const tasks = [
    () => {
        return delay(1000)
    },
    () => {
        return delay(1001)
    },
    () => {
        return delay(1003)
    },
    () => {
        return delay1(1002)
    },
    () => {
        return delay(1005)
    }
]
function createRequest(tasks, pool) {
    if (!(tasks instanceof Array)) throw new Error('参数必须是数组')
    pool = pool || 5
    let together = new Array(pool).fill(0)
    let index = 0
    let result = []
    together = together.map(() => {
        return new Promise((resolve, reject) => {
            let run = () => {
                if (index >= tasks.length) {
                    resolve()
                    return;
                }
                let order = index
                task = tasks[index++]
                task().then(res => {
                    result[order] = res
                    run()
                }, (rej) => reject(rej))
            }
            run()
        })
    })

    return Promise.all(together).then(() => result)
}
createRequest(tasks, 2).then(res => {
    // 按顺序存储成功的结果
    console.log(res);
}).catch(reason => {
    console.log(reason);
})