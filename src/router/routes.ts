const Home = () => import('/@/pages/home/index.vue')
const About = () => import('/@/pages/about.vue')
const My = () => import('/@/pages/my.vue')

export default [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/About',
		name: 'About',
		component: About
	},
	{
		path: '/My',
		name: 'My',
		component: My
	}
]
