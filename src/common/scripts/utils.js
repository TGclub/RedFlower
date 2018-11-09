// 实用的工具函数

const isInputLegal = str => {
    // if(str.replace(/[^(.，。,"'“‘?？！!+-()（）\u4E00-\u9FA5A-Za-z0-9\p{P})]/g, '') === str) {
    if (str.replace(/[@#$%^&]/g, '') === str) {    
        return true
    } else {
        return false
    }
}

// const getPerlUrl = url => {
//     let infoIdx = url.indexOf('?');
//     let cutIdx = url.indexOf('/');
//     if (infoIdx !== -1) {
//         return url.slice(cutIdx, infoIdx);
//     } else {
//         return url.slice(cutIdx);
//     }
// }

export {
    isInputLegal, // 输入过滤器
    // getPerlUrl, // 提取路径
}