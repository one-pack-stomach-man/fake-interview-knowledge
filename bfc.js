/**
 * 什么是bfc 简单来说 bfc就是在渲染中实现了一个独立的块 可以实现独立的布局 跟外界互不影响
 * 
 * 
 * 
 * bfc的规则
 *      内部垂直布局
 *      内部box的盒子会发生margin重叠
 *      和float元素不重合
 *      内部的float元素高度会撑起block区域
 * 
 * bfc触发条件
 *      根元素
 *      display: block, inline-block;
 *      position: fixed, absolute;
 *      overflow: hidden, scroll, auto, inherit;
 *      float元素
 *      
 * 
 * bfc的应用
 *      margin重合
 *      处理float引起的样式修改
 *      
 * 
 */


/**
 * 
 * IFC inline-formatting-context
 * 触发条件
 * 块级元素中仅包含行内级别元素
 * 规则
 *      水平摆放
 *      padding margin水平正常 垂直没有影响
 *      高度由line-height 决定
 *      受float元素的影响 
 *      
 * 
 */