export default {
	Login: {
		//登陆 换取token
		url: '/login'
	},
	HomePageList: {
		//获取商城首页数据
		url: '/mall/homepage/detail',
		header: {
			'Content-Type': 'application/json', //可省略默认
			isIgnore: true //是否过滤拦截，默认false
		}
	}
}
