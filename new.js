/**
 * new 构造调用的过程
 * 1. 创建一个对象 
 * 2. 原型绑定
 * 3. 绑定this到新对象上
 * 4. 返回这个对象
 */
function fakeNew(...args) {
    const constructor = args[0]
    log('constructor::', constructor);
    var o = {}
    o.__proto__ = constructor.prototype
    // const o = Object.create(constructor.prototype)
    const res = constructor.apply(o, args.slice(1));
    const isObj = (obj) => {
        return obj !== null && typeof obj == 'object';
    }
    log('o:::', o);
    if (isObj(o)) {
        return o;
    }
    return res;
}

function Person (name) {
    this.name = name
}
const p1 = fakeNew(Person, 'AAA')
log('p1:::', p1)
console.log(p1 instanceof Person)   // true
console.log(p1.name)