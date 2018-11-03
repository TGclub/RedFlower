// 集大成者，便于basePage引用
import ajax from './ajax'
import API from './APIList'

export default (apiKey, data = {}, headers) => {
    let api = API[apiKey];

    if(!api) {
        return ajax('/notFound', 'get')
    } else {
        return ajax(api.url, api.method, data, headers)
    }
}