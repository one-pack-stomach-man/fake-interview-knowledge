
/**
 * @description 只有在指定的事件发生后才执行 中间触发的事件不执行 例如只有input完之后才执行查询
 * @param {*} fn 
 * @param {*} delay 
 */
function debounce(fn, delay = 1000) {
    let timer = null;
    return function () {
        if (timer) { // 设立过的话 重新设置一个 
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this, ...arguments)
        }, delay);
    }
}

window.onresize = debounce(() => {
    log('debounce resize')
})