/**
 * 清除浮动
 * 定义: 父元素高度低于子元素的高度 造成高度坍塌
 * 
 * 1. overflow: hidden;
 * 
 * 2. clear:after {
 *      content: '';
 *      display: block;
 *      overflow: hidden;
 *      height: 0;
 *      font-size: 0;
 *      clear: both;
 *      visibility: hidden;
 *     }
 * 
 * 
 */