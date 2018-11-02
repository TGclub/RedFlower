// 微信接口
// 在组件内部保留抽象，方便日后替换掉wx接口模块

/**
 * 调用微信接口(仅在该脚本内部使用)
 * @param wxAPI {function} config {object}
 * @return {Promise}
 */
const _configFn = (wxAPI, config = {}) => {
    return new Promise((resolve, reject) => {
        config.success = res => (resolve(res));
        config.fail = err => (reject(err));
        wxAPI(config);
    })
}

/**
 * 通过wx.request发起ajax请求
 * @param url {String} method {string} data {object} header {object}
 * @return {Promise}
 */
const ajax = ({url, method, data, header}) => {
    return _configFn(wx.request, {
        url: url,
        method: method,
        data: data,
        header: header
    })
}

const wxLogin = () => {
    return _configFn(wx.login);
}

const wxGetUserInfo = () => {
    // _configFn(wx.getSetting)
    // .then((res) => {
    //     if(res.authSetting['scope.userInfo']) {
    //         return _configFn(wx.getUserInfo);
    //     }
    // })
    return _configFn(wx.getUserInfo);
}

const getSystemInfo = () => {
    return _configFn(wx.getSystemInfo);
}

/**
 * 跳转
 * @param url {String} 跳转相对路径
 * @return {Promise}
 */
const tabBarURL = ['./community', './contacts', './home']
const jumpTo = url => {
    if (url === tabBarURL[0] || url === tabBarURL[1] || url === tabBarURL[2]) {
        return _configFn(wx.switchTab, {url});
    } else {
        return _configFn(wx.navigateTo, {url});
    }
}

const toast = (title, icon = 'none', duration = 1500, hasMask = false) => {
    return _configFn(wx.showToast, {
        title: title, // 提示的内容
        icon: icon, // 图标, 有效值为'none'、'success'、'fail'
        duration: duration, // 提示持续的时间(ms)
        mask: hasMask // 是否显示透明蒙层，防止触摸穿透
    })
}

export {
    ajax, // 发起ajax请求
    wxLogin, // 登录
    wxGetUserInfo, // 获取用户信息
    getSystemInfo, // 获取系统信息
    jumpTo, // page跳转
    toast // 显示消息提示框
}