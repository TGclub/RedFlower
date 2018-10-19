// 请求基本配置
const URLS = {
    'local': 'http://193.112.69.104:8092'
};

const baseURL = URLS['local'];
const surpportMethods = ['GET', 'POST', 'PUT', 'DELETE', 'GET_RESTFUL'] // 支持的方法
const defaultHeaders = {'Authorization': ''}

export {baseURL, surpportMethods, defaultHeaders};