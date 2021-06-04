Function.prototype.mycall = function(context) {
    const symbol = Symbol();
    const args = [...arguments].slice(1);
    context[symbol] = this;
    // log('this;::', this, args);
    const res = context[symbol](...args);
    // log('res:::', res);
    delete context[symbol]
    return res;
}

Function.prototype.myApply = function(context) {
    const symbol = Symbol();
    const args = [...arguments][1] || [];
    context[symbol] = this;
    // log('this;::', this, args);
    const res = context[symbol](...args);
    // log('res:::', res);
    delete context[symbol]
    return res;
}

Function.prototype.myBind = function(context) {
    const symbol = Symbol();
    const args = [...arguments].slice(1);
    context[symbol] = this;

    return function() {
        const res = context[symbol](...args);
        delete context[symbol]
        return res;
    }
    
}

const obj = {
    name: 'obj',
}

function foo() {
    log('name:::::', this.name);
}

foo.mycall(obj);
foo.myApply(obj);
foo.myBind(obj)();