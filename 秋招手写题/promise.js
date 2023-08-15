function Promise(excutor) {
    this.PromiseState = 'pending'
    this.PromiseResult = undefined
    this.callbacks = []
    const self = this
    function resolve(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        self.callbacks.forEach(item => {
            item.onResolve && item.onResolve()
        })
    }
    function reject(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        self.callbacks.forEach(item => {
            item.onReject && item.onReject()
        })
    }
    try {
        excutor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
Promise.prototype.then = function (onResolve, onReject) {
    const self = this
    if (typeof onReject !== 'function') {
        onReject = reason => {
            throw reason
        }
    }
    if (typeof onResolve !== 'function') {
        onResolve = result => {
            return result
        }
    }
    return new Promise((resolve, reject) => {
        function callback(type) {
            try {
                let result = type(self.PromiseResult)
                if (result instanceof Promise) {
                    result.then(s => resolve(s), r => reject(r))
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }
        if (this.PromiseState === 'fulfilled') {
            callback(onResolve)
        }
        if (this.PromiseState === 'rejected') {
            callback(onReject)
        }
        if (this.PromiseState === 'pending') {
            // 保存回调函数
            this.callbacks.push({
                onResolve: function () {
                    callback(onResolve)
                },
                onReject: function () {
                    callback(onReject)
                }
            })
        }
    })

}

Promise.prototype.catch = function (onReject) {
    return this.then(undefined, onReject)
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(s => resolve(s), r => reject(r))
        } else {
            resolve(value)
        }
    })
}

Promise.reject = function (value) {
    return new Promise((resolve, reject) => {
        reject(value)
    })
}

Promise.race = function (arr) {
    return new Promise((resolve, reject) => {
        arr.map(item => {
            Promise.resolve(item).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    })
}


class Promise {
    constructor(excutor) {
        this.PromiseState = 'pending'
        this.PromiseResult = undefined
        this.callbacks = []
        const self = this
        function resolve(data) {
            if (self.PromiseState !== 'pending') return;
            self.PromiseState = 'fulfilled'
            self.PromiseResult = data
            self.callbacks.forEach(item => {
                item.onResolve && item.onResolve()
            })
        }
        function reject(data) {
            if (self.PromiseState !== 'pending') return;
            self.PromiseState = 'rejected'
            self.PromiseResult = data
            self.callbacks.forEach(item => {
                item.onReject && item.onReject()
            })
        }
        try {
            excutor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onResolve, onReject) {
        const self = this
        if (typeof onReject !== 'function') {
            onReject = reason => {
                throw reason
            }
        }
        if (typeof onResolve !== 'function') {
            onResolve = result => {
                return result
            }
        }
        return new Promise((resolve, reject) => {
            function callback(type) {
                try {
                    let result = type(self.PromiseResult)
                    if (result instanceof Promise) {
                        result.then(s => resolve(s), r => reject(r))
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }
            if (this.PromiseState === 'fulfilled') {
                callback(onResolve)
            }
            if (this.PromiseState === 'rejected') {
                callback(onReject)
            }
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolve: function () {
                        callback(onResolve)
                    },
                    onReject: function () {
                        callback(onReject)
                    }
                })
            }
        })

    }
    catch(onReject) {
        return this.then(undefined, onReject)
    }
    finally(callback) {
        return this.then(
            res => Promise.resolve(callback()).then(() => res),
            rej => Promise.resolve(callback()).then(() => { throw rej })
        )
    }
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(s => resolve(s), r => reject(r))
            } else {
                resolve(value)
            }
        })
    }
    static reject(value) {
        return new Promise((resolve, reject) => {
            reject(value)
        })
    }
    static race(arr) {
        return new Promise((resolve, reject) => {
            arr.map(item => {
                Promise.resolve(item).then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            })
        })
    }
}




let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('123')
    }, 1000)

})
let arr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('456')
    }, 2000)

})
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('789')
    }, 3000)

})


console.log(Promise.race([p, arr, b]));
