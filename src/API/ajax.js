// 快速配置，真正发起请求的函数
import { baseURL, supportMethods, defaultHeaders } from './config'
import { toast, ajax } from '../common/scripts/wxUtil'
import statusCodeFilter from './statusCodeFilter'

const HOST_URL = baseURL || ''; // 根域名
const SUPPROT_METHODS = supportMethods || ['GET']; // 支持的方法
const DEFAULT_HEADERS = defaultHeaders || {} // 默认请求头

function argumentsErr () {
    throw new Error('[arguments missing]: check RURL & METHOD');
}

function methodErr () {
    throw new Error('[http method error]: check METHOD params in ajax');
}

function _normalRequest (config = {}) {
    return new Promise((resolve, reject) => {
        config.fail = err => {
           toast('请求失败' + err.errMsg);
           reject(err);
        }

        config.success = res => {
            // wx.request只要接收到服务器的返回值就会进入success
            // 一般请求的话应该够用了吧。。
            if (res.statusCode !== 200) {
                statusCodeFilter(res.statusCode);
                reject(res.statusCode);
            }
            resolve(res.data)
        }

        ajax(config);
    })
}

// 未完成（未考虑缓存）
function _configHeader (headers = {}) {
    return headers;
}

// 未完成（未考虑登陆过期）
function _configRequest (config = {}) {
    return _normalRequest(config);
}

export default (rurl = argumentsErr(), method = methodErr(), data = null, headers = {'Content-Type': 'application/json'}) => {
    let _method = method.toUpperCase();
    let _url = HOST_URL + rurl;

    // 检查请求方式是否合法
    if (SUPPROT_METHODS[_method]) {
        methodErr();
    } else {
        _configRequest({
            url: _url,
            method: _method,
            header: _configHeader(headers),
            data: data
        })
    }
}