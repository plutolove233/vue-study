<template>
	<div id="app">
		<student />
		<test></test>
	</div>
</template>

<script>
import Student from "./components/Student.vue";
import Test from "./components/Test.vue";

export default {
	name: "App",
	components: {
		Student,
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
