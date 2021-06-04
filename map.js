Array.prototype.myMap = function(cb) {
    log('this;;:;', this);
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i));
    }
    return res;

};

var a = [1, 2];
a = a.myMap((item, index) => {
    log('111', item);
    return item + 1;
})
log('aaa:::', a);