// 用来填写现成的ajax请求
// 注意要设置right权限以区分不同用户
export default {
    login: {url: '/user/login', method: 'post'}, // 用户登录
    getUserInfo: {url: '/user/userInfo', method: 'get'}, // 获取当前登录用户信息
    getFriendInfo: {url: '/network/getOneUserInfo', method: 'get'}, // 根据用户id查询用户信息
    getNetInfo: {url: '/network/getUserInfo', method: 'post'}, // 根据用户id查询人脉网
    getNetMembers: {url: '/network/getMyAllUsers', method: 'get'}, // 根据人脉网id查询人脉网
    postUserInfo: {url: '/user/updateUserInfo', method: 'put'}, // 将用户信息发送给服务器
    getNetList: {url: '/network/getMyNetworks', method: 'get'}, // 获取用户人脉圈列表
    createNewNet: {url: '/network/createNetwork', method: 'post'}, // 创建新的人脉圈
    inviteFriend: {url: '/network/inviteUser', method: 'post'}, // 邀请好友加入人脉圈
}