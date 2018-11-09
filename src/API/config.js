// 请求基本配置
const URLS = {
    // 'local': 'http://193.112.69.104:8091'
    'local': 'https://flw.wizzstudio.com'
}

const baseURL = URLS['local'];
const surpportMethods = ['GET', 'POST', 'PUT', 'DELETE', 'GET_RESTFUL'] // 支持的方法
const defaultHeaders = {'Authorization': ''}
const appRelevant = {'appid': 'wx67618f9dbb31145d', 'appsecret': 'cc95806e95b3973dfb04eaf229d84d43'}

export {baseURL, surpportMethods, defaultHeaders, appRelevant}
