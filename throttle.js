log('throttle')

/**
 * 函数节流：将原本1秒可能执行10次的函数，节流成1秒只执行2次-3次
 * 两个状态用来实现这个功能 一个是是否第一次执行 一个是是否是执行传入进来的函数的状态
 * @param {} fn 
 * @param {*} timer 
 * @returns 
 */
const throttle = (fn, timeout = 200) => {
    let isFrist = true;
    let timer = null;
    
    return function () {
        if (isFrist) {
            fn.call(this. args);
            isFrist = false;
        }

        if (timer) {
            return;
        }
        
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null;
            fn.call(this, ...arguments)
        }, timeout);
    }
    
}

window.onresize = throttle(() => {
    log('resize');
})