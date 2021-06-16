/**
 * 怎么做到省略号 
 * 1. 单行的情况 
 *      设置宽度 并且 强制文本在一行显示
 *      超出隐藏
 *      以省略号的方式隐藏
 * 
 *      p {
 *          width: 100px;
 *          overflow: hidden;
 *          white-space: nowrap;
 *          text-overflow: ellipsis;
 *      }
 *      
 * 
 *      多行文本
 *      弹性盒模型
 *      垂直排列
 *      文字的行数
 *      溢出隐藏且以省略号的方式隐藏
 * 
 *      
 *      p {
 *          display: -webkit-box;
 *          -webkit-box-orient: vertical;
 *          -webkit-line-camp: 2;
 *          overflow: hidden;
 *          text-overflow: ellipsis;
 *      }
 * 
 * 
 */