var log = console.log;

/**
 * Vue的mvvm核心是编译 Complie 数据劫持 Observer 数据监测 Watcher
 */
class Vue {
    constructor(opts) {
        this.$el = opts.el;
        this.$data = opts.data;

        if (this.$el) {
            new Observer(this.$data);
            new Compile(this.$el, this);
        }
    }


}

var updater = {
    textUpdater(node, value) {
        node.textContent = value;
    },
    modelUpdaer(node, value) {
        node.value = value;
    }

}

var DirectiveMap = {
    text(node, vm, expr) {
        let updateFn = updater['textUpdater'];

        let value = utils.getTextVal(vm, expr);

        updateFn && updateFn(node, value);
    },

    model(node, vm, expr) {
        let updateFn = updater['textUpdater'];
        let value = utils.getVal(vm, expr);
        updateFn && updateFn(node, value);
    }
}

let utils = {
    getVal(vm, expr) {
        expr = expr.split('.');
        // 实现watch
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    },
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}])+\}\}/, (...arg) => {
            return this.getVal(vm, arg[1].trim())
        })
    }
}

class Compile {

    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;

        if (this.el) {
            let fragment = this.node2fragment(this.el);

            // 编译 提取想要的元素节点 和 文本节点
            this.compile(fragment);

            // 将编译好的 fragment 放到页面中
            this.el.appendChild(fragment);
        }
    }

    isElementNode(el) {
        return typeof el !== 'string'
    }

    /**
     * 获取传入的根元素 将该元素内的所有节点移入文档碎片
     * @param {} node 
     */
    node2fragment(node) {
        let fragment = document.createDocumentFragment();

        let firstChild;

        while (firstChild = node.firstChild()) {
            fragment.appendChild(firstChild)
        }
        return fragment;
    }

    /**
     * 编译
     * @param {*} fragment 
     */
    compile(fragment) {
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                // 编译元素节点
                this.compileElement(node);
                // 递归编译
                this.compile(node);
            } else {
                this.compileText(node);
            }
        })
    }

    compileText(node) {
        DirectiveMap['text'](node, this.vm,)
    }

    /**
     * 编译节点元素
     * @param {*} node 
     */
    compileElement(node) {
        let attrs = node.attributes;

        Array.from(attrs).forEach(attr => {
            let attrName = attr.name;

            if (this.isDirective(attrName)) {
                let expr = attr.value;
                let directive = attrName.slice(2);
                DirectiveMap[directive] && DirectiveMap[directive](node, this.vm, expr);

            }
        })
    }

    isDirective(attrName) {
        ['v-model', 'v-text'].includes(attrName);
    }

}

class Observer {

    constructor(data) {
        this.observe(data);
    }

    observe(data) {
        if (!data || typeof data !== 'object') {
            return;
        }

        Object.keys(data).map(key => {
            this.defineReactive(data, key, data[key]);
            this.observe(data[key])
        })
    }

    defineReactive(obj, key, value) {
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            enumerable: true,
            writable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newVal) {
                // 更改值的时候调用的方法
                if (newVal != value) {
                    if (typeof newVal == 'object') {
                        this.observe(newVal);
                    }
                    // 通知更新
                    dep.notify(newVal);
                    value = newVal;
                }
            }
        })
    }
}

class Dep {
    constructor() {
        this.subs = []
    }

    addSub(watcher) {
        this.subs.push(watcher);
    }

    notify(newVal) {
        this.subs.forEach(watcher => watcher.update(newVal));
    }
}

/**
 * 在 Watch中 保证 data的get之前Dep.target 是当前的watcher 取完值之后 再改为null
 * 在 取值的时候 会收集当前的watcher 在set的时候 会通知每个收集的watcher 执行watcher的回调函数
 */

class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;

        this.value = this.get();
    }

    get() {
        Dep.target = this;
        let value = utils.getVal(this.vm, this.expr);
        Dep.target = null;
        return value;
    }

    update(newVal) {
        let oldVal = this.value;
        if (newVal !== oldVal) {
            this.cb(newVal);
        }
    }
}


let vm = new Vue({
    el: '#app',
    data: function () {
        return {
            fake: 111,
        }
    }
})


