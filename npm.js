/**
 * npm实现原理 
 * 1. 执行工程自身preinstall （如果有的话才会执行）
 * 
 * 2. 确定首层依赖模块 -- 就是确定dependencies and devDependencies属性中直接指定的模块
 * 
 * 3. 获取模块 
 *      (1): 获取模块信息 如果有版本描述文件 （npm-shrinkwrap.json 或者 package-lock.json）有该模块信息 则直接拿走 如果没有从仓库获取
 *      (2): 获取模块实体 上一步获取到的模块压缩包地址 resolved 字段 npm 会用此地址检查本地缓存 缓存中有则直接拿走 没有从仓库拉取
 *      (3): 查找该模块 如果有依赖 则回到1 如果没有 则停止
 * 
 * 4. 模块扁平化
 *      拍平 重复模块丢失 保留兼容版本
 * 
 * 5. 安装模块
 *      更新工程中的node_modules 并执行模块中的生命周期 preinstall install postinstall
 * 
 * 6. 执行工程自身周期
 *       生成或者更新描述文件 npm install 过程完成
 * 
 */