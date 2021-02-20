import axios from 'axios'
// import Store from '/@/store'
export const $post = (url: string, data: object, header = {}) => {
	const postda = {
		...data
	}
	return axios.post(`${url}`, JSON.stringify(postda), {
		headers: {
			'Content-Type': 'application/json',
			...header
		}
	})
}

export const $get = (url: string, params = {}, header = {}) => {
	return axios.get(`${url}`, {
		params: params,
		headers: {
			'Content-Type': 'application/json',
			...header
		}
	})
}
