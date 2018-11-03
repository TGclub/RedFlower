// 用来填写现成的ajax请求
// 注意要设置right权限以区分不同用户
export default {
    login: {url: '/user/login', method: 'post'}, // 用户登录
    getUserInfo: {url: '/user/userInfo', method: 'get'}, // 获取登录后用户信息
    getNetList: {url: '/network/getMyNetworks', method: 'get'}, // 获取用户人脉圈列表
    createNewNet: {url: '/network/createNetwork', method: 'post'}, // 创建新的人脉圈
    getInterface: {url: '/network/myNetworks', method: 'get'}, // 查询人脉网页面
}