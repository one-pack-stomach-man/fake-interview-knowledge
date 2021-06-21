/**
 * 实现继承的方式 
 * 原型链继承 
 * 借用构造函数继承
 * 组合继承
 * 寄生组合继承
 * 类继承
 * 
 */

/**
 * 原型链继承
 * 1. 不能像构造函数传参
 * 2. 父类上的引用类型属性会被所有实例共享其中一个改变时 所有的都改变
 * 
 */
log('----原型链继承');
function Animal() {
    this.colors = ['red', 'blue'];
}
function Dog(name) {
    this.name = name
}
Dog.prototype = new Animal()

var dog1 = new Dog('旺财');
var dog2 = new Dog('钢镚');
dog2.colors.push('yellow');
log('===', dog1)
console.log(dog1.colors); // ["red", "blue", "yellow"]
console.log(dog2.colors); // ["red", "blue", "yellow"]

console.log(dog1 instanceof Dog);   // true
console.log(dog1 instanceof Animal);// true


/**
 * 构造函数实现继承 实现利用父类构造函数并向父类构造函数传参的目的 
 * 无法继承父类原型对象上的属性和方法
 * 
 */
log('------ 构造函数继承')
function Animal1() {

}
Animal1.prototype.eat = function() {

}

function Dog1(name) {
    Animal.call(this, name)
}

var dog1 = new Dog1('旺财');
var dog2 = new Dog1('钢镚');
log('===', dog1)
dog2.colors.push('yellow');

console.log(dog1.colors); // ["red", "blue"]
console.log(dog2.colors); // ["red", "blue", "yellow"]

console.log(dog1 instanceof Dog1);   // true
console.log(dog2 instanceof Animal1);// false

// console.log(dog1.eat()); // 报错

/**
 * 
 */
log('-------------组合继承')
function Animal2(name) {
    log('constructor')
    this.name = name;
    this.colors = ['red','blue'];
}
Animal2.prototype.eat = function () {
    log(this.name + ' eat')
}

function Dog2(name) {
    Animal2.call(this, name);
}
Dog2.prototype = new Animal2()
var dog1 = new Dog2('dog1');   // 第二次调用
var dog2 = new Dog2('dog2');   // 第三次调用
dog1.colors.push('yellow');
console.log(dog1.name);  // 输出dog1
console.log(dog2.colors);// 输出['red','blue']
console.log(dog2.eat()); // 输出dog2 is eatting

log('------------寄生继承')

function Animal(name) {
    this.name = name;
    this.colors = ['red','blue'];
}
Animal.prototype.eat = function() {
    console.log(this.name + ' is eatting');
}
function Dog(name) {
    Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

var dog1 = new Dog('dog1');
var dog2 = new Dog('dog2');
dog1.colors.push('yellow');
log('dog1', dog1)
console.log(dog1.name);  // 输出dog1
console.log(dog2.colors);// 输出['red','blue']
log(dog1 instanceof Dog)
log(dog1 instanceof Animal)
console.log(dog2.eat()); // 输出dog2 is eatting




console.log(111)

/**
 * @desc: 寄生组合继承
 */

