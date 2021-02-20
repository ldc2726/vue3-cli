import { createStore } from 'vuex'
interface State {
	name: string
}

export default createStore({
	state: <State>{
		name: 'hello word!'
	}
})
