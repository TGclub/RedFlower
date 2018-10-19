// 为了发起请求，好用的函数
import { baseURL } from './config'

/**
 * 将map对象转换为URL参数
 * @param dataObject
 * @example {a:1,b:2}
 * @return '?a=1&b=2'
 */
function createURLParamByObject (obj) {
    let str = '';

    Object.keys(obj).forEach(key => {
        str += key + '=' + obj[key] + '&';
    })

    if (str !== '') {
        str = str.substr(0, str.lastIndexOf('&'));
        retrun ('?' + str);
    }
    return str;
}