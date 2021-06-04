class ObserverFake {
    constructor() {
        /**
         * 数据结构: 
         * { 
         *  hello: [cb1, cb2]
         * }
         */
        this.store = {};
    }

    on(key, cb) {
        if (this.store[key] == undefined) {
            this.store[key] = [cb];
        } else {
            this.store[key].push(cb);
        }
    }
    off() {
        this.store[key] = [];
    }
    once(key, cb) {
        this.store[key] = [cb];
    }
    emit(key) {
        this.store[key].map(cb => cb())
    }
}

let observer = new ObserverFake();
observer.on('hello', () => log('hello'));
observer.on('hello', () => log('hello1'));
observer.emit('hello')