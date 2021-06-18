/**
 * 产生原因:
 *      css中的1px不是屏幕上的1px
 *      设备像素比 = 物理像素 / 设备像素
 * 
 * 处理方案:
 * 1. 0.5px边框
 * 
 * 2. 通过viewport缩放
 *      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
 *      这样通过缩放 就能避免1px的问题了 
 *      核心逻辑就是只绘原来的一半 但是宽度还是idealviewport的宽度 这样最后还是显示的1px
 * 
 * 3. 伪类
 *      见css文件
 * 
 * 
 *      
 * 
 */