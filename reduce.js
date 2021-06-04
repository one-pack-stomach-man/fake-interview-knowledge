Array.prototype.myReduce = function (cb, initialValue) {
    let res = initialValue;
    if (initialValue == undefined && this.length < 1) {
        throw new Error('reduce 方法参数不全')
    }
    
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            continue;
        }
        res = cb(res, this[i]);
    }
    return res;
};
var a = [1];
log('1111, ', a.reduce((acc, cur) => cur + acc));
log('1111, ', a.myReduce((acc, cur) => cur + acc, 0));