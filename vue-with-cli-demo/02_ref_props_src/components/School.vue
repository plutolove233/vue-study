<template>
	<div id="student" class="demo">
		<!-- 组件的结构 -->
		<h2>学校地址: {{ address }}</h2>
		<h2>学校名称: {{ name }}</h2>
		<button @click="showMsg">click me to show</button>
	</div>
</template>

<script>
// 组件的交互代码
export default {
	name: "school-component",
	data() {
		return {
			address: "北农路2号",
			name: "NCEPU",
		};
	},
	methods: {
		showMsg() {
			alert(this.name);
		},
	},
};
</script>

<style>
.demo {
	background-color: orange;
}
</style>