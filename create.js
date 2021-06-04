function create(obj, props) {
    function F() {

    }
    F.prototype = obj;

    let ret = new F();
    log('ret::', ret);

    if (props !== undefined && props !== null) {
        Object.defineProperties(ret, props);
    }
    return ret;
}

const obj = {
    age: 23,
    name: 'AAA'
}

const myObj1 = create(obj, {
    address: {
        value: '广东'
    }
});

log('obj:::', myObj1)

