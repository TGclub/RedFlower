// 实用的工具函数
const isInputLegal = str => {
    if (str.replace(/[@#$%^&]/g, '') === str) {    
        return true
    } else {
        return false
    }
}

export {
    isInputLegal // 输入过滤器
}