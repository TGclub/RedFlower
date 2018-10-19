// 用来解析状态码，不止用来调试，也用来给用户反馈
import { toast } from '../common/scripts/wxUtil'

const notFound = () => {
    return false;
}

const forbidden = () => {
	toast('请求拒绝', 'none', 3000);
}

const serverError = () => {
    toast('服务端发生了严重的错误，已经反馈给开发者，请退出后耐心等待！', 'none', 3000);
}

const globalError = (code) => {
    toast(`请求服务端错误，错误码：${code}`, 'none', 3000);
}

const badGateWay = () => {
	toast(`插错了口`, 'none', 3000)
}

const codes = {
	'404': notFound,
	'401': forbidden,
	'500': serverError,
	'502': badGateWay,
	'*': globalError
}

export default (code, cb) => {
	if (codes[code.toString()]) {
		codes[code.toString()](cb)
	} else {
		codes['*']()
	}
}