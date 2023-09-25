class Signal {
    constructor(init, time) {
        this.cur = init || 'red'
        this.time = time ? {
            'red': time[0],
            'yellow': time[1],
            'green': time[2]
        } : {
            'red': 3000,
            'yellow': 1000,
            'green': 2000
        }
        this.func = this.genSig(this.cur)
    }
    async run() {
        console.log(this.cur);
        await this.func()
        this.changeSig()
        this.run()
    }
    genSig(init) {
        return function () {
            return new Promise(resolve => {
                setTimeout(resolve, this.time[init])
            })
        }
    }
    changeSig() {
        if (this.cur === 'red') {
            this.cur = 'yellow'
            this.func = this.genSig(this.cur)
        }
        else if (this.cur === 'yellow') {
            this.cur = 'green'
            this.func = this.genSig(this.cur)
        }
        else {
            this.cur = 'red'
            this.func = this.genSig(this.cur)
        }
    }
}
let s = new Signal('green')
s.run()