<template>
	<div>
		<h2>学生姓名: {{ name }}</h2>
		<h2>学生性别: {{ sex }}</h2>
		<h2>学生年龄: {{ age }}</h2>
		<button @click="sendNameToSchool">click to call global bus</button>
	</div>
</template>

<script>
export default {
	name: "student-component",
	data() {
		return {};
	},
	props: ["name", "age", "sex"],

	methods: {
		sendNameToSchool() {
			this.$bus.$emit("studentName", this.name);
		},
	},
	beforeDestroy() {
		this.$bus.$off("studentName");
	},
};
</script>

<style>
</style>