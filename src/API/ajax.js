import { baseURL, supportMethods } from './config'
import { toast, ajax } from '../common/scripts/wxUtil'
import statusCodeFilter from './statusCodeFilter'

const HOST_URL = baseURL || ''
const SUPPROT_METHODS = supportMethods || ['GET']

function argumentsErr () {
    throw new Error('[arguments missing]: check RURL & METHOD')
}

function methodErr () {
    throw new Error('[http method error]: check METHOD params in ajax')
}

function _normalRequest (config = {}) {
    return new Promise((resolve, reject) => {
        config.fail = err => {
           toast('请求失败' + err.errMsg)
           reject(err)
        }

        config.success = res => {
            if (res.statusCode !== 200) {
                statusCodeFilter(res.statusCode)
                reject(res.statusCode)
            } else {
                resolve(res.data)
            }
        }
        ajax(config)
    })
}

function _configHeader (headers = {}) {
    return headers;
}

function _configRequest (config = {}) {
    return _normalRequest(config)
}

export default (rurl = argumentsErr(), method = methodErr(), data = null, headers = {'Content-Type': 'application/json'}) => {
    let _method = method.toUpperCase()
    let _url = HOST_URL + rurl;

    if (SUPPROT_METHODS[_method]) {
        methodErr()
    } else {
        return _configRequest({
            url: _url,
            method: _method,
            header: _configHeader(headers),
            data: data
        })
    }
}