/**
 * 为什么要有eventloop 
 *      因为js单线程语言 所以为了更好得处理同步和异步任务 
 *      设计出来的机制 
 * 具体规则
 *      单线程语言按照压栈出栈的顺序执行 
 *      遇到异步的任务 放入queue中 等同步任务执行完再去执行
 * 
 * 这是一个事件驱动的模型 而且是不断循环的 所以又称event-loop
 * 
 * 另外queue中有两种任务 宏任务和微任务
 * 
 * 宏任务
 * I/O
 * setTimeout
 * setInterval
 * setImmediate
 * requestAnimate
 * 
 * 微任务
 * process.nextTick
 * MutationObserver
 * Promise.then
 * 
 * 
 * 
 */