var log = console.log;

/**
 * JSON的原理就是利用script标签没有跨域限制 通过src指向一个ajax的url 最后跟一个callback
 */
var jsonp = function(url, data, cb) {
    var cbName = 'callback_' + new Date().getTime();

    const queryString = normalLizeParams(data);
    log('queryString::', queryString);
    const hasIndex = url.indexOf('?') !== -1;
    url = `${url}${queryString}&jsoncallback=${cbName}`;
    log('url:::', url);
    const script = document.createElement('script');
    script.src = url;
    window[cbName] = function(data) {
        cb(data)
        document.body.removeChild(script);
    }
    document.body.appendChild(script);
}

function normalLizeParams(data) {
    if (!data || Object.keys(data).length == 0) {
        return ''
    }
    let res = '?'
    Object.keys(data).map(key => {
        res = `${res}${key}=${data[key]}&`
    })
    return res.slice(0, -1);
}

const param = {
    name: 'AAA',
    age: 22,
    address: '广东',
}

jsonp('https://www.runoob.com/try/ajax/jsonp.php', param, function (data) {
  console.log('dddd:::', data)
})