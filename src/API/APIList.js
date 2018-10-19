// 用来填写现成的ajax请求
// 注意要设置right权限以区分不同用户
export default {
    login: {url: '/user/login', method: 'post'}, // 用户登录
    getInterface: {url: '/network/image', method: 'post'}, // 查询人脉网页面
}