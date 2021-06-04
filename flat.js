const arr = [1, [2, 3], [4, [5, 6]]]
console.log(arr.flat(1))         // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(Infinity))  // [1, 2, 3, 4, 5, 6]

function myFlat (arr, depth = 0) {
    // log('start::: ', arr)
    // log('start::: ', depth)
    let res = [];
    const isArr = (arr) => {
        return Object.prototype.toString.call(arr) == '[object Array]'
    }

    arr.forEach(element => {
        if (!isArr(element) || depth <= 0) {
            res.push(element)
            return;
        }
        res.push(...myFlat(element, depth - 1));

    });
    return res;
}

Array.prototype.myFlat = function(depth) {
    return myFlat(this, depth);
}

log(11111, myFlat(arr, 1))
log(11111, arr.myFlat(1))
log(11111, arr.myFlat(2))