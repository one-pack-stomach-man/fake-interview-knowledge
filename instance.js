function myInstanceOf(left, right) {
    if (left == null) {
        return false
    }
    while(true) {
        log('left: ', left)
        log('right: ', right)
        if (!left) {
            return false;
        }
        if (left.__proto__ == right.prototype) {
            return true
        }
        left = left.__proto__;
    }
}

function Person(name) {
    this.name = name;
}

const p1 = new Person('p1');
log('---', myInstanceOf(p1, Person));