/**
 * 缓存机制
 * 缓存优先级 
 * 1. service worker 可以让我们控制应该缓存哪些文件 （PWA的重要手段）
 * 2. Memory Cache 内存缓存 读取效率高 但是一旦关闭 就没了
 * 3. Disk Cache 硬盘缓存 
 * 4. Push Cache 前面的都没有命中时 才会读取Push Cache中的缓存信息 但是只会在Session 中存在 一旦会话 结束就没有了
 * 5. 都没有时才发起缓存
 * 
 * 
 */