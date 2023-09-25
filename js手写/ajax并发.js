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


// tasks:数组，数组包含很多方法，每一个方法执行就是发送一个请求{基于Promise管理}
function createRequest(tasks, pool) {
    pool = pool || 5;
    let results = []
    together = new Array(pool).fill(null),
        index = 0
    together = together.map(() => {
        return new Promise((resolve, reject) => {
            const run = () => {
                if (index >= tasks.length) {
                    resolve()
                    return;
                }
                let oldIndex = index,
                    task = tasks[index++]
                task().then(res => {
                    results[oldIndex] = res
                    run()
                }).catch(reason => reject(reason))
            }
            run()
        })
    })

    return Promise.all(together).then(() => results)
}


createRequest(tasks, 2).then(res => {
    // 按顺序存储成功的结果
    console.log(res);
}).catch(reason => {

})


// 思路二，不管顺序，只返回成功的结果
// function createRequest(tasks, pool, callback) {
//     if (typeof pool === 'function') {
//         callback = pool
//         pool = 5
//     }
//     if (typeof pool !== 'number') pool = 5
//     if (typeof callback !== 'function') callback = function () { }

//     class TaskQueue {
//         isRuning = 0
//         results = []
//         queue = []
//         pushTask(task) {
//             this.queue.push(task)
//             this.next()
//         }
//         next() {
//             while (this.isRuning < pool && this.queue.length) {
//                 this.isRuning++
//                 let task = this.queue.shift()
//                 task().then(res => {
//                     this.results.push(res)
//                 }).finally(() => {
//                     this.isRuning--
//                     this.next()
//                 })
//             }
//             if (this.isRuning === 0) {
//                 callback(this.results)
//             }
//         }
//     }
//     let TQ = new TaskQueue()
//     tasks.forEach(task => {
//         TQ.pushTask(task)
//     });

// }
// createRequest(tasks, 2, (res) => {
//     console.log(res);
// })