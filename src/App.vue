<template>
	<div>
		<router-link to='/home'>home</router-link>&nbsp;&nbsp;
		<router-link to='/about'>about</router-link>&nbsp;&nbsp;
		<router-link to='/my'>my</router-link>
		<router-view />
	</div>
</template>

<script lang="ts">
	export default {
		name: 'App',
		setup() {}
	}
</script>
