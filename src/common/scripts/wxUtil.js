// 微信接口
import {appRelevant} from '../../API/config'

/**
 * 调用微信接口(仅在该脚本内部使用)
 * @param wxAPI {function} config {object}
 * @return {Promise}
 */
const _configFn = (wxAPI, config = {}) => {
    return new Promise((resolve, reject) => {
        // 为非wx.request微信接口指定默认success和fail函数
        if (!config.success) {
            config.success = res => (resolve(res));
        }
        if (!config.fail) {
            config.fail = err => (reject(err));
        }
        wxAPI(config);
    })
}

/**
 * 通过wx.request发起ajax请求
 * @param url {String} method {string} data {object} header {object}
 * @return {Promise}
 */
const ajax = (config) => {
    return _configFn(wx.request, config)
}

const wxLogin = () => {
    return _configFn(wx.login);
}

const wxGetUserInfo = () => {
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
const tabBarURL = ['./community', './index', './home']
const jumpTo = url => {
    if (url === tabBarURL[0] || url === tabBarURL[1] || url === tabBarURL[2]) {
        _configFn(wx.switchTab, {url});
    } else {
        _configFn(wx.navigateTo, {url});
    }
}

const jumpBack = url => {
    if (url === tabBarURL[0] || url === tabBarURL[1] || url === tabBarURL[2]) {
        _configFn(wx.switchTab, {url});
    } else {
        _configFn(wx.redirectTo, {url});
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

const setStorage = (key, value) => {
    return _configFn(wx.setStorage, {key: key, data: value});
}

const cleanStorage = () => {
    return _configFn(wx.clearStorage, {});
}

const getStorage = (key) => {
    return _configFn(wx.getStorage, {key: key});
}

const getSetting = (res) => {
    return _configFn(wx.getSetting, {});
}

const getAccessToken = () => {
    return ajax({
        url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appRelevant['appid'] + '&secret=' + appRelevant['appsecret'],
        method: 'GET'
    })
}

export {
    ajax, // 发起ajax请求
    wxLogin, // 登录
    wxGetUserInfo, // 获取用户微信信息
    getSystemInfo, // 获取系统信息
    jumpTo, // page跳转
    jumpBack, // page返回
    toast, // 显示消息提示框
    setStorage, // 设置cookie
    cleanStorage, // 清除cookie
    getStorage, // 获取cookie
    getSetting, // 获取用户授权信息
    getAccessToken, // 获取用于生成二维码的Access_token
}