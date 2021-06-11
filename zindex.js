/**
 * z-index 
 * 层叠 
 * 是什么
 *      在渲染过程中 类似叠千层饼一样 有些在上面 有些在下面 每个部分只渲染在最上面的部分
 * 
 * 1. 特性
 *      
 * 
 * 2. 创建
 *      (1)根元素
 *      (2)display: absolute || relative || fixed; z-index: 不为auto;
 *      (3) 设置了z-index 不为auto 父元素为flex布局的
 *          设置了transfrom的元素
 *          opacity设置了不为1的元素
 * 
 * 
 * 
 * 3. 规则
 *      层叠context < index负值 < block < float < inline inline-block < z-index auto < z-index > 0
 *      
 *      在同一个层叠context中 谁的层叠值高 谁在上面 
 *      在同一个层叠context中 后面的层叠值高于前面的
 * 
 * 
 *      
 * 
 */