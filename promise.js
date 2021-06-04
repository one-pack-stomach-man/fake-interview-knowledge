
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

// PromiseB.prototype.
const then = function (success, error) {
    log('then action');
    log('--- set success function and failure function')
    let successFn = typeof success == 'function' ? success : v => v;
    let errorFn = typeof error === 'function' ? error : r => {
        throw r;
    };

    if (this.state == PENDING) {
        log('state is pending:::::')
        this.resolveCallbacks.push(successFn)
        this.rejectCallbacks.push(errorFn)
    }

    if (this.state == RESOLVED) {
        log('state is resolved :::::')
        successFn(this.value)
    }

    if (this.state == REJECTED) {
        log('state is rejected :::::')
        errorFn(this.value)
    }
    return this;
}

class PromiseB {
    constructor(fn) {
        log('constructor:::', fn);
        this.state = PENDING;
        this.value = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try {
            log('调用传进new Promise的参数 把promise resolve 和 Promise.reject 作为参数 调用传进的回调函数')
            fn(PromiseB.resolve.bind(this), PromiseB.reject.bind(this))
        } catch(err) {
            PromiseB.reject(err);
        }

        PromiseB.prototype.then = then.bind(this);
    }

    static resolve(value) {
        log('--- 执行resolve函数')
        this.state = RESOLVED;
        this.value = value;
        log('--- 查看暂存的 resolve functions', this.resolveCallbacks)
        this.resolveCallbacks.map(fn => fn(this.value));
    }

    static reject(value) {
        log('--- 执行reject函数')
        this.state = REJECTED;
        this.value = value;
        log('--- 查看暂存的 reject functions', this.rejectCallbacks)
        this.rejectCallbacks.map(fn => fn(this.value));
    }


}



new PromiseB((resolve, reject) => {
    console.log('--- 回调函数开始执行')
    setTimeout(() => {
        resolve(100);
    }, 3000)
}).then(value => {
    log('then::', value);
    console.log(value);
}, error => {
    console.log(error);
}).then(() => {
    log('second then')
})