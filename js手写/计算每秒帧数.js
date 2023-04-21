// requestAnimationFrame会在下一次重绘之前执行回调函数，因此需要找一个有动画的页面来执行代码
let count = 0
let lastTime = Date.now()
function compute() {
    count++
    let curTime = Date.now()
    if (curTime - lastTime > 1000){
        console.log(count);
        count=0
        lastTime=curTime
    }
    requestAnimationFrame(compute)
}
compute()