// import { Message } from 'element-ui';
import store from '/@/store'
import Axios from 'axios'
import Config from './config'
import { isValidKey } from './../utils/common'
// const Axios = import('axios')

const index = process.env.NODE_ENV != undefined ? process.env.NODE_ENV : 'test'
let val
if (isValidKey(index, Config)) {
	val = Config[index]
}

const instance = Axios.create({
	baseURL: val
})
/**
 * 请求拦截操作
 */
let num = 0
instance.interceptors.request.use(
	(config: any) => {
		if (!config.headers.isIgnore) {
			if (num == 0) {
				store.state.common.isSearch = true
			}
			num++
		}
		return config
	},
	(error: object) => {
		return Promise.reject(error)
	}
)
/**
 * 响应拦截操作
 */
instance.interceptors.response.use(
	(response: any) => {
		if (!response.config.headers.isIgnore) {
			num--
			if (num == 0) {
				store.state.common.isSearch = false
			}
			if (response.data.Code) {
				switch (response.data.Code) {
					case 200:
						return response
					case 403:
						// Message.warning(response.data.Message);
						store.commit('loginOut')
						return Promise.reject(response)
					case 406:
						// Message.warning(response.data.Message);
						store.commit('loginOut')
						return Promise.reject(response)
					default:
						// Message.warning(response.data.Message);
						return Promise.reject(response)
				}
			} else {
				return Promise.resolve(response)
			}
		} else {
			return Promise.resolve(response)
		}
	},
	(error: object) => {
		if (num > 0) {
			num--
		}
		// Message.warning('系统繁忙，请稍后再试,错误码：' + error.response.data.status);
		if (num == 0) {
			store.state.common.isSearch = false
		}
		return Promise.reject(error)
	}
)
