<template>
	<div id="app">
		<school />
		<student :stu_name="'xxx'" :age="18" :sex="'male'"/>
	</div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
	name: "App",
	components: {
		Student,
		School,
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
