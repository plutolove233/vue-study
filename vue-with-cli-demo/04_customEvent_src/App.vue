<template>
	<div id="app">
		<!-- <student @getName="getName" @click="show"></student> -->
		<student ref="stu" @click.native="show" />
	</div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
	name: "App",
	components: {
		Student,
	},
	methods: {
		getName(e, ...param) {
			console.log(e, param);
		},
		show() {
			alert(123);
		},
	},
	mounted() {
		this.$refs.stu.$on("getName", this.getName);
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
