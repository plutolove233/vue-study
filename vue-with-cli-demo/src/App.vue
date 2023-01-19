<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<h1 v-text="msg" ref="title"></h1>
		<button @click="showDOM">click me to show dom</button>
		<School ref="sch" id="sch" />

		<h1>props demo</h1>
		<Student :age="18" :name="'yizhigopher'" :sex="'male'" />
	</div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
	name: "App",
	components: {
		School,
		Student,
	},
	data() {
		return {
			msg: "Hello VUE",
		};
	},
	methods: {
		showDOM() {
			console.log(this.$refs);
			console.log(this.$refs.title); // 获取真实dom元素
			console.log(this.$refs.sch);
			console.log(document.getElementById("sch"));
		},
	},
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
