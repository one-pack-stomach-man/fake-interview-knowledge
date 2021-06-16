/**
 * 移动端点击延迟
 * 原因: 因为移动端需要兼容处理双击恢复原来大小的功能 所以会延迟300ms响应 用来判断是要双击放大缩小或者是点击事件 
 * 
 * 解决方案
 * 1. 禁用缩放
 *      <meta name = "viewport" content="user-scalable=no" >
 *      缺点 导致网页无法缩放了
 * 
 * 2. 更改默认视口高度
 *      <meta name="viewport" content="width=device-width">
 *      缺点 需要浏览器支持
 *      
 * 3. css touch-action
 *       touch-action的默为 auto，将其置为 none 即可移除目标元素的 300 毫秒延迟
 *      缺点：需要浏览器支持
 * 
 * 4. 用tap事件模拟
 *      缺点 点击穿透
 * 
 * 5. fastclick 检测到touchend事件的时候 会通过dom自定义事件立即模拟出一个click事件 
 *      并且把浏览器300ms之后的click事件阻止掉 
 * 
 *      
 * 
 * 
 * 
 * f
 */