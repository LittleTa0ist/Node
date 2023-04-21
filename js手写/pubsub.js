class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(type, cb) {
        if (this.events[type]) {
            this.events[type].push(cb)
        } else {
            this.events[type] = [cb]
        }
    }
    emit(type, ...args) {
        if (!this.events[type]) return;
        else {
            this.events[type].forEach(cb => {
                cb(...args)
            });
        }
    }
    once(type, cb) {
        let fn = (...args) => {
            cb(...args)
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    off(type, cb) {
        if (this.events[type]) {
            this.events[type] = this.events[type].filter(item => {
                return item !== cb
            })
        }
        else {
            return
        }
    }

}

let ev = new EventEmitter()
ev.once('hello', (name, age) => {
    console.log(name, age);
})
ev.emit('hello', 'pzx', 18)
ev.emit('hello', 'pzx', 18)