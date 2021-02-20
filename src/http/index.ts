// 导入所有接口
import { $post, $get } from '/@/http/request'
import apiList from '/@/http/api'
// const apiList = api

const api: object = {}
interface IPerson {
	[key: string]: object
}
for (const i in apiList) {
	;(<IPerson>api)[i] = (data: object) => {
		const url = apiList[i].url
		let type = 'post'
		let header = {}
		if (apiList[i].type) {
			type = apiList[i].type
		}
		if (apiList[i].header) {
			header = apiList[i].header
		}
		if (type === 'get') {
			return $get(url, data, header)
		} else {
			return $post(url, data, header)
		}
	}
}
console.log(api)
export default api
