<template>
	<div>
		<h2>学生姓名: {{ name }}</h2>
		<h2>学生性别: {{ sex }}</h2>
		<h2>学生年龄: {{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: "student-component",
	data() {
		return {};
	},
	//简单接收
	props: ["name", "age", "sex"],

    // notice props不能修改

	//接收的同时对类型限制
	//   props: {
	//     name: String,
	//     sex: String,
	//     age: Number,
	//   },

	// 接收时设置默认值
	// props: {
	// 	name: {
	// 		type: String,
	// 		required: true,
	// 	},
	// 	sex: {
	// 		type: String,
	// 		default: "male",
	// 	},
	// 	age: {
	// 		type: Number,
	// 		default: 18,
	// 	},
	// },
};
</script>

<style>
</style>