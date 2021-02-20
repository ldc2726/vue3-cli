/**
 * 查询字典判断是否存在key
 * @param key
 * @param object
 */
export const isValidKey = function (key: string | number | symbol, object: object): key is keyof typeof object {
	return key in object
}

/**
 *
 * @param {*} key url 接口
 * @param {*} data 传输的数据
 */
export const getApi = async function (key: string, data: any = {}) {
	const res = await import('/@/http/index')
	return res.default[key](data)
}
