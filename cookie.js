/**
 * Cookie 如何防止xss攻击
 * 1. 设置httponly 这样xss 里面的script 脚本取不到cookie 
 * 2. secure 只会在发送请求时携带cookie
 * 
 */