<template>
	<div>
		<h2>学生姓名: {{ stu_name }}</h2>
		<h2>学生性别: {{ sex }}</h2>
		<h2>学生年龄: {{ age }}</h2>
		<button @click="sendNameToSchool">click to call global bus</button>
	</div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
	name: "student-component",
	data() {
		return {};
	},
	props: ["stu_name", "age", "sex"],

	methods: {
		sendNameToSchool() {
			pubsub.publish("studentName", this.stu_name);
		},
	},
};
</script>

<style scoped>
</style>