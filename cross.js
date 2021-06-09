/**
 * img iframe script 来发送跨域请求有什么优缺点
 * 
 * 1. script: 
 *  优点：可以直接返回json格式的数据 方便处理
 *  缺点：只接受get请求
 * 
 * 2. iframe怎么跨域
 *    在页面上 设置一个iframe A, src为你要跨的域名a 然后display 为none 
 *    由A发送请求 这样就能实现往域名a发送请求 再通过postMessage 发送message 到主页面
 * 
 * 缺点：母页面和iframe本身的交互就有安全性限制
 * 
 *      
 * 
 * 
 * 
 * 3. 图片
 *  优点：可以访问任何url 可以用来当埋点
 *  缺点：不能响应文本
 *  
 * 
 */