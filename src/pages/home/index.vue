<!-- home -->
<template>
	<div id="home">
		home
		<div> store----{{ name }}--{{ obj }}<async-demo /> </div>
		<el-button type="primary"> 主要按钮 </el-button>
		<HelloWorld msg="Hello Vue 3.0 + Vite" @change="changed" />
	</div>
</template>

<script lang="ts">
	import { ref, reactive, onMounted, getCurrentInstance, defineAsyncComponent } from 'vue'
	const HelloWorld: Object = defineAsyncComponent(() => import('/@/components/HelloWorld.vue'))
	export default {
		name: 'Home',
		components: {
			HelloWorld: HelloWorld
		},
		setup(props: Object, context: Object) {
			const { ctx }: any = getCurrentInstance()
			console.log(ctx.$api)
			//请求案例
			ctx.$api('Login', { name: 222 }).then((res: object) => {
				console.log(res)
			})
			//定义数据
			let obj = reactive({
				a: 1,
				b: 2
			})
			let name = ref('')
			//生命周期
			onMounted(() => {
				console.log(this, context, ctx, obj)
				name.value = ctx.$store.state.name
				obj.a = 9878
			})
			//子组件传值
			const changed = (a: any) => {
				console.log(a)
			}

			return {
				name,
				obj,
				changed
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './home.scss';
</style>
