/**
 * 重绘和回流
 * 重绘：不影响布局 只影响样式
 * 回流：影响布局 不影响样式
 * eventloop在microtask之后 会判断document 是否需要更新
 * 会判断是否会执行scroll resize等事件 
 * 执行requestAnimationFrame回调
 * 更新界面
 * 
 */