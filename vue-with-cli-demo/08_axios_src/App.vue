<template>
	<div id="app">
		<test />
	</div>
</template>

<script>
import Test from "./components/Test.vue";

export default {
	name: "App",
	components: {
		Test,
	},
	methods: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
