import App from './App.vue'
import './index.css'
import { getApi } from './utils/common'
import { createApp, defineAsyncComponent } from 'vue'
import router from './router/index'
import store from './store/index'
import '/@/http/axios'
import ElementPlus from 'element-plus'
// console.log(ElementPlus)
console.log(router)
import 'element-plus/lib/theme-chalk/index.css'
// import api from '@/http/index'
// console.log(api)
const Demo: Object = defineAsyncComponent(() => import('/@/components/demo.vue'))

const app = createApp(App)
app.component('AsyncDemo', Demo)
app.config.globalProperties.$api = getApi
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
